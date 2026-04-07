<template>
  <section class="skills" id="skills">
    <h2 class="section-title hidden right">Skills</h2>
    <div class="skills-groups">
      <div v-for="group in skillGroups" :key="group.name" class="skill-group">
        <h3 class="skill-group-title">{{ group.name }}</h3>
        <div class="skills-container">
          <div v-for="skill in group.skills" :key="skill.name" class="skill-item hidden left">
            <div class="skill-content">
              <img
                v-if="skill.logo"
                :src="skill.logo"
                :alt="skill.name"
                class="skill-logo"
                :title="skill.name"
              />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", logo: "/img/logos/typescript.svg" },
      { name: "JavaScript", logo: "/img/logos/javascript.svg" },
      { name: "React / Next.js", logo: "/img/logos/react.svg" },
      { name: "Vue.js / Nuxt", logo: "/img/logos/vue.svg" },
      { name: "HTML & CSS", logo: null },
      { name: "SCSS, Tailwind, Bootstrap", logo: null },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", logo: "/img/logos/python.svg" },
      { name: "Django", logo: "/img/logos/django.svg" },
      { name: "Node.js", logo: "/img/logos/nodejs.svg" },
      { name: "SQL, Postgres, MySQL", logo: null },
      { name: "DynamoDB, Elasticsearch", logo: null },
      { name: "Claude Code, OpenAI, Agentic workflows", logo: null },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker, Terraform", logo: "/img/logos/docker.svg" },
      { name: "Git", logo: "/img/logos/git.svg" },
      { name: "Linux", logo: null },
      { name: "Cloud Technologies (AWS & Firebase)", logo: null },
      { name: "Vitest, Pytest, Jest, Playwright", logo: null },
      { name: "Dagster", logo: null },
    ],
  },
];
</script>

<style scoped>
.skills {
  min-height: fit-content;
  padding-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-groups {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
}

.skill-group {
  display: flex;
  flex-direction: column;
}

.skill-group-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
}

.skill-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 80px;
}

.skill-logo {
  width: 100%;
  max-width: 80px;
  height: auto;
  object-fit: contain;
}

/* Default (Dev/Frontend theme): hide skill names */
.skill-name {
  display: none;
}

/* Show text for skills without image logos */
.skill-item:not(:has(img)) .skill-name {
  display: block;
  font-size: 1rem;
}

/* Minimalist theme: show all text, hide logos, compact grid */
:global(html[data-theme="minimalist"] .skills-container) {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

:global(html[data-theme="minimalist"] .skill-logo) {
  display: none;
}

:global(html[data-theme="minimalist"] .skill-item) {
  padding: 0.75rem 0.5rem;
}

:global(html[data-theme="minimalist"] .skill-content) {
  min-height: auto;
}

:global(html[data-theme="minimalist"] .skill-group-title) {
  color: currentColor;
}

:global(html[data-theme="minimalist"] .skill-name) {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.25rem;
  line-height: 1.3;
}

@media (max-width: 650px) {
  .skills-container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skill-item {
    padding: 0.75rem;
  }

  .skill-content {
    min-height: 60px;
  }

  :global(html[data-theme="minimalist"] .skills-container) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
  }
}
</style>
