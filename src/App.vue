<template>
    <header>
        <router-link to="/">首页</router-link> |
        <router-link to="/expRecords">实验记录</router-link>
        <!-- <hr> -->
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
console.log(router)
console.log(route)
</script>