const MODEL_DETAILS = {
    'gemini-2.5-pro': {
        description: "Google 最強大的多模態模型，擅長複雜推理、長文寫作與程式碼分析。",
        features: ["1M Context Window", "高度推理能力", "多模態輸入"],
        bestFor: "商業分析、學術研究、複雜編碼"
    },
    'gemini-2.5-flash': {
        description: "Google 追求速度與成本效益的模型，反應極快，適合日常問答。",
        features: ["低延遲", "高吞吐量", "多模態"],
        bestFor: "即時聊天、簡單摘要、快速翻譯"
    },
    'openai/gpt-5-pro': {
        description: "OpenAI 的旗艦模型，具備頂尖的邏輯與創意寫作能力。",
        features: ["深度指令遵循", "廣泛知識庫"],
        bestFor: "創意發想、深度對話"
    },
    'anthropic/claude-sonnet-4.5': {
        description: "Anthropic 的平衡型模型，以自然流暢的寫作風格與安全性著稱。",
        features: ["自然的語氣", "強大的編碼能力"],
        bestFor: "內容創作、程式設計助手"
    },
    // ... 你可以在這裡繼續依照 ID 添加其他模型的詳細介紹
    // 如果找不到 ID 對應的介紹，程式會顯示預設訊息
};
