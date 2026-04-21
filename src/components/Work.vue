<template>
  <section class="work" id="work">
    <h2 class="section-title hidden right">Professional Experience</h2>
    <div class="work-list">
      <div
        v-for="(item, index) in jobs"
        :key="item.company"
        :class="['work-item', 'hidden', getAnimationDirection(index)]"
      >
        <div class="work-header">
          <div class="work-title-group">
            <h3 class="job-title">{{ item.title }}</h3>
            <p class="company">{{ item.company }}</p>
          </div>
          <p class="date">{{ item.date }}</p>
        </div>
        <div class="tech-tags">
          <span v-for="tech in item.tags" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { jobs } from "../data/jobs";
import { getAnimationDirection } from "../utils/useAnimations";
</script>

<style scoped>
.work {
  min-height: fit-content;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}

.work-list {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.work-item {
  border-left: 3px solid var(--primary-color);
  padding-left: 1.5rem;
  padding-bottom: 1rem;
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.work-title-group {
  flex: 1;
}

.job-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.company {
  font-size: 1rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin: 0;
}

.date {
  font-size: 1rem;
  color: var(--text-muted);
  margin: 0;
  white-space: nowrap;
}

.accomplishments {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0 0;
}

.accomplishments li {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.accomplishments li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.freelance-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 0.75rem;
}

.freelance-item {
  padding-bottom: 1rem;
}

.freelance-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.freelance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.tech-tag {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 500;
}

@media (max-width: 650px) {
  .work-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .date {
    white-space: normal;
  }

  .job-title {
    font-size: 1.125rem;
  }

  .company {
    font-size: 0.95rem;
  }
}

@media (max-width: 400px) {
  .work-item {
    padding-left: 1rem;
    border-left-width: 2px;
  }

  .job-title {
    font-size: 1rem;
  }

  .company {
    font-size: 0.9rem;
  }

  .date {
    font-size: 0.85rem;
  }
}

:global(html[data-theme="minimalist"] .work-item) {
  border-left: none;
  padding-left: 0;
}

:global(html[data-theme="minimalist"] .accomplishments li::before) {
  color: #333;
}

:global(html[data-theme="minimalist"] .tech-tag) {
  background-color: transparent;
  color: inherit;
  border: 1px solid #333;
}
</style>
