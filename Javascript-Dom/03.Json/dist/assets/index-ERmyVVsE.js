(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=[{name:"Muthukumari M",email:"abi.zoho@gmail.com",phoneNo:9844893388,role:"Intern",status:"Active",image:"./images/muthukumarimoorthi.jpg"},{name:"Gayathri G",email:"gayathrihg@gmailcom",phoneNo:7277863738,role:"Intern",status:"Active",image:"./images/gayathrihg.jpg"},{name:"Khaja Sharif",email:"sharif22@gmailcom",phoneNo:8774748383,role:"Intern",status:"Active",image:"./images/sharif-22.jpg"},{name:"Mohammed Mushkir",email:"mushkir@gmailcom",phoneNo:9873838373,role:"Intern",status:"Active",image:"./images/mushkir.jpg"},{name:"Mohammed Shajid",email:"mshajid@gmailcom",phoneNo:874473838,role:"Intern",status:"Active",image:"./images//mshajid.jpg"}],c=document.querySelector("tbody");n.map(function(i){l(i)});function l({name:i,email:r,phoneNo:s,role:a,status:e,image:t}){let o=document.createElement("tr");o.innerHTML=`


  <tr> 
  <td class="flex px-4 py-3 justify-center items-center gap-4 font-semibold text-[#3c096c]"><div><img class="w-14 h-14 object-fill rounded-[50%]" src="${t}"/></div><span>${i}</span></td>
  <td><div class="flex justify-center items-center gap-4">
    <a href="mailto:${r}">
      
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-[#212529] hover:cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>
    </a><a class="cursor-pointer hover:text-[#112e8c] " href="mailto: ${r}">
     ${r}
    </a>
  </div></td>
  <td class="hover:text-[#112e8c] hover:font-semibold hover:cursor-pointer "><a href="tel:+${s}">${s}</a></td>
  <td class="hover:cursor-pointer"><span class="bg-gray-400 px-4  py-1.5 rounded text-gray-800 font-semibold font-sans hover:bg-gray-500  hover:text-white">${a}</span></td>
  <td ><span class="bg-green-400 px-4 py-1.5 rounded hover:cursor-pointer hover:bg-green-700 text-emerald-900 hover:text-white font-semibold">${e}</span></td>
</tr>


`,c.append(o)}
