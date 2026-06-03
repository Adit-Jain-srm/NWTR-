"use client";

const clickSoundPool: HTMLAudioElement[] = [];
let poolInitialized = false;

function initPool() {
  if (poolInitialized || typeof window === "undefined") return;
  poolInitialized = true;

  for (let i = 0; i < 4; i++) {
    const audio = new Audio();
    audio.volume = 0.08;
    // Inline base64 soft click sound (tiny PCM pop)
    audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
    clickSoundPool.push(audio);
  }
}

let poolIndex = 0;

export function playClickSound() {
  initPool();
  if (clickSoundPool.length === 0) return;

  const audio = clickSoundPool[poolIndex % clickSoundPool.length];
  poolIndex++;

  audio.currentTime = 0;
  audio.play().catch(() => {});
}

export function useClickSound() {
  return playClickSound;
}
