<template>
  <Teleport to="body">
    <div v-if="isVisible" class="modal-overlay" @click.self="close" role="dialog" aria-modal="true" :aria-label="project?.name">
      <div class="modal-container">
        <div class="modal-header">
          <h5 class="modal-title">{{ project?.name }}</h5>
          <button type="button" class="modal-close-x" aria-label="Close" @click="close">×</button>
        </div>
        <div class="modal-body" v-if="project">
          <img :src="project.image" :alt="project.name" class="modal-image" />
          <p class="project-description">{{ project.description }}</p>
          <h5>Tools used:</h5>
          <div class="tools-list">
            <div v-for="tool in project.tools" :key="tool.name" class="tool-item">
              <img :src="tool.image" :alt="tool.name" class="tool-image" />
              <span>{{ tool.name }}</span>
            </div>
          </div>
          <div class="modal-links">
            <a :href="project.githubLink" target="_blank" class="modal-github-logo">View the repository on GitHub</a>
            <a v-if="project.link" :href="project.link" target="_blank" class="live-link">See the app live</a>
            <a v-if="project.caseStudy" :href="project.caseStudy" target="_blank" class="live-link">View case study</a>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="close-btn" @click="close">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue';
import type { Project } from '../data/projects';

interface Props {
  project: Project | null;
  isVisible: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{ close: [] }>();

const close = () => emit('close');

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

watch(
  () => props.isVisible,
  (visible) => {
    if (visible) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    }
  }
);

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-container {
  background: #fff;
  border: 6px solid var(--primary-color);
  border-radius: 3px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-title {
  text-align: center;
  margin: 0;
}

.modal-header {
  border-bottom: 5px solid var(--primary-color);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  display: flex;
}

.modal-close-x {
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  color: var(--primary-color);
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close-x:hover {
  color: var(--secondary-color);
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  border-top: 5px solid var(--primary-color);
  padding: 20px;
  text-align: right;
}

.modal-image {
  max-width: 400px;
  max-height: 500px;
  display: flex;
  margin: 10px auto;
  transition: transform 0.2s;
}

.modal-image:hover {
  transform: scale(1.2);
}

.project-description {
  margin: 30px 15px 15px;
}

.modal-links {
  margin: 0 auto;
  text-align: center;
}

.modal-github-logo {
  display: block;
}

.live-link {
  display: block;
}

.close-btn {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  font-family: inherit;
  transition: 500ms;
  margin: 0;
}

.close-btn:hover {
  background-color: var(--secondary-color);
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tool-image {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

@media (max-width: 500px) {
  .modal-image {
    max-width: 250px;
  }
}
</style>