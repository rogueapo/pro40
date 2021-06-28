class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
     
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Mario Runner");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.greeting.html("Hello " + this.input.value())
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);

        text("Press Enter key to start the game" ,displayWidth/2-150, displayHeight/2)

        
      });
  
      
  
    }
  }
  