<template>
  <div class="invoice-item" @click="goToDetail">
    <div class="invoice-type">
      <span class="type-icon">{{ invoice.typeIcon }}</span>
      <span class="type-text">{{ invoice.serviceName }}</span>
    </div>
    <div class="invoice-details">
      <div class="seller">销售方：{{ invoice.seller }}</div>
      <div class="date">开票时间：{{ invoice.date }}</div>
    </div>
    <div class="invoice-amount">
      <span class="amount">¥{{ invoice.amount }}</span>
      <div class="download-btn" @click.stop="handleDownload">
        <van-icon name="down" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon as VanIcon } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  invoice: {
    type: Object,
    required: true
  }
})

const goToDetail = () => {
  router.push(`/invoice/${props.invoice.id}`)
}

const handleDownload = () => {
  console.log('下载发票')
}
</script>

<style scoped>
.invoice-item {
  padding: 16px;
  margin-bottom: 1px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  cursor: pointer;
}

.invoice-type {
  display: flex;
  align-items: center;
  gap: 8px;
}

.type-icon {
  width: 24px;
  height: 24px;
  background: #4080ff;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.type-text {
  font-size: 16px;
  font-weight: 500;
}

.invoice-details {
  font-size: 14px;
  color: #666;
}

.invoice-amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.amount {
  font-size: 18px;
  font-weight: bold;
  color: #ff6b00;
}

.download-btn {
  padding: 4px 8px;
  background: #fff7e6;
  border-radius: 4px;
  cursor: pointer;
}
</style>