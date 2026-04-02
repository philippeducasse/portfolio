<template>
  <div class="grid__item hidden" :class="animationClass" @click="handleClick" role="button">
    <h4 class="card-title">{{ project.name }}</h4>
    <img :src="project.image" :alt="project.name" class="screenshot" />
    <p class="short-description">{{ project.shortDescription }}</p>
    <div class="toolbox">
      <img
        v-for="tool in project.tools"
        :key="tool.name"
        :src="tool.image"
        :alt="tool.name"
        class="tools__logo"
      />
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
  padding: 1.5rem;
  width: auto;
  min-width: 200px;
  margin: 0;
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  cursor: pointer;
  transition:
    box-shadow 250ms ease,
    transform 250ms ease;
}

.grid__item:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card-title {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-color);
  line-height: 1.4;
}

.screenshot {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin: 0 0 1rem 0;
}

.short-description {
  margin: 0 0 1rem 0;
  padding: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #4a5568;
  flex-grow: 1;
}

.toolbox {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #e2e8f0;
}

.tools__logo {
  width: 40px;
  height: 40px;
  padding: 6px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
  border-radius: 8px;
  transition: background-color 200ms ease;
}

.tools__logo:hover {
  background-color: #edf2f7;
}

.tools__logo::after {
  content: attr(alt);
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  display: none;
  z-index: 10;
  pointer-events: none;
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

  .screenshot {
    height: 150px;
  }
}
</style>
