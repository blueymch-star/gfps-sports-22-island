# AGENTS.md — 新竹市東區高峰國小 22 週年校慶運動會「森活高峰・廿二璀璨」3D 動態島

本文件是給後續接手或協作的 AI Agent 與開發者的核心指引與架構說明。

---

## 1. 專案背景與學校資訊

- **學校全稱**：新竹市東區高峰國民小學（Gao-Feng Primary School, GFPS）
- **校慶屆數**：22 週年校慶（民國 93 年 / 2004 年創校，2026 年逢 22 週年）
- **校慶主題**：「森活高峰・廿二璀璨」
- **學校特色**：都市森林小學（緊鄰十八尖山、高峰植物園與新竹科學園區，推展生態環境教育、新竹在地玻璃工藝特色與雙語科技教育）
- **四大願景 (GFPS)**：
  - **G - Global vision（全球視野）**：素養導向、雙語科技、國際永續。
  - **F - Friendly（友善好品格）**：品德實踐、同理感恩、溫馨關懷。
  - **P - Positive（積極正向）**：勇於挑戰、運動強身、樂觀自信。
  - **S - SDGs（永續發展）**：森林自然生態、低碳環保、永續未來。
- **代表角色**：高峰小健將、裁判老師、應援家長、校慶志工、森林護衛隊。

---

## 2. 專案架構

```
2026 gfps-sports-island/
├── index.html                 # 編譯完成之單一檔 3D 動態島（由 build/build.js 產生）
├── server.py                  # 本地靜態 HTTP 測試伺服器 (埠號 8080)
├── vercel.json                # Vercel 雲端靜態託管路由設定
├── .gitignore                 # Git 忽略設定
├── AGENTS.md                  # 本文件（Agent 核心規則與架構手冊）
├── ANTIGRAVITY.md             # 指向 AGENTS.md 的快速指引
├── README.md                  # 專案介紹與本地預覽啟動說明
├── handoff.md                 # 專案交接與進度備忘錄
├── vendor/                    # 本地端 Three.js 核心與外掛模組 (純本機脫機支援)
│   ├── three.module.min.js
│   ├── OrbitControls.js
│   ├── RoundedBoxGeometry.js
│   ├── SimplexNoise.js
│   ├── CSS2DRenderer.js
│   └── BufferGeometryUtils.js
└── build/                     # 建置腳本與核心資料定義
    ├── config.js              # 學校名稱、屆數、主題與預設時程設定
    ├── data.js                # 6座島嶼、19座地標、5力闖關、32項程序表、賽前成績
    ├── models.js              # 10 款客製 3D 模型建構器（聖火台、跑道、看台、接力棒等）
    ├── build.js               # 編譯器（整合 dazhuang-island 引擎與 GFPS 專屬設定）
    ├── check.js               # 語法健康檢測腳本
    └── gen-data.js            # 資料產生器輔助腳本
```

---

## 3. 六座主題賽場島嶼 (6 Arena Isles)

1. **`s01` 高峰盛典廣場 (Gao-Feng Gala Plaza)**
   - 島主：古柏坦（現代奧運之父）
   - 地標：廿二高峰耀動聖火台、高峰迎賓彩虹拱門、大會司令升旗台、校長大會致詞與表揚台
   - 核心關卡：【品格力試煉】友善好品格 Friendly 印章
2. **`s02` 玻璃藝能綠律島 (Glass & Eco-Art Isle)**
   - 島主：李小龍（武道律動傳奇）
   - 地標：玻璃工藝與美感展演舞台、扇彩飄逸・高峰大會舞區、森林生態之聲・樂旗表演角
   - 核心關卡：【美感力試煉】玻璃美感力 Aesthetics 印章
3. **`s03` 疾風競速跑道島 (Emerald Sprint Speedway)**
   - 島主：紀政（飛躍的羚羊）
   - 地標：綠茵環形跑道・起跑發令台、疾風衝刺終點計時線、選手檢錄與熱身加油棚
   - 核心關卡：【體能力試煉】峰湧體能力 Vitality 印章
4. **`s04` 薪傳接力競技場 (Legacy Relay Arena)**
   - 島主：傑西・歐文斯（奧運接力四金傳奇）
   - 地標：森林黃金接力交接棒區、大隊接力競賽看台、高峰親師校友薪傳賽起點
   - 核心關卡：【群體力試煉】高峰群體力 Positive 印章
5. **`s05` 森林智慧探索島 (Eco-Inquiry & Forest Wonder Isle)**
   - 島主：麥可・喬丹（飛人傳奇）
   - 地標：植物園生態趣味探索區、低碳環保・永續補給能量站、智慧探索闖關公告亭
   - 核心關卡：【永續力試煉】全球永續力 Global & SDGs 印章
6. **`s06` GFPS 榮耀星光島 (GFPS Global Starlight Isle)**
   - 島主：楊傳廣（亞洲鐵人）
   - 地標：高峰星光金牌頒獎台、廿二週年大會總錦標授旗台、大會賽況即時電子公報欄
   - 終局成就：引燃全景 3D 勝利煙火、產生專屬「五力榮譽金牌證書」

---

## 4. 關鍵互動功能與技術實現

1. **隨機挑戰與選項亂序 (Anti-Memorization & Fair Play)**：
   - 題目選項採用 Fisher-Yates 動態洗牌演算法，答案不再固定於首項。
   - 步驟排序按鈕在渲染時採用隨機打散布局，附帶錯誤震動動畫（CSS shake）。
2. **五力集章護照與金牌證書 (Passport & Canvas Certificate)**：
   - HTML5 Canvas 動態產生 1200×675 高解析度金牌榮譽證書，包含運動員姓名、校名、廿二週年徽章與驗證章。
   - 集滿 5 章即刻引燃中央「廿二高峰耀動聖火台」全景 3D 物理粒子勝利煙火。
3. **響應式頂部動態島與手機版防遮擋**：
   - 支援收合式膠囊與展開式毛玻璃面板切換。
   - 彈出對話框採用 `100svh` 與 `env(safe-area-inset-top)`，頂部預留 56px 安全避讓距，徹底避免手機瀏覽器網址列遮擋卡片關閉按鈕。
4. **選手去識別化 (Privacy Protection)**：
   - 選手個人姓名預設採用遮罩（例如 `高○峰`、`林○廷`），落實個資保護合規。

---

## 5. 常見開發指令

- **編譯 HTML**：
  ```bash
  node build/build.js
  ```
- **檢查語法完整性**：
  ```bash
  node build/check.js
  ```
- **本地預覽伺服器**：
  ```bash
  python server.py
  # 開啟瀏覽器訪問 http://localhost:8080
  ```
