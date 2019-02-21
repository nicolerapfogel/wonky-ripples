let ripples_num = 10;
let ripples = [];
let rip;


//if mouse is pressed, circles form around one another
//if mouseReleased(), it stops
function setup(){
    createCanvas(800, 800);
    ellipseMode(CENTER);
    for(i=0; i<1000; i++){
        ripples[i].display();
        ripples[i].clicked();
        ripples[i].iterate();
}}

function draw(){
    background(130, 222, 237);
    stroke(124, 184, 193);
    noFill();
   }




function mouseIsPressed(){
    for(i=0; i<100; i++){
        ripples[i] = new Ripple(mouseX, mouseY, rip, rip);
    }
    

}

class Ripple{
    constructor(tempX, tempY, tempW, tempH){
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.ripples_num = 10;
        this.isclicked = false;
        this.rip = 0
    }

    display(){
        if(mouseIsPressed){
            ellipse(this.x, this.y, this.w, this.h);
        }
        
    }

    clicked(){
        if(mouseIsPressed){
            this.isclicked = true
        }else{
            this.isclicked = false
        }
    }

    iterate(){
        if(mouseIsPressed){
            for(let z=0; z<1000; z++){
                rip = this.w+z*10
            }
            
        }
        //make several ripples around the initial circle created when pressed

    }
}