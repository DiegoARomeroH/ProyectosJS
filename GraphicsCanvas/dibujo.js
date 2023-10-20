const canvas = document.getElementById("canva");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "red"
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(345, 190);
ctx.lineTo(50, 190);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black"
ctx.arc(200, 400, 200, 0, Math.PI , true);
ctx.fill();
ctx.beginPath();

ctx.beginPath();

ctx.fillStyle = "orange"
ctx.arc(60, 64, 5, 0, Math.PI * 2, true);
ctx.scale(1, 0.7);


ctx.beginPath();
ctx.arc(200, 250, 100, 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "black"

ctx.beginPath();
ctx.moveTo(250, 180);
ctx.lineTo(250, 280);
ctx.lineTo(210, 210);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 180);
ctx.lineTo(150, 280);
ctx.lineTo(190, 210);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(200, 260, 60, 0, Math.PI, false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(240, 290);
ctx.lineTo(260, 220);
ctx.lineTo(220, 220);
ctx.fill();

ctx.beginPath();
ctx.moveTo(220, 280);
ctx.lineTo(240, 220);
ctx.lineTo(200, 220);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 290);
ctx.lineTo(220, 220);
ctx.lineTo(180, 220);
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 280);
ctx.lineTo(200, 220);
ctx.lineTo(160, 220);
ctx.fill();

ctx.beginPath();
ctx.moveTo(160, 290);
ctx.lineTo(180, 220);
ctx.lineTo(140, 220);
ctx.fill();

