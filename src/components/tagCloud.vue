<template>
  <div style="background-color: #036881; padding-top: 7vh;">
    <div class="wrapper">
      <div style="text-align: center"><button ref="button" class="button">点击开启今日词云</button></div>
      <div ref="main" class="hidden" style="display: flex; align-items: center; justify-content: center">
        <ul class='tags-cloud hidden'>
          <li class='tag'><span class='wrap'>HTML</span></li>
          <li class='tag'><span class='wrap'>Pug</span></li>
          <li class='tag'><span class='wrap'>CSS</span></li>
          <li class='tag'><span class='wrap'>LESS</span></li>
          <li class='tag'><span class='wrap'>PostCSS</span></li>
          <li class='tag'><span class='wrap'>RSCSS</span></li>
          <li class='tag'><span class='wrap'>SVG</span></li>
          <li class='tag'><span class='wrap'>Javascript</span></li>
          <li class='tag'><span class='wrap'>Gulp</span></li>
          <li class='tag'><span class='wrap'>Webpack</span></li>
          <li class='tag'><span class='wrap'>Canvas</span></li>
          <li class='tag'><span class='wrap'>WebGL</span></li>
          <li class='tag'><span class='wrap'>Three.js</span></li>
          <li class='tag'><span class='wrap'>Anime.js</span></li>
          <li class='tag'><span class='wrap'>Barba.js</span></li>
          <li class='tag'><span class='wrap'>Git</span></li>
          <li class='tag'><span class='wrap'>Linux</span></li>
          <li class='tag'><span class='wrap'>Math</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
class FibonacciSphere {
  #points;
  get points() {return this.#points;}
  constructor(N) {
    this.#points = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y ** 2);
      const a = goldenAngle * i;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      this.#points.push([x, y, z]);
    }
  }
}

class TagsCloud {
  #root;
  #size;
  #sphere;
  #tags;
  #rotationAxis;
  #rotationAngle;
  #rotationSpeed;
  #frameRequestId;
  constructor(root) {
    this.#root = root;
    this.#size = this.#root.offsetWidth;
    this.#tags = root.querySelectorAll('.tag');
    this.#sphere = new FibonacciSphere(this.#tags.length);
    this.#rotationAxis = [1, 0, 0];
    this.#rotationAngle = 0;
    this.#rotationSpeed = 0;
    this.updatePositions();
    this.initEventListeners();
    this.#root.classList.add('-loaded');
  }
  initEventListeners() {
    window.addEventListener('resize', this.updatePositions.bind(this));
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }
  updatePositions() {
    const sin = Math.sin(this.#rotationAngle);
    const cos = Math.cos(this.#rotationAngle);
    const ux = this.#rotationAxis[0];
    const uy = this.#rotationAxis[1];
    const uz = this.#rotationAxis[2];
    const rotationMatrix = [
      [
        cos + (ux ** 2) * (1 - cos),
        ux * uy * (1 - cos) - uz * sin,
        ux * uz * (1 - cos) + uy * sin,
      ],
      [
        uy * ux * (1 - cos) + uz * sin,
        cos + (uy ** 2) * (1 - cos),
        uy * uz * (1 - cos) - ux * sin,
      ],
      [
        uz * ux * (1 - cos) - uy * sin,
        uz * uy * (1 - cos) + ux * sin,
        cos + (uz ** 2) * (1 - cos)
      ]
    ];
    const N = this.#tags.length;
    for (let i = 0; i < N; i++) {
      const x = this.#sphere.points[i][0];
      const y = this.#sphere.points[i][1];
      const z = this.#sphere.points[i][2];
      const transformedX =
          rotationMatrix[0][0] * x
          + rotationMatrix[0][1] * y
          + rotationMatrix[0][2] * z;
      const transformedY =
          rotationMatrix[1][0] * x
          + rotationMatrix[1][1] * y
          + rotationMatrix[1][2] * z;
      const transformedZ =
          rotationMatrix[2][0] * x
          + rotationMatrix[2][1] * y
          + rotationMatrix[2][2] * z;
      const translateX = this.#size * transformedX / 2;
      const translateY = this.#size * transformedY / 2;
      const scale = (transformedZ + 2) / 3;
      const transform =
          `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
      const opacity = (transformedZ + 1.5) / 2.5;
      this.#tags[i].style.transform = transform;
      this.#tags[i].style.opacity = opacity;
    }
  }
  onMouseMove(e) {
    const rootRect = this.#root.getBoundingClientRect();
    const deltaX = e.clientX - (rootRect.left + this.#root.offsetWidth / 2);
    const deltaY = e.clientY - (rootRect.top + this.#root.offsetHeight / 2);
    const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
    const axis = [Math.sin(a), Math.cos(a), 0];
    const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;
    this.#rotationAxis = axis;
    this.#rotationSpeed = speed;
  }
  update() {
    this.#rotationAngle += this.#rotationSpeed;
    this.updatePositions();
  }
  start() {
    this.update();
    this.#frameRequestId = requestAnimationFrame(this.start.bind(this));
  }
  stop() {
    cancelAnimationFrame(this.#frameRequestId);
  }
}

export default {
  name: 'tagCloud',
  mounted() {
    this.$refs.button.addEventListener('click', this.main);
  },
  methods: {
    main() {
      this.$refs.main.classList.remove('hidden');
      const root = document.querySelector('.tags-cloud');
      const cloud = new TagsCloud(root);
      cloud.start();
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: relative;
}
.hidden {
  height: 0;
}
.tags-cloud {
  height: 40vmin;
  width: 40vmin;
  list-style: none;
  opacity: 0;
}
.button {
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  padding: 1vh 2vw;
  margin-bottom: 20vh;
  font-size: 0.9em;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.tags-cloud.-loaded {
  animation: fadeIn 1s ease-out forwards;
}
.tags-cloud > .tag {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 5vmin;
  font-weight: bold;
  transition: transform .5s linear, opacity .5s linear;
}
.tags-cloud > .tag > .wrap {
  color: white;
  display: inline-block;
  transform: translateX(-50%) translateY(-50%);
}
</style>