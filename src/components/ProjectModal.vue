<template>
  <div class="modal fade" id="projectModalCenter" tabindex="-1" role="dialog" aria-labelledby="projectModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projectModalLongTitle">{{ selectedProject?.name }}</h5>
        </div>
        <div class="modal-body" v-if="selectedProject">
          <img :src="selectedProject.image" :alt="selectedProject.name" class="modal-image" />
          <p class="project-description">{{ selectedProject.description }}</p>
          <h5>Tools used:</h5>
          <ul>
            <li v-for="tech in selectedProject.technologies" :key="tech">{{ tech }}</li>
          </ul>
          <div class="modal-links">
            <a :href="selectedProject.githubLink" target="_blank" class="modal-github-logo">View the repository on GitHub</a>
            <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank" class="live-link">See the app live</a>
            <a v-if="selectedProject.caseStudy" :href="selectedProject.caseStudy" target="_blank" class="live-link">View case study</a>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Project } from '../data/projects';

declare global {
  interface Window {
    bootstrap: any;
  }
}

const selectedProject = ref<Project | null>(null);

onMounted(() => {
  // Listen for custom event from Work component
  document.addEventListener('project-selected', (event: any) => {
    selectedProject.value = event.detail;
    const modal = document.getElementById('projectModalCenter');
    if (modal) {
      const bootstrapModal = window.bootstrap?.Modal.getOrCreateInstance(modal);
      bootstrapModal?.show();
    }
  });
});
</script>

<style scoped>
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

.modal-content {
  border: 6px solid var(--primary-color);
}

.modal-title {
  text-align: center;
}

.modal-header {
  border-bottom: 5px solid var(--primary-color);
  justify-content: center;
  padding-bottom: 0;
}

.modal-footer {
  border-top: 5px solid var(--primary-color);
}

.project-description {
  margin: 30px 15px 15px;
}

.modal-links {
  margin: 0 auto;
  text-align: center;
}

.modal-github-link {
  display: block;
}

.live-link {
  display: block;
}

.btn-primary {
  background-color: var(--primary-color);
}

.btn-primary:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 500px) {
  .modal-image {
    max-width: 250px;
  }
}
</style>