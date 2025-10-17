window.MODELS_DATA = [
  // --- Google (Paid) ---
  { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", provider: "Google", type: "Paid", description_key: "desc_gemini_2_5_pro", pricing: { input: 1.25, output: 10.00, input_display: "$1.25 / 百萬 tokens", output_display: "$10.00 / 百萬 tokens" } },
  { id: "gemini-2.5-flash-preview", name: "Gemini 2.5 Flash Preview", provider: "Google", type: "Paid", description_key: "desc_gemini_2_5_flash_pv", pricing: { input: 0.30, output: 2.50, input_display: "$0.30 / 百萬 tokens", output_display: "$2.50 / 百萬 tokens" } },
  { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", provider: "Google", type: "Paid", description_key: "desc_gemini_2_5_flash", pricing: { input: 0.30, output: 2.50, input_display: "$0.30 / 百萬 tokens", output_display: "$2.50 / 百萬 tokens" } },
  { id: "gemini-2.5-flash-lite-preview", name: "Gemini 2.5 Flash Lite Preview", provider: "Google", type: "Paid", description_key: "desc_gemini_2_5_flash_lite_pv", pricing: { input: 0.10, output: 0.40, input_display: "$0.10 / 百萬 tokens", output_display: "$0.40 / 百萬 tokens" } },
  
  // --- OpenAI (Paid) ---
  { id: "gpt-5-pro", name: "GPT-5 Pro", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_5_pro", pricing: { input: 15.00, output: 120.00, input_display: "$15.00 / 百萬 tokens", output_display: "$120.00 / 百萬 tokens" } },
  { id: "gpt-5", name: "GPT-5", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_5", pricing: { input: 1.25, output: 10.00, input_display: "$1.25 / 百萬 tokens", output_display: "$10.00 / 百萬 tokens" } },
  { id: "gpt-5-mini", name: "GPT-5 Mini", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_5_mini", pricing: { input: 0.25, output: 2.00, input_display: "$0.25 / 百萬 tokens", output_display: "$2.00 / 百萬 tokens" } },
  { id: "gpt-5-nano", name: "GPT-5 Nano", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_5_nano", pricing: { input: 0.05, output: 0.40, input_display: "$0.05 / 百萬 tokens", output_display: "$0.40 / 百萬 tokens" } },
  { id: "gpt-4.1", name: "GPT-4.1", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_4_1", pricing: { input: 2.00, output: 8.00, input_display: "$2.00 / 百萬 tokens", output_display: "$8.00 / 百萬 tokens" } },
  { id: "gpt-4.1-mini", name: "GPT-4.1 Mini", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_4_1_mini", pricing: { input: 0.40, output: 1.60, input_display: "$0.40 / 百萬 tokens", output_display: "$1.60 / 百萬 tokens" } },
  { id: "gpt-4.1-nano", name: "GPT-4.1 Nano", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_4_1_nano", pricing: { input: 0.10, output: 0.40, input_display: "$0.10 / 百萬 tokens", output_display: "$0.40 / 百萬 tokens" } },
  { id: "gpt-5-codex", name: "GPT-5 Codex", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_5_codex", pricing: { input: 1.25, output: 10.00, input_display: "$1.25 / 百萬 tokens", output_display: "$10.00 / 百萬 tokens" } },
  { id: "o3", name: "OpenAI O3", provider: "OpenAI", type: "Paid", description_key: "desc_o3", pricing: { input: 2.00, output: 8.00, input_display: "$2.00 / 百萬 tokens", output_display: "$8.00 / 百萬 tokens" } },
  { id: "o3-mini-high", name: "OpenAI O3 Mini High", provider: "OpenAI", type: "Paid", description_key: "desc_o3_mini_high", pricing: { input: 1.10, output: 4.40, input_display: "$1.10 / 百萬 tokens", output_display: "$4.40 / 百萬 tokens" } },
  { id: "gpt-oss-120b", name: "OpenAI GPT-OSS 120B", provider: "OpenAI", type: "Paid", description_key: "desc_gpt_oss_120b", pricing: { input: 0.04, output: 0.40, input_display: "$0.04 / 百萬 tokens", output_display: "$0.40 / 百萬 tokens" } },

  // --- Anthropic (Paid) ---
  { id: "claude-sonnet-4-5", name: "Claude 4.5 Sonnet", provider: "Anthropic", type: "Paid", description_key: "desc_claude_sonnet_4_5", pricing: { input: 3.00, output: 15.00, input_display: "$3.00 / 百萬 tokens", output_display: "$15.00 / 百萬 tokens" } },
  { id: "claude-haiku-4-5", name: "Claude 4.5 Haiku", provider: "Anthropic", type: "Paid", description_key: "desc_claude_haiku_4_5", pricing: { input: 1.00, output: 5.00, input_display: "$1.00 / 百萬 tokens", output_display: "$5.00 / 百萬 tokens" } },
  { id: "claude-sonnet-4", name: "Claude 4 Sonnet", provider: "Anthropic", type: "Paid", description_key: "desc_claude_sonnet_4", pricing: { input: 3.00, output: 15.00, input_display: "$3.00 / 百萬 tokens", output_display: "$15.00 / 百萬 tokens" } },
  
  // --- Perplexity (Paid) ---
  { id: "sonar-deep-research", name: "Perplexity Sonar Deep Research", provider: "Perplexity", type: "Paid", description_key: "desc_sonar_deep_research", pricing: { input: 2.00, output: 8.00, input_display: "$2.00 / 百萬 tokens", output_display: "$8.00 / 百萬 tokens" } },
  { id: "sonar", name: "Perplexity Sonar", provider: "Perplexity", type: "Paid", description_key: "desc_sonar", pricing: { input: 1.00, output: 1.00, input_display: "$1.00 / 百萬 tokens", output_display: "$1.00 / 百萬 tokens" } },

  // --- Deepseek (Paid) ---
  { id: "deepseek-v3-1-terminus", name: "Deepseek V3.1 Terminus", provider: "Deepseek", type: "Paid", description_key: "desc_deepseek_v3_1_terminus", pricing: { input: 0.23, output: 0.90, input_display: "$0.23 / 百萬 tokens", output_display: "$0.90 / 百萬 tokens" } },
  
  // --- x-ai (Paid) ---
  { id: "grok-4-fast", name: "Grok 4 Fast", provider: "x-ai", type: "Paid", description_key: "desc_grok_4_fast", pricing: { input: 0.20, output: 0.50, input_display: "$0.20 / 百萬 tokens", output_display: "$0.50 / 百萬 tokens" } },
  { id: "grok-code-fast-1", name: "Grok Code Fast 1", provider: "x-ai", type: "Paid", description_key: "desc_grok_code_fast_1", pricing: { input: 0.20, output: 1.50, input_display: "$0.20 / 百萬 tokens", output_display: "$1.50 / 百萬 tokens" } },

  // --- Qwen (Paid) ---
  { id: "qwen3-coder", name: "Qwen3 Coder", provider: "Qwen", type: "Paid", description_key: "desc_qwen3_coder", pricing: { input: 0.22, output: 0.95, input_display: "$0.22 / 百萬 tokens", output_display: "$0.95 / 百萬 tokens" } },
  { id: "qwen3-vl-235b-instruct", name: "Qwen3 VL 235B Instruct", provider: "Qwen", type: "Paid", description_key: "desc_qwen3_vl_235b", pricing: { input: 0.30, output: 1.20, input_display: "$0.30 / 百萬 tokens", output_display: "$1.20 / 百萬 tokens" } },
  
  // --- MoonshotAI (Paid) ---
  { id: "kimi-k2-0905", name: "Kimi K2 0905", provider: "MoonshotAI", type: "Paid", description_key: "desc_kimi_k2_0905", pricing: { input: 0.39, output: 1.90, input_display: "$0.39 / 百萬 tokens", output_display: "$1.90 / 百萬 tokens" } },

  // --- Free Models ---
  { id: "deepseek-chat-v3-1", name: "Deepseek V3.1 Chat", provider: "Deepseek", type: "Free", description_key: "desc_deepseek_v3_1", pricing: { input: 0, output: 0, input_display: "免費使用", output_display: "有速率限制" } },
  { id: "gpt-oss-20b", name: "OpenAI GPT-OSS 20B", provider: "OpenAI", type: "Free", description_key: "desc_gpt_oss_20b", pricing: { input: 0, output: 0, input_display: "免費使用", output_display: "有速率限制" } },
  { id: "qwen3-235b", name: "Qwen3 235B", provider: "Qwen", type: "Free", description_key: "desc_qwen3_235b", pricing: { input: 0, output: 0, input_display: "免費使用", output_display: "有速率限制" } },
  { id: "deepseek-r1t2-chimera", name: "Deepseek R1T2 Chimera", provider: "TNGtech", type: "Free", description_key: "desc_deepseek_r1t2_chimera", pricing: { input: 0, output: 0, input_display: "免費使用", output_display: "有速率限制" } },
  { id: "llama-3-3-70b-instruct", name: "Llama 3.3 70B Instruct", provider: "Meta", type: "Free", description_key: "desc_llama_3_3_70b", pricing: { input: 0, output: 0, input_display: "免費使用", output_display: "有速率限制" } },
  { id: "qwen2-5-vl-72b-instruct", name: "Qwen2.5 VL 72B Instruct", provider: "Qwen", type: "Free", description_key: "desc_qwen2_5_vl_72b", pricing: { input: 0, output: 0, input_display: "免費使用", output_display: "有速率限制" } }
];
