const MODEL_DETAILS_DATA = {
    // Gemini 系列
    'gemini-2.5-pro': {
        tagline: "Google 最強大的旗艦模型",
        fullDescription: "Gemini 1.5 Pro 是 Google 目前最強大的多模態模型，擁有極長的上下文窗口（Context Window），能夠處理大量的文本、代碼和圖像。它在推理能力、數學和創意寫作方面表現卓越，適合處理最複雜的任務。",
        capabilities: ["超長文本分析", "複雜邏輯推理", "多模態識別 (圖片/文件)", "創意寫作"],
        bestFor: "需要深度分析、處理長篇文檔或複雜指令的任務。"
    },
    'gemini-2.5-flash': {
        tagline: "速度與成本的最佳平衡",
        fullDescription: "Flash 版本專為高效率而設計。它保留了 Pro 版本的大部分能力，但在生成速度上大幅提升，且 API 成本更低。適合需要快速回應的日常對話和即時應用。",
        capabilities: ["快速回應", "即時翻譯", "摘要生成", "基本推理"],
        bestFor: "日常問答、快速摘要、簡單的程式碼協助。"
    },
    
    // OpenRouter (OpenAI)
    'openai/gpt-4.1': { // 假設這是對應 ID
        tagline: "行業標準的強大模型",
        fullDescription: "GPT-4 系列是目前大語言模型的標竿。具備極強的指令遵循能力和廣泛的知識庫。無論是寫程式、寫文章還是分析數據，表現都非常穩定且優秀。",
        capabilities: ["高精度編碼", "複雜指令遵循", "多語言翻譯", "專業知識回答"],
        bestFor: "所有類型的通用任務，特別是需要高準確度的場景。"
    },
    
    // OpenRouter (Anthropic)
    'anthropic/claude-sonnet-4.5': {
        tagline: "最具人性化的對話體驗",
        fullDescription: "Claude 系列以其優美的文筆和強大的邏輯著稱。Sonnet 3.5 在寫程式和視覺識別能力上超越了許多同級模型，且回覆風格自然、不生硬。",
        capabilities: ["自然語言生成", "高級程式碼編寫", "視覺分析 UI/UX", "細膩的情感理解"],
        bestFor: "寫作助手、程式開發、需要自然語氣的對話。"
    },

    // 若有其他模型 ID，請依此格式往下新增...
    // 預設 (找不到 ID 時顯示)
    'default': {
        tagline: "高效能 AI 模型",
        fullDescription: "這是一個強大的 AI 模型，能夠協助您完成各種任務。請參考其提供商的官方文件以獲取更多技術細節。",
        capabilities: ["通用問答", "文本生成"],
        bestFor: "一般用途。"
    }
};
