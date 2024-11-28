<script setup lang="ts">
import TabBar from './components/TabBar.vue'
</script>

<template>
  <div class="app-container">
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  background-color: #f7f8fa;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  padding: 16px;
}

.page-header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>