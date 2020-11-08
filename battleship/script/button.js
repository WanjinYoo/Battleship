class button {
  constructor(context , x, y, height, width , color) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }
  drawRect() {
    this.context.strokeStyle = this.color;
    this.context.strokeRect(this.x,this.y,this.width,this.height);
  }
  addButtontext() {
    this.context.font = `30px Arial`;
    this.context.fillText(`Start game`,this.x + (this.width / 3.5),this.y + (this.height / 1.8));
  }
  addimage() {
    const img = new Image();  
    img.src = 'script/canvasimages/canvaslogo.png';
    img.onload = () => {
      this.context.drawImage(img, 135, 100,this.width * 2.2,200);
    };
  }

}