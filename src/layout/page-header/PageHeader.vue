<template>
  <div class="part-header">
    <part-menu></part-menu>
    <part-banner></part-banner>
    <part-outstanding></part-outstanding>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PartMenu from '@/components/part-menu/PartMenu.vue'
import PartBanner from '@/components/home/PartBanner.vue'
import PartOutstanding from '@/components/part-outstanding/PartOutstanding.vue'

export default defineComponent({
  name: 'PageHeader',
  components: {
    PartMenu,
    PartBanner,
    PartOutstanding
  }
})
</script>


<style lang="scss">
.part-header {
  position: relative;
  min-height: 650px;
  margin-bottom: 152px;
  background-image: linear-gradient(0deg, #d5eaff, #fff);
}
</style>