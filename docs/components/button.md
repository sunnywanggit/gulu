---
title: Button 按钮
---

## Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 sunnyUI 中我们提供了四种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：用于作为外链的行动点。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 按钮类型

按钮有四种类型：主按钮、次按钮、虚线按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

<ClientOnly>
<demo-button1></demo-button1>
</ClientOnly>

```html
<s-button type="primary">Primary Button</s-button>
<s-button>Default Button</s-button>
<s-button type="dashed">Dashed Button</s-button>
<s-button type="text">Dashed Button</s-button>
<s-button type="link">Dashed Button</s-button>
```

## 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以直接设置 `icon` 属性。

<ClientOnly>
<demo-button2></demo-button2>
</ClientOnly>


```html
<s-button type="primary" icon="search">Search</s-button>
<s-button icon="search">Search</s-button>
<s-button type="dashed" icon="search">Search</s-button>
```

## 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中 `middle`。

<ClientOnly>
<demo-button3></demo-button3>
</ClientOnly>

```html
<s-button type="primary" size="large">Primary</s-button>
<s-button icon="search" size="middle">Default</s-button>
<s-button type="dashed" size="small">Dashed</s-button>
```

## 不可用状态

添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<ClientOnly>
<unavailable-button></unavailable-button>
</ClientOnly>

```html
<s-button type="primary">Primary</s-button>
<s-button type="primary" disabled>Primary(disabled)</s-button>
<s-button type="default">Default</s-button>
<s-button type="dashed" disabled>Default(disabled)</s-button>
<s-button type="dashed" >Dashed</s-button>
<s-button type="dashed" disabled >Dashed(disabled)</s-button>
```
## 组合按钮

组合按钮的功能应用场景较少，可以根据自己的实际情况选择使用。

<ClientOnly>
<demo-button-group></demo-button-group>
</ClientOnly>


``` html
<s-button-group>
    <s-button icon="left" icon-position="left">上一页</s-button>
    <s-button icon="right" icon-position="right">下一页</s-button>
</s-button-group>
```
