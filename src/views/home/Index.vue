<template>
    <Hero class="pt-[80px]" />
    <BodyItem />
    <Item />
    <ItemSlide />
    <Testimoni />
    <Promosi />
    <Footer />
</template>

<script>
import Hero from '../../components/homepage/Hero.vue';
import BodyItem from '../../components/homepage/BodyItem.vue';
import Item from '../../components/homepage/items/Items.vue';
import ItemSlide from '../../components/homepage/items/ItemSlide.vue';
import Testimoni from '../../components/homepage/testimoni/Testimoni.vue';
import Promosi from '../../components/homepage/promosi/Promosi.vue';
import Footer from '../../components/layouts/Footer.vue';

export default {
    components: {
        Hero,
        BodyItem,
        Item,
        ItemSlide,
        Footer,
        Promosi,
        Testimoni,
    }
}
</script>

<style>

</style>