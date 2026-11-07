# handoff.md — 專案進度與交接備忘錄

## 📅 交接日期：2026-11-07

### 🎯 專案名稱
- **專案資料夾**：`2026 gfps-sports-island`
- **學校全稱**：新竹市東區高峰國民小學（高峰國小 / GFPS）
- **校慶週年**：22 週年（民國 93 年創校，2026 年逢 22 週年）
- **大會標語**：「森活高峰・廿二璀璨」

---

### ✅ 本次完成事項

1. **專案架構建立與相依檔案複製**：
   - 建立專案目錄 `2026 gfps-sports-island`。
   - 複製本地端 Three.js 核心與外掛模組 (`vendor/`)，確保離線與單機正常運作。
   - 建立 `.gitignore`、`server.py`、`vercel.json` 與 `build/models.js`。
2. **核心資料客製 (`build/data.js` & `build/config.js`)**：
   - 設定高峰國小 GFPS 四大核心願景（Global, Friendly, Positive, SDGs）與都市森林小學意象。
   - 規劃 6 座主題賽場島嶼（高峰盛典廣場、玻璃藝能綠律島、疾風競速跑道島、薪傳接力競技場、森林智慧探索島、GFPS 榮耀星光島）。
   - 配置 19 座 3D 建築地標及其專屬互動挑戰（包含點擊蓄力 `tap_charge`、步驟排序 `sequence`、起跑反應 `reaction`）。
   - 設定高峰五力集章護照（友善品格力、玻璃美感力、峰湧體能力、高峰群體力、全球永續力）。
   - 配置 32 項大會程序表與 16 組去識別化個人徑賽預決賽榜單樣板。
3. **編譯器與單一 HTML 輸出 (`build/build.js` -> `index.html`)**：
   - 編譯產生完整單檔 `index.html`（647 KB）。
   - 包含所有最新體驗升級：Fisher-Yates 題目隨機選項打亂、步驟隨機打散、手機版網址列避讓（56px 安全頂距）、全景 3D 勝利煙火、Canvas 證書生成器、角色難度提示等。
4. **驗證與文件規範**：
   - 透過 `build/check.js` 驗證所有 JavaScript（Classic Script 與 ES Module）語法 100% 正確。
   - 建立標準指引文件：[AGENTS.md](file:///c:/Users/User/Documents/2026%20AGY/2026%20gfps-sports-island/AGENTS.md)、[ANTIGRAVITY.md](file:///c:/Users/User/Documents/2026%20AGY/2026%20gfps-sports-island/ANTIGRAVITY.md)、[README.md](file:///c:/Users/User/Documents/2026%20AGY/2026%20gfps-sports-island/README.md)、[handoff.md](file:///c:/Users/User/Documents/2026%20AGY/2026%20gfps-sports-island/handoff.md)。

---

### 🔜 後續可擴充項目

1. **依據學校實際發布賽程微調**：
   - 待高峰國小官方公告 22 週年校慶實際賽程表與個人賽各班道次成績時，可直接替換 `build/data.js` 中的 `programSchedule` 與 `individualRaces`，並重新執行 `node build/build.js`。
2. **儲存庫與部署**：
   - 目前專案維持本機 Git 管理，使用者隨時需要時可透過 GitHub CLI (`gh repo create`) 推送並設定 Vercel 自動部署。
