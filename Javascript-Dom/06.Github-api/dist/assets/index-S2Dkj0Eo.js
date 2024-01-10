(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l=document.querySelector("form"),d=["sharif-22","vk2401","riyaz1000","hema-venkat3","yrd369","mushkir","bearcin46","dineshdevelope","mshajid","muthuakalya","vedhatech002","SuriyaMassMsd","danielace1","gayathrihg","kishorekumar-kp","muthukumarimoorthi","swethadsalvatore","jeya-rosini","esakki2104prsnl"];l.addEventListener("submit",function(s){s.preventDefault();const o=new FormData(l).get("username");p(o)});function p(s){fetch(`https://api.github.com/users/${s}`,{method:"GET"}).then(t=>t.json()).then(t=>{s===t.login?fetch(`https://api.github.com/users/${s}`,{method:"GET"}).then(o=>o.json()).then(o=>c(o)):alert("Enter a vaild userName")})}d.map(s=>{fetch(`https://api.github.com/users/${s}`,{method:"GET"}).then(t=>t.json()).then(t=>c(t))});function c({avatar_url:s,name:t,html_url:o,followers:n,following:e,login:r}){const i=document.querySelector("main");let a=document.createElement("section");a.classList="bg-purple-700  p-5 rounded-lg",a.innerHTML=`
    
    <div class="flex gap-4" >

         <img class="w-32 h-32 ring ring-white rounded-full" src=${s} alt="anbu.jpg">
         <div class="flex flex-col gap-y-4 justify-center items-center">
          <h1 class="text-2xl font-semibold text-white">${t}</h1>
          <div >
            <span class="bg-[#89fc00] hover:bg-green-600 cursor-pointer border border-zinc-700 px-5 py-1 font-semibold text-black" title="Status" >Active</span>
            <span class="bg-[#ffd60a] hover:bg-yellow-300  cursor-pointer border border-zinc-700 px-5 py-1 font-semibold text-black" title="Role">Intern</span>
         </div>
         
         

          </div>
        </div>

        <div class="mt-2 border-b-2 border-b-black"></div>
        <div class="grid grid-cols-2 gap-4 mt-4 text-center">
          <span class="bg-[#03045e] text-white px-4 py-1 font-semibold "  >Followers : <span>${n}</span></span>
          <span class="bg-[#211722] text-white px-4 py-1 font-semibold " >Following : <span>${e}</span></span>
         
          
         
        </div>
        <div class="grid gap-y-3 grid-cols-1 text-center mt-4">
          <a class="bg-white cursor-pointer text-black hover:bg-orange-500 hover:text-white px-4 py-1 font-semibold " target="_blank" href="https://github.com/${r}?tab=repositories" >Repositories link </a>
          <a class="bg-black  hover:bg-slate-600 hover:text-black px-10 py-2 text-white font-semibold" href=${o} target="_blank">GitHub</a>
        </div>

    `,i.append(a)}
