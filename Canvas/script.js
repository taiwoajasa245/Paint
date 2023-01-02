// window.addEventListener('load' , alert('welcome Back')); 

window.addEventListener('load', () => {
    // console.log("hello world"); 
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d"); 


    // Resizing 

    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth; 

    // when drawing a rectangle

    // ctx.strokeStyle = "red"; 
    // ctx.strokeRect(100, 50, 100, 200);
    // ctx.strokeStyle = "blue"; 
    // ctx.strokeRect(50, 100, 100, 200)

    // when drawing a line
    // ctx.beginPath(); 
    // ctx.moveTo(200, 100);
    // ctx.lineTo(200, 500);
    // ctx.lineTo (100, 100); 
    // ctx.closePath();
    // ctx.stroke();  

    // variables

    let painting = false;
    
    function startPosition(e) {
        painting = true; 
        draw(e); 

    }

    function finishPosition(){ 
        painting = false; 
        ctx.beginPath();
    }
    function paintingStyle() {
        
    }

    function draw(e){ 
        if(!painting) return; 
        // main path that let you  draw

        ctx.lineWidth = 10;
        // function colorChange(){ 
        //     const colorChanger = document.querySelector('#canvas')
        // }
        ctx.strokeStyle = "blue"; 
        ctx.lineCap = "round"; 
         

        // how we start drawing the line

        ctx.lineTo(e.clientX, e.clientY); 
        ctx.stroke(); 
        ctx.beginPath(); 
        ctx.moveTo(e.clientX, e.clientY); 

    }




    // event listeners

    canvas.addEventListener('mousedown', startPosition); 
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw); 
    canvas.addEventListener('mousedown', colorChange)

    


})
window.addEventListener('resize', canvas);

// Side Navigation 

const sideNav = () => { 
    const nav = document.querySelector('.side-nav'); 

    nav.style.width = '350px';

    
    function close() {
        nav.style.width = '0'; 
    }
    window.addEventListener('mousedown', close); 
}




