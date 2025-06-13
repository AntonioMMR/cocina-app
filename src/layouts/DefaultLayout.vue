<template>
    <div class="flex h-screen">
        <Sidebar />
        <div class="flex-1 bg-gray-100 p-4">
            <Header />
            <router-view />
        </div>
    </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
</script>