<template>
  <section class="my-work" id="projects">
    <div class="background-bar2 hidden right"></div>
    <h2 class="work-title section-title hidden left">My Projects</h2>
    <div class="grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.name"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard.vue";
</script>

<style scoped>
.section-title {
  text-align: center;
}

.my-work {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5625rem;
  align-items: stretch;
  justify-items: center;
}

.grid__item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.25rem;
  text-align: center;
  width: auto;
  min-width: 12.5rem;
  min-height: 28.125rem;
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
    justify-items: center;
  }
}

@media (min-width: 1100px) {
  .grid {
    grid-gap: 3.125rem;
  }
}
</style>
