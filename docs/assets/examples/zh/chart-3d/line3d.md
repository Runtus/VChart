---
category: examples
group: chart-3d
title: 3D 折线图
keywords: space
order: 23-3
cover: http://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/vchart/preview/chart-3d/line3d.png
option: lineChart
---

# 3D 折线图

在 2D 折线图的基础上配置 zField，即可被识别成 3D 折线图，然后配置 z 轴即可

> recreation of [https://www.datawrapper.de/charts](https://www.datawrapper.de/charts)。

## 关键配置

- `seriesField` 属性用来声明参与颜色映射的字段
- `legends` 属性用来配置图例

## 代码演示

```javascript livedemo
const latestData = [
  {
    country: 1875,
    Austria: null,
    Canada: null,
    France: 0.1,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': null
  },
  {
    country: 1880,
    Austria: null,
    Canada: null,
    France: 0.1,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': null
  },
  {
    country: 1885,
    Austria: null,
    Canada: null,
    France: 0.1,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': null
  },
  {
    country: 1890,
    Austria: null,
    Canada: null,
    France: 0.1,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': null
  },
  {
    country: 1895,
    Austria: null,
    Canada: null,
    France: 0.1,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': null
  },
  {
    country: 1900,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': 0.1
  },
  {
    country: 1901,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': 0.1
  },
  {
    country: 1902,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': 0.1
  },
  {
    country: 1903,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': 0.1
  },
  {
    country: 1904,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': 0.2
  },
  {
    country: 1905,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.1,
    'United States': 0.2
  },
  {
    country: 1906,
    Austria: null,
    Canada: null,
    France: 0.2,
    Germany: 0.2,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.1,
    'United States': 0.2
  },
  {
    country: 1907,
    Austria: null,
    Canada: null,
    France: 0.3,
    Germany: 0.3,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.2,
    'United States': 0.2
  },
  {
    country: 1908,
    Austria: null,
    Canada: null,
    France: 0.3,
    Germany: 0.4,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.3,
    'United States': 0.2
  },
  {
    country: 1909,
    Austria: null,
    Canada: null,
    France: 0.3,
    Germany: 0.4,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.3,
    'United States': 0.3
  },
  {
    country: 1910,
    Austria: null,
    Canada: null,
    France: 0.3,
    Germany: 0.5,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.4,
    'United States': 0.4
  },
  {
    country: 1911,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 0.6,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.6,
    'United States': 0.4
  },
  {
    country: 1912,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 0.7,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.7,
    'United States': 0.5
  },
  {
    country: 1913,
    Austria: null,
    Canada: null,
    France: 0.4,
    Germany: 0.7,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.8,
    'United States': 0.6
  },
  {
    country: 1914,
    Austria: null,
    Canada: null,
    France: null,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 1.9,
    'United States': 0.6
  },
  {
    country: 1915,
    Austria: null,
    Canada: null,
    France: null,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 2.2,
    'United States': 0.7
  },
  {
    country: 1916,
    Austria: null,
    Canada: null,
    France: null,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 2.1,
    'United States': 1
  },
  {
    country: 1917,
    Austria: null,
    Canada: null,
    France: null,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 2.2,
    'United States': 1.4
  },
  {
    country: 1918,
    Austria: null,
    Canada: null,
    France: null,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 2.3,
    'United States': 1.7
  },
  {
    country: 1919,
    Austria: null,
    Canada: null,
    France: null,
    Germany: null,
    Japan: null,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 3.1,
    'United States': 1.8
  },
  {
    country: 1920,
    Austria: null,
    Canada: 1,
    France: null,
    Germany: null,
    Japan: 1.6,
    Netherlands: null,
    'New Zealand': 1.6,
    Spain: 1,
    Sweden: 1,
    Switzerland: null,
    'United Kingdom': 3,
    'United States': 1.7
  },
  {
    country: 1921,
    Austria: null,
    Canada: 1.1,
    France: null,
    Germany: null,
    Japan: 1.7,
    Netherlands: null,
    'New Zealand': 1.2,
    Spain: 1,
    Sweden: 0.9,
    Switzerland: null,
    'United Kingdom': 2.8,
    'United States': 1.9
  },
  {
    country: 1922,
    Austria: null,
    Canada: 0.9,
    France: null,
    Germany: null,
    Japan: 1.8,
    Netherlands: null,
    'New Zealand': 1.3,
    Spain: 1.1,
    Sweden: 0.7,
    Switzerland: null,
    'United Kingdom': 2.7,
    'United States': 1.9
  },
  {
    country: 1923,
    Austria: 2.5,
    Canada: 1,
    France: 0.7,
    Germany: null,
    Japan: 2,
    Netherlands: 1.1,
    'New Zealand': 1.5,
    Spain: 1.2,
    Sweden: 0.7,
    Switzerland: null,
    'United Kingdom': 2.7,
    'United States': 2.3
  },
  {
    country: 1924,
    Austria: 2.9,
    Canada: 1.1,
    France: 0.9,
    Germany: null,
    Japan: 2.1,
    Netherlands: 1.4,
    'New Zealand': 1.6,
    Spain: 1.1,
    Sweden: 0.7,
    Switzerland: null,
    'United Kingdom': 2.8,
    'United States': 2.5
  },
  {
    country: 1925,
    Austria: 2.9,
    Canada: 1.2,
    France: null,
    Germany: 1.7,
    Japan: 2,
    Netherlands: 1.1,
    'New Zealand': 1.8,
    Spain: 1,
    Sweden: 0.7,
    Switzerland: null,
    'United Kingdom': 3,
    'United States': 2.7
  },
  {
    country: 1926,
    Austria: 3.1,
    Canada: 1.4,
    France: null,
    Germany: 1.6,
    Japan: 2,
    Netherlands: 1.3,
    'New Zealand': 1.8,
    Spain: 0.9,
    Sweden: 0.7,
    Switzerland: null,
    'United Kingdom': 3,
    'United States': 3
  },
  {
    country: 1927,
    Austria: 3.3,
    Canada: 1.6,
    France: null,
    Germany: 1.8,
    Japan: 2.1,
    Netherlands: 1.4,
    'New Zealand': 1.8,
    Spain: 1,
    Sweden: 0.8,
    Switzerland: null,
    'United Kingdom': 3.2,
    'United States': 3.8
  },
  {
    country: 1928,
    Austria: 3.4,
    Canada: 1.8,
    France: null,
    Germany: 1.8,
    Japan: 2.2,
    Netherlands: 1.4,
    'New Zealand': 1.8,
    Spain: 1.2,
    Sweden: 0.9,
    Switzerland: null,
    'United Kingdom': 3.5,
    'United States': 4
  },
  {
    country: 1929,
    Austria: 3.5,
    Canada: 2.1,
    France: null,
    Germany: 1.8,
    Japan: 2.2,
    Netherlands: 1.6,
    'New Zealand': 1.9,
    Spain: 1.3,
    Sweden: 1,
    Switzerland: null,
    'United Kingdom': 3.7,
    'United States': 4.3
  },
  {
    country: 1930,
    Austria: 3.5,
    Canada: 2,
    France: null,
    Germany: 1.6,
    Japan: 2,
    Netherlands: 1.8,
    'New Zealand': 1.6,
    Spain: 1.4,
    Sweden: 1.1,
    Switzerland: null,
    'United Kingdom': 3.9,
    'United States': 4.3
  },
  {
    country: 1931,
    Austria: 3.3,
    Canada: 1.7,
    France: null,
    Germany: 1.5,
    Japan: 2,
    Netherlands: 1.7,
    'New Zealand': 1.2,
    Spain: 1.3,
    Sweden: 1.2,
    Switzerland: null,
    'United Kingdom': 3.9,
    'United States': 4.3
  },
  {
    country: 1932,
    Austria: 3.4,
    Canada: 1.4,
    France: 1.6,
    Germany: 2.3,
    Japan: 2.1,
    Netherlands: 1.8,
    'New Zealand': 1,
    Spain: 1.4,
    Sweden: 1.2,
    Switzerland: null,
    'United Kingdom': 4.1,
    'United States': 4.4
  },
  {
    country: 1933,
    Austria: 3,
    Canada: 1.6,
    France: 1.6,
    Germany: 2.3,
    Japan: 2.2,
    Netherlands: 1.9,
    'New Zealand': 1,
    Spain: 1.3,
    Sweden: 1.1,
    Switzerland: null,
    'United Kingdom': 4.2,
    'United States': 4.8
  },
  {
    country: 1934,
    Austria: 2.9,
    Canada: 1.8,
    France: 1.5,
    Germany: 2.5,
    Japan: 2.3,
    Netherlands: 1.8,
    'New Zealand': 1.1,
    Spain: 1.2,
    Sweden: 1.1,
    Switzerland: 1.5,
    'United Kingdom': 4.4,
    'United States': 5.3
  },
  {
    country: 1935,
    Austria: 2.9,
    Canada: 1.9,
    France: 1.4,
    Germany: 2.5,
    Japan: 2.4,
    Netherlands: 1.9,
    'New Zealand': 1.4,
    Spain: 1.1,
    Sweden: 1,
    Switzerland: 1.5,
    'United Kingdom': 4.7,
    'United States': 5.7
  },
  {
    country: 1936,
    Austria: 2.9,
    Canada: 2,
    France: 1.5,
    Germany: 2.6,
    Japan: 2.4,
    Netherlands: 1.8,
    'New Zealand': 1.7,
    Spain: null,
    Sweden: 1,
    Switzerland: 1.5,
    'United Kingdom': 4.9,
    'United States': 6
  },
  {
    country: 1937,
    Austria: 2.8,
    Canada: 2.3,
    France: 1.6,
    Germany: 2.8,
    Japan: 2.5,
    Netherlands: 1.9,
    'New Zealand': 1.9,
    Spain: null,
    Sweden: 1,
    Switzerland: 1.5,
    'United Kingdom': 5.2,
    'United States': 6
  },
  {
    country: 1938,
    Austria: 3.2,
    Canada: 2.4,
    France: 1.6,
    Germany: 3.2,
    Japan: 2.5,
    Netherlands: 2.1,
    'New Zealand': 2.1,
    Spain: null,
    Sweden: 1,
    Switzerland: 1.9,
    'United Kingdom': 5.5,
    'United States': 6.1
  },
  {
    country: 1939,
    Austria: 4,
    Canada: 2.4,
    France: 1.8,
    Germany: null,
    Japan: 2.9,
    Netherlands: 2.3,
    'New Zealand': 2.1,
    Spain: null,
    Sweden: 1.1,
    Switzerland: 1.9,
    'United Kingdom': 5.7,
    'United States': 6.3
  },
  {
    country: 1940,
    Austria: 5,
    Canada: 2.6,
    France: 1.7,
    Germany: null,
    Japan: 3.1,
    Netherlands: null,
    'New Zealand': 1.9,
    Spain: 1,
    Sweden: 1.1,
    Switzerland: 1.9,
    'United Kingdom': 5.6,
    'United States': 6.5
  },
  {
    country: 1941,
    Austria: 5.8,
    Canada: 2.9,
    France: 1.4,
    Germany: null,
    Japan: 3.1,
    Netherlands: null,
    'New Zealand': 2,
    Spain: 1.1,
    Sweden: 1.2,
    Switzerland: 2.3,
    'United Kingdom': 6.2,
    'United States': 6.8
  },
  {
    country: 1942,
    Austria: 5.3,
    Canada: 3.3,
    France: 1,
    Germany: null,
    Japan: 3.2,
    Netherlands: null,
    'New Zealand': 2.3,
    Spain: 1.1,
    Sweden: 1.2,
    Switzerland: 2.2,
    'United Kingdom': 6.5,
    'United States': 7.4
  },
  {
    country: 1943,
    Austria: 5.3,
    Canada: 3.6,
    France: 0.9,
    Germany: null,
    Japan: 3.2,
    Netherlands: null,
    'New Zealand': 2.3,
    Spain: 1.3,
    Sweden: 1.2,
    Switzerland: 2.6,
    'United Kingdom': 6.5,
    'United States': 7.8
  },
  {
    country: 1944,
    Austria: 4.2,
    Canada: 3.7,
    France: 0.8,
    Germany: null,
    Japan: 2.7,
    Netherlands: null,
    'New Zealand': 2.5,
    Spain: 1.3,
    Sweden: 1.2,
    Switzerland: 2.8,
    'United Kingdom': 6.5,
    'United States': 7
  },
  {
    country: 1945,
    Austria: 1.6,
    Canada: 4.5,
    France: 1.2,
    Germany: null,
    Japan: 0.9,
    Netherlands: null,
    'New Zealand': 2.6,
    Spain: 1.3,
    Sweden: 1.3,
    Switzerland: 3.2,
    'United Kingdom': 7.2,
    'United States': 8.1
  },
  {
    country: 1946,
    Austria: 1.1,
    Canada: 4.7,
    France: 1.6,
    Germany: null,
    Japan: 0.9,
    Netherlands: 1.4,
    'New Zealand': 3.4,
    Spain: 1.4,
    Sweden: 1.6,
    Switzerland: 3.5,
    'United Kingdom': 7.6,
    'United States': 8.9
  },
  {
    country: 1947,
    Austria: 1.6,
    Canada: 4.7,
    France: 2.1,
    Germany: null,
    Japan: 1,
    Netherlands: 2.2,
    'New Zealand': 4.3,
    Spain: 1.5,
    Sweden: 1.9,
    Switzerland: 4,
    'United Kingdom': 6.7,
    'United States': 9.1
  },
  {
    country: 1948,
    Austria: 2,
    Canada: 4.8,
    France: 2.3,
    Germany: null,
    Japan: 1.9,
    Netherlands: 2.1,
    'New Zealand': 3.4,
    Spain: 1.3,
    Sweden: 2,
    Switzerland: 3.9,
    'United Kingdom': 6.5,
    'United States': 9.3
  },
  {
    country: 1949,
    Austria: 2.5,
    Canada: 4.9,
    France: 2.4,
    Germany: null,
    Japan: 2.8,
    Netherlands: 2.4,
    'New Zealand': 3.4,
    Spain: 1.4,
    Sweden: 2,
    Switzerland: 4,
    'United Kingdom': 6.4,
    'United States': 9.3
  },
  {
    country: 1950,
    Austria: 3,
    Canada: 4.9,
    France: 4.4,
    Germany: 2.7,
    Japan: 3.3,
    Netherlands: 3.1,
    'New Zealand': 7.6,
    Spain: 1.2,
    Sweden: 2.5,
    Switzerland: 4.1,
    'United Kingdom': 6.5,
    'United States': 9.3
  },
  {
    country: 1951,
    Austria: 3.5,
    Canada: 4.4,
    France: 4.4,
    Germany: 3.1,
    Japan: 3.7,
    Netherlands: 3.2,
    'New Zealand': 8,
    Spain: 1.3,
    Sweden: 2.5,
    Switzerland: 4.3,
    'United Kingdom': 6.8,
    'United States': 9.8
  },
  {
    country: 1952,
    Austria: 3.7,
    Canada: 4.9,
    France: 4.5,
    Germany: 3.1,
    Japan: 3.9,
    Netherlands: 3.6,
    'New Zealand': 7.7,
    Spain: 1.5,
    Sweden: 2.9,
    Switzerland: 4.7,
    'United Kingdom': 7,
    'United States': 10
  },
  {
    country: 1953,
    Austria: 3.8,
    Canada: 5.7,
    France: 4.4,
    Germany: 3.3,
    Japan: 4.3,
    Netherlands: 3.8,
    'New Zealand': 7.7,
    Spain: 1.7,
    Sweden: 2.9,
    Switzerland: 4.6,
    'United Kingdom': 7,
    'United States': 9.7
  },
  {
    country: 1954,
    Austria: 3.3,
    Canada: 5.8,
    France: 4.5,
    Germany: 3.5,
    Japan: 4.5,
    Netherlands: 4.2,
    'New Zealand': 8,
    Spain: 1.8,
    Sweden: 2.9,
    Switzerland: 4.6,
    'United Kingdom': 7.3,
    'United States': 9.2
  },
  {
    country: 1955,
    Austria: 3.7,
    Canada: 8.6,
    France: 4.6,
    Germany: 3.8,
    Japan: 4.5,
    Netherlands: 4.3,
    'New Zealand': 8.2,
    Spain: 2,
    Sweden: 3,
    Switzerland: 4.8,
    'United Kingdom': 7.5,
    'United States': 9.4
  },
  {
    country: 1956,
    Austria: 4.1,
    Canada: 8.8,
    France: 4.8,
    Germany: 4,
    Japan: 4.4,
    Netherlands: 4.7,
    'New Zealand': 7.7,
    Spain: 1.9,
    Sweden: 3.1,
    Switzerland: 5.1,
    'United Kingdom': 7.5,
    'United States': 9.4
  },
  {
    country: 1957,
    Austria: 4.3,
    Canada: 9.3,
    France: 5.1,
    Germany: 4.4,
    Japan: 4.5,
    Netherlands: 4.8,
    'New Zealand': 8.1,
    Spain: 3.8,
    Sweden: 3.2,
    Switzerland: 5.3,
    'United Kingdom': 7.7,
    'United States': 9.7
  },
  {
    country: 1958,
    Austria: 4.6,
    Canada: 9.7,
    France: 5.2,
    Germany: 4.4,
    Japan: 4.6,
    Netherlands: 4.6,
    'New Zealand': 7.5,
    Spain: 4.3,
    Sweden: 3.2,
    Switzerland: 5.8,
    'United Kingdom': 7.8,
    'United States': 10.2
  },
  {
    country: 1959,
    Austria: 4.7,
    Canada: 9.9,
    France: 4.9,
    Germany: 4.7,
    Japan: 4.8,
    Netherlands: 4.6,
    'New Zealand': 7.3,
    Spain: 4.2,
    Sweden: 3.3,
    Switzerland: 5.9,
    'United Kingdom': 8,
    'United States': 10.5
  },
  {
    country: 1960,
    Austria: 4.8,
    Canada: 9.8,
    France: 5,
    Germany: 5.1,
    Japan: 5.1,
    Netherlands: 7.3,
    'New Zealand': 8.2,
    Spain: 4.2,
    Sweden: 3.5,
    Switzerland: 6.6,
    'United Kingdom': 8.3,
    'United States': 10.7
  },
  {
    country: 1961,
    Austria: 4.7,
    Canada: 10.2,
    France: 5,
    Germany: 5.4,
    Japan: 5.6,
    Netherlands: 7.5,
    'New Zealand': 8.2,
    Spain: 4.5,
    Sweden: 3.7,
    Switzerland: 7.2,
    'United Kingdom': 8.4,
    'United States': 11
  },
  {
    country: 1962,
    Austria: 4.9,
    Canada: 10.5,
    France: 5.1,
    Germany: 5.3,
    Japan: 5.7,
    Netherlands: 7.4,
    'New Zealand': 8.1,
    Spain: 4.6,
    Sweden: 3.8,
    Switzerland: 7.6,
    'United Kingdom': 8.1,
    'United States': 10.9
  },
  {
    country: 1963,
    Austria: 5.1,
    Canada: 10.5,
    France: 5.1,
    Germany: 5.4,
    Japan: 5.9,
    Netherlands: 7.6,
    'New Zealand': 8.4,
    Spain: 4.7,
    Sweden: 3.9,
    Switzerland: 7.6,
    'United Kingdom': 8.3,
    'United States': 11
  },
  {
    country: 1964,
    Austria: 5.2,
    Canada: 10.4,
    France: 5.1,
    Germany: 5.7,
    Japan: 6.2,
    Netherlands: 6.9,
    'New Zealand': 8.2,
    Spain: 4.9,
    Sweden: 3.9,
    Switzerland: 7.2,
    'United Kingdom': 8.3,
    'United States': 10.6
  },
  {
    country: 1965,
    Austria: 5.4,
    Canada: 10.7,
    France: 5.3,
    Germany: 6,
    Japan: 6.4,
    Netherlands: 8.4,
    'New Zealand': 8.1,
    Spain: 5.3,
    Sweden: 4,
    Switzerland: 8.5,
    'United Kingdom': 8.1,
    'United States': 10.7
  },
  {
    country: 1966,
    Austria: 5.8,
    Canada: 10.8,
    France: 5.3,
    Germany: 6.2,
    Japan: 6.7,
    Netherlands: 6.8,
    'New Zealand': 8.6,
    Spain: 5.4,
    Sweden: 4.2,
    Switzerland: 6.7,
    'United Kingdom': 8.4,
    'United States': 10.7
  },
  {
    country: 1967,
    Austria: 5.9,
    Canada: 10.6,
    France: 5.6,
    Germany: 6.1,
    Japan: 7,
    Netherlands: 7.7,
    'New Zealand': 8.3,
    Spain: 5.6,
    Sweden: 4.2,
    Switzerland: 7.7,
    'United Kingdom': 8.5,
    'United States': 10.7
  },
  {
    country: 1968,
    Austria: 6,
    Canada: 10.3,
    France: 5.6,
    Germany: 6.5,
    Japan: 7,
    Netherlands: 8.4,
    'New Zealand': 8.2,
    Spain: 5.7,
    Sweden: 4.5,
    Switzerland: 8.1,
    'United Kingdom': 8.6,
    'United States': 10.4
  },
  {
    country: 1969,
    Austria: 6.2,
    Canada: 10.1,
    France: 5.6,
    Germany: 6.8,
    Japan: 7.5,
    Netherlands: 7.7,
    'New Zealand': 8.2,
    Spain: 5.7,
    Sweden: 4.7,
    Switzerland: 9,
    'United Kingdom': 8.8,
    'United States': 10
  },
  {
    country: 1970,
    Austria: 6.5,
    Canada: 10.5,
    France: 5.8,
    Germany: 7.1,
    Japan: 7.8,
    Netherlands: 8.3,
    'New Zealand': 8.3,
    Spain: 5.8,
    Sweden: 4.7,
    Switzerland: 9.5,
    'United Kingdom': 9,
    'United States': 10.2
  },
  {
    country: 1971,
    Austria: 6.6,
    Canada: 10.5,
    France: 5.9,
    Germany: 7.5,
    Japan: 8.2,
    Netherlands: 8.4,
    'New Zealand': 8.2,
    Spain: 5.9,
    Sweden: 4.6,
    Switzerland: 10.3,
    'United Kingdom': 8.5,
    'United States': 9.9
  },
  {
    country: 1972,
    Austria: 6.5,
    Canada: 10.6,
    France: 5.7,
    Germany: 7.5,
    Japan: 8.6,
    Netherlands: 9.2,
    'New Zealand': 8.3,
    Spain: 6.1,
    Sweden: 5.1,
    Switzerland: 10.7,
    'United Kingdom': 9.1,
    'United States': 10.2
  },
  {
    country: 1973,
    Austria: 7,
    Canada: 10.8,
    France: 5.9,
    Germany: 7.3,
    Japan: 8.9,
    Netherlands: 9.7,
    'New Zealand': 8.3,
    Spain: 6.4,
    Sweden: 4.2,
    Switzerland: 9.3,
    'United Kingdom': 9.5,
    'United States': 10.7
  },
  {
    country: 1974,
    Austria: 6.9,
    Canada: 10.7,
    France: 6.1,
    Germany: 7.5,
    Japan: 9.5,
    Netherlands: 9.9,
    'New Zealand': 8.3,
    Spain: 6.8,
    Sweden: 4.9,
    Switzerland: 9.2,
    'United Kingdom': 9.4,
    'United States': 10.6
  },
  {
    country: 1975,
    Austria: 6.6,
    Canada: 10.6,
    France: 6.3,
    Germany: 7.3,
    Japan: 9.5,
    Netherlands: 9.9,
    'New Zealand': 8.6,
    Spain: 6.4,
    Sweden: 5.1,
    Switzerland: 8.6,
    'United Kingdom': 9.2,
    'United States': 10.4
  },
  {
    country: 1976,
    Austria: 6.8,
    Canada: 10.9,
    France: 6.1,
    Germany: 7.6,
    Japan: 9.4,
    Netherlands: 9.6,
    'New Zealand': 8.4,
    Spain: 6.7,
    Sweden: 5.2,
    Switzerland: 8.5,
    'United Kingdom': 9,
    'United States': 10.3
  },
  {
    country: 1977,
    Austria: 6.9,
    Canada: 10.7,
    France: 6.3,
    Germany: 7,
    Japan: 9.7,
    Netherlands: 10.8,
    'New Zealand': 8.5,
    Spain: 7,
    Sweden: 4.9,
    Switzerland: 8.8,
    'United Kingdom': 8.7,
    'United States': 10.2
  },
  {
    country: 1978,
    Austria: 7,
    Canada: 10.4,
    France: 6.1,
    Germany: 7.3,
    Japan: 9.6,
    Netherlands: 9.7,
    'New Zealand': 8.3,
    Spain: 6.5,
    Sweden: 5.1,
    Switzerland: 8.5,
    'United Kingdom': 8.6,
    'United States': 10
  },
  {
    country: 1979,
    Austria: 7.2,
    Canada: 10.5,
    France: 6.2,
    Germany: 7.4,
    Japan: 9.6,
    Netherlands: 10.4,
    'New Zealand': 7.9,
    Spain: 7.2,
    Sweden: 5.1,
    Switzerland: 8.2,
    'United Kingdom': 8.4,
    'United States': 9.9
  },
  {
    country: 1980,
    Austria: 7.1,
    Canada: 10.3,
    France: 6.1,
    Germany: 7.5,
    Japan: 9.4,
    Netherlands: 9.2,
    'New Zealand': 7.7,
    Spain: 7,
    Sweden: 5.1,
    Switzerland: 8.3,
    'United Kingdom': 8.1,
    'United States': 9.9
  },
  {
    country: 1981,
    Austria: 7.1,
    Canada: 10.3,
    France: 6,
    Germany: 7.6,
    Japan: 9.5,
    Netherlands: 8.8,
    'New Zealand': 7.8,
    Spain: 6.4,
    Sweden: 4.9,
    Switzerland: 8.4,
    'United Kingdom': 7.5,
    'United States': 9.9
  },
  {
    country: 1982,
    Austria: 7,
    Canada: 10.4,
    France: 6,
    Germany: 6.9,
    Japan: 9.4,
    Netherlands: 9.1,
    'New Zealand': 7.6,
    Spain: 6.7,
    Sweden: 5.1,
    Switzerland: 8.4,
    'United Kingdom': 6.9,
    'United States': 9.7
  },
  {
    country: 1983,
    Austria: 7.2,
    Canada: 9.7,
    France: 6.1,
    Germany: 7.2,
    Japan: 9.3,
    Netherlands: 9.8,
    'New Zealand': 7.5,
    Spain: 6.7,
    Sweden: 4.9,
    Switzerland: 8.5,
    'United Kingdom': 6.9,
    'United States': 9.1
  },
  {
    country: 1984,
    Austria: 7,
    Canada: 9.6,
    France: 6.1,
    Germany: 7.1,
    Japan: 9.2,
    Netherlands: 8,
    'New Zealand': 7.5,
    Spain: 6.9,
    Sweden: 5,
    Switzerland: 8.4,
    'United Kingdom': 6.6,
    'United States': 9
  },
  {
    country: 1985,
    Austria: 7,
    Canada: 9.1,
    France: 6.4,
    Germany: 7.2,
    Japan: 9,
    Netherlands: 8,
    'New Zealand': 6.7,
    Spain: 7.3,
    Sweden: 4.9,
    Switzerland: 8.1,
    'United Kingdom': 6.5,
    'United States': 8.8
  },
  {
    country: 1986,
    Austria: 7,
    Canada: 8.7,
    France: 6.2,
    Germany: 7,
    Japan: 8.8,
    Netherlands: 7.9,
    'New Zealand': 6.2,
    Spain: 7.1,
    Sweden: 4.8,
    Switzerland: 8.1,
    'United Kingdom': 6.3,
    'United States': 8.6
  },
  {
    country: 1987,
    Austria: 6.8,
    Canada: 8.3,
    France: 6.1,
    Germany: 7,
    Japan: 8.7,
    Netherlands: 7.6,
    'New Zealand': 6.2,
    Spain: 7.2,
    Sweden: 4.7,
    Switzerland: 8,
    'United Kingdom': 6.3,
    'United States': 8.3
  },
  {
    country: 1988,
    Austria: 6.4,
    Canada: 8,
    France: 6,
    Germany: 6.9,
    Japan: 8.6,
    Netherlands: 7.5,
    'New Zealand': 6.3,
    Spain: 6.9,
    Sweden: 4.7,
    Switzerland: 7.9,
    'United Kingdom': 6.2,
    'United States': 8.1
  },
  {
    country: 1989,
    Austria: 6.2,
    Canada: 7.3,
    France: 6,
    Germany: 7,
    Japan: 8.6,
    Netherlands: 7.5,
    'New Zealand': 5.1,
    Spain: 7,
    Sweden: 4.6,
    Switzerland: 7.9,
    'United Kingdom': 6.3,
    'United States': 7.6
  },
  {
    country: 1990,
    Austria: 6.3,
    Canada: 7,
    France: 5.9,
    Germany: null,
    Japan: 8.8,
    Netherlands: 7.6,
    'New Zealand': 5.3,
    Spain: 7.2,
    Sweden: 4.5,
    Switzerland: 7.8,
    'United Kingdom': 6.5,
    'United States': 7.4
  },
  {
    country: 1991,
    Austria: 6.4,
    Canada: 6.3,
    France: 6,
    Germany: 6.6,
    Japan: 8.9,
    Netherlands: 8,
    'New Zealand': 4.7,
    Spain: 7.3,
    Sweden: 4.5,
    Switzerland: 7.8,
    'United Kingdom': 6.2,
    'United States': 7.1
  },
  {
    country: 1992,
    Austria: 6.1,
    Canada: 6.4,
    France: 5.9,
    Germany: 6.1,
    Japan: 8.8,
    Netherlands: 7.3,
    'New Zealand': 4.2,
    Spain: 6.9,
    Sweden: 4.6,
    Switzerland: 8.2,
    'United Kingdom': 5.9,
    'United States': 6.9
  },
  {
    country: 1993,
    Austria: 5.8,
    Canada: 6,
    France: 5.7,
    Germany: 5.9,
    Japan: 8.8,
    Netherlands: 6.6,
    'New Zealand': 4.2,
    Spain: 6.3,
    Sweden: 3.8,
    Switzerland: 7.6,
    'United Kingdom': 5.7,
    'United States': 6.6
  },
  {
    country: 1994,
    Austria: 5.9,
    Canada: 6.6,
    France: 5.6,
    Germany: 6,
    Japan: 8.8,
    Netherlands: 6.8,
    'New Zealand': 4,
    Spain: 6.8,
    Sweden: 3.6,
    Switzerland: 7.4,
    'United Kingdom': 5.6,
    'United States': 6.6
  },
  {
    country: 1995,
    Austria: 5.6,
    Canada: 5.9,
    France: 5.4,
    Germany: 6,
    Japan: 8.8,
    Netherlands: 6.8,
    'New Zealand': 4,
    Spain: 6.3,
    Sweden: 3.4,
    Switzerland: 7.3,
    'United Kingdom': 5.7,
    'United States': 6.5
  },
  {
    country: 1996,
    Austria: 5.4,
    Canada: 6.2,
    France: 5.4,
    Germany: 6,
    Japan: 9.1,
    Netherlands: 6.2,
    'New Zealand': 4.2,
    Spain: 6,
    Sweden: 3.5,
    Switzerland: 7.2,
    'United Kingdom': 5.7,
    'United States': 6.4
  },
  {
    country: 1997,
    Austria: 5.7,
    Canada: 5.8,
    France: 5.2,
    Germany: 6.1,
    Japan: 8.5,
    Netherlands: 6.5,
    'New Zealand': 4.1,
    Spain: 6.6,
    Sweden: 2.6,
    Switzerland: 7,
    'United Kingdom': 5.6,
    'United States': 6.3
  },
  {
    country: 1998,
    Austria: 6.4,
    Canada: 5.8,
    France: 5.2,
    Germany: 6.1,
    Japan: 8.7,
    Netherlands: 6.6,
    'New Zealand': 4,
    Spain: 7.3,
    Sweden: 2.5,
    Switzerland: 7.1,
    'United Kingdom': 5.6,
    'United States': 6
  },
  {
    country: 1999,
    Austria: 6.6,
    Canada: 5.7,
    France: 5.2,
    Germany: 6.4,
    Japan: 8.5,
    Netherlands: 6.4,
    'New Zealand': 3.8,
    Spain: 7.1,
    Sweden: 2.8,
    Switzerland: 6.8,
    'United Kingdom': 5.8,
    'United States': 5.7
  },
  {
    country: 2000,
    Austria: 6.5,
    Canada: 5.3,
    France: 5.1,
    Germany: 6.1,
    Japan: 8.3,
    Netherlands: 6.4,
    'New Zealand': 3.9,
    Spain: 7.1,
    Sweden: 2.9,
    Switzerland: 6.7,
    'United Kingdom': 5.7,
    'United States': 5.4
  },
  {
    country: 2001,
    Austria: 6.3,
    Canada: 5,
    France: 5.2,
    Germany: 6.2,
    Japan: 8.1,
    Netherlands: 6,
    'New Zealand': 3.4,
    Spain: 7.2,
    Sweden: 2.9,
    Switzerland: 6.5,
    'United Kingdom': 5.6,
    'United States': 5.3
  },
  {
    country: 2002,
    Austria: 4.8,
    Canada: 4.4,
    France: 4.9,
    Germany: 6.3,
    Japan: 7.9,
    Netherlands: 6.3,
    'New Zealand': 3.5,
    Spain: 7.1,
    Sweden: 3,
    Switzerland: 6.5,
    'United Kingdom': 5.5,
    'United States': 5.1
  },
  {
    country: 2003,
    Austria: 4.6,
    Canada: 4.2,
    France: 4.3,
    Germany: 5.9,
    Japan: 7.6,
    Netherlands: 6.2,
    'New Zealand': 3.1,
    Spain: 7.1,
    Sweden: 2.9,
    Switzerland: 6.6,
    'United Kingdom': 5.4,
    'United States': 4.9
  },
  {
    country: 2004,
    Austria: 4.6,
    Canada: 4,
    France: 3.5,
    Germany: 5.2,
    Japan: 7.4,
    Netherlands: 5.6,
    'New Zealand': 3.1,
    Spain: 7.2,
    Sweden: 2.8,
    Switzerland: 6.4,
    'United Kingdom': 5.2,
    'United States': 4.7
  },
  {
    country: 2005,
    Austria: null,
    Canada: 3.7,
    France: 3.5,
    Germany: 5,
    Japan: 7.2,
    Netherlands: 5.1,
    'New Zealand': 3.3,
    Spain: 7,
    Sweden: 2.7,
    Switzerland: 5.7,
    'United Kingdom': 5.1,
    'United States': 4.5
  },
  {
    country: 2006,
    Austria: null,
    Canada: 3.4,
    France: 3.5,
    Germany: 4.5,
    Japan: 6.8,
    Netherlands: 5.1,
    'New Zealand': 3.2,
    Spain: 6.8,
    Sweden: 2.6,
    Switzerland: 5.8,
    'United Kingdom': 4.9,
    'United States': 4.5
  },
  {
    country: 2007,
    Austria: null,
    Canada: 3.2,
    France: 3.5,
    Germany: 4.4,
    Japan: 6.5,
    Netherlands: 5.3,
    'New Zealand': 3.2,
    Spain: 6.6,
    Sweden: null,
    Switzerland: 5.4,
    'United Kingdom': 4.7,
    'United States': 4.2
  },
  {
    country: 2008,
    Austria: null,
    Canada: 3,
    France: 3.4,
    Germany: 4.2,
    Japan: 6.2,
    Netherlands: 5.1,
    'New Zealand': 3.3,
    Spain: 6.7,
    Sweden: null,
    Switzerland: 5.7,
    'United Kingdom': 4.5,
    'United States': 4
  },
  {
    country: 2009,
    Austria: null,
    Canada: 3.1,
    France: 3.5,
    Germany: 4.3,
    Japan: 5.9,
    Netherlands: 4.6,
    'New Zealand': 3.1,
    Spain: 6.1,
    Sweden: null,
    Switzerland: 5.6,
    'United Kingdom': 4.3,
    'United States': 3.7
  },
  {
    country: 2010,
    Austria: null,
    Canada: 3.5,
    France: 3.5,
    Germany: 4.2,
    Japan: 5.3,
    Netherlands: 4.5,
    'New Zealand': null,
    Spain: 5.5,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 4,
    'United States': 3.6
  },
  {
    country: 2011,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 4.4,
    Japan: 4.9,
    Netherlands: 1.5,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 3.5,
    'United States': 3.5
  },
  {
    country: 2012,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 4.2,
    Japan: 4.9,
    Netherlands: 1.5,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 3.4,
    'United States': 3.5
  },
  {
    country: 2013,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 4.1,
    Japan: 4.9,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 3.2,
    'United States': 3.3
  },
  {
    country: 2014,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 4.1,
    Japan: 4.5,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': 3,
    'United States': 3.2
  },
  {
    country: 2015,
    Austria: null,
    Canada: null,
    France: null,
    Germany: 4.2,
    Japan: 4.6,
    Netherlands: null,
    'New Zealand': null,
    Spain: null,
    Sweden: null,
    Switzerland: null,
    'United Kingdom': null,
    'United States': null
  }
];

const spec = {
  type: 'line',
  data: {
    values: latestData,
    transforms: [
      {
        type: 'fold',
        options: {
          key: 'name',
          value: 'value',
          fields: [
            'Austria',
            'Canada',
            'France',
            'Germany',
            'Japan',
            'Netherlands',
            'New Zealand',
            'Spain',
            'Sweden',
            'Switzerland',
            'United Kingdom',
            'United States'
          ]
        }
      }
    ]
  },
  xField: 'country',
  yField: 'value',
  zField: 'name',
  seriesField: 'name',
  point: {
    style: {
      size: 0
    },
    state: {
      dimension_hover: {
        size: datum => {
          if (datum.name === 'United States') {
            return 8;
          }
          if (datum.name === 'Germany') {
            return 8;
          }

          if (datum.name === 'France') {
            return 8;
          }
          return 0;
        },
        fill: datum => {
          if (datum.name === 'United States') {
            return '#c02d24';
          }
          if (datum.name === 'Germany') {
            return '#15607a';
          }

          if (datum.name === 'France') {
            return '#008cb7';
          }
          return 'rgb(204, 204, 204)';
        }
      }
    }
  },
  line: {
    style: {
      lineWidth: datum => {
        if (datum.name === 'United States') {
          return 3;
        }
        if (datum.name === 'Germany') {
          return 3;
        }

        if (datum.name === 'France') {
          return 3;
        }
        return 1;
      },
      stroke: datum => {
        if (datum.name === 'United States') {
          return '#c02d24';
        }
        if (datum.name === 'Germany') {
          return '#15607a';
        }

        if (datum.name === 'France') {
          return '#008cb7';
        }
        return 'rgb(204, 204, 204)';
      },
      zIndex: datum => {
        if (datum.name === 'United States') {
          return 1;
        }
        if (datum.name === 'Germany') {
          return 1;
        }

        if (datum.name === 'France') {
          return 1;
        }
        return 0;
      }
    }
  },
  axes: [
    {
      orient: 'bottom',
      mode: '3d',
      domainLine: { style: { stroke: '#000' } },
      tick: {
        style: { stroke: '#000' }
      }
    },
    {
      orient: 'left',
      mode: '3d',
      domainLine: { visible: false },
      tick: { visible: false },
      label: {
        style: {
          fill: 'rgb(162, 162, 162)'
        }
      },
      grid: {
        style: {
          lineDash: [0],
          stroke: 'rgb(231, 231, 231)'
        }
      }
    },
    {
      orient: 'z',
      mode: '3d',
      label: { visible: true },
      type: 'band',
      grid: { visible: true },
      width: 600,
      height: 200,
      depth: 200
    }
  ],
  title: {
    visible: true,
    text: 'The rise and fall of cigarette consumption in developed countries',
    subtext: `Sales of cigarettes per adult per day, in selected countries. Figures include manufactured cigarettes,
as well as an estimated number of hand-rolled cigarettes, per adult (ages 15+) per day.`,
    subtextStyle: {
      fontSize: 12
    }
  },
  crosshair: {
    xField: {
      visible: false
    }
  }
};
const vchart = new VChart(spec, {
  dom: CONTAINER_ID,
  disableDirtyBounds: true,
  options3d: {
    enable: true,
    enableView3dTranform: true,
    center: { x: 500, y: 250 }
  }
});
vchart.renderAsync();

// Just for the convenience of console debugging, DO NOT COPY!
window['vchart'] = vchart;
```

## 相关教程

[折线图](link)