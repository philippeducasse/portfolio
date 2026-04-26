<template>
  <div class="winner-section" aria-label="Congratulations">
    <div class="winner-box">
      <div class="winner-stars">★ ★ ★ ★ ★</div>
      <h2 class="winner-title">YOU WON!!!</h2>
      <p class="winner-subtitle">Congratulations!</p>
      <p class="winner-message">You are the <strong>1000th visitor</strong> to this site!</p>
      <p class="winner-prize">You have won a SPECIAL PRIZE!</p>
      <a href="#" class="winner-btn" @click.prevent="showModal = true"> *** CLICK HERE TO CLAIM YOUR PRIZE *** </a>
      <div class="winner-stars">★ ★ ★ ★ ★</div>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-window">
        <div class="modal-titlebar">
          <span class="modal-titlebar-text">YOUR PRIZE</span>
          <button class="modal-close-btn" @click="showModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="modal-marquee-wrapper">
            <p class="modal-marquee">★ ★ ★ CONGRATULATIONS ★ ★ ★ YOU ARE A WINNER ★ ★ ★ CONGRATULATIONS ★ ★ ★</p>
          </div>
          <p class="modal-prize-text">HERE IS YOUR PRIZE!!!</p>
          <div class="modal-img-frame">
            <img src="/img/nokia.jpg" alt="Your prize: a Nokia 3310!" class="modal-prize-img" />
          </div>
          <p class="modal-caption">A Nokia 3310 — INDESTRUCTIBLE!!!</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style scoped>
.winner-section {
  display: flex;
  justify-content: center;
  padding: 24px 16px;
}

.winner-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #ff0000;
  padding: 24px 32px;
  text-align: center;
  max-width: 480px;
  width: 100%;
  box-shadow: 6px 6px 0 #000;
}

.winner-stars {
  color: #ff0000;
  font-size: 1.2rem;
  letter-spacing: 4px;
  animation: winner-star-color 3s step-end infinite;
}

@keyframes winner-star-color {
  0%,
  100% {
    color: #ff0000;
  }

  50% {
    color: #0000ff;
  }
}

.winner-title {
  font-family: "Times New Roman", Times, serif;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  color: #cc0000;
  text-decoration: underline;
  margin: 8px 0;
  animation: winner-title-flash 0.5s step-end infinite;
}

@keyframes winner-title-flash {
  0%,
  100% {
    color: #cc0000;
  }

  50% {
    color: #0000cc;
  }
}

.winner-subtitle {
  font-size: 1.3rem;
  margin: 4px 0;
}

.winner-message {
  font-family: "Comic Sans MS", "Comic Neue", cursive;
  font-size: 1.1rem;
  color: #000;
  margin: 8px 0;
}

.winner-prize {
  font-family: "Comic Sans MS", "Comic Neue", cursive;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000080;
  margin: 8px 0;
}

.winner-btn {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 20px;
  background-color: #00aa00;
  color: #ffff00;
  font-family: "Comic Sans MS", "Comic Neue", cursive;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border: 3px outset #fff;
  box-shadow: 3px 3px 0 #000;
  cursor: pointer;
  animation: winner-btn-flash 0.8s step-end infinite;
}

.winner-btn:hover {
  border-style: inset;
  box-shadow: 1px 1px 0 #000;
}

@keyframes winner-btn-flash {
  0%,
  100% {
    background-color: #00aa00;
    color: #ffff00;
  }

  50% {
    background-color: #ff6600;
    color: #fff;
  }
}

/* Modal */

.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 128, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-window {
  background-color: #c0c0c0;
  border: 3px outset #fff;
  box-shadow: 6px 6px 0 #000;
  width: min(420px, 96vw);
  font-family: "Comic Sans MS", "Comic Neue", cursive;
}

.modal-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #000080, #1084d0);
  padding: 4px 6px;
}

.modal-titlebar-text {
  color: #fff;
  font-family: "Times New Roman", Times, serif;
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 1px;
  animation: titlebar-flash 0.6s step-end infinite;
}

@keyframes titlebar-flash {
  0%,
  100% {
    color: #fff;
  }

  50% {
    color: #ffff00;
  }
}

.modal-close-btn {
  background-color: #c0c0c0;
  border: 2px outset #fff;
  color: #000;
  font-size: 0.85rem;
  font-weight: bold;
  width: 20px;
  height: 20px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close-btn:hover {
  border-style: inset;
}

.modal-body {
  padding: 16px;
  text-align: center;
  border: 2px inset #808080;
  margin: 6px;
  background-color: #d4d0c8;
}

.modal-marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
  background-color: #000080;
  color: #ffff00;
  font-size: 0.85rem;
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 10px;
}

.modal-marquee {
  display: inline-block;
  animation: marquee-scroll 8s linear infinite;
  margin: 0;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.modal-prize-text {
  font-family: "Times New Roman", Times, serif;
  font-size: clamp(1.3rem, 5vw, 1.8rem);
  font-weight: bold;
  margin: 8px 0;
  animation: prize-text-flash 0.4s step-end infinite;
}

@keyframes prize-text-flash {
  0%,
  100% {
    color: #cc0000;
  }

  33% {
    color: #0000cc;
  }

  66% {
    color: #006600;
  }
}

.modal-img-frame {
  border: 4px inset #808080;
  display: inline-block;
  background-color: #fff;
  padding: 4px;
  margin: 10px 0;
  box-shadow: 4px 4px 0 #000;
}

.modal-prize-img {
  display: block;
  max-width: 180px;
  max-height: 260px;
  width: 100%;
}

.modal-caption {
  font-size: 0.95rem;
  color: #000080;
  font-weight: bold;
  margin: 4px 0 12px;
}

.modal-claim-btn {
  display: inline-block;
  padding: 8px 18px;
  background-color: #00aa00;
  color: #ffff00;
  font-family: "Comic Sans MS", "Comic Neue", cursive;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border: 3px outset #fff;
  box-shadow: 3px 3px 0 #000;
  cursor: pointer;
  animation: winner-btn-flash 0.8s step-end infinite;
}

.modal-claim-btn:hover {
  border-style: inset;
  box-shadow: 1px 1px 0 #000;
}

@media (max-width: 500px) {
  .winner-box {
    padding: 16px 20px;
    max-width: 100%;
  }

  .winner-stars {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  .winner-subtitle {
    font-size: 1.1rem;
  }

  .winner-message {
    font-size: 0.95rem;
  }

  .winner-prize {
    font-size: 1rem;
  }

  .winner-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>
