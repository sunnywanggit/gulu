---
title: Grid布局
---
# Grid布局
`Grid`布局，最多可分为`24`小格，可设置 `gutter`，默认支持响应式布局。
## 使用方法

<ClientOnly>
<grid-demo1></grid-demo1>
</ClientOnly>


```html
<s-row class="demoRow">
    <s-col span="8"><div class="demoCol">8</div></s-col>
    <s-col span="8"><div class="demoCol">8</div></s-col>
    <s-col span="8"><div class="demoCol">8</div></s-col>
</s-row>
<s-row class="demoRow">
    <s-col span="6"><div class="demoCol">6</div></s-col>
    <s-col span="6"><div class="demoCol">6</div></s-col>
    <s-col span="6"><div class="demoCol">6</div></s-col>
    <s-col span="6"><div class="demoCol">6</div></s-col>
</s-row>
<s-row class="demoRow">
    <s-col span="4"><div class="demoCol">4</div></s-col>
    <s-col span="4"><div class="demoCol">4</div></s-col>
    <s-col span="4"><div class="demoCol">4</div></s-col>
    <s-col span="4"><div class="demoCol">4</div></s-col>
    <s-col span="4"><div class="demoCol">4</div></s-col>
    <s-col span="4"><div class="demoCol">4</div></s-col>
</s-row>
<s-row class="demoRow">
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></sj-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
</s-row>
</div>
```
## 设置 gutter
   
<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

```html
<s-row class="demoRow" gutter="10">
    <s-col span="8"><div class="demoCol">8</div></s-col>
    <s-col span="8"><div class="demoCol">8</div></s-col>
    <s-col span="8"><div class="demoCol">8</div></s-col>
</s-row>
<s-row class="demoRow" gutter="10">
    <s-col span="6"><div class="demoCol">6</div></s-col>
    <s-col span="6"><div class="demoCol">6</div></s-col>
    <s-col span="6"><div class="demoCol">6</div></s-col>
    <s-col span="6"><div class="demoCol">6</div></s-col>
</s-row>
```
## 设置空白
   
<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

```html
<s-row class="demoRow" gutter="10">
    <s-col span="8"><div class="demoCol">8</div></s-col>
    <s-col span="8" offset="8"><div class="demoCol">8</div></s-col>
</s-row>
<s-row class="demoRow" gutter="10">
    <s-col span="6" offset="6"><div class="demoCol">6</div></s-col>
    <s-col span="6" offset="6"><div class="demoCol">6</div></s-col>
</s-row>
<s-row class="demoRow" gutter="10">
    <s-col span="4"><div class="demoCol">4</div></s-col>
    <s-col span="4" offset="4"><div class="demoCol">4</div></s-col>
    <s-col span="4" offset="8"><div class="demoCol">4</div></s-col>
</s-row>
<s-row class="demoRow" gutter="10">
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2" offset="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2" offset="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2" offset="2"><div class="demoCol">2</div></s-col>
    <s-col span="2"><div class="demoCol">2</div></s-col>
    <s-col span="2" offset="2"><div class="demoCol">2</div></s-col>
</s-row>
```