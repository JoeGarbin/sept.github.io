<template>
  <div class="x-submenu">
    <el-sub-menu v-if="hasChildren" :index="route.path">
      <template #title>
        <icon-font :name="route.meta?.icon" />
        <span>{{ route.meta?.title }}</span>
      </template>
      <x-submenu v-for="item in route.children" :key="item.path" :route="item" />
    </el-sub-menu>
    <el-menu-item v-else :index="route.path">
      <template #title>
        <icon-font :name="route.meta?.icon" />
        {{ route.meta?.title }}
      </template>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  route: RouteRecordRaw
}>()

const hasChildren = computed(() => props.route.children && props.route.children.length > 0)
</script>

<style lang="less">
.x-submenu {
  .iconfont {
    margin-right: 8px;
  }

  .el-sub-menu__title,
  .el-menu-item__title {
    display: flex;
    align-items: center;
  }
}
</style>
