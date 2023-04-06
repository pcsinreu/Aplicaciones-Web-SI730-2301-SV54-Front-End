<template>
    <div class="containerGrid">
      <div class="my-class">My component {{name}} {{title}}</div>
        <button @click ="handleClick(2)" > click me!</button>
        <input type="text" @input="handleChange">
    </div>
</template>

<script>
export default {
    props: ['name'],
    name: "header",
    data() {
        return { title: 'titulo 1' }
    },
    mounted() {
        console.log('-----montando componete')
    },
    updated() {
        console.log('-----actualizando componet')
    },
    unmounted() {
        console.log('-----unmount componet')
    },
    methods: {
        handleClick(numberA) {
            console.log('-----haciendo click',numberA)
            this.title = ' new title'
        },
        handleChange(){
            console.log('-----tipeando')
        }
    }
}
</script>

<style scoped>

.my-class{
    background-color: red;
    margin-top: 10px;
    color: white;
    font-size: large;
    padding: 9px;
}

.container {
    display: flex;
    flex-direction: row;
    align-items: center;
}


.containerGrid {
    display: Grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
}
</style>