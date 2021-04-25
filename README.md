# sunnyUI一套使用VUE开发的前端组件库

## 介绍

这是我在学习VUE过程中制作的一套UI框架，希望对你有帮助。

## 本地开发文档预览
```js
yarn docs:dev
```


## 本地开发

1.本地开发组件运行代码
```js
yarn start
```

## 开始使用

1.添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box
```
*,*::before,*::after{box-sizing:border-box}
```

IE8及以上浏览器都支持该样式。

你还需要设置默认颜色等变量，后续会改为 SCSS 变量。

```
:root {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bg: #eee;
       --button-radius: 4px;
       --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
}
```
IE15及以上浏览器支持该样式。

2.安装 sunny-wheel

```$xslt
npm i --save sunny-wheel
```

3.引入 sunnny-wheel
```$xslt
import {Button} from 'sunny-wheel'
import 'sunny-wheel/dist/index.css'

export default {
    components: {
        'g-button': Button
    }
}
```






## 文档


## 提问

## 变更记录

## 联系方式

## 贡献代码
使用本框架前，请在 CSS 中开启 border-box


我提交了一句代码，测试一下我的 jenkins

我提交了一句代码，测试一下我的 jenkins
