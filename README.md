# React管理系统模板
### 项目用到了：（附带链接可以参考查看）
* [React](https://github.com/facebook/react)
* [Webpack](https://github.com/webpack/webpack)
* [React-router](https://github.com/ReactTraining/react-router)
* [React-redux](http://redux.js.org/docs/basics/UsageWithReact.html)
* [Ant design](http://design.alipay.com/)
* 图表用了Ant design社区推荐的[G2](http://antv.alipay.com/g2/doc/index.html)
* 为了方便查看redux的状态树，可以在chrome里安装redux插件 - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#usage)

### 运行:
1. npm install
2. npm run start (for develop stage)
3. open localhost:8888

或者
1. npm run dev/build (for production stage)
2. 打开index.html即可

##### 整个框架徒手搭建的。写了这么久才开始整理文字工作，发现记忆有些不好使了，所以赶紧把用到的一些技术记录下来。项目搭建过程如下：
* npm init生成package.json
* 用npm下载项目所用到的依赖，具体见package.json
* 新建webpack.config.js，编写开发阶段所需的组件打包等程序
* 新建webpack.production.config.js, 供production阶段使用，打包并压缩代码体积
* 新建文件夹src存放所有的js和css代码
* src/root.js为程序入口，页面所有路径和对应的内容在此文件进行设置
* redux是为了方便api数据的保存读取，在项目中由store, action, reducer, container组成，模板里只有table的数据用到了redux作为示例
* 使用npm start运行，web-dev-server可以实现代码改动进行自动刷新，方便代码改动与调试


之后想到什么还会继续添加，如果有不对的地方欢迎大家给我指正~