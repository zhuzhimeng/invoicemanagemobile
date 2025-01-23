// import { ref } from 'vue'

// export const invoiceData = ref([
//   {
//     id: 1,
//     type: '增值税电子普通发票',
//     seller: '清澜出行科技有限公司',
//     buyer: '武汉数元科技有限公司',
//     date: '2023年11月05日',
//     amount: '19.86',
//     invoiceCode: '042002300411',
//     invoiceNumber: '20974350',
//     verificationCode: '63587666250261362468',
//     items: [
//       {
//         name: '移动通信设备·通讯器材及配件',
//         amount: '-0.92',
//         taxRate: '13%',
//         tax: '-0.12'
//       },
//       {
//         name: '移动通信设备·通讯器材及配件',
//         amount: '18.50',
//         taxRate: '13%',
//         tax: '2.4'
//       }
//     ]
//   }
// ])

// export function getInvoiceById(id) {
//   return invoiceData.value.find(invoice => invoice.id === parseInt(id))
// }


import { ref } from 'vue'
import axios from 'axios'

export const invoiceData = ref([]);

// 获取发票列表数据
export async function fetchInvoiceList() {
  try {
    const response = await axios.get('/api/api/invoiceMobile/getHeader')
    invoiceData.value = response.data;
    // console.log("invoiceData="+JSON.stringify(invoiceData.value));
  } catch (error) {
    console.error('获取发票列表数据失败', error)
  }
};

// 根据 ID 获取发票详情数据
export async function getInvoiceById(id) {
  try {
    const response = await axios.get(`/api/api/invoiceMobile01/getDetail?id=`+id)
    // console.log("response="+JSON.stringify(response.data));
    return response.data
  } catch (error) {
    console.error('获取发票详情数据失败', error)
    return null
  }
};