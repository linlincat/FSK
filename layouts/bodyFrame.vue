<template>
    <section class="bodyFrame">
        <nuxt />
    </section>
</template>

<script>
    export default {
        data() {
            return {
                msg: "noen"
            }
        }
    }
</script>

<style lang="scss" scoped>
.bodyFrame {
    width: 100px;
    height: 100px;
    background-color: red;
}
</style>