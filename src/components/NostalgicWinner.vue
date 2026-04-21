<template>
  <div class="winner-section" aria-label="Congratulations">
    <div class="winner-box">
      <div class="winner-stars">★ ★ ★ ★ ★</div>
      <h2 class="winner-title">YOU WON!!!</h2>
      <p class="winner-subtitle">Congratulations!</p>
      <p class="winner-message">You are the <strong>1000th visitor</strong> to this site!</p>
      <p class="winner-prize">You have won a SPECIAL PRIZE!</p>
      <a href="#" class="winner-btn" @click.prevent> *** CLICK HERE TO CLAIM YOUR PRIZE *** </a>
      <div class="winner-stars">★ ★ ★ ★ ★</div>
    </div>
  </div>
</template>

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
