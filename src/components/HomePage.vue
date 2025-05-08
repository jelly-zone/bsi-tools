<template>
    <div id="page">
        <div class="cards-box">
            <div class="func-box">
                <h2>GUI数据处理</h2>
            </div>
            <div class="func-box">
                <h2>Markers数据处理</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    data() {}
}
</script>

<style lang="less">
@dark_boder_color: #909399;
#page {
    margin: 20px 20px;
    box-sizing: border-box;
    display: flex;
}
.cards-box {
    // height: 60%;
    display: flex;
    .func-box {
        width: 400px;
        height: 600px;
        border: 3px solid @dark_boder_color;
        border-radius: 5px;
        margin-right: 10px;
        padding: 0 20px 20px 20px;
        // position: absolute;
    }
}
</style>