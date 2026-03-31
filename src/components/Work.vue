<template>
  <div class="my-work" id="work">
    <div class="background-bar2 hidden right"></div>
    <h1 class="work-title hidden left">My Work</h1>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
        @select="handleSelectProject"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard.vue';

const handleSelectProject = (project: Project) => {
  // Dispatch custom event that ProjectModal listens for
  const event = new CustomEvent('project-selected', {
    detail: project
  });
  document.dispatchEvent(event);
};
</script>

<style scoped></style>