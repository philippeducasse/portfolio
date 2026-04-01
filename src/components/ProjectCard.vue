<template>
  <div class="grid__item hidden" :class="animationClass" @click="handleClick" role="button">
    <h4 class="card-title">{{ project.name }}</h4>
    <img :src="project.image" :alt="project.name" class="screenshot" />
    <p class="short-description">{{ project.shortDescription }}</p>
    <div class="toolbox">
      <img v-for="tool in project.tools" :key="tool" :src="tool" :alt="tool" class="tools__logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
  index: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  select: [project: Project];
}>();

const animationClass = computed(() => {
  if (props.index < 2) return "left";
  if (props.index < 4) return "right";
  return "bottom";
});

const handleClick = () => {
  emit("select", props.project);
};
</script>

<style scoped>
.grid__item {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: auto;
  min-width: 200px;
  margin: 0;
  border: 6px solid var(--primary-color);
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.34);
  max-width: 300px;
}

.grid__item:hover {
  border: 6px solid var(--tertiary-color);
  transition: 800ms;
  box-shadow: none;
}

.screenshot {
  width: 80%;
  margin: 20px auto;
}

.short-description {
  padding: 0 10px;
}

.toolbox {
  margin: 1rem 0;
}

.tools__logo {
  width: 45px;
  max-height: 45px;
  margin: 0.5rem;
  position: relative;
  display: inline-block;
}

.tools__logo::after {
  content: attr(alt);
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #000;
  padding: 5px 10px;
  border-radius: 3px;
  white-space: nowrap;
  font-size: 14px;
  display: none;
}

.tools__logo:hover::after {
  display: block;
}

.hidden {
  opacity: 0;
  filter: blur(5px);
  transition: all 1s;
}

.shows {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0) !important;
  transform: translate(0) !important;
  transition: all 1.5s;
}

@media (prefers-reduced-motion) {
  .hidden {
    transition: none;
  }
}

@media (max-width: 500px) {
  .grid__item {
    max-width: 80%;
    margin: 0 auto;
  }

  .grid__item img {
    max-width: 200px;
  }

  .modal-image {
    max-width: 250px;
  }
}
</style>
