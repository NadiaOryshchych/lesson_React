function button() {
   return 'button';
}  

class Slider {
   constructor (width, height, count) {
      this.width = width;
      this.height - height;
      this.count = count;
   }
   nextSlider() {
      console.log('Moving forward');
   }
   prevSlider() {
      console.log('Moving back');
   }
   whoAmI() {
      console.log(this.width, this. height, this.count);
   }
}
const slider = new Slider(600, 400, 5);
slider.whoAmI();
