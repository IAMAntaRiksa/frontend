<template>
    <nav class="nav w-full fixed bg-white z-50 " :class="{ 'scrolled': !atTopOfPage }">
        <div class=" container max-w-6xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">

                <div class="w-full flex items-center md:w-auto">
                    <button @click="menuItem"
                        className="mr-0 block rounded-full z-50 hover:bg-gray-200 md:mr-8 xl:hidden">
                        <Bars3Icon :icon="[openMenu ? 'mdi:close' : 'fluent:list-16-filled']"
                            class="h-8 w-8 text-gray-400" />
                    </button>
                    <Logo />
                    <NavigationLinks :class="[openMenu ? 'left-0' : 'left-[-100%]']" />
                </div>
                <div class="flex items-center">
                    <Buttom />
                    <div class="h-10 mx-2 hidden border-r-2 border-gray-200 md:block"></div>
                    <GridIconSvg class="ml-2 z-50" @click="menuTheme()" />
                    <div v-if="open" class="relative">
                        <div
                            class="absolute top-[20px] right-[0px] px-[30px] py-[30px]  bg-white shadow-lg rounded-xl ">
                            <p class="mb-4 text-sm font-normal text-gray-600 lg:text-lg">
                                Tema Mode
                            </p>
                            <div class="flex items-center px-4">
                                <p class="text-sm font-normal text-black text-center lg:text-lg">
                                    Terang
                                </p>
                                <label class="mx-3 relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                                    </div>
                                </label>
                                <p class="text-sm font-normal text-black text-center lg:text-lg">
                                    Gelap
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

import { ref } from '@vue/reactivity'
import GridIconSvg from '../../components/icons/svg/Grid.vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import NavigationLinks from '../../components/layouts/NavigationLinks.vue';
import Buttom from '../../components/layouts/Buttom.vue';
import Logo from '../../components/layouts/Logo.vue';
import { onBeforeMount } from '@vue/runtime-core';
export default {
    components: {
        GridIconSvg,
        NavigationLinks,
        Logo,
        Buttom,
        Bars3Icon
    },
    setup() {


        let open = ref(false);

        let openMenu = ref(false);

        const atTopOfPage = ref(true);

        function menuItem() {
            openMenu.value = !openMenu.value
        }
        function menuTheme() {
            open.value = !open.value
        }


        function handleScroll() {
            if (window.pageYOffset > 0) {
                atTopOfPage.value = false
            } else {
                atTopOfPage.value = true
            }
        }
        onBeforeMount(() => {
            window.addEventListener('scroll', handleScroll);
        })
        return {
            handleScroll,
            atTopOfPage,
            open,
            openMenu,
            menuItem,
            menuTheme,

        }
    }
}
</script>

<style>

</style>