<template>
    <section class="w-full">
        <div class="container max-w-6xl mx-auto px-4 py-8">
            <div className="hero-slider">
                <Swiper :modules="modules" :pagination="{ clickable: true }"
                    :thumbs="{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }">
                    <SwiperSlide>
                        <div class="flex flex-col items-center lg:flex-row">
                            <div class="w-full mb-8 lg:w-5/12">
                                <h2 class="mb-4 text-2xl font-medium text-black text-center lg:text-left lg:text-3xl">
                                    Pituku: Jual Beli Sampah Mudah dan Terpercaya
                                </h2>
                                <p class="mb-8 text-base font-normal text-gray-400 text-center lg:text-lg lg:text-left">
                                    Platform Pituku memudahkan transaksi jual beli sampah dan
                                    limbah berkualitas dengan harga terbaik, transparan, dan
                                    terpercaya.
                                </p>
                                <button
                                    class="px-4 py-2 w-full text-lg font-normal text-green-600 border-2 border-green-600 rounded-md hover:bg-green-50 lg:w-auto">
                                    PESAN SEKARANG
                                </button>
                            </div>
                            <div class="w-full mb-8 lg:w-7/12">
                                <div class="flex justify-center">
                                    <div class="h-80 lg:h-64">
                                        <img src="@/assets/hero/banner-1.png" alt="" class="h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class=" flex flex-col items-center lg:flex-row">
                            <div class="w-full mb-8 order-2 lg:w-7/12 lg:order-1">
                                <div class="flex justify-center">
                                    <div class="h-80 lg:h-64">
                                        <img src="@/assets/hero/banner-2.png" alt="" class="h-full" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mb-8 order-1 lg:w-5/12 lg:order-2">
                                <h2 class="mb-4 text-2xl font-medium text-black text-center lg:text-left lg:text-3xl">
                                    Gabung menjadi Agen Penjualan Produk Pituku
                                </h2>
                                <p class="mb-8 text-base font-normal text-gray-400 text-center lg:text-lg lg:text-left">
                                    Dapatkan keuntungan hingga Rp 10 juta/bulan dengan bergabung
                                    menjadi agen penjual produk ramah lingkungan Pituku
                                </p>
                                <button
                                    class="px-4 py-2 w-full text-lg font-normal text-white border-2 bg-green-600 border-green-600 rounded-md hover:opacity-75 lg:w-auto">
                                    MULAI SEKARANG
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="flex flex-col items-center">
                            <h2 class="mb-4 text-3xl font-medium text-black text-center">
                                Buat Brand Eco-Friendly
                            </h2>
                            <p class="mb-4 text-lg font-normal text-gray-400 text-center">
                                Produksi brand ramah lingkungan di pabrik rekanan Pituku. Kami
                                dapat membuat berbagai kategori produk ramah lingkungan
                                seperti furnitur dan kemasan daur ulang.
                            </p>
                            <button
                                class="mb-8 w-full px-4 py-2 text-lg font-normal text-white border-2 bg-green-600 border-green-600 rounded-md hover:opacity-75 lg:w-auto">
                                MULAI SEKARANG
                            </button>
                            <div class="flex justify-center">
                                <div class="h-80 lg:h-48">
                                    <img src="@/assets/hero/banner-3.png" alt="" class="h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="mx-16 hidden lg:block">
                <Swiper @swiper="setThumbsSwiper" :slides-per-view="3" :freeMode="true" :watch-slides-progress="true"
                    :modules="modules">
                    <SwiperSlide>
                        <div class="flex items-center">
                            <button :class="[slideSelected === 1 ? 'w-full px-2 py-3 border-2 border-green-600 rounded-lg hover:bg-green-50'
                                : 'w-full px-2 py-3 hover:border-2 hover:border-green-600 hover:bg-gray-50 hover:rounded-lg'
                            ]" @click="setSlideSelected(1)">
                                <h2 :class="[slideSelected === 1 ? 'text-xl font-medium text-orange-600 text-left'
                                : 'text-xl font-medium text-black text-left']">
                                    Jual Beli Sampah
                                </h2>
                                <p :class="[slideSelected === 1 ? 'text-sm font-normal text-green-600 text-left'
                                : 'text-sm font-normal text-black text-left']">
                                    Stok sampah terbesar
                                </p>
                            </button>
                            <div class="h-16 mx-4 border-r-2 border-gray-200"></div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="flex items-center">
                            <button :class="[
                                slideSelected == 2
                                    ? 'w-full px-2 py-3 border-2 border-green-600 rounded-lg hover:bg-green-50'
                                    : 'w-full px-2 py-3 hover:border-2 hover:border-green-600 hover:bg-gray-50 hover:rounded-lg'
                            ]" @click="setSlideSelected(2)">
                                <h2 :class="[slideSelected === 2 ? 'text-xl font-medium text-orange-600 text-left'
                                : 'text-xl font-medium text-black text-left']">
                                    Social Commerce
                                </h2>
                                <p :class="[slideSelected === 2 ? 'text-sm font-normal text-green-600 text-left'
                                : 'text-sm font-normal text-black text-left']">
                                    Gabung menjadi agen
                                </p>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="flex items-center">
                            <div class="h-16 mx-4 border-r-2 border-gray-200"></div>
                            <button :class="[slideSelected === 3
                                ? 'w-full px-2 py-3 border-2 border-green-600 rounded-lg hover:bg-green-50'
                                : 'w-full px-2 py-3 hover:border-2 hover:border-green-600 hover:bg-gray-50 hover:rounded-lg'
                            ]" @click="setSlideSelected(3)">
                                <h2 :class="[slideSelected === 3 ? 'text-xl font-medium text-orange-600 text-left'
                                : 'text-xl font-medium text-black text-left']">
                                    Produksi Eco-Friendly
                                </h2>
                                <p :class="[slideSelected === 3 ? 'text-sm font-normal text-green-600 text-left'
                                : 'text-sm font-normal text-black text-left']">
                                    Bikin brand eco-friendly
                                </p>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>

<script>

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Thumbs, Pagination } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        const slideSelected = ref(1);

        const setSlideSelected = (swiper) => {
            return slideSelected.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Thumbs, Pagination],
            setSlideSelected,
            slideSelected
        };
    }
}
</script>

<style>

</style>