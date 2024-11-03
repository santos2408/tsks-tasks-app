<script setup lang="ts">
import TheHeader from "@/modules/landing-page/components/TheHeader/TheHeader.vue";
</script>

<template>
  <div class="container relative flex h-full w-full flex-col px-4">
    <TheHeader class="mb-48 mt-8" />

    <div class="mb-32">
      <h1 class="mb-6 text-center text-6xl font-bold text-brand-neutral-50">
        Tsks, just tasks<span class="text-brand-gradient">.</span>
      </h1>

      <p class="mx-auto mb-12 max-w-sm text-center text-xl text-brand-neutral-300">
        Keep track of the daily tasks in life and get that satisfaction upon completion.
      </p>

      <div class="flex items-center justify-center gap-3">
        <button
          type="button"
          class="brand-gradient rounded-xl px-8 py-4 font-semibold text-brand-neutral-50 transition hover:opacity-90"
        >
          Get Started!
        </button>
        <button
          type="button"
          class="rounded-xl bg-brand-neutral-500 px-8 py-4 font-semibold text-brand-neutral-50 transition hover:bg-brand-neutral-600"
        >
          Learn More
        </button>
      </div>
    </div>

    <div class="relative">
      <span
        class="brand-gradient absolute -left-40 -top-48 h-[160px] w-[160px] rounded-full"
      ></span>
      <span
        class="brand-gradient absolute -right-24 top-48 z-[-1] h-[180px] w-[180px] rounded-full"
      ></span>
      <img src="../../../assets/img/dashboard-home.png" alt="" />
    </div>
  </div>
</template>
