window.addEventListener("keydown", (e)=>{
   document.getElementById("keys").innerHTML = `You Pressed <span>${e.key}</span>`

});

window.addEventListener("keydown", (e)=>{
    document.getElementById("key").innerHTML=`<h2>${e.keyCode}</h2>`
})