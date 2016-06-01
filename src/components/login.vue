
<style>
    .submit{
        margin-left: 39%;
    }
</style>
<template>

<div class="modal modal-sm">
    <div class="modal-overlay"></div>
    <div class="modal-container">
        <div class="modal-header">
            <button class="btn btn-clear float-right close"></button>
            <div class="modal-title">Login</div>
        </div>
        <div class="modal-body">
            <div class="content">
                <form>
                    <!-- form input control -->
                    <div class="form-group">
                        <label class="form-label" for="input-example-1">Name</label>
                        <input class="form-input" type="text" id="matename" placeholder="Name" />
                        <label class="form-label" for="input-example-1">Password</label>
                        <input class="form-input" type="password" id="password" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <button class="btn submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script type="text/javascript">

import $ from "jquery";
export default {
    ready() {
        var that = this;
        $(".close").click(function() {
            $(".modal").removeClass("active");
        });
        $(".submit").click(function() {
            var username = $("#matename").val();
            var password = $("#password").val();
            that.$http({url:"http://jsonplaceholder.typicode.com/users",method:"GET"}).then((response) => {
                var users = response.data;

                users.forEach((val,idx) => {
                    if (val.username==username&&val.username==password){
                        $(".modal").removeClass("active");
                    }
                })
            })
        })
    }
}

</script>
