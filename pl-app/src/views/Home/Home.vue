<script setup lang="ts">
import { Button, Grid, GridItem, Image, Search, Swipe, SwipeItem } from 'vant'
import { ref } from 'vue'
import HomeBanner from './HomeBanner.vue'
import VideoCardFlow from '@/components/VideoCardFlow/VideoCardFlow.vue'

const searchValue = ref('')

function onSearch() {
  // alert('search')
}
</script>

<template>
  <div>
    <Search
      v-model="searchValue"
      shape="round" placeholder="请输入搜索关键词"
      @search="onSearch"
    />
    <HomeBanner />
    <VideoCardFlow />
  </div>
</template>
