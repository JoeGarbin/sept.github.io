<template>
  <i class="iconfont" :class="`icon-${name}`" />
</template>

<script lang="ts">
import './iconfont.css'
</script>

<script lang="ts" setup>
defineOptions({ name: 'IconFont' })

defineProps<{
  name: string
}>()
</script>
