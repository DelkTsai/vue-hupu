<template>
    <div id="app">
        <topNav></topNav>
        <router-view></router-view>
    </div>
</template>

<script>
import topNav from './components/topNav';

export default {
    name: 'app',
    data() {
        return {
            
        }
    },
    components: { topNav }
}
</script>

<style lang="scss" scoped>
body {
    font-family: tahoma, Arial, Roboto, 'Droid Sans', 'Helvetica Neue', 'Droid Sans Fallback', 'Hiragino Sans GB', 'Heiti SC', sans-self;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

#app {
    position: relative;
}
</style>
