var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

color = "red";
width_of_line = 2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
     color = document.getElementById("color").value;
     width_of_line = document.getElementById("Width_of_line").value;
     radius = document.getElementById("radius").value;
     mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
current_postion_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mousedown")
{
    console.log("Current postion of x and y coordinates = ");
    console.log("x = " + current_postion_of_mouse_x +",y" - "" + current_postion_of_mouse_y);
    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.linewidth = width_of_line;
    ctx.arc(current_postion_of_mouse_x , current_postion_of_mouse_y , radius , 0 ,2 * Math.PI);
    ctx.stroke();
}}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
      mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
      mouseEvent = "mouseleave";
}
function clearArea(e) 
{
   ctx.clearArea(0,0,ctx.canvas.width,ctx.canvas.height);
}
