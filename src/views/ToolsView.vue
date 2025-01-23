<!-- <script setup lang="ts">
const tools = [
  { icon: 'scan', text: '扫一扫', color: '#07c160' },
  { icon: 'photograph', text: '本地相册', color: '#1989fa' },
  { icon: 'wechat', text: '微信卡包获取', color: '#ff976a' },
  { icon: 'alipay', text: '支付宝卡包获取', color: '#7232dd' },
  // { icon: 'link-o', text: '发票连接', color: '#ee0a24' },
  // { icon: 'guide-o', text: '使用教程', color: '#2196f3' }
]
</script>

<template>
  <div>
    <header class="page-header">
      <van-nav-bar title="工具" />
    </header>
    
    <main class="page-content">
      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.text" class="tool-item">
          <van-icon :name="tool.icon" :color="tool.color" size="32" />
          <span>{{ tool.text }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

.tool-item:active {
  opacity: 0.8;
}
</style> -->



<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

// 假设这是上传发票的接口，你需要根据实际情况替换
const uploadInvoice = async (file: File) => {
  const formData = new FormData();
  formData.append('invoice', file);

  try {
    // 这里需要替换为实际的上传接口地址
    const response = await fetch('/api/api/file/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      showToast('上传成功');
    } else {
      showToast('上传失败');
    }
  } catch (error) {
    showToast('上传出错');
  }
};

const tools = [
  { icon: 'scan', text: '扫一扫', color: '#07c160' },
  { icon: 'photograph', text: '本地相册', color: '#1989fa' },
  { icon: 'wechat', text: '微信卡包获取', color: '#ff976a' },
  { icon: 'alipay', text: '支付宝卡包获取', color: '#7232dd' },
  // { icon: 'link-o', text: '发票连接', color: '#ee0a24' },
  // { icon: 'guide-o', text: '使用教程', color: '#2196f3' }
];

const handleUpload = () => {
  console.log("111");
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.pdf,.jpg,.png'; // 限制文件类型为pdf、jpg、png
  input.onchange = (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      uploadInvoice(file);
    }
  };
  input.click();
};
</script>

<template>
  <div>
    <header class="page-header">
      <van-nav-bar title="工具" />
    </header>
    
    <main class="page-content">
      <div class="tools-grid">
        <!-- <div v-for="tool in tools" :key="tool.text" class="tool-item" @click="tool.text == '扫一扫' ?handleUpload: null">
          <van-icon :name="tool.icon" :color="tool.color" size="32" />
          <span>{{ tool.text }}</span>
        </div> -->
        <div key="扫一扫" class="tool-item" @click="null">
          <van-icon name="scan" color="#07c160" size="32" />
          <span>扫一扫</span>
        </div>
        <div key="本地相册" class="tool-item" @click="handleUpload">
          <van-icon name="photograph" color="#1989fa" size="32" />
          <span>本地相册</span>
        </div>
        <div key="微信卡包获取" class="tool-item" @click="null">
          <van-icon name="wechat" color="#ff976a" size="32" />
          <span>微信卡包获取</span>
        </div>
        <div key="支付宝卡包获取" class="tool-item" @click="null">
          <van-icon name="alipay" color="#7232dd" size="32" />
          <span>支付宝卡包获取</span>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
}

.tool-item:active {
  opacity: 0.8;
}
</style>