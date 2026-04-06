<template>
  <!-- Minimalist: plain text entry, no images, no card -->
  <div v-if="isMinimalist" class="project-minimal">
    <h4 class="project-minimal__title">
      <a :href="project.link" target="_blank" rel="noopener noreferrer">{{ project.name }}</a>
    </h4>
    <p class="project-minimal__desc">{{ project.shortDescription }}</p>
    <p class="project-minimal__long-desc">{{ project.description }}</p>
    <p class="project-minimal__tools">Built with: {{ project.tools.map((t) => t.name).join(', ') }}</p>
    <div class="project-minimal__links">
      <template v-if="project.githubLinks">
        <p>View the repositories: </p>
        <a :href="project.githubLinks[0]" target="_blank" rel="noopener noreferrer"> frontend</a>
        <a
          v-if="project.githubLinks[1]"
          :href="project.githubLinks[1]"
          target="_blank"
          rel="noopener noreferrer"
        >backend</a>
      </template>
    </div>
  </div>

  <!-- Default / frontend / nostalgic: full card -->
  <div
    v-else
    class="grid__item hidden"
    :class="animationDir"
  >
    <a class="card-link" :href="project.link" target="_blank" rel="noopener noreferrer">
      <h4 class="card-title">{{ project.name }}</h4>
      <img :src="project.image" :alt="project.name" class="screenshot" />
      <p class="short-description">{{ project.shortDescription }}</p>
    </a>
    <div class="toolbox">
      <img
        v-for="tool in project.tools"
        :key="tool.name"
        :src="tool.image"
        :alt="tool.name"
        class="tools__logo"
      />
    </div>
    <p v-if="project.githubLinks" class="github-links">
      check out the code on github for the
      <a :href="project.githubLinks[0]" target="_blank" rel="noopener noreferrer">frontend</a>
      and
      <a :href="project.githubLinks[1]" target="_blank" rel="noopener noreferrer">backend</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Project } from "../data/projects";
import { useTheme } from "../utils/useTheme";

interface Props {
  project: Project;
  index: number;
}

const props = defineProps<Props>();
const { currentTheme } = useTheme();

const isMinimalist = computed(() => currentTheme.value === 'minimalist');

const DIRS = ['left', 'bottom', 'right'];
const animationDir = computed(() => DIRS[props.index % 3]);
</script>

<style scoped>
/* ── Default card ── */
.grid__item {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  margin: 0;
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    box-shadow 250ms ease,
    transform 250ms ease;
}

.grid__item.hidden {
  transition: all 1s;
}

.grid__item.shows {
  transition: all 1.5s;
}

.grid__item:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
}

.github-links {
  margin: 0.75rem 0 0;
  font-size: 0.8125rem;
  color: #4a5568;
  line-height: 1.6;
}

.github-links a {
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 2px;
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
  border-radius: 8px;
  transition: background-color 200ms ease;
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

/* ── Minimalist project entry ── */
.project-minimal {
  padding: 1.25rem 0;
  border-bottom: 1px solid #2a2a2a;
}

.project-minimal__title {
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0.375rem 0;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

.project-minimal__title a {
  color: #6b8fa3;
  text-decoration: none;
}

.project-minimal__title a:hover {
  text-decoration: underline;
}

.project-minimal__desc {
  margin: 0 0 0.375rem 0;
  color: #888;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  line-height: 1.5;
}

.project-minimal__long-desc {
  margin: 0 0 0.375rem 0;
  color: #888;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  line-height: 1.5;
}

.project-minimal__tools {
  margin: 0 0 0.5rem 0;
  font-size: 0.75rem;
  color: #555;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  margin-top: 1em;
}

.project-minimal__links {
  display: flex;
  align-items:center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8125rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

.project-minimal__links a {
  color: #6b8fa3;
  text-decoration: none;
}

.project-minimal__links a:hover {
  text-decoration: underline;
}
</style>
