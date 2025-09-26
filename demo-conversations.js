window.demoConversations = {
  // Ultra — 頂級推理：超長文、跨領域研究
  ultra: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-indigo-600 text-white max-w-[80%]">
        我正在撰寫 80 頁博士論文，主題是「AI 在循環時尚的應用」。請提供完整章節架構，每章要有細分小節與摘要，方便我直接展開。
      </div>
      <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3 mt-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        論文建議架構：<br><br>
        第 1 章 緒論：研究背景、問題意識、研究目的、研究問題與貢獻。<br>
        第 2 章 文獻回顧：永續發展理論、循環經濟模式、AI 技術（推薦系統、電腦視覺、自然語言處理）、時尚產業挑戰。<br>
        第 3 章 研究方法：多模態資料蒐集方式、實驗設計、模型架構。<br>
        第 4 章 系統設計：資料前處理、AI 模型流程、LCA 評估方法。<br>
        第 5 章 實驗：跨國品牌案例、用戶實測、數據指標（碳足跡、消費行為）。<br>
        第 6 章 分析：跨案例比較、統計檢定、消費者訪談質化分析。<br>
        第 7 章 討論：對政策的啟示、商業價值、學術貢獻。<br>
        第 8 章 結論：研究限制、未來研究方向。<br><br>
        我能同時處理 200 萬 token 級別的資料與引用，適合完整學術研究。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-indigo-600 text-white max-w-[80%]">
        幫我整合十篇「AI 供應鏈永續管理」論文，指出關聯性與研究缺口，並用表格顯示。
      </div>
      <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3 mt-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        已整合十篇核心論文：<br><br>
        <table class="border">
          <tr><th>年份</th><th>焦點</th><th>主要發現</th></tr>
          <tr><td>2019</td><td>物流最佳化</td><td>AI 降低配送成本 12%</td></tr>
          <tr><td>2020</td><td>碳排追蹤</td><td>初步導入 LCA+AI</td></tr>
          <tr><td>2021</td><td>需求預測</td><td>AI 提升準確率 15%</td></tr>
          <tr><td>2022</td><td>多模態數據</td><td>圖像分析應用於布料追蹤</td></tr>
          <tr><td>2023</td><td>跨產業 ESG</td><td>缺乏標準化數據共享</td></tr>
          <tr><td>2024</td><td>供應鏈整合</td><td>仍未涵蓋社會責任與勞動權益</td></tr>
        </table><br>
        關聯：從單一物流→需求預測→碳足跡→ESG 整合。<br>
        缺口：缺乏跨國資料共享、勞動權益未整合、缺乏長期追蹤。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-indigo-600 text-white max-w-[80%]">
        請生成「資料治理與合規」政策條款，格式要像法律文件，涵蓋資料最小化、跨境傳輸、當事人權利。
      </div>
      <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3 mt-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        條款草案：<br><br>
        第 1 條【資料最小化】：任何資料蒐集僅限必要範圍。<br>
        第 2 條【目的限制】：資料不得超出原定研究與政策用途。<br>
        第 3 條【跨境資料傳輸】：須符合 GDPR 與當地法規，並取得書面同意。<br>
        第 4 條【當事人權利】：可要求查詢、更正、刪除或限制處理。<br>
        第 5 條【偏差監控】：模型須定期檢測並公布偏差報告。<br>
        第 6 條【資安事件通報】：72 小時內通報主管機關與當事人。<br>
        第 7 條【子處理者管理】：所有外包單位須簽署 DPA 並公開清單。
      </div>
    </div>
  `,

  // Pro Max — 深度推理：商業決策／複雜分析
  proMax: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-purple-600 text-white max-w-[80%]">
        請比較「直營電商」與「通路聯盟」兩種市場進入策略，幫我做完整 SWOT 分析與決策樹。
      </div>
      <div class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        SWOT 分析：<br><br>
        • 直營：強品牌、毛利高；弱點是高成本、行銷壓力；機會是直控數據；威脅是庫存壓力。<br>
        • 聯盟：優勢是快速覆蓋、進入門檻低；弱點是利潤少、依賴他人；機會是規模經濟；威脅是品牌弱化。<br><br>
        決策樹：若資金充裕且品牌定位清晰 → 直營；若資源有限且需快速測試 → 聯盟。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-purple-600 text-white max-w-[80%]">
        如果景氣下行，請設計悲觀／基準／樂觀三情境財務模擬，推算盈虧平衡點。
      </div>
      <div class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        財務模擬：<br><br>
        • 樂觀：直營 6 個月 BEP；聯盟 3 個月 BEP。<br>
        • 基準：直營 9 個月；聯盟 6 個月。<br>
        • 悲觀：直營 12 個月以上；聯盟 8 個月。<br><br>
        風險控制：悲觀情境需調整分潤條款、增加現金流備用金。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-purple-600 text-white max-w-[80%]">
        請給我一份 90 天執行計畫，每兩週設 KPI，方便對投資人簡報。
      </div>
      <div class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        路線圖：<br><br>
        • 週 1–2：產品定義、團隊培訓；KPI = MVP 功能完成率 90%<br>
        • 週 3–6：直營 MVP 上線；KPI = CAC &lt; 200、CVR ≥ 2%<br>
        • 週 7–10：通路試點；KPI = 月銷售額達 50 萬<br>
        • 週 11–12：數據彙整；KPI = LTV/CAC ≥ 2.0<br><br>
        此規劃可直接向投資人展示，邏輯清楚、數據可追蹤。
      </div>
    </div>
  `,

// Pro PV — 預覽：多模態 + 速度
  proPV: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-pink-600 text-white max-w-[80%]">
        這張產品包裝照（假設已上傳）要如何改進？請分析三個重點並提出一句吸睛文案。
      </div>
      <div class="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        改進建議：<br>
        1. 成分字體過小，須放大以增強透明感。<br>
        2. 顏色層次不足，缺乏視覺焦點。<br>
        3. 側邊缺少永續標章，降低品牌可信度。<br><br>
        吸睛文案：「純淨成分，永續看得見。」
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-pink-600 text-white max-w-[80%]">
        幫我延伸 10 個短文案，適合做 A/B 測試，越簡潔越好。
      </div>
      <div class="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        文案選項：<br>
        1. 純淨成分，安心選擇<br>
        2. 永續是一種態度<br>
        3. 成分透明，良心之選<br>
        4. 為地球更輕盈<br>
        5. 美麗不該有負擔<br>
        6. 少一點浪費，多一點時尚<br>
        7. 乾淨美，零妥協<br>
        8. 負責任的時尚<br>
        9. 永續設計，與眾不同<br>
        10. 簡單選擇，純粹生活
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-pink-600 text-white max-w-[80%]">
        請用其中最有力的兩句，設計一個 30 秒廣告腳本，分鏡要明確。
      </div>
      <div class="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        腳本：<br><br>
        • 0–5 秒：近拍產品，背景乾淨純白 → 文案「純淨成分，安心選擇」浮現。<br>
        • 6–15 秒：展示永續設計元素，搭配樹木、海洋影像 → 文案「為地球更輕盈」。<br>
        • 16–25 秒：年輕人自信使用產品的場景。<br>
        • 26–30 秒：品牌 Logo + 行動口號「簡單選擇，純粹生活」。
      </div>
    </div>
  `,

  // Pro — 高效多模態：文件、文字與影像分析
  pro: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-600 text-white max-w-[80%]">
        我有一張發票和一份需求說明（假設已提供）。請幫我抽取發票欄位並生成採購單草稿。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        抽取結果：供應商名稱、品項、數量、單價、稅額、總價。<br>
        已依需求自動生成採購單草稿，包含付款條件與到貨日期。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-600 text-white max-w-[80%]">
        請比對合約價目，若有差異請用紅色標註，並推測可能原因。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        差異：兩項高於合約價 8%，一項低於合約價 5%。<br>
        可能原因：急單附加費、新版材料成本上升、供應商促銷。<br>
        已標註於文件，並附談判建議。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-600 text-white max-w-[80%]">
        幫我生成一封給供應商的郵件範本，語氣專業禮貌但堅定。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        郵件範本：<br><br>
        主旨：關於近期採購單價格差異之確認<br>
        內容：<br>
        • 感謝長期合作<br>
        • 指出差異並附上比對表<br>
        • 請求說明原因與修正建議<br>
        • 設定回覆期限，強調合作誠意<br><br>
        可直接套用並依實際資料微調。
      </div>
    </div>
  `,

  // Plus PV — 輕量快速：日常應用／會議總結
  plusPV: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-emerald-600 text-white max-w-[80%]">
        我要主持 30 分鐘週會，請幫我設計簡短議程並寫主持人開場、轉場、結尾話術。
      </div>
      <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        議程：5 分鐘 KPI 快報 → 15 分鐘專案進度 → 10 分鐘行動決策。<br><br>
        話術：<br>
        • 開場：「感謝大家準時，今天聚焦在三個重點...」<br>
        • 轉場：「接下來請 XXX 分享專案進度...」<br>
        • 收尾：「今天的行動項有三件，請各位下週更新狀態。」
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-emerald-600 text-white max-w-[80%]">
        幫我整理會議精華摘要，限制在一段話和三個行動項目。
      </div>
      <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        摘要：本週聚焦出貨穩定、行銷上線、供應鏈風險。<br>
        行動項：<br>
        1. XXX 負責追蹤供應商交期<br>
        2. YYY 準備上線壓測<br>
        3. ZZZ 規劃行銷備案
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-emerald-600 text-white max-w-[80%]">
        幫我輸出 Notion 任務區塊 Markdown，包含 Owner、Deadline、Status。
      </div>
      <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        Markdown：<br>
        <code>
        | 任務 | Owner | Deadline | Status |<br>
        |-----|-------|----------|--------|<br>
        | 追蹤交期 | XXX | 3/10 | Ongoing |<br>
        | 上線壓測 | YYY | 3/15 | Pending |<br>
        | 行銷備案 | ZZZ | 3/18 | Planned |
        </code>
      </div>
    </div>
  `,

  // Mini — 強大推理 + 長文處理
  mini: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-amber-600 text-white max-w-[80%]">
        請推導折現現金流 (DCF) 公式，並用簡單例子展示計算過程。
      </div>
      <div class="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        DCF 公式：企業價值 = Σ CF<sub>t</sub> / (1+r)^t + TV / (1+r)^n。<br>
        例子：每年現金流 100 萬，r=10%，三年，永續成長 g=2%。計算步驟逐年折現，最後加上終值。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-amber-600 text-white max-w-[80%]">
        若現金流不穩定，請提供兩種保守估算方法並解釋適用情境。
      </div>
      <div class="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        方法：<br>
        1. 情境分析：設定悲觀、基準、樂觀權重，偏向保守假設。<br>
        2. 提高折現率：增加風險溢酬，拉低估值。<br><br>
        適用：新創高波動產業、景氣循環敏感行業。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-amber-600 text-white max-w-[80%]">
        幫我把整個 DCF 計算流程整理成六步驟 SOP，適合新人快速學習。
      </div>
      <div class="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        SOP：<br>
        1. 收集歷史現金流數據<br>
        2. 預測未來現金流<br>
        3. 確定折現率 r<br>
        4. 計算各年度現值<br>
        5. 計算終值 TV 並折現<br>
        6. 加總得出企業價值，進行敏感度分析
      </div>
    </div>
  `,

  // Mill — 開源高效：短文生成／結構化任務
  mill: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-slate-700 text-white max-w-[80%]">
        給我六則永續時尚貼文標題，每則限制 12 字以內，要簡潔有力。
      </div>
      <div class="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        標題：<br>
        1. 永續也時髦<br>
        2. 成分說清楚<br>
        3. 為地球減重<br>
        4. 少即是多<br>
        5. 回收也高級<br>
        6. 把良心穿上身
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-slate-700 text-white max-w-[80%]">
        幫我轉成 CSV 格式，欄位是 title, tone，tone 要標 clean/bold/playful。
      </div>
      <div class="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        <code>
        title,tone<br>
        永續也時髦,bold<br>
        成分說清楚,clean<br>
        為地球減重,clean<br>
        少即是多,clean<br>
        回收也高級,playful<br>
        把良心穿上身,bold
        </code>
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-slate-700 text-white max-w-[80%]">
        幫我把其中兩則生成短影片腳本（15 秒），要潮流感強。
      </div>
      <div class="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        腳本 1：「永續也時髦」<br>
        • 0–3 秒：快剪街頭時尚<br>
        • 4–10 秒：模特兒穿再生布料<br>
        • 11–15 秒：Logo + 標語<br><br>
        腳本 2：「回收也高級」<br>
        • 0–5 秒：手拿寶特瓶→變身高級包<br>
        • 6–12 秒：走秀舞台感<br>
        • 13–15 秒：品牌 slogan 出現
      </div>
    </div>
  `,

  // Nano — 程式專精：技術支援／代碼解釋
  nano: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-cyan-600 text-white max-w-[80%]">
        請解釋這段 Python 程式：<br>
        <code>[x**2 for x in range(5,15,2)]</code>
      </div>
      <div class="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        這是 list comprehension。<br>
        range(5,15,2) = [5,7,9,11,13]。<br>
        輸出為平方值：[25,49,81,121,169]。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-cyan-600 text-white max-w-[80%]">
        我要輸出成字串「x²=結果」，要怎麼改？
      </div>
      <div class="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        寫法：<br>
        <code>[f"{x}²={x**2}" for x in range(5,15,2)]</code><br>
        輸出：[ "5²=25", "7²=49", ... ]
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-cyan-600 text-white max-w-[80%]">
        我還想同時計算立方數，怎麼合併輸出？
      </div>
      <div class="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border text-gray-900 max-w-[80%]">
        寫法：<br>
        <code>[f"{x}²={x**2}, {x}³={x**3}" for x in range(5,15,2)]</code><br>
        輸出：[ "5²=25, 5³=125", "7²=49, 7³=343", ... ]
      </div>
    </div>
  `
};
