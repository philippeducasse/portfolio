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
    <ProjectModal
      :project="selectedProject"
      :isVisible="isModalVisible"
      @close="handleCloseModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from './ProjectCard.vue';
import ProjectModal from './ProjectModal.vue';

const selectedProject = ref<Project | null>(null);
const isModalVisible = ref(false);

const handleSelectProject = (project: Project) => {
  selectedProject.value = project;
  isModalVisible.value = true;
};

const handleCloseModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>
.my-work {
  background-color: #fff;
  padding: 2rem 0 3rem;
}

.work-title {
  text-align: center;
  padding: 2rem 0;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5625rem;
  place-items: center;
}

.grid__item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.25rem;
  text-align: center;
  width: auto;
  min-width: 12.5rem;
  height: 28.125rem;
  margin: 0;
  border: 0.375rem solid var(--primary-color);
  background-color: #fff;
  border-radius: 0.1875rem;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.34);
  max-width: 18.75rem;
}

.grid__item:nth-child(2) {
  transition-delay: 200ms;
}

.grid__item:nth-child(3) {
  transition-delay: 400ms;
}

.grid__item:nth-child(4) {
  transition-delay: 600ms;
}

.grid__item:nth-child(5) {
  transition-delay: 200ms;
}

.grid__item:nth-child(6) {
  transition-delay: 400ms;
}

.grid__item:hover {
  border: 0.375rem solid var(--tertiary-color);
  transition: 800ms;
  box-shadow: none;
}

.hidden {
  opacity: 0;
  filter: blur(5px);
  transition: all 1s;
}

.hidden.left {
  transform: translateX(-10vw);
}

.hidden.right {
  transform: translateX(10vw);
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

@media (max-width: 650px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .grid__item {
    max-width: 80%;
    margin: 0 auto;
  }

  .grid__item img {
    max-width: 12.5rem;
  }
}

@media (min-width: 650px) and (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3.125rem;
  }
}

@media (min-width: 1100px) {
  .grid {
    grid-gap: 3.125rem;
  }
}
</style>