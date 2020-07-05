<template>
    <div>
        <s-button icon="settings">设置</s-button>
        <s-button icon="thumbs-up">点赞</s-button>
        <s-button icon="download" icon-position="right">下载</s-button>
        <s-button :loading="true">登录中</s-button>
    </div>
</template>
<script>
    import Button from '../../../src/button.vue'
    export default {
        components:{
            's-button':Button
        }
    }
</script>
