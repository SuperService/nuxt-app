<script setup lang="ts">
definePageMeta({
    layout: 'page'
})
</script>
<template>
    <PageWrapper class="flex flex-col justify-center items-center">
        <PageHeader>
            <PageTitle :text="$t('pages.about.title')" class="capitalize" />
        </PageHeader>
        <PageBody>
            <div class="flex flex-col items-center">
                <img 
                    src="https://avatars.githubusercontent.com/u/83168577?v=4"
                    class="inline-block rounded-full"
                    alt="super service"
                    width="100"
                    height="100"
                />
                <Button
                    size="xs"
                    type="opposite"
                    text="IT Master (@superservice)"
                    class="font-extrabold mt-4"
                    href="https://github.com/superservice"
                />
            </div>
        </PageBody>
    </PageWrapper>
</template>