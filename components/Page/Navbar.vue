<script setup lang="ts">
import { IApp } from '~/utils/app';
export interface IMenuItem {
    type: 'link' | 'button';
    text: string;
    href?: any;
    route?: any;
}

const { t } = useLang();
const app = useState<IApp>('app');
const menus = computed((): IMenuItem[] => [
    { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
    { type: 'link', text: t('pages.test.nav'), route: { name: 'test' } },
    { type: 'link', text: t('pages.about.nav'), route: { name: 'about' } },
    { type: 'link', text: t('pages.setting.nav'), route: { name: 'setting' } },
    { type: 'button', text: t('pages.dashboard.nav'), route: { name: 'dashboard' } },
])

</script>
<template>
    <BuilderNavbar>
        <template #banner>
            <div class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-green-500 capitalize">
                <span class="mr-1">
                    {{ $t('banners.welcome', { app_name: app.name }) }}
                </span>
                <Anchor
                    class="underline font-bold"
                    :text="$t('others.learn_more')"
                    href="https://github.com/SuperService/nuxt-app"
                />
            </div>
        </template>
        <template #menu>
            <div class="relative hidden lg:flex items-center ml-auto">
                <nav
                    class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
                    role="navigation"
                >
                    <ul class="flex items-center space-x-8">
                        <li v-for="(item, i) in menus" :key="i">
                            <Anchor
                                v-if="item.type === 'link'"
                                :to="item.route ? item.route : undefined"
                                :href="item.href ? item.href : undefined"
                                class="capitalize hover:(no-underline text-gray-900) hover:dark:text-white"
                            >
                            {{ item.text }}
                            </Anchor>
                            <Button 
                                v-if="item.type === 'button'"
                                :text="item.text"
                                size="xs"
                                class="font-extrabold capitalize"
                                :to="item.route ? item.route : undefined"
                                :href="item.href ? item.href : undefined"
                            />
                        </li>
                    </ul>
                </nav>
                <div
                    class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
                >
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                    <Anchor
                        class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
                        href="https://github.com/viandwi24/nuxt3-awesome-starter"
                        title="Github"
                    >
                        <IconMdi:github-face />
                    </Anchor>
                </div>
            </div>
        </template>
        <template #options="{ toggleOptions }">
            <ActionSheet @onClose="toggleOptions(false)">
                <ActionSheetBody>
                    <ActionSheetHeader text="Menu" />
                    <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
                        <ul class="flex flex-col">
                            <li
                                v-for="(item, i) in menus"
                                :key="i"
                                class="flex w-full"
                                :class="{
                                    'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                                        item.type === 'link',
                                }"
                            >
                                <Anchor
                                    v-if="item.type === 'link'"
                                    :to="item.route ? item.route : undefined"
                                    :href="item.href ? item.href : undefined"
                                    class="flex-1 hover:no-underline capitalize"
                                >
                                    {{ item.text }}
                                </Anchor>
                                <Button
                                    v-else-if="item.type === 'button'"
                                    :text="item.text"
                                    size="xs"
                                    class="flex-1 font-extrabold capitalize"
                                    :to="item.route ? item.route : undefined"
                                    :href="item.href ? item.href : undefined"
                                />
                            </li>
                        </ul>
                    </nav>
                </ActionSheetBody>
            </ActionSheet>
        </template>
    </BuilderNavbar>
</template>