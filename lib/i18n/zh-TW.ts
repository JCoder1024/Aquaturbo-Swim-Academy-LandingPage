import type { Dictionary } from "./en";

export const zhTW = {
  meta: {
    title: "Aquaturbo Swim Academy",
    description: "Aquaturbo Swim Academy",
  },
  language: {
    switchTo: "切換為英文",
    zh: "中",
    en: "EN",
  },
  theme: {
    dark: "深色",
    light: "淺色",
    toggle: "切換主題",
  },
  nav: {
    brand: "Aquaturbo",
    routes: [
      { href: "#about", label: "關於我們" },
      { href: "#program", label: "課程" },
      { href: "#team", label: "團隊" },
      { href: "#campus", label: "校區" },
      { href: "#contact", label: "聯絡" },
    ],
    auth: "登錄 / 註冊",
  },
  hero: {
    badge: "全新",
    badgeText: "新季度課程已推出",
    titleBefore: "更",
    titleAccent: "高效的",
    titleAfter: "學會游泳",
    subtitle:
      "從初次親水到競技進階，Aquaturbo 以專業教練、分級課程與安全訓練，陪伴每位學員建立水中自信，游得更穩、更快、更自在。",
    getStarted: "立即參加",
    contact: "聯繫我們",
    imageAlt: "儀表板",
  },
  aboutHero: {
    kicker: "",
    title: "我們的系統化教學",
    tagline: "有效地學，進步得更快",
  },
  sponsors: {
    title: "白金贊助夥伴",
  },
  benefits: {
    eyebrow: "專業培訓",
    title: "從水感建立到自信進階",
    description:
      "依照年齡、能力與目標設計循序課程，讓每位學員在安全、專業的指導下掌握正確泳姿。",
    items: [
      {
        icon: "Blocks",
        title: "安全水感建立",
        description: "從呼吸、漂浮與水中平衡開始，建立安心下水與持續學習的基礎。",
      },
      {
        icon: "LineChart",
        title: "分齡分級教學",
        description: "依年齡與能力安排合適班級，讓每次練習都符合學員的學習節奏。",
      },
      {
        icon: "Wallet",
        title: "專業教練指導",
        description: "透過清楚示範與即時修正，逐步改善泳姿、效率、速度與耐力。",
      },
      {
        icon: "Sparkle",
        title: "清晰成長路徑",
        description: "以階段目標追蹤學習成果，從入門技能穩定銜接到進階訓練。",
      },
    ],
  },
  program: {
    eyebrow: "游泳課程",
    title: "找到適合你的訓練節奏",
    description:
      "四大課程依年齡、能力與目標設計，從興趣啟蒙到專項提升，讓每位學員都能穩定進步。",
    items: [
      {
        icon: "TabletSmartphone",
        title: "兒童興趣班",
        description: "以遊戲與循序練習培養水感、呼吸、漂浮與基礎泳姿，讓孩子安全享受每一次下水。",
      },
      {
        icon: "BadgeCheck",
        title: "競技提升班",
        description: "針對已有基礎的學員強化四式技術、出發轉身、速度與耐力，透過系統訓練突破個人表現。",
      },
      {
        icon: "Goal",
        title: "成人游泳課",
        description: "從克服怕水、改善換氣到修正泳姿，依個人程度與節奏學習，提升體能並自在享受游泳。",
      },
      {
        icon: "PictureInPicture",
        title: "銀髮族水中體適能",
        description: "運用水的浮力進行低衝擊活動，協助提升關節靈活度、平衡感與肌耐力，安全維持身體活力。",
      },
    ],
  },
  services: {
    eyebrow: "教學特色",
    title: "更專業、更專注的學習體驗",
    description:
      "結合系統化課程、專業教練、小班指導與多語教學，讓每位學員都能清楚理解、充分練習並穩定進步。",
    items: [
      {
        title: "系統化的教學體系",
        description:
          "依照學員程度與目標規劃清晰的學習路徑，從基礎水感到泳姿進階循序訓練，穩定累積游泳能力。",
      },
      {
        title: "專業競技背景教練團隊",
        description:
          "教練具備專業訓練與競技經驗，能精準示範、觀察並修正動作，協助學員建立正確且有效率的游泳技術。",
      },
      {
        title: "小班制教學",
        description:
          "控制每班人數，提升實際練習密度與個別指導時間，讓教練能充分掌握每位學員的學習進度。",
      },
      {
        title: "多元語言教學",
        description:
          "多數教練支援英語、普通話及粵語教學，讓學員能以熟悉的語言理解動作要領與安全指示。",
      },
    ],
  },
  testimonials: {
    eyebrow: "評價",
    title: "聽聽 1000 多位客戶怎麼說",
    items: [
      {
        name: "John Doe",
        userName: "產品經理",
        comment:
          "Next.js 搭配 Shadcn 真的很好用。顏色、字體和圖片都能改成符合我們品牌。",
        rating: 5.0,
      },
      {
        name: "Sophia Collins",
        userName: "資安分析師",
        comment:
          "版面乾淨，區塊也好調整。比起從零開始，建置時間少非常多。",
        rating: 4.8,
      },
      {
        name: "Adam Johnson",
        userName: "技術長",
        comment:
          "深色模式、表單和價格方案都已經備好。我們把時間花在內容，而不是骨架。",
        rating: 4.9,
      },
      {
        name: "Ethan Parker",
        userName: "資料科學家",
        comment:
          "元件結構很好懂。當天就能換成自己的文案，推出第一版。",
        rating: 5.0,
      },
      {
        name: "Ava Mitchell",
        userName: "IT 專案經理",
        comment:
          "利害關係人一看就懂。我們直接拿它當正式產品網站的工作原型。",
        rating: 5.0,
      },
      {
        name: "Isabella Reed",
        userName: "DevOps 工程師",
        comment:
          "部署順暢，後續也好維護。很適合當行銷網站的起點。",
        rating: 4.9,
      },
    ],
  },
  team: {
    eyebrow: "團隊",
    title: "專業教練團隊，陪伴每一次進步",
    description:
      "Aquaturbo 由具備專業訓練與競技經驗的教練共同授課。我們重視安全、正確技術與個別學習節奏，透過清楚示範、細緻觀察與即時調整，陪伴每位學員建立水中自信並持續進步。",
  },
  campus: {
    eyebrow: "我們的校區",
    title: "在專業泳池裡，安心開始每一次練習",
    items: [
      {
        image: "/campus1.png",
        imageAlt: "Aquaturbo Richmond 校區泳池",
        title: "Richmond 校區",
        description:
          "校區位於 Richmond，提供明亮、整潔且適合分級訓練的室內泳池環境。",
      },
      {
        image: "/hero-image.webp",
        imageAlt: "教練在泳池旁指導學員",
        title: "清楚、專注的教學空間",
        description:
          "從親水練習到技術修正，教練在每一次訓練中提供清楚示範與即時指導。",
      },
    ],
  },
  community: {
    titleBefore: "準備好加入這個",
    titleAccent: "社群了嗎？",
    description:
      "加入我們的 Discord。認識同樣在這個技術棧上打造產品的人，一起交流與成長。",
    join: "加入 Discord",
  },
  pricing: {
    eyebrow: "價格",
    title: "取得完整使用權限",
    description: "依照團隊規模與支援需求選擇方案。",
    perMonth: "/月",
    plans: [
      {
        title: "免費",
        popular: false,
        price: 0,
        description: "先試用核心功能，確認這套模板適不適合你的上線計畫。",
        buttonText: "開始免費試用",
        benefitList: [
          "1 位團隊成員",
          "1 GB 儲存空間",
          "最多 2 個頁面",
          "社群支援",
          "AI 協助",
        ],
      },
      {
        title: "進階",
        popular: true,
        price: 45,
        description: "更多頁面、更多席次，需要協助時回覆更快。",
        buttonText: "立即開始",
        benefitList: [
          "4 位團隊成員",
          "8 GB 儲存空間",
          "最多 6 個頁面",
          "優先支援",
          "AI 協助",
        ],
      },
      {
        title: "企業",
        popular: false,
        price: 120,
        description: "給需要一起上線的大型團隊，容量與支援都更完整。",
        buttonText: "聯絡我們",
        benefitList: [
          "10 位團隊成員",
          "20 GB 儲存空間",
          "最多 10 個頁面",
          "電話與電子郵件支援",
          "AI 協助",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "聯絡",
    title: "與我們聯繫",
    description: "歡迎聯繫我們，我們將給予最高的服務",
    findUs: "來訪地址",
    address: "Unit120-8280 Lansdowne rd, Richmond, BC",
    callUs: "致電",
    phone: "+1 604-278-0779",
    mailUs: "來信",
    email: "atlansdowne@gmail.com",
    visitUs: "營業時間",
    hoursDay: "週一至週五",
    hoursTime: "上午 8 時至下午 4 時",
    whatsappQrAlt: "WhatsApp 二維碼",
    wechatQrAlt: "WeChat 二維碼",
    firstName: "名字",
    lastName: "姓氏",
    emailLabel: "電子郵件",
    subject: "主旨",
    subjectPlaceholder: "請選擇主旨",
    message: "訊息",
    messagePlaceholder: "請輸入你的訊息…",
    send: "送出訊息",
    firstNamePlaceholder: "Leopoldo",
    lastNamePlaceholder: "Miranda",
    emailPlaceholder: "leomirandadev@gmail.com",
    subjects: [
      { value: "web-development", label: "網站開發" },
      { value: "mobile-development", label: "行動應用開發" },
      { value: "figma-design", label: "Figma 設計" },
      { value: "rest-api", label: "REST API" },
      { value: "fullstack-project", label: "全端專案" },
    ],
    errors: {
      firstName: "請至少輸入 2 個字元。",
      lastName: "請至少輸入 2 個字元。",
      email: "請輸入有效的電子郵件。",
      subject: "請選擇主旨。",
    },
  },
  faq: {
    eyebrow: "常見問題",
    title: "大家常問的事",
    items: [
      {
        question: "這個模板免費嗎？",
        answer: "是的。這是免費的 Next.js Shadcn 模板。",
        value: "item-1",
      },
      {
        question: "可以自訂顏色和字體嗎？",
        answer: "可以。主題代幣、字體與圖片都已預留，方便對齊你的品牌。",
        value: "item-2",
      },
      {
        question: "有支援深色模式嗎？",
        answer: "有。內建淺色與深色主題，也可跟隨系統偏好。",
        value: "item-3",
      },
      {
        question: "可以用在商業專案嗎？",
        answer: "可以。作為客戶專案或自家產品網站的起點都沒問題。",
        value: "item-4",
      },
      {
        question: "要怎麼開始？",
        answer: "複製儲存庫、安裝套件，再把文案與圖片換成你自己的內容即可。",
        value: "item-5",
      },
    ],
  },
  footer: {
    contact: "聯絡",
    platforms: "平台",
    help: "協助",
    socials: "社群",
    contactUs: "聯絡我們",
    faq: "常見問題",
    feedback: "意見回饋",
    copyright: "設計與開發：",
  },
} satisfies Dictionary;
