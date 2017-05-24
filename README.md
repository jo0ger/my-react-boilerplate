# my-react-boilerplate

## 简介

自己在学习react全家桶时，根据平时接触到的一些框架以及个人理解，在[Create React App](https://github.com/facebookincubator/create-react-app)的基础上自己定制一套模板

## 目录结构

目录结构参考了[react-starter-kit](!https://github.com/bodyno/react-starter-kit)，使用的是 fractal(不规则碎片形：适合大型项目)，方法的分组主要是依照特性而不是文件类型

```
my-react-boilerplate/
  │  
  ├─config                            * webpack以及jest的配置，由create-react-app生成
  │                        
  ├─public                            * 项目公用文件夹，由create-react-app生成
  │      
  ├─scripts                           * npm/yarn 运行命令，由create-react-app生成
  │      
  └─src
      │  main.js                      * 程序主入口，启动和渲染
      │  
      ├─components                    * 全局可复用的表现组件（Presentational Components）
      │  │
      │  ├─Bundle                     * react-router4.x 官方推荐的code-spliting组件
      │  │      
      │  └─DevTools                   * redux devtool
      │          
      ├─containers                    * 全局可复用的容器组件（Container Component）
      │     
      │     AppContainer.js           * 路由结构，传入routes，生成Provider包裹的路由
      │      
      ├─layouts                       * 主页结构
      │           
      ├─routes                        * 主路由和异步路由分割点
      │  │
      │  │  index.js                  * 传入store，生成全部路由routes
      │  │  
      │  └─Counter                    * 不规则路由
      │     │
      │     │  index.js               * 单个路由入口，非异步组件直接生成该组件，异步组件生成{ load, preload, callback }
      │     │  
      │     ├─assets                  * 组件内的静态资源
      │     │      
      │     ├─components              * 表现组件
      │     │      
      │     ├─containers              * 容器组件，链接components，actions，store以及router
      │     │      
      │     └─modules                 * constants/actions/reducers整合
      │   
      │              
      ├─service                       * 服务类目录，主要是api
      │      
      ├─static                        * 静态资源目录
      │      
      ├─store                         * Redux Store目录
      │  │
      │  │  createStore.js            * store创建，enhanders/middleware 集成
      │  │  
      │  └─reducers                   * reducers
      │          
      ├─styles                        * 样式文件，静态或非静态（sass,less,stylus）
      │      
      └─utils                         * 工具类目录
```

## TODOS

随着自己学习react的深入，会持续优化该模板的相关配置及结构

* 更加丰富的`npm scripts`
* Hot Reload
* 生产环境，使用[babel-react-optimize](!https://github.com/thejameskyle/babel-react-optimize)优化React代码
* 生产环境，使用[react-remove-prop-types](!https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)移除组件PropTypes类型检测，提升部分性能
* 可以尝试[react-css-modules](!https://github.com/gajus/react-css-modules)或者[styled-components](!https://github.com/styled-components/styled-components)
* 路由，组件动画过渡
* ......

