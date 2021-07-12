<template>
  <div class="part-banner">
    <div class="unit-site-introduce">
      <div class="introduce-container">
        <h1 class="site-purpose-title">{{ data.title }}</h1>
        <h4 class="site-purpose-subtitle">{{ data.subtitle }}</h4>
        <div class="btn-cycle">
          <div style="--color: #2196f3">
            <i class="el-icon-right"></i>
          </div>
        </div>
      </div>
    </div>
    <unit-carousel></unit-carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { ElIcon } from 'element-plus'
import UnitCarousel  from './unit/UnitCarousel.vue'

export default defineComponent({
  name: 'PartBanner',
  components: {
    ElIcon,
    UnitCarousel
  },
  setup() {
    const data = reactive({
      title: '旨在找到高性价比的商品',
      subtitle: '人工智能为您在线设计LOGO，创建企业VI，实现品牌自动化！'
    })

    const setBtnCycleStyles = () => {
      const btnCycles = document.querySelectorAll('.btn-cycle > div')
      console.log(btnCycles)

      btnCycles.forEach((btn) => {
        console.log(btn)

        btn.addEventListener('mousemove', (e) => {
          var size = parseInt(getComputedStyle(btn).width)
          // scaling
          var x = size * 0.3 * 0.7 + 0.7 * e.offsetX
          var y = size * 0.3 * 0.7 + 0.7 * e.offsetY

          btn.style.setProperty('--x', x)
          btn.style.setProperty('--y', y)
          btn.style.setProperty('--size', size)
        })
      })
    }

    onMounted(() => {
      setBtnCycleStyles()
    })

    return {
      data
    }
  }
})
</script>
<style lang="scss">
.part-banner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  max-width: 1100px;
  padding: 0 30px;
  margin: auto;
  text-align: left;
  .site-purpose-title {
    font-size: 42px !important;
    font-weight: 600;
    line-height: 1.25;
  }
  .site-purpose-subtitle {
    display: block;
    margin-top: 55px;
    margin-bottom: 69px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.8;
    color: #666;
    letter-spacing: 0.12px;
  }
}

.btn-cycle {
  text-align: right;
}

.btn-cycle div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 10vw;
  min-width: 5em;
  min-height: 5em;
  transition: 0.5s all ease;
  background: var(--color, #aaa);
  border: 0 solid transparent;
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0.5em;
  opacity: 0.7;
  --dx: calc(var(--size) - var(--x));
  --dy: calc(var(--size) - var(--y));
}

.btn-cycle div:hover {
  opacity: 1;
  cursor: pointer;
  border: calc(2px + 0.85vw) solid rgba(255, 255, 255, 0.5);
  transition: 0.5s background-color ease, 0.2s border ease;

  border-radius: calc(var(--x) / var(--size) * 100%)
    calc(var(--dx) / var(--size) * 100%) calc(var(--dx) / var(--size) * 100%)
    calc(var(--x) / var(--size) * 100%) / calc(var(--y) / var(--size) * 100%)
    calc(var(--y) / var(--size) * 100%) calc(var(--dy) / var(--size) * 100%)
    calc(var(--dy) / var(--size) * 100%);
}

body:not([style]) .btn-cycle div:first-child:after,
.btn-cycle div:after {
  color: rgba(255, 255, 255, 0);
  font-size: calc(1vw + 1.2em);
  font-weight: 200;
  transition: all 0.2s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, -0.5em, 0);
}

body:not([style]) .btn-cycle div:first-child:after,
.btn-cycle div:hover:after {
  color: rgba(255, 255, 255, 0.7);
  transform: translate3d(0, 0, 0);
}

.el-icon-right:before {
  content: '';
  font-size: 60px;
  color: #fff;
}

</style>