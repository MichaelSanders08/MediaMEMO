export const TYPES = ['film','game','series','music','book'] as const;
export const STATUSES = ['planned','active','completed','paused','dropped'] as const;
export type MediaType = typeof TYPES[number];
export type Status = typeof STATUSES[number];
export interface MediaItem {id:string;title:string;type:MediaType;creator:string;releaseDate:string;description:string;genres:string[];source:string;palette:number;custom:boolean}
export interface Entry {item:MediaItem;status:Status;rating:number;notes:string;favorite:boolean;addedAt:string;updatedAt:string}
export interface Library {version:1;entries:Entry[]}
export const EMPTY:Library={version:1,entries:[]};
export function dateValid(value:string):boolean {
 if(value==='')return true;
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
 const date=new Date(value+'T12:00:00Z');return !Number.isNaN(date.getTime())&&date.toISOString().slice(0,10)===value;
}
export function validateItem(value:unknown):MediaItem {
 if(!value||typeof value!=='object')throw new Error('Each item must be an object.');
 const item=value as Record<string,unknown>;
 if(typeof item.id!=='string'||!/^[a-zA-Z0-9_-]{1,100}$/.test(item.id))throw new Error('Every item needs a valid id.');
 if(typeof item.title!=='string'||!item.title.trim()||item.title.length>160)throw new Error('Titles must contain 1–160 characters.');
 if(!TYPES.includes(item.type as MediaType))throw new Error('Choose a supported media type.');
 if(typeof item.releaseDate!=='string'||!dateValid(item.releaseDate))throw new Error('Use a real release date in YYYY-MM-DD format, or leave it blank.');
 for(const [key,max] of [['creator',160],['description',5000],['source',1000]] as const)if(typeof item[key]!=='string'||(item[key] as string).length>max)throw new Error(`Invalid ${key}.`);
 if(item.source){let url;try{url=new URL(item.source as string);}catch{throw new Error('Source must be a full HTTP(S) URL.');}if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw new Error('Source must be an HTTP(S) URL without credentials.');}
 if(!Array.isArray(item.genres)||item.genres.length>10||item.genres.some(g=>typeof g!=='string'||g.length>40))throw new Error('Use up to ten short genre labels.');
 return {id:item.id,title:item.title.trim(),type:item.type as MediaType,creator:item.creator as string,releaseDate:item.releaseDate,description:item.description as string,genres:item.genres as string[],source:item.source as string,palette:Number.isInteger(item.palette)&&Number(item.palette)>=0&&Number(item.palette)<8?Number(item.palette):0,custom:item.custom===true};
}
export function validateLibrary(raw:unknown):Library {
 if(!raw||typeof raw!=='object')throw new Error('Choose a MediaMEMO library export.');
 if(new TextEncoder().encode(JSON.stringify(raw)).length>4_000_000)throw new Error('Library data must stay under 4 MB. Shorten long notes or export a smaller collection.');
 const data=raw as Record<string,unknown>;
 if(data.version!==1||!Array.isArray(data.entries)||data.entries.length>2000)throw new Error('Use a version 1 library with no more than 2,000 entries.');
 const ids=new Set();
 const entries=data.entries.map(rawEntry=>{
  if(!rawEntry||typeof rawEntry!=='object')throw new Error('Invalid library entry.');
  const e=rawEntry as Entry,item=validateItem(e.item);
  if(ids.has(item.id))throw new Error('Duplicate item ids in the import.');ids.add(item.id);
  if(!STATUSES.includes(e.status)||!Number.isInteger(e.rating)||e.rating<0||e.rating>5||typeof e.notes!=='string'||e.notes.length>10000||typeof e.favorite!=='boolean')throw new Error('Invalid status, rating, favorite, or notes.');
  if(typeof e.addedAt!=='string'||typeof e.updatedAt!=='string'||Number.isNaN(Date.parse(e.addedAt))||Number.isNaN(Date.parse(e.updatedAt)))throw new Error('Invalid saved date.');
  return {item,status:e.status,rating:e.rating,notes:e.notes,favorite:e.favorite,addedAt:e.addedAt,updatedAt:e.updatedAt};
 });return {version:1,entries};
}
export function addItem(library:Library,item:MediaItem,now=new Date().toISOString()):Library {
 if(library.entries.some(e=>e.item.id===item.id))return library;
 if(library.entries.length>=2000)throw new Error('Your library can hold up to 2,000 items.');
 return validateLibrary({...library,entries:[...library.entries,{item:validateItem(item),status:'planned',rating:0,notes:'',favorite:false,addedAt:now,updatedAt:now}]});
}
export function updateEntry(library:Library,id:string,changes:Partial<Pick<Entry,'status'|'rating'|'notes'|'favorite'|'item'>>,now=new Date().toISOString()):Library {
 const next={...library,entries:library.entries.map(e=>e.item.id===id?{...e,...changes,updatedAt:now}:e)};
 return validateLibrary(next);
}
export function searchItems(items:MediaItem[],query:string,type:string='all'):MediaItem[] {
 const needle=query.trim().toLocaleLowerCase();return items.filter(item=>(type==='all'||item.type===type)&&[item.title,item.creator,item.description,...item.genres].join(' ').toLocaleLowerCase().includes(needle));
}
export function releaseState(date:string,today:string):'unknown'|'upcoming'|'today'|'released' {
 if(!date)return 'unknown';return date===today?'today':date>today?'upcoming':'released';
}
export function localToday(now=new Date()):string {return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
export function calendarExport(entries:Entry[],stamp=new Date().toISOString()):string {
 const escape=(s:string)=>s.replace(/\\/g,'\\\\').replace(/\r\n|\r|\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');
 const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MediaMEMO//Personal Release Calendar//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
 for(const entry of entries.filter(e=>e.item.releaseDate)){
  const date=new Date(entry.item.releaseDate+'T12:00:00Z');date.setUTCDate(date.getUTCDate()+1);
  lines.push('BEGIN:VEVENT',`UID:${entry.item.id}@mediamemo.local`,`DTSTAMP:${stamp.replace(/[-:]/g,'').replace(/\.\d{3}/,'')}`,`DTSTART;VALUE=DATE:${entry.item.releaseDate.replaceAll('-','')}`,`DTEND;VALUE=DATE:${date.toISOString().slice(0,10).replaceAll('-','')}`,`SUMMARY:${escape(entry.item.title+' — release')}`,`DESCRIPTION:${escape(entry.item.description+(entry.item.source?'\nSource: '+entry.item.source:''))}`,'END:VEVENT');
 }
 lines.push('END:VCALENDAR');
 // RFC 5545 folding at 75 octets, without splitting a Unicode code point.
 return lines.map(line=>{let output='',bytes=0;for(const char of line){const size=new TextEncoder().encode(char).length;if(bytes+size>75){output+='\r\n ';bytes=1;}output+=char;bytes+=size;}return output;}).join('\r\n')+'\r\n';
}
