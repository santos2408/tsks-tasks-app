<script setup lang="ts">
import { X } from "lucide-vue-next";

const emit = defineEmits(["close-menu-mobile"]);

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <Transition name="slide-fade">
    <div
      v-if="props.visible"
      class="fixed left-0 top-0 h-full w-full backdrop-blur-[1.5px]"
    ></div>
  </Transition>

  <Transition name="slide-fade">
    <div v-if="props.visible" class="fixed left-0 top-0 h-full w-full">
      <div
        class="fixed bottom-0 left-0 h-1/4 w-full rounded-t-[32px] bg-brand-neutral-700 px-8 xl:flex"
      >
        <button
          type="button"
          class="absolute right-5 top-5 rounded-full bg-brand-neutral-500 p-1 transition hover:bg-brand-neutral-400"
          @click="() => emit('close-menu-mobile', false)"
        >
          <X :size="16" class="text-brand-neutral-50" />
        </button>

        <p class="mb-4 mt-8 pr-8 text-2xl text-brand-neutral-50">
          Log in or create an account to get started.
        </p>

        <div class="flex gap-3">
          <button
            type="button"
            class="brand-gradient flex-1 rounded-xl py-3 text-brand-neutral-50 transition xl:hover:text-brand-neutral-50"
          >
            Log in
          </button>

          <button
            type="button"
            class="flex-1 rounded-xl bg-brand-neutral-500 py-3 text-brand-neutral-50 transition xl:border-2 xl:border-brand-neutral-400 xl:px-8 xl:text-brand-neutral-100 xl:hover:text-brand-neutral-50"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
