<script setup lang="ts">
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
</style>