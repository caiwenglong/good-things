<template>
  <div class="page-layout">
    <el-container>
    <el-header>
      <page-header></page-header>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
import PageHeader from '../page-header/PageHeader.vue'

export default defineComponent({
  name: 'PageLayout',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    PageHeader
  }
})
</script>


<style lang="scss">
</style>