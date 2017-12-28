var divSlider = document.getElementById("slider");
var slider = {
  activeSlideId: 0,
  animate: function() {
    var self = this;
    this.interval = setInterval(function () {
    //delete class
    slider.classList.remove("slider");
    //add current slide id class
    slider.classList.add("slideIdClass");
    //update self.activeSlideId
    self.activeSlideId++;
    }, 3000);
  },
  onClick: function(e) {
  // clearInterval(this.interval);
  // delete class
  // add current slide id class from dataSlideId
  // this.animate()
  }
}
