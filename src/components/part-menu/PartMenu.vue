<template>
  <div class="part-menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">main</el-menu-item>
      <el-submenu index="2">
        <template #title>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template #title>选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item
        index="3"
        disabled
      >消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup } from 'element-plus'

export default defineComponent({
  name: 'PartMenu',
  components: {
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElMenuItemGroup
    
  },
  setup() {
    const activeIndex = ref('1')

    return {
      activeIndex
    }
  }
})
</script>
