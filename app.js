const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 200, y: -60 },
    { x: 250, y: -80 },
    { x: 260, y: -90 },
    { x: 270, y: -100 },
    { x: 290, y: -120 },
    { x: 310, y: -140 },
    { x: 280, y: -160 },
    { x: 240, y: -90 },
    { x: 250, y: -60 },
    { x: 350, y: -40 },
    { x: 400, y: -20 },
    { x: 500, y: -60 },
    { x: 550, y: -20 },
    { x: 500, y: 10 },
    { x: 400, y: -20 },
    { x: 600, y: -40 },
    { x: 700, y: -60 },
    { x: window.innerWidth, y: -250 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 3, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

var controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1000,
  triggerHook: 0,
})
  .setTween(tween)
  .addIndicators()
  .setPin(".animation")
  .addTo(controller);
