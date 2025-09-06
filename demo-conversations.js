window.demoConversations = {
  // 頂級推理AI
ultra: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        我有一個創業構想，是關於一個結合 AI 和永續時尚的個人化推薦 App。我們的目標客群是 Z 世代，但我對如何制定一個有效的市場進入策略感到迷茫。Astra-ULTRA，可以給我一些初步的戰略方向嗎？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3 mt-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        這是一個非常有潛力的構想，完美結合了當前兩大趨勢：個人化 AI 與永續消費。針對 Z 世代的市場進入策略，我建議採用一個三階段的精實啟動模式：<br><br>
        <strong>1. 第一階段：MVP 與社群預熱</strong><br>
        專注於獨特的推薦演算法，並在 TikTok/Instagram 透過討論永續時尚來吸引早期粉絲。<br><br>
        <strong>2. 第二階段：目標式上市 (Go-to-Market)</strong><br>
        與關心永續議題的微型網紅合作，並為早期使用者提供獨家計畫，創造稀有性。<br><br>
        <strong>3. 第三階段：數據驅動的成長與迭代</strong><br>
        利用早期數據快速優化 AI 推薦，形成「越多人用，越好用」的正向循環，並根據社群反饋擴展功能。<br><br>
        這個框架可以幫助您在控制成本的同時，驗證市場並建立忠實的品牌社群。您對哪個階段的細節最感興趣？
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        謝謝你的結構化建議！我對第一階段的「社群建立」和第二階段提到的「微型網紅合作」特別感興趣。針對 Z 世代，有沒有一些具體、創新的操作方式，而不是傳統的廣告投放？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3 mt-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        當然。要吸引 Z 世代，關鍵在於「真實性」與「參與感」。這裡有幾個創新的策略：<br><br>
        • <strong>發起 #永續穿搭挑戰：</strong>在 TikTok/Reels 上鼓勵用戶用舊衣物搭配出多樣造型，讓行銷變得有趣。<br><br>
        • <strong>透明度報告與「成分解碼器」：</strong>定期發布品牌環保分析，並預告 App 內建的掃描功能，將社群內容與產品緊密連結。<br><br>
        • <strong>AI 造型師共創計畫：</strong>邀請核心粉絲參與「訓練」AI，讓他們上傳穿搭並標註風格。這會給予他們無與倫比的主人翁意識。<br><br>
        • <strong>選擇「故事型」網紅：</strong>合作對象應是真正實踐永續生活的人，分享他們如何利用 App 解決真實困境。<br><br>
        這些策略的核心是將行銷轉化為有價值的內容和社群互動。「AI 造型師共創計畫」將會是您最強大的護城河。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        「AI 造型師共創計畫」這個點子太棒了！完全打中了核心。要實現這個功能，在技術上我應該選擇什麼樣的 AI 模型或技術堆疊？希望能兼顧成本效益與未來的擴展性。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3 mt-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        很好的問題。為了兼顧成本與擴展性，我建議採用「雲端服務 API + 開源模型微調」的混合策略。這是一個高層次的技術路線圖：<br><br>
        <strong>技術堆疊建議：</strong><br>
        1. <strong>圖像辨識：</strong>使用 Google Vision AI 或 AWS Rekognition API，以低成本快速分析用戶上傳的衣物圖片，建立基礎數據。<br><br>
        2. <strong>推薦引擎：</strong>利用 TensorFlow Recommenders (TFRS) 這類開源函式庫來建構，並部署在可擴展的雲端伺服器上。<br><br>
        3. <strong>風格生成 (共創核心)：</strong>對輕量級的開源文生圖模型（如 Stable Diffusion）進行微調 (Fine-tuning)，讓模型學習核心社群的獨特風格，生成全新的搭配建議圖。<br><br>
        這個路線圖可以確保您的 App 從一個輕量級的 MVP 平滑過渡到功能強大的平台。祝您專案順利！
      </div>
    </div>
  `,
  // 超大規模：戰略分析
  pro: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        幫我從宏觀角度分析「空間計算」在未來 2 年的市場趨勢，請列出三大驅動力、核心應用領域，以及可能的產業結構變化。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        從宏觀視角來看：<br><br>
        <strong>三大驅動力：</strong><br>
        1. 硬體成熟化：感測器、輕量化頭顯與邊緣運算晶片的突破。<br>
        2. AI 融合：計算機視覺與自然語言理解的深度整合。<br>
        3. B2B 投入：製造、醫療、零售企業積極導入，形成穩定需求。<br><br>
        <strong>核心應用領域：</strong><br>
        工業（數位孿生、遠距維護）、醫療（手術導航、影像診斷）、零售娛樂（沉浸式購物與互動體驗）。<br><br>
        <strong>產業結構變化：</strong><br>
        大廠（Apple, Meta）推動平台標準；中小創新專注垂直應用；開源社群降低門檻，形成碎片化創新。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        那醫療領域中，哪些應用最可能在短期內實際落地？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        短期內（1–2 年）最具落地性的應用是：<br><br>
        1. 術前 3D 規劃：將 CT/MRI 資料轉為可互動模型。<br>
        2. AR 手術輔助：在患者器官上疊加虛擬影像，提高精準度。<br>
        3. 復健訓練：互動遊戲化方式輔助訓練，並蒐集數據回饋。<br><br>
        這些已在臨床試驗中獲得驗證，主要挑戰在於法規與商業化速度。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        如果要吸引投資人，這個領域最有說服力的商業模式會是什麼？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        投資人最看重的模式是<strong>醫療 SaaS 平台</strong>：<br><br>
        • 以病例數或醫師席位訂閱收費。<br>
        • 與 HIS 系統串接，形成長期鎖定。<br>
        • 提供合規審查與數據安全，降低醫院導入門檻。<br>
        • 往遠距會診、保險風險控制擴展，市場可持續放大。<br><br>
        高毛利 + 高壁壘 + 剛需，是投資說服力的核心。
      </div>
    </div>
  `,

  // 混和推理：跨領域結合
  plus: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        請幫我設計一個跨領域研究提案，主題是「AI 與永續城市」，要有研究目標、方法、潛在成果。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        <strong>研究目標：</strong><br>
        利用 AI 模型最佳化能源管理、交通規劃與建築設計，提升城市永續性。<br><br>
        <strong>研究方法：</strong><br>
        1. 蒐集 IoT 感測數據（能源使用、交通流量、空氣品質）。<br>
        2. 建立 AI 模型，進行資源分配與需求預測。<br>
        3. 設計模擬平台，測試不同政策情境。<br><br>
        <strong>潛在成果：</strong><br>
        • 減少 20% 能源浪費。<br>
        • 提升大眾運輸效率。<br>
        • 提供城市規劃的決策輔助工具。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        那在數據隱私和公平性方面，需要怎麼設計？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        解決方式：<br><br>
        • <strong>隱私：</strong>採用聯邦學習，數據留在當地裝置，僅傳送模型參數。<br>
        • <strong>公平性：</strong>在模型訓練中引入偏差檢測指標，確保不同社群不被邊緣化。<br>
        • <strong>透明性：</strong>建立「可解釋 AI」模組，讓政策制定者理解決策邏輯。<br><br>
        這些設計有助於提升社會接受度。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        如果要在 5 年內落地，最可能的試點場域會是什麼？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        最可能的試點是<strong>智慧新興城市與校園社區</strong>：<br><br>
        • 新興城市基礎設施剛起步，導入成本低。<br>
        • 校園社區人口與規模可控，便於收集數據。<br>
        • 政府與學術機構往往有資金支持，利於快速測試。<br><br>
        透過小規模試點逐步放大，5 年內具備實際落地可能。
      </div>
    </div>
  `,

  // 強大開源：知識與應用
  mini: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        用簡單的方式解釋什麼是「量子糾纏」，並舉一個生活化的比喻。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        量子糾纏是指兩個粒子狀態緊密相連，即使分隔遙遠，一個改變，另一個也會立即對應。<br><br>
        生活比喻：像是一對「神奇骰子」，無論距離多遠，一顆擲出 3，另一顆立刻顯示 3，好像有心電感應。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        這種現象有什麼實際應用嗎？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        應用主要有兩個：<br><br>
        • <strong>量子通訊：</strong>透過糾纏態實現「量子密鑰分發」，理論上可達絕對安全。<br>
        • <strong>量子計算：</strong>藉由糾纏提升多比特協同運算效率，能解決傳統電腦難以處理的問題。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        那在現實中，這些應用離我們還有多遠？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        目前進展如下：<br><br>
        • 量子通訊已在中國、歐洲建立實驗性量子衛星與光纖網絡，商業化雛形已出現。<br>
        • 量子計算仍處早期，雖然 Google 與 IBM 已展示「量子霸權」實驗，但距離大規模商用還需 10–15 年。<br><br>
        換言之，理論已被驗證，但大規模普及仍需時間。
      </div>
    </div>
  `,

  // 高速精準：短平快資訊濃縮
  mill: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        請給我五個推廣「永續時尚」的行銷標語，要簡潔、直觀、有記憶點。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        提供五句：<br>
        1. 「時尚，不該犧牲未來。」<br>
        2. 「美麗，源自永續。」<br>
        3. 「環保，是新的奢華。」<br>
        4. 「穿上態度，也穿上責任。」<br>
        5. 「改變世界，從一件衣服開始。」
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        能不能再加一些比較幽默或潮流感的？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        當然，這裡有兩句：<br>
        • 「今天穿綠色，明天地球更清新。」<br>
        • 「Less trash, more fashion.」
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        如果要做成短影片廣告，這些標語怎麼用？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        使用方式建議：<br><br>
        • 開頭快速丟出一句強烈標語，例如「時尚，不該犧牲未來。」搭配震撼影像。<br>
        • 中段切換到幽默句「Less trash, more fashion.」，加快節奏。<br>
        • 結尾用一句溫暖口號「改變世界，從一件衣服開始。」呼應品牌責任。<br><br>
        節奏要快、畫面要鮮明，才能在短影片中吸引注意。
      </div>
    </div>
  `,

  // 輕巧迅捷：代碼解析
  nano: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        這段程式碼會輸出什麼？<br><code>[x**2 for x in range(5,15,2)]</code>
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        這會產生 5 到 14 的奇數平方：<code>[25, 49, 81, 121, 169]</code>。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        那如果我想讓輸出變成字串格式「x²=結果」呢？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        你可以這樣寫：<br><code>[f"{x}²={x**2}" for x in range(5,15,2)]</code><br>
        輸出：<code>["5²=25", "7²=49", "9²=81", "11²=121", "13²=169"]</code>。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        如果我還要同時計算立方數，要怎麼合併輸出？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        可以用雙重 f-string：<br>
        <code>[f"{x}²={x**2}, {x}³={x**3}" for x in range(5,15,2)]</code><br>
        輸出：<br>
        <code>[
          "5²=25, 5³=125",
          "7²=49, 7³=343",
          "9²=81, 9³=729",
          "11²=121, 11³=1331",
          "13²=169, 13³=2197"
        ]</code>
      </div>
    </div>
  `,

  // 靈活輕量：多語翻譯
  pico: `
    <!-- Round 1 -->
    <div class="flex justify-end gap-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        幫我把「互惠合作」翻譯成英文、日文、德文，並解釋文化語境上的差異。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        翻譯：<br>
        • 英文：Reciprocal cooperation（偏正式，常用於學術或外交）<br>
        • 日文：相互協力（そうごきょうりょく，帶有共同努力的情感色彩）<br>
        • 德文：Reziproke Zusammenarbeit（正式，強調制度性平等）<br><br>
        語境差異：英文偏理論，日文帶情感共鳴，德文則多用於法律或官方協議。
      </div>
    </div>
    <!-- Round 2 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        那「共同繁榮」呢？同樣翻成三語，並說明應用場合。
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        翻譯：<br>
        • 英文：Shared prosperity（常見於國際組織、經濟論壇）<br>
        • 日文：共通の繁栄（きょうつうのはんえい，多用於經濟合作協議）<br>
        • 德文：Gemeinsamer Wohlstand（在政治與 EU 文件中常見）<br><br>
        應用場合：通常出現在國家合作聲明、跨國經濟協議。
      </div>
    </div>
    <!-- Round 3 -->
    <div class="flex justify-end gap-3 mt-3">
      <div class="p-3 rounded-lg bg-blue-500 text-white max-w-[80%]">
        如果要用在品牌國際宣傳口號，哪一種表達最適合？
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">U</div>
    </div>
    <div class="flex gap-3">
      <div class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center">AI</div>
      <div class="p-3 rounded-lg bg-white border border-gray-200 text-gray-800 max-w-[80%]">
        最適合的是<strong>英文 "Shared prosperity"</strong>，因為它簡短、正面，容易跨文化共鳴。<br><br>
        • 在日文宣傳時，可搭配「共通の繁栄」，突顯合作精神。<br>
        • 在德語市場則用「Gemeinsamer Wohlstand」，傳遞嚴謹與可信度。<br><br>
        組合策略：主標語用英文，地方市場配合本地語言，兼具國際感與在地化。
      </div>
    </div>
  `,
};
