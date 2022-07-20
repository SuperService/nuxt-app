<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    to: {
        type: [String, Object],
        default: undefined
    },
    href: {
        type: String,
        default: ''
    }
})

// state
const href = toRef(props, 'href');
const to = toRef(props, 'to');
</script>

<template>
    <NuxtLink
        v-if="to"
        tag="a"
        :to="to"
        class="transition-colors duration-300 dark:hover:text-white hover:(text-gray-900 underline)"
    >
        <slot>{{ text }}</slot>
    </NuxtLink>
    <a
        v-else
        :href="href"
        class="transition-colors duration-300 hover:text-pink-500 dark:hover:text-blue-500"
    >
        <slot>{{ text }}</slot>
    </a>
</template>