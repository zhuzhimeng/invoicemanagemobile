<template>
  <div class="invoice-detail">
    <div class="nav-bar">
      <van-nav-bar
        title="发票详情"
        left-arrow
        @click-left="goBack"
      >
        <template #right>
          <van-icon name="delete-o" class="nav-icon" />
          <van-icon name="share-o" class="nav-icon" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content" v-if="invoice">
      <div class="invoice-type">{{ invoice.type }}</div>

      <div class="info-section">
        <div class="info-item">
          <span class="label">开票方：</span>
          <span class="value">{{ invoice.seller }}</span>
          <van-icon name="more-o" />
        </div>
        <div class="info-item">
          <span class="label">收票方：</span>
          <span class="value">{{ invoice.buyer }}</span>
          <van-icon name="more-o" />
        </div>
        <div class="info-item">
          <span class="label">开票日期：</span>
          <span class="value">{{ invoice.date }}</span>
          <van-icon name="more-o" />
        </div>
        <div class="info-item">
          <span class="label">开票金额：</span>
          <span class="value">¥{{ invoice.amount }}</span>
          <van-icon name="more-o" />
        </div>
        <div class="info-item">
          <span class="label">开票内容：</span>
          <span class="value">通讯器材及配件</span>
          <van-icon name="more-o" />
        </div>
      </div>

      <div class="items-section">
        <div class="items-header">
          <div class="col">名称</div>
          <div class="col">金额</div>
          <div class="col">税率</div>
          <div class="col">税额</div>
        </div>
        <div class="items-body">
          <div v-for="(item, index) in invoice.items" :key="index" class="item-row">
            <div class="col">{{ item.name }}</div>
            <div class="col">{{ item.amount }}</div>
            <div class="col">{{ item.taxRate }}</div>
            <div class="col">{{ item.tax }}</div>
          </div>
        </div>
      </div>

      <div class="codes-section">
        <div class="code-item">
          <span class="label">发票代码：</span>
          <span class="value">{{ invoice.invoiceCode }}</span>
        </div>
        <div class="code-item">
          <span class="label">发票号码：</span>
          <span class="value">{{ invoice.invoiceNumber }}</span>
        </div>
        <div class="code-item">
          <span class="label">校验码：</span>
          <span class="value">{{ invoice.verificationCode }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NavBar as VanNavBar, Icon as VanIcon } from 'vant'
import { getInvoiceById } from '../stores/invoice'

const route = useRoute()
const router = useRouter()
const invoice = ref(null)

onMounted(() => {
  const id = parseInt(route.params.id)
  invoice.value = getInvoiceById(id)
})

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.invoice-detail {
  min-height: 100vh;
  background: #f5f5f5;
}

.nav-bar {
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-icon {
  margin-left: 16px;
  font-size: 20px;
}

.content {
  padding: 16px;
}

.invoice-type {
  background: #fff;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
}

.info-section {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
}

.info-item {
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  color: #666;
  width: 80px;
  flex-shrink: 0;
}

.value {
  flex: 1;
}

.items-section {
  background: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 16px;
}

.items-header {
  display: flex;
  padding-bottom: 8px;
  border-bottom: 1px solid #f5f5f5;
  color: #666;
  font-size: 14px;
}

.items-body .item-row {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
}

.col {
  flex: 1;
  text-align: center;
}

.codes-section {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
}

.code-item {
  margin-bottom: 8px;
  display: flex;
}

.code-item .label {
  color: #666;
  width: 80px;
}

.code-item .value {
  color: #333;
}
</style>