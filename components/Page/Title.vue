<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <div class="text-4xl font-bold">
        {{ text }}
    </div>
</template>