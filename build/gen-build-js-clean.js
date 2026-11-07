const fs = require('fs');
const path = require('path');

const srcBuildPath = path.join(__dirname, '..', '..', 'sports-quest-island', 'build', 'build.js');
const raw = fs.readFileSync(srcBuildPath, 'utf8');

// Find boundary where customStyles starts
const splitMarker = 'const customStyles = `';
const parts = raw.split(splitMarker);
if (parts.length !== 2) {
  throw new Error('無法定位 splitMarker: ' + splitMarker);
}

let part1 = parts[0];
let part2 = splitMarker + parts[1];

// ---- Process Part 1 (Only replace replacement strings, never the match targets) ----
part1 = part1.replace(
  "// 產生 sports-quest-island/index.html：以大庄 3D 引擎為底，植入「七一大庄、五力飛揚」6 島 19 地標、六道紫色跑道、五力集章護照、32項程序表與3D勝利煙火證書系統",
  "// 產生 2026 gfps-sports-island/index.html：以 3D 引擎為底，植入「森活高峰・廿二璀璨」6 島 19 地標、綠茵活力跑道、高峰五力集章護照、32項程序表與3D勝利煙火證書系統"
);
part1 = part1.replace("roles.student.look = '大庄運動服';", "roles.student.look = '高峰森林綠活力運動服';");

part1 = part1.replace(
  "uShallow: { value: new THREE.Color(0x7dd3fc) }, uDeep: { value: new THREE.Color(0x0284c7) }",
  "uShallow: { value: new THREE.Color(0x6ee7b7) }, uDeep: { value: new THREE.Color(0x0f766e) }"
);

part1 = part1.replace(
  "rep('<title>大庄．窯海島</title>', '<title>奔馳榮耀島・校慶運動大冒險｜大庄國小 71 週年校慶「七一大庄、五力飛揚」</title>');",
  "rep('<title>大庄．窯海島</title>', '<title>森活高峰島・校慶運動大冒險｜高峰國小 22 週年校慶「森活高峰・廿二璀璨」</title>');"
);

part1 = part1.replace(
  "新竹市香山區大庄國民小學「七一大庄、五力飛揚」71 週年校慶運動會 3D 動態島：踏上六道立體紫色橡膠跑道，領取五力集章護照，探索 32 項程序表與賽前個人賽英雄榜，引燃全景 3D 勝利煙火！",
  "新竹市東區高峰國民小學「森活高峰・廿二璀璨」22 週年校慶運動會 3D 動態島：踏上綠茵活力環形跑道，領取高峰五力集章護照，探索 32 項程序表與賽前個人賽英雄榜，引燃全景 3D 勝利煙火！"
);

part1 = part1.replace(
  "奔馳榮耀島・校慶運動大冒險｜大庄國小 71 週年校慶",
  "森活高峰島・校慶運動大冒險｜高峰國小 22 週年校慶"
);

part1 = part1.replace(
  "const wkWho = { student: ['大庄小選手', 'An athlete'], teacher: ['裁判老師', 'A coach'], parent: ['應援家長', 'A parent'], volunteer: ['校慶志工', 'A volunteer'], scout: ['聖火護衛隊', 'A torch guard'] };",
  "const wkWho = { student: ['高峰小選手', 'An athlete'], teacher: ['裁判老師', 'A coach'], parent: ['應援家長', 'A parent'], volunteer: ['校慶志工', 'A volunteer'], scout: ['森林護衛隊', 'A forest guard'] };"
);

part1 = part1.replace(
  '<div class="loader-title" data-en="Da-Chuang 71st · Sports Quest Island">奔馳榮耀島・校慶運動大冒險</div>',
  '<div class="loader-title" data-en="Gao-Feng 22nd · Forest Sports Island">森活高峰島・校慶運動大冒險</div>'
);

part1 = part1.replace(
  '<div id="loader-msg" data-en="Preparing the 6-lane purple track & 5-power arenas…">正在鋪設六道紫色跑道與五力賽場…</div>',
  '<div id="loader-msg" data-en="Preparing the emerald track & forest arenas…">正在鋪設綠茵活力跑道與森林賽場…</div>'
);

// 頂部膠囊與品牌卡
part1 = part1.replace(
  '<span class="sq-pill-title">奔馳榮耀島</span>',
  '<span class="sq-pill-title">森活高峰島</span>'
);
part1 = part1.replace(
  '<div class="ui-eyebrow" id="ui-brand-eyebrow" data-en="DA-CHUANG 71ST · 6 ARENA ISLES · 32 EVENTS">71 週年校慶 · 6 座五力賽場島 · 32 項程序</div>',
  '<div class="ui-eyebrow" id="ui-brand-eyebrow" data-en="GAO-FENG 22ND · 6 ARENA ISLES · 32 EVENTS">22 週年校慶 · 6 座森林賽場島 · 32 項程序</div>'
);
part1 = part1.replace(
  '<h1 class="ui-brand-title" id="ui-brand-title" data-en="Sports Quest Island">奔馳榮耀島・校慶運動大冒險</h1>',
  '<h1 class="ui-brand-title" id="ui-brand-title" data-en="Forest Sports Island">森活高峰島・校慶運動大冒險</h1>'
);
part1 = part1.replace(
  '<div class="ui-brand-sub" id="ui-brand-sub" data-en="Da-Chuang\'s 71st: Soaring with the Five Powers">七一大庄、五力飛揚｜71 週年校慶運動會</div>',
  '<div class="ui-brand-sub" id="ui-brand-sub" data-en="GFPS 22nd: Forest Vitality & Global Powers">森活高峰・廿二璀璨｜22 週年校慶運動會</div>'
);
part1 = part1.replace(
  `$('ui-brand-eyebrow').textContent = tr('71 週年校慶 · 6 座五力賽場島 · 32 項程序', '71ST ANNIVERSARY · 6 ARENA ISLES · 32 EVENTS');`,
  `$('ui-brand-eyebrow').textContent = tr('22 週年校慶 · 6 座森林賽場島 · 32 項程序', '22ND ANNIVERSARY · 6 ARENA ISLES · 32 EVENTS');`
);

part1 = part1.replace(
  `$('ui-tour-title').textContent = land ? tr('想查看各年級參賽與表演時程？', 'Check your grade schedule?') : tr('歡迎蒞臨「七一大庄・五力飛揚」校慶運動會！', 'Welcome to Da-Chuang 71st Sports Day!');`,
  `$('ui-tour-title').textContent = land ? tr('想查看各年級參賽與表演時程？', 'Check your grade schedule?') : tr('歡迎蒞臨「森活高峰・廿二璀璨」校慶運動會！', 'Welcome to Gao-Feng 22nd Sports Day!');`
);

part1 = part1.replace(
  `$('ui-tour-text').textContent = tr('全場共 6 座五力主題賽場島（含六道立體紫色橡膠跑道與 32 項程序）。按「依年級看賽程」可查低、中、高年級參賽項目，或播放「運動會全覽」，並點選上方「五力集章護照」闖關領取金牌證書！', 'Explore 6 Five-Power Sports Day arena isles with the 6-lane purple track and 32 program events. Check schedules by grade, watch the guided tour, or complete the 5-Power Quest Passport!');`,
  `$('ui-tour-text').textContent = tr('全場共 6 座森林主題賽場島（含綠茵活力環形跑道與 32 項程序）。按「依年級看賽程」可查低、中、高年級參賽項目，或播放「運動會全覽」，並點選上方「五力集章護照」闖關領取金牌證書！', 'Explore 6 Forest Sports Day arena isles with the emerald running track and 32 program events. Check schedules by grade, watch the guided tour, or complete the 5-Power Quest Passport!');`
);

part1 = part1.replace(
  "依據：新竹市香山區大庄國小 115 學年度暨 71 週年校慶運動會程序表與競賽規程・本站為 3D 互動導覽展示。",
  "依據：新竹市東區高峰國小 115 學年度暨 22 週年校慶運動會程序表與競賽規程・本站為 3D 互動導覽展示。"
);

part1 = part1.replace(
  "tr('6 位世界運動傳奇巨星（古柏坦、李小龍、紀政、歐文斯、喬丹、楊傳廣）擔任各島島主，帶領大庄親師生在賽場間傳遞聖火與賽事裝備！', 'Six sports legends lead Dazhuang athletes and families across the six Sports Day arenas.')",
  "tr('6 位世界運動傳奇巨星（古柏坦、李小龍、紀政、歐文斯、喬丹、楊傳廣）擔任各島島主，帶領高峰親師生在賽場間傳遞聖火與賽事裝備！', 'Six sports legends lead Gao-Feng athletes and families across the six Sports Day arenas.')"
);

part1 = part1.replace(
  "role && role.ancient ? tr('運動傳奇巨星', 'SPORTS LEGEND') : tr('大庄親師生選手', 'DAZHUANG ATHLETE')",
  "role && role.ancient ? tr('運動傳奇巨星', 'SPORTS LEGEND') : tr('高峰親師生選手', 'GAO-FENG ATHLETE')"
);

part1 = part1.replace(
  "role && role.ancient ? (host ? tr(`「${host.name}」的駐島運動傳奇巨星（${role.look || ''}），正帶領大庄親師生傳遞運動會聖火與賽事裝備！`, `Sports Legend host of ${host.nameEn || host.name}, leading Dazhuang athletes across the arena!`) : tr('受邀蒞臨大庄 71 週年校慶的運動傳奇巨星，為小選手們加油助陣！', 'A sports legend visiting Da-Chuang 71st Sports Day!')) : tr('跟著運動傳奇巨星一起在賽場間奔馳傳遞的大庄小選手、老師、應援家長與志工夥伴！', 'Dazhuang athletes, teachers, parents and volunteers on the Sports Day arena!')",
  "role && role.ancient ? (host ? tr(`「${host.name}」的駐島運動傳奇巨星（${role.look || ''}），正帶領高峰親師生傳遞運動會聖火與賽事裝備！`, `Sports Legend host of ${host.nameEn || host.name}, leading Gao-Feng athletes across the arena!`) : tr('受邀蒞臨高峰 22 週年校慶的運動傳奇巨星，為小選手們加油助陣！', 'A sports legend visiting Gao-Feng 22nd Sports Day!')) : tr('跟著運動傳奇巨星一起在賽場間奔馳傳遞的高峰小選手、老師、應援家長與志工夥伴！', 'Gao-Feng athletes, teachers, parents and volunteers on the Sports Day arena!')"
);

part1 = part1.replace(
  "tr('【學校願景】大庄三大核心基石：感恩、學習、健康（課程願景：友善關懷、學習探索、健康樂活），培育「道德力、知識力、美感力、體能力、群體力」五力均備之新世紀優質公民！【校訂課程三大主軸】W 庄進自強～超越自己、I 庄園窯啊餚～樂活成長、N 康庄鐵道行～藝術小旅行。', '“School Vision” follows Dazhuang ES official foundation: Gratitude, Learning, Health (Care, Inquiry, Vitality), building students with all Five Powers. Curriculum WIN: W Self-improvement, I Kiln & Growth, N Railway & Art.')",
  "tr('【學校願景】高峰四大願景 GFPS：Global (全球視野)、Friendly (友善好品格)、Positive (積極正向)、SDGs (永續發展)，培育五力均備之新世紀優質公民！【特色主軸】都市森林自然生態、新竹在地玻璃工藝藝術與雙語國際視野。', '“School Vision” follows Gao-Feng PS official foundation: Global, Friendly, Positive, SDGs, building students with all Five Powers.')"
);

part1 = part1.replace(
  "rep('<h2 id=\"ui-help-title\" data-en=\"Fourteen isles, one school year\">十四座島，一整個大庄學年</h2>', '<h2 id=\"ui-help-title\" data-en=\"Six Arena Isles, One Glorious Sports Day\">六座五力賽場島，一場熱血的 71 週年校慶運動會</h2>');",
  "rep('<h2 id=\"ui-help-title\" data-en=\"Fourteen isles, one school year\">十四座島，一整個大庄學年</h2>', '<h2 id=\"ui-help-title\" data-en=\"Six Arena Isles, One Glorious Sports Day\">六座森林賽場島，一場熱血的 22 週年校慶運動會</h2>');"
);

part1 = part1.replace(
  "每座六角島代表大庄國小 71 週年校慶「七一大庄、五力飛揚」的一大主題賽區（包含六道立體紫色橡膠跑道、風起律動舞台、趣味競賽嘉年華、大隊接力競技場與金銀銅頒獎台）。6 位世界運動傳奇巨星（古柏坦、李小龍、紀政、歐文斯、喬丹、楊傳廣）擔任駐島島主，帶著大庄小選手、裁判老師、應援家長、校慶志工與聖火護衛隊在賽場間奔馳！",
  "每座六角島代表高峰國小 22 週年校慶「森活高峰・廿二璀璨」的一大主題賽區（包含綠茵活力環形跑道、玻璃藝能大舞台、生態趣味探索島、薪傳接力競技場與金銀銅頒獎台）。6 位世界運動傳奇巨星（古柏坦、李小龍、紀政、歐文斯、喬丹、楊傳廣）擔任駐島島主，帶著高峰小選手、裁判老師、應援家長、校慶志工與森林護衛隊在賽場間奔馳！"
);

part1 = part1.replace(
  "「故事設定」：6 位運動傳奇巨星島主與賽場間奔馳的小選手動線為趣味故事元素；32 項節目時間、個人賽與大隊接力規則皆依據大庄國小 71 週年校慶運動會正式程序表與競賽規程。",
  "「故事設定」：6 位運動傳奇巨星島主與賽場間奔馳的小健將動線為趣味故事元素；32 項節目時間、個人賽與大隊接力規則皆依據高峰國小 22 週年校慶運動會正式程序表與競賽規程。"
);

// 清理基底模板其餘殘留的「大庄」字樣與連結
part1 = part1.replace(
  '<meta property="og:description" content="香山海風吹過柴窯與射箭場：點一座島，看懂大庄孩子六年的學習旅程。">',
  '<meta property="og:description" content="綠意森林環抱活力跑道：點選一座島，探索新竹市高峰國小 22 週年校慶運動會 32 項精彩節目與賽前戰報！">'
);
part1 = part1.replace(
  '<div class="ui-eyebrow" data-en="DAZHUANG WIN">大庄三大主軸</div>',
  '<div class="ui-eyebrow" data-en="GFPS CORE VISIONS">高峰四大核心願景 GFPS</div>'
);
part1 = part1.replace(
  'aria-label="關閉關於大庄" data-en-label="Close about Dazhuang"',
  'aria-label="關閉大會簡介" data-en-label="Close about Sports Day"'
);
part1 = part1.replace(
  'aria-label="關於大庄分頁" data-en-label="About tabs"',
  'aria-label="大會簡介分頁" data-en-label="About tabs"'
);
part1 = part1.replace(
  '<h2 id="ui-about-title" data-en="Dazhuang Elementary School, Hsinchu">新竹市香山區大庄國民小學</h2>',
  '<h2 id="ui-about-title" data-en="Gao-Feng Primary School, Hsinchu">新竹市東區高峰國民小學</h2>'
);
part1 = part1.replace(
  "encodeURIComponent('大庄國小')",
  "encodeURIComponent('高峰國小')"
);
part1 = part1.replace(
  "tr('關於大庄', 'About Dazhuang')",
  "tr('大會簡介', 'About Sports Day')",
  true
);
part1 = part1.replace(
  "tr('資料來源：大庄國小官網', 'Source: Dazhuang ES website')",
  "tr('資料來源：高峰國小 22 週年校慶程序表與競賽規程', 'Source: Gao-Feng PS 22nd Sports Day Program & Rules')"
);
part1 = part1.replace(
  "tr('本站為教學展示，非學校官方網站。資料來源：大庄國小 公開課程資訊與校園新聞、新竹市教育新聞網。', 'A teaching demo, not the official website. Sources: Dazhuang ES curriculum info, Hsinchu City Education News.')",
  "tr('本站為新竹市高峰國小 22 週年校慶運動會 3D 動態互動島。資料來源：高峰國小校慶籌備大會程序表與競賽規程。', 'Sports Day 3D interactive island for Gao-Feng PS 22nd Anniversary.')"
);
part1 = part1.replace(
  "tr(`${all.length} 島全部集滿！謝謝你走完大庄學年。`, `All ${all.length} isles stamped! Thanks for walking through Dazhuang’s school year.`)",
  "tr(`${all.length} 島全部集滿！恭喜完成高峰 22 週年校慶動態島大冒險！`, `All ${all.length} isles stamped! Congratulations on completing Gao-Feng 22nd Sports Day adventure!`)"
);
part1 = part1.replace(
  "tr('大庄夥伴', 'Dazhuang crew')",
  "tr('高峰小健將與親師', 'Gao-Feng athlete & crew')",
  true
);

// ---- Process Part 2 (All injected HTML, CSS, JS) ----
part2 = part2.replace(/新竹市香山區大庄國民小學 71 週年校慶運動會/g, '新竹市東區高峰國民小學 22 週年校慶運動會');
part2 = part2.replace(/新竹市香山區大庄國小 71 週年校慶運動會/g, '新竹市東區高峰國小 22 週年校慶運動會');
part2 = part2.replace(/大庄國小 71 週年校慶/g, '高峰國小 22 週年校慶');
part2 = part2.replace(/大庄國小71週年校慶/g, '高峰國小22週年校慶');
part2 = part2.replace(/七一大庄、五力飛揚/g, '森活高峰・廿二璀璨');
part2 = part2.replace(/七一大庄・五力飛揚/g, '森活高峰・廿二璀璨');
part2 = part2.replace(/Da-Chuang's 71st: Soaring with the Five Powers/g, 'GFPS 22nd: Forest Vitality & Global Powers');
part2 = part2.replace(/Da-Chuang's 71st Anniversary: Soaring with the Five Powers/g, 'Gao-Feng 22nd Anniversary: Global · Friendly · Positive · SDGs');
part2 = part2.replace(/大庄五力/g, '高峰五力');
part2 = part2.replace(/大庄小健將/g, '高峰小健將');
part2 = part2.replace(/大庄運動小健將/g, '高峰運動小健將');
part2 = part2.replace(/七一耀動聖火台/g, '廿二高峰耀動聖火台');
part2 = part2.replace(/傳承大庄七一風華/g, '傳承高峰廿二風華');
part2 = part2.replace(/重溫大庄 71 年風華/g, '重溫高峰 22 年風華');
part2 = part2.replace(/71 年傳承風華/g, '22 年傳承風華');
part2 = part2.replace(/大庄校慶/g, '高峰校慶');
part2 = part2.replace(/大庄校史/g, '高峰校史');
part2 = part2.replace(/大庄/g, '高峰');
part2 = part2.replace(/七一/g, '廿二');
part2 = part2.replace(/71/g, '22');

const finalCode = part1 + part2;
const outBuildPath = path.join(__dirname, 'build.js');
fs.writeFileSync(outBuildPath, finalCode, 'utf8');
console.log('Successfully written clean build.js to:', outBuildPath);
