//the ripple effect - one event one place sets off events elsewhere
//all are interconnected
let ripples = [];
let ripples_num = 5;
let img;
let a = 0;


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(130, 222, 237);
    stroke(124, 184, 193);
    noFill();
}

function draw(){
    for(let i=0; i<ripples.length; i++){
        ripples[i].display();
    }
}
//for every frame, add an ellipse
function mousePressed(){
  
    let b = new Ripple(mouseX, mouseY, 50, 50);
    ripples.push(b);
    for(let i=0; i<ripples.length; i++){
        ripples[i].clicked(mouseX, mouseY)}
    for(let a=0; a<ripples.length; a++){
        ripples[a].iterate()}
    }


class Ripple{
    constructor(tempX, tempY, tempW, tempH){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.isclicked = false;
    }
    

    clicked(){
        //this.isclicked is true when mouse is clicked
        if(mouseIsPressed){
            this.isclicked=true;
        }else{this.isclicked=false;}
        }

        
    display(){
        if(this.isclicked){
        ellipse(this.x, this.y, this.w, this.h);
    }
   }

    iterate(){
        //create ripples that increase the w and h by magnitude of 10 on all ripple arrays when mouse is clicked
        if(this.isclicked){
            for(a=0; a<ripples.length; a++){
                let new_w= this.w+a*10
                let new_h = this.h+a*10
            ellipse(this.x, this.y, new_w, new_h);
         }
        }

    }
}