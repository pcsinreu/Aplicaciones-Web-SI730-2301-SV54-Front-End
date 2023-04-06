<template>

    <div v-for="category in categories">
        <HeaderProject :name=category.name />
    </div>

</template>

<script>
import HeaderProject from "@/components/HeaderProject.vue";

export default {
    name: "list-component",
    components: {HeaderProject},
    data() {
        return{
            categories :[]
        }
    },
    beforeMount() {
        //invoco API
          this.categories = [{name:'nombre 1'},{name:'nombre 2'},{name:'nombre 3'},{name:'nombre 4'}]
    }
}
</script>

<style scoped>

</style>