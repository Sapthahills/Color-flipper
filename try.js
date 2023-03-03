
const btn=document.querySelector("button")
const hsltxt=document.getElementById("hsl")
const wrap=document.getElementById("container")
let cl=document.querySelector("h2")
const hexa=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F']

btn.addEventListener('click',ran)
function ran(){
    let hslcolor="#"
    for(let i=1;i<=6;i++)
    {
    hslcolor= hslcolor+ randvalue()
    }
    console.log(hslcolor)
    wrap.style.backgroundColor=hslcolor
    hsltxt.innerHTML=hslcolor
    cl.style.color=hslcolor

}

function randvalue(){
    let randhex= Math.floor(Math.random()*16)
    return hexa[randhex]
}
