var w, h, ctx, canvas;
var id, num, opac;
var r1, g1, b1, a1, r2, g2, b2, a2;

//var pilotas = {mida: 10, color: 0, posx: 0, posy: 0, dx: 1, dy: 1};
pilota1 = {mida: 10, color: 'rgba('+r1+','+g1+','+b1+','+a1+')', contr1: 1, 
    contg1: 1, contb1: 1, posx: 0, posy: 0, dx: 1, dy: 1, opac: 0.01};
pilota2 = {mida: 10, color: 'rgba('+r2+','+g2+','+b2+','+a2+')', contr2: 1, 
    contg2: 1, contb2: 1, posx: 0, posy: 0, dx: 1, dy: 1, opac: 0.01};

window.onload = pilotes();

function pilotes (){
    
    canvas = window.document.getElementById("pilotes");
    w = canvas.width;
    h = canvas.height;
    pilota1.posx = w/2;r1=255;g1=0;b1=0;a1=0.1;
    pilota2.posy = h/2;r2=255;g2=0;b2=0;a2=0.9;
//    num = 2;//Num de pilotes
//    opac = 0;//Opacitat de les pilotes
    
    ctx = canvas.getContext("2d");
    
    r1 = Math.floor(Math.random()*255);
    g1 = Math.floor(Math.random()*255);
    b1 = Math.floor(Math.random()*255);
    r2 = Math.floor(Math.random()*255);
    g2 = Math.floor(Math.random()*255);
    b2 = Math.floor(Math.random()*255);
    actualitza();
    id = window.requestAnimationFrame(actualitza);
    
    function pintarPilotas1(){
        ctx.save();
        
        if(r1 >= 255 || r1 <= 0) {
            pilota1.contr1 = -pilota1.contr1;
        }
        if(g1 >= 255 || g1 <= 0) {
            pilota1.contg1 = -pilota1.contg1;
        }
        if(b1 >= 255 || b1 <= 0) {
            pilota1.contb1 = -pilota1.contb1;
        }
        r1 += pilota1.contr1;
        g1 += pilota1.contg1;
        b1 += pilota1.contb1;
        if(a1 >= 1 || a1 <= 0) {
            pilota1.opac = -pilota1.opac;
        }
//        if (a1 <= 0){
//            pilota1.opac = -pilota1.opac;
//        }
        a1 += pilota1.opac;
        if(pilota1.posy >= h || pilota1.posy <= -1) {
            pilota1.dy = -pilota1.dy;
        }
//        if(pilota1.posy <= -1) {
//            pilota1.dy = -pilota1.dy;
//        }
        pilota1.posy += pilota1.dy;
        ctx.fillStyle = 'rgba('+r1+','+g1+','+b1+','+a1+')';
        ctx.beginPath();
        ctx.arc(pilota1.posx, pilota1.posy, pilota1.mida, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        
    }
    function pintarPilotas2(){
        ctx.save();
        
        if(r2 >= 255 || r2 <= 0) {
            pilota2.contr2 = -pilota2.contr2;
        }
        if(g2 >= 255 || g2 <= 0) {
            pilota2.contg2 = -pilota2.contg2;
        }
        if(b2 >= 255 || b2 <= 0) {
            pilota2.contb2 = -pilota2.contb2;
        }
        r2 += pilota2.contr2;
        g2 += pilota2.contg2;
        b2 += pilota2.contb2;
        if(a2 >= 1 || a2 <= 0) {
            pilota2.opac = -pilota2.opac;
        }
//        if(a2 <= 0){
//            pilota2.opac = -pilota2.opac;
//        }
        a2 += pilota2.opac;
        if(pilota2.posx >= w || pilota2.posx <= -1) {
            pilota2.dx = -pilota2.dx;
        }
//        if(pilota2.posx <= -1) {
//            pilota2.dx = -pilota2.dx;
//        }
        pilota2.posx += pilota2.dx;
        ctx.fillStyle = 'rgba('+r1+','+g1+','+b1+','+a1+')';
        ctx.beginPath();
        ctx.arc(pilota2.posx, pilota2.posy, pilota2.mida, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        
    }
    
    function actualitzaPilotas() {
        
        pintarPilotas1();
        pintarPilotas2();
        //Mou i canvis
         
    }
    
    function actualitza(timeStamp) {
        ctx.clearRect(0, 0, w, h);
        
        actualitzaPilotas();
        
        id = window.requestAnimationFrame(actualitza);    
    }
       
}


