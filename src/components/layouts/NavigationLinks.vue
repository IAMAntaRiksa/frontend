<template>
    <nav class="top-0 left-0 w-full h-screen pt-24 pb-8 px-[20px] fixed bg-white sm:w-64 xl:top-auto xl:w-auto
        xl:h-auto xl:p-0 xl:static " :class="[openMenu ? openMenu : false]">
        <ul class="flex flex-col items-start xl:flex-row xl:items-center">
            <router-link class="mr-0 mb-4 xl:mr-4 xl:mb-0" v-for="link in links" :key="link.name" :to="link.url">
                <buttom :class="link.class">{{ link.name }}</buttom>
            </router-link>
            <li class="mr-0 mb-4 xl:mr-4 w-full block xl:mb-0 xl:hidden">
                <div class="w-full border-t-2 border-gray-200"></div>
            </li>
            <li class="mr-0 mb-4 xl:mr-4 block xl:mb-0 xl:hidden">
                <a href="/login-buyer"
                    class="px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base">
                    Masuk
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    props: {
        openMenu: Boolean,
    },

    setup() {
        let links = [
            { url: "/", name: "Beranda", class: "px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base" },
            { url: "/about", name: "Katalog", class: "px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base" },
            { url: "/store", name: "Social Commerce", class: "px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base" },
            { url: "/kementrial", name: "Kementrian", class: "px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base" },
            { url: "/profile", name: "Kontak", class: "px-4 py-2 text-sm font-medium text-black hover:border-2 hover:border-green-600 hover:bg-gray-200 hover:rounded-lg xl:text-base" },
        ];
        return {
            links,
        };
    }
}
</script>

<style>

</style>