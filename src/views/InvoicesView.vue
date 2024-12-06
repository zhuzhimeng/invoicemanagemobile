<script setup lang="ts">
import { ref } from 'vue'
import InvoiceList from '../components/InvoiceList.vue'


const noMoreData = ref(true)
</script>

<template>
  <div>
    <header class="page-header">
      <van-nav-bar title="票夹" />
    </header>
    <invoice-list />
  </div>
</template>

