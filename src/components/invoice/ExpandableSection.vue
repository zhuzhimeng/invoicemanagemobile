<template>
    <div class="bg-white">
      <div
        class="flex items-center justify-between py-3 px-4 border-b border-gray-100 cursor-pointer"
        @click="$emit('toggle')"
        role="button"
        :aria-expanded="isExpanded"
      >
        <span class="text-gray-900 text-sm">{{ title }}</span>
        <div class="flex items-center">
          <!-- <span class="text-gray-400 mr-1">...</span> -->
          <ChevronDown
            class="w-4 h-4 text-gray-400 transition-transform duration-200 ease-in-out"
            :class="{ 'rotate-180': isExpanded }"
          />
        </div>
      </div>
      <transition name="expand">
        <div
          v-if="isExpanded"
          class="px-4 py-3 text-sm text-gray-600 bg-gray-50"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ChevronDown } from 'lucide-vue-next';
  
  defineProps<{
    title: string;
    isExpanded: boolean;
  }>();
  
  defineEmits<{
    (e: 'toggle'): void;
  }>();
  </script>
  
  <style scoped>
  .expand-enter-active,
  .expand-leave-active {
    transition: all 0.2s ease;
  }
  
  .expand-enter-from,
  .expand-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>