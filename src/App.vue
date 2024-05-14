<template>

<router-link to="/">Home</router-link> <br>
<router-link to="/AboutComponent">About</router-link> <br>
<router-link to="/LoginComponent">Log-in</router-link>
<router-view></router-view>
</template>

<script>
export default {
    name: 'App',

}
</script>
