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
        
          <ExpandableSection
            :title="`开票方: ${invoice?.seller || '未知类型'}`" 
            :is-expanded="expandedSection === 'issuer'"
            @toggle="toggleSection('issuer')"
          >
            <div class="space-y-2">
              <p>清澜出行科技有限公司</p>
              <p>纳税人识别号：91120116340983307</p>
              <p>地址、电话：天津经济技术开发区南港工业区综合服务区办公楼C座103室12单元</p>
              <p>电话：022-59002850</p>
              <p>开户行及账号：招商银行股份有限公司天津自由贸易试验区分行122905939910401</p>
            </div>
          </ExpandableSection>
          <!-- <span class="label">开票方：</span>
          <span class="value">{{ invoice.seller }}</span> -->
          <!-- <van-icon name="more-o" /> -->
        
          <ExpandableSection
            :title="`收票方: ${invoice?.buyer || '未知类型'}`" 
            :is-expanded="expandedSection === 'recipient'"
            @toggle="toggleSection('recipient')"
          >
        <div class="space-y-2">
          <p>武汉数元科技有限公司</p>
          <p>纳税人识别号：914201MA4K47AT48</p>
        </div>
      </ExpandableSection>

      <ExpandableSection
        :title="`开票日期: ${invoice?.date || '未知类型'}`" 
        :is-expanded="expandedSection === 'date'"
        @toggle="toggleSection('date')"
      >
        <p>2021年04月25日</p>
      </ExpandableSection>

      <ExpandableSection
        :title="`开票金额: ${invoice?.amount || '未知类型'}`" 
        :is-expanded="expandedSection === 'amount'"
        @toggle="toggleSection('amount')"
      >
        <div class="space-y-2">
          <div class="flex justify-between">
            <span>大写：</span>
            <span>肆拾叁圆壹角肆分</span>
          </div>
          <div class="flex justify-between">
            <span>小写：</span>
            <span>¥43.14</span>
          </div>
        </div>
      </ExpandableSection>

      <ExpandableSection
        title="开票内容:*运输服务*客运服务费"
        :is-expanded="expandedSection === 'content'"
        @toggle="toggleSection('content')"
      >
        <div class="space-y-3" v-if="expandedSection === 'content'">
          <p>*运输服务*客运服务费</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-left text-gray-600">
                  <th class="font-normal pb-2 pr-2">名称</th>
                  <th class="font-normal pb-2 pr-2">金额</th>
                  <th class="font-normal pb-2 pr-2">税率</th>
                  <th class="font-normal pb-2">税额</th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr v-for="(item, index) in invoice.items" :key="index">
                  <td class="pr-2">{{ item.name }}</td>
                  <td class="pr-2">{{ item.amount }}</td>
                  <td class="pr-2">{{ item.taxRate }}</td>
                  <td>{{ item.tax }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="space-y-1 pt-2 text-gray-600">
            <p>发票代码: {{ invoice.invoiceCode }}</p>
            <p>发票号码: {{ invoice.invoiceNumber }}</p>
            <p>校验码: {{ invoice.checkCode }}</p>
          </div>
        </div>
      </ExpandableSection>
      </div>
<!-- 
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
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ExpandableSection from './invoice/ExpandableSection.vue';
import { ArrowLeft, Share2, Trash2 } from 'lucide-vue-next';
import { NavBar as VanNavBar, Icon as VanIcon } from 'vant'
import { getInvoiceById } from '../stores/invoice'

const route = useRoute()
const router = useRouter()
const invoice = ref(null)
computed: {


}

onMounted(() => {
  const id = parseInt(route.params.id)
  invoice.value = getInvoiceById(id)
})

const goBack = () => {
  router.push('/')
}

const expandedSection = ref(null);

const toggleSection = (section) => {
  expandedSection.value = expandedSection.value === section ? null : section;
};
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