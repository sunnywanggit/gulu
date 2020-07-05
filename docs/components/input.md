---
title: Input 输入框
---
# 输入框

## 常用例子

#
<ClientOnly>
<demo-input></demo-input>
</ClientOnly>


``` html
<s-input value="中文"></s-input>
<s-input value="中文" readonly></s-input>
<s-input value="中文" disabled></s-input>
<s-input value="中文" error="错误"></s-input>
```
## 支持双向绑定

#
<ClientOnly>
<demo-model-input></demo-model-input>
</ClientOnly>

```
data:{
    value: '1'
}
```
``` html
<s-input v-model="value"></s-input>
<div>
    value: {{value}}
</div>
```