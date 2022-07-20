<script setup lang="ts">
import { AppSetup } from './utils/app';
import { ITheme } from './utils/theme';
AppSetup()
const theme = useState<ITheme>('theme.current');
const locale = useState<string>('locale.setting');
</script>

<template>
 <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Body class="antialiased duration-300 transition-colors text-gray-800 bg-white dark:(text-gray-200 bg-gray-900)">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
 </Html>
</template>
