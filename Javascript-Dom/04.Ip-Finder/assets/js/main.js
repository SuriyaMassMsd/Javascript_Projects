const scrrenIpEl =  document.getElementById('screen')

let xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
  
               if(this.readyState === 4){
                if(this.status === 200){
                  scrrenIpEl.innerText = xhr.responseText
                }
               }
               else {
                scrrenIpEl.innerHTML += `<span>Try Again</span>`
            }
}

xhr.open("GET","https://ipv4.icanhazip.com/")

xhr.send()