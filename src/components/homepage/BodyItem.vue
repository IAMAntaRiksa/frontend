<template>
    <section class="w-full ">
        <div class="container max-w-6xl mx-auto px-4 py-8">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full order-2 lg:w-6/12 lg:order-1">
                    <div class="relative">
                        <div class="pr-8 h-96">
                            <Menu />
                        </div>
                        <div class="top-4 left-2/4 -translate-x-2/4 absolute flex lg:left-8 lg:translate-x-0">
                            <div class="mt-12 mr-2 lg:mr-4">
                                <div class="p-6 w-36 h-36"
                                    :style="{ background: ' #2196f3', borderRadius: '0 76px 0 0', }">
                                    <h6 class="text-base font-medium text-white">+2500</h6>
                                    <p class="text-sm font-normal text-white">
                                        Ton Penjualan Sampah/Bulan
                                    </p>
                                </div>
                                <div class="p-6 w-36 h-36" :style="{
                                    background: '#4caf50', borderRadius: '0 0 76px 0',
                                }">
                                    <h6 class="text-base font-medium text-white">+65000</h6>
                                    <p class="text-sm font-normal text-white">
                                        Ton Persediaan Sampah
                                    </p>
                                </div>
                            </div>
                            <div class="ml-2 lg:ml-4">
                                <div class="p-6 w-36 h-36" :style="{
                                    background: '#4caf50', borderRadius: '0 76px 0 0',
                                }">
                                    <h6 class="text-base font-medium text-white">+150</h6>
                                    <p class="text-sm font-normal text-white">
                                        Pembeli dan Penjual
                                    </p>
                                </div>
                                <div class="p-6 w-36 h-36" :style="{
                                    background: '#ffa000', borderRadius: '0 0 0 76px',
                                }">
                                    <h6 class="text-base font-medium text-white">+30</h6>
                                    <p class="text-sm font-normal text-white">
                                        Jenis Sampah
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-8 flex flex-col items-center order-1 lg:w-6/12 lg:mb-0 lg:items-start lg:order-2">
                    <div class="mb-4 flex items-end">
                        <div class="w-4 h-4 bg-orange-200 rounded-tr-full"></div>
                        <div class="w-6 h-6 bg-green-200 rounded-tl-full"></div>
                    </div>
                    <h4 class="mb-4 text-2xl font-medium text-black text-center lg:text-3xl lg:text-left">
                        Platform Jual Beli Sampah dan Limbah Terbesar & Terintegrasi
                    </h4>
                    <p class="mb-8 text-base font-normal text-black text-center lg:text-lg lg:text-left">
                        Kami memiliki ratusan mitra produsen dan pengepul sampah yang
                        terintegrasi dengan stok/persediaan terbesar di Indonesia
                    </p>
                    <div class="w-80 h-48 lg:w-[500px] lg:h-96">
                        <img data-aos="zoom-in-out" data-aos-once="true" data-aos-duration="1000"
                            src="@/assets/img/pituku-thumbnail.png" alt="pituku-thumb" loading="eager" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Menu from '../icons/svg/Menu.vue';

export default {
    components: { Menu }
}
</script>

<style>

</style>