import {dateValid,validateItem} from './library.ts';
import type {MediaItem} from './library.ts';
export type Provider='books'|'series'|'music'|'films'|'games';
export interface Credentials {tmdb:string;rawg:string}
export const PROVIDERS:Record<Provider,{name:string;url:string}>={books:{name:'Open Library',url:'https://openlibrary.org'},series:{name:'TVmaze',url:'https://www.tvmaze.com'},music:{name:'MusicBrainz',url:'https://musicbrainz.org'},films:{name:'TMDB',url:'https://www.themoviedb.org'},games:{name:'RAWG',url:'https://rawg.io'}};
const obj=(v:unknown):Record<string,unknown>=>v&&typeof v==='object'&&!Array.isArray(v)?v as Record<string,unknown>:{};
const str=(v:unknown,max=160)=>typeof v==='string'?v.slice(0,max):'';
const list=(v:unknown):unknown[]=>Array.isArray(v)?v:[];
const date=(v:unknown)=>typeof v==='string'&&dateValid(v)?v:'';
export function catalogRequest(provider:Provider,query:string,credentials:Credentials):{url:string;headers:Record<string,string>} {
 if(!query.trim()||query.length>160)throw new Error('Enter a search of 1–160 characters.');
 const q=query.trim(),headers:Record<string,string>={Accept:'application/json'};
 let url:URL;
 switch(provider){
  case 'books':url=new URL('https://openlibrary.org/search.json');url.search=new URLSearchParams({q,limit:'20',fields:'key,title,author_name,first_publish_year,subject'}).toString();break;
  case 'series':url=new URL('https://api.tvmaze.com/search/shows');url.searchParams.set('q',q);break;
  case 'music':url=new URL('https://musicbrainz.org/ws/2/release-group/');url.search=new URLSearchParams({query:q,fmt:'json',limit:'20'}).toString();break;
  case 'films':if(!credentials.tmdb.trim())throw new Error('Add your TMDB API Read Access Token in Catalog connections first.');url=new URL('https://api.themoviedb.org/3/search/movie');url.search=new URLSearchParams({query:q,include_adult:'false',page:'1'}).toString();headers.Authorization='Bearer '+credentials.tmdb.trim();break;
  case 'games':if(!credentials.rawg.trim())throw new Error('Add your RAWG API key in Catalog connections first.');url=new URL('https://api.rawg.io/api/games');url.search=new URLSearchParams({search:q,page_size:'20',key:credentials.rawg.trim()}).toString();break;
  default:throw new Error('Choose a catalog.');
 }
 return {url:url.href,headers};
}
export function catalogItems(provider:Provider,raw:unknown):MediaItem[] {
 const response=obj(raw);
 const entries=provider==='books'?response.docs:provider==='series'?raw:provider==='music'?response['release-groups']:response.results;
 if(!Array.isArray(entries))throw new Error('The catalog returned an unexpected response. Try again later.');
 const result:MediaItem[]=[];
 for(const value of entries.slice(0,20)){
  const row=provider==='series'?obj(obj(value).show):obj(value);
  const base={creator:'',releaseDate:'',description:'',genres:[] as string[],palette:result.length%8,custom:false};
  let item:unknown;
  if(provider==='books'){
   const key=str(row.key);if(!/^\/works\/OL\d+W$/.test(key))continue;
   item={...base,id:'ol-'+key.split('/').pop(),title:str(row.title),type:'book',creator:list(row.author_name).filter(x=>typeof x==='string').join(', ').slice(0,160),description:`Book data from Open Library.${Number.isInteger(row.first_publish_year)?' First published '+row.first_publish_year+'. Exact edition date is not supplied.':''}`,genres:list(row.subject).filter(x=>typeof x==='string').slice(0,6).map(x=>str(x,40)),source:'https://openlibrary.org'+key};
  }else if(provider==='series'){
   if(!Number.isSafeInteger(row.id)||Number(row.id)<=0)continue;
   item={...base,id:'tvmaze-'+row.id,title:str(row.name),type:'series',creator:str(obj(row.network).name)||str(obj(row.webChannel).name),releaseDate:date(row.premiered),description:str(row.summary,5000).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim(),genres:list(row.genres).slice(0,10).map(g=>str(g,40)),source:'https://www.tvmaze.com/shows/'+row.id};
  }else if(provider==='music'){
   const id=str(row.id);if(!/^[0-9a-f-]{36}$/.test(id))continue;
   item={...base,id:'mb-'+id,title:str(row.title),type:'music',creator:list(row['artist-credit']).map(a=>str(obj(a).name)).join(', ').slice(0,160),releaseDate:date(row['first-release-date']),description:`MusicBrainz release group. ${str(row['primary-type'])}. First release: ${str(row['first-release-date'])||'unknown'}. Partial dates are left undated in your calendar.`,source:'https://musicbrainz.org/release-group/'+id};
  }else if(provider==='films'){
   if(!Number.isSafeInteger(row.id)||Number(row.id)<=0)continue;
   item={...base,id:'tmdb-'+row.id,title:str(row.title),type:'film',releaseDate:date(row.release_date),description:str(row.overview,5000),source:'https://www.themoviedb.org/movie/'+row.id};
  }else{
   if(!Number.isSafeInteger(row.id)||Number(row.id)<=0)continue;
   item={...base,id:'rawg-'+row.id,title:str(row.name),type:'game',releaseDate:date(row.released),genres:list(row.genres).slice(0,10).map(g=>str(obj(g).name,40)),description:'Game metadata from RAWG. Release dates can vary by platform and region; edit your saved copy to track the one you want.',source:'https://rawg.io/games/'+encodeURIComponent(str(row.slug)||String(row.id))};
  }
  try{const valid=validateItem(item);if(!result.some(i=>i.id===valid.id))result.push(valid);}catch{/* A malformed catalog row must not break the rest. */}
 }
 return result;
}
export async function searchCatalog(provider:Provider,query:string,credentials:Credentials,signal:AbortSignal,fetcher:typeof fetch=fetch):Promise<MediaItem[]> {
 const request=catalogRequest(provider,query,credentials);
 let response:Response;
 try{response=await fetcher(request.url,{headers:request.headers,signal,credentials:'omit',referrerPolicy:'no-referrer'});}catch{if(signal.aborted)throw new Error('Search cancelled or timed out. Try again.');throw new Error('Catalog unavailable. Check your connection, then try again. Your shelf is safe.');}
 if(!response.ok)throw new Error(response.status===401||response.status===403?'The catalog denied access. Check the credential and account permissions in Catalog connections.':response.status===429?'Catalog rate limit reached. Wait a moment before trying again.':'Catalog unavailable. Try again later.');
 const body=await response.text();if(body.length>2_000_000)throw new Error('Catalog response was too large. Try a more specific search.');
 let raw;try{raw=JSON.parse(body);}catch{throw new Error('Catalog returned unreadable data. Try again later.');}
 return catalogItems(provider,raw);
}
