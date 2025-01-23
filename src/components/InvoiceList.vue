<!-- <template>
  <div class="invoice-list">
    <invoice-filters
      v-model:timeFilter="timeFilter"
      v-model:statusFilter="statusFilter"
      v-model:typeFilter="typeFilter"
    />
    <invoice-group
      v-for="group in invoiceGroups"
      :key="group.month"
      :group="group"
    />
    <div class="no-more" v-if="noMoreData">没有更多啦</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InvoiceFilters from './InvoiceFilters.vue'
import InvoiceGroup from './InvoiceGroup.vue'

const timeFilter = ref(0)
const statusFilter = ref(0)
const typeFilter = ref(0)

const invoiceGroups = ref([
  {
    month: '2024年1月',
    count: 2,
    invoices: [
      {
        id: 1,
        typeIcon: '电',
        serviceName: '"运输服务"客运服务费',
        seller: '滴滴出行科技有限公司',
        date: '2024-01-25',
        amount: '43.14'
      },
      {
        id: 2,
        typeIcon: '增',
        serviceName: '商品销售',
        seller: '京东商城',
        date: '2024-01-20',
        amount: '299.00'
      }
    ]
  },
  {
    month: '2023年12月',
    count: 1,
    invoices: [
      {
        id: 3,
        typeIcon: '电',
        serviceName: '餐饮服务',
        seller: '美团外卖',
        date: '2023-12-15',
        amount: '88.00'
      }
    ]
  }
])

const noMoreData = ref(true)
</script>

<style scoped>
.invoice-list {
  background: #f5f5f5;
  min-height: 100vh;
}

.no-more {
  text-align: center;
  padding: 16px;
  color: #999;
  font-size: 14px;
}
</style> -->




<template>
  <div class="invoice-list">
    <!-- <invoice-filters
      v-model:timeFilter="timeFilter"
      v-model:statusFilter="statusFilter"
      v-model:typeFilter="typeFilter"
    /> -->
    <invoice-group
      v-for="group in invoiceGroups"
      :key="group.month"
      :group="group"
    />
    <div class="no-more" v-if="noMoreData">没有更多啦</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InvoiceFilters from './InvoiceFilters.vue'
import InvoiceGroup from './InvoiceGroup.vue'
import { fetchInvoiceList,invoiceData } from '../stores/invoice.js'

const timeFilter = ref(0)
const statusFilter = ref(0)
const typeFilter = ref(0)

const invoiceGroups = ref([])
const noMoreData = ref(true)

onMounted(async () => {
  await fetchInvoiceList();
  // 这里需要根据实际情况对 invoiceData 进行分组处理，生成 invoiceGroups 的数据
  // 示例代码：
  const groupedData = {}
  // console.log("invoiceData:"+JSON.stringify(invoiceData.value));
  var i=0;
  invoiceData.value.forEach(invoice => {
 
    // const month = invoice.date.split('-')[0] + '年' + invoice.date.split('-')[1] + '月'
    // if (!groupedData[month]) {
    //   groupedData[month] = {
    //     month,
    //     count: 0,
    //     invoices: []
    //   }
    // }
    // groupedData[month].count++
    groupedData[i] = {
        invoices: []
      }
    groupedData[i].invoices.push(invoice)
    i++;
    // console.log("i:"+i);
  })
  console.log("i:"+i);
  // invoiceGroups.value = invoiceData.value
  invoiceGroups.value = Object.values(groupedData);
  // console.log("invoiceGroups:"+JSON.stringify(Object.values(groupedData)));
})
</script>

<style scoped>
.invoice-list {
  background: #f5f5f5;
  min-height: 100vh;
}

.no-more {
  text-align: center;
  padding: 16px;
  color: #999;
  font-size: 14px;
}
</style>