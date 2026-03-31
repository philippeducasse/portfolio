<template>
  <div class="grid__item hidden" :class="animationClass" @click="handleClick" role="button" data-bs-toggle="modal" data-bs-target="#projectModalCenter">
    <h4 class="card-title">{{ project.name }}</h4>
    <img :src="project.image" :alt="project.name" class="screenshot" />
    <p class="short-description">{{ project.shortDescription }}</p>
    <div class="toolbox">
      <img v-for="tool in project.tools" :key="tool" :src="tool" :alt="tool" class="tools__logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  index: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  select: [project: Project];
}>();

const animationClass = computed(() => {
  if (props.index < 2) return 'left';
  if (props.index < 4) return 'right';
  return 'bottom';
});

const handleClick = () => {
  emit('select', props.project);
};
</script>

<style scoped></style>