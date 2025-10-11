const updateLogs = [
        {
    version: "15.7.1",
    date: "2025-10-12",
    content: [
        "<strong>【新功能】智慧目錄高亮與同步！</strong> 訊息目錄現在會自動高亮您正在主畫面瀏覽的訊息。",
        "<strong>即時定位：</strong> 在長篇對話中滾動時，目錄會即時更新高亮項目，讓您隨時掌握目前進度，不再迷失方向。",
        "<strong>【重要修正】徹底解決介面重疊問題：</strong> 修復了在行動裝置上，初始歡迎訊息與頂部功能列重疊的顯示錯誤。新的動態佈局將確保介面在所有螢幕尺寸上都能完美呈現。",
        "<strong>優化：</strong> 提升了頁面滾動時的渲染效能，確保新功能的加入不影響應用的流暢度。"
    ]
},
        {
    version: "15.7.0",
    date: "2025-10-11",
    content: [
        "<strong>【新功能】隆重推出「訊息目錄」側邊欄！</strong> 在長篇對話中，再也不用費力滾動尋找特定訊息。",
        "<strong>滑動呼叫：</strong> 電腦版將滑鼠移至畫面右側邊緣；手機版從右向左滑動即可呼叫。",
        "<strong>快速跳轉：</strong> 點擊目錄中的訊息可立即跳轉至主畫面對應位置，並伴隨高亮效果。",
        "<strong>優化：</strong> 登入流程的轉場動畫更加流暢快速，提供更佳的啟動體驗。",
        "<strong>優化：</strong> 當刪除正在檢視的對話時，系統現在會自動開啟一個新對話，操作流程更直觀。",
        "<strong>修正：</strong> 解決了在特定裝置上，登入後可能發生的畫面閃爍或轉場不順的問題。"
    ]
},
        {
        version: "15.6.1",
        date: "2025-10-8",
        content: [
            "<strong>優化：</strong>側邊攔內部收起與展開的動畫流暢度",
            "<strong>優化：</strong>上傳檔案與圖片整合為上傳",
            "<strong>優化：</strong>輸入框+延伸功能的展開UI樣式",
            "<strong>修正：</strong>模型選單透明度過高的問題",
        ]
    },
        {
        version: "15.6.0",
        date: "2025-10-7",
        content: [
            "<strong>優化：</strong>全新的歷史對話選取高亮功能，更清楚目前調用的對話",
            "<strong>新增：</strong>openrouter模型支援深度研究功能",
            "<strong>新增：</strong>更多的Astras",
            "<strong>修正：</strong>全域搜索搜索到垃圾桶內紀錄的問題",
        ]
    },
        {
        version: "15.5.0",
        date: "2025-10-6",
        content: [
            "<strong>更新：</strong>全新的側邊攔樣式",
        ]
    },
        {
        version: "15.4.9",
        date: "2025-10-6",
        content: [
            "<strong>修正：</strong>修正載入畫面會讓底層首頁滑動的問題",
            "<strong>增加：</strong>在編輯研究計畫的彈出視窗增加-取消研究的欄位",
        ]
    },
        {
        version: "15.4.8",
        date: "2025-10-5",
        content: [
            "<strong>修正：</strong>深度研究模式研究計畫無法插入的問題",
            "<strong>修正：</strong>深度研究模式研究計畫無法調整順序的問題",
            "<strong>修正：</strong>深度研究模式研究計畫數量與設定頁面不同步的問題",
        ]
    },
        {
        version: "15.4.7",
        date: "2025-10-5",
        content: [
            "<strong>優化：</strong>深度研究模式文字輸出樣式",
        ]
    },
        {
        version: "15.4.6",
        date: "2025-10-5",
        content: [
            "<strong>優化：</strong>文字輸出樣式",
        ]
    },
        {
        version: "15.4.5",
        date: "2025-10-4",
        content: [
            "<strong>新增：</strong>深度研究模式編輯研究計畫的功能(BETA測試版功能，我方不承擔任何出錯而導致的損失責任",
        ]
    },
        {
        version: "15.4.4",
        date: "2025-10-3",
        content: [
            "<strong>修正：</strong>深度研究模式AI回覆泡泡複製與時間顯示功能失效的問題",
            "<strong>修正：</strong>深度研究內容不連貫的問題",
            "<strong>修正：</strong>深度研究圖像搜索時無法正常識別圖像的問題",
        ]
    },
        {
        version: "15.4.3",
        date: "2025-10-3",
        content: [
            "<strong>修正：</strong>深度研究模式後續追問失效的問題",
            "<strong>修正：</strong>深度研究，研究中的狀態UI",
        ]
    },
        {
        version: "15.4.2",
        date: "2025-10-3",
        content: [
            "<strong>修正：</strong>深度研究模式Gemini模型無法上傳圖片與檔案的問題",
            "<strong>優化：</strong>AI輸出時會強制ˋ捲動至下方的問題",
        ]
    },
        {
        version: "15.4.1",
        date: "2025-10-3",
        content: [
            "<strong>修正：</strong>深度研究模式後續追問失效的問題",
            "<strong>優化：</strong>深度研究，研究中的狀態UI",
        ]
    },
        {
        version: "15.4.0",
        date: "2025-10-3",
        content: [
            "<strong>新增：</strong>深度研究功能",
        ]
    },
        {
        version: "15.3.9",
        date: "2025-10-2",
        content: [
            "<strong>修正：</strong>GEMINI模型使用學習與研究模式時，無法上傳圖片與檔案的問題",
        ]
    },
        {
        version: "15.3.8",
        date: "2025-10-2",
        content: [
            "<strong>修正：</strong>搜索功能出現重複內容的問題",
        ]
    },
        {
        version: "15.3.7",
        date: "2025-10-2",
        content: [
            "<strong>修正：</strong>輸入欄導致螢幕縮放的問題",
        ]
    },
        {
        version: "15.3.6",
        date: "2025-10-2",
        content: [
            "<strong>修正：</strong>輸入欄遮蔽的問題",
        ]
    },
        {
        version: "15.3.5",
        date: "2025-10-1",
        content: [
            "<strong>修正：</strong>移動端版本AI回復表格時會超出螢幕範圍的問題",
        ]
    },
        {
        version: "15.3.4",
        date: "2025-09-26",
        content: [
            "<strong>新增：</strong>gemini2.5-Pro、gemini2.5-flash預覽版、gemini2.5-flash-lite預覽版",
            "<strong>刪除：</strong>Pico模型",
        ]
    },
        {
        version: "15.3.3",
        date: "2025-09-24",
        content: [
            "<strong>BETA：</strong>內部測試版本",
        ]
    },
        {
        version: "15.3.2",
        date: "2025-09-23",
        content: [
            "<strong>BETA：</strong>內部測試版本",
        ]
    },
        {
        version: "15.3.1",
        date: "2025-09-23",
        content: [
            "<strong>優化：</strong>後續追問將更符合使用者習慣",
            "<strong>替換：</strong>Mill模型替換為Mistral3.2模型",
        ]
    },
        {
        version: "15.3.0",
        date: "2025-09-21",
        content: [
            "<strong>新增：</strong>意見反饋與Astras提案功能",
        ]
    },
        {
        version: "15.2.1",
        date: "2025-09-21",
        content: [
            "<strong>修正：</strong>輸入欄位Enter改為換行，Shift+Enter改為確認",
            "<strong>修正：</strong>AI回覆程式碼時會超出螢幕邊框的問題",
        ]
    },
        {
        version: "15.2.0",
        date: "2025-09-21",
        content: [
            "<strong>修正：</strong>輸入欄為無法換行輸入與展開",
        ]
    },
        {
        version: "15.1.1",
        date: "2025-09-20",
        content: [
            "<strong>修正：</strong>openrouter模型+功能錯誤顯示的問題",
        ]
    },
        {
        version: "15.1.0",
        date: "2025-09-20",
        content: [
            "<strong>新增：</strong>openrouter+功能學習與研究模式的支援",
        ]
    },
        {
        version: "15.0.1",
        date: "2025-09-20",
        content: [
            "<strong>修正：</strong>更新彈窗錯誤彈出的問題",
            "<strong>替換：</strong>Ultra模型已替換成Grok4-fash",
        ]
    },
        {
        version: "15.0.0",
        date: "2025-09-20",
        content: [
            "<strong>新增：</strong>跨對話記憶功能",
            "<strong>新增：</strong>學習與研究模式",
            "<strong>優化：</strong>跨對話記憶功能邏輯與提示詞",
            "<strong>優化：</strong>學習與研究功能邏輯與提示詞",
            "<strong>修正：</strong>輸入欄內外加功能超出輸入框右側的問題",
            "<strong>修正：</strong>移動端版本首頁匯入功能無法匯入的問題",
            "<strong>修正：</strong>輸入欄內外加功能與輸入框重疊的問題",
        ]
    },
    {
        version: "14.9.9",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>版本更新推送通知邏輯",
        ]
    },
    {
        version: "14.9.8",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>輸入欄延伸功能動畫",
            "<strong>優化：</strong>輸入欄字體不清西的問題",
        ]
    },
    {
        version: "14.9.7",
        date: "2025-09-18",
        content: [
            "<strong>修正：</strong>輸入欄上下寬度沒統一的問題",
            "<strong>修正：</strong>輸入欄再取消延伸功能後未成功收起的問題",
            "<strong>優化：</strong>輸入欄延伸功能顯示方式",
        ]
    },
    {
        version: "14.9.6",
        date: "2025-09-18",
        content: [
            "<strong>新增：</strong>修改聯網搜索及Astras使用中途式的位置",
        ]
    },
    {
        version: "14.9.5",
        date: "2025-09-18",
        content: [
            "<strong>修正：</strong>按鈕顏色無法填充漸變色的問題",
        ]
    },
    {
        version: "14.9.4",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>輸入欄位附加內容背景顏色透明度更動",
        ]
    },
    {
        version: "14.9.3",
        date: "2025-09-18",
        content: [
            "<strong>修正：</strong>輸入欄位附加內容彈出被覆蓋的問題",
        ]
    },
    {
        version: "14.9.2",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>Astras商店跳轉問題",
        ]
    },
    {
        version: "14.9.1",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>Astras商店字體顏色",
        ]
    },
    {
        version: "14.9.0",
        date: "2025-09-18",
        content: [
            "<strong>增加：</strong>Astras商店整合自定義桌部，增加凝膠玻璃效果",
        ]
    },
    {
        version: "14.8.17",
        date: "2025-09-18",
        content: [
            "<strong>增加：</strong>聊天室輸入欄與後續追問模塊互動特效",
        ]
    },
    {
        version: "14.8.16",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>移除移動端雙指縮放與雙擊放大的功能",
        ]
    },
    {
        version: "14.8.15",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>優化現有動畫",
        ]
    },
    {
        version: "14.8.14",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>後續追問展開與關閉邏輯更改",
        ]
    },
    {
        version: "14.8.13",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>電腦版後續追問模塊尺寸過大的問題",
            "<strong>刪除：</strong>側邊欄位展開灰色遮罩疊加",
        ]
    },
    {
        version: "14.8.12",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>側邊欄、後續追問欄位以及訊息泡泡的凝膠玻璃材質",
        ]
    },
    {
        version: "14.8.11",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>後續追問背景改為浮標樣式",
            "<strong>修正：</strong>聊天室窗名稱不會自適應改變的問題",
        ]
    },
    {
        version: "14.8.10",
        date: "2025-09-18",
        content: [
            "<strong>優化：</strong>減少頁面可選取文字範圍，優化使用體驗",
            "<strong>新增：</strong>新增訊息佔留功能，切換對話為傳送出的訊息皆能保留",
        ]
    },
    {
        version: "14.8.9",
        date: "2025-09-18",
        content: [
            "<strong>新增：</strong>在「設定」頁面新增了垃圾筒功能，方便使用者檢視已刪除文件給予永久刪除與復原的能力。",
        ]
    },
    {
        version: "14.8.8",
        date: "2025-09-17",
        content: [
            "<strong>新增：</strong>在「關於」頁面新增了版本更新資訊入口，方便使用者查看所有版本的更新日誌。",
            "<strong>新增：</strong>新增了「啟用更新通知」開關，開啟後每次載入都會彈出最新版本更新內容。",
            "<strong>優化：</strong>更新日誌內容集中到獨立的update-logs.js檔案中，方便後續維護與修改。",
        ]
    },
    {
        version: "14.8.6",
        date: "2025-09-15",
        content: [
            "<strong>新增：</strong>手機版側邊欄項目支援長按呼叫快捷選單。",
            "<strong>優化：</strong>數據儀表板的訊息分佈圖增加了年/月/日的篩選功能。",
            "<strong>修正：</strong>修復了在自訂桌布模式下，Astras 商店頁面元素顯示不清的問題。",
        ]
    },
    {
        version: "14.8.5",
        date: "2025-09-12",
        content: [
            "<strong>新增：</strong>全新的個人數據儀表板，提供模型使用比例、訊息數量分佈等統計圖表。",
            "<strong>新增：</strong>『滾動到底部』按鈕，在訊息過多時方便快速跳轉至最新訊息。",
            "<strong>優化：</strong>自然語言搜尋功能，現在會根據關鍵字權重計算相關性分數，使搜尋結果更精準。",
        ]
    }
    // 未來的新版本請加在此處最上方
];
