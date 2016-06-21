<style media="screen">
.chat {
    margin-top: 10%;
}
</style>

<template id="chart">
<div class="columns chat">
    <div class="column col-md2"></div>
    <div class="column col-md8">
        <div id="chart">
        </div>
    </div>
    <div class="column col-md2"></div>
</div>
</template>

<script>
export default {
    ready() {
        var data = [{
            "time": "9/1",
            "balance": 10,
            "name": "宿费"
        }, {
            "time": "9/2",
            "balance": 30,
            "name": "宿费"
        }, {
            "time": "9/3",
            "balance": 12,
            "name": "宿费"
        }, {
            "time": "9/4",
            "balance": 32,
            "name": "宿费"
        }, {
            "time": "9/5",
            "balance": 11,
            "name": "宿费"
        }];

        var chart = new G2.Chart({
            id: 'chart',
            width: 1000,
            height: 400
        });

        chart.source(data, {
            time: {
                type: 'time',
                mask: 'mm/dd'
            }
        });
        chart.line().position('time*balance').color('name').shape('spline').size(2);
        chart.render();
    }
}
</script>
