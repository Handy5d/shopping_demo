# 移动端商城项目

基于 Vue.js + Vant UI 开发的移动端商城项目，提供完整的购物流程体验。

## 技术栈

- Vue 2.x
- Vuex
- Vue Router
- Vant UI
- Axios
- PostCSS

## 功能特性

### 用户模块
- [x] 手机号登录/注册
- [x] 短信验证码
- [x] 个人中心

### 商品模块
- [x] 商品分类
- [x] 商品搜索
- [x] 商品详情
- [x] 历史记录

### 购物车
- [x] 加入购物车
- [x] 商品数量修改
- [x] 商品删除
- [x] 全选/取消全选

### 订单模块
- [x] 订单确认
- [x] 地址管理
- [x] 订单列表
- [x] 订单详情


## 项目结构

- src/
- ├── api/         # 接口请求
- ├── assets/      # 静态资源
- ├── components/  # 公共组件
- ├── mixins/      # 混入
- ├── router/      # 路由配置
- ├── store/       # Vuex状态管理
- ├── utils/       # 工具函数
- └── views/       # 页面组件

## 项目运行

```bash
# 克隆项目
git clone https://github.com/your-username/shopping_demo.git

# 安装依赖
npm install

# 启动服务
npm run serve

# 打包构建
npm run build
