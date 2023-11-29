const colors=["green","blue","red","yellow","orange","violet"];
const btn=document.getElementById("btn");
const color= document.querySelector('.color');

btn.addEventListener("click",function()
{
    const x=getrandom();
    console.log(x);
    document.body.style.backgroundColor=colors[x];
    color.textContent=colors[x];
    document.querySelector('.color').style.color=colors[x];
});

function getrandom()
{
    return Math.floor(Math.random()*colors.length)
}