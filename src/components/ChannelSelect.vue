<template>
    <div id="outline-box">
        <div class="line-box">
            <div class="single-line-1"><button class="channel-btn-1" :class="{'red':electrode_status[0]}">1</button></div>
            <div class="single-line-2">
                <button class="channel-btn-2" style="left: 0;">2</button>
                <button class="channel-btn-2" style="right: 0;">9</button>
            </div>
            <div class="single-line-1"><button class="channel-btn-1">3</button></div>
            <div class="single-line-2">
                <button class="channel-btn-2" style="left: 0;">4</button>
                <button class="channel-btn-2" style="right: 0;">10</button>
            </div>
            <div class="single-line-1"><button class="channel-btn-1">5</button></div>
            <div class="single-line-2">
                <button class="channel-btn-2" style="left: 0;">6</button>
                <button class="channel-btn-2" style="right: 0;">11</button>
            </div>
            <div class="single-line-1"><button class="channel-btn-1">12</button></div>
            <div class="single-line-2">
                <button class="channel-btn-2" style="left: 0;">7</button>
                <button class="channel-btn-2" style="right: 0;">13</button>
            </div>
            <div class="single-line-1"><button class="channel-btn-1">14</button></div>
            <div class="single-line-2">
                <button class="channel-btn-2" style="left: 0;">8</button>
                <button class="channel-btn-2" style="right: 0;">15</button>
            </div>
            <div class="single-line-1"><button class="channel-btn-1">16</button></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChannelSelect',
    props: {
        electrode_status: [],
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#outline-box {
    height: 600px;
    width: 70px;
}
/* .line-box {
    display: flex;
    flex-direction: column;

} */
.single-line-1 {
    width: 100%;
    height: 50px;
    text-align: center;
    position: relative;
}
.single-line-2 {
    width: 100%;
    height: 50px;
    position: relative;
}
.channel-btn-1 {
    height: 36px;
    width: 30px;
}
.channel-btn-2 {
    position: absolute;
    height: 36px;
    width: 30px;
}
.channel-btn-1.red {
    background-color: rgb(255, 128, 128);
    width: 30px;
}
.channel-btn-1:hover {
    background-color: rgb(128, 255, 128);
    border-color: rgb(128, 255, 128);
}
.channel-btn-2:hover {
    background-color: rgb(128, 255, 128);
    border-color: rgb(128, 255, 128);
}
</style>
