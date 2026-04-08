<template>
  <section class="skills" id="skills">
    <h2 class="section-title hidden right">Skills</h2>
    <div class="skills-groups">
      <div v-for="group in skillGroups" :key="group.name" class="skill-group">
        <h3 class="skill-group-title">{{ group.name }}</h3>
        <div class="skills-container">
          <div v-for="(skill, index) in group.skills" :key="skill.name" :class="['skill-item', 'hidden', getAnimationDirection(index)]">
            <div class="skill-content">
              <div v-if="skill.logo" class="skill-logos">
                <img
                  v-for="(logo, idx) in Array.isArray(skill.logo) ? skill.logo : [skill.logo]"
                  :key="`${skill.name}-${idx}`"
                  :src="logo"
                  :alt="skill.name"
                  class="skill-logo"
                  :title="skill.name"
                />
              </div>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getAnimationDirection } from '../utils/useAnimations';

const skillGroups = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", logo: "/img/logos/typescript.svg" },
      { name: "JavaScript", logo: "/img/logos/js.svg" },
      { name: "React / Next.js", logo: ["/img/logos/react.svg", "img/logos/next.svg"] },
      { name: "Vue.js / Nuxt", logo: ["/img/logos/vue.svg", "img/logos/nuxt.svg"] },
      { name: "HTML & CSS", logo: ["/img/logos/html.svg", "/img/logos/css.svg"] },
      { name: "Tailwind", logo: "/img/logos/tailwind.svg" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", logo: "/img/logos/python.svg" },
      { name: "Django", logo: "/img/logos/django.svg" },
      { name: "Node.js", logo: "/img/logos/node.svg" },
      { name: "SQL, Postgres, MySQL", logo: ["/img/logos/postgres.svg", "/img/logos/mysql.svg"] },
      { name: "DynamoDB, Elasticsearch", logo: ["/img/logos/dynamodb.svg"] },
      {
        name: "Claude Code, OpenAI, Agentic workflows",
        logo: ["/img/logos/anthropic.svg", "/img/logos/openai.svg"],
      },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker, Terraform", logo: "/img/logos/docker.svg" },
      { name: "Git", logo: "/img/logos/git.svg" },
      { name: "Linux", logo: "/img/logos/linux.svg" },
      {
        name: "Cloud Technologies (AWS & Firebase)",
        logo: ["/img/logos/aws.svg", "/img/logos/firebase.svg"],
      },
      {
        name: "Vitest, Pytest, Jest, Playwright",
        logo: ["/img/logos/vitest.svg", "/img/logos/pytest.svg"],
      },
      { name: "Dagster", logo: "/img/logos/dagster.svg" },
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
  justify-content: center;
  padding: 1rem;
}

.skill-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  height: 100%;
}

.skill-logos {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.skill-logo {
  width: 100%;
  max-width: 80px;
  height: auto;
  object-fit: contain;
}

.skill-logos .skill-logo {
  max-width: 60px;
  width: 60px;
}

.skill-logos:has(> :only-child) .skill-logo {
  max-width: 80px;
  width: 100%;
}

.skill-name {
  display: block;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
}

/* Minimalist theme: show all text, hide logos, compact grid */
:global(html[data-theme="minimalist"] .skills-container) {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

:global(html[data-theme="minimalist"] .skill-logos) {
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
