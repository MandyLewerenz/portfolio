// SeededRNG.js

class SeededRNG {
  constructor(seed) {
      this.m = 0x80000000; // 2**31;
      this.a = 1103515245;
      this.c = 12345;
      this.state = seed % this.m;
  }

  nextFloat() {
      this.state = (this.a * this.state + this.c) % this.m;
      return this.state / this.m;
  }

  nextInt(min, max) {
      return min + Math.floor(this.nextFloat() * (max - min + 1));
  }
}

export default SeededRNG;
