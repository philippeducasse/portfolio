<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modalOpen"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Choose viewing mode"
      >
        <div class="modal-card">
          <h2 class="modal-heading">Please select your viewing mode</h2>
          <div class="modal-options">
            <button
              v-for="mode in modes"
              :key="mode.id"
              class="mode-btn"
              :class="`mode-btn--${mode.id}`"
              @click="select(mode.id)"
            >
              <span class="mode-btn__name">{{ mode.name }}</span>
              <span class="mode-btn__subtitle">{{ mode.subtitle }}</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <div v-if="currentTheme === 'nostalgic'" class="nostalgic-marquee" role="marquee">
      <span class="nostalgic-marquee__inner">
        ★ UNDER CONSTRUCTION ★ BEST VIEWED IN NETSCAPE 4.0 ★ 1024×768 ★ YOU ARE VISITOR #000847 ★ DO
        NOT STEAL THIS DESIGN ★ GUESTBOOK COMING SOON ★ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ UNDER
        CONSTRUCTION ★ BEST VIEWED IN NETSCAPE 4.0 ★ 1024×768 ★ YOU ARE VISITOR #000847 ★ DO NOT
        STEAL THIS DESIGN ★ GUESTBOOK COMING SOON ★
      </span>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useTheme } from "../utils/useTheme";

const { modalOpen, currentTheme, setTheme, openModal, closeModal } = useTheme();

const modes = [
  {
    id: "minimalist",
    name: "The Minimalist",
    subtitle: "Elegant, simple. If you think css isn't real programming, this is for you",
  },
  {
    id: "frontend",
    name: "The Frontend Dev",
    subtitle: "If you like animations and drink fancy coffee",
  },
  {
    id: "nostalgic",
    name: "The Nostalgic",
    subtitle: "For those who miss the early days of the web.",
  },
];

function select(theme: string) {
  setTheme(theme);
  closeModal();
}

onMounted(() => {
  const saved = localStorage.getItem("viewingMode");
  if (saved) {
    setTheme(saved);
  } else {
    openModal();
  }
});
</script>

<style scoped>
/* ── Modal overlay ── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1.5rem;
}

.modal-card {
  background: #111;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 760px;
  width: 100%;
}

.modal-heading {
  color: #e8e8e8;
  font-family: "Lato", sans-serif;
  font-size: 1.375rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.02em;
}

/* ── Mode options ── */
.modal-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.mode-btn {
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.5rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 1.2s ease;
  margin: 0;
}

.mode-btn--frontend:hover {
  transform: translateY(-4px);
}

.mode-btn__name {
  font-family: "Lato", sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.3;
  display: block;
}

.mode-btn__subtitle {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
}

/* Minimalist card */
.mode-btn--minimalist {
  background: #0a0a0a;
  border: 1px solid #2a2a2a;
  box-shadow: none;
  color: #e8e8e8;
}

.mode-btn--minimalist:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.mode-btn--minimalist .mode-btn__subtitle {
  color: #dfdede;
  font-family: "Courier New", monospace;
}

/* Frontend dev card */
.mode-btn--frontend {
  background: linear-gradient(135deg, #0b1929, #07211f);
  border: 1px solid #337ab7;
  box-shadow: 0 0 16px rgba(51, 122, 183, 0.2);
}

.mode-btn--frontend:hover {
  box-shadow: 0 8px 32px rgba(51, 122, 183, 0.4);
}

.mode-btn--frontend .mode-btn__name {
  background: linear-gradient(90deg, #5ca3e0, #9aecf1) !important;
  font-family: "Lato", sans-serif !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}

.mode-btn--frontend .mode-btn__subtitle {
  color: #b1c2d4 !important;
  font-family: "Lato", sans-serif !important;
  font-style: normal !important;
}

/* Nostalgic card */
.mode-btn--nostalgic {
  background: #c0c0c0;
  border: 3px outset #fff;
  border-radius: 0;
  color: #000;
}

.mode-btn--nostalgic:hover {
  border-style: inset;
  transform: none;
  box-shadow: none;
}

.mode-btn--nostalgic .mode-btn__name {
  color: #000080 !important;
  font-family: "Comic Sans MS", "Comic Sans", cursive !important;
}

.mode-btn--nostalgic .mode-btn__subtitle {
  color: #333 !important;
  font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  font-style: normal !important;
}

/* ── Nostalgic marquee ── */
.nostalgic-marquee {
  position: fixed;
  top: 160px;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  background: #000080;
  color: #ffff00;
  font-family: "Times New Roman", serif;
  font-size: 0.8125rem;
  padding: 3px 0;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #808080;
  z-index: 500;
}

.nostalgic-marquee__inner {
  display: inline-block;
  animation: marquee-scroll 25s linear infinite;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* ── Modal transition ── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 300ms ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .modal-card {
    padding: 1.5rem 1rem;
  }

  .modal-options {
    flex-direction: column;
  }

  .nostalgic-marquee {
    top: 90px;
  }
}
</style>
