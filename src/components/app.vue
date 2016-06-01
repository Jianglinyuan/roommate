<style media="screen">
    .container{
        height: 100%;
    }
</style>

<template id="app">

<div class="container">
    <div class="columns">
        <div class="column col-12">
            <head-nav></head-nav>
        </div>
    </div>
    <chart-box></chart-box>
    <login></login>
    <div id="chart"></div>
</div>

</template>

<script type="text/javascript">

import headNav from "./header.vue"
import chartBox from "./chart.vue"
import login from "./login.vue"

export default {
    components: {
        headNav,
        chartBox,
        login
    }
}

</script>
