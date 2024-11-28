<template>
  <div class="filters">
    <van-dropdown-menu>
      <van-dropdown-item v-model="timeFilterValue" :options="timeOptions" title="按归集时间" />
      <van-dropdown-item v-model="statusFilterValue" :options="statusOptions" title="发票状态" />
      <van-dropdown-item v-model="typeFilterValue" :options="typeOptions" title="发票类型" />
    </van-dropdown-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { DropdownMenu as VanDropdownMenu, DropdownItem as VanDropdownItem } from 'vant'

const props = defineProps({
  timeFilter: Number,
  statusFilter: Number,
  typeFilter: Number
})

const emit = defineEmits(['update:timeFilter', 'update:statusFilter', 'update:typeFilter'])

const timeFilterValue = computed({
  get: () => props.timeFilter,
  set: (value) => emit('update:timeFilter', value)
})

const statusFilterValue = computed({
  get: () => props.statusFilter,
  set: (value) => emit('update:statusFilter', value)
})

const typeFilterValue = computed({
  get: () => props.typeFilter,
  set: (value) => emit('update:typeFilter', value)
})

const timeOptions = [
  { text: '全部时间', value: 0 },
  { text: '最近三个月', value: 1 },
  { text: '最近半年', value: 2 },
]

const statusOptions = [
  { text: '全部状态', value: 0 },
  { text: '已开具', value: 1 },
  { text: '开具中', value: 2 },
]

const typeOptions = [
  { text: '全部类型', value: 0 },
  { text: '增值税发票', value: 1 },
  { text: '电子发票', value: 2 },
]
</script>

<style scoped>
.filters {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
}
</style>