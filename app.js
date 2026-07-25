const STORE_KEY = "creator-dashboard-v1";

const selectTools = [
  { name: "蝉妈妈", url: "https://www.chanmama.com/", desc: "抖音电商数据，查商品销量榜、达人带货榜、视频热销榜" },
  { name: "飞瓜数据", url: "https://www.feigua.cn/", desc: "抖音爆款商品/视频/达人，带商品趋势曲线" },
  { name: "抖音商品榜", url: "https://www.douyin.com/", desc: "抖音App内搜索「商品榜」，看实时热销榜" },
  { name: "灰豚数据", url: "https://www.huitun.com/", desc: "抖音/小红书带货数据，有小店商品分析" },
  { name: "新抖数据", url: "https://newrank.cn/new/douyin", desc: "新榜旗下，看商品 propagated 榜和带货视频" },
  { name: "小红书蒲公英", url: "https://pgy.xiaohongshu.com/", desc: "小红书官方选品/合作平台，后续小红书带货用" },
];

const forecastBeauty = [
  { name: "冷感/冰感防晒霜", price: "50-150", trend: "夏季持续走量", logic: "季节刚需，客单价低，试用上脸画面直观" },
  { name: "多效合一卸妆膏", price: "60-200", trend: "乳化过程有视觉点", logic: "干手湿手状态反差大，适合展示冲水秒化" },
  { name: "次抛精华", price: "80-300", trend: "便携+卫生概念", logic: "单次用量可视化，适合独居人设不浪费" },
  { name: "护发精油/发膜", price: "40-180", trend: "沙发救星话题", logic: "前后对比强烈，洗漱台场景好拍" },
  { name: "唇部磨砂+唇膜组合", price: "30-120", trend: "夜间护理场景", logic: "睡前画面治愈，适合卧室场景" },
  { name: "身体乳/止汗露", price: "30-130", trend: "夏季露出需求", logic: "涂抹画面+香味描述，适合独居真实感" },
  { name: "美容仪/导入仪", price: "300-1300", trend: "居家护肤升级", logic: "客单高，需展示长期使用感，适合深度种草" },
  { name: "冷感色遮瑕/调色霜", price: "40-180", trend: "色彩校正话题", logic: "色彩反差视觉冲击强，适合对比画面" },
];

const forecastDigital = [
  { name: "桌面高速吹风机", price: "200-1300", trend: "平替戴森话题", logic: "风力直观可见，可拍头发飞动特写" },
  { name: "便携榨汁杯", price: "50-300", trend: "独居早餐场景", logic: "单人使用场景天然，过程短好拍" },
  { name: "桌面空气净化器", price: "200-800", trend: "居家空气质量关注", logic: "客厅场景，可拍烟雾对比" },
  { name: "颈膜仪/眼部按摩仪", price: "100-600", trend: "办公族疲劳场景", logic: "单人使用，特写画面舒服" },
  { name: "无线充电支架", price: "40-200", trend: "桌面整洁需求", logic: "摆放即用，适合客厅/床头场景" },
  { name: "暖被机/烘被机", price: "150-500", trend: "冬季独居刚需", logic: "床上场景，暖感描述转化高" },
  { name: "手持挂烫机", price: "60-250", trend: "通勤穿搭需求", logic: "前后对比强烈，过程短易拍" },
  { name: "桌面氛围灯/日落灯", price: "30-200", trend: "独居氛围感", logic: "画面自带美感，适合卧室场景" },
];

const productChecklist = [
  "利润率是否够（扣掉佣金/运费/退货后还有赚）",
  "是否有复购可能（消耗品/耗材优先）",
  "退货率是否可控（易碎/尺码/效果不稳的慎选）",
  "是否符合单身独居女性人设",
  "是否单人可拍（不依赖双人互动）",
  "是否有明确卖点可在15秒内展示",
  "客单价是否在30-1300区间",
  "是否有合规风险（医疗/功效宣称/极限词）",
  "是否自己真的用过/愿意用（真实感）",
  "是否有现货/发货稳定（避免爆单后断货）",
];

const inspirationPool = [
  { title: "用3句话讲清楚一个冷知识", tags: ["知识", "反差"], desc: "开头直接抛出结论，中间补一个反直觉解释，结尾留钩子引导评论。", platforms: ["douyin", "bili", "xhs"] },
  { title: "挑战100元在城市活一天", tags: ["挑战", "Vlog"], desc: "全程记录开销与意外，结尾算总账并问观众哪里能省。", platforms: ["douyin", "bili"] },
  { title: "AI工具实测：到底能不能替代我", tags: ["测评", "AI"], desc: "选一个你常用的工作流，用AI重做一遍，对比时间/质量/翻车点。", platforms: ["douyin", "bili", "xhs"] },
  { title: "假如把经典剧台词改成打工人口吻", tags: ["二创", "影视"], desc: "截经典片段重新配音或改字幕，蹭热度同时降低原创门槛。", platforms: ["douyin", "xhs"] },
  { title: "去菜市场找大爷大妈学一道绝活", tags: ["烟火气", "教程"], desc: "街头采访+现场跟拍，真实感强，评论区容易分享家乡做法。", platforms: ["douyin", "xhs"] },
  { title: "把网友的离谱评论拍成视频", tags: ["互动", "整活"], desc: "置顶或高赞评论截图当脚本，既宠粉又能保证内容有人想看。", platforms: ["douyin", "bili", "xhs"] },
  { title: "30秒复刻一道外卖招牌菜", tags: ["美食", "教程"], desc: "开头展示成品和外卖价，中间快进操作，结尾算成本。", platforms: ["douyin", "xhs"] },
  { title: "测评5款网红零食哪款最坑", tags: ["测评", "零食"], desc: "真实试吃+价格对比，结尾排名，评论区肯定会吵架。", platforms: ["douyin", "bili", "xhs"] },
  { title: "普通人第一次尝试XX妆容穿搭", tags: ["美妆", "穿搭"], desc: "主打真实翻车到及格的全过程，越真实越容易引起共鸣。", platforms: ["xhs", "douyin"] },
  { title: "整理手机里最舍不得删的一张照片", tags: ["情感", "故事"], desc: "一张照片配一个故事，引导观众分享自己的故事。", platforms: ["douyin", "xhs"] },
  { title: "职场黑话翻译大赛", tags: ["职场", "吐槽"], desc: "把老板常说的漂亮话翻译成真实意思，社畜共鸣强。", platforms: ["douyin", "xhs"] },
  { title: "00后整顿职场之今天拒绝了老板", tags: ["职场", "剧情"], desc: "短剧情+内心OS，控制在1分钟内，节奏要快。", platforms: ["douyin", "xhs"] },
  { title: "用10块钱改造一个房间角落", tags: ["家居", "改造"], desc: "前后对比强烈，过程用延时摄影，结尾列清单。", platforms: ["xhs", "douyin"] },
  { title: "挑战一周只用现金生活", tags: ["挑战", "生活"], desc: "移动支付时代反其道行之，记录尴尬与便利缺失的瞬间。", platforms: ["douyin", "bili"] },
  { title: "翻拍小时候看的广告", tags: ["怀旧", "二创"], desc: "低成本复刻经典广告，BGM一响弹幕评论自动回忆杀。", platforms: ["douyin", "bili"] },
  { title: "随机采访路人你最后悔的一件事", tags: ["街访", "情感"], desc: "剪辑3-5个高浓度回答，封面用最有冲击力的那句话。", platforms: ["douyin", "bili"] },
  { title: "独居女生的下班仪式感", tags: ["Vlog", "治愈"], desc: "做饭、拆快递、追剧小片段组合，配乐温柔，时长1分半。", platforms: ["xhs", "douyin"] },
  { title: "真实成本拍一条视频到底花多少钱", tags: ["揭秘", "自媒体"], desc: "列出时间、设备、场地、后期成本，适合涨粉后做信任内容。", platforms: ["bili", "xhs"] },
  { title: "把古诗改成说唱能有多燃", tags: ["文化", "音乐"], desc: "知识类内容年轻化，可蹭国学考试节点。", platforms: ["douyin", "bili"] },
  { title: "我妈以为我在外面吃的vs我实际吃的", tags: ["搞笑", "对比"], desc: "左右分屏对比，反差感强，容易引发分享。", platforms: ["douyin", "xhs"] },
];

const trendingPool = [
  { title: "city不city", heat: "982万", angle: "城市/乡村/通勤场景反讽：越是离谱的场景越适合套用这句梗。" },
  { title: "古希腊掌管XX的神", heat: "856万", angle: "把身边某个特长或翻车的朋友封为神，做颁奖或吐槽。" },
  { title: "人生易如反掌", heat: "743万", angle: "前半段假装轻松，后半段打脸反转，适合挑战/教程类。" },
  { title: "那咋了", heat: "691万", angle: "职场/情感/家庭场景的回怼神句，做剧情或口播。" },
  { title: "水灵灵地XXX", heat: "612万", angle: "把可爱形容词放在反差行为上，萌加猛组合。" },
  { title: "硬控15秒", heat: "580万", angle: "前3秒强吸睛加结尾解释为什么你被硬控。" },
  { title: "一旦接受了XX这个设定", heat: "534万", angle: "推荐产品或吐槽造型或分享冷知识时制造代入感。" },
  { title: "包的", heat: "498万", angle: "答应式开场，用于Flag、承诺、毒奶类内容。" },
  { title: "松弛感", heat: "467万", angle: "展示一种反内卷的生活态度，容易获得点赞共鸣。" },
  { title: "爹味说教", heat: "423万", angle: "模仿加反讽，适合吐槽职场、家庭、网络键盘侠。" },
];

let state = loadState();

function loadState() {
  const raw = localStorage.getItem(STORE_KEY);
  const today = getToday();
  if (raw) {
    const saved = JSON.parse(raw);
    if (saved.date === today) {
      if (!saved.checkItems) saved.checkItems = {};
      if (!saved.analyzeHistory) saved.analyzeHistory = [];
      return saved;
    }
  }
  return {
    date: today,
    plan: defaultPlan(),
    inspirations: pickInspirations(10),
    inspirationUsed: [],
    trending: pickTrending(5),
    review: { views: "", likes: "", comments: "", shares: "", highlights: "", problems: "", optimizations: "" },
    memo: "",
    checkItems: {},
    analyzeHistory: [],
  };
}

function defaultPlan() {
  return [
    { id: uid(), text: "查看今日爆款热点", done: false },
    { id: uid(), text: "确定今天拍摄选题", done: false },
    { id: uid(), text: "完成脚本或文案", done: false },
    { id: uid(), text: "拍摄剪辑素材", done: false },
    { id: uid(), text: "发布并填写复盘数据", done: false },
  ];
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  render();
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getToday() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function pickInspirations(n) {
  const shuffled = [...inspirationPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function pickTrending(n) {
  const shuffled = [...trendingPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function toggleModule(name) {
  document.querySelectorAll(".module-bar").forEach((bar) => {
    const module = bar.parentElement.dataset.module;
    const body = document.getElementById(module + "Body");
    const chevron = bar.querySelector(".module-chevron");
    if (module === name) {
      const isHidden = body.classList.toggle("hidden");
      bar.classList.toggle("active", !isHidden);
      chevron.textContent = isHidden ? "?" : "▼";
    } else {
      body.classList.add("hidden");
      bar.classList.remove("active");
      chevron.textContent = "?";
    }
  });
}

const plans = [
  {
    id: "zuodian-sleep",
    name: "左点睡眠仪",
    category: "美容仪器",
    time: "2026-07-26",
    summary: "失眠痛点+体检肝指标偏高+CES疗法+单人拍摄",
    shots: [
      "前3秒产品前置怼镜头",
      "凌晨2:47失眠翻身",
      "早醒看手机叹气",
      "体检报告箭头向上",
      "褪黑素+枕头快切",
      "手指太阳穴字幕",
      "夹耳夹特写",
      "闭眼使用感受",
      "产品完整空镜(无文案)",
      "躺床画面渐暗",
      "早上醒来伸懒腰",
      "举产品促单",
    ],
    script: [
      { shot: "前3秒·产品前置", text: "就是这个，夹耳朵上20分钟，我失眠大半年第一次睡了个整觉。", film: "手举主机怼镜头，另一只手夹耳夹演示", shoot: "云台正面中景，补光正前方" },
      { shot: "痛点1", text: "你们不知道我之前多惨，困得眼睛睁不开，一躺下脑子突然精神，翻到两三点才迷迷糊糊睡着。", film: "凌晨手机显示2:47，睁眼躺床上翻身", shoot: "云台架床尾俯拍，暗光，手机亮屏" },
      { shot: "痛点2", text: "最烦的是睡着了吧，睡俩仨小时突然就醒，一看手机才四点，干躺到天亮再也睡不着。", film: "突然睁眼看手机，叹气盯天花板", shoot: "云台侧面中景，暗光，动作放慢" },
      { shot: "放大焦虑", text: "折腾了大半年，脸都黄了，体检直接查出肝功能俩指标偏高，医生说就是长期睡不好熬的，我当时真慌了。", film: "体检报告特写(模糊数值)，手指指箭头向上", shoot: "云台正面近景，手持报告，表情严肃" },
      { shot: "排除其他方案", text: "褪黑素吃了没用，枕头床垫全换了还是没用，我快崩溃了。", film: "快闪褪黑素瓶、枕头2个空镜，1秒1个", shoot: "云台固定拍桌面，2个快切" },
      { shot: "认知反转", text: "后来才知道，睡不着不是床的问题，是脑子里的神经刹不住车，身体累了脑子还在转。", film: "手指太阳穴，画面加字幕神经刹不住", shoot: "云台正面近景，补光正前方" },
      { shot: "产品介绍", text: "这个左点睡眠仪，正经医疗器械，不是网红智商税，夹耳垂上，微电流传到脑子里，帮神经从兴奋慢慢松下来。", film: "夹耳夹特写，打湿垫圈→夹耳垂", shoot: "云台近景固定拍耳朵侧脸" },
      { shot: "使用感受", text: "第一次用我怕被电，结果完全不会，就是耳朵那块酥酥麻麻的，挺舒服，像脑子在被人轻轻揉。", film: "闭眼夹耳夹，表情从紧张到放松", shoot: "云台正面近景，补光柔光" },
      { shot: "产品空镜(无文案)", text: "（无文案·产品完整空镜）", film: "主机+耳夹线+生理盐水+便携包摆床上，云台缓推或环绕", shoot: "云台近景缓推或环绕，补光正前方，干净背景，5-8秒" },
      { shot: "效果", text: "躺床上闭眼啥也不干，20分钟脑子里那些乱七八糟的事就慢慢没了，不知不觉就睡过去了。", film: "躺床上闭眼，画面从亮渐暗到全黑", shoot: "云台床尾俯拍，调暗补光灯" },
      { shot: "效果验证", text: "现在睡前夹20分钟，一觉到天亮，复查指标也降下来了，整个人精神多了。", film: "早上醒来伸懒腰，阳光照进来", shoot: "云台正面中景，补光亮" },
      { shot: "促单收尾", text: "姐妹们，失眠真别硬扛，伤的不光是觉，是整个身体，试试这个，比干熬着强多了。", film: "手拿主机+便携包对着镜头", shoot: "云台正面中景，举产品，真诚语气" },
    ],
  },
];

function render() {
  renderPlan();
  renderInspirations();
  renderTrending();
  renderReview();
  renderMemo();
  renderProduct();
  renderAnalyzeHistory();
  renderPlans();
}

function renderPlan() {
  const list = document.getElementById("planList");
  const badge = document.getElementById("planBadge");
  const done = state.plan.filter((t) => t.done).length;
  badge.textContent = done + "/" + state.plan.length;

  if (state.plan.length === 0) {
    list.innerHTML = '<li class="empty-tip">暂无任务，上方输入添加</li>';
    return;
  }

  list.innerHTML = state.plan
    .map(
      (t) =>
        '<li class="task-item ' + (t.done ? "done" : "") + '">' +
        '<input type="checkbox" ' + (t.done ? "checked" : "") + ' onchange="toggleTask(\'' + t.id + '\')" />' +
        '<span class="task-text">' + escapeHtml(t.text) + "</span>" +
        '<button class="btn-delete" onclick="deleteTask(\'' + t.id + '\')">×</button>' +
        "</li>"
    )
    .join("");
}

function addTask() {
  const input = document.getElementById("newTaskInput");
  const text = input.value.trim();
  if (!text) return;
  state.plan.push({ id: uid(), text, done: false });
  input.value = "";
  saveState();
}

function toggleTask(id) {
  const task = state.plan.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
    saveState();
  }
}

function deleteTask(id) {
  state.plan = state.plan.filter((t) => t.id !== id);
  saveState();
}

function renderInspirations() {
  const container = document.getElementById("inspirationList");
  container.innerHTML = state.inspirations
    .map((idea, idx) => {
      const used = state.inspirationUsed.includes(idx);
      const links = idea.platforms
        .map((p) => {
          var kw = encodeURIComponent(idea.title);
          if (p === "douyin") return '<a href="snssdk1128://search/result?keyword=' + kw + '" target="_blank">抖音</a>';
          if (p === "bili") return '<a class="bili" href="bilibili://search?keyword=' + kw + '" target="_blank">B站</a>';
          if (p === "xhs") return '<a class="xhs" href="xhsdiscover://search/result?keyword=' + kw + '" target="_blank">小红书</a>';
          return "";
        })
        .join("");
      return (
        '<div class="idea-card">' +
        '<div class="idea-title">' + (idx + 1) + ". " + escapeHtml(idea.title) + "</div>" +
        '<div class="idea-tags">' +
        idea.tags.map((tag) => '<span class="tag">' + escapeHtml(tag) + "</span>").join("") +
        idea.platforms.map((p) => '<span class="tag platform">' + platformName(p) + "</span>").join("") +
        "</div>" +
        '<div class="idea-desc">' + escapeHtml(idea.desc) + "</div>" +
        '<div class="idea-actions">' +
        links +
        '<button class="btn-used ' + (used ? "used" : "") + '" onclick="markIdeaUsed(' + idx + ')">' + (used ? "已用" : "标记已用") + "</button>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");
}

function platformName(p) {
  return { douyin: "抖音", bili: "B站", xhs: "小红书" }[p] || p;
}

function markIdeaUsed(idx) {
  if (!state.inspirationUsed.includes(idx)) {
    state.inspirationUsed.push(idx);
    saveState();
  }
}

function refreshInspirations() {
  state.inspirations = pickInspirations(10);
  state.inspirationUsed = [];
  saveState();
}

function renderTrending() {
  const container = document.getElementById("trendingList");
  container.innerHTML = state.trending
    .map(
      (item, idx) =>
        '<div class="trend-item">' +
        '<div class="trend-header">' +
        '<div class="trend-title">' + (idx + 1) + ". " + escapeHtml(item.title) + "</div>" +
        '<div class="trend-heat">? ' + escapeHtml(item.heat) + "</div>" +
        "</div>" +
        '<div class="trend-angle"><strong>改编角度：</strong>' + escapeHtml(item.angle) + "</div>" +
        "</div>"
    )
    .join("");
}

function refreshTrending() {
  state.trending = pickTrending(5);
  saveState();
}

function renderReview() {
  document.getElementById("reviewViews").value = state.review.views;
  document.getElementById("reviewLikes").value = state.review.likes;
  document.getElementById("reviewComments").value = state.review.comments;
  document.getElementById("reviewShares").value = state.review.shares;
  document.getElementById("reviewHighlights").value = state.review.highlights;
  document.getElementById("reviewProblems").value = state.review.problems;
  document.getElementById("reviewOptimizations").value = state.review.optimizations;
}

function saveReview() {
  state.review = {
    views: document.getElementById("reviewViews").value,
    likes: document.getElementById("reviewLikes").value,
    comments: document.getElementById("reviewComments").value,
    shares: document.getElementById("reviewShares").value,
    highlights: document.getElementById("reviewHighlights").value,
    problems: document.getElementById("reviewProblems").value,
    optimizations: document.getElementById("reviewOptimizations").value,
  };
  saveState();
  alert("复盘已保存");
}

function renderMemo() {
  document.getElementById("memoText").value = state.memo;
}

function saveMemo() {
  state.memo = document.getElementById("memoText").value;
  saveState();
  alert("备忘录已保存");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* ========== 选品参考模块 ========== */

function renderProduct() {
  renderTools();
  renderForecast("beauty");
  renderChecklist();
}

function switchProductTab(tab) {
  document.querySelectorAll(".product-tab").forEach((t) => t.classList.remove("active"));
  event.target.classList.add("active");
  document.getElementById("productToolsPanel").classList.add("hidden");
  document.getElementById("productForecastPanel").classList.add("hidden");
  document.getElementById("productChecklistPanel").classList.add("hidden");
  if (tab === "tools") document.getElementById("productToolsPanel").classList.remove("hidden");
  if (tab === "forecast") document.getElementById("productForecastPanel").classList.remove("hidden");
  if (tab === "checklist") document.getElementById("productChecklistPanel").classList.remove("hidden");
}

function renderTools() {
  const list = document.getElementById("toolList");
  list.innerHTML = selectTools
    .map(
      (tool) =>
        '<a class="tool-card" href="' + tool.url + '" target="_blank">' +
        '<div class="tool-name">' + escapeHtml(tool.name) + ' <span class="tool-arrow">?</span></div>' +
        '<div class="tool-desc">' + escapeHtml(tool.desc) + "</div>" +
        "</a>"
    )
    .join("");
}

let currentForecast = "beauty";

function switchForecastTab(tab) {
  currentForecast = tab;
  document.querySelectorAll(".forecast-tab").forEach((t) => t.classList.remove("active"));
  event.target.classList.add("active");
  renderForecast(tab);
}

function renderForecast(tab) {
  const list = document.getElementById("forecastList");
  const data = tab === "beauty" ? forecastBeauty : forecastDigital;
  list.innerHTML = data
    .map(
      (item) =>
        '<div class="forecast-card">' +
        '<div class="forecast-name">' + escapeHtml(item.name) + "</div>" +
        '<div class="forecast-meta">' +
        '<span class="tag">?' + escapeHtml(item.price) + "</span>" +
        '<span class="tag trend">' + escapeHtml(item.trend) + "</span>" +
        "</div>" +
        '<div class="forecast-logic">' + escapeHtml(item.logic) + "</div>" +
        "</div>"
    )
    .join("");
}

function renderChecklist() {
  const list = document.getElementById("checklist");
  list.innerHTML = productChecklist
    .map((item, idx) => {
      const checked = state.checkItems[idx];
      return (
        '<label class="check-item ' + (checked ? "checked" : "") + '">' +
        '<input type="checkbox" ' + (checked ? "checked" : "") + ' onchange="toggleCheck(' + idx + ')" />' +
        "<span>" + escapeHtml(item) + "</span>" +
        "</label>"
      );
    })
    .join("");
}

function toggleCheck(idx) {
  state.checkItems[idx] = !state.checkItems[idx];
  saveState();
}

/* ========== 商品带货分析模块 ========== */

function analyzeProduct() {
  const input = document.getElementById("analyzeInput").value.trim();
  if (!input) {
    alert("请输入商品名称或链接");
    return;
  }

  const product = extractProductInfo(input);
  const plan = generatePlan(product);

  state.analyzeHistory.unshift({
    id: uid(),
    product: product.name,
    input: input,
    plan: plan,
    time: new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }),
  });
  if (state.analyzeHistory.length > 10) state.analyzeHistory.pop();

  document.getElementById("analyzeInput").value = "";
  saveState();

  showAnalyzeResult(state.analyzeHistory[0]);
}

function extractProductInfo(input) {
  let name = input;

  // 处理抖音分享文本：7.17 03/24 XZm:/ P@K.JI 【抖音商城】https://xxx 星目之源水润护眼喷雾...
  // 提取最后一个链接后面的商品名
  var urlMatch = input.match(/https?:\/\/[^\s]+/);
  if (urlMatch) {
    var urlEnd = input.lastIndexOf(urlMatch[0]) + urlMatch[0].length;
    var afterUrl = input.substring(urlEnd).trim();
    // 去掉前面的【抖音商城】等前缀
    afterUrl = afterUrl.replace(/^[【\[][^】\]]+[】\]]\s*/, "").trim();
    if (afterUrl.length > 0) {
      name = afterUrl;
    } else {
      // 链接后面没有文字，尝试从链接前的文字提取
      var beforeUrl = input.substring(0, input.indexOf(urlMatch[0])).trim();
      // 去掉 7.17 03/24 XZm:/ P@K.JI 这类乱码
      beforeUrl = beforeUrl.replace(/^[\d\.\s/:]+\S{2,8}\s+/g, "").trim();
      beforeUrl = beforeUrl.replace(/^[【\[][^】\]]+[】\]]\s*/, "").trim();
      if (beforeUrl.length > 0) {
        name = beforeUrl;
      } else {
        name = "商品";
      }
    }
  } else if (input.length > 30) {
    name = input.slice(0, 30);
  }

  // 截断过长的商品名，保留核心信息
  if (name.length > 20) {
    name = name.slice(0, 20);
  }

  return { name: name, raw: input };
}

function generatePlan(product) {
  const name = product.name.toLowerCase();
  let category = "通用";

  if (/吹风|风扇|电吹风/.test(name)) category = "吹风机";
  else if (/精华|面霜|乳液|护肤|抗老|补水|保湿/.test(name)) category = "护肤";
  else if (/口红|唇釉|唇泥|腮红|眼影|粉底|遮瑕/.test(name)) category = "彩妆";
  else if (/卸妆|洁面|洗面|清洁/.test(name)) category = "清洁";
  else if (/洗发|护发|发膜|护发素/.test(name)) category = "护发";
  else if (/身体乳|止汗|沐浴|香氛|香水/.test(name)) category = "身体护理";
  else if (/榨汁|破壁|料理|电饭煲|锅|烤箱/.test(name)) category = "厨房小家电";
  else if (/净化器|加湿器|香薰|氛围灯|台灯/.test(name)) category = "居家环境";
  else if (/护眼|洗眼|眼部喷雾|眼药水|滴眼|眼疲劳|干眼/.test(name)) category = "眼部护理";
  else if (/按摩|颈膜|眼部|美容仪|导入/.test(name)) category = "美容仪器";
  else if (/充电|支架|手机壳|数据线|耳机/.test(name)) category = "3C配件";
  else if (/挂烫|熨斗|洗衣|烘被|暖被/.test(name)) category = "衣物护理";

  return getPlanTemplate(category, product.name);
}

function getPlanTemplate(category, productName) {
  const templates = {
    "吹风机": {
      category: "吹风机",
      highConvertShots: [
        "开箱特写：拆开包装，展示主机+配件全家福（10秒）",
        "风力直观：对着纸巾或头发吹，展示风力大小（5秒）",
        "上头实测：自己吹头发过程，从湿到干延时（15秒）",
        "温度控制：贴近头皮吹不烫的特写（5秒）",
        "收纳展示：放回桌面或卫生间的样子（3秒）",
      ],
      singleShot: [
        "场景：洗漱台或卧室，补光灯放正前方45度，大疆云台架在侧前方",
        "开箱：云台固定，双手拆箱，展示配件",
        "风力测试：云台对准纸巾台，一手持机一手拿纸巾",
        "吹发：云台跟拍模式，自己坐着吹，云台自动追踪脸部",
        "收尾：对着镜头总结使用感受",
      ],
      duoSuggest: "如果有闺蜜或室友，加一个她帮我吹vs我自己吹的对比镜头会更爆，但单人也能完成。",
            script: [
        { shot: "前3秒：手里举着吹风机怼脸", text: "就是它，我吹头发从15分钟变7分钟的功臣，今天必须给你们说清楚。" },
        { shot: "痛点：展示自己毛躁发量多的头发", text: "你们不知道我以前多崩溃，发量多又毛躁，每天吹头发吹到手酸，吹完头皮烫得疼，真的洗头都恐惧。" },
        { shot: "放大焦虑", text: "而且越吹越毛躁，发尾干得像稻草，上班迟到都是因为吹头发，真的很烦。" },
        { shot: "产品解决：风力吹纸巾", text: "这个风力真的猛，七八分钟就干透了，最关键是不烫头皮，贴着吹都舒服。" },
        { shot: "真实感受：吹头发过程", text: "我现在洗头完全不焦虑了，吹完头发还顺，不像以前炸毛。" },
        { shot: "促单收尾", text: "发量多、吹头慢、头皮怕烫的姐妹，真的可以试，我自己买了不后悔。" },
      ],
    },
    "护肤": {
      category: "护肤",
      highConvertShots: [
        "质地特写：挤在手背上展示质地、延展性（5秒）",
        "上脸过程：涂抹手法展示（10秒）",
        "吸收对比：刚涂vs涂完1分钟后的肤感（5秒）",
        "前后对比：使用前干燥vs使用后水润（可用局部特写）（5秒）",
        "气味描述：凑近闻的画面加表情（3秒）",
      ],
      singleShot: [
        "场景：洗漱台，补光灯正前方，云台架在镜面侧前方",
        "质地：云台固定近景，手背展示质地",
        "上脸：云台跟拍，自己涂抹，重点拍手法",
        "吸收：固定近景拍脸部局部",
        "收尾：对着镜头说感受",
      ],
      duoSuggest: "护肤类单人完全够拍，双人反而容易显得广告感重，不建议。",
            script: [
        { shot: "前3秒：手里拿着护肤品怼镜头", text: "干皮姐妹都给我看这个，就是我最近脸上的救命恩人。" },
        { shot: "痛点：展示脸颊干燥起皮", text: "我以前脸干到起皮，上妆卡粉卡到崩溃，洗完脸紧绷得像要裂开。" },
        { shot: "放大焦虑", text: "尤其是换季，脸颊又红又干，摸起来糙得像砂纸，真的不敢照镜子。" },
        { shot: "产品解决：质地特写", text: "这个质地不厚重不黏，推开很舒服，上脸吸收挺快的。" },
        { shot: "真实感受：上脸涂抹", text: "我每天洗完脸就涂这个，用了一段时间脸没那么干了，摸起来软软的。" },
        { shot: "促单收尾", text: "干皮、敏感皮、卡粉的姐妹真的可以试，我自己是真爱了。" },
      ],
    },
    "彩妆": {
      category: "彩妆",
      highConvertShots: [
        "试色特写：手臂或嘴唇试色展示（8秒）",
        "半脸对比：一边涂一边没涂（10秒）",
        "持妆测试：涂完吃东西或喝水后看是否掉（10秒）",
        "上妆手法：怎么涂才好看（5秒）",
        "成品展示：完整妆面对着镜头（3秒）",
      ],
      singleShot: [
        "场景：卧室或洗漱台，补光灯正前方，云台架正面略高位置",
        "试色：云台近景固定，手臂试色",
        "半脸：云台正面中景，自己一边一边涂",
        "持妆：固定拍喝水杯口或吃完饭嘴唇",
        "收尾：对着镜头展示妆面",
      ],
      duoSuggest: "彩妆单人最适合，半脸对比是经典爆款套路，必须用上。",
            script: [
        { shot: "前3秒：嘴唇试色怼镜头", text: "黄皮显白必看，就是这个颜色，我涂上就不想擦了。" },
        { shot: "痛点：展示素唇暗淡", text: "我素唇颜色很淡，看起来没气色像生病，涂错了颜色更显黑。" },
        { shot: "放大焦虑", text: "以前买过好多支都踩雷，涂上老十岁，出门都不敢张嘴说话。" },
        { shot: "产品解决：半脸对比", text: "你们看半脸效果，这边涂了立马精神了，颜色很显白不挑皮。" },
        { shot: "真实感受：喝水测试", text: "我喝口水你们看，基本不掉，持妆挺久的。" },
        { shot: "促单收尾", text: "想要显白又持妆的姐妹闭眼入，我已经回购第二支了。" },
      ],
    },
    "清洁": {
      category: "清洁",
      highConvertShots: [
        "乳化过程：干手涂抹遇水乳化的瞬间（5秒）",
        "卸妆对比：卸前vs卸后肉眼可见（8秒）",
        "冲洗过程：清水冲掉的画面（5秒）",
        "成分特写：展示产品成分表或质地（3秒）",
        "洗后肤感：洗脸后皮肤状态（5秒）",
      ],
      singleShot: [
        "场景：洗漱台，补光灯正前方，云台架侧面",
        "乳化：云台近景固定，手背展示遇水变化",
        "卸妆：云台正面中景，自己卸，重点拍棉片或手上颜色",
        "冲洗：固定拍水流冲脸侧脸",
        "收尾：擦干脸后对着镜头说感受",
      ],
      duoSuggest: "清洁类单人够拍，乳化加卸妆对比是核心画面，必须有。",
            script: [
        { shot: "前3秒：手里拿着卸妆膏怼镜头", text: "卸不干净的都来看，就是这个，我用到第三罐了。" },
        { shot: "痛点：展示带妆的脸", text: "我以前卸妆老是卸不干净，闷出闭口粉刺，下巴摸起来疙疙瘩瘩。" },
        { shot: "放大焦虑", text: "而且卸妆油用不好还闷痘，越卸皮肤越差，真的花钱买罪受。" },
        { shot: "产品解决：乳化特写", text: "这个干手上脸，遇水就乳化，过程挺治愈的，卸得干净不糊脸。" },
        { shot: "真实感受：卸妆过程", text: "你们看这棉片，彩妆全下来了，清水一冲就掉，洗完不紧绷。" },
        { shot: "促单收尾", text: "卸不干净、长闭口、闷痘的姐妹，这个真的够用，我空瓶好几个了。" },
      ],
    },
    "护发": {
      category: "护发",
      highConvertShots: [
        "发质对比：使用前毛躁vs使用后顺滑（8秒）",
        "涂抹过程：从发中涂到发尾的手法（5秒）",
        "冲洗或吹干后效果：头发顺滑度展示（5秒）",
        "香味描述：凑近头发闻的画面（3秒）",
        "用量展示：一次用多少（3秒）",
      ],
      singleShot: [
        "场景：洗漱台或浴室，补光灯侧前方，云台架背面位置",
        "涂抹：云台跟拍，自己涂发尾",
        "吹干后：云台正面，拨动头发展示顺滑",
        "香味：凑近头发闻，表情自然",
        "收尾：对着镜头说感受",
      ],
      duoSuggest: "护发单人够拍，沙发姐妹前后对比是核心卖点。",
            script: [
        { shot: "前3秒：手里拿着护发精油怼镜头", text: "沙发姐妹都给我看，这个真的救了我的头发。" },
        { shot: "痛点：展示毛躁发尾", text: "我以前发尾毛躁得像稻草，梳子卡在头发里扯得疼，出门只能扎起来。" },
        { shot: "放大焦虑", text: "而且越烫越毛躁，发尾干枯分叉，剪了又分叉，真的没救了那种感觉。" },
        { shot: "产品解决：涂抹过程", text: "洗完头半干的时候涂这个，从发中涂到发尾，吸收挺快的。" },
        { shot: "真实感受：吹干后展示", text: "吹干之后你们看，顺滑多了，不打结，摸起来滑滑的。" },
        { shot: "促单收尾", text: "沙发、毛躁、分叉的姐妹真的可以试，我用了一段时间明显改善。" },
      ],
    },
    "身体护理": {
      category: "身体护理",
      highConvertShots: [
        "质地展示：抹在手背的延展性（5秒）",
        "涂抹过程：涂手臂或腿部的画面（8秒）",
        "吸收速度：涂完几秒后的肤感（5秒）",
        "香味描述：闻手腕的画面加表情（3秒）",
        "皮肤状态：用一段时间后的皮肤光泽（5秒）",
      ],
      singleShot: [
        "场景：卧室或洗漱台，补光灯侧前方，云台架正面",
        "质地：云台近景固定，手背展示",
        "涂抹：云台中景，涂手臂或小腿",
        "吸收：近景拍皮肤",
        "收尾：闻手腕加对着镜头说感受",
      ],
      duoSuggest: "身体护理单人完全够拍，香味加肤感是转化关键。",
            script: [
        { shot: "前3秒：手里拿着身体乳怼镜头", text: "身上干痒起皮的姐妹看过来，这个我每天洗完澡必涂。" },
        { shot: "痛点：展示小腿干燥起皮", text: "我以前小腿干到起白皮，一脱裤子掉皮屑，痒起来挠到红，真的尴尬。" },
        { shot: "放大焦虑", text: "夏天穿短裙腿上干得像蛇皮，别人看见了特别不好意思，越挠越干越痒。" },
        { shot: "产品解决：质地特写", text: "这个质地不油腻，好推开，涂上挺舒服的，吸收也快。" },
        { shot: "真实感受：涂抹过程", text: "我一般涂手臂和小腿，用了一段时间不起皮了，摸起来滑滑的。" },
        { shot: "促单收尾", text: "身上干、起皮、痒的姐妹可以试，味道还特别好闻，我已经回购了。" },
      ],
    },
    "厨房小家电": {
      category: "厨房小家电",
      highConvertShots: [
        "开箱展示：主机加配件全家福（8秒）",
        "使用过程：从放食材到出成品的完整流程（15秒）",
        "成品特写：做出来的东西的诱人画面（5秒）",
        "清洗展示：用完好不好洗（5秒）",
        "收纳：放回桌面或柜子的样子（3秒）",
      ],
      singleShot: [
        "场景：厨房台面或客厅桌子，补光灯侧前方，云台架侧面高位",
        "开箱：云台固定中景，双手展示配件",
        "使用：云台跟拍，自己操作，重点拍放入食材和出成品",
        "成品：近景特写",
        "清洗：固定拍水龙头下冲洗",
        "收尾：对着镜头说感受",
      ],
      duoSuggest: "厨房小家电单人够拍，做出来的成品画面是核心转化点。",
            script: [
        { shot: "前3秒：手里举着榨汁杯怼镜头", text: "独居不想做饭的都看这个，我现在天天用。" },
        { shot: "痛点：展示外卖盒或泡面", text: "我一个人住老点外卖，又贵又不健康，吃多了胃不舒服，想做又嫌麻烦。" },
        { shot: "放大焦虑", text: "而且外卖吃多了胖了好多，一个人做饭份量难掌握，食材买多了放坏，真的纠结。" },
        { shot: "产品解决：开箱", text: "这个操作超简单，放水果进去按一下就好，我这种手残也能用。" },
        { shot: "真实感受：使用过程", text: "你们看做出来的，卖相还不错吧，洗起来也方便，水一冲就干净。" },
        { shot: "促单收尾", text: "独居、懒做饭、想健康的姐妹，这个真的省事又省钱。" },
      ],
    },
    "居家环境": {
      category: "居家环境",
      highConvertShots: [
        "氛围对比：开灯前vs开灯后房间氛围（8秒）",
        "使用场景：放在不同位置的画面（5秒）",
        "细节特写：产品设计或材质（5秒）",
        "功能展示：如果是净化器或加湿器，展示出雾或净化效果（5秒）",
        "独居氛围感：搭配其他物件的整体画面（5秒）",
      ],
      singleShot: [
        "场景：卧室或客厅，补光灯关掉用产品自带光，云台架中景位置",
        "氛围对比：云台固定，开关灯前后对比",
        "摆放：移动产品到不同位置展示",
        "细节：近景拍材质或出雾口",
        "收尾：坐在床上或沙发上对着镜头说感受",
      ],
      duoSuggest: "氛围类产品单人最合适，独居氛围感是天然卖点。",
            script: [
        { shot: "前3秒：手里拿着氛围灯怼镜头", text: "独居姐妹看过来，这个真的让我房间幸福感翻倍。" },
        { shot: "痛点：展示冷清的房间", text: "我以前下班回房间，白炽灯一开，冷冰冰的，一个人住越住越丧。" },
        { shot: "放大焦虑", text: "尤其晚上一个人待着，房间又亮又冷，心情莫名低落，真的有点抑郁那种。" },
        { shot: "产品解决：开灯前后对比", text: "你们看，一开整个氛围就不一样了，暖光一打，立马治愈了。" },
        { shot: "真实感受：细节特写", text: "质感也不错，不廉价，放床头放桌面都好看。" },
        { shot: "促单收尾", text: "想让房间有点氛围感、独居有点幸福感的姐妹，这个真的加分。" },
      ],
    },
    "眼部护理": {
      category: "眼部护理",
      highConvertShots: [
        "喷雾特写：对着眼睛喷的瞬间，水雾细腻度展示（5秒）",
        "使用前对比：眼睛红血丝、干涩无神的样子（5秒）",
        "使用过程：闭眼喷雾的完整画面，表情舒服（8秒）",
        "睁眼后特写：眼睛水润明亮、红血丝减少（5秒）",
        "冰感体验：喷完眼睛冰凉醒神的表情（3秒）",
        "便携展示：放包里、办公室、床头随时用的画面（3秒）",
      ],
      singleShot: [
        "场景：洗漱台或卧室，补光灯正前方45度，云台架正面略高位置",
        "前：云台近景拍眼睛干涩红血丝",
        "喷雾：闭眼，一手拿喷雾对着眼睛喷，云台固定近景",
        "感受：睁眼后表情变化，对着镜头描述冰凉感",
        "后：近景拍眼睛水润状态",
        "收尾：对着镜头说使用感受",
      ],
      duoSuggest: "眼部护理单人完全够拍，喷雾瞬间和睁眼对比是核心画面，必须有。",
      script: [
        { shot: "前3秒：闭眼对着眼睛喷喷雾", text: "天天盯手机眼睛干到痒的姐妹都给我看，就是这个，我眼睛的救命水。" },
        { shot: "痛点：展示眼睛红血丝干涩", text: "我以前眼睛干到痒，老揉，揉完红血丝更严重，看东西都模糊，真的难受。" },
        { shot: "放大焦虑", text: "而且越揉越干越红，同事问我是不是哭过，滴眼药水又辣眼睛，真的不知道怎么办。" },
        { shot: "产品解决：喷雾特写", text: "这个喷上去冰冰凉凉的，不辣眼睛，水雾很细，喷完眼睛一下子就润了。" },
        { shot: "真实感受：睁眼后展示", text: "你们看，红血丝淡了很多，眼睛看起来有神了，看东西也不模糊了。" },
        { shot: "促单收尾", text: "天天看手机、眼睛干痒红、不想滴眼药水的姐妹，真的可以试，我包里随时备着。" },
      ],
    },
    "美容仪器": {
      category: "美容仪器",
      highConvertShots: [
        "开箱展示：主机加配件加收纳（8秒）",
        "使用过程：在自己脸上用的画面（15秒）",
        "使用感描述：微电流或温感或震动的真实感受（5秒）",
        "配套凝胶或精华展示（3秒）",
        "长期使用肤感：用一段时间后的状态（5秒）",
      ],
      singleShot: [
        "场景：卧室或洗漱台，补光灯正前方，云台架正面略高",
        "开箱：云台固定中景",
        "使用：云台跟拍，自己在脸上滑动仪器",
        "感受：停顿对着镜头描述感觉",
        "收尾：展示皮肤状态",
      ],
      duoSuggest: "美容仪单人够拍，重点拍使用感和长期效果。",
            script: [
        { shot: "前3秒：手里拿着美容仪怼镜头", text: "脸上松弛有纹的姐妹看这个，我坚持用了一个月了。" },
        { shot: "痛点：展示脸部细纹或松弛", text: "我以前法令纹越来越深，脸开始松，拍照都要找角度，真的显老。" },
        { shot: "放大焦虑", text: "而且过了25岁胶原蛋白流失特别快，不做点什么只会越来越松，真的慌。" },
        { shot: "产品解决：开箱", text: "这个每天晚上护肤后用，有微微的电流感，不疼，挺舒服的。" },
        { shot: "真实感受：使用过程", text: "用完感觉脸紧致了一点点，气色也好了些，不知道是不是心理作用。" },
        { shot: "促单收尾", text: "想入门美容仪、怕松怕老的姐妹可以试，但要坚持才有效果。" },
      ],
    },
    "3C配件": {
      category: "3C配件",
      highConvertShots: [
        "开箱展示：产品加配件（5秒）",
        "使用场景：搭配手机或电脑的实际画面（8秒）",
        "细节特写：材质或做工或接口（5秒）",
        "对比展示：如果有旧款可对比（5秒）",
        "收纳便携：放包里或桌面的样子（3秒）",
      ],
      singleShot: [
        "场景：客厅桌面或卧室，补光灯侧前方，云台架俯拍或侧拍",
        "开箱：云台固定中景",
        "使用：拍搭配设备使用的画面",
        "细节：近景特写材质",
        "收尾：对着镜头说感受",
      ],
      duoSuggest: "3C配件单人够拍，真实使用场景是转化关键。",
            script: [
        { shot: "前3秒：手里拿着配件怼镜头", text: "手机桌面乱、充电麻烦的都看这个，我用了几天真香了。" },
        { shot: "痛点：展示乱糟糟的桌面或缠绕的数据线", text: "我以前桌面数据线缠成一团，找半天找不到，充电还要趴地下够插座。" },
        { shot: "放大焦虑", text: "而且线老坏老换，充得慢还发烫，手机电量红的时候真的焦虑。" },
        { shot: "产品解决：开箱", text: "这个做工还不错，不廉价，拿手里有分量，用起来挺顺手的。" },
        { shot: "真实感受：使用场景", text: "日常用起来方便多了，不用再折腾，细节做得挺到位。" },
        { shot: "促单收尾", text: "需要这种配件、受够了乱糟糟的姐妹可以入，不踩雷。" },
      ],
    },
    "衣物护理": {
      category: "衣物护理",
      highConvertShots: [
        "前后对比：皱巴巴vs烫平后（8秒）",
        "使用过程：烫衣服的操作画面（10秒）",
        "出蒸汽特写：蒸汽喷出的画面（3秒）",
        "便携展示：折叠或收纳的样子（3秒）",
        "多场景：衬衫或裙子或窗帘不同面料（5秒）",
      ],
      singleShot: [
        "场景：客厅或卧室，挂着衣服或铺在熨衣板上，补光灯侧前方，云台架侧面",
        "前：展示皱衣服",
        "烫：云台跟拍，自己烫，重点拍过程",
        "后：展示烫平后的衣服",
        "收尾：对着镜头说感受",
      ],
      duoSuggest: "衣物护理单人够拍，前后对比是核心画面。",
            script: [
        { shot: "前3秒：手里拿着挂烫机怼镜头", text: "衣服皱得没法穿的都看这个，独居姐妹真的需要。" },
        { shot: "痛点：展示皱巴巴的衣服", text: "我以前衣服从衣柜拿出来全是褶子，穿出门像没换衣服，同事都看我。" },
        { shot: "放大焦虑", text: "而且送去干洗又贵又麻烦，自己熨又怕烫坏，衬衫裙子越积越多穿不了。" },
        { shot: "产品解决：烫的过程", text: "这个挂起来一烫就平，不用熨衣板也行，操作超简单。" },
        { shot: "真实感受：烫平后展示", text: "你们看，是不是像新的一样，几分钟就搞定。" },
        { shot: "促单收尾", text: "衣服多、怕皱、懒得送干洗的姐妹，这个真的省事。" },
      ],
    },
    "通用": {
      category: "通用",
      highConvertShots: [
        "开箱特写：拆箱加全家福展示（8秒）",
        "使用过程：自己实际使用的画面（15秒）",
        "细节展示：材质或做工或设计亮点（5秒）",
        "真实感受：用完后的表情和描述（5秒）",
        "场景融入：放在自己家里的样子（3秒）",
      ],
      singleShot: [
        "场景：客厅或卧室，补光灯正前方45度，大疆云台架侧前方",
        "开箱：云台固定中景，双手拆箱",
        "使用：云台跟拍模式，自己操作",
        "细节：近景特写",
        "收尾：对着镜头说真实感受",
      ],
      duoSuggest: "目前单人完全可拍。如果想增加互动感，可以找朋友来当观众提问，但不是必须。",
            script: [
        { shot: "前3秒：手里拿着产品怼镜头", text: productName + "就是这个，我用了一段时间必须跟你们说说。" },
        { shot: "痛点：展示使用前的困扰", text: "我以前一直被这个问题困扰，真的很影响生活，又不知道怎么解决。" },
        { shot: "放大焦虑", text: "而且越拖越烦，钱花了时间也花了，效果还不好，真的很崩溃。" },
        { shot: "产品解决：开箱", text: "这个拿到手质感还不错，不廉价，用起来挺顺手的。" },
        { shot: "真实感受：使用过程", text: "我这种手残也能搞定，用了一段时间确实解决问题了。" },
        { shot: "促单收尾", text: "有同样困扰的姐妹可以试试，我自己买了不后悔。" },
      ],
    },
  };

  return templates[category] || templates["通用"];
}

function renderAnalyzeHistory() {
  const list = document.getElementById("analyzeHistoryList");
  if (state.analyzeHistory.length === 0) {
    list.innerHTML = '<div class="empty-tip">还没有分析过的商品</div>';
    return;
  }
  list.innerHTML = state.analyzeHistory
    .map(
      (item) =>
        '<div class="history-item" onclick="showAnalyzeResultById(\'' + item.id + '\')">' +
        '<div class="history-product">' + escapeHtml(item.product) + "</div>" +
        '<div class="history-time">' + escapeHtml(item.time) + " · " + escapeHtml(item.plan.category) + "</div>" +
        "</div>"
    )
    .join("");
}

function showAnalyzeResultById(id) {
  const item = state.analyzeHistory.find((h) => h.id === id);
  if (item) showAnalyzeResult(item);
}

function showAnalyzeResult(item) {
  if (!item) return;
  const plan = item.plan;

  let html =
    '<div class="result-modal" onclick="if(event.target===this)closeResult()">' +
    '<div class="result-content">' +
    '<div class="result-header">' +
    '<div class="result-title">' + escapeHtml(item.product) + "</div>" +
    '<button class="result-close" onclick="closeResult()">×</button>' +
    "</div>" +
    '<div class="result-section">' +
    '<div class="result-section-title">? 高转化画面清单</div>' +
    plan.highConvertShots.map((s) => '<div class="result-shot">? ' + escapeHtml(s) + "</div>").join("") +
    "</div>" +
    '<div class="result-section">' +
    '<div class="result-section-title">? 单人拍摄思路</div>' +
    plan.singleShot.map((s) => '<div class="result-shot">? ' + escapeHtml(s) + "</div>").join("") +
    '<div class="result-duo">? ' + escapeHtml(plan.duoSuggest) + "</div>" +
    "</div>" +
    '<div class="result-section">' +
    '<div class="result-section-title">? 带货文案（带分镜）</div>' +
    plan.script
      .map(
        (s) =>
          '<div class="result-script">' +
          '<div class="script-shot">画面：' + escapeHtml(s.shot) + "</div>" +
          '<div class="script-text">' + escapeHtml(s.text) + "</div>" +
          "</div>"
      )
      .join("") +
    "</div>" +
    '<div class="result-section">' +
    '<div class="result-section-title">📹 参考爆款视频</div>' +
    '<div class="result-shot" style="margin-bottom:8px;">前4个按钮跳转App搜索带货视频，蝉妈妈查商品销量榜和出单视频排行</div>' +
    '<div class="result-video-links">' +
    '<a href="snssdk1128://search/result?keyword=' + encodeURIComponent(item.product) + '" target="_blank">抖音商品搜索</a>' +
    '<a href="snssdk1128://search/result?keyword=' + encodeURIComponent(item.product + " 开箱") + '" target="_blank">抖音开箱</a>' +
    '<a href="snssdk1128://search/result?keyword=' + encodeURIComponent(item.product + " 真实体验") + '" target="_blank">抖音真实体验</a>' +
    '<a class="xhs" href="xhsdiscover://search/result?keyword=' + encodeURIComponent(item.product) + '" target="_blank">小红书</a>' +
    '<a class="bili" href="bilibili://search?keyword=' + encodeURIComponent(item.product + " 开箱") + '" target="_blank">B站</a>' +
    '<a class="chanmama" href="https://www.chanmama.com/" target="_blank">蝉妈妈查销量</a>' +
    "</div>" +
    "</div>" +
    '<div class="result-actions">' +
    '<button class="btn-save" onclick="addShootTask(\'' + item.id + '\')">加入拍摄任务</button>' +
    '<button class="btn-refresh" onclick="copyScript(\'' + item.id + '\')">复制文案</button>' +
    "</div>" +
    "</div>" +
    "</div>";

  const old = document.querySelector(".result-modal");
  if (old) old.remove();

  document.body.insertAdjacentHTML("beforeend", html);
}

function closeResult() {
  const modal = document.querySelector(".result-modal");
  if (modal) modal.remove();
}

function addShootTask(id) {
  const item = state.analyzeHistory.find((h) => h.id === id);
  if (!item) return;
  state.plan.push({
    id: uid(),
    text: "拍摄：" + item.product,
    done: false,
  });
  saveState();
  closeResult();
  toggleModule("plan");
  alert("已加入拍摄任务");
}

function copyScript(id) {
  const item = state.analyzeHistory.find((h) => h.id === id);
  if (!item) return;
  const text = item.plan.script.map((s) => "【" + s.shot + "】\n" + s.text).join("\n\n");
  navigator.clipboard
    .writeText(text)
    .then(() => alert("文案已复制"))
    .catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("文案已复制");
    });
}


function renderPlans() {
  var list = document.getElementById("plansList");
  if (!list) return;
  if (plans.length === 0) {
    list.innerHTML = '<div class="empty-tip">还没有方案，发商品给我帮你写</div>';
    return;
  }
  list.innerHTML = plans.map(function(p) {
    return '<div class="plan-card" onclick="showPlan(\'' + p.id + '\')">' +
      '<div class="plan-name">' + p.name + '</div>' +
      '<div class="plan-summary">' + p.summary + '</div>' +
      '<div class="plan-meta">' + p.time + ' · ' + p.shots.length + '个分镜</div>' +
      '</div>';
  }).join("");
}

function showPlan(id) {
  var plan = plans.find(function(p) { return p.id === id; });
  if (!plan) return;

  var shotsHtml = plan.script.map(function(s, i) {
    return '<div class="plan-shot">' +
      '<div class="shot-num">第' + (i+1) + '句</div>' +
      '<div class="shot-text">' + s.text + '</div>' +
      '<div class="shot-detail"><strong>画面：</strong>' + s.film + '</div>' +
      '<div class="shot-detail"><strong>拍法：</strong>' + s.shoot + '</div>' +
      '</div>';
  }).join("");

  var html =
    '<div class="result-modal" onclick="if(event.target===this)closeResult()">' +
    '<div class="result-content">' +
    '<div class="result-header">' +
    '<div class="result-title">' + plan.name + '</div>' +
    '<button class="result-close" onclick="closeResult()">×</button>' +
    '</div>' +
    '<div class="result-section">' +
    '<div class="result-section-title">🎯 高转化画面清单</div>' +
    plan.shots.map(function(s) { return '<div class="result-shot">• ' + s + '</div>'; }).join("") +
    '</div>' +
    '<div class="result-section">' +
    '<div class="result-section-title">📝 带货文案（带分镜）</div>' +
    shotsHtml +
    '</div>' +
    '<div class="result-actions">' +
    '<button class="btn-save" onclick="copyPlanScript(\'' + plan.id + '\')">复制文案</button>' +
    '<button class="btn-refresh" onclick="addPlanTask(\'' + plan.id + '\')">加入拍摄任务</button>' +
    '</div>' +
    '</div>' +
    '</div>';

  var old = document.querySelector(".result-modal");
  if (old) old.remove();
  document.body.insertAdjacentHTML("beforeend", html);
}

function copyPlanScript(id) {
  var plan = plans.find(function(p) { return p.id === id; });
  if (!plan) return;
  var text = plan.script.map(function(s) { return s.text; }).join("\n\n");
  navigator.clipboard.writeText(text).then(function() {
    alert("文案已复制");
  }).catch(function() {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("文案已复制");
  });
}

function addPlanTask(id) {
  var plan = plans.find(function(p) { return p.id === id; });
  if (!plan) return;
  state.plan.push({ id: uid(), text: "拍摄：" + plan.name, done: false });
  saveState();
  closeResult();
  toggleModule("plan");
  alert("已加入拍摄任务");
}

// 事件监听
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("todayDate").textContent = getToday();
  render();

  document.getElementById("newTaskInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
});
