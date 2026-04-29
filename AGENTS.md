# Wizard Land 项目说明

## 项目概览

Wizard Land 是一个以魔法主题度假地为背景的纯静态网站。项目没有构建系统、后端服务或包管理配置，页面由 HTML、CSS、图片、音频和少量 jQuery 脚本组成，可以直接在浏览器中打开 `index.html` 查看。

网站内容围绕虚构的魔法旅游目的地展开，核心体验包括首页展示、城堡探索、传送门介绍、魔法活动介绍、账号注册/登录、预订、未来活动查询、帮助反馈和资源引用。

## 技术栈与依赖

- 页面：多个独立 `.html` 文件。
- 样式：全局样式集中在 `style.css`。
- 脚本：全局交互集中在 `js/script.js`。
- JavaScript 依赖：
  - `js/jquery-3.5.1.min.js`
  - `js/jquery.cycle2.min.js`
- 外部字体：各页面通过 Google Fonts 引入 `Dancing Script`、`Rubik`、`Work Sans`。
- 媒体资源：
  - 图片位于 `images/`。
  - 首页背景音乐位于 `audios/bensound-creativeminds.mp3`。

## 目录结构

- `index.html`：首页，展示品牌、导航、三大入口、轮播图和用户评价。
- `explore_castle.html`：Wizard Castle 介绍页，包含城堡、自动烹饪食物、魔法图书馆、时间混乱、灵魂交换等内容。
- `explore_teleport.html`：Teleport 介绍页，说明传送门和瞬间转移体验。
- `explore_events.html`：Events 介绍页，说明隐身、幻象迷宫、创造星球、幸运咒等活动。
- `booking.html`：预订页，收集姓名、年龄、电话、出发日期、人数和房间数量。
- `booking_success.html`：预订成功页。
- `account.html`：账号注册页。
- `log_in.html`：账号登录页。
- `future_events.html`：未来活动查询页，根据用户选择的日期显示当月活动日期。
- `help.html`：帮助、联系、反馈和 FAQ 页面。
- `feedback_success.html`：反馈提交成功页。
- `about.html`：资源引用与版权页。
- `style.css`：全站样式、布局、导航、表单、动画和轮播外观。
- `js/script.js`：全站交互逻辑。
- `fonts.txt`：字体族记录。
- `.netlify/state.json`：本地 Netlify 站点关联信息，当前未被 Git 跟踪。

## 页面与导航约定

全站页面使用相似的头部结构：

- 顶部标题为 `Wizard Land`。
- 主导航包含 `Home`、`Explore`、`Booking`、`Help`、`Account`、`About`。
- `Explore` 有二级导航：
  - `Wizard Castle`
  - `Teleport`
  - `Events`
- `Account` 有二级导航：
  - `Sign up`
  - `Log in` 或 `Switch account`
  - `Future events`

当前页面通常通过 `currentpage` 类标记。二级导航的显示和隐藏由 `js/script.js` 中的鼠标移入/移出事件控制。

## 主要交互逻辑

`js/script.js` 在 `$(document).ready(...)` 中初始化全站行为：

- 给 `body` 添加 `js` 类。
- 根据 `localStorage.username_input` 判断用户是否已登录，并动态修改首页欢迎语、服务文案和账号菜单文字。
- 点击账号二级导航中的 `user_full_name` 会清除 `username_input`，用于切换账号/退出当前登录状态。
- 点击 `.click_to_show` 会切换 `.information` 元素的 `hidden` 类，用于展示探索页中隐藏的介绍内容。
- 首页日期显示使用浏览器当前日期，格式为 `月/日/年`。
- 首页轮播依赖 Cycle2 插件和 `.cycle-slideshow` 结构。
- 注册流程：
  - `#sign_up` 校验姓名、年龄、邮箱、电话、密码、确认密码是否为空。
  - 姓名会保存到 `localStorage.username_create`。
  - 校验通过后跳转到 `log_in.html`。
- 登录流程：
  - `#sign_in` 校验姓名和密码是否为空。
  - 姓名必须等于 `localStorage.username_create`。
  - 校验通过后保存 `localStorage.username_input` 并跳转首页。
  - 当前逻辑不校验密码是否匹配注册密码，只校验是否填写。
- 预订流程：
  - `#submit_book` 校验姓名、年龄、电话、出发日期、旅行人数是否为空。
  - 输入姓名必须等于当前 `localStorage.username_input`。
  - 校验通过后跳转 `booking_success.html`。
  - 房间数量字段当前不参与完整性校验。
- 反馈流程：
  - `#submit_feedback` 弹出感谢提示并跳转 `feedback_success.html`。
  - 当前反馈不会保存或发送到后端。
- 未来活动查询：
  - `#submitdate` 根据 `#traveldate` 选择的日期显示当月 2 日、11 日、23 日、29 日的活动。
  - 如果选择日期已经超过对应活动日，会在日期后追加 `expired`。

## 样式与视觉风格

- 全站使用白色文字、固定背景图、暗色半透明导航和径向渐变内容区。
- 主要字体：
  - 标题与导航偏向 `Rubik`、`Work Sans`。
  - 大型口号和装饰标题使用 `Dancing Script`。
- 页面背景图片多数通过各 HTML 文件的 `body` 内联 `style` 设置。
- `.moreinformation` 是多数页面的主要内容容器。
- `.information` 是通用内容块，通常包含圆形图片和文字说明。
- `.hidden` 用于隐藏探索页的详细内容。
- 图片常使用圆形裁切、悬停放大和 `rotate` 动画。
- 表单错误状态使用 `.error`，表现为红色边框。

## 运行与开发方式

这是静态站点，最简单的运行方式是直接打开根目录的 `index.html`。如果需要模拟站点路径和跨页面资源加载，也可以在项目根目录启动任意静态文件服务器。

没有发现 `package.json`、`vite.config.*`、`netlify.toml` 或其他构建配置，因此当前没有固定的安装、构建或测试命令。

## 部署线索

项目根目录存在 `.netlify/state.json`，其中包含 Netlify `siteId`。该目录当前在 Git 中显示为未跟踪文件。是否提交 `.netlify/` 取决于团队约定；通常本地部署状态文件不一定适合提交到仓库。

## 维护注意事项

- 修改导航时，需要同步更新所有 HTML 页面中的导航结构，否则页面之间会不一致。
- 多个页面重复引入同一组 CSS、Google Fonts、jQuery、Cycle2 和 `js/script.js`。
- 很多交互依赖固定的 `id` 和 `class`，修改 HTML 标识符前需要同时检查 `js/script.js` 和 `style.css`。
- 当前页面内存在一些重复 `id`，例如探索页中的 `castlepart`、`teleportpart`、`eventpart`，以及预订页房间输入使用重复的 `roomtype`。如果后续增强脚本逻辑，应优先清理这些重复标识。
- 账号、登录、预订、反馈都只是前端演示逻辑，没有真实认证、持久化数据库或服务端提交。
- 用户信息存储在浏览器 `localStorage` 中，不适合保存真实敏感信息。
- `booking_success.html` 中的 `#full_name` 会被登录状态逻辑填充；未登录或姓名不匹配时，预订页会阻止跳转。
- 首页音频使用 `autoplay`，现代浏览器可能会因为自动播放策略而阻止播放。
- 外部字体依赖 Google Fonts；离线或网络受限时字体会回退。
- `about.html` 记录了大量图片来源引用，新增或替换图片时应同步更新资源引用。

## 内容背景

Wizard Land 被设定为一个普通人可通过传送门抵达的隐藏魔法度假地。核心卖点包括：

- 隐藏的 Wizard Castle。
- 可自动烹饪、随情绪变化口味的食物。
- 可学习各种咒语的魔法图书馆。
- 可造成时间错位的生活空间。
- 可能发生灵魂交换的魔法房间。
- 可瞬间抵达目的地的 Teleport。
- 隐身、幻象迷宫、创造星球、幸运咒等魔法活动。
- 每月固定日期展示的未来活动，例如自由飞行、领取魔法猫、祭祀仪式、魔法棋。

整体文案语气偏奇幻、轻松、带一点黑色幽默，维护内容时建议保持这种风格。
