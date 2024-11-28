<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routeMap = {
  0: '/invoices',
  1: '/tools'
}

const active = ref(0)

watch(active, (newValue) => {
  // if (newValue === 2) {
  //   // 当点击中间的加号按钮时，重置回当前页面的索引
  //   const currentPath = route.path
  //   active.value = Object.entries(routeMap).find(([_, path]) => path === currentPath)?.[0] as unknown as number || 0
  //   return
  // }
  router.push(routeMap[newValue as keyof typeof routeMap])
})

// 初始化当前激活的标签
const initActiveTab = () => {
  const currentPath = route.path
  active.value = Object.entries(routeMap).find(([_, path]) => path === currentPath)?.[0] as unknown as number || 0
}

initActiveTab()</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="bill">票夹</van-tabbar-item>
    <van-tabbar-item icon="plus"></van-tabbar-item>
  </van-tabbar>
</template>