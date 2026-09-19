import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogRequest,catalogItems,searchCatalog} from '../app/discovery.ts';
const keys={tmdb:'fictional-token',rawg:'fictional-key'};
test('all five catalog requests use fixed HTTPS providers and credential isolation',()=>{
 for(const provider of ['books','series','music','films','games']){
  const r=catalogRequest(provider,'A & B',keys),u=new URL(r.url);assert.equal(u.protocol,'https:');
  assert.equal(r.headers.Authorization,provider==='films'?'Bearer fictional-token':undefined);
  assert.equal(u.searchParams.get('key'),provider==='games'?'fictional-key':null);
 }
 assert.throws(()=>catalogRequest('films','Title',{tmdb:'',rawg:''}),/TMDB/);
 assert.throws(()=>catalogRequest('games','Title',{tmdb:'',rawg:''}),/RAWG/);
});
test('book search keeps imprecise dates out of the calendar and filters malformed rows',()=>{
 const items=catalogItems('books',{docs:[{key:'/works/OL1W',title:'Book',author_name:['Author'],first_publish_year:2000},{key:'evil',title:'Bad'},{key:'/works/OL1W',title:'Duplicate'}]});
 assert.equal(items.length,1);assert.equal(items[0].releaseDate,'');assert.match(items[0].description,/2000/);assert.equal(items[0].source,'https://openlibrary.org/works/OL1W');
});
test('series and credential catalogs normalize records without unsafe source URLs',()=>{
 const tv=catalogItems('series',[{show:{id:1,name:'Show',premiered:'2026-02-30',summary:'<b>Story</b>',url:'javascript:bad'}}])[0];assert.equal(tv.releaseDate,'');assert.equal(tv.description,'Story');assert.equal(tv.source,'https://www.tvmaze.com/shows/1');
 assert.equal(catalogItems('films',{results:[{id:2,title:'Film',release_date:'2025-02-28',overview:'Story'}]})[0].releaseDate,'2025-02-28');
 assert.equal(catalogItems('games',{results:[{id:3,name:'Game',slug:'a-game',released:null}]})[0].source,'https://rawg.io/games/a-game');
});
test('music preserves artist credits and full dates',()=>{
 const item=catalogItems('music',{'release-groups':[{id:'12345678-1234-1234-1234-123456789012',title:'Album','artist-credit':[{name:'Artist'}],'first-release-date':'2025-07-14'}]})[0];assert.equal(item.creator,'Artist');assert.equal(item.releaseDate,'2025-07-14');
});
test('search never sends browser cookies and normalizes successful responses',async()=>{
 const signal=new AbortController().signal;
 const items=await searchCatalog('books','Book',keys,signal,async(_url,options)=>{assert.equal(options.credentials,'omit');assert.equal(options.referrerPolicy,'no-referrer');return new Response(JSON.stringify({docs:[{key:'/works/OL1W',title:'Book'}]}));});assert.equal(items.length,1);
});
test('credential denial and network failure never echo credential material',async()=>{
 await assert.rejects(searchCatalog('films','Film',keys,new AbortController().signal,async()=>new Response('',{status:401})),/denied access/);
 await assert.rejects(searchCatalog('games','Game',keys,new AbortController().signal,async()=>{throw new Error('fictional-key');}),e=>!e.message.includes('fictional-key')&&e.message.includes('unavailable'));
 assert.throws(()=>catalogItems('books',{}),/unexpected/);
});
