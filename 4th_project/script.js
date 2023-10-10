var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListner("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    });
    val.addEventListner("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    });
    val.addEventListner("mousemove",function(){
        val.childNodes[3].style.left=dets.x+"px"
        val.childNodes[3].style.top=dets.y+"px"
    });
});