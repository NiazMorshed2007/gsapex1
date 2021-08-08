var tl = new TimelineLite();

tl.fromTo(
  ".left",
  1,
  {
    x: -100 + "%",
    ease: Power2.easeOut,
  },
  {
    x: 0 + "%",
  }
)
  .fromTo(
    ".logo",
    0.5,
    {
      y: 50,
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      y: 0,
      opacity: 1,
    }
  )
  .fromTo(
    ".right-overlay",
    1,
    {
      x: -100 + "%",
      ease: Power2.easeOut,
    },
    {
      x: 100 + "%",
    }
  )
  .fromTo(
    ".img-wrapper",
    0.7,
    {
      width: 0,
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      width: 500 + "px",
      opacity: 1,
    }
  )
  .fromTo(
    ".img-inner-wrapper",
    1,
    {
      x: -100 + "%",
      ease: Power2.easeOut,
    },
    {
      x: 0 + "%",
    },
    "-= .7"
  )
  .fromTo(
    "h1",
    0.7,
    {
      y: 25,
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      y: 0,
      opacity: 1,
    }
  )
  .fromTo(
    ".txt",
    0.5,
    {
      x: -25,
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      x: 0,
      opacity: 1,
    }
  );
