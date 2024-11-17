<template>
  <section :class="appContainerClasses">
    <el-drawer
      v-if="appStateStore.isMobile"
      v-model="settingsStore.menu.isActive"
      :with-header="false"
      size="60%"
      direction="ltr"
    >
      <AsideLayout />
    </el-drawer>
    <AsideLayout v-else />

    <main>
      <el-button circle @click="settingsStore.toggleActive">
        <template #icon>
          <icon-font name="menu" />
        </template>
      </el-button>

      <router-view />
    </main>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AsideLayout from './views/AsideLayout.vue'
import { useSettingsStore, useAppStateStore } from '@/stores'

const settingsStore = useSettingsStore()

const appStateStore = useAppStateStore()

const appContainerClasses = computed(() => [
  'app-container',
  settingsStore.menu.isActive ? 'aside-is-active' : 'aside-is-inactive',
  appStateStore.isMobile ? 'is-mobile' : 'is-pc',
  settingsStore.menu.isCollapsed ? 'aside-is-collapsed' : 'aside-is-uncollapsed'
])
</script>

<style lang="less">
// aside的宽度变量
@aside-width: 250px;
@aside-collapsed-width: 84px;

.app-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: #fff;



  &.is-pc {

    .aside-layout {
      position: absolute;
      top: 0;
      left: 0;
      width: @aside-width;
      height: 100%;
      transition: transform 0.3s ease-in-out;
    }


    main {
      margin-left: @aside-width;
      transition: margin-left 0.3s ease-in-out;

      .menu-collapse {
        cursor: pointer;
      }
    }

    &.aside-is-inactive {
      .aside-layout {
        transform: translate(-100%);
      }

      main {
        margin-left: 0;
      }
    }

    &.aside-is-collapsed {
      .aside-layout {
        width: @aside-collapsed-width;
      }

      main {
        margin-left: @aside-collapsed-width;
      }

      &.aside-is-inactive {
        main {
          margin-left: 0;
        }
      }
    }
  }

  &.is-mobile {
    .el-drawer__body {
      padding: 0;
    }
    .aside-layout {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
