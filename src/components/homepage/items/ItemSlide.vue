<template>
    <section class="w-full">
        <div class="container max-w-6xl mx-auto px-[10px] py-[32px]">
            <div class="flex flex-col items-center">
                <div class="mb-[16px] flex items-end">
                    <div class="w-[16px] h-[16px] bg-orange-200 rounded-tr-full"></div>
                    <div class="w-[24px] h-[24px] bg-green-200 rounded-tl-full"></div>
                </div>
                <h2 class="max-w-2xl mb-[16px] text-2xl font-medium text-black text-center lg:text-3xl">
                    Kelola Sampah dan Limbah dengan Mudah sebagai Mitra
                </h2>
                <p class="max-w-3xl mb-[32px] text-base font-normal text-black text-center lg:text-lg">
                    Mitra Pituku dapat melakukan pembaharuan stok, harga penjualan,
                    kualitas sampah dan limbah secara real-time
                </p>
            </div>
            <div class="relative">
                <div class="h-80 lg:h-auto">
                    <Slider />
                </div>
                <div class="absolute top-[24px] w-full">
                    <div class="slide-items max-w-2xl mx-auto relative">
                        <Swiper :slides-per-view="1" :spaceBetween="24" :loop="true" :pagination="{ clickable: true, }"
                            :modules="modules">
                            <SwiperSlide>
                                <div class="flex justify-center">
                                    <div class="h-60 md:h-64 lg:h-80">
                                        <img src="@/assets/img/slide1.png" alt="" class="h-full rounded-xl shadow-lg" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex justify-center">
                                    <div class="h-60 md:h-64 lg:h-80">
                                        <img src="@/assets/img/slide2.png" alt="" class="h-full rounded-xl shadow-lg" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex justify-center">
                                    <div class="h-60 md:h-64 lg:h-80">
                                        <img src="@/assets/img/slide3.png" alt="" class="h-full rounded-xl shadow-lg" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="flex justify-center">
                                    <div class="h-60 md:h-64 lg:h-80">
                                        <img src="@/assets/img/slide4.png" alt="" class="h-full rounded-xl shadow-lg" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Thumbs, Pagination } from "swiper";
import Slider from '../../icons/svg/Slider.vue';
export default {
    components: {
        Swiper,
        SwiperSlide,
        Slider
    },

    setup() {
        return {
            modules: [FreeMode, Thumbs, Pagination]
        }
    }
}
</script>

<style>

</style>