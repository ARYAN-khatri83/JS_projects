var arr = [
    {
        dp:"./img.png", stori:"./images.jpeg",
    },
    {
        dp:"./bleach.png", stori:"./photo.png",
    },
    {
        dp:"./imagesss.jpeg", stori:"./images-2.jpeg",
    },
    {
        dp:"./demon.png", stori:"./anime.jpeg",
    },
];

var story = document.querySelector("#story")
var clutter="";
arr.forEach(function(elem,idx){
    clutter += ` <div class="stori">
    <img id = "${idx}" src="${elem.dp}">
</div>`;
});

story.innerHTML = clutter;

story.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].stori})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
});