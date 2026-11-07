/**
 * gen-build-script.js
 * 讀取 sports-quest-island/build/build.js，依據高峰國小 22 週年校慶設定進行精準替換，產生 2026 gfps-sports-island/build/build.js
 */
const fs = require('fs');
const path = require('path');

const srcBuildPath = path.join(__dirname, '..', '..', 'sports-quest-island', 'build', 'build.js');
let code = fs.readFileSync(srcBuildPath, 'utf8');

// 1. 替換頂部註解與學生外觀
code = code.replace(
  "// 產生 sports-quest-island/index.html：以大庄 3D 引擎為底，植入「七一大庄、五力飛揚」6 島 19 地標、六道紫色跑道、五力集章護照、32項程序表與3D勝利煙火證書系統",
  "// 產生 2026 gfps-sports-island/index.html：以 3D 引擎為底，植入「森活高峰・廿二璀璨」6 島 19 地標、綠茵活力環形跑道、高峰五力集章護照、32項程序表與3D勝利煙火證書系統"
);
code = code.replace("roles.student.look = '大庄運動服';", "roles.student.look = '高峰森林綠活力運動服';");

// 2. 替換 3D 海水色調為「清爽森林青翠綠 ✕ 翡翠深潭綠」
code = code.replace(
  "uShallow: { value: new THREE.Color(0x7dd3fc) }, uDeep: { value: new THREE.Color(0x0284c7) }",
  "uShallow: { value: new THREE.Color(0x6ee7b7) }, uDeep: { value: new THREE.Color(0x0f766e) }"
);

// 3. 替換 meta 與 title
code = code.replace(
  "<title>奔馳榮耀島・校慶運動大冒險｜大庄國小 71 週年校慶「七一大庄、五力飛揚」</title>",
  "<title>森活高峰島・校慶運動大冒險｜高峰國小 22 週年校慶「森活高峰・廿二璀璨」</title>"
);
code = code.replace(
  "新竹市香山區大庄國民小學「七一大庄、五力飛揚」71 週年校慶運動會 3D 動態島：踏上六道立體紫色橡膠跑道，領取五力集章護照，探索 32 項程序表與賽前個人賽英雄榜，引燃全景 3D 勝利煙火！",
  "新竹市東區高峰國民小學「森活高峰・廿二璀璨」22 週年校慶運動會 3D 動態島：踏上綠茵活力環形跑道，領取高峰五力集章護照，探索 32 項程序表與賽前個人賽英雄榜，引燃全景 3D 勝利煙火！"
);
code = code.replace(
  "奔馳榮耀島・校慶運動大冒險｜大庄國小 71 週年校慶",
  "森活高峰島・校慶運動大冒險｜高峰國小 22 週年校慶"
);

// 4. 替換角色稱號
code = code.replace(
  "const wkWho = { student: ['大庄小選手', 'An athlete'], teacher: ['裁判老師', 'A coach'], parent: ['應援家長', 'A parent'], volunteer: ['校慶志工', 'A volunteer'], scout: ['聖火護衛隊', 'A torch guard'] };",
  "const wkWho = { student: ['高峰小選手', 'An athlete'], teacher: ['裁判老師', 'A coach'], parent: ['應援家長', 'A parent'], volunteer: ['校慶志工', 'A volunteer'], scout: ['森林護衛隊', 'A forest guard'] };"
);

// 5. 替換 loader
code = code.replace(
  '<div class="loader-title" data-en="Da-Chuang 71st · Sports Quest Island">奔馳榮耀島・校慶運動大冒險</div>',
  '<div class="loader-title" data-en="Gao-Feng 22nd · Forest Sports Island">森活高峰島・校慶運動大冒險</div>'
);
code = code.replace(
  '<div id="loader-msg" data-en="Preparing the 6-lane purple track & 5-power arenas…">正在鋪設六道紫色跑道與五力賽場…</div>',
  '<div id="loader-msg" data-en="Preparing the emerald track & forest arenas…">正在鋪設綠茵活力跑道與森林賽場…</div>'
);

// 6. 替換品牌頂部 Header
code = code.replace(
  '<span class="sq-pill-title">奔馳榮耀島</span>',
  '<span class="sq-pill-title">森活高峰島</span>'
);
code = code.replace(
  '<div class="ui-eyebrow" id="ui-brand-eyebrow" data-en="DA-CHUANG 71ST · 6 ARENA ISLES · 32 EVENTS">71 週年校慶 · 6 座五力賽場島 · 32 項程序</div>',
  '<div class="ui-eyebrow" id="ui-brand-eyebrow" data-en="GAO-FENG 22ND · 6 ARENA ISLES · 32 EVENTS">22 週年校慶 · 6 座森林賽場島 · 32 項程序</div>'
);
code = code.replace(
  '<h1 class="ui-brand-title" id="ui-brand-title" data-en="Sports Quest Island">奔馳榮耀島・校慶運動大冒險</h1>',
  '<h1 class="ui-brand-title" id="ui-brand-title" data-en="Forest Sports Island">森活高峰島・校慶運動大冒險</h1>'
);
code = code.replace(
  '<div class="ui-brand-sub" id="ui-brand-sub" data-en="Da-Chuang\'s 71st: Soaring with the Five Powers">七一大庄、五力飛揚｜71 週年校慶運動會</div>',
  '<div class="ui-brand-sub" id="ui-brand-sub" data-en="GFPS 22nd: Forest Vitality & Global Powers">森活高峰・廿二璀璨｜22 週年校慶運動會</div>'
);
code = code.replace(
  `$('ui-brand-eyebrow').textContent = tr('71 週年校慶 · 6 座五力賽場島 · 32 項程序', '71ST ANNIVERSARY · 6 ARENA ISLES · 32 EVENTS');`,
  `$('ui-brand-eyebrow').textContent = tr('22 週年校慶 · 6 座森林賽場島 · 32 項程序', '22ND ANNIVERSARY · 6 ARENA ISLES · 32 EVENTS');`
);

// 7. 替換 tour 歡迎文字與關於
code = code.replace(
  `$('ui-tour-title').textContent = land ? tr('想查看各年級參賽與表演時程？', 'Check your grade schedule?') : tr('歡迎蒞臨「七一大庄・五力飛揚」校慶運動會！', 'Welcome to Da-Chuang 71st Sports Day!');`,
  `$('ui-tour-title').textContent = land ? tr('想查看各年級參賽與表演時程？', 'Check your grade schedule?') : tr('歡迎蒞臨「森活高峰・廿二璀璨」校慶運動會！', 'Welcome to Gao-Feng 22nd Sports Day!');`
);
code = code.replace(
  `$('ui-tour-text').textContent = tr('全場共 6 座五力主題賽場島（含六道立體紫色橡膠跑道與 32 項程序）。按「依年級看賽程」可查低、中、高年級參賽項目，或播放「運動會全覽」，並點選上方「五力集章護照」闖關領取金牌證書！', 'Explore 6 Five-Power Sports Day arena isles with the 6-lane purple track and 32 program events. Check schedules by grade, watch the guided tour, or complete the 5-Power Quest Passport!');`,
  `$('ui-tour-text').textContent = tr('全場共 6 座森林主題賽場島（含綠茵活力跑道與 32 項程序）。按「依年級看賽程」可查低、中、高年級參賽項目，或播放「運動會全覽」，並點選上方「五力集章護照」闖關領取金牌證書！', 'Explore 6 Forest Sports Day arena isles with the emerald running track and 32 program events. Check schedules by grade, watch the guided tour, or complete the 5-Power Quest Passport!');`
);

code = code.replace(
  "依據：新竹市香山區大庄國小 115 學年度暨 71 週年校慶運動會程序表與競賽規程・本站為教學展示，非學校官方網站。",
  "依據：新竹市東區高峰國小 115 學年度暨 22 週年校慶運動會程序表與競賽規程・本站為校慶 3D 動態互動島。"
);
code = code.replace(
  "【學校願景】大庄三大核心基石：感恩、學習、健康（課程願景：友善關懷、學習探索、健康樂活），培育「道德力、知識力、美感力、體能力、群體力」五力均備之新世紀優質公民！【校訂課程三大主軸】W 庄進自強～超越自己（學習探索・閱讀奠基知識力）、I 庄園窯啊餚～樂活成長（友善關懷・柴燒窯與可食植物實踐道德與體能力）、N 康庄鐵道行～藝術小旅行（健康樂活・鐵道鄉土美學策展）。",
  "【學校願景】高峰四大願景 GFPS：Global (全球視野)、Friendly (友善好品格)、Positive (積極正向)、SDGs (永續發展)，培育五力均備之新世紀優質公民！【特色主軸】都市森林自然生態、新竹在地玻璃工藝藝術與雙語國際視野。"
);
code = code.replace(
  "每座六角島代表大庄國小 71 週年校慶「七一大庄、五力飛揚」的一大主題賽區（包含六道立體紫色橡膠跑道、風起律動舞台、趣味競賽嘉年華、大隊接力競技場與金銀銅頒獎台）。6 位世界運動傳奇巨星（古柏坦、李小龍、紀政、歐文斯、喬丹、楊傳廣）擔任駐島運動導師，引領小選手挑戰 19 座地標建築關卡與五力印章！",
  "每座六角島代表高峰國小 22 週年校慶「森活高峰・廿二璀璨」的一大主題賽區（包含綠茵活力環形跑道、玻璃藝能大舞台、生態趣味探索島、薪傳接力競技場與金銀銅頒獎台）。6 位世界運動傳奇巨星（古柏坦、李小龍、紀政、歐文斯、喬丹、楊傳廣）擔任駐島運動導師，引領小健將挑戰 19 座建築關卡與五力印章！"
);
code = code.replace(
  "「故事設定」：6 位運動傳奇巨星島主與賽場間奔馳的小選手動線為趣味故事元素；32 項節目時間、個人賽與大隊接力規則皆依據大庄國小 71 週年校慶運動會正式程序表與競賽規程。",
  "「故事設定」：6 位運動傳奇巨星島主與賽場間奔馳的小健將動線為趣味故事元素；32 項節目時間、個人賽與大隊接力規則皆依據高峰國小 22 週年校慶運動會正式程序表與競賽規程。"
);

// 8. 替換 Dialogs (選手設定、程序表、戰報)
code = code.replace(
  '<span class="sq-dlg-kicker">新竹市香山區大庄國小 71 週年校慶運動會</span>',
  '<span class="sq-dlg-kicker">新竹市東區高峰國小 22 週年校慶運動會</span>'
);
code = code.replace(
  '<span>傳承難度：薪傳蓄力連擊、校史榮耀考驗、重溫大庄 71 年風華！</span>',
  '<span>傳承難度：薪傳蓄力連擊、校史榮耀考驗、重溫高峰 22 年風華！</span>'
);
code = code.replace(
  '<span class="sq-dlg-kicker">Da-Chuang\'s 71st: Soaring with the Five Powers</span>',
  '<span class="sq-dlg-kicker">GFPS 22nd: Forest Vitality & Global Powers</span>'
);
code = code.replace(
  '<h2 class="sq-dlg-title" id="sq-sched-title">📅 「七一大庄、五力飛揚」校慶運動會程序表＆競賽規程</h2>',
  '<h2 class="sq-dlg-title" id="sq-sched-title">📅 「森活高峰・廿二璀璨」校慶運動會程序表＆競賽規程</h2>'
);
code = code.replace('<th>大庄五力</th>', '<th>高峰五力</th>');
code = code.replace(
  '<strong>📌 71 週年校慶運動會競賽規程重點（比賽時間：115 年 10 月 21 日至 12 月 12 日）：</strong><br>',
  '<strong>📌 22 週年校慶運動會競賽規程重點（比賽時間：115 年 10 月 20 日至 11 月 20 日）：</strong><br>'
);

// 9. 替換預設選手名稱與提示
code = code.replace(
  "state.name = (nameInput.value || '').trim() || '大庄小健將';",
  "state.name = (nameInput.value || '').trim() || '高峰小健將';"
);
code = code.replace(
  "reactEvaluator: (rt) => '🏅 薪傳領跑！在第 ' + rt + ' 秒接棒衝刺，傳承大庄七一風華！'",
  "reactEvaluator: (rt) => '🏅 薪傳領跑！在第 ' + rt + ' 秒接棒衝刺，傳承高峰廿二風華！'"
);
code = code.replace(
  '🔥 <strong>高年級破風手挑戰：</strong>無提示！請運用你對大庄校慶賽程與運動常識的實力作答！',
  '🔥 <strong>高年級破風手挑戰：</strong>無提示！請運用你對高峰校慶賽程與運動常識的實力作答！'
);
code = code.replace(
  '🏅 <strong>校友薪傳記憶：</strong>71 年傳承風華，此項活動承載大庄校史與溫馨回憶！',
  '🏅 <strong>校友薪傳記憶：</strong>22 年傳承風華，此項活動承載高峰校史與溫馨回憶！'
);

// 10. 替換證書文字與下載檔名
code = code.replace(
  "c.fillText('新竹市香山區大庄國民小學 71 週年校慶運動會', W / 2, 115);",
  "c.fillText('新竹市東區高峰國民小學 22 週年校慶運動會', W / 2, 115);"
);
code = code.replace(
  "c.fillText(\"Da-Chuang's 71st Anniversary: Soaring with the Five Powers\", W / 2, 225);",
  "c.fillText(\"Gao-Feng 22nd Anniversary: Global · Friendly · Positive · SDGs\", W / 2, 225);"
);
code = code.replace(
  "const playerName = state.name || '大庄運動小健將';",
  "const playerName = state.name || '高峰運動小健將';"
);
code = code.replace(
  "c.fillText('於大庄國小「七一大庄、五力飛揚」3D 動態運動會島嶼探險中，', W / 2, 445);",
  "c.fillText('於高峰國小「森活高峰・廿二璀璨」3D 動態運動會島嶼探險中，', W / 2, 445);"
);
code = code.replace(
  "? '🎉 <strong>太棒了！你已集滿全部 5 枚大庄五力印章！</strong>中央「七一耀動聖火台」已為你點燃 3D 勝利煙火，你可以直接截圖或點擊下方按鈕下載證書保存！'",
  "? '🎉 <strong>太棒了！你已集滿全部 5 枚高峰五力印章！</strong>中央「廿二高峰耀動聖火台」已為你點燃 3D 勝利煙火，你可以直接截圖或點擊下方按鈕下載證書保存！'"
);
code = code.replace(
  "a.download = '大庄國小71週年校慶_五力金牌證書_' + (state.name || '運動健將') + '.png';",
  "a.download = '高峰國小22週年校慶_五力金牌證書_' + (state.name || '運動健將') + '.png';"
);

// 11. 替換大庄特定詞彙剩餘項
code = code.replace(/大庄/g, '高峰');
code = code.replace(/七一/g, '廿二');
code = code.replace(/71/g, '22');

const outBuildPath = path.join(__dirname, 'build.js');
fs.writeFileSync(outBuildPath, code, 'utf8');
console.log('Successfully generated:', outBuildPath);
