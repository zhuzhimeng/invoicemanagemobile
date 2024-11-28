<template>
  <div class="time-group">
    <div class="month-header">{{ group.month }} ({{ group.count }}张)</div>
    <div class="invoice-items">
      <invoice-item
        v-for="invoice in group.invoices"
        :key="invoice.id"
        :invoice="invoice"
      />
    </div>
  </div>
</template>

<script setup>
import InvoiceItem from './InvoiceItem.vue'

defineProps({
  group: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.time-group {
  margin-top: 12px;
}

.month-header {
  padding: 8px 16px;
  font-size: 14px;
  color: #666;
  background: #f5f5f5;
}

.invoice-items {
  background: #fff;
}
</style>