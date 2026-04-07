<template>
  <section class="work" id="work">
    <h2 class="section-title hidden right">Professional Experience</h2>
    <div class="work-list">
      <div class="work-item hidden left">
        <div class="work-header">
          <div class="work-title-group">
            <h3 class="job-title">Full-stack Developer</h3>
            <p class="company">VDP Research</p>
          </div>
          <p class="date">September 2025 - Present</p>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Django</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">Dagster</span>
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">Claude</span>
        </div>
      </div>

      <div class="work-item hidden left">
        <div class="work-header">
          <div class="work-title-group">
            <h3 class="job-title">Full-stack Developer</h3>
            <p class="company">CampNerd GmbH</p>
          </div>
          <p class="date">August 2024 - September 2024 (freelance)</p>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Django</span>
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">Javascript</span>
          <span class="tech-tag">Stripe</span>
        </div>
      </div>

      <div class="work-item hidden left">
        <div class="work-header">
          <div class="work-title-group">
            <h3 class="job-title">Full-stack Developer</h3>
            <p class="company">Souljourney GmbH</p>
          </div>
          <p class="date">June 2024 - September 2024</p>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">Next</span>
          <span class="tech-tag">NodeJs</span>
          <span class="tech-tag">AWS</span>
          <span class="tech-tag">OpenAi, Claude</span>
        </div>
      </div>

      <div class="work-item hidden left">
        <div class="work-header">
          <div class="work-title-group">
            <h3 class="job-title">Full-stack Developer</h3>
            <p class="company">Freelancer</p>
          </div>
          <p class="date">September 2023 - June 2024</p>
        </div>
        <div class="tech-tags">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Django</span>
          <span class="tech-tag">Wordpress</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
  font-size: 0.8rem;
  font-weight: 500;
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
