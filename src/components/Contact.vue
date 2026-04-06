<template>
  <section class="contact" id="contact">
    <h2 class="section-title hidden right">Contact</h2>
    <p class="hidden left">Feel free to reach out to me on your preferred platform.</p>
    <div class="contact-info hidden right">
      <div class="social-links">
        <a href="mailto:info@philippeducasse.com" class="social-link" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/philippe-ducasse/"
          class="social-link"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/public/img/logos/linkedin.svg" alt="" />
        </a>
        <a
          href="https://github.com/philippeducasse/"
          class="social-link"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact {
  text-align: center;
  min-height: fit-content;
}

.contact h5 {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.contact-info {
  margin-top: 2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.social-link:hover {
  color: var(--tertiary-color);
  transform: translateY(-0.25rem);
}

.social-link svg {
  width: 100%;
  height: 100%;
}
</style>
