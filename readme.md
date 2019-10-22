首先webpack是一个工具，但凡是工具就需要安装
你可以全局安装:	cnpm i webpack -g
当然如果只想在 项目中使用
就可以：cnpm i webpack —save-dev


大致建立一个 健全的src文件夹
然后开始自己需要的插件，这时就需要用到package.json文件。
所以需要初始化一下 : cnpm init -y
这时package.json 就有了，此时就可以安装自己需要的插件了。

当我们在main.js使用:
import xx from 'xx' or const xx = require('xx') 引入模块时，会发现游览器是不识别 impport 和 require 。这个时候就需要用到我们的webpack。
那么首先就是安装，官网有 指南

目前是学习阶段 所以只对main.js进行打包 ，
webpack 将要打包的文件路径 打包后生成的文件路径

如果项目目录中 有webpack.config.js的话  那么webpack会默认 执行config文件的配置


之所以可以在js文件中 import css文件 ，是因为有 css-loader 和 style-loader 这两个插件的扶持


也就是说 webpack提供了 很多 loader。 css对应的loader  less对应的loader scss对应的loader   image对应的loader。

另外 webpack4 加强了 文件的随意放置性。 不像之前 图片必须放置在 asstes中，这样导致 文件的可移植性很低。 我们可以把一个组件所需要的 字体图标 图片 等等，都放置在一个文件中，


但是，如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。


通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。

clean-webpack-plugin 是一个比较普及的管理插件


错误定位 在 webpack.config.js中加入:
devtool: 'inline-source-map',

即时更新代码:

webpack-dev-server ：代码更新 游览器自动刷新

flow 是facebook推出的代码检查插件

/**
    之所以不推荐在HTML文件中使用script  或者 link来引入 静态资源，就是因为这样又回到之前的老样子了，那么为什么还要用webpack这个打包工具了。
    这样做还是为导致网站加载慢。因为他每次遇到静态资源就要去服务器 取数据。
    所以此时 只需要在html文件中引入一个js， 那么就是我们的main.js。 
    我们所有的资源 都在main.js里面引入，这样webpack将来构建的时候，就会处理我们的所有依赖
*/