# LanguageSwitch

Language Switch Demo.

## 两种方法去初始化国际化内容

1. 直接逐个获取DOM元素去初始化

2. 可以利用html的data属性，它具有可读性强、可维护性强、兼容Jquery的data()方法等优点。不用写一句标签的赋值代码，即可对标签进行国际化。具体可以见源码文件：/js/language.extensions-data.js

## Tips

1. language.properties此空文件存在的意义：避免报以下错误

> GET http://localhost:9090/languageswitch/i18n/strings.properties?_=1553230319025 404 (Not Found)

2. 源码直接在google浏览器里面运行的时候你会发现一个跨域的问题。

> 要求你在一种webServer里面去访问.properties文件，这个问题你只需要使用任何一种webserver运行即可，比如IIS、Apache、Node的web服务器等。

3. 第三方组件的国际化（方式很多，以下参考）

> 对于第三方组件，我们自定义的代码里面的中文要做国际化，我只需要使用$.i18n.prop('key')即可，比如bootstrapTable：

```javascript
{
  field: 'AuditEventType',
  title: '业务类型',
  width: '12%'
}
// 直接使用如下：
{
        field: 'AuditEventType',
        title: $.i18n.prop('bllType'),
        width: '12%'
}
```

4. 实现思路

-  初始化页面的时候去当前域的cookie里面取当前浏览器保存语言的cookie，根据取到的当前语言版本去初始化国际化组件，然后初始化select组件的选中值
-  
- 注册select组件的change事件，根据当前选中的语言，更新cookie里面的语言信息，然后刷新页面。
