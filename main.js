 
canvas = document.getElementById("myCanvas");
 color = "red";
 canvas.getContext("2d").beginPath();
 canvas.getContext("2d").strokeStyle = color;
 canvas.getContext("2d").lineWidth = 2;
 canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);
 canvas.getContext("2d").stroke();

 canvas = document.getElementById("myCanvas");
 color = "orange";
 canvas.getContext("2d").beginPath();
 canvas.getContext("2d").strokeStyle = color;
 canvas.getContext("2d").lineWidth = 2;
 canvas.getContext("2d").arc(400,200,40,0,4*Math.PI);
 canvas.getContext("2d").stroke();

 canvas = document.getElementById("myCanvas");
 color = "yellow";
 canvas.getContext("2d").beginPath();
 canvas.getContext("2d").strokeStyle = color;
 canvas.getContext("2d").lineWidth = 2;
 canvas.getContext("2d").arc(600,200,40,0,4*Math.PI);
 canvas.getContext("2d").stroke();