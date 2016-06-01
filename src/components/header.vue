<style media="screen">

</style>

<template id="head">

<header class="navbar">
    <section class="navbar-section">
        <a href="#" class="btn btn-link btn-lg">
            <i class="icon icon-people"></i>
        </a>
        <a href="#" class="navbar-brand">{{logo}}</a>
    </section>
    <section class="navbar-section">
        <input type="text" class="form-input input-inline" placeholder="search" />
        <a href="#" class="btn login">login</a>
    </section>
</header>

</template>

<script type="text/javascript">
import $ from "jquery"
export default {
    data() {
        return {
            logo: "RoomMate"
        }
    },
    ready() {
        $(".login").click(function(){
            $(".modal").addClass("active");
        })
        this.$http({url:"http://jsonplaceholder.typicode.com/users",method:"GET"}).then((response) => {
            this.logo=response.data[0].name;
        })
    }
}

</script>
