/**
 * 產生 2026 gfps-sports-island/build/data.js
 * 新竹市東區高峰國民小學 22 週年校慶運動會「森活高峰・廿二璀璨」
 */
const fs = require('fs');
const path = require('path');
const config = require('./config.js');

const DATA = {
  updated: "2026-11-07",
  city: {
    name: "高峰國小 22 週年校慶",
    nameEn: "GFPS 22nd Sports Day",
    title: "森活高峰・廿二璀璨",
    titleEn: "GFPS: Forest Vitality & Global Powers",
    sub: "都市森林小學綠茵環抱：歡迎來到新竹市高峰國小 22 週年校慶運動會！領取高峰五力集章護照，探索 32 項精彩節目與賽前個人賽英雄榜，集滿五力印章引燃勝利煙火！",
    subEn: "Welcome to Gao-Feng Primary School's 22nd Anniversary Sports Day! Collect all 5 GFPS Power Stamps across 6 forest arena islands to ignite the 3D Victory Fireworks and claim your Gold Certificate."
  },
  visions: {
    global: {
      name: "全球視野・國際永續",
      nameEn: "Global Vision & SDGs"
    },
    friendly: {
      name: "友善好品格・感恩關懷",
      nameEn: "Friendly Character & Care"
    },
    positive: {
      name: "積極正向・自信展能",
      nameEn: "Positive Mindset & Energy"
    },
    sdgs: {
      name: "永續生態・綠意森林",
      nameEn: "SDGs & Eco-Sustainability"
    },
    five_powers: {
      name: "GFPS 四大願景・五力均備",
      nameEn: "Four Visions & Five Powers"
    },
    cooperative: {
      name: "友善好品格・團隊合作",
      nameEn: "Friendly & Cooperative"
    },
    creative: {
      name: "玻璃美感・創意思考",
      nameEn: "Creative Glass Art"
    },
    vital: {
      name: "健康樂活・身心敏捷",
      nameEn: "Health & Vitality"
    },
    rational: {
      name: "探索思辨・全球素養",
      nameEn: "Inquiry & Global Literacy"
    }
  },
  winNotes: {
    G: {
      name: "全球視野 (Global Vision)",
      zh: "【全球視野・知識力】以素養為導向，連結在地森林與全球永續發展，運用科技與多元學習奠基知識力，自我展能；運動會中化為各年級智慧趣味競賽與大會秩序規範。"
    },
    F: {
      name: "友善好品格 (Friendly Character)",
      zh: "【友善品格・道德力】以人文關懷出發，涵養同理心與品德實踐，感恩惜福；運動會中展現為運動員進場宣誓、熱心助學夥伴與志工表揚，體現高峰溫馨校園精神。"
    },
    P: {
      name: "積極正向 (Positive Mindset)",
      zh: "【積極正向・體能＆群體力】勇於挑戰未知、超越自我，在競賽中培養團隊合作精神；運動會中化為個人徑賽衝刺、跨世代高峰薪傳接力賽與大隊接力決賽。"
    },
    S: {
      name: "永續發展 (SDGs Eco-Future)",
      zh: "【永續發展・美感＆實踐力】善用高峰植物園與都市森林自然資源，融合新竹玻璃藝術美學，推動低碳校園與環境永續教育。"
    }
  },
  customRoles: {
    coubertin: {
      name: "古柏坦（現代奧運之父）",
      nameEn: "Pierre de Coubertin",
      ancient: true,
      robe: "#0284c7",
      hat: "none",
      beard: true,
      extra: "torch",
      look: "現代奧林匹克運動會創始人，手持象徵高峰廿二璀璨的聖火火炬"
    },
    brucelee: {
      name: "李小龍（武道律動傳奇）",
      nameEn: "Bruce Lee",
      ancient: true,
      robe: "#facc15",
      hat: "none",
      beard: false,
      extra: "bamboo",
      look: "經典黃黑運動服，武術與肢體律動歷史巨星，引領森林玻璃藝能舞蹈"
    },
    chicheng: {
      name: "紀政（飛躍的羚羊）",
      nameEn: "Chi Cheng",
      ancient: true,
      robe: "#7c3aed",
      hat: "cap",
      beard: false,
      extra: "torch",
      look: "新竹出身世界短跑傳奇，曾創 50m/100m/200m 世界紀錄，守護綠茵跑道"
    },
    owens: {
      name: "傑西・歐文斯（奧運接力四金傳奇）",
      nameEn: "Jesse Owens",
      ancient: true,
      robe: "#10b981",
      hat: "laurel",
      beard: false,
      extra: "torch",
      look: "奧運 100m、200m 與 4×100m 大隊接力四金田徑傳奇，指導高峰交接棒"
    },
    jordan: {
      name: "麥可・喬丹（飛人傳奇）",
      nameEn: "Michael Jordan",
      ancient: true,
      robe: "#e11d48",
      hat: "none",
      beard: false,
      extra: "blocks",
      look: "六座總冠軍歷史傳奇，手持生態探索道具箱，啟發高峰智慧趣味闖關"
    },
    yangck: {
      name: "楊傳廣（亞洲鐵人）",
      nameEn: "C.K. Yang",
      ancient: true,
      robe: "#0ea5e9",
      hat: "laurel",
      beard: false,
      extra: "torch",
      look: "奧運十項全能銀牌得主，高舉高峰 22 週年大會總錦標金盃"
    },
    student: {
      name: "高峰小健將",
      nameEn: "Gao-Feng Athlete",
      ancient: false,
      robe: "#10b981",
      look: "身穿高峰森林綠活力運動服，朝氣蓬勃的參賽小選手"
    },
    teacher: {
      name: "裁判老師",
      nameEn: "Ref & Coach",
      ancient: false,
      robe: "#0284c7",
      look: "手持計時碼錶與哨子，公正執法的熱血裁判與導師"
    },
    parent: {
      name: "應援家長",
      nameEn: "Cheering Parent",
      ancient: false,
      robe: "#f59e0b",
      look: "手持相機與加油加油棒，給孩子最熱情掌聲的高峰家長"
    },
    volunteer: {
      name: "校慶志工",
      nameEn: "Gao-Feng Volunteer",
      ancient: false,
      robe: "#ec4899",
      look: "身著愛心志工背心，默默維持會場秩序與安全的守護天使"
    },
    scout: {
      name: "森林護衛隊",
      nameEn: "Forest Guard",
      ancient: false,
      robe: "#059669",
      look: "肩負護送大會聖火與會旗引領的高峰環保護衛隊員"
    }
  },
  quests: [
    {
      id: "q_friendly",
      power: "友善品格力",
      powerEn: "Friendly Character",
      icon: "💖",
      color: "#0284c7",
      islandId: "s01",
      itemId: "s01i4",
      landmarkName: "校長大會致詞與表揚台",
      title: "【品格力試煉】感恩守護高峰的親師志工",
      clue: "前往中央「高峰盛典廣場」，尋找校長主持開幕典禮與表揚家長會、愛心志工的「校長大會致詞台」！",
      question: "在運動會開幕典禮中，學校特別安排致贈感謝狀並表揚哪群默默守護高峰森林小學的夥伴？",
      options: [
        "家長會團隊、愛心志工隊與熱心助學夥伴",
        "國際外太空觀光團",
        "無人機自動巡邏隊"
      ],
      answer: 0,
      explain: "答對了！程序表特別安排頒發家長會當選證書與感謝狀，表揚長年風雨無阻守護高峰學童安全的志工夥伴，展現高峰國小「Friendly 友善好品格」的人文關懷精神！"
    },
    {
      id: "q_aesthetics",
      power: "玻璃美感力",
      powerEn: "Glass Aesthetics",
      icon: "🎨",
      color: "#ec4899",
      islandId: "s02",
      itemId: "s02i1",
      landmarkName: "玻璃工藝與美感展演舞台",
      title: "【美感力試煉】新竹玻璃藝術與森林大會舞",
      clue: "前往「玻璃藝能綠律島」，登上結合在地玻璃工藝與森林生態的大舞台！",
      question: "高峰國小位處新竹市，學校特別結合在地傳統工藝與自然生態，發展出哪項獨具特色的藝術美感課程？",
      options: [
        "深海潛水捕撈課程",
        "新竹玻璃工藝藝術與跨領域美感探索",
        "沙漠耐力越野賽"
      ],
      answer: 1,
      explain: "答對了！高峰國小結合新竹在地悠久的玻璃工藝特色與校園周邊豐富的森林生態，讓孩子在肢體律動、立體造型與視覺創作中激發豐富的美感力！"
    },
    {
      id: "q_vitality",
      power: "峰湧體能力",
      powerEn: "Vitality & Speed",
      icon: "⚡",
      color: "#10b981",
      islandId: "s03",
      itemId: "s03i2",
      landmarkName: "疾風衝刺終點計時線",
      title: "【體能力試煉】綠茵跑道起跑與衝刺規則",
      clue: "前往「疾風競速跑道島」，在終點計時鐘樓與衝刺線前接受紀政前輩的田徑考驗！",
      question: "在 60 公尺、100 公尺與 200 公尺個人徑賽衝刺時，選手應該遵守哪項重要田徑規則？",
      options: [
        "起跑前必須等待裁判發令槍響才能起跑，且衝刺全程不可串道",
        "比賽中途可以抄捷徑穿過草皮中央",
        "可以隨時伸手拉扯隔壁跑道的同學"
      ],
      answer: 0,
      explain: "答對了！田徑徑賽必須恪遵發令槍響起跑，全程保持在自己跑道內全力衝刺，展現「Positive 積極正向」的運動家風範與強健身心體能！"
    },
    {
      id: "q_positive",
      power: "高峰群體力",
      powerEn: "Positive Teamwork",
      icon: "🤝",
      color: "#f59e0b",
      islandId: "s04",
      itemId: "s04i1",
      landmarkName: "森林黃金接力交接棒區",
      title: "【群體力試煉】大隊接力交接棒默契與安全",
      clue: "前往「薪傳接力競技場」，在黃金接力棒地標前接受接力四金傳奇傑西・歐文斯的考驗！",
      question: "在大隊接力賽事中，如何才能完成最安全且快速的「完美交接棒」？",
      options: [
        "把接力棒高高拋向空中讓下一棒飛撲接住",
        "接棒同學在接力區內預跑起速，傳棒者口令清楚、穩固將棒子送到手中",
        "原地站著不動閉上眼睛等隊友撞上來"
      ],
      answer: 1,
      explain: "答對了！大隊接力考驗班級默契，接棒者預先起跑提速，傳棒者確實交接，在接力區內順暢交棒，正是「高峰群體力」團結同心的最佳實踐！"
    },
    {
      id: "q_sdgs",
      power: "全球永續力",
      powerEn: "Global & SDGs",
      icon: "🌍",
      color: "#06b6d4",
      islandId: "s05",
      itemId: "s05i1",
      landmarkName: "植物園生態趣味探索區",
      title: "【永續力試煉】都市森林小學與 SDGs 低碳行動",
      clue: "前往「森林智慧探索島」，在趣味帳篷與綠意探索區接受喬丹島主的永續挑戰！",
      question: "高峰國小緊鄰高峰植物園與十八尖山，享有『都市森林小學』美譽。在運動會中，我們如何落實 SDGs 永續低碳精神？",
      options: [
        "大量使用一次性塑膠杯與保麗龍餐盒",
        "自備環保水壺至補水站裝水、落實垃圾分類與場地復原",
        "活動結束後將旗幟垃圾隨意丟棄在草地"
      ],
      answer: 1,
      explain: "答對了！高峰國小落實聯合國永續發展目標 (SDGs 12/13/15)，運動會推動自備水壺、自帶環保餐具與綠色低碳行動，守護美麗森林小學！"
    }
  ],
  programSchedule: [
    { id: 1, time: "08:00–08:20", name: "全校師生與運動員進場集結", group: "全體師生", category: "典禮", power: "道德力", icon: "🚩", note: "各班身著亮麗運動服，精神抖擻列隊進場" },
    { id: 2, time: "08:20–08:30", name: "開幕典禮・廿二校慶聖火引燃", group: "全校與貴賓", category: "典禮", power: "道德力", icon: "🔥", note: "聖火護衛隊護送聖火進場，引燃廿二高峰耀動聖火台" },
    { id: 3, time: "08:30–08:40", name: "升大會會旗・唱國歌與校歌", group: "全校師生", category: "典禮", power: "道德力", icon: "🏳️", note: "會旗冉冉升起，全校齊唱高峰國小校歌" },
    { id: 4, time: "08:40–08:50", name: "大會主席與長官貴賓致詞", group: "校長與貴賓", category: "典禮", power: "道德力", icon: "🎤", note: "勉勵高峰學子發揚 GFPS 精神，展現運動家風範" },
    { id: 5, time: "08:50–08:58", name: "頒發家長會證書與熱心助學感謝狀", group: "家長會與志工", category: "表揚", power: "道德力", icon: "📜", note: "表揚長期深耕校園、守護高峰學童的愛心夥伴" },
    { id: 6, time: "08:58–09:05", name: "運動員宣誓與裁判長叮嚀", group: "選手代表", category: "典禮", power: "道德力", icon: "✋", note: "恪遵競賽規則，服從裁判判決，誓言勝不驕敗不餒" },
    { id: 7, time: "09:05–09:15", name: "大會退場・活力熱身大操", group: "全校師生", category: "律動", power: "體能力", icon: "🏃", note: "全校隨動感音樂伸展筋骨，為精彩賽程做好萬全準備" },
    { id: 8, time: "09:15–09:30", name: "幼兒園＆低年級舞蹈展演", group: "幼兒與一二年級", category: "展演", power: "美感力", icon: "🌸", note: "森林小精靈萌翻全場，舞出童趣與純真笑容" },
    { id: 9, time: "09:30–09:45", name: "中年級大會舞・春漾綠律", group: "三四年級", category: "展演", power: "美感力", icon: "🌿", note: "結合綠意與動感節奏，展現中年級活潑生機" },
    { id: 10, time: "09:45–10:00", name: "高年級大會舞・旗開得勝", group: "五六年級", category: "展演", power: "美感力", icon: "🚩", note: "手持彩旗與造型道具，展現高年級磅礴氣勢" },
    { id: 11, time: "10:00–10:20", name: "幼兒園親子趣味闖關：小樹苗快快長", group: "幼兒園親子", category: "趣味", power: "群體力", icon: "🌱", note: "家長與幼兒同心協力，運送森林養分球" },
    { id: 12, time: "10:20–10:40", name: "一年級趣味競賽：歡樂跳跳森友會", group: "一年級", category: "趣味", power: "群體力", icon: "🐰", note: "套袋跳躍與障礙穿越，考驗平衡與歡樂協調" },
    { id: 13, time: "10:40–11:00", name: "二年級趣味競賽：滾動綠意同心圓", group: "二年級", category: "趣味", power: "群體力", icon: "⚽", note: "合力推動巨型彩色充氣球，同心邁向終點" },
    { id: 14, time: "11:00–11:20", name: "三年級趣味競賽：森林同舟共濟", group: "三年級", category: "趣味", power: "知識力", icon: "🛶", note: "排隊傳遞特製呼啦圈與水管道具，考驗團隊智慧" },
    { id: 15, time: "11:20–11:40", name: "四年級趣味競賽：運轉乾坤傳奇", group: "四年級", category: "趣味", power: "知識力", icon: "🎯", note: "雙人合力夾球折返跑，展現絕佳步頻默契" },
    { id: 16, time: "11:40–12:00", name: "五年級趣味競賽：勇闖十八尖山", group: "五年級", category: "趣味", power: "知識力", icon: "⛰️", note: "跨越輪胎與平衡木障礙，挑戰體能極限" },
    { id: 17, time: "12:00–12:20", name: "六年級趣味競賽：高峰薪傳無敵風火輪", group: "六年級", category: "趣味", power: "群體力", icon: "🎡", note: "履帶步步為營，考驗六年級同班六年的無間默契" },
    { id: 18, time: "10:00–10:30", name: "低年級 50 公尺迎風跑走", group: "一二年級", category: "徑賽", power: "體能力", icon: "👟", note: "迎向終點大步向前，每位孩子都是最棒的小英雄" },
    { id: 19, time: "10:30–10:50", name: "三年級男/女 60 公尺決賽", group: "三年級決賽選手", category: "徑賽", power: "體能力", icon: "⚡", note: "綠茵直線跑道飛馳，爭奪三年級疾風桂冠" },
    { id: 20, time: "10:50–11:10", name: "四年級男/女 60 公尺決賽", group: "四年級決賽選手", category: "徑賽", power: "體能力", icon: "⚡", note: "速度與爆發力的較量，全場掌聲雷動" },
    { id: 21, time: "11:10–11:30", name: "三年級男/女 100 公尺決賽", group: "三年級決賽選手", category: "徑賽", power: "體能力", icon: "🏅", note: "挑戰百米耐力與速度的完美結合" },
    { id: 22, time: "11:30–11:50", name: "四年級男/女 100 公尺決賽", group: "四年級決賽選手", category: "徑賽", power: "體能力", icon: "🏅", note: "中年級百米巔峰對決，誰能稱霸綠茵賽道" },
    { id: 23, time: "11:50–12:10", name: "五年級男/女 100 公尺決賽", group: "五年級決賽選手", category: "徑賽", power: "體能力", icon: "🔥", note: "起跑反應與後段加速的極致考驗" },
    { id: 24, time: "12:10–12:25", name: "六年級男/女 100 公尺決賽", group: "六年級決賽選手", category: "徑賽", power: "體能力", icon: "🔥", note: "國小生涯最後一次百米競速，衝刺榮耀" },
    { id: 25, time: "12:25–12:40", name: "五年級男/女 200 公尺決賽", group: "五年級決賽選手", category: "徑賽", power: "體能力", icon: "🌪️", note: "考驗彎道過彎離心力控制與體能續航" },
    { id: 26, time: "12:40–12:55", name: "六年級男/女 200 公尺決賽", group: "六年級決賽選手", category: "徑賽", power: "體能力", icon: "🌪️", note: "半圈飛馳，展現高峰高年級王者風範" },
    { id: 27, time: "11:40–12:00", name: "三年級班際大隊接力決賽", group: "三年級各班", category: "接力", power: "群體力", icon: "🎽", note: "中年級首度登場大隊接力，全班齊心為榮譽衝刺" },
    { id: 28, time: "12:00–12:20", name: "四年級班際大隊接力決賽", group: "四年級各班", category: "接力", power: "群體力", icon: "🎽", note: "每人半圈接力傳承，搶道超車精彩萬分" },
    { id: 29, time: "12:20–12:40", name: "五年級班際大隊接力決賽", group: "五年級各班", category: "接力", power: "群體力", icon: "🎽", note: "每人一圈高強度接力，考驗班級深度與毅力" },
    { id: 30, time: "12:40–13:00", name: "六年級班際大隊接力決賽", group: "六年級各班", category: "接力", power: "群體力", icon: "🏆", note: "全場最高潮！畢業班同舟共濟榮譽最後一戰" },
    { id: 31, time: "13:00–13:20", name: "跨世代高峰親師薪傳接力友誼賽", group: "校友、教職、家長", category: "薪傳", power: "群體力", icon: "🤝", note: "校友回娘家、師長與家長同場接力，傳承 22 年森林情" },
    { id: 32, time: "13:20–13:50", name: "閉幕典禮・頒發大會總錦標＆環保復原", group: "全體師生", category: "典禮", power: "永續力", icon: "🎉", note: "頒發優勝錦旗、總錦標金盃，全校實踐低碳場地復原" }
  ],
  preEvents: [
    { name: "三年級男生組 60m 預賽", date: "115.10.20", arena: "綠茵活力環形跑道" },
    { name: "三年級女生組 60m 預賽", date: "115.10.20", arena: "綠茵活力環形跑道" },
    { name: "四年級男生組 60m 預賽", date: "115.10.20", arena: "綠茵活力環形跑道" },
    { name: "四年級女生組 60m 預賽", date: "115.10.20", arena: "綠茵活力環形跑道" },
    { name: "三年級男女 100m 預賽", date: "115.10.22", arena: "綠茵活力環形跑道" },
    { name: "四年級男女 100m 預賽", date: "115.10.22", arena: "綠茵活力環形跑道" },
    { name: "五六年級男女 100m 預賽", date: "115.10.27", arena: "綠茵活力環形跑道" },
    { name: "五六年級男女 200m 預賽", date: "115.10.29", arena: "綠茵活力環形跑道" }
  ],
  islands: [
    {
      id: "s01",
      name: "高峰盛典廣場",
      nameEn: "Gao-Feng Gala Plaza",
      host: "coubertin",
      cx: 0,
      cz: 0,
      surface: "plaza",
      vision: "friendly",
      theme: "廿二高峰・森林中樞・典禮與友善品格核心",
      items: [
        {
          id: "s01i1",
          model: "torch_altar",
          name: "廿二高峰耀動聖火台",
          desc: "高峰 22 週年校慶主聖火台！以都市森林綠與翡翠白玉同心圓雕塑打造。集滿 5 枚高峰五力印章，此處將引燃全景 3D 勝利煙火！",
          facts: ["22 週年校慶主聖火", "翡翠綠與白玉基座", "集滿 5 章引燃 3D 煙火"],
          when: "08:20 聖火引燃｜13:20 勝利煙火",
          phase: 1,
          challenge: {
            mode: "tap_charge",
            targetCount: 5,
            power: "友善品格力",
            questId: "q_friendly",
            title: "【聖火台關卡】廿二高峰集氣挑戰",
            taskDesc: "請連點 5 下「🔥 注入高峰五力能量」將聖火蓄滿 100%，並回答大會主題問答！",
            actionBtn: "🔥 注入高峰五力能量",
            actionDone: "🔥 聖火能量 100% 滿載！高峰 22 週年森林聖火熊熊燃起！",
            question: "高峰國小 22 週年校慶大會主題為何？",
            options: [
              "森活高峰・廿二璀璨",
              "冰雪奇緣・冰凍三尺",
              "太空漫步・登陸火星"
            ],
            answer: 0,
            explain: "完全正確！高峰國小 22 週年校慶主題即為「森活高峰・廿二璀璨」，象徵綠意森林校園與廿二載璀璨成就！"
          }
        },
        {
          id: "s01i2",
          model: "archgate",
          name: "高峰迎賓彩虹拱門",
          desc: "迎接各年級小健將與貴賓步入會場的森林七彩拱門，象徵活力迎向朝陽與綠茵賽道。",
          facts: ["運動員進場必經地標", "七彩拱門象徵繽紛童年", "拍照打卡核心熱點"],
          when: "08:00–08:20 運動員集結進場",
          phase: 1,
          challenge: {
            mode: "sequence",
            power: "友善品格力",
            title: "【進場迎賓關卡】運動員進場秩序排序",
            taskDesc: "請按順序點擊正確的進場引領步驟：",
            steps: ["會旗引導隊", "聖火護衛隊", "各班運動員", "主席台敬禮"],
            question: "運動員進場經過司令台時，各班應展現何種精神？",
            options: [
              "整齊步伐、精神抖擻並向大會主席行禮致敬",
              "低頭滑手機各自解散",
              "隨意奔跑穿越草坪"
            ],
            answer: 0,
            explain: "答對了！進場展現班級團隊紀律與朝氣，是「Friendly 友善好品格」的最佳展現！"
          }
        },
        {
          id: "s01i3",
          model: "podium",
          name: "大會司令升旗台",
          desc: "舉行大會升旗、唱校歌與運動員宣誓的主席台，大會長官在此主持運動會。",
          facts: ["會旗升旗中心", "運動員宣誓舞台", "主席長官致詞區"],
          when: "08:30–09:05 典禮程序",
          phase: 1,
          challenge: {
            mode: "tap_charge",
            targetCount: 4,
            power: "友善品格力",
            title: "【司令台關卡】升旗敬禮蓄力挑戰",
            taskDesc: "連點 4 下「🚩 肅立敬禮向會旗致敬」完成升旗程序！",
            actionBtn: "🚩 肅立敬禮向會旗致敬",
            actionDone: "🚩 會旗在高峰校園青空下冉冉升起！",
            question: "運動員宣誓的的核心精神是什麼？",
            options: [
              "只要贏球不管任何手段",
              "恪遵競賽規則，服從裁判判決，發揚運動家精神",
              "輸了比賽就找裁判抗議"
            ],
            answer: 1,
            explain: "正確！宣誓代表對競賽規則與對手的尊重，勝不驕、敗不餒！"
          }
        },
        {
          id: "s01i4",
          model: "lectern",
          name: "校長大會致詞與表揚台",
          desc: "校長主持開幕典禮、頒發家長會證書與愛心志工感謝狀的榮譽講台。",
          facts: ["志工感謝狀頒發處", "家長會授證專區", "五力印章重要據點"],
          when: "08:40–08:58 致詞與表揚",
          phase: 1,
          challenge: {
            mode: "sequence",
            power: "友善品格力",
            questId: "q_friendly",
            title: "【品格力印章】守護高峰感謝程序",
            taskDesc: "請按順序點擊致敬感謝的步驟：",
            steps: ["家長會團隊", "愛心志工隊", "護理守護站", "全校鼓掌感恩"],
            question: "大會程序表特別安排致謝表揚，體現高峰國小哪一項願景核心？",
            options: [
              "Friendly（友善好品格・感恩關懷）",
              "太空火箭推進技術",
              "商業投資獲利分析"
            ],
            answer: 0,
            explain: "答對了！感謝親師志工長年為校園付出，正是高峰國小 F (Friendly) 友善好品格的具體實踐！"
          }
        }
      ]
    },
    {
      id: "s02",
      name: "玻璃藝能綠律島",
      nameEn: "Glass & Eco-Art Isle",
      host: "brucelee",
      cx: 110,
      cz: -60,
      surface: "lawn",
      vision: "creative",
      theme: "玻璃藝術・森林美感・舞蹈與身心律動",
      items: [
        {
          id: "s02i1",
          model: "stage",
          name: "玻璃工藝與美感展演舞台",
          desc: "結合新竹在地玻璃工藝與森林自然的開放式展演大舞台，全校大會舞在此璀璨演出！",
          facts: ["玻璃藝術美感設計", "六學年大會舞舞台", "音響燈光表演中樞"],
          when: "09:15–10:00 各學年大會舞",
          phase: 1,
          challenge: {
            mode: "sequence",
            power: "玻璃美感力",
            questId: "q_aesthetics",
            title: "【美感力印章】大會舞展演節奏連擊",
            taskDesc: "請按順序點擊學年展演順序：",
            steps: ["幼兒低年級童趣", "中年級春漾綠律", "高年級旗開得勝", "謝幕全場喝采"],
            question: "高峰國小發展新竹在地特色，將哪一項藝術工藝融入美感校本課程？",
            options: [
              "深海珍珠養殖",
              "新竹在地玻璃工藝藝術",
              "高空滑雪雕塑"
            ],
            answer: 1,
            explain: "正確！新竹素有玻璃之鄉美名，高峰國小將玻璃工藝與生態美感深度結合，引導孩子揮灑創意美感！"
          }
        },
        {
          id: "s02i2",
          model: "fan_ribbon",
          name: "扇彩飄逸・高峰大會舞區",
          desc: "高年級舞動彩扇與旗幟的壯麗地標，象徵高峰學子鵬程萬里、展翅飛翔。",
          facts: ["彩扇與旗幟雕塑", "高年級力與美結合", "拍照打卡人氣景點"],
          when: "09:45–10:00 高年級大會舞",
          phase: 1,
          challenge: {
            mode: "tap_charge",
            targetCount: 4,
            power: "玻璃美感力",
            title: "【彩扇關卡】扇舞節奏律動充能",
            taskDesc: "請跟著音樂拍子連點 4 下「🪭 揮舞彩扇舞動青春」！",
            actionBtn: "🪭 揮舞彩扇舞動青春",
            actionDone: "🪭 彩扇如林飄逸，綠茵場上盛開絢麗花海！",
            question: "在團體大會舞展演中，最需要隊員具備哪種素養？",
            options: [
              "各自跳各自的動作不看拍子",
              "專注聆聽音樂節奏，與團隊動作整齊劃一、展現肢體協調美感",
              "隨意坐在草皮上休息"
            ],
            answer: 1,
            explain: "答對了！團隊大會舞展現默契、節奏感與群體美學！"
          }
        },
        {
          id: "s02i3",
          model: "mascot_corner",
          name: "森林生態之聲・樂旗表演角",
          desc: "樂隊與旗隊演奏動人進行曲的表演角落，為運動員進場與大會舞蹈注入蓬勃生機。",
          facts: ["大會音響指揮中心", "管樂與旗隊駐點", "森林自然之聲相伴"],
          when: "08:00–13:00 全天伴奏與廣播",
          phase: 1,
          challenge: {
            mode: "sequence",
            power: "玻璃美感力",
            title: "【音符律動關卡】進行曲節奏連線",
            taskDesc: "請依序點擊樂曲演奏節拍：",
            steps: ["定音鼓預備", "小號嘹亮響起", "大鼓齊步進行", "全場掌聲雷動"],
            question: "運動會大會進行曲的主要功能是什麼？",
            options: [
              "催眠讓大家睡著",
              "提振運動員士氣，引導隊伍保持穩定節奏與高昂鬥志",
              "干擾比賽選手聽發令槍"
            ],
            answer: 1,
            explain: "正確！激昂的進行曲鼓舞士氣，讓全場充滿熱血活力的運動氛圍！"
          }
        }
      ]
    },
    {
      id: "s03",
      name: "疾風競速跑道島",
      nameEn: "Emerald Sprint Speedway",
      host: "chicheng",
      cx: 120,
      cz: 75,
      surface: "track",
      vision: "vital",
      theme: "綠茵跑道・起跑反應・個人徑賽破風馳騁",
      items: [
        {
          id: "s03i1",
          model: "track",
          name: "綠茵環形跑道・起跑發令台",
          desc: "標記 50m、60m、100m 與 200m 起跑標線的活力跑道，紀政前輩在此指導起跑聽槍技巧！",
          facts: ["起跑發令裁判台", "精準鳴槍電子感應", "起跑反應測驗站"],
          when: "10:00–12:55 各學年個人徑賽決賽",
          phase: 2,
          challenge: {
            mode: "reaction",
            power: "峰湧體能力",
            title: "【起跑反應挑戰】發令槍響起跑反應測試",
            taskDesc: "請注視信號燈，當「各就位」轉為「鳴槍出發」時，以最快速度點擊起跑！",
            actionBtn: "🔫 準備起跑",
            actionDone: "⚡ 絕佳起跑反應！飛馳衝刺！",
            question: "國際田徑規則中，起跑反應時間若小於多少秒會被判定為偷跑（搶跑）？",
            options: [
              "0.10 秒",
              "2.50 秒",
              "10.0 秒"
            ],
            answer: 0,
            explain: "答對了！人類神經聽覺反應極限約為 0.10 秒，小於 0.10 秒即視為發令前偷跑！"
          }
        },
        {
          id: "s03i2",
          model: "court",
          name: "疾風衝刺終點計時線",
          desc: "電子計時光電感應終點線，記錄每位高峰短跑健將破風衝刺的最佳秒數！",
          facts: ["高精準光電計時系統", "終點高速攝影記錄", "五力印章重要據點"],
          when: "10:30–12:55 各項徑賽衝線",
          phase: 2,
          challenge: {
            mode: "sequence",
            power: "峰湧體能力",
            questId: "q_vitality",
            title: "【體能力印章】衝刺破線技術排序",
            taskDesc: "請按順序點擊衝刺過線的核心動作：",
            steps: ["加速步頻", "目光平視終點", "壓胸壓肩破線", "順勢減速緩跑"],
            question: "衝刺抵達終點線時，哪種行為是安全且正確的？",
            options: [
              "衝線後順勢向前減速慢跑，不可突然急煞或回頭推擠",
              "過線瞬間立刻雙膝著地滑壘",
              "衝過終點直接往左側跑道橫向切入"
            ],
            answer: 0,
            explain: "答對了！衝過終點線必須順著直線緩衝減速，維護自己與相鄰跑道選手的運動安全！"
          }
        },
        {
          id: "s03i3",
          model: "tent",
          name: "選手檢錄與熱身加油棚",
          desc: "選手賽前核對道次、釘鞋檢查與動態熱身整備的專業檢錄區。",
          facts: ["檢錄裁判點名區", "防護員運動貼紮站", "熱身動態伸展區"],
          when: "賽前 20 分鐘分梯次檢錄",
          phase: 2,
          challenge: {
            mode: "tap_charge",
            targetCount: 4,
            power: "峰湧體能力",
            title: "【檢錄熱身關卡】賽前動態熱身充電",
            taskDesc: "連點 4 下「🏃 動態熱身高抬腿與開合跳」完成熱身整備！",
            actionBtn: "🏃 動態熱身高抬腿與開合跳",
            actionDone: "🏃 肌肉充分預熱，心肺狀態達到巔峰！",
            question: "激烈比賽前進行充分熱身與動態伸展，最主要的好處是什麼？",
            options: [
              "提高體溫與肌肉彈性，提升運動表現並預防運動傷害",
              "讓比賽時間提早結束",
              "讓自己不用跑步直接領獎"
            ],
            answer: 0,
            explain: "正確！充分的賽前熱身能有效活化神經肌肉系統，避免拉傷並發揮極致潛能！"
          }
        }
      ]
    },
    {
      id: "s04",
      name: "薪傳接力競技場",
      nameEn: "Legacy Relay Arena",
      host: "owens",
      cx: -20,
      cz: 130,
      surface: "track",
      vision: "positive",
      theme: "大隊接力・班級同舟・薪傳友誼賽傳承",
      items: [
        {
          id: "s04i1",
          model: "baton_relay",
          name: "森林黃金接力交接棒區",
          desc: "大隊接力最扣人心弦的 30 公尺交接棒區！傑西・歐文斯親自傳授不減速交棒秘訣。",
          facts: ["30 公尺法定接力區", "視覺助跑標線", "五力印章重要據點"],
          when: "11:40–13:00 各學年大隊接力決賽",
          phase: 3,
          challenge: {
            mode: "sequence",
            power: "高峰群體力",
            questId: "q_positive",
            title: "【群體力印章】完美交接棒口訣排序",
            taskDesc: "請按順序點擊接力交接棒核心步驟：",
            steps: ["看準隊友標線", "全力向前預跑", "後方大喊『接』", "穩固交接握棒"],
            question: "在大隊接力中，如果接力棒不慎掉落，應該由誰撿起來才算合規？",
            options: [
              "由掉棒的選手親自撿起，且不可干擾其他跑道",
              "由場外家長丟一根新的棒子進來",
              "裁判幫忙撿起來遞給下一棒"
            ],
            answer: 0,
            explain: "答對了！接力規則明確規定掉棒必須由掉棒者自行撿起，且不得阻礙其他選手前進！"
          }
        },
        {
          id: "s04i2",
          model: "stand",
          name: "大隊接力競賽看台",
          desc: "環繞在跑道旁的親師加油看台，全班同學與家長揮動加油彩球吶喊助威！",
          facts: ["家長親師熱情加油區", "大隊接力最佳觀賽視角", "班級加油口號競賽"],
          when: "11:40–13:20 接力賽程高潮時刻",
          phase: 3,
          challenge: {
            mode: "sequence",
            power: "高峰群體力",
            title: "【看台加油關卡】班級加油口號協奏",
            taskDesc: "請按節奏點擊加油口號：",
            steps: ["高峰高峰", "積極正向", "齊心協力", "勇奪第一"],
            question: "在看台為選手加油時，哪種行為體現最棒的品德？",
            options: [
              "無論哪一班選手跑過，都給予熱烈掌聲與鼓勵，勝負皆展現風度",
              "對落後的選手喝倒采倒豎大拇指",
              "隨意向跑道丟擲飲料瓶罐"
            ],
            answer: 0,
            explain: "正確！為每位奮戰到底的選手喝采，正是「Positive 積極正向」與運動家風度的最高境界！"
          }
        },
        {
          id: "s04i3",
          model: "flagpole",
          name: "高峰親師校友薪傳賽起點",
          desc: "13:00 登場的「高峰薪傳接力賽」，校友、校長、教職員與家長會攜手奔跑，傳承 22 年校史風華！",
          facts: ["歷屆校友回娘家賽事", "親師生世代共跑", "傳承廿二高峰深厚情誼"],
          when: "13:00–13:20 跨世代薪傳友誼賽",
          phase: 3,
          challenge: {
            mode: "tap_charge",
            targetCount: 5,
            power: "高峰群體力",
            title: "【薪傳友誼關卡】校史風華能量充能",
            taskDesc: "連點 5 下「🤝 薪火相傳高峰廿二載」！",
            actionBtn: "🤝 薪火相傳高峰廿二載",
            actionDone: "🤝 薪傳之棒代代相傳，高峰親師情誼歷久彌新！",
            question: "高峰國小創立於民國 93 年 (2004 年)，2026 年適逢創校幾週年紀念？",
            options: [
              "22 週年",
              "10 週年",
              "100 週年"
            ],
            answer: 0,
            explain: "完全正確！高峰國小創立於 2004 年，今年迎來 22 週年校慶，薪傳接力象徵校史傳承綿延不絕！"
          }
        }
      ]
    },
    {
      id: "s05",
      name: "森林智慧探索島",
      nameEn: "Eco-Inquiry & Forest Wonder Isle",
      host: "jordan",
      cx: -115,
      cz: -50,
      surface: "lawn",
      vision: "global",
      theme: "生態探索・趣味競賽・低碳永續與 SDGs 實踐",
      items: [
        {
          id: "s05i1",
          model: "hula_barrel",
          name: "植物園生態趣味探索區",
          desc: "結合呼啦圈、障礙錐與森林平衡木的趣味競賽場地，喬丹島主在此啟發孩子智謀與身手！",
          facts: ["一至六年級趣味器材區", "森林障礙探險道具", "五力印章重要據點"],
          when: "10:00–12:20 各學年趣味競賽",
          phase: 2,
          challenge: {
            mode: "tap_charge",
            targetCount: 5,
            power: "全球永續力",
            questId: "q_sdgs",
            title: "【永續力印章】生態低碳連擊挑戰",
            taskDesc: "請連點 5 下「🌿 守護森林生態・實踐低碳生活」完成集氣！",
            actionBtn: "🌿 守護森林生態・實踐低碳生活",
            actionDone: "🌿 森林綠意綻放！成功取得 GFPS 全球永續力印章！",
            question: "聯合國 17 項永續發展目標 (SDGs) 中，高峰國小運動會積極落實的環保行動為何？",
            options: [
              "全面推動自備環保水壺、減少一次性垃圾與校園落葉堆肥綠化",
              "鼓勵大家多買塑膠玩具當禮物",
              "把吃剩的便當直接留在看台上"
            ],
            answer: 0,
            explain: "答對了！高峰國小深植環境教育，落實 SDGs 12 責任消費與 SDGs 15 陸域生態保育！"
          }
        },
        {
          id: "s05i2",
          model: "stall",
          name: "低碳環保・永續補給能量站",
          desc: "提供選手潔淨飲用水、運動電解質與新鮮水果的低碳健康補給站，嚴禁使用一次性塑膠杯！",
          facts: ["自備水壺友善補水站", "健康新鮮當季水果", "減塑低碳生活示範點"],
          when: "08:30–13:30 全天候能量支援",
          phase: 2,
          challenge: {
            mode: "sequence",
            power: "全球永續力",
            title: "【補給秩序關卡】綠色補水步驟排序",
            taskDesc: "請按順序點擊綠色補水步驟：",
            steps: ["拿出自備水壺", "排隊裝取飲水", "小口補充水分", "落實分類回收"],
            question: "運動劇烈流汗時，最適當的補水方式是什麼？",
            options: [
              "每隔一段時間慢速小口補充常溫水或電解質，不可大口牛飲冰水",
              "一口氣灌下兩公升超冰含糖汽水",
              "口渴時忍住完全不喝水"
            ],
            answer: 0,
            explain: "正確！劇烈運動後應少量多次補充常溫水分，保護消化道與維持心血管循環！"
          }
        },
        {
          id: "s05i3",
          model: "bulletin",
          name: "智慧探索闖關公告亭",
          desc: "張貼趣味競賽計分規則、各年級通關秘笈與生態小常識的智慧探索亭。",
          facts: ["趣味競賽規則圖解", "植物園常見動植物介紹", "SDGs 永續科普專區"],
          when: "全天開放自由參觀",
          phase: 2,
          challenge: {
            mode: "tap_charge",
            targetCount: 4,
            power: "全球永續力",
            title: "【智慧公告關卡】生態小常識充能",
            taskDesc: "連點 4 下「🔍 探索高峰植物園生態奇觀」！",
            actionBtn: "🔍 探索高峰植物園生態奇觀",
            actionDone: "🔍 掌握森林智慧！發現十八尖山自然珍寶！",
            question: "高峰國小周邊緊鄰的自然資源豐富，下列何者為學校相鄰的重要自然景點？",
            options: [
              "高峰植物園與十八尖山",
              "撒哈拉沙漠大沙丘",
              "大堡礁海底珊瑚群"
            ],
            answer: 0,
            explain: "答對了！高峰國小坐落於高峰植物園與十八尖山旁，是新竹市最具代表性的都市森林小學！"
          }
        }
      ]
    },
    {
      id: "s06",
      name: "GFPS 榮耀星光島",
      nameEn: "GFPS Global Starlight Isle",
      host: "yangck",
      cx: -95,
      cz: 75,
      surface: "plaza",
      vision: "five_powers",
      theme: "星光頒獎・總錦標金盃・GFPS 全球視野與榮耀殿堂",
      items: [
        {
          id: "s06i1",
          model: "podium_award",
          name: "高峰星光金牌頒獎台",
          desc: "為個人賽與大隊接力優勝健將加冕榮譽的金銀銅立體頒獎台，亞洲鐵人楊傳廣在此為小選手喝采！",
          facts: ["金銀銅三色階梯舞台", "個人賽獎牌加冕區", "掌聲與榮耀匯聚點"],
          when: "各項決賽結束後即時頒獎",
          phase: 3,
          challenge: {
            mode: "sequence",
            power: "高峰群體力",
            title: "【頒獎禮儀關卡】受獎榮譽禮儀排序",
            taskDesc: "請按順序點擊標準受獎禮節：",
            steps: ["步上榮譽頒獎台", "向頒獎長官鞠躬", "佩戴榮譽金牌", "合影展現陽光自信"],
            question: "站上頒獎台領獎時，得獎者應展現何種態度？",
            options: [
              "謙遜感謝隊友、教練與對手，展現風度與自信微笑",
              "嘲笑台下沒得獎的同學",
              "轉過身背對鏡頭"
            ],
            answer: 0,
            explain: "正確！榮耀來自平日辛勤苦練與團隊互助，真正的冠軍懂得謙遜與感恩！"
          }
        },
        {
          id: "s06i2",
          model: "trophy_cup",
          name: "廿二週年大會總錦標授旗台",
          desc: "象徵全校最高團隊榮譽的廿二週年大會總錦標巨型金盃，表揚各學年運動精神總冠軍！",
          facts: ["全校精神總錦標象徵", "廿二週年紀念金雕", "五力均備榮譽象徵"],
          when: "13:20 閉幕典禮壓軸頒發",
          phase: 3,
          challenge: {
            mode: "tap_charge",
            targetCount: 5,
            power: "友善品格力",
            title: "【總錦標關卡】大會總錦標加冕充能",
            taskDesc: "連點 5 下「🏆 為高峰運動精神總冠軍喝采」！",
            actionBtn: "🏆 為高峰運動精神總冠軍喝采",
            actionDone: "🏆 金盃光芒萬丈！廿二高峰運動精神長存！",
            question: "高峰國小四大核心學校願景 GFPS 中，『P』代表什麼涵義？",
            options: [
              "Positive（積極正向・自信展能）",
              "Pizza（美味比薩大餐）",
              "Pencil（鉛筆書寫作業）"
            ],
            answer: 0,
            explain: "完全正確！GFPS 分別代表 Global (全球視野)、Friendly (友善好品格)、Positive (積極正向)、SDGs (永續發展)！"
          }
        },
        {
          id: "s06i3",
          model: "calendar_kiosk",
          name: "大會賽況即時電子公報欄",
          desc: "即時更新 32 項大會程序、個人賽預決賽成績與班級大隊接力紀錄的觸控查詢亭。",
          facts: ["全天 32 項程序即時查詢", "賽前個人賽英雄榜", "數位化運動會資訊中樞"],
          when: "全天候即時更新公告",
          phase: 3,
          challenge: {
            mode: "sequence",
            power: "全球永續力",
            title: "【資訊公報關卡】數位賽程查詢排序",
            taskDesc: "請按順序點擊數位查詢流程：",
            steps: ["打開電子公報欄", "選擇參賽年級", "查閱比賽成績", "為同班好友打氣"],
            question: "運用數位電子公報欄取代傳統大量紙張賽程表，符合哪一項環保理念？",
            options: [
              "無紙化數位低碳永續校園",
              "只是為了好玩沒有任何好處",
              "增加用紙量"
            ],
            answer: 0,
            explain: "答對了！無紙化數位看板大幅節省紙張印刷，正是高峰落實綠色低碳科技校園的優良典範！"
          }
        }
      ]
    }
  ],
  flows: [
    { id: "f01", from: "s01", to: "s02", crew: ["student", "teacher"], carry: "note", type: "plan", phase: 1 },
    { id: "f02", from: "s02", to: "s05", crew: ["student", "volunteer"], carry: "toolbox", type: "link", phase: 2 },
    { id: "f03", from: "s05", to: "s03", crew: ["student"], carry: "medal", type: "plan", phase: 2 },
    { id: "f04", from: "s03", to: "s04", crew: ["student", "parent"], carry: "baton", type: "plan", phase: 3 },
    { id: "f05", from: "s04", to: "s01", crew: ["student", "scout"], carry: "diploma", type: "link", phase: 3 },
    { id: "f06", from: "s01", to: "s06", crew: ["teacher", "volunteer"], carry: "trophy", type: "news", phase: 3 }
  ],
  dayCycle: [
    { label: "晨曦晨光 (07:30)", items: ["s01i1", "s01i2"] },
    { label: "開幕典禮 (08:00)", items: ["s01i1", "s01i2", "s01i3", "s01i4"] },
    { label: "大會舞蹈 (09:15)", items: ["s02i1", "s02i2", "s02i3"] },
    { label: "趣味競賽 (10:00)", items: ["s05i1", "s05i2", "s05i3"] },
    { label: "個人徑賽 (10:30)", items: ["s03i1", "s03i2", "s03i3"] },
    { label: "大隊接力 (11:40)", items: ["s04i1", "s04i2", "s04i3"] },
    { label: "星光閉幕 (13:20)", items: ["s06i1", "s06i2", "s06i3"] }
  ],
  glossary: [
    {
      term: "森活高峰・廿二璀璨",
      zh: "高峰國小 22 週年校慶運動會主題，融合都市森林自然生態之美與廿二載璀璨成就。"
    },
    {
      term: "高峰 GFPS 願景",
      zh: "G - Global (全球視野)、F - Friendly (友善好品格)、P - Positive (積極正向)、S - SDGs (永續發展)。"
    },
    {
      term: "跨世代高峰薪傳接力賽",
      zh: "運動會壓軸傳統賽事，由歷屆校友、校長、教職員、家長會與在校生攜手傳遞接力棒。"
    },
    {
      term: "綠茵活力環形跑道",
      zh: "高峰國小美麗的跑道，標有 50m、60m、100m、200m 起跑線，供小選手破風馳騁。"
    }
  ],
  synonyms: [
    { word: "高峰國小", aka: ["GFPS", "新竹市高峰國小", "新竹市東區高峰國民小學"] },
    { word: "全球視野", aka: ["Global Vision", "國際理解", "雙語素養"] },
    { word: "友善好品格", aka: ["Friendly", "品格教育", "同理感恩"] },
    { word: "積極正向", aka: ["Positive", "陽光自信", "勇於挑戰"] },
    { word: "永續發展", aka: ["SDGs", "都市森林", "生態保育", "低碳校園"] },
    { word: "玻璃工藝", aka: ["玻璃藝術", "新竹特色工藝", "校本美感課程"] }
  ],
  gradeStory: {
    7: {
      title: "低年級＆幼兒園｜歡樂起跑、親子同樂",
      zh: "幼兒園帶來童趣律動與「小樹苗快快長」親子闖關；一年級演出童趣大會舞並挑戰「歡樂跳跳森友會」；二年級帶來「滾動綠意同心圓」，並在 10:00 站上跑道挑戰 50 公尺迎風跑走！",
      islands: ["s01", "s02", "s05", "s03", "s04", "s06"]
    },
    8: {
      title: "中年級（三四年級）｜個人賽初登場、半圈接力衝刺",
      zh: "三四年級在運動會前完成 60m 與 100m 個人預賽；運動會當天演出「春漾綠律」大會舞，挑戰「森林同舟共濟」與「運轉乾坤傳奇」，並展開每人半圈的班際大隊接力決賽！",
      islands: ["s03", "s02", "s05", "s04", "s01", "s06"]
    },
    9: {
      title: "高年級（五六年級）｜彩扇旗開、200m 與全圈接力霸主",
      zh: "五六年級挑戰 100m 與 200m 高強度個人賽；運動會當天以「旗開得勝」震撼全場，挑戰「勇闖十八尖山」、「高峰薪傳無敵風火輪」與高年級班際大隊接力決賽！",
      islands: ["s02", "s03", "s04", "s05", "s01", "s06"]
    }
  },
  gradeGuide: {
    low: {
      grade: "低年級",
      desc: "以適應環境、歡樂協調與趣味同樂為核心，包含 50 公尺迎風跑走與親子闖關。"
    },
    mid: {
      grade: "中年級",
      desc: "首度站上正規 60m、100m 個人賽事，學習接力傳接棒與遵守道次搶道規則。"
    },
    high: {
      grade: "高年級",
      desc: "挑戰 100m、200m 個人賽極限與全圈大隊接力，發揮卓越領導力與班級團隊精神。"
    }
  },
  tour: [
    { islandId: "s01", title: "第一站：高峰盛典廣場", desc: "在廿二高峰耀動聖火台前集結，見證運動員進場與升旗典禮。" },
    { islandId: "s02", title: "第二站：玻璃藝能綠律島", desc: "欣賞結合新竹在地玻璃工藝美感與森林律動的全校大會舞展演。" },
    { islandId: "s05", title: "第三站：森林智慧探索島", desc: "探索生態趣味競賽，體驗自備環保水壺的低碳補給能量站。" },
    { islandId: "s03", title: "第四站：疾風競速跑道島", desc: "踏上綠茵環形跑道，測試起跑反應，見證個人徑賽破風衝刺！" },
    { islandId: "s04", title: "第五站：薪傳接力競技場", desc: "感受大隊接力與跨世代高峰薪傳賽的交接棒熱血高潮！" },
    { islandId: "s06", title: "第六站：GFPS 榮耀星光島", desc: "登上頒獎台領取專屬金牌證書，引燃全景 3D 勝利煙火！" }
  ],
  travelers: {
    roles: ["coubertin", "brucelee", "chicheng", "owens", "jordan", "yangck"]
  },
  about: {
    source: "新竹市東區高峰國民小學 115 學年度暨 22 週年校慶運動會競賽規程與程序表",
    facts: [
      { k: "大會主題", v: "「森活高峰・廿二璀璨」GFPS: Forest Vitality & Global Powers" },
      { k: "GFPS 願景", v: "Global (全球視野) · Friendly (友善好品格) · Positive (積極正向) · SDGs (永續發展)" },
      { k: "賽前時程", v: "115 年 10 月 20 日至 11 月 12 日（三至六年級 60m/100m/200m 預決賽）" },
      { k: "校慶主日", v: "115 年 11 月 20 日（星期六）08:00–13:50 共 32 項精彩流程" }
    ],
    sections: [
      {
        id: "vision",
        title: "高峰國小學校願景與學生圖像",
        body: [
          "高峰國小創立於民國 93 年 (2004 年)，是一所被十八尖山與高峰植物園綠意環抱的「都市森林小學」。",
          "學校四大核心願景 GFPS：",
          "【Global 全球視野】以素養為導向，連結在地森林與全球永續發展，運用資訊科技開拓國際視野。",
          "【Friendly 友善好品格】以人文關懷為出發，涵養尊重同理與品德實踐，營造溫馨安全的友善校園。",
          "【Positive 積極正向】勇於挑戰自我，培養運動健身習慣，在各項競賽中學習團隊合作與抗挫折力。",
          "【SDGs 永續發展】融合新竹玻璃藝術與校園森林自然生態，實踐綠色低碳行動，守護地球永續未來！"
        ]
      },
      {
        id: "offices",
        title: "大會籌備與工作團隊",
        body: [
          "大會主席與典禮主持：校長室｜典禮與田徑賽事：學務處體育組｜展演與大會舞：教務處教學組｜場地設施與安全：總務處｜愛心志工支援：家長會與愛心志工隊。"
        ]
      }
    ]
  },
  honorKinds: {
    champion: { name: "冠軍金牌", nameEn: "Gold Champion" },
    runnerup: { name: "亞軍銀牌", nameEn: "Silver Runner-up" },
    third: { name: "季軍銅牌", nameEn: "Bronze Third" }
  },
  honorTopics: [
    { id: "relay", name: "大隊接力總錦標" },
    { id: "sprint", name: "個人徑賽飛毛腿" },
    { id: "spirit", name: "運動精神總錦標" }
  ],
  honors: [
    { title: "廿二週年校慶大會精神總錦標", unit: "全校各學年精神優勝班級", year: "115 學年度", topic: "spirit", kind: "champion" },
    { title: "六年級班際大隊接力冠軍", unit: "六年一班", year: "115 學年度", topic: "relay", kind: "champion" },
    { title: "五年級班際大隊接力冠軍", unit: "五年二班", year: "115 學年度", topic: "relay", kind: "champion" },
    { title: "四年級班際大隊接力冠軍", unit: "四年一班", year: "115 學年度", topic: "relay", kind: "champion" },
    { title: "三年級班際大隊接力冠軍", unit: "三年二班", year: "115 學年度", topic: "relay", kind: "champion" },
    { title: "六年級男/女 100m 破紀錄金牌", unit: "六年級短跑健將", year: "115 學年度", topic: "sprint", kind: "champion" },
    { title: "五年級男/女 200m 飛毛腿金牌", unit: "五年級短跑健將", year: "115 學年度", topic: "sprint", kind: "champion" },
    { title: "低碳環保綠意生活示範班級", unit: "全校環保自治隊", year: "115 學年度", topic: "spirit", kind: "champion" }
  ],
  news: [
    { title: "高峰國小 22 週年校慶「森活高峰・廿二璀璨」動態島正式上線！", date: "115.11.07", category: "大會快訊", summary: "全校師生與家長可透過 3D 動態島查閱 32 項精彩程序、賽前英雄榜與闖關領取五力金牌證書。" },
    { title: "三至六年級 60m、100m、200m 個人賽預賽順利完賽！", date: "115.10.29", category: "賽事快訊", summary: "選手於綠茵跑道上全力以赴，各組預賽前八強挺進校慶主日決賽！" },
    { title: "幼兒園與低年級大會舞密集彩排，活力四射萌翻校園！", date: "115.11.02", category: "展演動態", summary: "一二年級學童揮舞繽紛道具，將在校慶當天為大家帶來最精彩的表演！" },
    { title: "愛心志工隊與家長會全面啟動校慶安全維護與補給整備！", date: "115.11.04", category: "後勤支援", summary: "志工夥伴落實低碳環保動線規劃，設置永續自備水壺補給站。" },
    { title: "高年級彩扇旗開得勝大會舞氣勢磅礴，展現高峰學子風采！", date: "115.11.05", category: "展演動態", summary: "五六年級學童動作整齊劃一，力與美交融，震撼全場！" },
    { title: "跨世代「高峰親師薪傳接力賽」號召校友回娘家共襄盛舉！", date: "115.11.06", category: "焦點活動", summary: "歡迎歷屆高峰校友於 11/20 返校同場奔馳，傳承 22 年森林小學情懷！" }
  ],
  // 16 組個人賽事（去識別化名單與標準格式，便於後續由網站或表單匯入更新）
  individualRaces: [
    {
      grade: 3, gender: "男", distance: 60, title: "三年級男生組 60 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "高○峰", cls: "301", time: "9.82", note: "金牌" },
        { rank: 2, lane: 5, name: "林○廷", cls: "302", time: "9.95", note: "銀牌" },
        { rank: 3, lane: 3, name: "陳○恩", cls: "301", time: "10.12", note: "銅牌" },
        { rank: 4, lane: 6, name: "黃○宇", cls: "303", time: "10.28" },
        { rank: 5, lane: 2, name: "張○翔", cls: "302", time: "10.45" },
        { rank: 6, lane: 7, name: "李○睿", cls: "303", time: "10.58" }
      ]
    },
    {
      grade: 3, gender: "女", distance: 60, title: "三年級女生組 60 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "許○晴", cls: "302", time: "10.05", note: "金牌" },
        { rank: 2, lane: 3, name: "吳○萱", cls: "301", time: "10.18", note: "銀牌" },
        { rank: 3, lane: 5, name: "鄭○涵", cls: "303", time: "10.35", note: "銅牌" },
        { rank: 4, lane: 6, name: "劉○妤", cls: "301", time: "10.49" },
        { rank: 5, lane: 2, name: "蔡○希", cls: "302", time: "10.62" },
        { rank: 6, lane: 7, name: "楊○婷", cls: "303", time: "10.78" }
      ]
    },
    {
      grade: 3, gender: "男", distance: 100, title: "三年級男生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "高○峰", cls: "301", time: "16.12", note: "金牌" },
        { rank: 2, lane: 5, name: "林○廷", cls: "302", time: "16.45", note: "銀牌" },
        { rank: 3, lane: 3, name: "趙○銘", cls: "303", time: "16.78", note: "銅牌" },
        { rank: 4, lane: 6, name: "孫○傑", cls: "301", time: "17.02" },
        { rank: 5, lane: 2, name: "周○瑋", cls: "302", time: "17.25" },
        { rank: 6, lane: 7, name: "郭○宏", cls: "303", time: "17.48" }
      ]
    },
    {
      grade: 3, gender: "女", distance: 100, title: "三年級女生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "許○晴", cls: "302", time: "16.55", note: "金牌" },
        { rank: 2, lane: 3, name: "吳○萱", cls: "301", time: "16.82", note: "銀牌" },
        { rank: 3, lane: 5, name: "朱○琳", cls: "303", time: "17.15", note: "銅牌" },
        { rank: 4, lane: 6, name: "潘○茹", cls: "302", time: "17.38" },
        { rank: 5, lane: 2, name: "謝○文", cls: "301", time: "17.62" },
        { rank: 6, lane: 7, name: "韓○芳", cls: "303", time: "17.89" }
      ]
    },
    {
      grade: 4, gender: "男", distance: 60, title: "四年級男生組 60 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "王○凱", cls: "401", time: "9.25", note: "金牌" },
        { rank: 2, lane: 5, name: "葉○佑", cls: "402", time: "9.38", note: "銀牌" },
        { rank: 3, lane: 3, name: "蘇○丞", cls: "403", time: "9.52", note: "銅牌" },
        { rank: 4, lane: 6, name: "莊○豪", cls: "401", time: "9.68" },
        { rank: 5, lane: 2, name: "施○良", cls: "402", time: "9.85" },
        { rank: 6, lane: 7, name: "何○樂", cls: "403", time: "9.98" }
      ]
    },
    {
      grade: 4, gender: "女", distance: 60, title: "四年級女生組 60 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "廖○彤", cls: "402", time: "9.45", note: "金牌" },
        { rank: 2, lane: 3, name: "江○恩", cls: "401", time: "9.62", note: "銀牌" },
        { rank: 3, lane: 5, name: "呂○潔", cls: "403", time: "9.78", note: "銅牌" },
        { rank: 4, lane: 6, name: "范○芸", cls: "402", time: "9.92" },
        { rank: 5, lane: 2, name: "柯○瑄", cls: "401", time: "10.08" },
        { rank: 6, lane: 7, name: "戴○珊", cls: "403", time: "10.25" }
      ]
    },
    {
      grade: 4, gender: "男", distance: 100, title: "四年級男生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "王○凱", cls: "401", time: "15.18", note: "金牌" },
        { rank: 2, lane: 5, name: "葉○佑", cls: "402", time: "15.42", note: "銀牌" },
        { rank: 3, lane: 3, name: "羅○安", cls: "403", time: "15.68", note: "銅牌" },
        { rank: 4, lane: 6, name: "方○華", cls: "401", time: "15.95" },
        { rank: 5, lane: 2, name: "蕭○賢", cls: "402", time: "16.18" },
        { rank: 6, lane: 7, name: "沈○峰", cls: "403", time: "16.42" }
      ]
    },
    {
      grade: 4, gender: "女", distance: 100, title: "四年級女生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "廖○彤", cls: "402", time: "15.52", note: "金牌" },
        { rank: 2, lane: 3, name: "江○恩", cls: "401", time: "15.78", note: "銀牌" },
        { rank: 3, lane: 5, name: "彭○喬", cls: "403", time: "16.05", note: "銅牌" },
        { rank: 4, lane: 6, name: "余○婷", cls: "402", time: "16.32" },
        { rank: 5, lane: 2, name: "陸○晴", cls: "401", time: "16.58" },
        { rank: 6, lane: 7, name: "鐘○慈", cls: "403", time: "16.85" }
      ]
    },
    {
      grade: 5, gender: "男", distance: 100, title: "五年級男生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "杜○承", cls: "501", time: "14.28", note: "金牌" },
        { rank: 2, lane: 5, name: "唐○恩", cls: "502", time: "14.52", note: "銀牌" },
        { rank: 3, lane: 3, name: "顧○豪", cls: "503", time: "14.75", note: "銅牌" },
        { rank: 4, lane: 6, name: "邱○源", cls: "501", time: "14.98" },
        { rank: 5, lane: 2, name: "毛○軒", cls: "502", time: "15.22" },
        { rank: 6, lane: 7, name: "金○洋", cls: "503", time: "15.45" }
      ]
    },
    {
      grade: 5, gender: "女", distance: 100, title: "五年級女生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "石○薇", cls: "502", time: "14.65", note: "金牌" },
        { rank: 2, lane: 3, name: "康○庭", cls: "501", time: "14.88", note: "銀牌" },
        { rank: 3, lane: 5, name: "孟○欣", cls: "503", time: "15.12", note: "銅牌" },
        { rank: 4, lane: 6, name: "魏○恩", cls: "502", time: "15.35" },
        { rank: 5, lane: 2, name: "陶○語", cls: "501", time: "15.58" },
        { rank: 6, lane: 7, name: "嚴○敏", cls: "503", time: "15.82" }
      ]
    },
    {
      grade: 5, gender: "男", distance: 200, title: "五年級男生組 200 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "杜○承", cls: "501", time: "30.15", note: "金牌" },
        { rank: 2, lane: 5, name: "唐○恩", cls: "502", time: "30.68", note: "銀牌" },
        { rank: 3, lane: 3, name: "游○傑", cls: "503", time: "31.22", note: "銅牌" },
        { rank: 4, lane: 6, name: "溫○祥", cls: "501", time: "31.75" },
        { rank: 5, lane: 2, name: "白○皓", cls: "502", time: "32.18" },
        { rank: 6, lane: 7, name: "駱○均", cls: "503", time: "32.65" }
      ]
    },
    {
      grade: 5, gender: "女", distance: 200, title: "五年級女生組 200 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "石○薇", cls: "502", time: "31.25", note: "金牌" },
        { rank: 2, lane: 3, name: "康○庭", cls: "501", time: "31.78", note: "銀牌" },
        { rank: 3, lane: 5, name: "段○羽", cls: "503", time: "32.35", note: "銅牌" },
        { rank: 4, lane: 6, name: "雷○馨", cls: "502", time: "32.88" },
        { rank: 5, lane: 2, name: "湯○儀", cls: "501", time: "33.42" },
        { rank: 6, lane: 7, name: "廉○蓉", cls: "503", time: "33.95" }
      ]
    },
    {
      grade: 6, gender: "男", distance: 100, title: "六年級男生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "簡○威", cls: "601", time: "13.62", note: "金牌" },
        { rank: 2, lane: 5, name: "洪○倫", cls: "602", time: "13.85", note: "銀牌" },
        { rank: 3, lane: 3, name: "崔○耀", cls: "603", time: "14.12", note: "銅牌" },
        { rank: 4, lane: 6, name: "藍○愷", cls: "601", time: "14.35" },
        { rank: 5, lane: 2, name: "韋○霆", cls: "602", time: "14.58" },
        { rank: 6, lane: 7, name: "卜○勝", cls: "603", time: "14.82" }
      ]
    },
    {
      grade: 6, gender: "女", distance: 100, title: "六年級女生組 100 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "童○潔", cls: "602", time: "14.05", note: "金牌" },
        { rank: 2, lane: 3, name: "顏○萱", cls: "601", time: "14.28", note: "銀牌" },
        { rank: 3, lane: 5, name: "成○穎", cls: "603", time: "14.55", note: "銅牌" },
        { rank: 4, lane: 6, name: "梅○茹", cls: "602", time: "14.78" },
        { rank: 5, lane: 2, name: "盛○晴", cls: "601", time: "15.02" },
        { rank: 6, lane: 7, name: "齊○瑤", cls: "603", time: "15.28" }
      ]
    },
    {
      grade: 6, gender: "男", distance: 200, title: "六年級男生組 200 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "簡○威", cls: "601", time: "28.55", note: "金牌" },
        { rank: 2, lane: 5, name: "洪○倫", cls: "602", time: "28.98", note: "銀牌" },
        { rank: 3, lane: 3, name: "莫○鋒", cls: "603", time: "29.45", note: "銅牌" },
        { rank: 4, lane: 6, name: "童○瀚", cls: "601", time: "29.88" },
        { rank: 5, lane: 2, name: "季○霖", cls: "602", time: "30.32" },
        { rank: 6, lane: 7, name: "管○智", cls: "603", time: "30.75" }
      ]
    },
    {
      grade: 6, gender: "女", distance: 200, title: "六年級女生組 200 公尺決賽",
      results: [
        { rank: 1, lane: 4, name: "童○潔", cls: "602", time: "29.65", note: "金牌" },
        { rank: 2, lane: 3, name: "顏○萱", cls: "601", time: "30.12", note: "銀牌" },
        { rank: 3, lane: 5, name: "郁○柔", cls: "603", time: "30.58", note: "銅牌" },
        { rank: 4, lane: 6, name: "包○琪", cls: "602", time: "31.02" },
        { rank: 5, lane: 2, name: "符○瑄", cls: "601", time: "31.45" },
        { rank: 6, lane: 7, name: "甄○芬", cls: "603", time: "31.92" }
      ]
    }
  ]
};

const outPath = path.join(__dirname, 'data.js');
const content = 'module.exports = ' + JSON.stringify(DATA, null, 2) + ';\n';
fs.writeFileSync(outPath, content, 'utf8');
console.log('Successfully generated:', outPath);
