# LanguageSwitch

Language Switch Demo.

## Tips

- language.properties此空文件存在的意义：避免报以下错误

> GET http://localhost:9090/languageswitch/i18n/strings.properties?_=1553230319025 404 (Not Found) 

- 源码直接在google浏览器里面运行的时候你会发现一个跨域的问题。

> 要求你在一种webServer里面去访问.properties文件，这个问题你只需要使用任何一种webserver运行即可，比如IIS、Apache、Node的web服务器等。

## 两种方法去初始化国际化内容

- 直接逐个获取DOM元素去初始化

- 可以利用html的data属性，它具有可读性强、可维护性强、兼容Jquery的data()方法等优点。不用写一句标签的赋值代码，即可对标签进行国际化。具体可以见源码文件：/js/language.extensions-data.js
