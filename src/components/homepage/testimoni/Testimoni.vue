<template>
    <section class="w-full">
        <div class="container max-w-6xl mx-auto px-4 py-8">
            <div class="flex flex-col items-center">
                <div class="mb-4 flex items-end">
                    <div class="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
                    <div class="w-6 h-6 bg-green-200 rounded-tl-full"></div>
                </div>
                <h2 class="max-w-2xl mb-4 text-3xl font-medium text-black text-center">
                    Testimoni Pembeli dan Mitra
                </h2>
                <p class="max-w-3xl mb-8 text-lg font-normal text-black text-center">
                    They are doing great things with us
                </p>
            </div>
            <div class="max-w-4xl mx-auto">
                <div class="relative">
                    <Swiper :spaceBetween="16" :breakpoints="{
                        1024: { slidesPerView: 2, }, 768: { slidesPerView: 1, },
                    }">
                        <SwiperSlide>
                            <div class="relative flex justify-center overflow-hidden" :style="{
                                borderRadius: '64px 24px 24px 24px'
                            }">
                                <div class="w-full flex">
                                    <div class="h-64 w-4/12"></div>
                                    <div class="h-64 w-8/12">
                                        <img src="@/assets/img/testimoni1.jpeg" alt=""
                                            class="h-full w-full hidden object-cover object-top rounded-r-3xl lg:block" />
                                    </div>
                                </div>
                                <div class="w-full absolute flex">
                                    <div
                                        class="h-64 w-full ml-0 px-4 py-16 bg-green-600 scale-100 rounded-r-3xl lg:w-7/12 lg:-ml-8 lg:px-12 lg:pl-16 lg:scale-125 lg:rounded-full">
                                        <p class="mb-4 text-sm font-normal text-white lg:text-xs">
                                            <span class="hidden lg:block">
                                                " Pituku membantu kami untuk melakukan pembelian
                                                limbah .... "
                                            </span>
                                            <span class="block lg:hidden">
                                                " Pituku membantu kami untuk melakukan pembelian
                                                limbah sekam padi dengan mudah. Kami bisa melakukan
                                                pembelian bahan baku secara tempo... "
                                            </span>
                                        </p>
                                        <h4 class="text-lg font-medium text-white lg:text-sm">
                                            Deny Fibrata
                                        </h4>
                                        <p class="text-sm font-normal text-white lg:text-xs">
                                            Direktur Utama
                                        </p>
                                    </div>
                                    <div class="h-64 w-0 lg:w-5/12"></div>
                                    <div
                                        class="-bottom-6 -left-6 h-16 w-16 hidden absolute bg-orange-400 rounded-full lg:block">
                                    </div>
                                    <div class="top-4 ml-52 h-6 w-6 hidden absolute bg-blue-400 rounded-full lg:block">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="relative flex justify-center overflow-hidden" :style="{
                                borderRadius: '64px 24px 24px 24px'
                            }">
                                <div class="w-full flex">
                                    <div class="h-64 w-4/12"></div>
                                    <div class="h-64 w-8/12">
                                        <img src="@/assets/img/testimoni2.jpeg" alt=""
                                            class="h-full w-full hidden object-cover object-top rounded-r-3xl lg:block" />
                                    </div>
                                </div>
                                <div class="w-full absolute flex">
                                    <div
                                        class="h-64 w-full ml-0 px-4 py-16 bg-green-600 scale-100 rounded-r-3xl lg:w-7/12 lg:-ml-8 lg:px-12 lg:pl-16 lg:scale-125 lg:rounded-full">
                                        <p class="mb-4 text-sm font-normal text-white lg:text-xs">
                                            <span class="hidden lg:block">
                                                " Sebelum ada Pituku kami kesulitan menjual sampah.
                                                dan Ternyata .... "
                                            </span>
                                            <span class="block lg:hidden">
                                                " Sebelum ada Pituku kami kesulitan menjual sampah.
                                                dan Ternyata pemesanan dari pabrik meningkat dengan
                                                bantuan sistem Pituku. Terimakasih Pituku... "
                                            </span>
                                        </p>
                                        <h4 class="text-lg font-medium text-white lg:text-sm">
                                            Haji Sofyan
                                        </h4>
                                        <p class="text-sm font-normal text-white lg:text-xs">
                                            Lapak Sampah Cikupa
                                        </p>
                                    </div>
                                    <div class="h-64 w-0 lg:w-5/12"></div>
                                    <div
                                        class="-bottom-6 -left-6 h-16 w-16 hidden absolute bg-orange-400 rounded-full lg:block">
                                    </div>
                                    <div class="top-4 ml-52 h-6 w-6 hidden absolute bg-blue-400 rounded-full lg:block">
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button
                        class="p-4 top-2/4 -ml-20 absolute bg-green-800 rounded-xl -translate-y-2/4 z-30 hover:bg-green-900">
                        <IconLeft class="w-8 h-8 text-white" />
                    </button>
                    <button
                        class="p-4 top-2/4 right-0 -mr-20 absolute bg-green-800 rounded-xl -translate-y-2/4 rotate-120 z-30 hover:bg-green-900">
                        <IconRight class="w-8 h-8 text-white" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import IconLeft from '../../icons/svg/IconLeft.vue';
import IconRight from '../../icons/svg/IconRight.vue';
export default {
    components: {
        Swiper,
        SwiperSlide,
        IconLeft,
        IconRight,
    }
}
</script>

<style>

</style>