{{ target: common-chart-spec }}

<!-- IChartSpec，用于图表通用配置 -->

#${prefix} type(string) = '${chartType}'

图表类型。

{{ if: !${noData} }}

{{ use: common-data(
    prefix = '#' + ${prefix},
    isHierarchy = ${isHierarchy},
    dataType = 'IDataType|IDataType[]'
) }}

{{ /if }}

#${prefix} width(number) = 500

图表宽度。

#${prefix} height(number) = 500

图表高度。

#${prefix} autoFit(boolean) = true

图表宽高是否自适应容器，浏览器环境下默认为 true。该配置的优先级高于构造函数中的 autoFit 配置。如果用户配置了 width，则以用户配置的 width 为准，height 同理。

#${prefix} background(string|Object)

图表背景色配置，优先级高于构造函数中的 background 配置。

{{ use : background }}

#${prefix} padding(Object|number) = 12

图表整体 padding 设置。支持直接设置数值，也可以通过对象类型分别为上下左右方向配置。

- number：单位为 px，上下左右四个方向同时配置
- Object：对象类型使用如下

{{ use: common-layout-padding(
  prefix = '#' + ${prefix},
) }}

#${prefix} color(Array|Object)

图表颜色映射配置。可以直接传递色值数组，也可以进行颜色的数据映射。

- 可以直接传递色值数组，可以改变图表的色系

```ts
color: ['#BBD6B8', '#EA5455', '#19A7CE'],
```

- 进行数据映射，通过 scale 指定映射规则

{{ use: common-visual-spec-scale(
    prefix = '#' + ${prefix},
    includeId = false
) }}