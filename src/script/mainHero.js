class AnimatedGradientBackground {
  constructor() {
    this.gradientInner = document.getElementById("gradientInner");
    this.startingGap = 125;
    this.breathing = true;
    this.gradientColors = [
      "#0A0A0A",
      "#2979FF",
      "#FF80AB",
      "#FF6D00",
      "#FFD600",
      "#00E676",
      "#3D5AFE",
    ];
    this.gradientStops = [35, 50, 60, 70, 80, 90, 100];
    this.animationSpeed = 0.02;
    this.breathingRange = 5;
    this.topOffset = 0;

    this.width = this.startingGap;
    this.directionWidth = 1;
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.animate();
  }

  animate() {
    if (this.width >= this.startingGap + this.breathingRange) {
      this.directionWidth = -1;
    }
    if (this.width <= this.startingGap - this.breathingRange) {
      this.directionWidth = 1;
    }

    if (!this.breathing) {
      this.directionWidth = 0;
    }

    this.width += this.directionWidth * this.animationSpeed;

    const gradientStopsString = this.gradientStops
      .map((stop, index) => `${this.gradientColors[index]} ${stop}%`)
      .join(", ");

    const gradient = `radial-gradient(${this.width}% ${
      this.width + this.topOffset
    }% at 50% 20%, ${gradientStopsString})`;

    if (this.gradientInner) {
      this.gradientInner.style.background = gradient;
    }

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}


export default AnimatedGradientBackground;
