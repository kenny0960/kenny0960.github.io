<template>
  <div class="nine-square">
   <div v-for="(cell, index) in gridCells" :key="index" :class="['grid-cell', { 'flashing': flashingCells.includes(index) }]">
     <div class="ball" v-if="ballCells.includes(index)" :style="{ left: ballPosition.x + 'px', top: ballPosition.y + 'px' }">
      <div class="ball-number">0</div>
    </div>
   </div>
 </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const gridCells = Array.from({ length: 9 });
const flashingCells = [2, 4, 8];
const ballCells = [0, 2, 6, 8];
const ballPosition = ref({ x: 0, y: 0 });

let ballAnimationInterval: number;

onMounted(() => {
  startBallAnimation();
});

onUnmounted(() => {
  clearInterval(ballAnimationInterval);
});

const startBallAnimation = () => {
  ballAnimationInterval = setInterval(() => {
    ballPosition.value.x += 5;

    if (ballPosition.value.x > window.outerWidth) {
      ballPosition.value.x = 0;
    }
  }, 50);
}
</script>

<style scoped>
@media (min-width: 390px) {
  .nine-square {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    justify-content: center;
    align-items: center;
    height: 310px;
    overflow: hidden;
 }

  .grid-cell {
    height: 100px;
    border: black solid 2px;
    background: radial-gradient(circle, rgba(113, 81, 95, 1) 81%, rgba(0, 0, 0, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
 }

  .flashing {
    animation: flash 2s infinite;
  }

  @keyframes flash {
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
  }

  .ball {
    width: 30px;
    height: 30px;
    background-color: #A5F12B;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .ball-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
  }
}
</style>
