# 個人 Profile 網站重新設計規劃

## Context

現有網站使用 Bootstrap 3（2013）+ 已廢棄的 Google Sheets gsx$ API，Skills section 完全空白，整體形象無法反映目前的專業定位。目標是打造展現個人品牌的現代化 Profile 網站，幫助 Neil 爭取高階職位或顧問案。Neil 擁有 10 年 PM 經驗、5 年管理、5 年廣告流量變現，具體成果數字豐富，正是重點展示素材。

---

## 定位與設計方向

- **標題定位**：Product Leader & Monetization Expert｜AI 落地推手
- **Sub-tagline**：10 年 Web/APP PM × 5 年跨職能管理 × 5 年程序化廣告流量變現
- **語言**：中英雙語（中文主、英文副標）
- **設計**：深色科技感（glassmorphism 卡片、漸層 accent、dot pattern 背景）
- **技術**：全新重建（Tailwind CSS CDN + Vanilla JS）

---

## 網站架構

```
Hero → About (亮點數字) → Expertise → Experience → Ventures → Skills → Education → Contact
```

---

### 1. Hero Section

```
[圓形頭像]
陳彥華 Neil Chen
資深產品策略顧問｜流量變現專家｜AI 落地推手
Senior Product Leader · Monetization Expert · AI Integrator

[📧 聯繫我]  [LinkedIn]  [Cake Resume]  [spacen.io]
```

---

### 2. About / 關於我（含數字亮點 Banner）

個人品牌敘述（3 句）：
> 擁有超過 10 年 Web/APP 產品管理經驗，橫跨媒體、遊戲、HR SaaS、數位廣告等多元產業。
> 以數據驅動為核心，善用 UX Research 洞察用戶需求，發展符合商業目標的產品策略。
> 目前深耕 AI 工具落地應用、工作流程自動化，並提供流量網站廣告變現與 SEO 顧問服務。

數字亮點卡片（4 個）：
- **10 年** — Web/APP Product Management
- **5 年** — 跨職能團隊管理（25~30 人規模）
- **5 年** — 程序化廣告流量變現
- **200%↑** — 流量/變現成長代表成果

---

### 3. Expertise / 專業領域（6 張 Cards）

| Icon | 中文 | 說明 |
|------|------|------|
| 📊 | 產品策略 Product Strategy | 數據驅動 × UX Research × 商業目標對齊，0→1 與 1→100 均有豐富實績 |
| 💰 | 流量變現 Monetization | 程序化廣告、聯播網整合、廣告版位產品開發，RevPushup 服務延伸 |
| 🤖 | AI 落地應用 AI Implementation | 協助企業導入 AI 工具，CDP × NLP × AI 個人化推薦實戰經驗 |
| ⚙️ | 流程自動化 Workflow Automation | N8N/Zapier 工作流程優化，推動 Jira/OKR/數據儀表板落地 |
| 🏠 | 智慧家庭/IoT Smart Home | spacen.io — 智慧家庭整合應用內容創作者 |
| 👥 | 團隊領導 Leadership & Coaching | 跨職能團隊帶領（PM/設計/工程/運營），PM 本職學能培訓 |

---

### 4. Work Experience / 工作經歷（Timeline Cards，最新在前）

**① 艾格薛爾數位工作室｜自由接案**
`2024/10 – 現在`
- RevPushup 流量網站廣告變現優化服務
- SEO 顧問服務
- 綜合型數位轉型顧問

**② Co-Founder｜Director of Product & BD — Instag 一眾科技**
`2024/03 – 2024/08`
- Instag CDP SaaS 產品策略規劃與商務開發
- 協助知名媒體集團申請數位轉型補助計畫成功並完成產品導入
- 知名財經媒體 SEO 優化：搜尋排名 +20%、曝光 +60%、流量 **+200%**
- 創建客戶資源交換商業模式，多元化公司廣告變現營收

**③ Product Owner — 遊戲橘子 Gamania**
`2021/07 – 2024/02`
- **hidol**：Kickoff 全新偶像粉絲互動社群，0→1 產品規劃與集團介接架構
- **beanfun! 3.0**：AI 個人化首頁推薦，留存率提升 **30%**
- Push Notification 策略：留存率提升 **30%**
- 重構註冊/登入流程，每月節省 **2 萬以上**駭客攻擊產生的驗證簡訊費用
- 推動 PM team 數據工具培訓（BigQuery、Looker Studio、Tableau）
- 集團 Jira 導入推廣，成為各事業體模板

**④ 產品專案協理 — 遠見天下文化事業群**
`2020/03 – 2021/06`
- 自有 CDP 開發：NLP 文章受眾分析、LINE 自動選文推播工具
- 遠見天下文化活動通：活動報名/報到平台，拓展 CDP 資料範疇
- 優化流量變現模式，剩餘流量變現能力提升 **200%+**
- 文章頁無限捲動：瀏覽量 +**15%**
- 遠見雜誌 AMP、Google News 發佈

**⑤ BU Head — 網鈺數位科技**
`2018/10 – 2019/12`
- 統管產品/編輯/運營/行銷/廣告共 **25~30 人**
- AARRR 模型重塑各部門定位，OKR 設定年度目標
- 20 位真實用戶 UX Research，產出功能調整報告
- 幸福堂 O2O 異業合作，APP DAU **+100%**

**⑥ 流量變現經理 Monetization Manager — 網鈺數位科技**
`2017/10 – 2019/09`
- 管理卡提諾論壇、Cooky、狂新聞廣告變現架構
- 剩餘流量變現佔整體營收：30% → **50%**
- Looker Studio 即時 Dashboard，降低人力負擔

**⑦ Sr. Product Manager — 網鈺數位科技**
`2016/07 – 2017/09`
- 卡提諾狂新聞 UGC Web 平台 0→1 規劃、開發上線
- FUNIN 放映時刻表、站內點數兌換功能
- 電商網站 Wordpress 建置維運

**⑧ 測評中心副理 — 全球華人/1111人力銀行**
`2009/07 – 2016/06`
- eHR 人力資源 SaaS 產品規劃開發
- 心理測驗開發（九大職能星、TAT 轉職測驗、個人特質測評）
- Pre-sale 與導入顧問：全聯實業、日月光集團、台灣中油

---

### 5. Ventures & Projects / 創業與專案

**RevPushup（艾格薛爾數位工作室）**
- 廣告技術串接，協助流量網站廣告變現優化
- 連結：https://revpushup.com

**spacen.io — 智慧家庭部落格**
- IoT 與智慧家庭整合應用內容平台
- 連結：https://spacen.io

---

### 6. Skills / 技能（標籤分類）

- **產品管理**：Product Strategy, Roadmap, Scrum/Agile, OKR, AARRR, Axure, Jira
- **AI 工具**：ChatGPT, Claude, Copilot, NLP, AI Personalization
- **流量變現**：Programmatic Ads, DFP/GAM, AdSense, 聯播網, RevPushup
- **自動化**：N8N, Zapier, LINE Messaging API
- **分析工具**：Google Analytics, BigQuery, Looker Studio, Tableau, SPSS
- **SEO**：Technical SEO, Content Strategy, AMP, Google News
- **智慧家庭/IoT**：Home Assistant, Zigbee, MQTT
- **前端**：HTML, CSS, JavaScript, jQuery, WordPress

---

### 7. Education / 學歷

- **銘傳大學 Ming Chuan University**｜諮商與工商心理學研究所（I/O Psychology）｜碩士｜2013–2015
- **中國文化大學 Chinese Culture University**｜心理輔導學系（Applied Psychology）｜學士｜2003–2007

---

### 8. Contact / 聯繫

- 📞 0910-303-069
- ✉️ neilchen1985@gmail.com
- LinkedIn：https://www.linkedin.com/in/neilchen1985
- Cake：https://www.cake.me/me/neilchen1985
- GitHub：https://github.com/neilchen1985
- Blog：https://spacen.io
- Business：https://revpushup.com

---

## 技術實作

### Tech Stack
- **HTML5** — 單頁靜態，GitHub Pages 直接部署
- **Tailwind CSS v3（CDN）** — 替換 Bootstrap 3，不需 build process
- **Google Fonts** — Inter（英文）+ Noto Sans TC（中文繁體）
- **Vanilla JS** — Intersection Observer scroll 動畫、漢堡選單、平滑滾動
- **Font Awesome 6（CDN）** — 圖示

### 設計系統（CSS 變數）
```css
--bg-primary: #0a0f1e        /* 深夜藍背景 */
--bg-card: rgba(255,255,255,0.05)  /* 玻璃擬態卡片 */
--accent-blue: #3b82f6       /* 主藍色 */
--accent-purple: #8b5cf6     /* 紫色漸層 */
--accent-teal: #06b6d4       /* 強調青色 */
--text-primary: #f1f5f9
--text-secondary: #94a3b8
```

### 移除的過時依賴
- ❌ Bootstrap 3.3.1
- ❌ Google Sheets gsx$ API（廢棄）
- ❌ jQuery（改 Vanilla JS）
- ❌ Font Awesome 4.5.0

---

## 需修改的關鍵檔案

| 檔案 | 動作 |
|------|------|
| `index.html` | 完整重寫 |
| `css/styleV2.css` | 保留少量自訂樣式，其餘用 Tailwind |
| `js/main.js` | 重寫：移除 Google Sheets，加 scroll 動畫 |
| `_config.yml` | 保持不動 |

---

## 實作順序

1. 重寫 `index.html`（完整新架構 + 所有內容）
2. 精簡 `css/styleV2.css`（僅保留 Tailwind 無法處理的自訂樣式）
3. 重寫 `js/main.js`（Intersection Observer + smooth scroll）
4. 本地測試 RWD（desktop / tablet / mobile）
5. Commit & Push 到 `claude/redesign-personal-profile-ESeGC` branch

---

## 驗證方式

1. `python3 -m http.server 8080` 在本地預覽
2. 確認三種斷點（640px / 768px / 1024px+）排版正確
3. 確認所有外部連結（LinkedIn、Cake、spacen.io、revpushup.com）
4. 確認 smooth scroll 導覽運作正常
5. Push 後觀察 GitHub Pages 部署結果
