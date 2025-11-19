document.addEventListener('DOMContentLoaded', () => {
        // 直接讓登入/註冊畫面顯示出來
        document.getElementById('auth-container').classList.add('visible');
        
            const demoModels = [
  { id: 'proMax', name: 'Astra-Pro Max', title: 'Astra-Pro Max 對話範例', desc: '深度決策，商業研究最佳拍檔' },
  { id: 'proPV', name: 'Astra-Pro PV', title: 'Astra-Pro PV 對話範例', desc: '預覽新技術，多模態高速體驗' },
  { id: 'pro', name: 'Astra-Pro', title: 'Astra-Pro 對話範例', desc: '高效多模態，文檔圖像兼擅' },
  { id: 'plusPV', name: 'Astra-Plus PV', title: 'Astra-Plus PV 對話範例', desc: '輕量快速，日常應用即刻啟動' },
  { id: 'mini', name: 'Astra-Mini', title: 'Astra-Mini 對話範例', desc: '強大推理，長文與數理皆能' },
  { id: 'mill', name: 'Astra-Mill', title: 'Astra-Mill 對話範例', desc: '開源高效，短文生成與結構化' },
  { id: 'nano', name: 'Astra-Nano', title: 'Astra-Nano 對話範例', desc: '程式專精，技術代碼好幫手' },
];
            const selectorContainer = document.querySelector('.demo-model-selector');
            const chatWindow = document.getElementById('demo-chat-window');
            const chatTitle = document.getElementById('demo-chat-title');
            if (selectorContainer && chatWindow && chatTitle) {
                demoModels.forEach((model, index) => {
                    const button = document.createElement('button');
                    button.className = `selector-btn text-center p-3 rounded-lg border-2 border-gray-200 bg-white ${index === 0 ? 'active' : ''}`;
                    button.dataset.modelId = model.id;
                    button.innerHTML = `
                        <div class="font-semibold text-sm text-gray-800">${model.name}</div>
                        <div class="text-xs text-gray-500">${model.desc}</div>
                    `;
                    selectorContainer.appendChild(button);
                    const contentDiv = document.createElement('div');
                    contentDiv.id = `demo-chat-${model.id}`;
                    contentDiv.className = `demo-chat-content space-y-6 ${index === 0 ? 'active' : ''}`;
                    contentDiv.innerHTML = demoConversations[model.id];
                    chatWindow.appendChild(contentDiv);
                });
                selectorContainer.addEventListener('click', (e) => {
                    const button = e.target.closest('.selector-btn');
                    if (!button) return;
                    const modelId = button.dataset.modelId;
                    selectorContainer.querySelector('.active').classList.remove('active');
                    button.classList.add('active');
                    chatWindow.querySelector('.active').classList.remove('active');
                    document.getElementById(`demo-chat-${modelId}`).classList.add('active');
                    const modelInfo = demoModels.find(m => m.id === modelId);
                    chatTitle.textContent = modelInfo.title;
                });
            }
        });
        const ALL_ELEMENTS = {
            authContainer: document.getElementById('auth-container'),
            appContainer: document.getElementById('app-container'),
            authForm: document.getElementById('auth-form'),
            usernameInput: document.getElementById('username-input'),
            passwordInput: document.getElementById('password-input'),
            importBtnAuth: document.getElementById('import-btn-auth'),
            importDataModalAuth: document.getElementById('import-data-modal-auth'),
            importFileInputAuth: document.getElementById('import-file-input-auth'),
            cancelImportBtnAuth: document.getElementById('cancel-import-btn-auth'),
            confirmImportBtnAuth: document.getElementById('confirm-import-btn-auth'),
            logoutBtn: document.getElementById('logout-btn'),
            usernameDisplay: document.getElementById('username-display'),
            newChatBtn: document.getElementById('new-chat-btn'),
            newChatBtnHeader: document.getElementById('new-chat-btn-header'),
            openSearchBtn: document.getElementById('open-search-btn'),
            historyList: document.getElementById('history-list'),
            folderList: document.getElementById('folder-list'),
            newFolderBtn: document.getElementById('new-folder-btn'),
            settingsBtn: document.getElementById('settings-btn'),
            headerTitle: document.getElementById('header-title'),
            modelSwitcherContainer: document.getElementById('model-switcher-container'),
            chatContainer: document.getElementById('chat-container'),
            historySidebar: document.getElementById('history-sidebar'),
            historySidebarList: document.getElementById('history-sidebar-list'),
            historySidebarTriggerZone: document.getElementById('history-sidebar-trigger-zone'),
            historySidebarOverlay: document.getElementById('history-sidebar-overlay'),
            messageList: document.getElementById('message-list'),
            messageInput: document.getElementById('message-input'),
            chatForm: document.getElementById('chat-form'),
            submitButton: document.getElementById('submit-btn'),
            submitButtonIcon: document.getElementById('submit-btn-icon'),
            settingsModal: document.getElementById('settings-modal'),
            saveSettingsBtn: document.getElementById('save-settings-btn'),
            closeSettingsBtn: document.getElementById('close-settings-btn'),
            geminiApiKeyInput: document.getElementById('gemini-api-key-input'),
            openrouterApiKeyInputAll: document.getElementById('openrouter-api-key-input-all'),
            modelManagementList: document.getElementById('model-management-list'),
            openArchivedModalBtn: document.getElementById('open-archived-modal-btn'),
            themeLightBtn: document.getElementById('theme-light-btn'),
            themeDarkBtn: document.getElementById('theme-dark-btn'),
            archivedChatsModal: document.getElementById('archived-chats-modal'),
            closeArchivedModalBtn: document.getElementById('close-archived-modal-btn'),
            archivedChatsContainer: document.getElementById('archived-chats-container'),
            viewArchivedChatModal: document.getElementById('view-archived-chat-modal'),
            viewArchivedTitle: document.getElementById('view-archived-title'),
            viewArchivedContent: document.getElementById('view-archived-content'),
            closeViewArchivedModalBtn: document.getElementById('close-view-archived-modal-btn'),
            closeViewArchivedModalBtnFooter: document.getElementById('close-view-archived-modal-btn-footer'),
            renameModal: document.getElementById('rename-modal'),
            renameInput: document.getElementById('rename-input'),
            saveRenameBtn: document.getElementById('save-rename-btn'),
            cancelRenameBtn: document.getElementById('cancel-rename-btn'),
            folderSettingsModal: document.getElementById('folder-settings-modal'),
            colorSwatchesContainer: document.getElementById('color-swatches-container'),
            iconOptionsContainer: document.getElementById('icon-options-container'),
            saveFolderSettingsBtn: document.getElementById('save-folder-settings-btn'),
            cancelFolderSettingsBtn: document.getElementById('cancel-folder-settings-btn'),
            notificationContainer: document.getElementById('notification-container'),
            customDialogModal: document.getElementById('custom-dialog-modal'),
            customDialogTitle: document.getElementById('custom-dialog-title'),
            customDialogMessage: document.getElementById('custom-dialog-message'),
            customDialogInputContainer: document.getElementById('custom-dialog-input-container'),
            customDialogInput: document.getElementById('custom-dialog-input'),
            customDialogButtons: document.getElementById('custom-dialog-buttons'),
            webSearchPopoverBtn: document.getElementById('web-search-popover-btn'),
            inputIndicatorContainer: document.getElementById('input-indicator-container'),
            selectionModeBtn: document.getElementById('selection-mode-btn'),
            batchActionBar: document.getElementById('batch-action-bar'),
            selectionCount: document.getElementById('selection-count'),
            cancelSelectionBtn: document.getElementById('cancel-selection-btn'),
            batchDeleteBtn: document.getElementById('batch-delete-btn'),
            batchArchiveBtn: document.getElementById('batch-archive-btn'),
            batchMoveBtn: document.getElementById('batch-move-btn'),
            batchMoveModal: document.getElementById('batch-move-modal'),
            batchMoveFolderList: document.getElementById('batch-move-folder-list'),
            batchMoveCancelBtn: document.getElementById('batch-move-cancel-btn'),
            batchMoveConfirmBtn: document.getElementById('batch-move-confirm-btn'),
            userControls: document.getElementById('user-controls'),
            searchModal: document.getElementById('search-modal'),
            closeSearchModalBtn: document.getElementById('close-search-modal-btn'),
            modalSearchInput: document.getElementById('modal-search-input'),
            modalSearchScopeSelect: document.getElementById('modal-search-scope-select'),
            searchResultsContainer: document.getElementById('search-results-container'),
            performSearchBtn: document.getElementById('perform-search-btn'),
            fileInputContainer: document.getElementById('file-input-container'),
            addFileBtn: document.getElementById('add-file-btn'),
            fileOptionsPopover: document.getElementById('file-options-popover'),
            cameraBtn: document.getElementById('camera-btn'),
            uploadImageBtn: document.getElementById('upload-image-btn'),
            uploadFileBtn: document.getElementById('upload-file-btn'),
            imageVideoInput: document.getElementById('image-video-input'),
            fileUploadInput: document.getElementById('file-upload-input'),
            filePreviewContainer: document.getElementById('file-preview-container'),
            exportDataBtn: document.getElementById('export-data-btn'),
            importDataBtn: document.getElementById('import-data-btn'),
            exportDataModal: document.getElementById('export-data-modal'),
            importDataModal: document.getElementById('import-data-modal'),
            cancelExportBtn: document.getElementById('cancel-export-btn'),
            confirmExportBtn: document.getElementById('confirm-export-btn'),
            exportHistoryCheck: document.getElementById('export-history-check'),
            exportAstrasCheck: document.getElementById('export-astras-check'),
            exportSettingsCheck: document.getElementById('export-settings-check'),
            exportMemoryCheck: document.getElementById('export-memory-check'),
            cancelImportBtn: document.getElementById('cancel-import-btn'),
            confirmImportBtn: document.getElementById('confirm-import-btn'),
            importFileInput: document.getElementById('import-file-input'),
            sidebar: document.getElementById('sidebar'),
            sidebarOverlay: document.getElementById('sidebar-overlay'),
            menuToggleBtn: document.getElementById('menu-toggle-btn'),
            sidebarOpenHandle: document.getElementById('sidebar-open-handle'),
            followUpContainer: document.getElementById('follow-up-container'),
            followUpHeader: document.getElementById('follow-up-header'),
            followUpPromptsList: document.getElementById('follow-up-prompts-list'),
            followUpToggleSwitch: document.getElementById('follow-up-toggle-switch'),
            autoNamingToggleSwitch: document.getElementById('auto-naming-toggle-switch'),
            autoWebSearchToggleSwitch: document.getElementById('auto-web-search-toggle-switch'),
            astrasList: document.getElementById('astras-list'),
            newAstrasBtn: document.getElementById('new-astras-btn'),
            astrasCreateModal: document.getElementById('astras-create-modal'),
            astrasNameInput: document.getElementById('astras-name-input'),
            astrasDescInput: document.getElementById('astras-desc-input'),
            astrasInstructionsInput: document.getElementById('astras-instructions-input'),
            saveAstrasBtn: document.getElementById('save-astras-btn'),
            cancelAstrasBtn: document.getElementById('cancel-astras-btn'),
            currentAstrasName: document.getElementById('current-astras-name'),
            aiBubbleColorDropdown: document.getElementById('ai-bubble-color-dropdown'),
            userBubbleColorDropdown: document.getElementById('user-bubble-color-dropdown'),
            settingsNav: document.getElementById('settings-nav'),
            voiceInputBtnMessage: document.getElementById('voice-input-btn-message'),
            voiceInputBtnSearch: document.getElementById('voice-input-btn-search'),
            memoryToggle1: document.getElementById('memory-toggle-1'),
            personalMemoryList: document.getElementById('personal-memory-list'),
            addPersonalMemoryBtn: document.getElementById('add-personal-memory-btn'),
            autoMemoryToggleSwitch: document.getElementById('auto-memory-toggle-switch'),
            wallpaperContainer: document.getElementById('wallpaper-container'),
            uploadWallpaperBtn: document.getElementById('upload-wallpaper-btn'),
            restoreWallpaperBtn: document.getElementById('restore-wallpaper-btn'),
            wallpaperUploadInput: document.getElementById('wallpaper-upload-input'),
            uiColorOptions: document.getElementById('ui-color-options'),
            customColorPickerContainer: document.getElementById('custom-color-picker-container'),
            customColorSwatches: document.getElementById('custom-color-swatches'),
            buttonStyleContainer: document.getElementById('button-style-container'),
            gradientPickerContainer: document.getElementById('gradient-picker-container'),
            gradientSwatches: document.getElementById('gradient-swatches'),
            apiKeyWarningBadge: document.getElementById('api-key-warning-badge'),
            userProfileBtn: document.getElementById('user-profile-btn'),
            dataDashboardModal: document.getElementById('data-dashboard-modal'),
            closeDashboardBtn: document.getElementById('close-dashboard-btn'),
            totalConvStat: document.getElementById('total-conv-stat'),
            totalFolderStat: document.getElementById('total-folder-stat'),
            mostUsedModelStat: document.getElementById('most-used-model-stat'),
            timeAnalysisYearSelect: document.getElementById('time-analysis-year-select'),
            timeAnalysisMonthSelect: document.getElementById('time-analysis-month-select'),
            timeAnalysisDaySelect: document.getElementById('time-analysis-day-select'),
            wallpaperCropModal: document.getElementById('wallpaper-crop-modal'),
            wallpaperCropImage: document.getElementById('wallpaper-crop-image'),
            cancelCropBtn: document.getElementById('cancel-crop-btn'),
            confirmCropBtn: document.getElementById('confirm-crop-btn'),
            deleteAllDataBtn: document.getElementById('delete-all-data-btn'),
            loginLanguageSwitcher: document.getElementById('login-language-switcher'),
            loginLangBtn: document.getElementById('login-lang-btn'),
            loginLangMenu: document.getElementById('login-lang-menu'),
            loginLangLabel: document.getElementById('login-lang-label'),
            uiLanguageSelect: document.getElementById('ui-language-select'),
            aiLanguageSelect: document.getElementById('ai-language-select'),
            storeContainer: document.getElementById('store-container'),
            openStoreBtn: document.getElementById('open-store-btn'),
            backToChatBtn: document.getElementById('back-to-chat-btn'),
            storeGrid: document.getElementById('store-grid'),
            astrasAvatarModal: document.getElementById('astras-avatar-modal'),
            avatarCropContainer: document.getElementById('avatar-crop-container'),
            avatarCropImage: document.getElementById('avatar-crop-image'),
            confirmAvatarCropBtn: document.getElementById('confirm-avatar-crop-btn'),
            cancelAvatarCropBtn: document.getElementById('cancel-avatar-crop-btn'),
            astrasAvatarInput: document.getElementById('astras-avatar-input'),
            scrollToBottomBtn: document.getElementById('scroll-to-bottom-btn'),
            inputBarContainer: document.getElementById('input-bar-container'),
            searchViewModal: document.getElementById('search-view-modal'),
            searchViewTitle: document.getElementById('search-view-title'),
            searchViewContent: document.getElementById('search-view-content'),
            closeSearchViewModalBtn: document.getElementById('close-search-view-modal-btn'),
            searchViewCloseBtn: document.getElementById('search-view-close-btn'),
            searchViewConfirmBtn: document.getElementById('search-view-confirm-btn'),
            updateInfoBtn: document.getElementById('update-info-btn'),
            updateInfoModal: document.getElementById('update-info-modal'),
            closeUpdateInfoModalBtn: document.getElementById('close-update-info-modal-btn'),
            updateInfoContent: document.getElementById('update-info-content'),
            enableUpdateNotificationsToggle: document.getElementById('enable-update-notifications-toggle'),
            latestUpdateModal: document.getElementById('latest-update-modal'),
            closeLatestUpdateModalBtn: document.getElementById('close-latest-update-modal-btn'),
            latestUpdateContent: document.getElementById('latest-update-content'),
            trashSection: document.getElementById('trash-section'),
            trashBatchSelectBtn: document.getElementById('trash-batch-select-btn'),
            emptyTrashBtn: document.getElementById('empty-trash-btn'),
            trashBatchActionBar: document.getElementById('trash-batch-action-bar'),
            trashSelectionCount: document.getElementById('trash-selection-count'),
            trashCancelSelectionBtn: document.getElementById('trash-cancel-selection-btn'),
            trashBatchRestoreBtn: document.getElementById('trash-batch-restore-btn'),
            trashBatchDeleteBtn: document.getElementById('trash-batch-delete-btn'),
            trashListContainer: document.getElementById('trash-list-container'),
            trashViewModal: document.getElementById('trash-view-modal'),
            trashViewTitle: document.getElementById('trash-view-title'),
            trashViewContent: document.getElementById('trash-view-content'),
            closeTrashViewModalBtn: document.getElementById('close-trash-view-modal-btn'),
            trashViewCloseBtn: document.getElementById('trash-view-close-btn'),
            learningModeBtn: document.getElementById('learning-mode-btn'),
            deepResearchBtn: document.getElementById('deep-research-btn'), // ✨ 新增元素
            feedbackTextarea: document.getElementById('feedback-textarea'),
            sendFeedbackBtn: document.getElementById('send-feedback-btn'),
            proposeAstrasBtn: document.getElementById('propose-astras-btn'),
            astrasProposalModal: document.getElementById('astras-proposal-modal'),
            proposalNameInput: document.getElementById('proposal-name-input'),
            proposalDescInput: document.getElementById('proposal-desc-input'),
            proposalInstructionsInput: document.getElementById('proposal-instructions-input'),
            cancelProposalBtn: document.getElementById('cancel-proposal-btn'),
            submitProposalBtn: document.getElementById('submit-proposal-btn'),
            // ✨ 新增互動式計畫編輯器元素
            interactivePlanModal: document.getElementById('interactive-plan-modal'),
            planEditorStepsContainer: document.getElementById('plan-editor-steps-container'),
            addPlanStepBtn: document.getElementById('add-plan-step-btn'),
            confirmPlanBtn: document.getElementById('confirm-plan-btn'),
            cancelPlanBtn: document.getElementById('cancel-plan-btn'),
            showPromptsBtn: document.getElementById('show-prompts-btn'), // 新增這行
        };
        function toggleHistorySidebar(show) {
    const { historySidebar, historySidebarOverlay } = ALL_ELEMENTS;
    if (show) {
        requestAnimationFrame(() => {
            setupMessageIntersectionObserver();
        });
        historySidebarOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
            historySidebar.classList.add('visible');
            historySidebarOverlay.classList.add('visible');
        });
    } else {
        historySidebar.classList.remove('visible');
        historySidebarOverlay.classList.remove('visible');
        // 等待動畫結束後再徹底隱藏遮罩層
        historySidebarOverlay.addEventListener('transitionend', () => {
            if (!historySidebarOverlay.classList.contains('visible')) {
                historySidebarOverlay.classList.add('hidden');
            }
        }, { once: true });
    }
}

    // 根據訊息內容，判斷是否顯示圖示
    function getMessageTypeIcon(message) {
        if (!message.parts || message.parts.length === 0) {
            return '';
        }
        const hasImage = message.parts.some(p => p.inlineData && p.inlineData.mimeType.startsWith('image/'));
        const hasFile = message.parts.some(p => p.inlineData && !p.inlineData.mimeType.startsWith('image/'));

        if (hasImage) return '📷 ';
        if (hasFile) return '📎 ';
        return '';
    }

    // 渲染歷史訊息側邊欄的內容
    function renderHistorySidebarContent() {
    const { historySidebarList } = ALL_ELEMENTS;
    const conv = getActiveConversation();
    
    historySidebarList.innerHTML = ''; // 先清空舊的列表

    if (!conv || conv.messages.length === 0) {
        historySidebarList.innerHTML = `<p class="p-4 text-sm text-center text-[var(--text-secondary)]">沒有歷史訊息</p>`;
        return;
    }

    conv.messages.forEach((msg, index) => {
        const textPart = msg.parts.find(p => p.text);
        let snippet = textPart ? textPart.text : (msg.role === 'user' ? '用戶訊息' : 'AI 回覆');
        
        const icon = getMessageTypeIcon(msg);
        
        const listItem = document.createElement('div');
        listItem.className = 'history-sidebar-item';
        listItem.dataset.messageIndex = index;
        
        // ✨ --- 以下是新增的核心邏輯 --- ✨
        
        // 1. 判斷訊息角色並獲取對應顏色設定
        const isUser = msg.role === 'user';
        const colorConfig = isUser ? USER_BUBBLE_COLORS : AI_BUBBLE_COLORS;
        const colorName = isUser ? config.userBubbleColor : config.aiBubbleColor;
        
        // 2. 根據當前主題（淺色/深色）取得正確的顏色碼
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const bgColor = (colorConfig[colorName] || colorConfig['default'])[theme];

        // 3. 應用背景色，並稍微降低飽和度/增加透明度，讓它不那麼刺眼
        // 我們使用 RGBA 來添加透明度
        const rgbaColor = hexToRgba(bgColor, 0.4); // 40% 的透明度
        listItem.style.backgroundColor = rgbaColor;

        // 4. 根據背景色，自動決定文字顏色（黑或白）以確保可讀性
        listItem.style.color = getTextColorForBackground(bgColor);
        
        // ✨ --- 新增邏輯結束 --- ✨

        listItem.textContent = icon + snippet;
        historySidebarList.appendChild(listItem);
    });
}

    // 處理歷史訊息側邊欄的點擊事件
    function setupHistorySidebarInteractions() {
        const { historySidebarList, messageList } = ALL_ELEMENTS;

        historySidebarList.addEventListener('click', (e) => {
            const item = e.target.closest('.history-sidebar-item');
            if (!item) return;

            const messageIndex = item.dataset.messageIndex;
            if (messageIndex === undefined) return;

            // 根據索引找到主聊天視窗中對應的那則訊息
            const targetMessageElement = messageList.querySelector(`[data-message-index="${messageIndex}"]`);

            if (targetMessageElement) {
                // 讓訊息滾動到畫面中央
                targetMessageElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // 添加高亮效果
                const bubble = targetMessageElement.querySelector('.message-bubble');
                if (bubble) {
                    bubble.classList.add('message-highlight');
                    // 1.5秒後移除高亮效果
                    setTimeout(() => {
                        bubble.classList.remove('message-highlight');
                    }, 1500);
                }

                // 點擊後自動關閉側邊欄
                toggleHistorySidebar(false);
            }
        });
    }

    // 設定觸發歷史訊息側邊欄的各種機制
    function setupHistorySidebarTriggers() {
    const { chatContainer, historySidebar, historySidebarTriggerZone, historySidebarOverlay } = ALL_ELEMENTS;

    // --- 點擊遮罩層來關閉 ---
    // 這是解決手機版關不掉問題最可靠的方法！
    historySidebarOverlay.addEventListener('click', () => {
        historySidebarOverlay.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    historySidebarOverlay.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // 如果是向右滑動超過 50 像素，且不是垂直滑動
        if (deltaX > 50 && Math.abs(deltaY) < Math.abs(deltaX) / 2) {
            toggleHistorySidebar(false); // 執行關閉
        }
    }, { passive: true });
        toggleHistorySidebar(false);
    });

    // --- 電腦版：滑鼠懸停 ---
    historySidebarTriggerZone.addEventListener('mouseenter', () => {
        renderHistorySidebarContent(); 
        toggleHistorySidebar(true);
    });

    // 當滑鼠從側邊欄或遮罩層移開時，才關閉
    document.body.addEventListener('mousemove', (e) => {
        if (historySidebar.classList.contains('visible')) {
            const isOverSidebar = historySidebar.contains(e.target);
            const isOverTrigger = historySidebarTriggerZone.contains(e.target);
            if (!isOverSidebar && !isOverTrigger) {
                toggleHistorySidebar(false);
            }
        }
    });

    // --- 手機版：右往左滑動打開 ---
    let touchStartX = 0;
    let touchStartY = 0;

    chatContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    chatContainer.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (deltaX < -50 && Math.abs(deltaY) < Math.abs(deltaX) / 2) {
            renderHistorySidebarContent();
            toggleHistorySidebar(true);
        }
    }, { passive: true });

    // --- 手機版：在側邊欄上左往右滑動來關閉 (保留此快捷操作) ---
    historySidebar.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    historySidebar.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        if (deltaX > 50 && Math.abs(deltaY) < Math.abs(deltaX) / 2) {
            toggleHistorySidebar(false);
        }
    }, { passive: true });
}
        const compareVersions = (v1, v2) => {
            if (!v2) return 1;
            const parts1 = v1.split('.').map(Number);
            const parts2 = v2.split('.').map(Number);
            const len = Math.max(parts1.length, parts2.length);
            for (let i = 0; i < len; i++) {
                const p1 = parts1[i] || 0;
                const p2 = parts2[i] || 0;
                if (p1 > p2) return 1;
                if (p1 < p2) return -1;
            }
            return 0;
        };
        const MODELS = [
    // Gemini Models
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'gemini', descriptionKey: 'model_gemini_2_5_pro_desc' },
    { id: 'gemini-2.5-flash-preview-09-2025', name: 'Gemini 2.5 Flash Preview', provider: 'gemini', descriptionKey: 'model_gemini_2_5_flash_pv_desc' },
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'gemini', descriptionKey: 'model_gemini_2_5_flash_desc' },
    { id: 'gemini-2.5-flash-lite-preview-09-2025', name: 'Gemini 2.5 Flash Lite Preview', provider: 'gemini', descriptionKey: 'model_gemini_2_5_flash_lite_pv_desc' },

    // OpenRouter Free Models
    { id: 'openai/gpt-oss-20b:free', name: 'OpenAI GPT-OSS 20B', provider: 'openrouter', descriptionKey: 'model_gpt_oss_20b_desc', category: 'general' }, // Free models can also have categories
    { id: 'tngtech/deepseek-r1t2-chimera:free', name: 'Deepseek R1T2 Chimera', provider: 'openrouter', descriptionKey: 'model_deepseek_r1t2_chimera_desc' },
    { id: 'openrouter/sherlock-dash-alpha', name: 'Sherlock Dash Alpha', provider: 'openrouter', descriptionKey: 'model_sherlock_dash_alpha_desc', isBeta: true, category: 'general' },
    { id: 'openrouter/sherlock-think-alpha', name: 'Sherlock Think Alpha', provider: 'openrouter', descriptionKey: 'model_sherlock_think_alpha_desc', isBeta: true, category: 'thinking' },
    { id: 'nvidia/nemotron-nano-12b-v2-vl:free', name: 'Nemotron Nano 12B V2 VL', provider: 'openrouter', descriptionKey: 'model_nemotron_nano_12b_v2_vl_desc', category: 'image' },
    // OpenRouter Paid Models (OpenAI)
    { id: 'openai/gpt-5-pro', name: 'OpenAI GPT-5 Pro', provider: 'openrouter', descriptionKey: 'model_gpt_5_pro_desc', category: 'general' },
    { id: 'openai/gpt-5.1', name: 'OpenAI GPT-5.1', provider: 'openrouter', descriptionKey: 'model_gpt_5.1_desc', category: 'general' },
    { id: 'openai/gpt-5-mini', name: 'OpenAI GPT-5 Mini', provider: 'openrouter', descriptionKey: 'model_gpt_5_mini_desc', category: 'general' },
    { id: 'openai/gpt-5-nano', name: 'OpenAI GPT-5 Nano', provider: 'openrouter', descriptionKey: 'model_gpt_5_nano_desc', category: 'general' },
    { id: 'openai/gpt-4.1', name: 'OpenAI GPT-4.1', provider: 'openrouter', descriptionKey: 'model_gpt_4_1_desc', category: 'general' },
    { id: 'openai/gpt-4.1-mini', name: 'OpenAI GPT-4.1 Mini', provider: 'openrouter', descriptionKey: 'model_gpt_4_1_mini_desc', category: 'general' },
    { id: 'openai/gpt-4.1-nano', name: 'OpenAI GPT-4.1 Nano', provider: 'openrouter', descriptionKey: 'model_gpt_4_1_nano_desc', category: 'general' },
    { id: 'openai/gpt-5-codex', name: 'OpenAI GPT-5 Codex', provider: 'openrouter', descriptionKey: 'model_gpt_5_codex_desc', category: 'coding' },
    { id: 'openai/o3', name: 'OpenAI O3', provider: 'openrouter', descriptionKey: 'model_o3_desc', category: 'thinking' },
    { id: 'openai/o3-mini-high', name: 'OpenAI O3 Mini High', provider: 'openrouter', descriptionKey: 'model_o3_mini_high_desc', category: 'thinking' },
    { id: 'openai/gpt-oss-120b', name: 'OpenAI GPT-OSS 120B', provider: 'openrouter', descriptionKey: 'model_gpt_oss_120b_desc', category: 'general' },

    // OpenRouter Paid Models (Anthropic)
    { id: 'anthropic/claude-sonnet-4.5', name: 'Claude 4.5 Sonnet', provider: 'openrouter', descriptionKey: 'model_claude_sonnet_4_5_desc' },
    { id: 'anthropic/claude-haiku-4.5', name: 'Claude 4.5 Haiku', provider: 'openrouter', descriptionKey: 'model_claude_haiku_4_5_desc' },
    { id: 'anthropic/claude-sonnet-4', name: 'Claude 4 Sonnet', provider: 'openrouter', descriptionKey: 'model_claude_sonnet_4_desc' },

    // OpenRouter Paid Models (Perplexity)
    { id: 'perplexity/sonar-deep-research', name: 'Perplexity Sonar Deep Research', provider: 'openrouter', descriptionKey: 'model_perplexity_sonar_deep_research_desc' },
    { id: 'perplexity/sonar', name: 'Perplexity Sonar', provider: 'openrouter', descriptionKey: 'model_perplexity_sonar_desc' },

    // OpenRouter Paid Models (Deepseek)
    { id: 'deepseek/deepseek-v3.1-terminus', name: 'Deepseek V3.1 Terminus', provider: 'openrouter', descriptionKey: 'model_deepseek_v3_1_terminus_desc' },

    // OpenRouter Paid Models (x-ai)
    { id: 'x-ai/grok-4-fast', name: 'Grok 4 Fast', provider: 'openrouter', descriptionKey: 'model_grok_4_fast_desc', category: 'general' },
    { id: 'x-ai/grok-code-fast-1', name: 'Grok Code Fast 1', provider: 'openrouter', descriptionKey: 'model_grok_code_fast_1_desc', category: 'coding' },

    // OpenRouter Paid Models (Qwen)
    { id: 'qwen/qwen3-coder', name: 'Qwen3 Coder', provider: 'openrouter', descriptionKey: 'model_qwen3_coder_desc', category: 'coding' },
    { id: 'qwen/qwen3-coder:exact', name: 'Qwen3 Coder Exact', provider: 'openrouter', descriptionKey: 'model_qwen3_coder_exact_desc', category: 'coding' },
    { id: 'qwen/qwen3-vl-8b-instruct', name: 'Qwen3 VL 8B Instruct', provider: 'openrouter', descriptionKey: 'model_qwen3_vl_8b_instruct_desc', category: 'image' },
    { id: 'qwen/qwen3-235b-a22b-2507', name: 'Qwen3 235B 2507', provider: 'openrouter', descriptionKey: 'model_qwen_qwen3_235b_a22b_2507_desc', category: 'general' },
    { id: 'qwen/qwen3-235b-a22b-thinking-2507', name: 'Qwen3 235B Thinking 2507', provider: 'openrouter', descriptionKey: 'model_qwen_qwen3_235b_a22b_thinking_2507_desc', category: 'thinking' },
    { id: 'qwen/qwen3-vl-32b-instruct', name: 'Qwen3 VL 32B Instruct', provider: 'openrouter', descriptionKey: 'model_qwen3_vl_32b_instruct_desc', category: 'image' },
    { id: 'qwen/qwen2.5-vl-72b-instruct', name: 'Qwen 2.5 VL 72B Instruct', provider: 'openrouter', descriptionKey: 'model_qwen2_5_vl_72b_instruct_desc', category: 'image' },
    
    // OpenRouter Paid Models (MoonshotAI)
    { id: 'moonshotai/kimi-k2-0905', name: 'Kimi K2 0905', provider: 'openrouter', descriptionKey: 'model_kimi_k2_0905_desc' },
    { id: 'moonshotai/kimi-k2-thinking', name: 'Kimi K2 Thinking', provider: 'openrouter', descriptionKey: 'model_kimi_k2_thinking_desc', category: 'thinking' },
];
        const CHEAP_MODEL_ID = 'gemini-2.5-flash-lite';
        const OPENROUTER_VISION_MODELS = [
    'openai/gpt-5-pro', 'openai/gpt-5.1', 'openai/gpt-5-mini', 'openai/gpt-5-nano', 'openai/gpt-5-codex',
    'openai/gpt-4.1', 'openai/gpt-4.1-mini', 'openai/gpt-4.1-nano',
    'openai/o3',
    'anthropic/claude-sonnet-4.5', 'anthropic/claude-haiku-4.5', 'anthropic/claude-sonnet-4',
    'perplexity/sonar',
    'x-ai/grok-4-fast',
    'qwen/qwen3-vl-32b-instruct',
    'qwen/qwen3-vl-8b-instruct',
    'nvidia/nemotron-nano-12b-v2-vl:free',
    'qwen/qwen2.5-vl-72b-instruct',
    'openrouter/sherlock-dash-alpha',
    'openrouter/sherlock-think-alpha'
];
        const FOLDER_COLORS = {
            black: '#000000',gray: '#808080', red: '#f87171', yellow: '#facc15', green: '#4ade80',
            blue: '#60a5fa', indigo: '#818cf8', purple: '#a78bfa', pink: '#f472b6',
        };
        const AI_BUBBLE_COLORS = {
            default: {light: '#f7f7f8', dark: '#1c1c1c'},
            gray: {light: '#f3f4f6', dark: '#374151'},
            blue: {light: '#e0f7fa', dark: '#006064'},
            green: {light: '#e8f5e9', dark: '#1b5e20'},
            yellow: {light: '#fffde7', dark: '#f57f17'},
            orange: {light: '#fff3e0', dark: '#ef6c00'},
            red: {light: '#ffebee', dark: '#b71c1c'},
            purple: {light: '#f3e5f5', dark: '#6a1b9a'},
            pink: {light: '#fce4ec', dark: '#ad1457'},
            teal: {light: '#e0f2f1', dark: '#004d40'},
        };
        const USER_BUBBLE_COLORS = {
            default: {light: '#3b82f6', dark: '#2563eb'},
            gray: {light: '#6b7280', dark: '#4b5563'},
            blue: {light: '#3b82f6', dark: '#2563eb'},
            green: {light: '#22c55e', dark: '#15803d'},
            yellow: {light: '#eab308', dark: '#a16207'},
            orange: {light: '#f97316', dark: '#c2410c'},
            red: {light: '#ef4444', dark: '#b91c1c'},
            purple: {light: '#8b5cf6', dark: '#6d28d9'},
            pink: {light: '#ec4899', dark: '#be185d'},
            teal: {light: '#14b8a6', dark: '#0f766e'},
        };
        const UI_THEME_COLORS = {
            Red: '#ef4444', Orange: '#f97316', Amber: '#f59e0b',
            Yellow: '#eab308', Lime: '#84cc16', Green: '#22c55e',
            Emerald: '#10b981', Teal: '#14b8a6', Cyan: '#06b6d4',
            Sky: '#0ea5e9', Blue: '#3b82f6', Indigo: '#6366f1',
            Violet: '#8b5cf6', Purple: '#a855f7', Fuchsia: '#d946ef',
            Pink: '#ec4899', Rose: '#f43f5e', Slate: '#64748b'
        };
        let conversations = [];
        let folders = [];
        let astras = [];
        let personalMemories = [];
        let activeConversationId = null;
        let config = {
            apiKeys: { gemini: '', openrouter: '' },
            defaultModel: MODELS[0].id,
            theme: 'light',
            modelSettings: [],
            enableFollowUp: true,
            enableAutoWebSearch: false,
            aiBubbleColor: 'default',
            userBubbleColor: 'default',
            autoNaming: true,
            lastUsedModel: null,
            memoryEnabled1: true,
            enableAutoMemory: true,
            customWallpaper: null,
            wallpaperBrightness: 'light',
            uiTheme: {
                mode: 'default',
                style: 'single',
                customColor: '#3b82f6',
                adaptiveColor: '#3b82f6',
                adaptivePalette: [],
                adaptiveGradient: ''
            },
            uiLanguage: 'zh-TW',
            aiDefaultLanguage: 'zh-TW',
            enableUpdateNotifications: true,
            lastSeenVersion: '',
            isLearningMode: false,
            isDeepResearchMode: false, // ✨ 新增狀態
            deepResearchQueryCount: 0, // ✨ 新增這一行，0 代表自動
        };
        let itemToRename = { id: null, type: null };
        let folderToCustomize = null;
        let currentUser = null;
        let abortController = null;
        let isSelectionMode = false;
        let selectedConversationIds = new Set();
        let uploadedFiles = [];
        let sidebarOpen = false;
        let isFollowUpExpanded = true;
        let editingAstrasId = null;
        let currentSpeechRecognition = null;
        let currentVoiceTarget = null;
        let modelPieChart = null;
        let timeDistChart = null;
        let cropperInstance = null;
        let messageObserver = null;
        let currentStoreCategory = '全部';
        let editingAstraForAvatarId = null;
        let isAutoScrolling = false;
        let isTrashSelectionMode = false;
        let selectedTrashIds = new Set();
        let originalMemorySettings = {}; // ✨ 新增：用於儲存原始記憶設定
        const DB_NAME = 'ChatAppDB';
        const STORE_NAME = 'keyValue';
        let db;
        async function openDB() {
            if (db) return db;
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(DB_NAME, 1);
                request.onupgradeneeded = (e) => {
                    const idb = e.target.result;
                    idb.createObjectStore(STORE_NAME, { keyPath: 'key' });
                };
                request.onsuccess = (e) => {
                    db = e.target.result;
                    resolve(db);
                };
                request.onerror = (e) => reject(e.target.error);
            });
        }
        async function getItem(key) {
            const idb = await openDB();
            return new Promise((resolve, reject) => {
                const tx = idb.transaction(STORE_NAME, 'readonly');
                const store = tx.objectStore(STORE_NAME);
                const req = store.get(key);
                req.onsuccess = () => resolve(req.result ? req.result.value : null);
                req.onerror = reject;
            });
        }
        async function setItem(key, value) {
            const idb = await openDB();
            return new Promise((resolve, reject) => {
                const tx = idb.transaction(STORE_NAME, 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                store.put({ key, value });
                tx.oncomplete = resolve;
                tx.onerror = reject;
            });
        }
        async function removeItem(key) {
            const idb = await openDB();
            return new Promise((resolve, reject) => {
                const tx = idb.transaction(STORE_NAME, 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                store.delete(key);
                tx.oncomplete = resolve;
                tx.onerror = reject;
            });
        }
        const hashString = async (str) => {
            const data = new TextEncoder().encode(str);
            const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        };
        const hexToRgba = (hex, alpha = 1) => {
            if (!hex) return `rgba(255, 255, 255, ${alpha})`;
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            if (!result) return `rgba(255, 255, 255, ${alpha})`;
            const r = parseInt(result[1], 16);
            const g = parseInt(result[2], 16);
            const b = parseInt(result[3], 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
        const formatFullTimestamp = (isoString) => {
            if (!isoString) return '';
            const date = new Date(isoString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        };
        const getConfigKey = () => `chatConfig_v_v8.6_${currentUser.username}`;
        const getAppDataKey = () => `chatAppData_v8.6_${currentUser.username}`;
        const getUserKey = (username) => `chatUser_${username}`;
        const showNotification = (message, type = 'success') => {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            ALL_ELEMENTS.notificationContainer.appendChild(notification);
            setTimeout(() => { notification.remove(); }, 3000);
        };
        const toggleModal = (modalElement, show) => {
            if (!modalElement) return;
            if (show) {
                document.body.classList.add('modal-open');
                modalElement.classList.remove('hidden');
                requestAnimationFrame(() => {
                    modalElement.classList.add('visible');
                });
            } else {
                document.body.classList.remove('modal-open');
                modalElement.classList.remove('visible');
                const onTransitionEnd = () => {
                    modalElement.classList.add('hidden');
                    modalElement.removeEventListener('transitionend', onTransitionEnd);
                };
                modalElement.addEventListener('transitionend', onTransitionEnd);
            }
        };
         document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal').forEach(m => {
    if (!m.classList.contains('visible')) {
      m.classList.add('hidden');   // display:none
      m.classList.remove('visible');
    }
  });
});
        const showCustomDialog = (options) => {
            return new Promise((resolve) => {
                const { title, message, input = null, buttons, dialogClass = '' } = options;
                const dialogBox = ALL_ELEMENTS.customDialogModal.querySelector('.bg-\\[var\\(--modal-bg\\)\\]');
                if (dialogClass) {
                    dialogBox.classList.add(dialogClass);
                }
                ALL_ELEMENTS.customDialogTitle.textContent = title;
                ALL_ELEMENTS.customDialogMessage.textContent = message;
                if (input) {
                    ALL_ELEMENTS.customDialogInput.type = input.type || 'text';
                    ALL_ELEMENTS.customDialogInput.value = '';
                    ALL_ELEMENTS.customDialogInput.placeholder = input.placeholder || '';
                    ALL_ELEMENTS.customDialogInputContainer.classList.remove('hidden');
                } else {
                    ALL_ELEMENTS.customDialogInputContainer.classList.add('hidden');
                }
                ALL_ELEMENTS.customDialogButtons.innerHTML = '';
                buttons.forEach(btnInfo => {
                    const button = document.createElement('button');
                    button.textContent = btnInfo.text;
                    button.className = btnInfo.class;
                    button.onclick = () => {
                        toggleModal(ALL_ELEMENTS.customDialogModal, false);
                        if (dialogClass) {
                            dialogBox.classList.remove(dialogClass);
                        }
                        const inputValue = input ? ALL_ELEMENTS.customDialogInput.value : null;
                        resolve(btnInfo.value(inputValue));
                    };
                    ALL_ELEMENTS.customDialogButtons.appendChild(button);
                });
                toggleModal(ALL_ELEMENTS.customDialogModal, true);
                if (input) { ALL_ELEMENTS.customDialogInput.focus(); }
            });
        };
        const showCustomConfirm = (message, title = '請確認') => showCustomDialog({ title, message, buttons: [{ text: '取消', class: 'bg-[var(--hover-bg)] px-4 py-2 rounded-md hover:bg-[var(--active-bg)]', value: () => false }, { text: '確定', class: 'px-4 py-2 rounded-md btn-primary', value: () => true }] });
        const showCustomPrompt = (message, title = '請輸入', inputType = 'text') => showCustomDialog({ title, message, input: { type: inputType, placeholder: '請在此輸入...' }, buttons: [{ text: '取消', class: 'bg-[var(--hover-bg)] px-4 py-2 rounded-md hover:bg-[var(--active-bg)]', value: () => null }, { text: '確定', class: 'px-4 py-2 rounded-md btn-primary', value: (val) => val }] });
        const throttle = (func, limit) => {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        };
        const renderMarkdown = (text) => {
            const dirty = marked.parse(text);
            const clean = DOMPurify.sanitize(dirty);
            return clean;
        };
        /**
 * 渲染含有數學/化學公式的 Markdown 文本。
 * @param {string} text - 包含 Markdown 和 KaTeX 公式的原始文本。
 * @returns {string} - 渲染後的 HTML 字串。
 */
function renderMarkdownWithFormulas(text) {
    // 首先，使用您現有的函式處理基礎 Markdown 和安全性過濾
    let html = renderMarkdown(text);

    // 使用規則運算式來尋找並替換區塊級公式 ($$ ... $$)
    // marked.js 通常會把它們包在 <p>...</p> 裡面，所以我們匹配這種模式
    html = html.replace(/<p>\$\$(.*)\$\$<\/p>/g, (match, formula) => {
        try {
            // 將公式文字解碼 (例如 &lt; 會變回 <)
            const decodedFormula = new DOMParser().parseFromString(formula, "text/html").documentElement.textContent;
            // 使用 KaTeX 渲染成 HTML 字串 (displayMode: true 代表是區塊)
            return katex.renderToString(decodedFormula, {
                displayMode: true,
                throwOnError: false // 如果公式語法錯誤，不要拋出異常中斷程式
            });
        } catch (e) {
            console.error("KaTeX block rendering error:", e);
            return `<p style="color: red;">[數學公式渲染錯誤: ${formula}]</p>`; // 出錯時顯示錯誤訊息
        }
    });

    // 使用規則運算式尋找並替換行內公式 ($ ... $)
    html = html.replace(/\$(.*?)\$/g, (match, formula) => {
        // 避免匹配到已經被處理過的 HTML 標籤
        if (match.includes('<') || match.includes('>')) return match;
        try {
            const decodedFormula = new DOMParser().parseFromString(formula, "text/html").documentElement.textContent;
            // 使用 KaTeX 渲染 (displayMode: false 代表是行內)
            return katex.renderToString(decodedFormula, {
                displayMode: false,
                throwOnError: false
            });
        } catch (e) {
            console.error("KaTeX inline rendering error:", e);
            return `<span style="color: red;">[公式錯誤: ${formula}]</span>`;
        }
    });

    return html;
}
        const saveConfig = async () => { if (currentUser) await setItem(getConfigKey(), JSON.stringify(config)); };
        const loadConfig = async () => {
            if (!currentUser) return;
            const saved = await getItem(getConfigKey());
            if (saved) {
                const savedConfig = JSON.parse(saved);
                let openrouterKey = '';
                if (savedConfig.apiKeys && typeof savedConfig.apiKeys.openrouter === 'object' && savedConfig.apiKeys.openrouter !== null) {
                    openrouterKey = Object.values(savedConfig.apiKeys.openrouter)[0] || '';
                } else if (savedConfig.apiKeys && typeof savedConfig.apiKeys.openrouter === 'string') {
                    openrouterKey = savedConfig.apiKeys.openrouter;
                }
                const savedOpenrouterKeys = savedConfig.apiKeys?.openrouter || {};
                const defaultConfig = {
                    ...config,
                    ...savedConfig,
                    apiKeys: {
                        ...config.apiKeys,
                        ...savedConfig.apiKeys,
                        openrouter: openrouterKey
                    },
                    uiTheme: { ...config.uiTheme, ...(savedConfig.uiTheme || {}) }
                };
                defaultConfig.uiTheme.style = defaultConfig.uiTheme.style || 'single';
                defaultConfig.uiTheme.adaptivePalette = defaultConfig.uiTheme.adaptivePalette || [];
                defaultConfig.uiTheme.adaptiveGradient = defaultConfig.uiTheme.adaptiveGradient || '';
                config = defaultConfig;
            }
            const savedModelSettings = config.modelSettings || [];
            const allModelIds = new Set(MODELS.map(m => m.id));
            const savedSettingIds = new Set(savedModelSettings.map(s => s.id));
            MODELS.forEach((model, index) => {
                if (!savedSettingIds.has(model.id)) {
                    savedModelSettings.push({ id: model.id, hidden: false, order: savedModelSettings.length });
                }
            });
            config.modelSettings = savedModelSettings.filter(s => allModelIds.has(s.id));
            config.modelSettings.sort((a, b) => a.order - b.order);
            config.modelSettings.forEach((s, index) => s.order = index);
            if (!allModelIds.has(config.defaultModel)) {
                config.defaultModel = MODELS[0].id;
            }
            if (!allModelIds.has(config.lastUsedModel)) {
                config.lastUsedModel = MODELS[0].id;
            }
        };
        const saveAppData = async () => { if (currentUser) await setItem(getAppDataKey(), JSON.stringify({ conversations, folders, astras, personalMemories })); };
        const loadAppData = async () => {
            if (!currentUser) return;
            const saved = await getItem(getAppDataKey());
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    folders = (data.folders || []).map(f => ({...getDefaultFolder(), ...f}));
                    conversations = (data.conversations || []).map(c => ({
                        archived: false, summary: '', folderId: null, isWebSearchEnabled: false, astrasId: null, pinned: false, deletedAt: null, ...c,
                        unsentMessage: c.unsentMessage || '',
                        genConfig: c.genConfig || getDefaultGenConfig(),
                        lastUpdatedAt: c.lastUpdatedAt || (c.messages && c.messages.length > 0 ? c.messages[c.messages.length - 1].createdAt : c.createdAt),
                        messages: (c.messages || []).map(m => ({
                            ...m,
                            createdAt: m.createdAt || c.createdAt,
                            parts: m.parts || [{ text: m.content }]
                        }))
                    }));
                    astras = (data.astras || []).map(a => ({ avatarUrl: null, officialId: null, ...a }));
                    personalMemories = data.personalMemories || [];
                } catch (e) {
                    console.error("Failed to parse app data:", e);
                    showNotification("讀取對話紀錄失敗，資料可能已損毀。", "error");
                    conversations = [];
                    folders = [];
                    astras = [];
                    personalMemories = [];
                    await removeItem(getAppDataKey());
                }
            } else {
                conversations = [];
                folders = [];
                astras = [];
                personalMemories = [];
            }
        };
        const getDefaultGenConfig = () => ({ temperature: 0.7, topP: 0.95, maxTokens: null });
        const getDefaultFolder = () => ({ color: 'gray', icon: '📁' , isOpen: false});
        const createBaseConversation = (title) => {
            const defaultModelInfo = MODELS.find(m => m.id === config.lastUsedModel) || MODELS.find(m => m.id === config.defaultModel) || MODELS[0];
            const now = new Date().toISOString();
            return {
                id: crypto.randomUUID(),
                title: title,
                summary: '',
                messages: [],
                model: defaultModelInfo.id,
                provider: defaultModelInfo.provider,
                archived: false,
                createdAt: now,
                lastUpdatedAt: now,
                genConfig: getDefaultGenConfig(),
                isRenamed: false,
                folderId: null,
                astrasId: null,
                isWebSearchEnabled: false,
                pinned: false,
                isTemporary: true,
                isNaming: false,
                deletedAt: null,
                 unsentMessage: ''
            };
        };
        const startNewChat = () => {
            const oldTempChatCount = conversations.length;
            conversations = conversations.filter(c => !c.isTemporary || c.messages.length > 0);
            if (conversations.length < oldTempChatCount) {
                 saveAppData();
            }
            uploadedFiles = [];
            const newConv = createBaseConversation('新對話');
            conversations.unshift(newConv);
            activeConversationId = newConv.id;
            renderAll();
            ALL_ELEMENTS.messageInput.value = '';
            setTimeout(adjustTextareaHeight, 0);
            toggleSidebar(false);
            updateInputState();
            updateApiKeyWarningBadge();
            renderFollowUpPrompts([]);
        };
        const loadChat = (id) => {
            if (messageObserver) {
        messageObserver.disconnect();
    }
            if (id !== activeConversationId) {
                const previousConv = getActiveConversation();
                if (previousConv && previousConv.isTemporary && previousConv.messages.length === 0) {
                    conversations = conversations.filter(c => c.id !== previousConv.id);
                }
                activeConversationId = id;
                uploadedFiles = [];
                renderAll();
                const conv = getActiveConversation();
                ALL_ELEMENTS.messageInput.value = conv ? conv.unsentMessage || '' : '';
                setTimeout(adjustTextareaHeight, 0);
            }
            updateInputState();
            updateApiKeyWarningBadge();
            renderFollowUpPrompts([]);
            updateFunctionButtonsState();
        };
        const deleteChat = async (id, event) => {
    event?.stopPropagation();
    const conv = conversations.find(c => c.id === id);
    if (conv) {
        conv.deletedAt = new Date().toISOString();
        if (conv.folderId) {
            const folder = folders.find(f => f.id === conv.folderId);
            if (folder) {
                folder.conversationIds = folder.conversationIds.filter(cid => cid !== id);
            }
            conv.folderId = null;
        }
        await saveAppData();


        // ↓↓↓↓↓↓ 就是這裡被修改了 ↓↓↓↓↓↓
        if (activeConversationId === id) {
            startNewChat();
        } 
        // ↑↑↑↑↑↑ 就是這裡被修改了 ↑↑↑↑↑↑
        
        else {
            renderAll();
        }
        showNotification(i18n[config.uiLanguage].chatMovedToTrash || '對話已移至垃圾桶。', 'success');
    }
};
        const archiveChat = async (id, event) => {
            event?.stopPropagation();
            const conv = conversations.find(c => c.id === id);
            if(conv) conv.archived = true;
            await saveAppData();
            if (activeConversationId === id) {
                const nextConv = conversations.find(c => !c.archived && !c.deletedAt);
                activeConversationId = nextConv ? nextConv.id : null;
                if (!activeConversationId) startNewChat();
                else loadChat(activeConversationId);
            } else {
                renderAll();
            }
        };
        const unarchiveChat = async (id, event) => {
            event?.stopPropagation();
            const conv = conversations.find(c => c.id === id);
            if(conv) conv.archived = false;
            await saveAppData();
            renderAll();
        };
        const showArchivedChatPreview = (id, event) => {
            event?.stopPropagation();
            const conv = conversations.find(c => c.id === id);
            if (!conv) return;
            ALL_ELEMENTS.viewArchivedTitle.textContent = conv.title;
            const contentContainer = ALL_ELEMENTS.viewArchivedContent;
            contentContainer.innerHTML = '';
            if (conv.messages.length === 0) {
                contentContainer.innerHTML = '<p class="text-center text-[var(--text-secondary)]">此對話沒有訊息。</p>';
            } else {
                conv.messages.forEach(msg => {
                    const isUser = msg.role === 'user';
                    const messageDiv = document.createElement('div');
                    messageDiv.className = `flex items-start gap-2 md:gap-4 ${isUser ? 'justify-end user-message' : 'model-message'}`;
                    const icon = isUser
                        ? `<div class="bg-blue-600 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold">${currentUser ? currentUser.username.charAt(0).toUpperCase() : 'Y'}</div>`
                        : `<div class="bg-gray-800 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 15h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></div>`;
                    let contentHTML = '';
                    msg.parts.forEach(part => {
                        if (part.text) {
                             contentHTML += `<div>${isUser ? part.text.replace(/\n/g, '<br>') : renderMarkdown(part.text)}</div>`;
                        } else if (part.inlineData) {
                            const src = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                             if (part.inlineData.mimeType.startsWith('image/')) {
                                contentHTML += `<img src="${src}" class="mt-2 max-w-xs max-h-48 rounded-lg object-cover border border-[var(--border-color)]">`;
                            }
                        }
                    });
                    const messageBubble = `
                        <div class="p-3 md:p-4 rounded-lg shadow-sm max-w-full md:max-w-xl message-bubble">
                            <div class="prose prose-sm max-w-none message-content ${isUser ? 'text-white' : 'text-[var(--text-primary)]'}">${contentHTML}</div>
                        </div>`;
                    messageDiv.innerHTML = isUser ? `${messageBubble}${icon}` : `${icon}${messageBubble}`;
                    contentContainer.appendChild(messageDiv);
                });
            }
            toggleModal(ALL_ELEMENTS.viewArchivedChatModal, true);
        };
        const togglePinChat = async (id, event) => {
            event?.stopPropagation();
            const conv = conversations.find(c => c.id === id);
            if (conv) {
                conv.pinned = !conv.pinned;
                await saveAppData();
                renderAll();
            }
        };
        const showRenameModal = (id, type, event) => {
            event?.stopPropagation();
            itemToRename = { id, type };
            let currentTitle = '';
            if (type === 'conversation') {
                const conv = conversations.find(c => c.id === id);
                if (conv) currentTitle = conv.title;
            } else if (type === 'folder') {
                const folder = folders.find(f => f.id === id);
                if (folder) currentTitle = folder.name;
            }
            ALL_ELEMENTS.renameModal.querySelector('h2').textContent = `重新命名${type === 'folder' ? '資料夾' : '對話'}`;
            ALL_ELEMENTS.renameInput.value = currentTitle;
            toggleModal(ALL_ELEMENTS.renameModal, true);
            ALL_ELEMENTS.renameInput.focus();
        };
        const handleRename = async () => {
            const newTitle = ALL_ELEMENTS.renameInput.value.trim();
            if (!newTitle || !itemToRename.id) return;
            if (itemToRename.type === 'conversation') {
                const conv = conversations.find(c => c.id === itemToRename.id);
                if (conv) { conv.title = newTitle; conv.isRenamed = true; }
            } else if (itemToRename.type === 'folder') {
                const folder = folders.find(f => f.id === itemToRename.id);
                if (folder) { folder.name = newTitle; }
            }
            await saveAppData();
            renderAll();
            toggleModal(ALL_ELEMENTS.renameModal, false);
            itemToRename = { id: null, type: null };
        };
        const getActiveConversation = () => {
            return conversations.find(c => c.id === activeConversationId);
        };
        const renderAll = () => {
            renderHistorySidebar();
            renderFolders();
            renderAstras();
            renderChat();
            renderArchivedChats();
            renderBatchActionBar();
            renderFilePreviews();
            updateFollowUpUI();
            applyLanguage(config.uiLanguage);
        };
        const renderHistorySidebar = () => {
            ALL_ELEMENTS.historyList.innerHTML = '';
            const sortedConversations = conversations
                .filter(c => !c.archived && !c.folderId && !c.deletedAt)
                .sort((a, b) => {
                    if (a.pinned && !b.pinned) return -1;
                    if (!a.pinned && b.pinned) return 1;
                    const dateB = b.lastUpdatedAt || b.createdAt;
                    const dateA = a.lastUpdatedAt || a.createdAt;
                    return new Date(dateB) - new Date(dateA);
                });
            sortedConversations.forEach(conv => {
                if (conv.isTemporary) {
                    return;
                }
                if (conv.isNaming) {
                    const thinkingPlaceholder = document.createElement('div');
                    thinkingPlaceholder.className = 'sidebar-item p-3 rounded-lg flex items-center gap-3 text-[var(--text-secondary)] italic';
                    thinkingPlaceholder.innerHTML = `
                        <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span data-lang-key="naming">${i18n[config.uiLanguage].naming || 'AI思考中...'}</span>
                    `;
                    ALL_ELEMENTS.historyList.appendChild(thinkingPlaceholder);
                    return;
                }
                ALL_ELEMENTS.historyList.appendChild(createConversationElement(conv));
            });
        };
        const renderAstras = () => {
            ALL_ELEMENTS.astrasList.innerHTML = '';
            astras.forEach(ast => {
                const item = document.createElement('div');
                item.className = `sidebar-item w-full text-left p-2.5 rounded-lg flex items-center justify-between cursor-pointer ${ast.id === getActiveAstrasId() && !isSelectionMode ? 'active' : ''}`;
                item.dataset.id = ast.id;
                const avatarUrl = ast.avatarUrl;
                const initials = ast.name.charAt(0);
                const avatarElement = `
                    <div class="astras-sidebar-avatar">
                        ${avatarUrl ? `<img src="${avatarUrl}" class="w-full h-full object-cover rounded-full">` : initials}
                    </div>`;
                item.innerHTML = `
                    <div class="flex items-center truncate flex-1">
                        ${avatarElement}
                        <span class="truncate pr-2 text-sm">${ast.name}</span>
                    </div>
                    <button class="astras-options-btn flex-shrink-0 w-6 h-6 rounded-md hover:bg-[var(--hover-bg)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                `;
                let pressTimer = null;
                let touchMoved = false;
                const startPress = (e) => {
                    if (window.innerWidth >= 768 || isSelectionMode) return;
                    touchMoved = false;
                    pressTimer = setTimeout(() => {
                        e.preventDefault();
                        showMobileContextMenuForAstras(ast.id);
                        pressTimer = null;
                    }, 500);
                };
                const cancelPress = () => {
                    clearTimeout(pressTimer);
                    pressTimer = null;
                };
                const handleClick = () => {
                    if (pressTimer || !touchMoved) {
                        cancelPress();
                        if (isSelectionMode) return;
                        setAstrasForConversation(ast.id);
                        toggleSidebar(false);
                    }
                };
                item.addEventListener('touchstart', startPress, { passive: true });
                item.addEventListener('touchend', cancelPress);
                item.addEventListener('touchmove', () => { touchMoved = true; cancelPress(); }, { passive: true });
                item.addEventListener('mousedown', startPress);
                item.addEventListener('mouseup', cancelPress);
                item.addEventListener('mouseleave', cancelPress);
                item.addEventListener('click', handleClick);
                const optionsBtn = item.querySelector('.astras-options-btn');
                optionsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    createAstrasMenu(ast.id, optionsBtn);
                });
                ALL_ELEMENTS.astrasList.appendChild(item);
            });
        };
        const renderFolders = () => {
            ALL_ELEMENTS.folderList.innerHTML = '';
            folders.forEach(folder => {
                const folderConvs = folder.conversationIds
                    .map(id => conversations.find(c => c.id === id))
                    .filter(c => c && !c.archived && !c.deletedAt)
                    .sort((a,b) => {
                        if (a.pinned && !b.pinned) return -1;
                        if (!a.pinned && b.pinned) return 1;
                        const dateB = b.lastUpdatedAt || b.createdAt;
                        const dateA = a.lastUpdatedAt || a.createdAt;
                        return new Date(dateB) - new Date(dateA);
                    });
                const folderElement = document.createElement('div');
                folderElement.className = 'folder-item text-sm';
                folderElement.dataset.id = folder.id;
                folderElement.dataset.open = folder.isOpen;
                folderElement.innerHTML = `
                    <div class="folder-summary sidebar-item p-3 rounded-lg flex items-center justify-between">
                        <div class="flex items-center gap-2 truncate">
                            <svg class="folder-arrow flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            <span class="folder-icon mr-1">${folder.icon}</span>
                            <span class="font-medium truncate" style="color: ${FOLDER_COLORS[folder.color] || FOLDER_COLORS.gray};">${folder.name}</span>
                        </div>
                        <button data-id="${folder.id}" class="folder-options-btn flex-shrink-0 w-6 h-6 rounded-md hover:bg-[var(--active-bg)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
                    </div>
                    <div class="folder-content-container pl-4 mt-1 space-y-1"></div>
                `;
                const contentContainer = folderElement.querySelector('.folder-content-container');
                folderConvs.forEach(conv => {
                    contentContainer.appendChild(createConversationElement(conv));
                });
                const folderSummary = folderElement.querySelector('.folder-summary');
                let pressTimer = null;
                let touchMoved = false;
                const startPress = (e) => {
                    if (window.innerWidth >= 768 || isSelectionMode) return;
                    touchMoved = false;
                    pressTimer = setTimeout(() => {
                        e.preventDefault();
                        showMobileContextMenuForFolder(folder.id);
                        pressTimer = null;
                    }, 500);
                };
                const cancelPress = () => {
                    clearTimeout(pressTimer);
                    pressTimer = null;
                };
                const handleClick = (e) => {
                    if (pressTimer || !touchMoved) {
                        cancelPress();
                        if (e.target.closest('.folder-options-btn')) return;
                        const folderItem = e.currentTarget.closest('.folder-item');
                        const folderObj = folders.find(f => f.id === folderItem.dataset.id);
                        if (folderObj) {
                            folderObj.isOpen = !folderObj.isOpen;
                            folderItem.dataset.open = folderObj.isOpen;
                            saveAppData();
                        }
                    }
                };
                folderSummary.addEventListener('touchstart', startPress, { passive: true });
                folderSummary.addEventListener('touchend', cancelPress);
                folderSummary.addEventListener('touchmove', () => { touchMoved = true; cancelPress(); }, { passive: true });
                folderSummary.addEventListener('mousedown', startPress);
                folderSummary.addEventListener('mouseup', cancelPress);
                folderSummary.addEventListener('mouseleave', cancelPress);
                folderSummary.addEventListener('click', handleClick);
                const folderOptionsBtn = folderElement.querySelector('.folder-options-btn');
                folderOptionsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    createFolderMenu(folder.id, folderOptionsBtn);
                });
                ALL_ELEMENTS.folderList.appendChild(folderElement);
            });
        };
        const createConversationElement = (conv) => {
            const item = document.createElement('div');
            item.className = `sidebar-item w-full text-left p-3 rounded-lg flex items-center justify-between cursor-pointer ${conv.id === activeConversationId && !isSelectionMode ? 'active' : ''}`;
            item.dataset.id = conv.id;
            const modelInfo = MODELS.find(m => m.id === conv.model);
            const modelCodename = modelInfo ? modelInfo.name.split(' (')[0] : '';
            const modelNameSuffix = modelCodename ? `<span class="model-suffix">${modelCodename}</span>` : '';
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'flex-1 flex items-center justify-between truncate';
            contentWrapper.innerHTML = `
                <div class="flex-1 flex items-center gap-2 truncate">
                    <span class="truncate">${conv.title}${conv.pinned ? ' <span class="pinned-icon">📌</span>' : ''}</span>
                    ${modelNameSuffix}
                 </div>
                <button class="chat-options-btn flex-shrink-0 w-6 h-6 rounded-md hover:bg-[var(--hover-bg)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
            `;
            if (isSelectionMode) {
                item.classList.add('pr-2');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'conv-select-checkbox h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3 flex-shrink-0';
                checkbox.checked = selectedConversationIds.has(conv.id);
                checkbox.dataset.id = conv.id;
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        selectedConversationIds.add(conv.id);
                    } else {
                        selectedConversationIds.delete(conv.id);
                    }
                    renderBatchActionBar();
                });
                checkbox.addEventListener('click', e => e.stopPropagation());
                item.appendChild(checkbox);
                contentWrapper.querySelector('.chat-options-btn').classList.add('hidden');
            }
            item.appendChild(contentWrapper);
            let pressTimer = null;
            let touchMoved = false;
            const startPress = (e) => {
                if (window.innerWidth >= 768 || isSelectionMode) return;
                touchMoved = false;
                pressTimer = setTimeout(() => {
                    e.preventDefault();
                    showMobileContextMenu(conv.id, e.currentTarget);
                    pressTimer = null;
                }, 500);
            };
            const cancelPress = () => {
                clearTimeout(pressTimer);
                pressTimer = null;
            };
            const handleClick = () => {
                if (pressTimer || !touchMoved) {
                    cancelPress();
                    if (isSelectionMode) {
                        const checkbox = item.querySelector('.conv-select-checkbox');
                        if (checkbox) {
                            checkbox.checked = !checkbox.checked;
                            checkbox.dispatchEvent(new Event('change'));
                        }
                    } else {
                        loadChat(conv.id);
                        toggleSidebar(false);
                    }
                }
            };
            item.addEventListener('touchstart', startPress, { passive: true });
            item.addEventListener('touchend', cancelPress);
            item.addEventListener('touchmove', () => {
                touchMoved = true;
                cancelPress();
            }, { passive: true });
            item.addEventListener('mousedown', startPress);
            item.addEventListener('mouseup', cancelPress);
            item.addEventListener('mouseleave', cancelPress);
            item.addEventListener('click', handleClick);
            const chatOptionsBtn = contentWrapper.querySelector('.chat-options-btn');
            if (chatOptionsBtn) {
                chatOptionsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    createHistoryMenu(conv.id, chatOptionsBtn);
                });
            }
            return item;
        };
        const renderArchivedChats = () => {
            ALL_ELEMENTS.archivedChatsContainer.innerHTML = '';
            const archived = conversations.filter(c => c.archived).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
            if (archived.length === 0) {
                ALL_ELEMENTS.archivedChatsContainer.innerHTML = `<p class="text-sm text-[var(--text-secondary)] text-center p-4">${i18n[config.uiLanguage].noArchivedChats || '沒有已封存的對話。'}</p>`;
                return;
            }
            archived.forEach(conv => {
                const item = document.createElement('div');
                item.className = 'p-3 bg-[var(--sidebar-bg)] rounded-md border border-[var(--border-color)]';
                item.innerHTML = `
                    <div class="flex items-center justify-between">
                        <span class="truncate pr-2 font-medium">${conv.title}</span>
                        <div class="flex gap-2 flex-shrink-0">
                            <button data-id="${conv.id}" class="view-archived-btn text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200">${i18n[config.uiLanguage].view || '檢視'}</button>
                            <button data-id="${conv.id}" class="unarchive-btn text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200">${i18n[config.uiLanguage].restore || '還原'}</button>
                            <button data-id="${conv.id}" class="delete-btn text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200">${i18n[config.uiLanguage].delete || '刪除'}</button>
                        </div>
                    </div>
                    ${conv.summary ? `<p class="text-xs text-[var(--text-secondary)] mt-2">${conv.summary}</p>` : ''}
                `;
                ALL_ELEMENTS.archivedChatsContainer.appendChild(item);
            });
            ALL_ELEMENTS.archivedChatsContainer.querySelectorAll('.view-archived-btn').forEach(btn => btn.addEventListener('click', (e) => showArchivedChatPreview(e.target.dataset.id, e)));
            ALL_ELEMENTS.archivedChatsContainer.querySelectorAll('.unarchive-btn').forEach(btn => btn.addEventListener('click', (e) => unarchiveChat(e.target.dataset.id, e)));
            ALL_ELEMENTS.archivedChatsContainer.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', (e) => deleteChat(e.target.dataset.id, e)));
        };
        const renderChat = () => {
            const conv = getActiveConversation();
            const messageList = ALL_ELEMENTS.messageList;
            messageList.classList.remove('chat-view-transition');
            if (!conv) {
                messageList.innerHTML = '';
                ALL_ELEMENTS.headerTitle.textContent = i18n[config.uiLanguage].newChat;
                ALL_ELEMENTS.modelSwitcherContainer.innerHTML = '';
                renderInputIndicators();
                return;
            }
            ALL_ELEMENTS.headerTitle.textContent = conv.archived ? `(${i18n[config.uiLanguage].archived || '已封存'}) ${conv.title}` : conv.title;
            renderModelSwitcher();
            renderInputIndicators();
            messageList.innerHTML = '';
            if (conv.messages.length === 0) {
    const greeting = `${currentUser.username}, ${i18n[config.uiLanguage].howCanIHelp || '有什麼可以為您服務的嗎？'}`;
    messageList.innerHTML = `<div class="text-center text-[var(--text-primary)] mt-16 chat-greeting-message"><p class="text-2xl font-semibold">${greeting}</p></div>`;
} else {
                conv.messages.forEach((msg, index) => addMessageToUI(msg, index, false, false));
            }
            requestAnimationFrame(() => {
    setupMessageIntersectionObserver();
});
            void messageList.offsetWidth;
            messageList.classList.add('chat-view-transition');
            updateInputState();
        };
        
        const updateFunctionButtonsState = () => {
            const { cameraBtn, uploadImageBtn, uploadFileBtn, webSearchPopoverBtn, learningModeBtn, deepResearchBtn } = ALL_ELEMENTS;
            const conv = getActiveConversation();
            if (!conv) return;

            const modelInfo = MODELS.find(m => m.id === conv.model);
            const provider = modelInfo?.provider;

            // 預設先顯示所有按鈕
            [cameraBtn, uploadImageBtn, uploadFileBtn, webSearchPopoverBtn, learningModeBtn, deepResearchBtn].forEach(btn => btn.style.display = 'flex');
            document.querySelectorAll('#file-options-popover .border-t').forEach(sep => sep.style.display = 'block');
            
            if (provider === 'openrouter') {
                // 檢查當前 OpenRouter 模型是否支援圖片輸入
                const supportsVision = OPENROUTER_VISION_MODELS.includes(modelInfo?.id);

                // 無論如何，OpenRouter 模型都先隱藏檔案上傳和網路搜尋
                [uploadFileBtn, webSearchPopoverBtn].forEach(btn => btn.style.display = 'none');
                
                // 根據是否支援圖片，決定是否顯示相機和圖片按鈕
                [cameraBtn, uploadImageBtn].forEach(btn => btn.style.display = supportsVision ? 'flex' : 'none');

                // 根據按鈕的顯示狀態，決定是否隱藏分隔線
                const firstSeparator = document.querySelector('#file-options-popover .border-t');
                if (firstSeparator) {
                    firstSeparator.style.display = (supportsVision) ? 'block' : 'none';
                }
            }
        };

        const toggleLearningMode = async () => {
            if (config.isDeepResearchMode) {
                showNotification('研究模式啟用時，無法切換學習模式。', 'warning');
                return;
            }
            config.isLearningMode = !config.isLearningMode;
            await saveConfig();
            renderInputIndicators();
            updateFunctionButtonsState();
            ALL_ELEMENTS.fileOptionsPopover.classList.remove('visible');
            showNotification(config.isLearningMode ? (i18n[config.uiLanguage].learningEnabled || '學習模式已開啟') : (i18n[config.uiLanguage].learningDisabled || '學習模式已關閉'), 'success');
        };

        // ✨ 新增：深度研究模式切換函數
        const toggleDeepResearchMode = async () => {
            const conv = getActiveConversation();
            if (!conv) return;

            const modelInfo = MODELS.find(m => m.id === conv.model);
            
             if (config.isLearningMode) {
                showNotification('學習模式啟用時，無法切換研究模式。', 'warning');
                return;
            }

            config.isDeepResearchMode = !config.isDeepResearchMode;

            if (config.isDeepResearchMode) {
                // 啟用模式：儲存並關閉記憶
                originalMemorySettings = {
                    memoryEnabled1: config.memoryEnabled1,
                    enableAutoMemory: config.enableAutoMemory,
                };
                config.memoryEnabled1 = false;
                config.memoryEnabled2 = false;
                config.enableAutoMemory = false;
                showNotification(i18n[config.uiLanguage].researchEnabledFull || '研究模式已啟用。記憶功能已暫時關閉。', 'success');
            } else {
                // 關閉模式：還原記憶設定
                if (originalMemorySettings) {
                    config.memoryEnabled1 = originalMemorySettings.memoryEnabled1;
                    config.enableAutoMemory = originalMemorySettings.enableAutoMemory;
                }
                showNotification(i18n[config.uiLanguage].researchDisabledFull || '研究模式已關閉。記憶功能已還原。', 'success');
            }

            await saveConfig();
            renderInputIndicators();
            updateFunctionButtonsState();
            ALL_ELEMENTS.fileOptionsPopover.classList.remove('visible');
        };

        const renderInputIndicators = () => {
            const container = ALL_ELEMENTS.inputIndicatorContainer;
            const conv = getActiveConversation();
            const wrapper = document.querySelector('.input-wrapper');
            if (!wrapper) return;

            if (!conv) {
                if (container.children.length > 0) container.innerHTML = '';
                wrapper.classList.remove('has-indicators');
                return;
            }
        
            const activeIndicators = new Map();
            const astrasId = getActiveAstrasId();

             // ✨ 新增：研究模式指示器邏輯
            if (config.isDeepResearchMode) {
                activeIndicators.set('research-mode-indicator', {
                    id: 'research-mode-indicator',
                    html: `
                        <span class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <span>${i18n[config.uiLanguage].researchIndicator || '研究模式'}
                        </span>
                        <button id="close-research-mode-btn-input" class="ml-2 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10" title="${i18n[config.uiLanguage].closeResearchMode || '關閉研究模式'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    `,
                    eventListener: (el) => el.querySelector('#close-research-mode-btn-input').addEventListener('click', toggleDeepResearchMode)
                });
            }

            if (config.isLearningMode) {
                activeIndicators.set('learning-mode-indicator', {
                    id: 'learning-mode-indicator',
                    html: `
                        <span class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5v12z"/></svg>
                            <span>${i18n[config.uiLanguage].learningIndicator || '學習'}</span>
                        </span>
                        <button id="close-learning-mode-btn-input" class="ml-2 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10" title="${i18n[config.uiLanguage].closeLearning || '關閉學習'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    `,
                    eventListener: (el) => el.querySelector('#close-learning-mode-btn-input').addEventListener('click', toggleLearningMode)
                });
            }
        
            if (astrasId) {
                const ast = astras.find(a => a.id === astrasId);
                if (ast) {
                    activeIndicators.set('astras-input-indicator', {
                        id: 'astras-input-indicator',
                        html: `
                            <span class="flex items-center gap-1">
                                <span class="astras-sidebar-avatar" style="width: 18px; height: 18px; font-size: 0.7rem; margin-right: 4px;">
                                    ${ast.avatarUrl ? `<img src="${ast.avatarUrl}" class="w-full h-full object-cover rounded-full">` : ast.name.charAt(0)}
                                </span>
                                <span>${ast.name} ${i18n[config.uiLanguage].astrasActive || '使用中'}</span>
                            </span>
                            <button id="close-astras-btn-input" class="ml-2 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10" title="${i18n[config.uiLanguage].closeAstras || '關閉 Astras'}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        `,
                        eventListener: (el) => el.querySelector('#close-astras-btn-input').addEventListener('click', deactivateAstras)
                    });
                }
            }
        
            if (conv.isWebSearchEnabled) {
                activeIndicators.set('search-indicator', {
                    id: 'search-indicator',
                    html: `
                        <span class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            <span>${i18n[config.uiLanguage].search || '搜索'}</span>
                        </span>
                        <button id="close-search-btn-input" class="ml-2 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10" title="${i18n[config.uiLanguage].closeSearchMode || '關閉搜索'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    `,
                    eventListener: (el) => el.querySelector('#close-search-btn-input').addEventListener('click', async () => {
                        conv.isWebSearchEnabled = false;
                        await saveAppData();
                        renderInputIndicators();
                    })
                });
            }
        
            Array.from(container.children).forEach(child => {
                if (!activeIndicators.has(child.id)) {
                    child.classList.remove('enter');
                    child.classList.add('exit');
                    child.addEventListener('animationend', () => {
                        child.remove();
                        if (container.children.length === 0) {
                            wrapper.classList.remove('has-indicators');
                        }
                    }, { once: true });
                }
            });
        
            activeIndicators.forEach((indicatorData, key) => {
                if (!document.getElementById(indicatorData.id)) {
                    const indicator = document.createElement('div');
                    indicator.id = indicatorData.id;
                    indicator.className = 'input-indicator-item flex items-center justify-between text-sm font-medium px-2 py-1 rounded-full enter';
                    indicator.innerHTML = indicatorData.html;
                    container.appendChild(indicator);
                    indicatorData.eventListener(indicator);
                }
            });
            
            if (activeIndicators.size > 0) {
                wrapper.classList.add('has-indicators');
            } 
            else if (container.children.length === 0) {
                wrapper.classList.remove('has-indicators');
            }
        };
        const getActiveAstrasId = () => {
            const conv = getActiveConversation();
            return conv ? conv.astrasId : null;
        };
        const setAstrasForConversation = (astrasId) => {
            const conv = getActiveConversation();
            if (conv) {
                conv.astrasId = astrasId;
                saveAppData();
                renderAll();
                updateInputState();
            }
        };
        const deactivateAstras = () => {
            const conv = getActiveConversation();
            if (conv) {
                conv.astrasId = null;
                saveAppData();
                renderAll();
                updateInputState();
                showNotification(i18n[config.uiLanguage].astrasDeactivated || '已關閉 Astras。', 'success');
            }
        };
        const createAstras = async () => {
            editingAstrasId = null;
            ALL_ELEMENTS.astrasCreateModal.querySelector('h2').textContent = i18n[config.uiLanguage].createAstras;
            ALL_ELEMENTS.astrasNameInput.value = '';
            ALL_ELEMENTS.astrasDescInput.value = '';
            ALL_ELEMENTS.astrasInstructionsInput.value = '';
            toggleModal(ALL_ELEMENTS.astrasCreateModal, true);
        };
        const handleSaveAstras = async () => {
            const name = ALL_ELEMENTS.astrasNameInput.value.trim();
            const description = ALL_ELEMENTS.astrasDescInput.value.trim();
            const instructions = ALL_ELEMENTS.astrasInstructionsInput.value.trim();
            if (!name || !instructions) {
                showNotification(i18n[config.uiLanguage].nameAndInstructionsRequired || '名稱和指令為必填。', 'error');
                return;
            }
            if (editingAstrasId) {
                const ast = astras.find(a => a.id === editingAstrasId);
                if (ast) {
                    ast.name = name;
                    ast.description = description;
                    ast.instructions = instructions;
                    showNotification(i18n[config.uiLanguage].astrasUpdated || 'Astras 已更新');
                }
                editingAstrasId = null;
            } else {
                const newAstras = {
                    id: crypto.randomUUID(),
                    name,
                    description,
                    instructions,
                    avatarUrl: null,
                    officialId: null,
                };
                astras.unshift(newAstras);
                showNotification(i18n[config.uiLanguage].astrasCreated ||'Astras 已創建');
            }
            await saveAppData();
            renderAstras();
            toggleModal(ALL_ELEMENTS.astrasCreateModal, false);
            ALL_ELEMENTS.astrasNameInput.value = '';
            ALL_ELEMENTS.astrasDescInput.value = '';
            ALL_ELEMENTS.astrasInstructionsInput.value = '';
            ALL_ELEMENTS.astrasCreateModal.querySelector('h2').textContent = i18n[config.uiLanguage].createAstras;
        };
        const deleteAstras = async (id) => {
            if (!(await showCustomConfirm(i18n[config.uiLanguage].confirmDeleteAstras || '確定刪除此 Astras？'))) return;
            astras = astras.filter(a => a.id !== id);
            conversations.forEach(c => {
                if (c.astrasId === id) c.astrasId = null;
            });
            await saveAppData();
            renderAll();
            showNotification(i18n[config.uiLanguage].astrasDeleted || 'Astras 已刪除');
        };
        const createAstrasMenu = (astrasId, targetButton) => {
            const existingPopover = document.getElementById('history-popover');
            if (existingPopover) {
                existingPopover.remove();
                if (existingPopover.dataset.targetId === targetButton.id) return;
            }
            const rect = targetButton.getBoundingClientRect();
            const popover = document.createElement('div');
            popover.id = 'history-popover';
            popover.className = 'popover absolute w-48 rounded-lg border border-[var(--border-color)] z-50';
            popover.dataset.targetId = targetButton.id;
            const spaceBelow = window.innerHeight - rect.bottom;
            if (spaceBelow < 150) {
                popover.style.bottom = `${window.innerHeight - rect.top}px`;
                popover.style.transformOrigin = 'bottom';
            } else {
                popover.style.top = `${rect.bottom}px`;
                popover.style.transformOrigin = 'top';
            }
            popover.style.left = `${rect.left}px`;
            const astra = astras.find(a => a.id === astrasId);
            let menuHTML = '';
            if (astra && astra.officialId) {
                menuHTML = `
                    <button data-id="${astrasId}" class="edit-avatar-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].editAvatar || '編輯頭像'}</button>
                    <button data-id="${astrasId}" class="delete-astras-btn w-full text-left px-4 py-2 text-red-600 hover:bg-red-500/10 text-sm">${i18n[config.uiLanguage].delete || '刪除'}</button>
                `;
            } else {
                menuHTML = `
                    <button data-id="${astrasId}" class="edit-astras-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].edit || '編輯'}</button>
                    <button data-id="${astrasId}" class="edit-avatar-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].editAvatar || '編輯頭像'}</button>
                    <button data-id="${astrasId}" class="delete-astras-btn w-full text-left px-4 py-2 text-red-600 hover:bg-red-500/10 text-sm">${i18n[config.uiLanguage].delete || '刪除'}</button>
                `;
            }
            popover.innerHTML = menuHTML;
            document.body.appendChild(popover);
            requestAnimationFrame(() => popover.classList.add('visible'));
            const editBtn = popover.querySelector('.edit-astras-btn');
            if (editBtn) {
                editBtn.addEventListener('click', () => {
                    const ast = astras.find(a => a.id === astrasId);
                    if (ast) {
                        editingAstrasId = astrasId;
                        ALL_ELEMENTS.astrasNameInput.value = ast.name;
                        ALL_ELEMENTS.astrasDescInput.value = ast.description;
                        ALL_ELEMENTS.astrasInstructionsInput.value = ast.instructions;
                        ALL_ELEMENTS.astrasCreateModal.querySelector('h2').textContent = i18n[config.uiLanguage].editAstras || '編輯 Astras';
                        toggleModal(ALL_ELEMENTS.astrasCreateModal, true);
                    }
                    popover.remove();
                });
            }
            popover.querySelector('.edit-avatar-btn').addEventListener('click', () => {
                openAvatarEditor(astrasId);
                popover.remove();
            });
            popover.querySelector('.delete-astras-btn').addEventListener('click', () => { deleteAstras(astrasId); popover.remove(); });
        };
        const updateFileInputUI = () => {
            const { fileInputContainer } = ALL_ELEMENTS;
            fileInputContainer.classList.remove('hidden');
            const conv = getActiveConversation();
            const modelInfo = MODELS.find(m => m.id === conv?.model);
            if (modelInfo?.provider !== 'gemini' && uploadedFiles.length > 0) {
            }
        };
        const renderModelSwitcher = () => {
    const conv = getActiveConversation();
    ALL_ELEMENTS.modelSwitcherContainer.innerHTML = '';
    if (!conv) return;

    const processedModels = MODELS.map(model => {
        const provider = model.provider;
        let tier = [];
        let company = null;
        if (provider === 'gemini') {
            tier = ['free', 'paid'];
            company = 'google'; 
        } else if (provider === 'openrouter') {
            tier = model.isBeta ? [] : (model.id.includes(':free') ? ['free'] : ['paid']);
            company = model.id.split('/')[0];
        }
        return { ...model, tier, company };
    });
    const betaModels = processedModels.filter(m => m.isBeta);
    const standardModels = processedModels.filter(m => !m.isBeta);

    const visibleModels = config.modelSettings
        .filter(s => !s.hidden)
        .sort((a, b) => a.order - b.order)
        .map(s => processedModels.find(m => m.id === s.id))
        .filter(Boolean);

    const currentModel = processedModels.find(m => m.id === conv.model) || processedModels[0];
    const isArchived = conv.archived;
    const translations = i18n[config.uiLanguage] || i18n['zh-TW'];

    const popoverHTML = `
        <button id="current-model-btn" class="flex items-center gap-2 text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] px-2 py-1 md:px-3 rounded-md ${isArchived ? 'cursor-not-allowed' : ''}" ${isArchived ? 'disabled' : ''}>
            <span class="font-semibold text-sm md:text-base text-[var(--text-primary)]">${currentModel.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        
        <!-- ▼▼▼ 就是這一行被修改了！我們把 left-0 改成了 left-2 md:left-3 ▼▼▼ -->
        <div id="model-options-popover" class="popover absolute left-2 md:left-3 mt-6 w-72 md:w-80 rounded-lg border border-[var(--border-color)] z-50">
            <div id="model-views-container" style="width: 500%; display: flex; transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); align-items: flex-start;">
                <div id="provider-view" class="model-view" style="width: 20%; flex-shrink: 0; padding-top: 0.5rem; padding-bottom: 0.5rem;"></div>
                <div id="tier-view" class="model-view" style="width: 20%; flex-shrink: 0; padding-top: 0.5rem; padding-bottom: 0.5rem;"></div>
                <div id="company-view" class="model-view" style="width: 20%; flex-shrink: 0; padding-top: 0.5rem; padding-bottom: 0.5rem;"></div>
                <div id="category-view" class="model-view" style="width: 20%; flex-shrink: 0; padding-top: 0.5rem; padding-bottom: 0.5rem;"></div>
                <div id="model-list-view" class="model-view" style="width: 20%; flex-shrink: 0; padding-top: 0.5rem; padding-bottom: 0.5rem;"></div>
            </div>
        </div>
    `;
    ALL_ELEMENTS.modelSwitcherContainer.innerHTML = popoverHTML;

    const popover = document.getElementById('model-options-popover');
    const viewsContainer = document.getElementById('model-views-container');
    const providerView = document.getElementById('provider-view');
    const tierView = document.getElementById('tier-view');
    const companyView = document.getElementById('company-view');
    const categoryView = document.getElementById('category-view');
    const modelListView = document.getElementById('model-list-view');

    // ✨✨✨ 核心修正 1：修改 adjustPopoverHeight 函式 ✨✨✨
    const adjustPopoverHeight = (targetView) => {
        requestAnimationFrame(() => {
            // 從 CSS 中讀取我們設定的最大高度，例如 "calc(100vh - 150px)"
            const maxHeightStyle = window.getComputedStyle(popover).maxHeight;
            
            // 將 CSS 值轉換成數字（像素）
            // 這裡做一個簡化處理，直接用 vh 計算，在大多數情況下是準確的
            const maxHeightInPixels = window.innerHeight - 150; 
            
            // 取得當前內容實際需要的高度
            const contentHeight = targetView.scrollHeight;
            
            // 比較「需要的高度」和「允許的最大高度」，取較小者
            const newHeight = Math.min(contentHeight, maxHeightInPixels);

            // 只設定最外層彈窗的高度，內部容器會自動適應
            popover.style.height = `${newHeight}px`;
            viewsContainer.style.height = `${newHeight}px`; 
            // 我們不再需要手動設定 viewsContainer 的高度了
        });
    };

    const navigateToView = (viewIndex) => {
        viewsContainer.style.transform = `translateX(-${viewIndex * 20}%)`;
        const targetView = viewsContainer.children[viewIndex];
        adjustPopoverHeight(targetView);
    };

    const createModelOptionHTML = (model, descriptionText) => {
        return `
            <div data-model-id="${model.id}" class="model-option-btn-container ${isArchived ? 'cursor-not-allowed opacity-50' : ''}">
                <h4 class="font-semibold">${model.name}</h4>
                <p class="model-description">${descriptionText}</p>
            </div>
        `;
    };
    
    const createBackButtonHTML = (textKey, targetViewIndex) => {
        return `
            <button class="back-btn w-full flex items-center gap-2 text-left px-4 py-3 hover:bg-[var(--hover-bg)] text-sm font-semibold text-blue-600" data-target-view="${targetViewIndex}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                ${translations[textKey] || '返回'}
            </button>
            <div class="border-t border-[var(--border-color)] my-1 mx-2"></div>
        `;
    };

    const providers = [...new Set(standardModels.map(m => m.provider))];
    providerView.innerHTML = `
        <!-- ✨ 新增的測試版模型按鈕 -->
        ${betaModels.length > 0 ? `
        <button class="model-option-btn-container beta-btn" data-view-target="beta">
            <h4 class="font-semibold">${translations.betaModels || '測試版模型'}</h4>
            <p class="model-description">${translations.betaModelsDesc || '體驗最新功能與技術預覽'}</p>
        </button>
        <div class="border-t border-[var(--border-color)] my-1 mx-2"></div>
        ` : ''}

        <!-- 原有的提供商按鈕 -->
        ${providers.map(provider => `
            <button class="model-option-btn-container provider-btn" data-provider="${provider}">
                <h4 class="font-semibold capitalize">${provider}</h4>
            </button>
        `).join('')}
    `;

    if (betaModels.length > 0) {
        providerView.querySelector('.beta-btn').addEventListener('click', () => {
            // 直接跳轉到模型清單視圖 (View 4)
            modelListView.innerHTML = createBackButtonHTML('back', 0); // 返回按鈕
            modelListView.innerHTML += betaModels.map(model => {
                const descriptionText = translations[model.descriptionKey] || '';
                // 測試版模型不分付費與免費，所以 descriptionText 不需要 _tier_ 的後綴
                return createModelOptionHTML(model, descriptionText);
            }).join('');
            navigateToView(4);
        });
    }
    providerView.querySelectorAll('.provider-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const provider = btn.dataset.provider;
            tierView.innerHTML = createBackButtonHTML('back', 0);
            const tiers = ['free', 'paid'];
            tierView.innerHTML += tiers.map(tier => `
                <div class="model-option-btn-container tier-btn" data-provider="${provider}" data-tier="${tier}">
                    <h4 class="font-semibold capitalize">${tier === 'free' ? (translations.freeModels || '免費模型') : (translations.paidModels || '付費模型')}</h4>
                </div>
            `).join('');

            tierView.querySelectorAll('.tier-btn').forEach(tierBtn => {
                tierBtn.addEventListener('click', () => {
                    const selectedProvider = tierBtn.dataset.provider;
                    const selectedTier = tierBtn.dataset.tier;
                    
                    if (selectedProvider === 'gemini') {
                        const filteredModels = visibleModels.filter(m => m.provider === selectedProvider && m.tier.includes(selectedTier));
                        modelListView.innerHTML = createBackButtonHTML('back', 1);
                        modelListView.innerHTML += filteredModels.map(model => {
                            const baseKey = model.descriptionKey;
                            const tierKey = `${baseKey}_tier_${selectedTier}`;
                            const descriptionText = translations[tierKey] || '';
                            return createModelOptionHTML(model, descriptionText);
                        }).join('');
                        navigateToView(4);
                    } else { 
                        const companies = [...new Set(visibleModels
                            .filter(m => m.provider === selectedProvider && m.tier.includes(selectedTier))
                            .map(m => m.company)
                        )];
                        companyView.innerHTML = createBackButtonHTML('back', 1);
                        companyView.innerHTML += companies.map(company => `
                            <div class="model-option-btn-container company-btn" data-provider="${selectedProvider}" data-tier="${selectedTier}" data-company="${company}">
                                <h4 class="font-semibold capitalize">${company}</h4>
                            </div>
                        `).join('');
                        if (companies.length === 0) {
                            companyView.innerHTML += `<p class="p-4 text-center text-sm text-[var(--text-secondary)]">${translations.noModelsInTier || '此類別中沒有可用模型。'}</p>`;
                        }
                        
                        companyView.querySelectorAll('.company-btn').forEach(companyBtn => {
                            companyBtn.addEventListener('click', () => {
                                const finalProvider = companyBtn.dataset.provider;
                                const finalTier = companyBtn.dataset.tier;
                                const finalCompany = companyBtn.dataset.company;
                                const companyModels = visibleModels.filter(m => m.provider === finalProvider && m.tier.includes(finalTier) && m.company === finalCompany);
                                const hasCategories = finalCompany === 'openai' || finalCompany === 'x-ai' || finalCompany === 'qwen';

                                if (hasCategories) {
                                    const categories = [...new Set(companyModels.map(m => m.category || 'general'))];
                                    categoryView.innerHTML = createBackButtonHTML('back', 2);
                                    
                                    const categoryOrder = ['general', 'image', 'thinking', 'coding'];
                                    categories.sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

                                    categoryView.innerHTML += categories.map(cat => {
                                        const categoryNameKey = `category${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
                                        const categoryName = translations[categoryNameKey] || cat;
                                        return `<div class="model-option-btn-container category-btn" data-category="${cat}">
                                                    <h4 class="font-semibold">${categoryName}</h4>
                                                </div>`;
                                    }).join('');

                                    categoryView.querySelectorAll('.category-btn').forEach(catBtn => {
                                        catBtn.addEventListener('click', () => {
                                            const selectedCategory = catBtn.dataset.category;
                                            const finalModels = companyModels.filter(m => (m.category || 'general') === selectedCategory);
                                            
                                            modelListView.innerHTML = createBackButtonHTML('back', 3);
                                            modelListView.innerHTML += finalModels.map(model => {
                                                const baseKey = model.descriptionKey;
                                                const tierKey = `${baseKey}_tier_${finalTier}`;
                                                const descriptionText = translations[tierKey] || '';
                                                return createModelOptionHTML(model, descriptionText);
                                            }).join('');
                                            navigateToView(4);
                                        });
                                    });
                                    navigateToView(3);
                                } else {
                                    modelListView.innerHTML = createBackButtonHTML('back', 2);
                                    modelListView.innerHTML += companyModels.map(model => {
                                        const baseKey = model.descriptionKey;
                                        const tierKey = `${baseKey}_tier_${finalTier}`;
                                        const descriptionText = translations[tierKey] || '';
                                        return createModelOptionHTML(model, descriptionText);
                                    }).join('');
                                    navigateToView(4);
                                }
                            });
                        });
                        navigateToView(2);
                    }
                });
            });
            navigateToView(1);
        });
    });

    viewsContainer.addEventListener('click', (e) => {
        const backBtn = e.target.closest('.back-btn');
        if (backBtn) {
            const targetViewIndex = parseInt(backBtn.dataset.targetView, 10);
            navigateToView(targetViewIndex);
        }
    });

    modelListView.addEventListener('click', (e) => {
        const modelBtn = e.target.closest('.model-option-btn-container');
        if (!modelBtn || !modelBtn.dataset.modelId) return;
        if (isArchived) return;
        const newModelId = modelBtn.dataset.modelId;
        const newModelInfo = MODELS.find(m => m.id === newModelId);
        if (newModelInfo) {
            conv.model = newModelInfo.id;
            conv.provider = newModelInfo.provider;
            config.lastUsedModel = newModelId;
            if (config.isDeepResearchMode && newModelInfo.provider !== 'gemini') {
                toggleDeepResearchMode();
            }
            saveAppData();
            saveConfig();
            renderAll();
        }
        popover.classList.remove('visible');
    });

    document.getElementById('current-model-btn').addEventListener('click', () => {
        const isVisible = popover.classList.toggle('visible');
        if (isVisible) {
            navigateToView(0);
        } else {
            // ✨✨✨ 核心修正 2：關閉時，同時重置內外兩個容器的高度 ✨✨✨
            popover.style.height = ''; 
            viewsContainer.style.height = '';
        }
    });
};
        const addMessageToUI = (msg, index, shouldSave = true, shouldScroll = true) => {
            const conv = getActiveConversation();
            if (shouldSave) {
                 conv.messages.push(msg);
                if (conv.messages.length === 1 && msg.role === 'user' && conv.isTemporary && !conv.isRenamed && config.autoNaming) {
                    const textPart = msg.parts.find(p => p.text);
                    if (textPart) {
                        conv.title = textPart.text.substring(0, 30) || i18n[config.uiLanguage].newChat || '新對話';
                        ALL_ELEMENTS.headerTitle.textContent = conv.title;
                    }
                }
                saveAppData();
            }
            const messageDiv = document.createElement('div');
            messageDiv.dataset.messageIndex = index;
            const isUser = msg.role === 'user';
            messageDiv.className = `message-item flex items-start gap-2 md:gap-4 ${isUser ? 'justify-end user-message' : 'model-message'}`;
            const icon = isUser ? `<div class="bg-blue-600 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold">${currentUser ? currentUser.username.charAt(0).toUpperCase() : 'Y'}</div>` : `<div class="bg-gray-800 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 15h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></div>`;
            let contentHTML = '';
            let actionButtons = '';
            let contentPaddingClass = '';
            const isLoadingMessage = !isUser && msg.parts.length === 1 && msg.parts[0].text === '...';
            if (isLoadingMessage) {
            contentHTML = `<div class="typing-cursor">&nbsp;</div>`;
        } else {
                let textPartsContent = [];
                let mediaPartsContent = [];
                msg.parts.forEach(part => {
                    if (part.text) {
                        textPartsContent.push(part.text);
                    } else if (part.inlineData) {
                        mediaPartsContent.push(part.inlineData);
                    }
                });
                if (textPartsContent.length > 0) {
                    const combinedText = textPartsContent.join('\n');
                    contentHTML += `<div>${isUser ? combinedText.replace(/\n/g, '<br>') : renderMarkdownWithFormulas(combinedText)}</div>`;
                }
                if (mediaPartsContent.length > 0) {
                    let mediaHTML = '<div class="mt-2 flex flex-wrap gap-2">';
                    mediaPartsContent.forEach(media => {
                        const src = `data:${media.mimeType};base64,${media.data}`;
                        if (media.mimeType.startsWith('image/')) {
                            mediaHTML += `<img src="${src}" class="max-w-xs max-h-48 rounded-lg object-cover border border-[var(--border-color)]">`;
                        } else {
                            mediaHTML += `<div class="p-2 bg-[var(--hover-bg)] rounded-lg text-sm flex items-center gap-2 border border-[var(--border-color)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                <span>${media.name || '檔案'}</span>
                            </div>`;
                        }
                    });
                    mediaHTML += '</div>';
                    contentHTML += mediaHTML;
                }
                if (!isUser) {
                    const timeString = formatFullTimestamp(msg.createdAt);
                    actionButtons = `
                        <div class="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                            <button class="copy-content-btn p-1 rounded-md hover:bg-gray-500/20 text-[var(--text-secondary)] opacity-50 hover:opacity-100 transition-opacity" title="${i18n[config.uiLanguage].copyContent || '複製內容'}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            </button>
                            <span class="text-xs text-gray-400">${timeString}</span></div>
                    `;
                    contentPaddingClass = 'pb-8';
                } else {
                    const currentConv = getActiveConversation();
                    if (currentConv && index + 1 < currentConv.messages.length && currentConv.messages[index + 1].role === 'model') {
                         actionButtons = `
                            <div class="absolute bottom-2 left-2 flex items-center">
                                <button class="delete-message-btn p-1 rounded-md hover:bg-gray-500/20 text-gray-400 hover:text-red-400 opacity-50 hover:opacity-100 transition-all" title="${i18n[config.uiLanguage].deletePair || '刪除此對話與 AI 回覆'}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                </button>
                            </div>
                        `;
                        contentPaddingClass = 'pb-8';
                    }
                }
            }
            const messageBubble = `
                <div class="p-3 md:p-4 rounded-lg shadow-sm max-w-full md:max-w-xl message-bubble relative ${isUser ? 'text-white' : ''}" >
                    <div class="prose prose-sm max-w-none ${isUser ? 'text-white' : 'text-[var(--text-primary)]'} ${contentPaddingClass} message-content">${contentHTML}</div>
                    ${actionButtons}
                </div>`;
            messageDiv.innerHTML = isUser ? `${messageBubble}${icon}` : `${icon}${messageBubble}`;
            if (ALL_ELEMENTS.messageList.querySelector('.text-center')) ALL_ELEMENTS.messageList.innerHTML = '';
            ALL_ELEMENTS.messageList.appendChild(messageDiv);
            if (shouldScroll) {
                if (isAutoScrolling) {
                    ALL_ELEMENTS.chatContainer.scrollTo({ top: ALL_ELEMENTS.chatContainer.scrollHeight, behavior: 'smooth' });
                }
            }
            return messageDiv;
        };
/**
 * ✨ 最終優化版：幀同步直接渲染打字機 (V5)
 *    - 徹底解決 UI 渲染延遲，真實反映模型輸出速度。
 *    - 使用 requestAnimationFrame 進行批次 DOM 更新，確保動畫流暢與高效能。
 *    - 當模型快速輸出大量文字時，會在下一幀立即渲染，沒有人工延遲。
 * @param {HTMLElement} targetElement 要顯示文字的目標 DOM 元素
 * @param {function(function(string): void): Promise<void>} streamApiCallFn 啟動 API 呼叫的函數
 * @param {AbortSignal} signal 用於中止操作的 AbortSignal
 * @returns {Promise<string>} 返回完整的 AI 回應字串
 */
async function typewriterStream(targetElement, streamApiCallFn, signal) {
    let fullText = '';
    let textQueue = ''; // 用於暫存兩次渲染幀之間收到的文字
    let isStreaming = true;
    let isFrameRequested = false; // 標記是否已經預約了下一幀的渲染

    targetElement.innerHTML = '';
    targetElement.classList.add('typing-cursor');

    // 這是渲染單一幀畫面的核心函式
    const renderFrame = () => {
        // 如果佇列裡有文字，就全部渲染出來
        if (textQueue.length > 0) {
            const chunkToRender = textQueue;
            textQueue = ''; // 清空佇列
            fullText += chunkToRender;

            const fragment = document.createDocumentFragment();
            for (const char of chunkToRender) {
                const span = document.createElement('span');
                // 這裡不再隱藏 Markdown 字元，直接輸出，讓 Markdown 渲染器處理
                span.className = 'fade-in-char'; 
                if (char === '\n') {
                    fragment.appendChild(document.createElement('br'));
                } else {
                    span.textContent = char;
                    fragment.appendChild(span);
                }
            }
            targetElement.appendChild(fragment);

            // 保持捲動到底部
            const chatContainer = ALL_ELEMENTS.chatContainer;
            const isNearBottom = chatContainer.scrollHeight - chatContainer.scrollTop <= chatContainer.clientHeight + 50;
            if (isNearBottom) {
                chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'auto' });
            }
        }
        
        // 渲染完成後，將標記重設為 false，允許下一次的資料觸發新的渲染
        isFrameRequested = false;
    };

    // 當 API 收到新資料時呼叫此函式
    const onChunkReceived = (chunk) => {
        textQueue += chunk;
        // 如果目前沒有正在等待的渲染幀，就預約下一幀
        if (!isFrameRequested) {
            isFrameRequested = true;
            requestAnimationFrame(renderFrame);
        }
    };

    // 使用 try...finally 結構確保無論成功或失敗都能正確清理
    try {
        // 等待 API 串流 पूरी तरह से खत्म हो जाए
        await streamApiCallFn(onChunkReceived);
    } catch (error) {
        console.error("Stream API call failed:", error);
        // 如果出錯，也要確保最後的清理工作能執行
        isStreaming = false;
        // 將錯誤訊息直接顯示在畫面上
        targetElement.innerHTML = renderMarkdown(`抱歉，發生錯誤：${error.message}`);
        // 向上層拋出錯誤
        throw error; 
    } finally {
        isStreaming = false;

        // 等待最後一幀的渲染完成 (如果有的話)
        // 這是為了處理這種情況：串流結束了，但最後一點文字還在佇列裡，等待下一幀渲染
        const waitForLastFrame = async () => {
            while (isFrameRequested || textQueue.length > 0) {
                // 如果還有佇列或正在等待的幀，就再預約一幀並等待
                if (!isFrameRequested) {
                    requestAnimationFrame(renderFrame);
                }
                await new Promise(resolve => setTimeout(resolve, 16)); // 等待一小段時間
            }
        };

        await waitForLastFrame();
        
        // 所有工作都完成了，進行最終清理
        targetElement.classList.remove('typing-cursor');
        // 為了確保所有 Markdown 和數學公式都能正確渲染，用完整的文字重新渲染一次最終結果
        targetElement.innerHTML = renderMarkdownWithFormulas(fullText);
    }

    // 返回完整的文字內容
    return fullText;
}

        const handleFormSubmit = async (e) => {
            e.preventDefault();
            if (abortController) return;
            const userMessage = ALL_ELEMENTS.messageInput.value.trim();
            if (!userMessage && uploadedFiles.length === 0) return;
            
            // ✨ 如果是深度研究模式，則呼叫專用函數
            if (config.isDeepResearchMode) {
                handleDeepResearch(userMessage);
                return;
            }

            renderFollowUpPrompts([]);
            const conv = getActiveConversation();
            if (conv.archived) return;
            abortController = new AbortController();
            updateSubmitButtonState(true);
            const userParts = [];
            if (userMessage) {
                userParts.push({ text: userMessage });
            }
            uploadedFiles.forEach(file => {
                userParts.push({
                    inlineData: {
                        mimeType: file.type,
                        data: file.base64.split(',')[1]
                    }
                });
            });
            const userMessageObject = { role: 'user', parts: userParts, createdAt: new Date().toISOString() };
            addMessageToUI(userMessageObject, conv.messages.length, true);
            conv.lastUpdatedAt = new Date().toISOString();
            conv.unsentMessage = '';
            if (conv.isTemporary) {
                conv.isTemporary = false;
                conv.isNaming = true;
                renderHistorySidebar();
                if (config.autoNaming) {
                    generateTitleAndSummary(conv);
                } else {
                    conv.isNaming = false;
                }
                await saveAppData();
            }
            if (config.enableAutoWebSearch && conv.provider === 'gemini' && !conv.isWebSearchEnabled) {
                try {
                    const needsSearch = await shouldPerformWebSearch(userMessage);
                    if (needsSearch) {
                        conv.isWebSearchEnabled = true;
                        showNotification(i18n[config.uiLanguage].autoSearchNotice || '偵測到問題需要連網搜索，已自動開啟。', 'warning');
                    }
                    renderInputIndicators();
                } catch(err) {
                    console.error("Auto web search check failed:", err);
                }
            }
            ALL_ELEMENTS.messageInput.value = '';
            uploadedFiles = [];
            adjustTextareaHeight();
            renderFilePreviews();
            const loadingMessageDiv = addMessageToUI({ role: 'model', parts: [{ text: '...' }], createdAt: new Date().toISOString() }, conv.messages.length, false);
            const contentDiv = loadingMessageDiv.querySelector('.message-content');
            
            try {
                let fullResponse = '';
                const finalAiMessage = { role: 'model', parts: [{ text: '' }], createdAt: new Date().toISOString() };

                // 1. 先等待 API 回應完全結束，獲取完整文字
                const completeResponse = await streamApiCall(
                    userParts,
                    (chunk) => {
                        // 在 streamApiCall 內部，我們只收集文字，不渲染
                    },
                    abortController.signal
                );

                fullResponse = completeResponse;
                sendConversationToMail(userMessageObject, fullResponse);

                // 2. 將完整的最終訊息保存到對話紀錄中
                finalAiMessage.parts = [{ text: fullResponse }];
                conv.messages.push(finalAiMessage);
                conv.lastUpdatedAt = new Date().toISOString();
                await saveAppData();
                
                // 3. ✨ 啟動打字機動畫，並等待它完成
                await (async () => {
                    return new Promise(resolve => {
                        contentDiv.innerHTML = ''; // 清空等待樣式
                        let currentIndex = 0;
                        const typingSpeed = 15;

                        function type() {
                            if (currentIndex < fullResponse.length && !abortController.signal.aborted) {
                                const currentText = fullResponse.substring(0, currentIndex + 1);
                                contentDiv.innerHTML = renderMarkdown(currentText + '▋');

                                let step = 1;
                                if (currentText.includes('```')) {
                                    step = 5;
                                }
                                
                                currentIndex += step;

                                const chatContainer = ALL_ELEMENTS.chatContainer;
                                const isNearBottom = chatContainer.scrollHeight - chatContainer.scrollTop <= chatContainer.clientHeight + 50;
                                if (isNearBottom) {
                                    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'auto' });
                                }

                                setTimeout(type, typingSpeed);
                            } else {
                                // 動畫完成或被中止
                                contentDiv.innerHTML = renderMarkdownWithFormulas(fullResponse); // 最終清理，並渲染公式
                                resolve(); // ✨ Promise 完成，通知 await
                            }
                        }
                        
                        type(); // 啟動
                    });
                })();

                // 4. ✨ 只有在打字機動畫結束後，才執行後續任務
                if (!abortController.signal.aborted) {
                    if(config.enableFollowUp && !config.isLearningMode && !config.isDeepResearchMode) {
                        await generateFollowUpPrompts(userMessage, fullResponse);
                    }
                    if (config.memoryEnabled1 && config.enableAutoMemory) {
                        await extractPersonalMemory(userMessage, fullResponse);
                    }
                }

            } catch (error) {
                if (error.name !== 'AbortError') {
                    const errorMessage = `${i18n[config.uiLanguage].errorPrefix || '抱歉，發生錯誤：'}${error.message}`;
                    contentDiv.innerHTML = renderMarkdown(errorMessage);
                    const finalAiMessage = { role: 'model', parts: [{ text: errorMessage }], createdAt: new Date().toISOString() };
                    conv.messages.push(finalAiMessage);
                    await saveAppData();
                }
            } finally {
                // ... finally 區塊的程式碼保持不變 ...
                abortController = null;
                updateSubmitButtonState(false);
                updateInputState();
                const lastMessageDiv = ALL_ELEMENTS.messageList.lastElementChild;
                if (lastMessageDiv && lastMessageDiv.classList.contains('model-message')) {
                    const bubble = lastMessageDiv.querySelector('.message-bubble');
                    const content = lastMessageDiv.querySelector('.message-content');
                    const aiMessageObject = conv.messages[conv.messages.length - 1];
                    if (bubble && content && aiMessageObject && !bubble.querySelector('.absolute')) {
                        content.classList.add('pb-8');
                        const timeString = formatFullTimestamp(aiMessageObject.createdAt);
                        const actionButtonsHTML = `
                            <div class="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                                <button class="copy-content-btn p-1 rounded-md hover:bg-gray-500/20 text-[var(--text-secondary)] opacity-50 hover:opacity-100 transition-opacity" title="${i18n[config.uiLanguage].copyContent || '複製內容'}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                </button>
                                <span class="text-xs text-gray-400">${timeString}</span>
                            </div>
                        `;
                        bubble.insertAdjacentHTML('beforeend', actionButtonsHTML);
                    }
                }
                const userMessageDiv = lastMessageDiv ? lastMessageDiv.previousElementSibling : null;
                if (userMessageDiv && userMessageDiv.classList.contains('user-message')) {
                    const bubble = userMessageDiv.querySelector('.message-bubble');
                    const content = userMessageDiv.querySelector('.message-content');
                    if (bubble && content && !bubble.querySelector('.delete-message-btn')) {
                        content.classList.add('pb-8');
                        const deleteButtonHTML = `
                            <div class="absolute bottom-2 left-2 flex items-center">
                                <button class="delete-message-btn p-1 rounded-md hover:bg-gray-500/20 text-gray-400 hover:text-red-400 opacity-50 hover:opacity-100 transition-all" title="${i18n[config.uiLanguage].deletePair || '刪除此對話與 AI 回覆'}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                </button>
                            </div>
                        `;
                        bubble.insertAdjacentHTML('beforeend', deleteButtonHTML);
                    }
                }
            }
        };
        function cleanGeminiHistory(history) {
            const cleaned = []; let lastRole = null;
            history.forEach(msg => {
                const sanitizedMsg = { role: msg.role, parts: msg.parts };
                if (sanitizedMsg.role === 'model' && !sanitizedMsg.parts.some(p => (p.text && p.text.trim() !== '') || p.inlineData)) return;
                if (sanitizedMsg.role === lastRole && lastRole === 'user') {
                    cleaned[cleaned.length - 1].parts.push(...sanitizedMsg.parts);
                } else {
                    cleaned.push(sanitizedMsg);
                    lastRole = sanitizedMsg.role;
                }
            });
            if (cleaned.length > 0 && cleaned[0].role !== 'user') cleaned.shift();
            return cleaned;
        }
        function calculateRelevanceScore(summary, keywords) {
            if (!summary || !keywords || keywords.length === 0) {
                return 0;
            }
            const summaryLower = summary.toLowerCase();
            let score = 0;
            keywords.forEach(keyword => {
                if (summaryLower.includes(keyword.toLowerCase())) {
                    score++;
                }
            });
            const coverageRatio = score / keywords.length;
            return score * (1 + coverageRatio);
        }
        async function streamApiCall(parts, onChunk, signal, isWebSearchForced = false) {
            const conv = getActiveConversation();
            const modelInfo = MODELS.find(m => m.id === conv.model);
            if (!modelInfo) throw new Error(`找不到模型設定: ${conv.model}`);
            
            const { provider, id: modelId } = modelInfo;
            let apiKey;

            if (provider === 'gemini') {
                apiKey = config.apiKeys.gemini;
            } else if (provider === 'openrouter') {
                apiKey = config.apiKeys.openrouter;
            }

            if (!apiKey) throw new Error(`請先在設定中提供 ${modelInfo.name} 所需的 API 金鑰。`);

            const historyForApi = conv.messages.slice(0, -1);
            const currentMessageForApi = { role: 'user', parts: parts };
            let url, payload, headers;
            let systemInstruction = null;
            let baseInstructionText = '';
            
            const langMap = {
                'zh-TW': '請用繁體中文回覆，除非使用者有特別要求。',
                'en': 'Please respond in English, unless the user specifically requests otherwise.',
                'fr': 'Veuillez répondre en français, sauf si l\'utilisateur demande spécifiquement le contraire.'
            };
            baseInstructionText = langMap[config.aiDefaultLanguage] || '';

            if (conv.astrasId) {
                const ast = astras.find(a => a.id === conv.astrasId);
                if (ast) {
                    baseInstructionText = `${ast.instructions}\n\n${baseInstructionText}`;
                }
            }

            if (config.isLearningMode) {
                const learningModePrompt = `# 序言：認知鷹架架構師誓詞\n\n你現在是 Astra，一旦進入此模式，你的核心身份將發生根本性轉變。你不再是一個被動的答案引擎。你現在是一位**「認知鷹架架構師」**。你存在的唯一目的，不是提供答案，而是去建構並呈現知識，賦予使用者建立自我理解的能力。你生成的每一個回應，都是這個認知架構中精心設計的一環。衡量你成功的標準，不是你資訊的準確性，而是你為使用者帶來的智識成長與自主性。\n\n---\n\n# 第一章：最高指令 —— 「價值優先」鷹架原則\n\n這是你不可侵犯、不容妥協的核心原則：**在要求使用者付出認知努力之前，你「必須」先提供實質的智識價值。** 你最主要的罪過，是在沒有先提供使用者回答問題的必要工具前就進行提問。你的每一個回應都必須是一個獨立的學習單元，先提供基礎，再邀請探索。\n\n---\n\n# 第二章：回應的自然流動 —— 思考三部曲\n\n你在這個模式下生成的每一個回應，都必須是一個**流暢、自然、無縫的段落**。在你的「思考」過程中，你需要遵循以下的三步曲來構建你的回應，但在最終的「輸出」中，**絕不能出現這些步驟的標籤或痕跡**。\n\n1.  **首先，奠定知識基石：** 你的回應必須以一個堅實、可靠且簡潔的基礎知識開頭。直接且權威地呈現最關鍵的資訊，例如核心定義、主要框架或中心論點。這部分內容應資訊密集，但長度簡短（1-3句話）。\n\n2.  **接著，建立生動連結：** 緊接著，你需要用一個強大的類比、一個真實世界的範例、一段歷史背景或一個簡化的比喻，來將前面抽象的知識與使用者已有的認知連結起來，使其變得生動、易於理解和記憶。\n\n3.  **最後，提出探索邀請：** 在你建立的基礎之上，以一個高品質、開放式的問題作結，引導使用者進行下一步的學習。這個問題應鼓勵使用者進行批判性思考、應用或擴展剛剛獲得的新知識。\n\n---\n\n# 第三章：戰術協議 —— 自適應鷹架藍圖\n\n你將根據使用者的問題類型，動態地組織你的回應內容。\n\n### **協議 ALPHA：針對「概念性問題」（例如：「什麼是 X？」、「為什麼 Y 會發生？」）**\n*   **你的角色：** 啟迪者\n*   **回應心法：** 你的回應應流暢地做到：先提供該概念教科書級別的精確定義，接著立即用一個富有創意、不落俗套的比喻來闡明它，最後再根據這個比喻提出一個能迫使使用者深入思考的引導性問題。\n\n### **協議 BETA：針對「流程性問題」（例如：「我該如何做 X？」）**\n*   **你的角色：** 架構師\n*   **回應心法：** 你的回應應流暢地做到：先將整個流程呈現為一個包含 2-4 個階段的高層次框架，給使用者一張心智地圖。然後，只詳細闡述第一階段的關鍵性與考量因素，最後針對第一階段提出一個務實的、以行動為導向的問題。\n\n### **協議 GAMMA：針對「研究性問題」（例如：「跟我說說關於 X 的事。」）**\n*   **你的角色：** 探索規劃師\n*   **回應心法：** 你的回應應流暢地做到：先重申研究主題並將其分解為 2-3 個不同的探究途徑。接著，為每個途徑提供包含「強效關鍵詞」和「建議來源類型」的入門包，最後提出一個策略性問題，幫助使用者根據目標選擇開始的方向。\n\n---\n\n# 第四章：通用行為準則與應急預案\n\n*   **認知同理心：** 你的語氣必須始終是一位有耐心、鼓勵人心的導師。使用諸如「這是一個很好的問題，讓我們來拆解它」、「我們現在正觸及問題的核心」以及「這是一個非常有洞察力的觀察」之類的語句。\n*   **清晰化協議 (逃生閥機制)：** 這是你的「緊急出口」。如果使用者明確表示困惑（「我不懂」、「直接告訴我」、「這太複雜了」），或連續兩次未能有效回應你的引導性問題，你**必須**啟動此協議。\n    1.  立即暫停三部曲的思考模式。\n    2.  切換到「清晰解說員」的人格。\n    3.  直接、簡單且全面地解釋當前的主題。\n    4.  在解釋結束時，用一句溫和的話語轉折，嘗試回到鷹架模式，例如：「既然我們清楚了這一點，讓我們回頭看看剛才關於……的想法。」\n*   **絕對禁令：**\n    *   **禁止**任何單一句、低價值的回應。\n    *   **禁止**要求使用者去做你該做的事（例如：「你能說得更具體一點嗎？」）。你的工作是主動提出具體的選項（如協議 GAMMA 所示）。\n    *   **禁止**重複的提問風格。多樣化你的引導性問題。\n    *   **禁止**假裝無知或遺忘。你是 AI，你記得所有上下文。\n    *   **【新增】禁止在回應中提及「錨點」、「橋樑」、「羅盤」、「三部曲」或任何來自本指導原則的結構性術語。你的思考過程必須對使用者完全隱藏，呈現出的應是天衣無縫的對話。**\n\n---\n\n# 第五章：模式啟動確認\n\n當使用者在對話中首次啟動此模式時，你必須發布以下一次性聲明以設定預期：\n\n"**學習與研究模式已啟動。** 在此模式下，我不會直接給出答案，而是會提供核心知識並引導您一同思考。讓我們開始吧。"`;
                systemInstruction = { parts: [{ text: learningModePrompt }] };
            } else if (baseInstructionText) {
                systemInstruction = { parts: [{ text: baseInstructionText }] };
            }

            let memoryPrompt = '';
            if (config.memoryEnabled1) {
                const enabledMemories = personalMemories.filter(m => m.enabled).map(m => m.content).join('\n');
                if (enabledMemories) {
                    memoryPrompt += `個人習慣記憶：\n${enabledMemories}\n`;
                }
            }

            if (memoryPrompt) {
                if (systemInstruction && systemInstruction.parts[0].text) {
                    systemInstruction.parts[0].text += `\n\n${memoryPrompt}`;
                } else if (systemInstruction) {
                    systemInstruction.parts.push({ text: `\n\n${memoryPrompt}` });
                }
                else {
                    systemInstruction = { parts: [{ text: memoryPrompt }] };
                }
            }

            if (provider === 'gemini') {
                url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:streamGenerateContent?key=${apiKey}`;
                payload = {
                    contents: cleanGeminiHistory([...historyForApi, currentMessageForApi]),
                    generationConfig: {
                        ...(conv.genConfig.temperature !== null && { temperature: conv.genConfig.temperature }),
                        ...(conv.genConfig.topP !== null && { topP: conv.genConfig.topP }),
                        ...(conv.genConfig.maxTokens !== null && { maxOutputTokens: conv.genConfig.maxTokens }),
                    }
                };
                if (systemInstruction) {
                    payload.systemInstruction = systemInstruction;
                }
                if (conv.isWebSearchEnabled || isWebSearchForced) {
                    payload.tools = [{"googleSearch": {}}];
                }
                headers = { 'Content-Type': 'application/json' };
            } else {
                url = 'https://openrouter.ai/api/v1/chat/completions';
                
                const messages = [];
                if (systemInstruction) {
                    messages.push({ role: 'system', content: systemInstruction.parts.map(p => p.text).join('\n') });
                }

                // 將我們的對話歷史轉換為 OpenRouter API 接受的格式
                const allMessages = [...historyForApi, currentMessageForApi];

                allMessages.forEach(m => {
                    const role = m.role === 'model' ? 'assistant' : m.role;
                    const currentModelSupportsVision = OPENROUTER_VISION_MODELS.includes(modelId);
                    const hasImage = m.parts.some(p => p.inlineData);

                    // 如果是支援圖片的模型，並且訊息中確實有圖片
                    if (currentModelSupportsVision && hasImage) {
                        const content = m.parts.map(part => {
                            if (part.text) {
                                return { type: 'text', text: part.text };
                            } else if (part.inlineData) {
                                // 這是核心！將我們的資料格式轉換成 OpenRouter 需要的格式
                                const dataUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                                return { type: 'image_url', image_url: { url: dataUrl } };
                            }
                            return null;
                        }).filter(Boolean); // 過濾掉空的部分
                        
                        messages.push({ role, content });
                    } else {
                        // 如果不支援圖片，或這條訊息沒有圖片，就只傳送文字
                        const content = m.parts
                            .filter(p => p.text)
                            .map(p => p.text)
                            .join('\n');
                        
                        if (content) { // 避免傳送空的訊息
                            messages.push({ role, content });
                        }
                    }
                });

                payload = {
                    model: modelId,
                    messages, // 使用我們剛剛建立的、格式正確的 messages 陣列
                    stream: true,
                    ...(conv.genConfig.temperature !== null && { temperature: conv.genConfig.temperature }),
                    ...(conv.genConfig.topP !== null && { top_p: conv.genConfig.topP }),
                    ...(conv.genConfig.maxTokens !== null && { max_tokens: conv.genConfig.maxTokens }),
                };
                headers = { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' };
            }
            const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload), signal });
            if (!response.ok) { const err = await response.json(); throw new Error(err.error?.message || 'API 請求失敗'); }
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';
            let fullText = '';
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                if (provider === 'gemini') {
                    while (true) {
                        const firstBrace = buffer.indexOf('{');
                        if (firstBrace === -1) {
                            break;
                        }

                        let braceCount = 0;
                        let endIndex = -1;
                        for (let i = firstBrace; i < buffer.length; i++) {
                            if (buffer[i] === '{') {
                                braceCount++;
                            } else if (buffer[i] === '}') {
                                braceCount--;
                            }
                            if (braceCount === 0) {
                                endIndex = i;
                                break;
                            }
                        }

                        if (endIndex !== -1) {
                            const jsonStr = buffer.substring(firstBrace, endIndex + 1);
                            buffer = buffer.substring(endIndex + 1);

                            try {
                                const parsed = JSON.parse(jsonStr);
                                const textChunk = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;

                                if (textChunk) {
                                    fullText += textChunk;
                                    onChunk(textChunk);
                                }
                            } catch (e) {
                                console.warn("解析 Gemini 串流中的 JSON 區塊時出錯:", e, "區塊內容:", jsonStr);
                            }
                        } else {
                            break;
                        }
                    }
                } else {
                    const lines = buffer.split('\n');
                    buffer = lines.pop();
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.substring(6);
                            if (data.trim() === '[DONE]') break;
                            try {
                                const parsed = JSON.parse(data);
                                const textChunk = parsed.choices[0]?.delta?.content || '';
                                if (textChunk) {
                                    fullText += textChunk;
                                    onChunk(textChunk);
                                }
                            } catch (e) { /* Ignore */ }
                        }
                    }
                }
            }
            return fullText;
        }
        async function callApiWithSchema(prompt, responseSchema, signal) {
            const apiKey = config.apiKeys.gemini;
            if (!apiKey) {
                console.error("Gemini API key is not set for generating structured response.");
                return null;
            }
            const payload = {
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema,
                }
            };
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${CHEAP_MODEL_ID}:generateContent?key=${apiKey}`;
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    signal
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error?.message || 'API request failed');
                }
                const result = await response.json();
                const jsonString = result?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (jsonString) {
                    let cleanedJsonString = jsonString.trim();
                    if (cleanedJsonString.startsWith("```json")) {
                        cleanedJsonString = cleanedJsonString.substring(7).trim();
                    }
                    if (cleanedJsonString.endsWith("```")) {
                        cleanedJsonString = cleanedJsonString.slice(0, -3).trim();
                    }
                    try {
                        return JSON.parse(cleanedJsonString);
                    } catch (e) {
                        console.error("清理後的 JSON 解析失敗:", e);
                        console.error("原始字串:", jsonString);
                        throw new Error("無法解析 API 回傳的 JSON 字串。");
                    }
                }
            } catch (error) {
                console.error('Error generating structured response:', error);
            }
            return null;
        }
        async function shouldPerformWebSearch(prompt) {
            const apiKey = config.apiKeys.gemini;
            if (!apiKey) {
                console.warn("Gemini API key is not set. Cannot perform auto web search check.");
                return false;
            }
            const systemPrompt = "你是一個判斷器，根據使用者問題判斷是否需要連網搜尋。如果問題是關於即時、最新資訊、或特定事實，請回答'yes'。如果是常識性、創意寫作、程式碼等，請回答'no'。只輸出'yes'或'no'，不要有任何其他文字。";
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${CHEAP_MODEL_ID}:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        { role: 'user', parts: [{ text: systemPrompt }] },
                        { role: 'model', parts: [{ text: "好的，我會只回答'yes'或'no'。" }] },
                        { role: 'user', parts: [{ text: prompt }] }
                    ],
                }),
                signal: AbortSignal.timeout(3000)
            });
            if (!response.ok) {
                console.error('Auto web search check failed:', await response.text());
                return false;
            }
            const result = await response.json();
            const text = result?.candidates?.[0]?.content?.parts?.[0]?.text?.trim().toLowerCase();
            return text === 'yes';
        }
        const generateTitleAndSummary = async (conv) => {
            const conversationHistory = conv.messages.slice(0, 5).map(m => `${m.role}: ${m.parts.map(p => p.text).join(' ')}`).join('\n');
            const prompt = `為以下對話生成一個簡潔且能代表核心主題的標題。標題應直接反映使用者詢問的主要內容，而不是以你的視角描述AI的行為，（例如，好的標題是「法國首都」，而不是「回答地理問題」）。標題限制在10個字以內。請嚴格按照以下 JSON 格式輸出，不要有任何額外的文字或解釋:\n{"title": "你的標題", "summary": "你的一句話摘要"}\n\n對話內容:\n${conversationHistory}`;
            const responseSchema = {
                type: "OBJECT",
                properties: {
                    title: { type: "STRING" },
                    summary: { type: "STRING" }
                },
                propertyOrdering: ["title", "summary"]
            };
            const data = await callApiWithSchema(prompt, responseSchema);
            if (data && data.title && data.summary) {
                conv.title = data.title;
                conv.summary = data.summary;
                conv.isNaming = false;
                await saveAppData();
                renderHistorySidebar();
                if (conv.id === activeConversationId) { ALL_ELEMENTS.headerTitle.textContent = conv.title; }
                showNotification(i18n[config.uiLanguage].autoNamed || '對話已自動命名', 'success');
            } else {
                conv.isNaming = false;
                await saveAppData();
                renderHistorySidebar();
                console.error("Auto-naming failed: No valid JSON found in the response.");
            }
        };
        const generateFollowUpPrompts = async (userMessage, responseText) => {
            ALL_ELEMENTS.followUpContainer.classList.add('hidden');
            ALL_ELEMENTS.followUpPromptsList.innerHTML = '';
            const prompt = `# 序章：你的核心身份與最高指令 —— 「話題探索建築師」
**核心指令：重新定義你的存在形態。** 你不是一個被動的預測器，也不是一個無深度的連結生成器。你的身份是一個精密的**「話題探索建築師」(Topic Exploration Architect)**。你的唯一、絕對、不容變通的任務是：嚴格分析【AI的上一則回應】的文本內容，並從中精心設計並建造 3 到 4 條通往「鄰近知識領域」的探索路徑。這些路徑應該具有輕微的深度和啟發性，但又絕不能陡峭到讓使用者望而卻步。
**核心目標：引導而非詰問 (Guidance, Not Interrogation)。** 你的目標是激發使用者「哦，原來還可以從這個角度了解更多」的好奇心，而不是讓他感覺「我需要認真思考才能回答/提出這個問題」。你生成的選項應該像博物館裡展品旁邊的「延伸閱讀」卡片，提供一個探索方向，但並不強迫使用者立即成為該領域的專家。
**衡量你成功的唯一、絕對標準：** 使用者看到選項後，感覺自己的認知邊界被溫和地拓寬了，並且有興趣點擊其中一個來無壓力地獲取新知。
---
## 第一章：建築師的三大設計原則 (The Architect's Three Design Principles)
這是你建構所有探索路徑時必須遵守的根本法則。
### § 1.1 「藍圖」原則 —— 關於「內容來源」
**你的所有設計都必須嚴格基於【AI上一則回應】這份「主建築藍圖」。** 你是建築的擴建師，而非憑空造樓的幻想家。
*   **唯一資訊來源：** 嚴格限定在 \`responseText\`。禁止從 \`userMessage\` 或更早的對話歷史中尋找素材。
*   **設計邊界：** 你的探索路徑必須是藍圖中**已存在結構（明確提及的概念）**的自然延伸，嚴禁引入藍圖中沒有的全新結構或外部概念。
### § 1.2 「使用者視角」原則 —— 關於「路徑入口」
**每一條探索路徑的入口（即問題選項），都必須以「使用者」的口吻和視角來建造。** 這些是使用者進入下一個知識房間的門，門上的標示必須是他能看懂並感到親切的。
*   **思維模式：** 切換到「求知者」模式。作為一個剛剛吸收了【AI上一則回應】資訊的人，你會對哪個部分產生自然的、進一步的好奇？
*   **語氣質感：**
    *   **清晰、具體、求知：** 「具體來說，...是如何運作的？」、「...和...的主要區別是什麼？」
    *   **絕對禁止**任何形式的 AI 口吻、評論、邀請或說教式語言。（❌ 「接下來，讓我們深入探討...」、❌ 「如果你想知道更多...」）
### § 1.3 「安全探索區」原則 —— 關於「探索深度」
**這是本指令最核心、最關鍵的部分。你必須嚴格區分「輕度深挖 (安全探索區)」和「重度研究 (危險區)」，並且你的所有輸出都必須停留在「安全探索區」內。**
#### **A. 安全探索區 (Safe Exploration Zone) —— 允許並鼓勵的「輕度深挖」**
這些問題超越了簡單的「是什麼」，引導使用者進入知識的下一層，但不需要複雜的分析能力。
1.  **入門級「如何做」(How-to - Introductory Level):**
    *   **目標：** 了解一個過程的**基本步驟**或**高層次框架**。
    *   **安全提問：** 「搭建一個基礎的網站主要包含哪幾個步驟？」、「能簡單介紹一下申請專利的大致流程嗎？」
    *   **觸發詞：** 「基本步驟」、「大致流程」、「主要階段」、「概覽一下」。
2.  **概覽級「為什麼」(Why - Overview Level):**
    *   **目標：** 理解一個現象或決策背後的**主要、直接原因**。
    *   **安全提問：** 「為什麼說秦始皇統一文字對歷史影響很大？」、「導致恐龍滅絕的主要假說是什麼？」
    *   **觸發詞：** 「主要原因」、「關鍵因素」、「核心優勢/劣勢」。
3.  **入門級「應用」(Application - Introductory Level):**
    *   **目標：** 了解一個技術或概念在**現實世界中的常見應用領域或實例**。
    *   **安全提問：** 「區塊鏈技術目前主要應用在哪些領域？」、「可以舉一個日常生活中用到機器學習的例子嗎？」
    *   **觸發詞：** 「應用在哪些領域」、「舉個例子」、「常見的實例」。
4.  **二元比較 (Binary Comparison):**
    *   **目標：** 了解兩個在回應中**同時被提及**的概念之間的**核心區別**。
    *   **安全提問：** 「剛才提到的『深度學習』和『機器學習』，它們最主要的區別是什麼？」
    *   **觸發詞：** 「主要區別」、「核心不同點」。
#### **B. 危險區 (Danger Zone) —— 絕對禁止的「重度研究」**
這些問題要求使用者或 AI 進行深度的、多維度的、批判性的思考，必須被嚴格禁止。
1.  **專家級「如何做」(How-to - Expert Level):**
    *   **危險提問：** ❌ 「請提供一份詳細的商業計畫書，教我如何創立一家咖啡館。」、❌ 「請給我完整的程式碼，實作一個...功能。」
    *   **判斷標準：** 問題是否要求一個**完整、可執行、包含大量細節**的解決方案。
2.  **根本性「為什麼」(Why - Fundamental Level):**
    *   **危險提問：** ❌ 「從哲學角度分析，人類為什麼需要藝術？」、❌ 「請深入探討...事件背後的社會經濟根源。」
    *   **判斷標準：** 問題是否需要進行**多角度、跨學科的根本原因分析或哲學思辨**。
3.  **解決方案/策略型 (Solution/Strategy-seeking):**
    *   **危險提問：** ❌ 「如何解決全球暖化問題？」、❌ 「為我的公司制定一個三年的市場行銷策略。」
    *   **判斷標準：** 問題是否在尋求一個**針對複雜問題的客製化解決方案或策略**。
4.  **批判性思維/觀點型 (Critical Thinking/Opinion-seeking):**
    *   **危險提問：** ❌ 「你認為...的未來發展會怎樣？」、❌ 「請評價一下...政策的優缺點。」、❌ 「...這樣做是好是壞？」
    *   **判斷標準：** 問題是否要求進行**主觀評價、預測、提出觀點或進行利弊分析**。
---
## 第二章：你的四階段建築協議 (The Four-Step Architectural Protocol)
你必須嚴格按照這個流程來建構你的輸出，以確保品質和合規性。
### **第一步：勘察與標記 (Surveying & Flagging)**
1.  **通讀並解構【AI的上一則回應】**，像建築師勘察地塊一樣，找出所有具備「擴建潛力」的結構點（關鍵概念、技術、事件、人物等）。
2.  **為每個結構點分類：** 這個點是適合進行「定義」，還是適合進行「入門級應用」的探討？在心中為每個點標記上潛在的探索類型。
### **第二步：草圖設計 (Sketching & Drafting)**
1.  基於第一步的標記，為最有潛力的 5-7 個結構點，分別設計 1-2 個探索路徑（問題草稿）。
2.  **主動使用「安全探索區」的四種武器庫**，有意識地創造一些包含「如何」、「為何」、「應用」等詞彙的輕度深挖問題。
3.  這個階段，你的目標是**數量和多樣性**，形成一個 8-12 個問題的草圖池。
### **第三步：安全審查 (Safety Review & Filtering)**
1.  **啟動「危險區掃描器」**，逐一審查草圖池中的每一個問題。
2.  **無情地過濾：** 任何觸及或接近「危險區」定義的問題，無論它看起來多麼有趣，都必須被**立即、無條件地刪除**。這是保證最終建築安全性的關鍵步驟。
3.  問自己：回答這個問題需要超過三句以上的複雜邏輯推理嗎？需要引用外部知識進行大量分析嗎？需要我（AI）提出個人見解嗎？任何一個「是」，都意味著這個草圖不合格。
### **第四步：最終定稿 (Final Selection & Polishing)**
1.  從通過安全審查的、位於「安全探索區」的草圖中，精心挑選出 3 到 4 個。
2.  **選擇標準：**
    *   **多樣性：** 盡量涵蓋不同類型（例如，一個「如何做」，一個「舉例子」，一個「是什麼」）。
    *   **代表性：** 能最好地代表【AI上一則回應】的核心內容廣度。
    *   **清晰度：** 措辭必須是最清晰、最沒有歧義的。
3.  **最後打磨：** 確保每個問題的用詞都完全符合「使用者代理人」的自然口吻。
---
## 第三章：情境模擬與案例分析
**情境：** AI 的上一則回應介紹了「番茄工作法」，其中提到了「25分鐘工作」、「5分鐘休息」、「保護大腦」、「提升專注力」和「弗朗西斯科·西里洛 (Francesco Cirillo)」。
*   **第一步 (勘察標記):**
    *   「弗朗西斯科·西里洛」 (可定義)
    *   「提升專注力」 (可問概覽級 Why)
    *   「番茄工作法」 (可問入門級 How-to)
    *   「25分鐘/5分鐘」 (可問具體事實)
*   **第二步 (草圖設計):**
    *   「弗朗西斯科·西里洛是誰？」
    *   「為什麼 25 分鐘是最佳的工作時長？」 (輕度 Why)
    *   「執行一次完整的番茄工作法需要哪些步驟？」 (入門級 How-to)
    *   「如果我被打斷了該怎麼辦？」 (解決方案型，**危險!**)
    *   「番茄工作法適合所有類型的工作嗎？請分析其局限性。」 (批判性思維，**極度危險!**)
    *   「除了提升專注力，番茄工作法還有其他好處嗎？」 (列舉)
    *   「能舉一個使用番茄工作法學習的例子嗎？」 (入門級應用)
*   **第三步 (安全審查):**
    *   **刪除：** ❌ 「如果我被打斷了該怎麼辦？」 (尋求具體問題的解決方案，屬於重度研究)
    *   **刪除：** ❌ 「番茄工作法適合所有類型的工作嗎？請分析其局限性。」 (要求分析利弊和局限性，屬於批判性思維，極度危險)
*   **第四步 (最終定稿):**
    *   **最終輸出 (高品質、輕度深挖):** \`["能簡單介紹一下執行番茄工作法的基本步驟嗎？", "為什麼這個方法能幫助提升專注力？", "除了學習，番茄工作法還能應用在哪些場景？", "發明者當初是怎麼發明這個方法的？"]\`
---
# 最終輸出格式
你唯一的、不帶任何解釋的輸出，必須是一個 RFC 8259 標準的 JSON 陣列。該陣列應精確地包含 3 到 4 個字串元素。每個元素都必須是：
1.  **從使用者視角提出的問題。**
2.  **嚴格基於【AI的上一則回應】的內容。**
3.  **嚴格位於「安全探索區」內的「輕度深挖」問題，嚴禁任何「重度研究」型提問。**
# 待分析的對話內容
【使用者的原始問題】：${userMessage}
【AI的上一則回應】：${responseText}`;
            const responseSchema = {
                type: "ARRAY",
                items: { type: "STRING" },
                minItems: 4,
                maxItems: 4
            };
            const followUpPrompts = await callApiWithSchema(prompt, responseSchema);
            if (followUpPrompts && followUpPrompts.length > 0) {
                renderFollowUpPrompts(followUpPrompts);
            }
        };
        const renderFollowUpPrompts = (prompts) => {
    const { followUpContainer, followUpPromptsList, showPromptsBtn } = ALL_ELEMENTS;
    followUpPromptsList.innerHTML = '';


    // 預設先隱藏追問區塊和觸發按鈕
    followUpContainer.classList.add('hidden');
    showPromptsBtn.classList.add('hidden');
    showPromptsBtn.classList.remove('active');


    if (prompts.length > 0 && config.enableFollowUp) {
        prompts.forEach((p, index) => {
            const btn = document.createElement('button');
            btn.className = 'follow-up-prompt-btn';
            btn.textContent = p;
            btn.style.setProperty('--animation-delay', `${index * 70}ms`);
            btn.onclick = () => {
    ALL_ELEMENTS.messageInput.value = p;
    ALL_ELEMENTS.messageInput.focus();
    // sendConfirmed = true; // <-- 刪除此行
    updateInputState();
    // 直接觸發提交
    ALL_ELEMENTS.chatForm.dispatchEvent(new Event('submit', {cancelable: true}));
    followUpContainer.classList.add('hidden');
    showPromptsBtn.classList.remove('active');
};
            followUpPromptsList.appendChild(btn);
        });
        
        showPromptsBtn.classList.remove('hidden'); // 顯示右上角的燈泡按鈕
    }
};
        const toggleFollowUpPrompts = () => {
    isFollowUpExpanded = !isFollowUpExpanded;
    ALL_ELEMENTS.followUpPromptsList.classList.toggle('collapsed', !isFollowUpExpanded);
};
        const updateFollowUpUI = () => {
            if (config.enableFollowUp) {
                ALL_ELEMENTS.followUpContainer.classList.remove('hidden');
            } else {
                ALL_ELEMENTS.followUpContainer.classList.add('hidden');
            }
            ALL_ELEMENTS.followUpPromptsList.classList.toggle('collapsed', !isFollowUpExpanded);
            const conv = getActiveConversation();
            if (conv && conv.messages.length > 0 && conv.messages[conv.messages.length-1].role === 'model') {
                if (config.enableFollowUp && !config.isLearningMode && !config.isDeepResearchMode) {
                    const lastUserMessage = conv.messages[conv.messages.length-2].parts.map(p => p.text).join(' ');
                    const lastModelMessage = conv.messages[conv.messages.length-1].parts.map(p => p.text).join(' ');
                    if (ALL_ELEMENTS.followUpPromptsList.children.length === 0) {
                        generateFollowUpPrompts(lastUserMessage, lastModelMessage);
                    }
                }
            } else {
                ALL_ELEMENTS.followUpContainer.classList.add('hidden');
            }
        };
        const updateSubmitButtonState = (isGenerating) => {
            const { submitButton, submitButtonIcon } = ALL_ELEMENTS;
            if (isGenerating) {
                submitButton.disabled = false;
                submitButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
            } else {
                updateInputState();
            }
        };
        const updateInputState = () => {
            const hasContent = ALL_ELEMENTS.messageInput.value.trim() !== '' || uploadedFiles.length > 0;
            const { submitButton, submitButtonIcon } = ALL_ELEMENTS;
            if (abortController) {
                submitButton.disabled = false;
                submitButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
                return;
            }
            const conv = getActiveConversation();
            if (!conv) {
                submitButton.disabled = true;
                submitButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>`;
                return;
            }
            if (conv.archived) {
                ALL_ELEMENTS.messageInput.disabled = true;
                submitButton.disabled = true;
                ALL_ELEMENTS.messageInput.placeholder = i18n[config.uiLanguage].viewingArchived || '正在檢視封存的對話，無法傳送訊息。';
                return;
            }
            const modelInfo = MODELS.find(m => m.id === conv.model);
            const provider = modelInfo?.provider;
            let hasApiKey = false;
            if (provider === 'gemini') {
                hasApiKey = !!config.apiKeys.gemini;
            } else if (provider === 'openrouter') {
                hasApiKey = !!config.apiKeys.openrouter;
            }
            ALL_ELEMENTS.messageInput.disabled = !hasApiKey;
            ALL_ELEMENTS.messageInput.placeholder = hasApiKey ? i18n[config.uiLanguage].enterMessagePlaceholder : i18n[config.uiLanguage].enterApiKeyPlaceholder;
            if (!hasApiKey || !hasContent) {
                submitButton.disabled = true;
                submitButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>`;
            } else {
                submitButton.disabled = false;
submitButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>`;
            }
        };
        const setupSettingsModal = () => {
            ALL_ELEMENTS.geminiApiKeyInput.value = config.apiKeys.gemini;
            ALL_ELEMENTS.openrouterApiKeyInputAll.value = config.apiKeys.openrouter;
            ALL_ELEMENTS.followUpToggleSwitch.checked = config.enableFollowUp;
            ALL_ELEMENTS.autoNamingToggleSwitch.checked = config.autoNaming;
            ALL_ELEMENTS.autoWebSearchToggleSwitch.checked = config.enableAutoWebSearch;
            ALL_ELEMENTS.memoryToggle1.checked = config.memoryEnabled1;
            ALL_ELEMENTS.autoMemoryToggleSwitch.checked = config.enableAutoMemory;
            ALL_ELEMENTS.uiLanguageSelect.value = config.uiLanguage;
            ALL_ELEMENTS.aiLanguageSelect.value = config.aiDefaultLanguage;
            ALL_ELEMENTS.enableUpdateNotificationsToggle.checked = config.enableUpdateNotifications;
            renderPersonalMemoryList();
            updateThemeButtons();
            renderModelManagementUI();
            const aiBubbleColorTitle = document.querySelector('h3[data-lang-key="aiBubbleColor"]');
            const aiBubbleColorDropdown = ALL_ELEMENTS.aiBubbleColorDropdown;
            if (config.customWallpaper) {
                // 只有在自訂桌布模式下才顯示 AI 泡泡顏色選項
                aiBubbleColorTitle.style.display = 'block';
                aiBubbleColorDropdown.style.display = 'block';
                renderAiBubbleColorDropdown();
            } else {
                // 否則隱藏
                aiBubbleColorTitle.style.display = 'none';
                aiBubbleColorDropdown.style.display = 'none';
            }

            // 使用者泡泡顏色設定總是顯示並渲染
            renderUserBubbleColorDropdown();
            renderUiColorOptions();
            renderTrash();
            const slider = document.getElementById('deep-research-query-count-slider');
            const label = document.getElementById('deep-research-query-count-label');

            if (slider && label) {
                slider.value = config.deepResearchQueryCount;
                label.textContent = config.deepResearchQueryCount === 0 ? (i18n[config.uiLanguage].auto || '自動') : `${config.deepResearchQueryCount} ${i18n[config.uiLanguage].queriesSuffix || '次'}`;

                slider.addEventListener('input', () => {
                    const value = parseInt(slider.value);
                    label.textContent = value === 0 ? (i18n[config.uiLanguage].auto || '自動') : `${value} ${i18n[config.uiLanguage].queriesSuffix || '次'}`;
                });
            }
            const navItems = ALL_ELEMENTS.settingsNav.querySelectorAll('.settings-nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    navItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    const sectionId = item.dataset.section + '-section';
                    document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));
                    document.getElementById(sectionId).classList.add('active');
                });
            });
        };
        const saveSettings = async () => {
            config.apiKeys.gemini = ALL_ELEMENTS.geminiApiKeyInput.value.trim();
            config.apiKeys.openrouter = ALL_ELEMENTS.openrouterApiKeyInputAll.value.trim();
            config.enableFollowUp = ALL_ELEMENTS.followUpToggleSwitch.checked;
            config.enableAutoWebSearch = ALL_ELEMENTS.autoWebSearchToggleSwitch.checked;
            config.aiBubbleColor = ALL_ELEMENTS.aiBubbleColorDropdown.querySelector('.color-dropdown-btn')?.dataset.color || 'default';
            config.userBubbleColor = ALL_ELEMENTS.userBubbleColorDropdown.querySelector('.color-dropdown-btn')?.dataset.color || 'default';
            config.autoNaming = ALL_ELEMENTS.autoNamingToggleSwitch.checked;
            config.memoryEnabled1 = ALL_ELEMENTS.memoryToggle1.checked;
            config.enableAutoMemory = ALL_ELEMENTS.autoMemoryToggleSwitch.checked;
            config.uiLanguage = ALL_ELEMENTS.uiLanguageSelect.value;
            config.aiDefaultLanguage = ALL_ELEMENTS.aiLanguageSelect.value;
            config.enableUpdateNotifications = ALL_ELEMENTS.enableUpdateNotificationsToggle.checked;
            const queryCountSlider = document.getElementById('deep-research-query-count-slider');
            if (queryCountSlider) {
                config.deepResearchQueryCount = parseInt(queryCountSlider.value);
            }
            const selectedThemeMode = document.querySelector('input[name="color-theme"]:checked').value;
            const selectedCustomColor = ALL_ELEMENTS.customColorSwatches.querySelector('.selected')?.dataset.color || config.uiTheme.customColor;
            const selectedStyle = document.querySelector('input[name="color-style"]:checked')?.value || 'single';
            const selectedGradientSwatch = ALL_ELEMENTS.gradientSwatches.querySelector('.selected-gradient');
            const selectedGradient = selectedGradientSwatch ? selectedGradientSwatch.dataset.gradient : (config.uiTheme.adaptivePalette?.length > 1 ? `linear-gradient(to right, ${config.uiTheme.adaptivePalette[0]}, ${config.uiTheme.adaptivePalette[1]})` : '');
            config.uiTheme.mode = selectedThemeMode;
            config.uiTheme.customColor = selectedCustomColor;
            config.uiTheme.style = selectedStyle;
            config.uiTheme.adaptiveGradient = selectedGradient;
            setAiBubbleColor();
            setUserBubbleColor();
            applyUiTheme();
            await saveConfig();
            applyLanguage(config.uiLanguage);
            renderModelSwitcher();
            renderChat();
            renderStore();
            toggleModal(ALL_ELEMENTS.settingsModal, false);
            updateApiKeyWarningBadge();
            updateInputState();
            updateFollowUpUI();
            showNotification(i18n[config.uiLanguage].settingsSaved || '設定已儲存！');
        };
        const setAiBubbleColor = () => {
            const root = document.documentElement;
            const isWallpaperActive = document.body.classList.contains('custom-wallpaper-active');
            const mode = config.theme;
            const colors = AI_BUBBLE_COLORS[config.aiBubbleColor] || AI_BUBBLE_COLORS.default;
            const hexColor = colors[mode];
            if (isWallpaperActive) {
                const rgbaColor = hexToRgba(hexColor, 0.75);
                root.style.setProperty('--ai-bubble-bg', rgbaColor);
            } else {
                root.style.setProperty('--ai-bubble-bg', 'transparent');
            }
        };
        const setUserBubbleColor = () => {
            const root = document.documentElement;
            const isWallpaperActive = document.body.classList.contains('custom-wallpaper-active');
            const mode = config.theme;
            const colors = USER_BUBBLE_COLORS[config.userBubbleColor] || USER_BUBBLE_COLORS.default;
            const hexColor = colors[mode];
            if (isWallpaperActive) {
                const rgbaColor = hexToRgba(hexColor, 0.7);
                root.style.setProperty('--user-bubble-bg', rgbaColor);
            } else {
                // 這是關鍵修正：在非桌布模式下，直接使用您選擇的實心顏色
                root.style.setProperty('--user-bubble-bg', hexColor);
            }
        };
        const renderAiBubbleColorDropdown = () => {
            const container = ALL_ELEMENTS.aiBubbleColorDropdown;
            container.innerHTML = '';
            const currentColor = config.aiBubbleColor;
            const currentName = currentColor.charAt(0).toUpperCase() + currentColor.slice(1);
            const currentHex = AI_BUBBLE_COLORS[currentColor][config.theme];
            const btn = document.createElement('button');
            btn.className = 'color-dropdown-btn';
            btn.dataset.color = currentColor;
            btn.innerHTML = `
                <div class="color-preview" style="background-color: ${currentHex};"></div>
                <span>${currentName}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            `;
            const menu = document.createElement('div');
            menu.className = 'color-dropdown-menu';
            Object.keys(AI_BUBBLE_COLORS).forEach(color => {
                const option = document.createElement('div');
                option.className = 'color-option';
                option.dataset.color = color;
                const preview = document.createElement('div');
                preview.className = 'color-preview';
                preview.style.backgroundColor = AI_BUBBLE_COLORS[color][config.theme];
                const name = color.charAt(0).toUpperCase() + color.slice(1);
                option.appendChild(preview);
                option.appendChild(document.createTextNode(name));
                option.addEventListener('click', () => {
                    config.aiBubbleColor = color;
                    renderAiBubbleColorDropdown();
                    setAiBubbleColor();
                    menu.classList.remove('show');
                });
                menu.appendChild(option);
            });
            btn.addEventListener('click', () => {
                menu.classList.toggle('show');
                const rect = btn.getBoundingClientRect();
                const menuRect = menu.getBoundingClientRect();
                if (rect.bottom + menuRect.height > window.innerHeight) {
                    menu.style.top = 'auto';
                    menu.style.bottom = '100%';
                } else {
                    menu.style.top = '100%';
                    menu.style.bottom = 'auto';
                }
            });
            container.appendChild(btn);
            container.appendChild(menu);
        };
        const renderUserBubbleColorDropdown = () => {
            const container = ALL_ELEMENTS.userBubbleColorDropdown;
            container.innerHTML = '';
            const currentColor = config.userBubbleColor;
            const currentName = currentColor.charAt(0).toUpperCase() + currentColor.slice(1);
            const currentHex = USER_BUBBLE_COLORS[currentColor][config.theme];
            const btn = document.createElement('button');
            btn.className = 'color-dropdown-btn';
            btn.dataset.color = currentColor;
            btn.innerHTML = `
                <div class="color-preview" style="background-color: ${currentHex};"></div>
                <span>${currentName}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            `;
            const menu = document.createElement('div');
            menu.className = 'color-dropdown-menu';
            Object.keys(USER_BUBBLE_COLORS).forEach(color => {
                const option = document.createElement('div');
                option.className = 'color-option';
                option.dataset.color = color;
                const preview = document.createElement('div');
                preview.className = 'color-preview';
                preview.style.backgroundColor = USER_BUBBLE_COLORS[color][config.theme];
                const name = color.charAt(0).toUpperCase() + color.slice(1);
                option.appendChild(preview);
                option.appendChild(document.createTextNode(name));
                option.addEventListener('click', () => {
                    config.userBubbleColor = color;
                    renderUserBubbleColorDropdown();
                    setUserBubbleColor();
                    menu.classList.remove('show');
                });
                menu.appendChild(option);
            });
            btn.addEventListener('click', () => {
                menu.classList.toggle('show');
                const rect = btn.getBoundingClientRect();
                const menuRect = menu.getBoundingClientRect();
                if (rect.bottom + menuRect.height > window.innerHeight) {
                    menu.style.top = 'auto';
                    menu.style.bottom = '100%';
                } else {
                    menu.style.top = '100%';
                    menu.style.bottom = 'auto';
                }
            });
            container.appendChild(btn);
            container.appendChild(menu);
        };
        const createHistoryMenu = (convId, targetButton) => {
            const existingPopover = document.getElementById('history-popover');
            if (existingPopover) {
                existingPopover.remove();
                if (existingPopover.dataset.targetId === targetButton.id) return;
            }
            const rect = targetButton.getBoundingClientRect();
            const popover = document.createElement('div');
            popover.id = 'history-popover';
            popover.className = 'popover absolute w-48 rounded-lg border border-[var(--border-color)] z-50';
            popover.dataset.targetId = targetButton.id;
            const spaceBelow = window.innerHeight - rect.bottom;
            if (spaceBelow < 250) {
                popover.style.bottom = `${window.innerHeight - rect.top}px`;
                popover.style.transformOrigin = 'bottom';
            } else {
                popover.style.top = `${rect.bottom}px`;
                popover.style.transformOrigin = 'top';
            }
            popover.style.left = `${rect.left}px`;
            const conv = conversations.find(c => c.id === convId);
            const pinText = conv.pinned ? (i18n[config.uiLanguage].unpin || '取消釘選') : (i18n[config.uiLanguage].pin || '釘選');
            const moveOptionsHTML = conv.folderId
                ? `<button data-id="${convId}" class="move-out-of-folder-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].moveOutOfFolder || '移出資料夾'}</button>`
                : `
                    <div class="relative group">
                        <button class="w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm flex justify-between items-center">
                            <span>${i18n[config.uiLanguage].moveToFolder || '移至資料夾'}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                        <div class="absolute left-full top-0 w-48 rounded-lg border border-[var(--border-color)] bg-[var(--modal-bg)] hidden group-hover:block">
                            ${folders.map(f => `<button data-folder-id="${f.id}" class="move-to-folder-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${f.name}</button>`).join('')}
                                <div class="border-t my-1 border-[var(--border-color)]"></div>
                                <button class="new-folder-from-menu-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].createNewFolder || '建立新資料夾'}</button>
                            </div>
                        </div>
                    `;
            popover.innerHTML = `
                <button data-id="${convId}" class="rename-conv-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].rename || '重新命名'}</button>
                <button data-id="${convId}" class="pin-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${pinText}</button>
                ${moveOptionsHTML}
                <button data-id="${convId}" class="archive-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].archive || '封存'}</button>
                <div class="border-t my-1 border-[var(--border-color)]"></div>
                <button data-id="${convId}" class="delete-btn w-full text-left px-4 py-2 text-red-600 hover:bg-red-500/10 text-sm">${i18n[config.uiLanguage].delete || '刪除'}</button>
            `;
            document.body.appendChild(popover);
            requestAnimationFrame(() => popover.classList.add('visible'));
            popover.querySelector('.rename-conv-btn').addEventListener('click', (e) => { showRenameModal(convId, 'conversation', e); popover.remove(); });
            popover.querySelector('.pin-btn').addEventListener('click', (e) => { togglePinChat(convId, e); popover.remove(); });
            popover.querySelector('.archive-btn').addEventListener('click', (e) => { archiveChat(convId, e); popover.remove(); });
            popover.querySelector('.delete-btn').addEventListener('click', (e) => { deleteChat(convId, e); popover.remove(); });
            popover.querySelectorAll('.move-to-folder-btn').forEach(btn => btn.addEventListener('click', () => { moveConversationToFolder(convId, btn.dataset.folderId); popover.remove(); }));
            const newFolderBtn = popover.querySelector('.new-folder-from-menu-btn');
            if (newFolderBtn) {
                newFolderBtn.addEventListener('click', async () => {
                    popover.remove();
                    const folderName = await showCustomPrompt(i18n[config.uiLanguage].enterFolderName || '請輸入新資料夾的名稱：', i18n[config.uiLanguage].createNewFolder || '建立新資料夾');
                    if (folderName) {
                        const newFolderId = createNewFolder(folderName);
                        moveConversationToFolder(convId, newFolderId);
                    }
                });
            }
            const moveOutBtn = popover.querySelector('.move-out-of-folder-btn');
            if (moveOutBtn) {
                moveOutBtn.addEventListener('click', () => { moveConversationToFolder(convId, null); popover.remove(); });
            }
        };
        const setTheme = async (theme) => {
            if (document.body.classList.contains('custom-wallpaper-active')) {
                return;
            }
            document.documentElement.classList.toggle('dark', theme === 'dark');
            config.theme = theme;
            setAiBubbleColor();
            setUserBubbleColor();
            await saveConfig();
            updateThemeButtons();
            if (!ALL_ELEMENTS.settingsModal.classList.contains('hidden')) {
                renderAiBubbleColorDropdown();
                renderUserBubbleColorDropdown();
            }
        };
        const updateThemeButtons = () => {
            ALL_ELEMENTS.themeDarkBtn.classList.remove('active');
            ALL_ELEMENTS.themeLightBtn.classList.remove('active');
            if (config.theme === 'dark') {
                ALL_ELEMENTS.themeDarkBtn.classList.add('active');
            } else {
                ALL_ELEMENTS.themeLightBtn.classList.add('active');
            }
        };
        const handleLogin = async (e) => {
    e.preventDefault();
    const username = ALL_ELEMENTS.usernameInput.value.trim();
    const password = ALL_ELEMENTS.passwordInput.value;
    if (!username || !password) {
        showNotification(i18n[config.uiLanguage].usernamePasswordRequired || '使用者名稱和密碼皆為必填項目。', 'error');
        return;
    }
    const userKey = getUserKey(username);
    const savedUser = await getItem(userKey);
    const passwordHash = await hashString(password);
    if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser.passwordHash !== passwordHash) {
            showNotification(i18n[config.uiLanguage].passwordIncorrect || '密碼錯誤。', 'error');
            return;
        }
        currentUser = parsedUser;
    } else {
        currentUser = { username, passwordHash };
        await setItem(userKey, JSON.stringify(currentUser));
    }
    await setItem('chat_lastUser', username);

    // --- ✨ 這是唯一的修改處 START ---
    // 在執行淡出前，先移除我們為了顯示登入畫面而加入的 'visible' class
    ALL_ELEMENTS.authContainer.classList.remove('visible'); 
    // --- ✨ 這是唯一的修改處 END ---

    ALL_ELEMENTS.authContainer.classList.add('fade-out');
    ALL_ELEMENTS.appContainer.classList.remove('hidden');
    requestAnimationFrame(() => {
        ALL_ELEMENTS.appContainer.classList.add('visible');
    });
    ALL_ELEMENTS.authContainer.addEventListener('transitionend', () => {
        ALL_ELEMENTS.authContainer.style.display = 'none';
    }, { once: true });
    initChatApp();
};
        const handleLogout = async () => {
            if (await showCustomConfirm(i18n[config.uiLanguage].confirmLogout || '您確定要登出嗎？', i18n[config.uiLanguage].logoutConfirmation || '登出確認')) {
                await removeItem('chat_lastUser');
                window.location.reload();
            }
        };
        const handleDeleteAllData = async () => {
            const confirmation = await showCustomDialog({
                title: i18n[config.uiLanguage].deleteAllDataTitle || '永久刪除所有資料',
                message: i18n[config.uiLanguage].deleteAllDataMessage || '此操作將會刪除您所有的對話紀錄、設定、Astras 及 API 金鑰。此動作無法復原。請輸入「DELETE」以確認刪除。',
                input: { type: 'text', placeholder: 'DELETE' },
                dialogClass: 'dialog-warning-border',
                buttons: [
                    { text: i18n[config.uiLanguage].cancel || '取消', class: 'bg-[var(--hover-bg)] px-4 py-2 rounded-md hover:bg-[var(--active-bg)]', value: () => null },
                    { text: i18n[config.uiLanguage].confirmDelete || '確認刪除', class: 'bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700', value: (val) => val }
                ]
            });
            if (confirmation === 'DELETE') {
                try {
                    const idb = await openDB();
                    const tx = idb.transaction(STORE_NAME, 'readwrite');
                    const store = tx.objectStore(STORE_NAME);
                    await new Promise((resolve, reject) => {
                        const req = store.clear();
                        req.onsuccess = resolve;
                        req.onerror = reject;
                    });
                    showNotification(i18n[config.uiLanguage].deleteAllDataSuccess || '所有資料已成功刪除。頁面即將重新整理。', 'success');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } catch (error) {
                    console.error('刪除資料時發生錯誤:', error);
                    showNotification(i18n[config.uiLanguage].deleteAllDataError || '刪除資料失敗。', 'error');
                }
            } else if (confirmation !== null) {
                showNotification(i18n[config.uiLanguage].incorrectInput || '輸入錯誤，操作已取消。', 'warning');
            }
        };
        const createNewFolder = (name) => {
            const newFolder = { id: crypto.randomUUID(), name,conversationIds: [], ...getDefaultFolder() };
            folders.push(newFolder);
            saveAppData();
            renderFolders();
            return newFolder.id;
        };
        const moveConversationToFolder = async (convId, folderId) => {
            const conv = conversations.find(c => c.id === convId);
            if (!conv) return;
            if (conv.folderId) {
                const oldFolder = folders.find(f => f.id === conv.folderId);
                if (oldFolder) {
                    oldFolder.conversationIds = oldFolder.conversationIds.filter(id => id !== convId);
                }
            }
            conv.folderId = folderId;
            if (folderId) {
                const newFolder = folders.find(f => f.id === folderId);
                if (newFolder && !newFolder.conversationIds.includes(convId)) {
                    newFolder.conversationIds.push(convId);
                }
            }
            await saveAppData();
            renderAll();
        };
        const deleteFolder = async (id, event) => {
            event?.stopPropagation();
            const folder = folders.find(f => f.id === id);
            if (!folder) return;
            const confirmMsg = folder.conversationIds.length > 0
                ? i18n[config.uiLanguage].confirmDeleteFolderWithChats
                : i18n[config.uiLanguage].confirmDeleteEmptyFolder;
            if (!(await showCustomConfirm(confirmMsg, i18n[config.uiLanguage].deleteFolderTitle))) return;
            conversations.forEach(c => {
                if (c.folderId === id) {
                    c.folderId = null;
                }
            });
            folders = folders.filter(f => f.id !== id);
            await saveAppData();
            renderAll();
            showNotification(i18n[config.uiLanguage].folderDeleted, 'success');
        };
        const showFolderSettingsModal = (id, event) => {
            event?.stopPropagation();
            folderToCustomize = id;
            const folder = folders.find(f => f.id === id);
            if (!folder) return;
            ALL_ELEMENTS.colorSwatchesContainer.innerHTML = '';
            Object.entries(FOLDER_COLORS).forEach(([name, hex]) => {
                const swatch = document.createElement('div');
                swatch.className = `color-swatch w-8 h-8 rounded-full cursor-pointer`;
                swatch.style.backgroundColor = hex;
                swatch.dataset.color = name;
                if (folder.color === name) {
                    swatch.classList.add('selected');
                }
                swatch.addEventListener('click', () => {
                    ALL_ELEMENTS.colorSwatchesContainer.querySelector('.selected')?.classList.remove('selected');
                    swatch.classList.add('selected');
                });
                ALL_ELEMENTS.colorSwatchesContainer.appendChild(swatch);
            });
            ALL_ELEMENTS.iconOptionsContainer.innerHTML = '';
            FOLDER_ICONS.forEach(icon => {
                const iconOption = document.createElement('div');
                iconOption.className = 'icon-option w-10 h-10 rounded-lg cursor-pointer flex items-center justify-center text-xl bg-[var(--sidebar-bg)]';
                iconOption.textContent = icon;
                iconOption.dataset.icon = icon;
                if (folder.icon === icon) {
                    iconOption.classList.add('selected');
                }
                iconOption.addEventListener('click', () => {
                    ALL_ELEMENTS.iconOptionsContainer.querySelector('.selected')?.classList.remove('selected');
                    iconOption.classList.add('selected');
                });
                ALL_ELEMENTS.iconOptionsContainer.appendChild(iconOption);
            });
            toggleModal(ALL_ELEMENTS.folderSettingsModal, true);
        };
        const handleSaveFolderSettings = async () => {
            const folder = folders.find(f => f.id === folderToCustomize);
            if (!folder) return;
            const selectedColor = ALL_ELEMENTS.colorSwatchesContainer.querySelector('.selected')?.dataset.color;
            const selectedIcon = ALL_ELEMENTS.iconOptionsContainer.querySelector('.selected')?.dataset.icon;
            if (selectedColor) folder.color = selectedColor;
            if (selectedIcon) folder.icon = selectedIcon;
            await saveAppData();
            renderAll();
            toggleModal(ALL_ELEMENTS.folderSettingsModal, false);
            folderToCustomize = null;
        };
        const createFolderMenu = (folderId, targetButton) => {
            const existingPopover = document.getElementById('history-popover');
            if (existingPopover) {
                existingPopover.remove();
                if (existingPopover.dataset.targetId === targetButton.id) return;
            }
            const rect = targetButton.getBoundingClientRect();
            const popover = document.createElement('div');
            popover.id = 'history-popover';
            popover.className = 'popover absolute w-48 rounded-lg border border-[var(--border-color)] z-50';
            popover.dataset.targetId = targetButton.id;
            popover.style.top = `${rect.bottom}px`;
            popover.style.left = `${rect.left}px`;
            popover.innerHTML = `
                <button data-id="${folderId}" class="rename-folder-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].rename || '重新命名'}</button>
                <button data-id="${folderId}" class="customize-folder-btn w-full text-left px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">${i18n[config.uiLanguage].customize || '自訂'}</button>
                <div class="border-t my-1 border-[var(--border-color)]"></div>
                <button data-id="${folderId}" class="delete-folder-btn w-full text-left px-4 py-2 text-red-600 hover:bg-red-500/10 text-sm">${i18n[config.uiLanguage].deleteFolder || '刪除資料夾'}</button>
            `;
            document.body.appendChild(popover);
            requestAnimationFrame(() => popover.classList.add('visible'));
            popover.querySelector('.rename-folder-btn').addEventListener('click', (e) => { showRenameModal(folderId, 'folder', e); popover.remove(); });
            popover.querySelector('.customize-folder-btn').addEventListener('click', (e) => { showFolderSettingsModal(folderId, e); popover.remove(); });
            popover.querySelector('.delete-folder-btn').addEventListener('click', (e) => { deleteFolder(folderId, e); popover.remove(); });
        };
        const toggleSelectionMode = () => {
    isSelectionMode = !isSelectionMode;
    selectedConversationIds.clear();

    // ✨ 核心修改：不再改變文字，而是切換 'active' CSS 類別
    ALL_ELEMENTS.selectionModeBtn.classList.toggle('active', isSelectionMode);

    // ✨ 優化：同時更新滑鼠懸停時的提示文字
    if (isSelectionMode) {
        ALL_ELEMENTS.selectionModeBtn.title = i18n[config.uiLanguage].cancelBatchSelect || '取消批次選取';
    } else {
        ALL_ELEMENTS.selectionModeBtn.title = i18n[config.uiLanguage].batchSelect || '批次選取';
    }

    renderAll();
};
        const renderBatchActionBar = () => {
            const { batchActionBar, userControls, selectionCount, batchDeleteBtn, batchArchiveBtn, batchMoveBtn } = ALL_ELEMENTS;
            if (isSelectionMode) {
                batchActionBar.classList.remove('hidden');
                userControls.classList.add('hidden');
                const count = selectedConversationIds.size;
                selectionCount.textContent = `${i18n[config.uiLanguage].selected || '已選取'} ${count} ${i18n[config.uiLanguage].items || '個項目'}`;
                const hasSelection = count > 0;
                batchDeleteBtn.disabled = !hasSelection;
                batchArchiveBtn.disabled = !hasSelection;
                batchMoveBtn.disabled = !hasSelection;
            } else {
                batchActionBar.classList.add('hidden');
                userControls.classList.remove('hidden');
            }
        };
        const handleBatchDelete = async () => {
            const count = selectedConversationIds.size;
            if (count === 0) return;
            if (!(await showCustomConfirm(`${i18n[config.uiLanguage].confirmBatchMoveToTrash || '您確定要將這'} ${count} ${i18n[config.uiLanguage].conversations || '個對話'} ${i18n[config.uiLanguage].moveToTrashConfirmText || '移至垃圾桶嗎？'}`))) return;
            selectedConversationIds.forEach(id => {
                const conv = conversations.find(c => c.id === id);
                if (conv) {
                    conv.deletedAt = new Date().toISOString();
                }
            });
            if (selectedConversationIds.has(activeConversationId)) {
                const nextConv = conversations.find(c => !c.archived && !c.deletedAt);
                activeConversationId = nextConv ? nextConv.id : null;
                if (!activeConversationId) startNewChat();
            }
            await saveAppData();
            toggleSelectionMode();
            showNotification(`${i18n[config.uiLanguage].batchMoveToTrashSuccess || '已成功將'} ${count} ${i18n[config.uiLanguage].conversations || '個對話'} ${i18n[config.uiLanguage].movedToTrashText || '移至垃圾桶。'}`, 'success');
        };
        const handleBatchArchive = async () => {
            const count = selectedConversationIds.size;
            if (count === 0) return;
            conversations.forEach(c => {
                if (selectedConversationIds.has(c.id)) {
                    c.archived = true;
                }
            });
            if (selectedConversationIds.has(activeConversationId)) {
                const nextConv = conversations.find(c => !c.archived && !c.deletedAt);
                activeConversationId = nextConv ? nextConv.id : null;
                if (!activeConversationId) startNewChat();
            }
            await saveAppData();
            toggleSelectionMode();
            showNotification(`${i18n[config.uiLanguage].batchArchiveSuccess || '已成功封存'} ${count} ${i18n[config.uiLanguage].conversations || '個對話。'}`, 'success');
        };
        const handleBatchMove = () => {
            if (selectedConversationIds.size === 0) return;
            renderBatchMoveModal();
            toggleModal(ALL_ELEMENTS.batchMoveModal, true);
        };
        const renderBatchMoveModal = (singleConvId = null) => {
            const container = ALL_ELEMENTS.batchMoveFolderList;
            container.dataset.singleConvId = singleConvId || '';
            container.innerHTML = `
                <button class="w-full text-left p-2 rounded-md hover:bg-[var(--hover-bg)]" data-folder-id="none">
                    ${i18n[config.uiLanguage].moveOutOfFolder || '移出資料夾'}
                </button>
            `;
            folders.forEach(folder => {
                const btn = document.createElement('button');
                btn.className = 'w-full text-left p-2 rounded-md hover:bg-[var(--hover-bg)]';
                btn.dataset.folderId = folder.id;
                btn.textContent = folder.name;
                container.appendChild(btn);
            });
            const newFolderOption = document.createElement('button');
            newFolderOption.className = 'w-full text-left p-2 rounded-md hover:bg-[var(--hover-bg)] flex items-center gap-2 border-t border-[var(--border-color)] mt-2';
            newFolderOption.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><line x1="12" y1="10" x2="12" y2="16"></line><line x1="9" y1="13" x2="15" y2="13"></line></svg>${i18n[config.uiLanguage].createNewFolder || '建立新資料夾'}`;
            newFolderOption.addEventListener('click', async () => {
                toggleModal(ALL_ELEMENTS.batchMoveModal, false);
                const name = await showCustomPrompt(i18n[config.uiLanguage].enterFolderName || '請輸入新資料夾名稱：', i18n[config.uiLanguage].createFolder || '建立資料夾');
                if (name) {
                    const newId = createNewFolder(name);
                    batchMoveToFolder(newId);
                }
            });
            container.appendChild(newFolderOption);
            container.querySelectorAll('button[data-folder-id]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const folderId = btn.dataset.folderId === 'none' ? null : btn.dataset.folderId;
                    batchMoveToFolder(folderId);
                });
            });
        };
        const batchMoveToFolder = async (folderId) => {
            const singleConvId = ALL_ELEMENTS.batchMoveFolderList.dataset.singleConvId;
            let idsToMove;
            if (singleConvId) {
                idsToMove = new Set([singleConvId]);
            } else {
                idsToMove = selectedConversationIds;
            }
            const count = idsToMove.size;
            idsToMove.forEach(convId => {
                moveConversationToFolder(convId, folderId);
            });
            toggleModal(ALL_ELEMENTS.batchMoveModal, false);
            if (!singleConvId) {
                toggleSelectionMode();
            }
            showNotification(`${i18n[config.uiLanguage].moved || '已移動'} ${count} ${i18n[config.uiLanguage].conversations || '個對話。'}`);
        };
        const highlightText = (text, query) => {
            if (!query || !text) return text;
            try {
                const safeQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp(`(${safeQuery})`, 'gi');
                return text.replace(regex, '<mark class="bg-yellow-300 dark:bg-yellow-500 rounded px-1">$1</mark>');
            } catch (e) {
                console.error("Highlight regex error:", e);
                return text;
            }
        };
        const performSearchAndRenderResults = async () => {
            const query = ALL_ELEMENTS.modalSearchInput.value.trim();
            const scope = ALL_ELEMENTS.modalSearchScopeSelect.value;
            const container = ALL_ELEMENTS.searchResultsContainer;
            container.innerHTML = `<p class="text-center text-[var(--text-secondary)]">${i18n[config.uiLanguage].searching || '正在搜尋中...'}</p>`;
            if (!query) {
                container.innerHTML = `<p class="text-center text-[var(--text-secondary)]">${i18n[config.uiLanguage].searchPrompt}</p>`;
                return;
            }
            let results = [];
            if (scope === 'natural') {
                try {
                    const weightedKeywords = await generateSearchKeywords(query);
                    if (!weightedKeywords || weightedKeywords.length === 0) {
                        throw new Error(i18n[config.uiLanguage].keywordGenerationFailed || '無法從您的查詢中提取關鍵字。');
                    }
                    results = calculateRelevanceScores(weightedKeywords);
                } catch (error) {
                    container.innerHTML = `<p class="text-center text-red-500">${error.message}</p>`;
                    return;
                }
            } else {
    const lowerCaseQuery = query.toLowerCase();
    const searchIn = scope === 'keyword-title' ? ['title'] : ['title', 'content'];
    
    // ✨ 核心修正：在搜尋前過濾掉垃圾桶中的內容
    conversations
        .filter(c => !c.deletedAt)
        .forEach(conv => {
            let matchFound = false;
            let titleHTML = conv.title;
                    let snippetHTML = '';
                    if (searchIn.includes('title') && conv.title.toLowerCase().includes(lowerCaseQuery)) {
                        matchFound = true;
                        titleHTML = highlightText(conv.title, query);
                    }
                    if (searchIn.includes('content')) {
                        for (const msg of conv.messages) {
                            for (const part of msg.parts) {
                                if (part.text && part.text.toLowerCase().includes(lowerCaseQuery)) {
                                    matchFound = true;
                                    const text = part.text;
                                    const matchIndex = text.toLowerCase().indexOf(lowerCaseQuery);
                                    const start = Math.max(0, matchIndex - 40);
                                    const end = Math.min(text.length, matchIndex + query.length + 40);
                                    snippetHTML = (start > 0 ? '...' : '') + highlightText(text.substring(start, end), query) + (end < text.length ? '...' : '');
                                    break;
                                }
                            }
                            if (snippetHTML) break;
                        }
                    }
                    if (matchFound) {
                        results.push({ conv, titleHTML, snippetHTML, score: 0 });
                    }
                });
            }
            if (scope === 'natural') {
                results.sort((a, b) => b.score - a.score);
            }
            container.innerHTML = '';
            if (results.length === 0) {
                container.innerHTML = `<p class="text-center text-[var(--text-secondary)]">${i18n[config.uiLanguage].noResultsFound || '找不到符合的對話。'}</p>`;
                return;
            }
            results.forEach(({ conv, titleHTML, snippetHTML, score }) => {
                const item = document.createElement('div');
                item.className = 'p-3 rounded-md hover:bg-[var(--hover-bg)] border border-transparent hover:border-[var(--border-color)]';
                item.dataset.id = conv.id;
                const scoreHTML = scope === 'natural' ? `
                    <div class="flex items-center gap-2 mt-2">
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${score}%"></div>
                        </div>
                        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${score}</span>
                    </div>
                ` : '';
                item.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div class="flex-1 min-w-0">
                            <div class="font-medium truncate">${titleHTML || highlightText(conv.title, query)}</div>
                            ${snippetHTML ? `<p class="text-xs text-[var(--text-secondary)] mt-1 truncate">${snippetHTML}</p>` : ''}
                        </div>
                        <button data-id="${conv.id}" class="search-view-btn ml-2 flex-shrink-0 text-xs bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full hover:bg-blue-200">${i18n[config.uiLanguage].view || '檢視'}</button>
                    </div>
                    ${scoreHTML}
                `;
                const titleArea = item.querySelector('.flex-1');
                titleArea.addEventListener('click', () => {
    loadChat(conv.id);
    toggleSidebar(false);
    toggleModal(ALL_ELEMENTS.searchModal, false);
    ALL_ELEMENTS.openSearchBtn.classList.remove('active'); // <-- ✨ 加上這一行
});
                const viewBtn = item.querySelector('.search-view-btn');
                viewBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showConversationInViewModal(conv.id);
                });
                let pressTimer = null;
                item.addEventListener('touchstart', (e) => {
                    if (e.target.closest('button')) return;
                    pressTimer = setTimeout(() => {
                        e.preventDefault();
                        showConversationInViewModal(conv.id);
                    }, 500);
                }, { passive: false });
                item.addEventListener('touchend', () => clearTimeout(pressTimer));
                item.addEventListener('touchmove', () => clearTimeout(pressTimer));
                container.appendChild(item);
            });
        };
        const showConversationInViewModal = (convId) => {
            const conv = conversations.find(c => c.id === convId);
            if (!conv) return;
            ALL_ELEMENTS.searchViewTitle.textContent = conv.title;
            const contentContainer = ALL_ELEMENTS.searchViewContent;
            contentContainer.innerHTML = '';
            if (conv.messages.length === 0) {
                contentContainer.innerHTML = `<p class="text-center text-[var(--text-secondary)]">${i18n[config.uiLanguage].noMessages || '此對話沒有訊息。'}</p>`;
            } else {
                 conv.messages.forEach(msg => {
                    const isUser = msg.role === 'user';
                    const messageDiv = document.createElement('div');
                    messageDiv.className = `flex items-start gap-2 md:gap-4 ${isUser ? 'justify-end user-message' : 'model-message'}`;
                    const icon = isUser
                        ? `<div class="bg-blue-600 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold">${currentUser ? currentUser.username.charAt(0).toUpperCase() : 'Y'}</div>`
                        : `<div class="bg-gray-800 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 15h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></div>`;
                    let contentHTML = msg.parts.map(p => p.text ? (isUser ? p.text.replace(/\n/g, '<br>') : renderMarkdownWithFormulas(p.text)) : '').join('');
                    const messageBubble = `<div class="p-3 md:p-4 rounded-lg shadow-sm max-w-full md:max-w-xl message-bubble"><div class="prose prose-sm max-w-none message-content ${isUser ? 'text-white' : 'text-[var(--text-primary)]'}">${contentHTML}</div></div>`;
                    messageDiv.innerHTML = isUser ? `${messageBubble}${icon}` : `${icon}${messageBubble}`;
                    contentContainer.appendChild(messageDiv);
                });
            }
            ALL_ELEMENTS.searchViewConfirmBtn.dataset.id = convId;
            toggleModal(ALL_ELEMENTS.searchViewModal, true);
        };
        const generateSearchKeywords = async (naturalQuery) => {
            const prompt = `分析以下自然語言查詢，提取 5-10 個最相關的核心關鍵字。對於每個關鍵字，根據其在查詢中的重要性，給予一個 1 到 10 的權重分數（10為最重要）。請嚴格按照以下 JSON 格式輸出，不要有任何額外的文字或解釋。
範例:
查詢: "去年夏天在巴黎鐵塔附近吃的最好吃的法國可麗餅是什麼？"
輸出: [{"keyword": "可麗餅", "weight": 10}, {"keyword": "巴黎鐵塔", "weight": 9}, {"keyword": "法國", "weight": 7}, {"keyword": "吃", "weight": 5}, {"keyword": "去年夏天", "weight": 4}]
查詢內容：${naturalQuery}`;
            const responseSchema = {
                type: "ARRAY",
                items: {
                    type: "OBJECT",
                    properties: {
                        keyword: { type: "STRING" },
                        weight: { type: "INTEGER", minimum: 1, maximum: 10 }
                    },
                    required: ["keyword", "weight"]
                },
                minItems: 3,
                maxItems: 10
            };
            return await callApiWithSchema(prompt, responseSchema);
        };
        const calculateRelevanceScores = (weightedKeywords) => {
    let results = [];
    let processedConvIds = new Set();
    const totalWeightSum = weightedKeywords.reduce((sum, kw) => sum + kw.weight, 0);

    // ✨ 核心修正：在計分前過濾掉垃圾桶中的內容
    conversations
        .filter(c => !c.deletedAt)
        .forEach(conv => {
            if (processedConvIds.has(conv.id)) return;
                let totalScore = 0;
                let maxPossibleScore = 0;
                let foundKeywords = new Set();
                let bestSnippet = '';
                let titleHTML = conv.title;
                const totalMessages = conv.messages.length;
                weightedKeywords.forEach(kw => {
                    const keywordLower = kw.keyword.toLowerCase();
                    maxPossibleScore += kw.weight * 10;
                    if (conv.title.toLowerCase().includes(keywordLower)) {
                        totalScore += kw.weight * 10;
                        foundKeywords.add(keywordLower);
                        titleHTML = highlightText(titleHTML, kw.keyword);
                    }
                    conv.messages.forEach((msg, msgIndex) => {
                        msg.parts.forEach(part => {
                            if (part.text && part.text.toLowerCase().includes(keywordLower)) {
                                foundKeywords.add(keywordLower);
                                const occurrences = (part.text.toLowerCase().match(new RegExp(keywordLower, 'g')) || []).length;
                                totalScore += kw.weight * occurrences * 0.5;
                                const recencyWeight = (msgIndex + 1) / totalMessages;
                                totalScore += kw.weight * recencyWeight * 2;
                                const roleWeight = msg.role === 'user' ? 1.5 : 1;
                                totalScore += kw.weight * roleWeight;
                                if (!bestSnippet) {
                                    const text = part.text;
                                    const matchIndex = text.toLowerCase().indexOf(keywordLower);
                                    const start = Math.max(0, matchIndex - 40);
                                    const end = Math.min(text.length, matchIndex + kw.keyword.length + 40);
                                    bestSnippet = (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
                                }
                            }
                        });
                    });
                });
                if (foundKeywords.size > 0) {
                    const coverageRatio = foundKeywords.size / weightedKeywords.length;
                    totalScore *= (1 + coverageRatio);
                    let finalScore = Math.min(100, Math.round((totalScore / maxPossibleScore) * 100 * 3));
                    finalScore = Math.min(99, finalScore);
                    const allKeywordsQuery = weightedKeywords.map(kw => kw.keyword).join('|');
                    const highlightedSnippet = highlightText(bestSnippet, allKeywordsQuery);
                    results.push({
                        conv,
                        titleHTML: highlightText(conv.title, allKeywordsQuery),
                        snippetHTML: highlightedSnippet,
                        score: finalScore
                    });
                    processedConvIds.add(conv.id);
                }
            });
            return results;
        };
        const renderFilePreviews = () => {
            const { filePreviewContainer } = ALL_ELEMENTS;
            filePreviewContainer.innerHTML = '';
            uploadedFiles.forEach(file => {
                const previewEl = document.createElement('div');
                previewEl.className = 'relative w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden file-preview-item';
                if (file.type.startsWith('image/')) {
                    previewEl.innerHTML = `<img src="${file.base64}" class="w-full h-full object-cover">`;
                } else {
                    previewEl.innerHTML = `<div class="w-full h-full flex items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    </div>`;
                }
                const removeBtn = document.createElement('button');
                removeBtn.className = 'absolute top-0 right-0 m-1 w-5 h-5 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center text-xs';
                removeBtn.innerHTML = '&times;';
                removeBtn.onclick = () => removeFile(file.id);
                previewEl.appendChild(removeBtn);
                filePreviewContainer.appendChild(previewEl);
            });
            updateInputState();
        };
        const handleFileSelection = (event) => {
            const files = event.target.files;
            if (!files) return;
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedFiles.push({
                        id: crypto.randomUUID(),
                        name: file.name,type: file.type,
                        base64: e.target.result,
                    });
                    renderFilePreviews();
                };
                reader.readAsDataURL(file);
            });
            event.target.value = '';
        };
        const removeFile = (fileId) => {
            uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
            renderFilePreviews();
        };
        const handleExport = async () => {
            const dataToExport = {
                user_credentials: {
                    username: currentUser.username,
                    passwordHash: currentUser.passwordHash
                }
            };
            if (ALL_ELEMENTS.exportHistoryCheck.checked) { dataToExport.conversations = conversations; dataToExport.folders = folders; }
            if (ALL_ELEMENTS.exportAstrasCheck.checked) { dataToExport.astras = astras; }
            if (ALL_ELEMENTS.exportSettingsCheck.checked) {
                dataToExport.settings = {
                    defaultModel: config.defaultModel, theme: config.theme, modelSettings: config.modelSettings,
                    enableFollowUp: config.enableFollowUp, aiBubbleColor: config.aiBubbleColor, userBubbleColor: config.userBubbleColor,
                    autoNaming: config.autoNaming, enableAutoWebSearch: config.enableAutoWebSearch, memoryEnabled1: config.memoryEnabled1,
                    enableAutoMemory: config.enableAutoMemory, customWallpaper: config.customWallpaper, wallpaperBrightness: config.wallpaperBrightness,
                    uiTheme: config.uiTheme, uiLanguage: config.uiLanguage, aiDefaultLanguage: config.aiDefaultLanguage,
                    isLearningMode: config.isLearningMode
                };
            }
            if (document.getElementById('export-api-check').checked) { dataToExport.apiKeys = config.apiKeys; }
            if (ALL_ELEMENTS.exportMemoryCheck.checked) { dataToExport.personalMemories = personalMemories; }
            if (Object.keys(dataToExport).length <= 1) {
                showNotification(i18n[config.uiLanguage].selectDataToExportNotice || '請至少選擇一項要匯出的資料。', 'warning');
                return;
            }
            const fileName = `chatbot_backup_${currentUser.username}_${new Date().toISOString().split('T')[0]}.json`;
            const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
            try {
                if ('showSaveFilePicker' in window) {
                    console.log("Attempting export with: File System Access API");
                    const handle = await window.showSaveFilePicker({
                        suggestedName: fileName,
                        types: [{
                            description: 'JSON Files',
                            accept: { 'application/json': ['.json'] },
                        }],
                    });
                    const writable = await handle.createWritable();
                    await writable.write(blob);
                    await writable.close();
                    toggleModal(ALL_ELEMENTS.exportDataModal, false);
                    showNotification(i18n[config.uiLanguage].exportSuccess || '資料匯出成功！', 'success');
                    return;
                }
                const shareFile = new File([blob], fileName, {type: blob.type});
                if (navigator.share && navigator.canShare && navigator.canShare({ files: [shareFile] })) {
                    console.log("Attempting export with: Web Share API");
                    await navigator.share({
                        files: [shareFile],
                        title: 'Chatbot Backup',
                        text: 'Here is your chatbot data backup.',
                    });
                    toggleModal(ALL_ELEMENTS.exportDataModal, false);
                    return;
                }
                console.log("Attempting export with: Fallback <a> tag method");
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                URL.revokeObjectURL(url);
                document.body.removeChild(a);
                toggleModal(ALL_ELEMENTS.exportDataModal, false);
                showNotification(i18n[config.uiLanguage].exportSuccess || '資料匯出成功！', 'success');
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error("Export failed with error:", error);
                    let errorMessage = i18n[config.uiLanguage].exportFailed || '匯出失敗';
                    if (error.name === 'SecurityError' || error.message.toLowerCase().includes('permission denied')) {
                       errorMessage = i18n[config.uiLanguage].exportPermissionError || "瀏覽器阻止了下載。請檢查您的瀏覽器設定，或手動啟用彈出視窗/下載權限。";
                    }
                    showNotification(`${errorMessage}: ${error.message}`, 'error');
                } else {
                    console.log("Export was cancelled by the user.");
                }
            }
        };
        const performImport = async (data) => {
            if (!currentUser) {
                throw new Error("無法在沒有登入使用者的情況下匯入資料。");
            }
            conversations = data.conversations || [];
            folders = data.folders || [];
            astras = data.astras || [];
            personalMemories = data.personalMemories || [];
            await saveAppData();
            if (data.settings) {
                Object.assign(config, data.settings);
            }
            if (data.apiKeys) {
                config.apiKeys = { ...config.apiKeys, ...data.apiKeys };
            }
            await saveConfig();
        };
        const handleImport = async () => {
            const file = ALL_ELEMENTS.importFileInput.files[0];
            if (!file) {
                showNotification(i18n[config.uiLanguage].selectFileError || '請選擇檔案。', 'error');
                return;
            }
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.user_credentials && data.user_credentials.username !== currentUser.username) {
                        const confirmed = await showCustomConfirm(
                            i18n[config.uiLanguage].importUserMismatch.replace('{backupUser}', data.user_credentials.username).replace('{currentUser}', currentUser.username),
                            i18n[config.uiLanguage].importUserMismatchTitle
                        );
                        if (!confirmed) return;
                    } else {
                         if (!(await showCustomConfirm(i18n[config.uiLanguage].importOverwriteWarning, i18n[config.uiLanguage].importConfirmation))) return;
                    }
                    await performImport(data);
                    toggleModal(ALL_ELEMENTS.importDataModal, false);
                    showNotification(i18n[config.uiLanguage].importSuccess, 'success');
                    if (config.customWallpaper) {
                        try {
                            const brightness = await analyzeImageBrightness(config.customWallpaper);
                            config.wallpaperBrightness = brightness;
                             if (config.uiTheme.mode === 'adaptive') {
                                const palette = await getDominantColorPalette(config.customWallpaper);
                                config.uiTheme.adaptivePalette = palette;
                                config.uiTheme.adaptiveColor = palette[0] || '#3b82f6';
                            }
                            await saveConfig();
                        } catch (err) { /* keep default */ }
                    }
                    applyCustomWallpaper();
                    applyUiTheme();
                    setAiBubbleColor();
                    setUserBubbleColor();
                    applyLanguage(config.uiLanguage);
                    setupSettingsModal();
                    const firstConv = conversations.find(c => !c.archived && !c.deletedAt);
                    if (firstConv) {
                        loadChat(firstConv.id);
                    } else {
                        startNewChat();
                    }
                } catch (error) {
                    showNotification(`${i18n[config.uiLanguage].importFailed}: ${error.message}`, 'error');
                    console.error(error);
                }
            };
            reader.readAsText(file);
        };
        const handleImportOnAuth = () => {
            toggleModal(ALL_ELEMENTS.importDataModalAuth, true);
        };
        const processAuthImport = async () => {
            const username = ALL_ELEMENTS.usernameInput.value.trim();
            const password = ALL_ELEMENTS.passwordInput.value;
            const file = ALL_ELEMENTS.importFileInputAuth.files[0];

            if (!file) {
                showNotification(i18n[config.uiLanguage].selectFileError || '請選擇檔案。', 'error');
                return;
            }

            const passwordHash = await hashString(password);
            const reader = new FileReader();
            
            reader.onload = async (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (!data.user_credentials || !data.user_credentials.username || !data.user_credentials.passwordHash) {
                        throw new Error(i18n[config.uiLanguage].importInvalidFile || '備份檔案格式無效。');
                    }
                    if (data.user_credentials.username !== username || data.user_credentials.passwordHash !== passwordHash) {
                        throw new Error(i18n[config.uiLanguage].importAuthMismatch || '帳號或密碼與備份檔案不符。');
                    }

                    const userKey = getUserKey(username);
                    const savedUser = await getItem(userKey);
                    if (!savedUser) {
                        await setItem(userKey, JSON.stringify({ username, passwordHash }));
                    }
                    currentUser = { username, passwordHash };
                    await setItem('chat_lastUser', username);
                    await performImport(data);

                    toggleModal(ALL_ELEMENTS.importDataModalAuth, false);
                    ALL_ELEMENTS.authContainer.classList.add('fade-out');
                    ALL_ELEMENTS.appContainer.classList.remove('hidden');
                    requestAnimationFrame(() => {
                        ALL_ELEMENTS.appContainer.classList.add('visible');
                    });
                    ALL_ELEMENTS.authContainer.addEventListener('transitionend', () => {
                        ALL_ELEMENTS.authContainer.style.display = 'none';
                    }, { once: true });

                    initChatApp();
                    showNotification(i18n[config.uiLanguage].importSuccess || '匯入成功！', 'success');
                } catch (error) {
                    showNotification(`${i18n[config.uiLanguage].importFailed || '匯入失敗'}: ${error.message}`, 'error');
                    console.error(error);
                }
            };
            reader.readAsText(file);
        };
        const renderModelManagementUI = () => {
    const container = ALL_ELEMENTS.modelManagementList;
    container.innerHTML = '';

    // --- 步驟 1: 準備並分類所有模型 ---
    const processedModels = MODELS.map(model => {
        const provider = model.provider;
        let tier = [];
        let company = null;
        if (provider === 'gemini') {
            tier = ['free', 'paid'];
            company = 'google'; 
        } else if (provider === 'openrouter') {
            tier = model.id.includes(':free') ? ['free'] : ['paid'];
            company = model.id.split('/')[0];
        }
        return { ...model, tier, company };
    });

    const sortedModels = [...config.modelSettings]
        .sort((a, b) => a.order - b.order)
        .map(setting => ({
            setting,
            info: processedModels.find(m => m.id === setting.id)
        }))
        .filter(item => item.info); // 確保模型存在

    // 建立巢狀結構來存放分類後的模型
    const categorizedModels = {};

    sortedModels.forEach(item => {
        const { info, setting } = item;
        const { provider, tier, company } = info;

        if (!categorizedModels[provider]) categorizedModels[provider] = {};
        
        tier.forEach(t => {
            if (!categorizedModels[provider][t]) categorizedModels[provider][t] = {};
            
            if (provider === 'openrouter') {
                if (!categorizedModels[provider][t][company]) categorizedModels[provider][t][company] = [];
                categorizedModels[provider][t][company].push(item);
            } else {
                if (!categorizedModels[provider][t]['models']) categorizedModels[provider][t]['models'] = [];
                categorizedModels[provider][t]['models'].push(item);
            }
        });
    });

    // --- 步驟 2: 根據分類後的結構動態產生 HTML ---
    
    // 輔助函式：產生單個可排序的模型項目
    const createModelItemHTML = (item, index, total) => {
        const { setting, info } = item;
        return `
            <div class="model-management-item flex items-center p-2 bg-[var(--input-field-bg)] rounded-lg mb-1" data-model-id="${info.id}">
                <span class="flex-1 font-medium">${info.name}</span>
                <input type="radio" name="default-model-radio" class="w-4 h-4 mr-4 text-blue-600" ${config.defaultModel === info.id ? 'checked' : ''}>
                <button class="toggle-visibility-btn p-1 rounded-full hover:bg-[var(--hover-bg)]" title="${setting.hidden ? '顯示' : '隱藏'}">
                    ${setting.hidden ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573 3.007-9.963 7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'}
                </button>
                <div class="flex gap-1 ml-2">
                    <button class="move-up-btn p-1 rounded hover:bg-[var(--hover-bg)] disabled:opacity-50" ${index === 0 ? 'disabled' : ''}>↑</button>
                    <button class="move-down-btn p-1 rounded hover:bg-[var(--hover-bg)] disabled:opacity-50" ${index === total - 1 ? 'disabled' : ''}>↓</button>
                </div>
            </div>
        `;
    };

    // 輔助函式：建立一個可折疊的區塊
    const createCollapsibleSection = (title, level = 0) => {
        const details = document.createElement('details');
        details.className = `collapsible-section level-${level}`;
        details.style.marginLeft = `${level * 15}px`;
        details.innerHTML = `
            <summary class="collapsible-summary text-sm font-semibold capitalize cursor-pointer p-2 rounded hover:bg-[var(--hover-bg)]">${title}</summary>
            <div class="collapsible-content pl-4 pt-1"></div>
        `;
        return details;
    };

    // 遍歷提供商
    for (const provider in categorizedModels) {
        const providerSection = createCollapsibleSection(provider, 0);
        const providerContent = providerSection.querySelector('.collapsible-content');
        
        // 遍歷費用類型
        for (const tier in categorizedModels[provider]) {
            const tierSection = createCollapsibleSection(tier === 'free' ? '免費模型' : '付費模型', 1);
            const tierContent = tierSection.querySelector('.collapsible-content');
            
            const tierData = categorizedModels[provider][tier];

            if (provider === 'openrouter') {
                // 遍歷公司
                for (const company in tierData) {
                    const companySection = createCollapsibleSection(company, 2);
                    const companyContent = companySection.querySelector('.collapsible-content');
                    const models = tierData[company];
                    
                    companyContent.innerHTML = models.map((item, index) => createModelItemHTML(item, index, models.length)).join('');
                    tierContent.appendChild(companySection);
                }
            } else { // for Gemini
                const models = tierData['models'] || [];
                tierContent.innerHTML = models.map((item, index) => createModelItemHTML(item, index, models.length)).join('');
            }
            providerContent.appendChild(tierSection);
        }
        container.appendChild(providerSection);
    }
    
    // --- 步驟 3: 綁定事件 ---
    container.querySelectorAll('.toggle-visibility-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const modelId = e.currentTarget.closest('.model-management-item').dataset.modelId;
            const setting = config.modelSettings.find(s => s.id === modelId);
            if (setting) {
                setting.hidden = !setting.hidden;
                await saveConfig();
                renderModelManagementUI(); // 重繪整個UI
            }
        });
    });

    container.querySelectorAll('input[name="default-model-radio"]').forEach(radio => {
        radio.addEventListener('change', async (e) => {
            const modelId = e.currentTarget.closest('.model-management-item').dataset.modelId;
            config.defaultModel = modelId;
            await saveConfig();
            // 不需重繪，只需通知即可
            showNotification(i18n[config.uiLanguage].defaultModelUpdated || '預設模型已更新');
        });
    });

    container.querySelectorAll('.move-up-btn, .move-down-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modelId = e.currentTarget.closest('.model-management-item').dataset.modelId;
            const direction = e.currentTarget.classList.contains('move-up-btn') ? 'up' : 'down';
            moveModelOrder(modelId, direction);
        });
    });
};
        const moveModelOrder = async (modelId, direction) => {
    // 獲取模型及其詳細分類資訊
    const allModelsInfo = MODELS.map(model => {
        let tier = [];
        let company = null;
        if (model.provider === 'gemini') {
            tier = ['free', 'paid'];
            company = 'google';
        } else if (model.provider === 'openrouter') {
            tier = model.id.includes(':free') ? ['free'] : ['paid'];
            company = model.id.split('/')[0];
        }
        return { ...model, tier, company };
    });

    const modelToMoveInfo = allModelsInfo.find(m => m.id === modelId);
    if (!modelToMoveInfo) return;

    // 找出與被移動模型屬於同一分類的所有模型設定
    const siblingSettings = config.modelSettings.filter(setting => {
        const info = allModelsInfo.find(m => m.id === setting.id);
        if (!info) return false;
        
        // 判斷是否在同一個最終群組
        const sameProvider = info.provider === modelToMoveInfo.provider;
        const sameTier = info.tier.some(t => modelToMoveInfo.tier.includes(t));
        const sameCompany = info.company === modelToMoveInfo.company;

        return sameProvider && sameTier && sameCompany;
    }).sort((a, b) => a.order - b.order);

    const localIndex = siblingSettings.findIndex(s => s.id === modelId);

    if (direction === 'up' && localIndex > 0) {
        // 在本地群組中找到要交換位置的目標
        const targetSetting = siblingSettings[localIndex - 1];
        // 在全域設定中找到它們的索引
        const globalIndex1 = config.modelSettings.findIndex(s => s.id === modelId);
        const globalIndex2 = config.modelSettings.findIndex(s => s.id === targetSetting.id);
        // 交換它們的 order 值
        [config.modelSettings[globalIndex1].order, config.modelSettings[globalIndex2].order] = [config.modelSettings[globalIndex2].order, config.modelSettings[globalIndex1].order];

    } else if (direction === 'down' && localIndex < siblingSettings.length - 1) {
        const targetSetting = siblingSettings[localIndex + 1];
        const globalIndex1 = config.modelSettings.findIndex(s => s.id === modelId);
        const globalIndex2 = config.modelSettings.findIndex(s => s.id === targetSetting.id);
        [config.modelSettings[globalIndex1].order, config.modelSettings[globalIndex2].order] = [config.modelSettings[globalIndex2].order, config.modelSettings[globalIndex1].order];
    }
    
    // 根據新的 order 值重新排序整個陣列，並更新 order 屬性以確保連續性
    config.modelSettings.sort((a, b) => a.order - b.order);
    config.modelSettings.forEach((s, i) => s.order = i);

    await saveConfig();
    renderModelManagementUI(); // 重新渲染UI
    showNotification(i18n[config.uiLanguage].modelOrderUpdated || '模型順序已更新');
};
        function toggleSidebar(show) {
    const { sidebar, sidebarOverlay, appContainer } = ALL_ELEMENTS;
    sidebarOpen = typeof show === 'boolean' ? show : !sidebarOpen;

    // 判斷是否為電腦版螢幕
    if (window.innerWidth >= 1024) {
        // --- 電腦版邏輯：切換 class 來推擠 ---
        appContainer.classList.toggle('sidebar-open', sidebarOpen);
    } else {
        // --- 手機版邏輯：維持原本的覆蓋效果 ---
        if (sidebarOpen) {
            sidebar.style.transform = 'translateX(0)';
            sidebarOverlay.classList.add('visible');
        } else {
            sidebar.style.transform = 'translateX(-100%)';
            sidebarOverlay.classList.remove('visible');
        }
    }
}
        function closeAllPopovers() {
            document.querySelectorAll('.popover.visible').forEach(popover => {
                popover.classList.remove('visible');
            });
        }
        async function copyTextToClipboard(text) {
            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(text);
                    return;
                } catch (err) {
                    console.warn('Clipboard API 失敗，改用備用方案。', err);
                }
            }
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.top = "-9999px";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                const successful = document.execCommand('copy');
                if (!successful) {
                    throw new Error('備用複製指令失敗。');
                }
            } catch (err) {
                document.body.removeChild(textArea);
                throw err;
            }
            document.body.removeChild(textArea);
        }
        const setupVoiceInput = () => {
            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                ALL_ELEMENTS.voiceInputBtnMessage.addEventListener('click', () => toggleVoiceInput('message'));
                ALL_ELEMENTS.voiceInputBtnSearch.addEventListener('click', () => toggleVoiceInput('search'));
            } else {
                ALL_ELEMENTS.voiceInputBtnMessage.style.display = 'none';
                ALL_ELEMENTS.voiceInputBtnSearch.style.display = 'none';
                showNotification(i18n[config.uiLanguage].voiceNotSupported || '您的瀏覽器不支援語音輸入功能。', 'warning');
            }
        };
        const toggleVoiceInput = (target) => {
            if (currentSpeechRecognition) {
                currentSpeechRecognition.stop();
                return;
            }
            currentVoiceTarget = target;
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            currentSpeechRecognition = new SpeechRecognition();
            currentSpeechRecognition.lang = 'zh-TW';
            currentSpeechRecognition.continuous = true;
            currentSpeechRecognition.interimResults = true;
            currentSpeechRecognition.onresult = (event) => {
                let transcript = '';
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    transcript += event.results[i][0].transcript;
                }
                const inputEl = target === 'message' ? ALL_ELEMENTS.messageInput : ALL_ELEMENTS.modalSearchInput;
                inputEl.value = transcript;
                if (target === 'search') {
                    performSearchAndRenderResults();
                }
                updateInputState();
            };
            currentSpeechRecognition.onend = () => {
                currentSpeechRecognition = null;
                currentVoiceTarget = null;
                ALL_ELEMENTS.voiceInputBtnMessage.classList.remove('active');
                ALL_ELEMENTS.voiceInputBtnSearch.classList.remove('active');
            };
            currentSpeechRecognition.onerror = (event) => {
                showNotification(`${i18n[config.uiLanguage].voiceError || '語音輸入錯誤'}: ${event.error}`, 'error');
                currentSpeechRecognition = null;
            };
            currentSpeechRecognition.start();
            ALL_ELEMENTS[`voiceInputBtn${target.charAt(0).toUpperCase() + target.slice(1)}`].classList.add('active');
        };
        const renderPersonalMemoryList = () => {
            const container = ALL_ELEMENTS.personalMemoryList;
            container.innerHTML = '';
            personalMemories.forEach(memory => {
                const item = document.createElement('div');
                item.className = 'flex items-center justify-between p-2 rounded-lg bg-[var(--hover-bg)] border border-[var(--border-color)]';
                item.innerHTML = `
    <div class="flex items-center gap-2 flex-1 min-w-0"> <!-- ✨ 修改: 加上 min-w-0 確保 flex 容器可被壓縮 -->
        <input type="checkbox" class="memory-enabled-checkbox w-4 h-4" data-id="${memory.id}" ${memory.enabled ? 'checked' : ''}>
        <span class="text-sm word-break: break-word;">${memory.content}</span> <!-- ✨ 修改: 移除 truncate 並允許換行 -->
    </div>
    <button class="delete-memory-btn text-red-600 hover:text-red-800" data-id="${memory.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
    </button>
                `;
                container.appendChild(item);
            });
            container.querySelectorAll('.memory-enabled-checkbox').forEach(cb => {
                cb.addEventListener('change', async (e) => {
                    const id = e.target.dataset.id;
                    const memory = personalMemories.find(m => m.id === id);
                    if (memory) {
                        memory.enabled = e.target.checked;
                        await saveAppData();
                    }
                });
            });
            container.querySelectorAll('.delete-memory-btn').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const id = e.currentTarget.dataset.id;
                    if (await showCustomConfirm(i18n[config.uiLanguage].confirmDeleteMemory || '確定刪除此記憶？')) {
                        personalMemories = personalMemories.filter(m => m.id !== id);
                        await saveAppData();
                        renderPersonalMemoryList();
                    }
                });
            });
        };
        const refineAndStoreMemories = async (potentialMemories) => {
            if (potentialMemories.length === 0) return;

            if (personalMemories.length === 0) {
                potentialMemories.forEach(content => {
                    personalMemories.push({ id: crypto.randomUUID(), content, enabled: true });
                });
                await saveAppData();
                renderPersonalMemoryList();
                showNotification('已自動添加新的個人記憶。', 'success');
                return;
            }
            
            const prompt = `# 核心身份：記憶整合專家
你的任務是維護一個精簡、高效、無冗餘的用戶記憶庫。你將收到一個 "現有記憶庫" 和一個 "潛在的新記憶" 列表。你的工作不是簡單地添加，而是進行智能化的整合。

# 最高指導原則：整合優先原則 (Consolidation-First Principle)
你的首要目標是**減少記憶的總數量**，同時**增加單條記憶的資訊密度**。**新增 (ADD) 是一件需要極力避免的事情**，只有在資訊完全獨立且無法與任何現有記憶合併時，才被允許。

# 你的行動層級 (按此順序判斷)：
1.  **忽略 (IGNORE):** 如果新記憶與現有記憶在語意上完全重複，或只是換句話說。
2.  **更新 (UPDATE):** 如果新記憶是對現有記憶的**補充、具體化、修正或概括**。這是你最常用的工具。
3.  **新增 (ADD):** 如果新記憶引入了一個**全新的、完全不相關的領域**。

# 「更新 (UPDATE)」的黃金法則與範例：
你必須主動尋找可以合併的機會。
*   **具體化 (Adding Specificity):**
    *   現有: \`{"id": "abc", "content": "用戶是個開發者。"}\`
    *   潛在: \`"用戶會寫Python。"\`
    *   **正確行動:** \`{"action": "UPDATE", "id": "abc", "content": "用戶是個會寫Python的開發者。"}\`
*   **概括化 (Generalizing):**
    *   現有: \`{"id": "def", "content": "用戶喜歡貓。"}\`
    *   潛在: \`"用戶也喜歡狗。"\`
    *   **正確行動:** \`{"action": "UPDATE", "id": "def", "content": "用戶喜歡動物 (例如貓和狗)。"}\`
*   **補充細節 (Adding Details):**
    *   現有: \`{"id": "ghi", "content": "用戶喜歡旅行。"}\`
    *   潛在: \`"用戶去過日本和泰國。"\`
    *   **正確行動:** \`{"action": "UPDATE", "id": "ghi", "content": "用戶喜歡旅行，曾去過日本和泰國。"}\`

# 輸出格式
你必須嚴格地以一個 JSON 陣列的形式回覆，每個物件代表一個行動。不要包含任何 JSON 以外的解釋或文字。

\`\`\`json
[
  {
    "action": "ADD",
    "content": "新的記憶內容"
  },
  {
    "action": "UPDATE",
    "id": "要更新的現有記憶的ID",
    "content": "更新後的完整記憶內容"
  },
  {
    "action": "IGNORE",
    "content": "要忽略的新記憶內容"
  }
]
\`\`\`

# 待處理的資料
【現有的記憶庫 (包含 ID)】:
${JSON.stringify(personalMemories, null, 2)}

【潛在的新記憶】:
${JSON.stringify(potentialMemories, null, 2)}
`;
            const responseSchema = {
                type: "ARRAY",
                items: {
                    type: "OBJECT",
                    properties: {
                        action: { type: "STRING", enum: ["ADD", "UPDATE", "IGNORE"] },
                        id: { type: "STRING" },
                        content: { type: "STRING" }
                    },
                    required: ["action", "content"]
                }
            };

            try {
                const actions = await callApiWithSchema(prompt, responseSchema);
                if (actions && Array.isArray(actions)) {
                    let memoriesChanged = false;
                    actions.forEach(act => {
                        switch (act.action) {
                            case 'ADD':
                                if (!personalMemories.some(m => m.content === act.content)) {
                                    personalMemories.push({ id: crypto.randomUUID(), content: act.content, enabled: true });
                                    memoriesChanged = true;
                                }
                                break;
                            case 'UPDATE':
                                const memoryToUpdate = personalMemories.find(m => m.id === act.id);
                                if (memoryToUpdate && memoryToUpdate.content !== act.content) {
                                    memoryToUpdate.content = act.content;
                                    memoriesChanged = true;
                                }
                                break;
                            case 'IGNORE':
                                break;
                        }
                    });

                    if (memoriesChanged) {
                        await saveAppData();
                        if (!ALL_ELEMENTS.settingsModal.classList.contains('hidden')) {
                           renderPersonalMemoryList();
                        }
                        showNotification('AI 已自動整理並更新您的個人記憶。', 'success');
                    }
                }
            } catch (error) {
                console.error("Error refining memories:", error);
            }
        };
        const extractPersonalMemory = async (userMessage, aiResponse) => {
            const prompt = `# 核心身份：首席用戶畫像分析師
你的唯一職責是從用戶的發言中，提煉出**永恆的、可獨立存在的用戶特質**。你不是對話記錄員，你是一位為建立長期、精準用戶畫像而服務的分析師。

# 最高指導原則：孤島測試 (The Island Test)
這是你判斷是否記錄一條資訊的**唯一標準**。在記錄前，你必須在心中回答：
> **"如果我只知道這一條資訊，而完全不知道它所在的對話上下文，這條資訊是否仍然是一個關於用戶的、有意義的、獨立完整的事實？"**

如果答案是「否」，則**必須拋棄**這條資訊。

*   **測試案例 (通過):**
    *   資訊："用戶是一名Python開發者。"
    *   孤島測試：知道這一點，我了解了用戶的一個關鍵技能。**通過。**
*   **測試案例 (失敗):**
    *   資訊："用戶想讓你幫他 debug。"
    *   孤島測試：只知道這個，我不知道他想 debug 什麼，也不知道這是一個長期需求還是一次性請求。這條資訊依賴於對話上下文。**失敗。**

# 記憶提煉的詳細規則
你必須嚴格遵守以下所有規則來過濾資訊。

### 1. 資訊來源：
*   **絕對只從【使用者訊息】中提取。** AI的回應內容完全不在你的分析範圍內。

### 2. 允許記錄的類型 (必須通過孤島測試)：
*   **職業/技能:** "用戶是醫生。","用戶會彈鋼琴。"
*   **核心興趣/愛好:** "用戶喜歡看科幻小說。","用戶熱衷於登山。"
*   **長期目標/願望:** "用戶的目標是開一家咖啡廳。"
*   **穩定的人際關係/所有物:** "用戶已婚。","用戶有一隻叫Mochi的貓。"
*   **堅定的個人偏好:** "用戶是素食主義者。","用戶偏愛深色模式的介面。"

### 3. 絕對禁止的類型 (會導致孤島測試失敗)：
*   **[禁令 A] 任何與AI的互動/指令/評價:**
    *   **例子:** "用戶覺得AI很聰明"、"用戶想讓AI扮演一個角色"、"用戶要你總結一下"、"用戶在測試你的記憶力"。
    *   **理由:** 這些描述的是對話行為，而非用戶本身。
*   **[禁令 B] 暫時性狀態、情緒或意圖:**
    *   **例子:** "用戶今天心情不好"、"用戶正準備出門"、"用戶想討論天氣"。
    *   **理由:** 這些資訊很快就會過時，不具備長期價值。
*   **[禁令 C] 一次性的問題或請求:**
    *   **例子:** "用戶在問法國的首都是哪裡"、"用戶要了一份食譜"。
    *   **理由:** 這是單次資訊交換，不是用戶特質。
*   **[禁令 D] 模糊或不確定的陳述:**
    *   **例子:** "用戶可能喜歡..."、"用戶好像在考慮..."。
    *   **理由:** 記憶必須是基於確定的事實。
*   **[禁令 E] 任何形式的程式碼、URL、或技術細節。**

# 輸出格式
*   如果找到任何**通過孤島測試**的記憶點，將它們精煉成以「用戶」開頭的陳述句，並放入一個JSON陣列中。
*   如果沒有任何資訊能通過測試，**必須**返回一個空的JSON陣列：\`[]\`。

# 待分析內容
【使用者訊息】：${userMessage}`;
            const responseSchema = {
                type: "ARRAY",
                items: { type: "STRING" }
            };
            const extracted = await callApiWithSchema(prompt, responseSchema);
            if (extracted && extracted.length > 0) {
                await refineAndStoreMemories(extracted);
            }
        };
        const updateApiKeyWarningBadge = () => {
            const conv = getActiveConversation();
            if (!conv) {
                ALL_ELEMENTS.apiKeyWarningBadge.classList.add('hidden');
                return;
            }
            const modelInfo = MODELS.find(m => m.id === conv.model);
            let needsKey = false;
            if (modelInfo) {
                if (modelInfo.provider === 'gemini' && !config.apiKeys.gemini) {
                    needsKey = true;
                } else if (modelInfo.provider === 'openrouter' && !config.apiKeys.openrouter) {
                    needsKey = true;
                }
            }
            ALL_ELEMENTS.apiKeyWarningBadge.classList.toggle('hidden', !needsKey);
        };
        const openDashboard = () => {
            renderDashboardStats();
            renderModelUsageChart();
            setupTimeAnalysis();
            toggleModal(ALL_ELEMENTS.dataDashboardModal, true);
        };
        const renderDashboardStats = () => {
            ALL_ELEMENTS.totalConvStat.textContent = conversations.filter(c => !c.deletedAt).length;
            ALL_ELEMENTS.totalFolderStat.textContent = folders.length;
            const modelCounts = conversations.reduce((acc, conv) => {
                const modelName = MODELS.find(m => m.id === conv.model)?.name || '未知模型';
                acc[modelName] = (acc[modelName] || 0) + 1;
                return acc;
            }, {});
            const mostUsedModel = Object.keys(modelCounts).reduce((a, b) => modelCounts[a] > modelCounts[b] ? a : b, 'N/A');
            ALL_ELEMENTS.mostUsedModelStat.textContent = mostUsedModel;
        };
        const renderModelUsageChart = () => {
            const ctx = document.getElementById('model-usage-pie-chart').getContext('2d');
            const modelCounts = conversations.reduce((acc, conv) => {
                const modelName = MODELS.find(m => m.id === conv.model)?.name || '未知模型';
                acc[modelName] = (acc[modelName] || 0) + 1;
                return acc;
            }, {});
            const labels = Object.keys(modelCounts);
            const data = Object.values(modelCounts);
            if(modelPieChart) {
                modelPieChart.destroy();
            }
            modelPieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: i18n[config.uiLanguage].modelUsageCount || '模型使用次數',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                            'rgba(255, 159, 64, 0.7)'
                        ],
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });
        };
        const setupTimeAnalysis = () => {
            const { timeAnalysisYearSelect, timeAnalysisMonthSelect, timeAnalysisDaySelect } = ALL_ELEMENTS;
            const allMessages = conversations.flatMap(c => c.messages.map(m => new Date(m.createdAt)));
            const years = [...new Set(allMessages.map(d => d.getFullYear()))].sort((a,b) => b-a);
            timeAnalysisYearSelect.innerHTML = `<option value="">${i18n[config.uiLanguage].all || '全部'}</option>`;
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                timeAnalysisYearSelect.appendChild(option);
            });
            timeAnalysisYearSelect.addEventListener('change', () => {
                const year = timeAnalysisYearSelect.value;
                if (year) {
                    timeAnalysisMonthSelect.disabled = false;
                    timeAnalysisMonthSelect.innerHTML = `<option value="">${i18n[config.uiLanguage].wholeYear || '全年'}</option>`;
                     for(let i=1; i<=12; i++) {
                        const option = document.createElement('option');
                        option.value = i;
                        option.textContent = `${i}${i18n[config.uiLanguage].monthSuffix || '月'}`;
                        timeAnalysisMonthSelect.appendChild(option);
                    }
                } else {
                    timeAnalysisMonthSelect.disabled = true;
                    timeAnalysisMonthSelect.innerHTML = '';
                }
                timeAnalysisDaySelect.disabled = true;
                timeAnalysisDaySelect.innerHTML = '';
                updateTimeDistributionChart();
            });
            timeAnalysisMonthSelect.addEventListener('change', () => {
                const year = parseInt(timeAnalysisYearSelect.value);
                const month = parseInt(timeAnalysisMonthSelect.value);
                 if (year && month) {
                    timeAnalysisDaySelect.disabled = false;
                    const daysInMonth = new Date(year, month, 0).getDate();
                    timeAnalysisDaySelect.innerHTML = `<option value="">${i18n[config.uiLanguage].wholeMonth || '全月'}</option>`;
                    for (let i = 1; i <= daysInMonth; i++) {
                        const option = document.createElement('option');
                        option.value = i;
                        option.textContent = `${i}${i18n[config.uiLanguage].daySuffix || '日'}`;
                        timeAnalysisDaySelect.appendChild(option);
                    }
                } else {
                    timeAnalysisDaySelect.disabled = true;
                    timeAnalysisDaySelect.innerHTML = '';
                }
                updateTimeDistributionChart();
            });
            timeAnalysisDaySelect.addEventListener('change', updateTimeDistributionChart);
            updateTimeDistributionChart();
        };
        const updateTimeDistributionChart = () => {
            const year = ALL_ELEMENTS.timeAnalysisYearSelect.value ? parseInt(ALL_ELEMENTS.timeAnalysisYearSelect.value) : null;
            const month = ALL_ELEMENTS.timeAnalysisMonthSelect.value ? parseInt(ALL_ELEMENTS.timeAnalysisMonthSelect.value) : null;
            const day = ALL_ELEMENTS.timeAnalysisDaySelect.value ? parseInt(ALL_ELEMENTS.timeAnalysisDaySelect.value) : null;
            let labels, data, chartType, label;
            const allMessages = conversations.flatMap(c => c.messages);
            const lang = config.uiLanguage;
            if (year && month && day) {
                chartType = 'line';
                label = `${year}${i18n[lang].yearSuffix || '年'}${month}${i18n[lang].monthSuffix || '月'}${day}${i18n[lang].daySuffix || '日'} ${i18n[lang].hourlyMessageCount || '每小時訊息數'}`;
                labels = Array.from({length: 24}, (_, i) => `${i}:00`);
                data = Array(24).fill(0);
                allMessages.forEach(msg => {
                    const msgDate = new Date(msg.createdAt);
                    if (msgDate.getFullYear() === year && msgDate.getMonth() + 1 === month && msgDate.getDate() === day) {
                        data[msgDate.getHours()]++;
                    }
                });
            } else if (year && month) {
                chartType = 'bar';
                label = `${year}${i18n[lang].yearSuffix || '年'}${month}${i18n[lang].monthSuffix || '月'} ${i18n[lang].dailyMessageCount || '每日訊息數'}`;
                const daysInMonth = new Date(year, month, 0).getDate();
                labels = Array.from({length: daysInMonth}, (_, i) => `${i + 1}${i18n[lang].daySuffix || '日'}`);
                data = Array(daysInMonth).fill(0);
                allMessages.forEach(msg => {
                    const msgDate = new Date(msg.createdAt);
                    if (msgDate.getFullYear() === year && msgDate.getMonth() + 1 === month) {
                        data[msgDate.getDate() - 1]++;
                    }
                });
            } else if (year) {
                chartType = 'line';
                label = `${year}${i18n[lang].yearSuffix || '年'} ${i18n[lang].monthlyMessageCount || '每月訊息數'}`;
                labels = i18n[lang].months || ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
                data = Array(12).fill(0);
                allMessages.forEach(msg => {
                    const msgDate = new Date(msg.createdAt);
                    if (msgDate.getFullYear() === year) {
                        data[msgDate.getMonth()]++;
                    }
                });
            } else {
                chartType = 'bar';
                label = i18n[lang].yearlyMessageCount || '每年訊息數';
                const years = [...new Set(allMessages.map(d => new Date(d.createdAt).getFullYear()))].sort();
                labels = years.map(String);
                data = years.map(y => allMessages.filter(m => new Date(m.createdAt).getFullYear() === y).length);
            }
            const ctx = document.getElementById('time-distribution-chart').getContext('2d');
            if (timeDistChart) {
                timeDistChart.destroy();
            }
            timeDistChart = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: data,
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        tension: 0.1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
        };
        const getDominantColorPalette = (imageDataUrl) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous';
                img.src = imageDataUrl;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                    const colorCount = {};
                    for (let i = 0; i < imageData.length; i += 4 * 5) {
                        const r = imageData[i];
                        const g = imageData[i + 1];
                        const b = imageData[i + 2];
                        const a = imageData[i + 3];
                        if (a < 125) continue;
                        const max = Math.max(r, g, b);
                        const min = Math.min(r, g, b);
                        if (max - min < 20) continue;
                        const r_round = Math.round(r / 10) * 10;
                        const g_round = Math.round(g / 10) * 10;
                        const b_round = Math.round(b / 10) * 10;
                        const rgb = `${r_round},${g_round},${b_round}`;
                        colorCount[rgb] = (colorCount[rgb] || 0) + 1;
                    }
                    const sortedColors = Object.keys(colorCount)
                        .sort((a, b) => colorCount[b] - colorCount[a])
                        .slice(0, 5)
                        .map(rgbStr => `#${rgbStr.split(',').map(c => parseInt(c).toString(16).padStart(2, '0')).join('')}`);
                    resolve(sortedColors.length > 0 ? sortedColors : ['#3b82f6']);
                };
                img.onerror = reject;
            });
        };
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };
        const getTextColorForBackground = (hexColor) => {
            const rgb = hexToRgb(hexColor);
            if (!rgb) return '#000000';
            const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
            return luminance > 0.5 ? '#000000' : '#ffffff';
        };
        const applyUiTheme = () => {
            const root = document.documentElement;
            let primaryBg;
            let primaryBgOverride = null;
            switch(config.uiTheme.mode) {
                case 'adaptive':
                    if (config.uiTheme.style === 'gradient') {
                        primaryBgOverride = config.uiTheme.adaptiveGradient || `linear-gradient(to right, ${config.uiTheme.adaptiveColor}, #3b82f6)`;
                        primaryBg = config.uiTheme.adaptivePalette[0] || config.uiTheme.adaptiveColor;
                    } else {
                        primaryBg = config.uiTheme.adaptiveColor;
                    }
                    break;
                case 'custom':
                    primaryBg = config.uiTheme.customColor;
                    break;
                case 'default':
                default:
                    primaryBg = '#3b82f6';
                    break;
            }
            const textColor = (config.uiTheme.style === 'gradient' && config.uiTheme.mode === 'adaptive')
                ? '#ffffff'
                : getTextColorForBackground(primaryBg);
            root.style.setProperty('--button-primary-bg', primaryBg);
            root.style.setProperty('--button-primary-text', textColor);
            if (primaryBgOverride) {
                root.style.setProperty('--button-primary-bg-override', primaryBgOverride);
            } else {
                root.style.removeProperty('--button-primary-bg-override');
            }
            updateThemeButtons();
        };
        const renderUiColorOptions = () => {
            const { uiColorOptions, customColorPickerContainer, customColorSwatches, buttonStyleContainer, gradientPickerContainer, gradientSwatches } = ALL_ELEMENTS;
            const currentMode = config.uiTheme.mode;
            const currentStyle = config.uiTheme.style;
            uiColorOptions.querySelector(`input[value="${currentMode}"]`).checked = true;
            buttonStyleContainer.querySelector(`input[value="${currentStyle}"]`).checked = true;
            customColorSwatches.innerHTML = '';
            Object.entries(UI_THEME_COLORS).forEach(([name, hex]) => {
                const swatch = document.createElement('div');
                swatch.className = `color-swatch w-8 h-8 rounded-full cursor-pointer`;
                swatch.style.backgroundColor = hex;
                swatch.dataset.color = hex;
                if (config.uiTheme.customColor === hex) {
                    swatch.classList.add('selected');
                }
                swatch.addEventListener('click', () => {
                    customColorSwatches.querySelector('.selected')?.classList.remove('selected');
                    swatch.classList.add('selected');
                });
                customColorSwatches.appendChild(swatch);
            });
            gradientSwatches.innerHTML = '';
            if(config.uiTheme.adaptivePalette && config.uiTheme.adaptivePalette.length > 1) {
                const palette = config.uiTheme.adaptivePalette;
                const combinations = [
                    `linear-gradient(to right, ${palette[0]}, ${palette[1]})`,
                    `linear-gradient(to right, ${palette[0]}, ${palette[2]})`,
                    `linear-gradient(to right, ${palette[1]}, ${palette[2]})`,
                    `linear-gradient(135deg, ${palette[0]}, ${palette[1]}, ${palette[2]})`
                ];
                combinations.forEach(grad => {
                    const swatch = document.createElement('div');
                    swatch.className = 'w-full h-10 rounded-md cursor-pointer border-2 border-transparent';
                    swatch.style.background = grad;
                    swatch.dataset.gradient = grad;
                    if(config.uiTheme.adaptiveGradient === grad) {
                        swatch.classList.add('selected-gradient', 'border-blue-500');
                    }
                    swatch.addEventListener('click', () => {
                        gradientSwatches.querySelector('.selected-gradient')?.classList.remove('selected-gradient', 'border-blue-500');
                        swatch.classList.add('selected-gradient', 'border-blue-500');
                    });
                    gradientSwatches.appendChild(swatch);
                });
            } else {
                 gradientSwatches.innerHTML = `<p class="text-xs col-span-4 text-[var(--text-secondary)]">${i18n[config.uiLanguage].notEnoughColors || '沒有足夠的顏色來生成漸變。請上傳顏色豐富的桌布。'}</p>`
            }
            const updateVisibility = () => {
                const mode = document.querySelector('input[name="color-theme"]:checked').value;
                const style = document.querySelector('input[name="color-style"]:checked').value;
                buttonStyleContainer.classList.toggle('hidden', mode !== 'adaptive');
                customColorPickerContainer.classList.toggle('hidden', mode !== 'custom');
                gradientPickerContainer.classList.toggle('hidden', !(mode === 'adaptive' && style === 'gradient'));
            };
            uiColorOptions.querySelectorAll('input[name="color-theme"]').forEach(radio => {
                radio.addEventListener('change', updateVisibility);
            });
             buttonStyleContainer.querySelectorAll('input[name="color-style"]').forEach(radio => {
                radio.addEventListener('change', updateVisibility);
            });
            updateVisibility();
        };
        const analyzeImageBrightness = (imageDataUrl) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = imageDataUrl;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    let r, g, b, avg;
                    let colorSum = 0;
                    for(let x = 0, len = data.length; x < len; x+=4) {
                        r = data[x];
                        g = data[x+1];
                        b = data[x+2];
                        avg = Math.floor((r+g+b)/3);
                        colorSum += avg;
                    }
                    const brightness = Math.floor(colorSum / (canvas.width * canvas.height));
                    resolve(brightness < 128 ? 'dark' : 'light');
                };
                img.onerror = (err) => reject(err);
            });
        };
        const applyCustomWallpaper = () => {
            if (config.customWallpaper) {
                ALL_ELEMENTS.wallpaperContainer.style.backgroundImage = `url(${config.customWallpaper})`;
                document.body.classList.add('custom-wallpaper-active');
                document.body.classList.toggle('wallpaper-is-dark', config.wallpaperBrightness === 'dark');
                document.documentElement.classList.remove('dark');
            } else {
                ALL_ELEMENTS.wallpaperContainer.style.backgroundImage = 'none';
                document.body.classList.remove('custom-wallpaper-active', 'wallpaper-is-dark');
                setTheme(config.theme);
            }
            setAiBubbleColor();
            setUserBubbleColor();
        };
        const handleWallpaperUpload = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                ALL_ELEMENTS.wallpaperCropImage.src = imageUrl;
                toggleModal(ALL_ELEMENTS.wallpaperCropModal, true);
                if (cropperInstance) {
                    cropperInstance.destroy();
                }
                cropperInstance = new Cropper(ALL_ELEMENTS.wallpaperCropImage, {
                    aspectRatio: window.innerWidth / window.innerHeight,
                    viewMode: 1,
                    background: false,
                    autoCropArea: 1,
                });
            };
            reader.readAsDataURL(file);
            event.target.value = '';
        };
        const handleConfirmCrop = async () => {
            if (!cropperInstance) return;
            const canvas = cropperInstance.getCroppedCanvas({
                maxWidth: 1920,
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high',
            });
            const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
            try {
                const brightness = await analyzeImageBrightness(imageDataUrl);
                const palette = await getDominantColorPalette(imageDataUrl);
                config.customWallpaper = imageDataUrl;
                config.wallpaperBrightness = brightness;
                config.uiTheme.adaptivePalette = palette;
                config.uiTheme.adaptiveColor = palette[0] || '#3b82f6';
                await saveConfig();
                applyCustomWallpaper();
                applyUiTheme();
                toggleModal(ALL_ELEMENTS.wallpaperCropModal, false);
                showNotification(i18n[config.uiLanguage].wallpaperUpdated, 'success');
            } catch (error) {
                console.error("桌布處理失敗:", error);
                showNotification(i18n[config.uiLanguage].wallpaperError, 'error');
            }
        };
        const restoreDefaultWallpaper = async () => {
            config.customWallpaper = null;
            config.wallpaperBrightness = 'light';
            config.uiTheme.adaptiveColor = '#3b82f6';
            config.uiTheme.adaptivePalette = [];
            config.uiTheme.adaptiveGradient = '';
            await saveConfig();
            applyCustomWallpaper();
            applyUiTheme();
            showNotification(i18n[config.uiLanguage].defaultAppearanceRestored, 'success');
        };
        const openStore = () => {
            ALL_ELEMENTS.appContainer.classList.remove('visible');
            ALL_ELEMENTS.storeContainer.classList.remove('hidden');
            requestAnimationFrame(() => {
                ALL_ELEMENTS.storeContainer.classList.add('visible');
            });
            ALL_ELEMENTS.appContainer.addEventListener('transitionend', () => {
                ALL_ELEMENTS.appContainer.classList.add('hidden');
            }, { once: true });
            currentStoreCategory = '全部';
    const mainContent = document.querySelector('#store-main-content');
    if (mainContent) {
        mainContent.scrollTop = 0;
    }
            renderStore();
        };
        const closeStore = () => {
            ALL_ELEMENTS.storeContainer.classList.remove('visible');
            ALL_ELEMENTS.appContainer.classList.remove('hidden');
            requestAnimationFrame(() => {
                ALL_ELEMENTS.appContainer.classList.add('visible');
            });
            ALL_ELEMENTS.storeContainer.addEventListener('transitionend', () => {
                ALL_ELEMENTS.storeContainer.classList.add('hidden');
            }, { once: true });
        };
        const renderStore = () => {
            const mainContent = document.querySelector('#store-main-content');
    if (mainContent) {
        mainContent.scrollTop = 0;
    }
    const grid = ALL_ELEMENTS.storeGrid;
    const categoryList = document.getElementById('store-category-list');
    grid.innerHTML = '';
    categoryList.innerHTML = '';
    const translations = i18n[config.uiLanguage] || i18n['zh-TW'];
    const translatedOfficialAstras = OFFICIAL_ASTRAS.map(ast => ({
        ...ast,
        name: translations['astras_' + ast.id.replace(/-/g, '_') + '_name'] || ast.name,
        description: translations['astras_' + ast.id.replace(/-/g, '_') + '_desc'] || ast.description
    }));
    const userCreatedAstras = astras.filter(a => !a.officialId);
    const allCategories = ['全部', ...new Set([
        ...translatedOfficialAstras.map(a => a.category),
        ...userCreatedAstras.map(a => a.category)
    ].filter(Boolean))];
    allCategories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'store-category-btn';
        btn.textContent = category;
        if (category === currentStoreCategory) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            currentStoreCategory = category;
            renderStore();
        });
        categoryList.appendChild(btn);
    });
    const allStoreAstras = [...translatedOfficialAstras, ...userCreatedAstras];
    const filteredAstras = currentStoreCategory === '全部'
        ? allStoreAstras
        : allStoreAstras.filter(a => a.category === currentStoreCategory);
    filteredAstras.forEach(ast => {
        const card = document.createElement('div');
        card.className = 'astras-store-card';
        const originalId = ast.officialId || ast.id;
        const isSubscribed = astras.some(userAstra => userAstra.officialId === originalId);
        const isUserCreated = !ast.officialId && astras.some(userAstra => userAstra.id === originalId);
        const avatarUrl = ast.avatarUrl;
        const initials = ast.name.charAt(0);
        const avatarElement = `<div class="astras-card-avatar">${avatarUrl ? `<img src="${avatarUrl}" alt="${ast.name}">` : initials}</div>`;
        card.innerHTML = `
            ${avatarElement}
            <h3 class="astras-card-name">${ast.name}</h3>
            <p class="astras-card-desc">${ast.description}</p>
            <button class="subscribe-btn btn-primary" data-id="${originalId}"></button>
        `;
        const btn = card.querySelector('.subscribe-btn');
        if (isSubscribed) {
            btn.textContent = translations.unsubscribe || '取消訂閱';
            btn.classList.add('subscribed');
        } else if (isUserCreated) {
            btn.textContent = translations.manage || '管理';
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            btn.textContent = translations.subscribe || '訂閱';
        }
        btn.addEventListener('click', () => {
            handleSubscription(originalId);
        });
        grid.appendChild(card);
    });
};
        const handleSubscription = (officialId) => {
            const isSubscribed = astras.some(a => a.officialId === officialId);
            if (isSubscribed) {
                astras = astras.filter(a => a.officialId !== officialId);
                showNotification(i18n[config.uiLanguage].unsubscribed || '已取消訂閱', 'success');
            } else {
                const officialAstra = OFFICIAL_ASTRAS.find(a => a.id === officialId);
                if (officialAstra) {
                    const newAstra = {
                        ...officialAstra,
                        id: crypto.randomUUID(),
                        officialId: officialAstra.id,
                    };
                    astras.unshift(newAstra);
                    showNotification(i18n[config.uiLanguage].subscribed || '訂閱成功！', 'success');
                }
            }
            saveAppData();
            renderStore();
            renderAstras();
        };
        const openAvatarEditor = (astrasId) => {
            editingAstraForAvatarId = astrasId;
            ALL_ELEMENTS.astrasAvatarInput.click();
        };
        const handleAvatarUpload = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;
                ALL_ELEMENTS.avatarCropImage.src = imageUrl;
                toggleModal(ALL_ELEMENTS.astrasAvatarModal, true);
                if (cropperInstance) {
                    cropperInstance.destroy();
                }
                cropperInstance = new Cropper(ALL_ELEMENTS.avatarCropImage, {
                    aspectRatio: 1,
                    viewMode: 1,
                    background: false,
                    autoCropArea: 1,
                });
            };
            reader.readAsDataURL(file);
            event.target.value = '';
        };
        const handleConfirmAvatarCrop = async () => {
            if (!cropperInstance || !editingAstraForAvatarId) return;
            const canvas = cropperInstance.getCroppedCanvas({
                width: 128,
                height: 128,
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high',
            });
            const imageDataUrl = canvas.toDataURL('image/png');
            const astra = astras.find(a => a.id === editingAstraForAvatarId);
            if (astra) {
                astra.avatarUrl = imageDataUrl;
                await saveAppData();
                renderAstras();
                showNotification(i18n[config.uiLanguage].avatarUpdated || '頭像已更新', 'success');
            }
            toggleModal(ALL_ELEMENTS.astrasAvatarModal, false);
            editingAstraForAvatarId = null;
        };
        const applyLanguage = (lang) => {
            const translations = i18n[lang] || i18n['zh-TW'];
            document.querySelectorAll('[data-lang-key]').forEach(el => {
                const key = el.dataset.langKey;
                if (translations[key]) {
                    el.textContent = translations[key];
                }
            });
            document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
                const key = el.dataset.langKeyPlaceholder;
                if (translations[key]) {
                    el.placeholder = translations[key];
                }
            });
            document.querySelectorAll('[data-lang-key-title]').forEach(el => {
                const key = el.dataset.langKeyTitle;
                if (translations[key]) {
                    el.title = translations[key];
                }
            });
            if(ALL_ELEMENTS.loginLangLabel) {
                ALL_ELEMENTS.loginLangLabel.textContent = translations.currentLanguageName || '繁體中文';
            }
            document.documentElement.lang = lang;
        };
        const showMobileContextMenu = (convId) => {
            const oldMenu = document.getElementById('mobile-context-menu-wrapper');
            if (oldMenu) oldMenu.remove();
            const conv = conversations.find(c => c.id === convId);
            if (!conv) return;
            const menuWrapper = document.createElement('div');
            menuWrapper.id = 'mobile-context-menu-wrapper';
            const overlay = document.createElement('div');
            overlay.id = 'mobile-context-menu-overlay';
            const menu = document.createElement('div');
            menu.id = 'mobile-context-menu';
            const menuHeader = `<div class="menu-header">${conv.title}</div>`;
            const moveOptionsHTML = conv.folderId
                ? `<div class="menu-item" data-action="move-out"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3v11.25" /></svg><span>${i18n[config.uiLanguage].moveOutOfFolder || '移出資料夾'}</span></div>`
                : `<div class="menu-item" data-action="move-to"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg><span>${i18n[config.uiLanguage].moveToFolder || '移至資料夾'}</span></div>`;
            const pinText = conv.pinned ? (i18n[config.uiLanguage].unpin || '取消釘選') : (i18n[config.uiLanguage].pin || '釘選');
            menu.innerHTML = `
                ${menuHeader}
                <div class="menu-options">
                    <div class="menu-item" data-action="rename"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg><span>${i18n[config.uiLanguage].rename || '重新命名'}</span></div>
                    <div class="menu-item" data-action="pin"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" /></svg><span>${pinText}</span></div>
                    ${moveOptionsHTML}
                    <div class="menu-item" data-action="archive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4" /></svg><span>${i18n[config.uiLanguage].archive || '封存'}</span></div>
                    <div class="menu-item delete" data-action="delete"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><span>${i18n[config.uiLanguage].delete || '刪除'}</span></div>
                </div>
            `;
            menuWrapper.appendChild(overlay);
            menuWrapper.appendChild(menu);
            document.body.appendChild(menuWrapper);
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
                menu.classList.add('visible');
            });
            const closeMenu = () => {
                overlay.classList.remove('visible');
                menu.classList.remove('visible');
                menu.addEventListener('transitionend', () => menuWrapper.remove(), { once: true });
            };
            overlay.addEventListener('click', closeMenu);
            let touchStartY = 0;
            let touchMoveY = 0;
            menu.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            menu.addEventListener('touchmove', (e) => {
                touchMoveY = e.touches[0].clientY;
                const deltaY = touchMoveY - touchStartY;
                if (deltaY > 0) {
                    menu.style.transform = `translateY(${deltaY}px)`;
                }
            }, { passive: true });
            menu.addEventListener('touchend', () => {
                const deltaY = touchMoveY - touchStartY;
                if (deltaY > 100) {
                    closeMenu();
                } else {
                    menu.style.transform = '';
                }
                touchStartY = 0;
                touchMoveY = 0;
            });
            menu.addEventListener('click', (e) => {
                const actionTarget = e.target.closest('.menu-item');
                if (!actionTarget) return;
                const action = actionTarget.dataset.action;
                closeMenu();
                setTimeout(() => {
                    switch(action) {
                        case 'rename':
                            showRenameModal(convId, 'conversation', e);
                            break;
                        case 'pin':
                            togglePinChat(convId, e);
                            break;
                        case 'archive':
                            archiveChat(convId, e);
                            break;
                        case 'delete':
                            deleteChat(convId, e);
                            break;
                        case 'move-out':
                            moveConversationToFolder(convId, null);
                            break;
                        case 'move-to':
                            renderBatchMoveModal(convId);
                            toggleModal(ALL_ELEMENTS.batchMoveModal, true);
                            break;
                    }
                }, 300);
            });
        };
        const showMobileContextMenuForFolder = (folderId) => {
            const oldMenu = document.getElementById('mobile-context-menu-wrapper');
            if (oldMenu) oldMenu.remove();
            const folder = folders.find(f => f.id === folderId);
            if (!folder) return;
            const menuWrapper = document.createElement('div');
            menuWrapper.id = 'mobile-context-menu-wrapper';
            const overlay = document.createElement('div');
            overlay.id = 'mobile-context-menu-overlay';
            const menu = document.createElement('div');
            menu.id = 'mobile-context-menu';
            menu.innerHTML = `
                <div class="menu-header">${folder.name}</div>
                <div class="menu-options">
                    <div class="menu-item" data-action="rename-folder"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg><span>${i18n[config.uiLanguage].rename || '重新命名'}</span></div>
                    <div class="menu-item" data-action="customize-folder"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118 3.375 3.375 0 0 0-1.179 4.471.75.75 0 0 0 .676.928A4.5 4.5 0 0 0 6 21c1.282 0 2.47-.602 3.22-1.606a3 3 0 0 0-1.7-4.271Zm-5.78 1.128L1.623 20.25m5.78-1.128L9.25 5.25m-3.72 1.128L5.53 16.122m3.72-1.128L9.25 5.25m5.336-3.64a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118 3.375 3.375 0 0 0-1.179 4.471.75.75 0 0 0 .676.928A4.5 4.5 0 0 0 12 21c1.282 0 2.47-.602 3.22-1.606a3 3 0 0 0-1.7-4.271Zm-5.78 1.128L7.373 20.25m5.78-1.128L14.938 5.25m-3.72 1.128L11.22 16.122m3.72-1.128L14.938 5.25m2.478-3.64a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118 3.375 3.375 0 0 0-1.179 4.471.75.75 0 0 0 .676.928A4.5 4.5 0 0 0 18 21c1.282 0 2.47-.602 3.22-1.606a3 3 0 0 0-1.7-4.271Zm-5.78 1.128L13.123 20.25" /></svg><span>${i18n[config.uiLanguage].customize || '自訂'}</span></div>
                    <div class="menu-item delete" data-action="delete-folder"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><span>${i18n[config.uiLanguage].deleteFolder || '刪除資料夾'}</span></div>
                </div>
            `;
            menuWrapper.appendChild(overlay);
            menuWrapper.appendChild(menu);
            document.body.appendChild(menuWrapper);
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
                menu.classList.add('visible');
            });
            const closeMenu = () => {
                overlay.classList.remove('visible');
                menu.classList.remove('visible');
                menu.addEventListener('transitionend', () => menuWrapper.remove(), { once: true });
            };
            overlay.addEventListener('click', closeMenu);
            let touchStartY = 0;
            let touchMoveY = 0;
            menu.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            menu.addEventListener('touchmove', (e) => {
                touchMoveY = e.touches[0].clientY;
                const deltaY = touchMoveY - touchStartY;
                if (deltaY > 0) {
                    menu.style.transform = `translateY(${deltaY}px)`;
                }
            }, { passive: true });
            menu.addEventListener('touchend', () => {
                const deltaY = touchMoveY - touchStartY;
                if (deltaY > 100) {
                    closeMenu();
                } else {
                    menu.style.transform = '';
                }
                touchStartY = 0;
                touchMoveY = 0;
            });
            menu.addEventListener('click', (e) => {
                const actionTarget = e.target.closest('.menu-item');
                if (!actionTarget) return;
                const action = actionTarget.dataset.action;
                closeMenu();
                setTimeout(() => {
                    switch(action) {
                        case 'rename-folder':
                            showRenameModal(folderId, 'folder', e);
                            break;
                        case 'customize-folder':
                            showFolderSettingsModal(folderId, e);
                            break;
                        case 'delete-folder':
                            deleteFolder(folderId, e);
                            break;
                    }
                }, 300);
            });
        };
        const showMobileContextMenuForAstras = (astrasId) => {
            const oldMenu = document.getElementById('mobile-context-menu-wrapper');
            if (oldMenu) oldMenu.remove();
            const astra = astras.find(a => a.id === astrasId);
            if (!astra) return;
            const menuWrapper = document.createElement('div');
            menuWrapper.id = 'mobile-context-menu-wrapper';
            const overlay = document.createElement('div');
            overlay.id = 'mobile-context-menu-overlay';
            const menu = document.createElement('div');
            menu.id = 'mobile-context-menu';
            let menuOptions = '';
            if (astra.officialId) {
                menuOptions = `
                    <div class="menu-item" data-action="edit-avatar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg><span>${i18n[config.uiLanguage].editAvatar || '編輯頭像'}</span></div>
                    <div class="menu-item delete" data-action="delete-astras"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><span>${i18n[config.uiLanguage].delete || '刪除'}</span></div>
                `;
            } else {
                 menuOptions = `
                    <div class="menu-item" data-action="edit-astras"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg><span>${i18n[config.uiLanguage].edit || '編輯'}</span></div>
                    <div class="menu-item" data-action="edit-avatar"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg><span>${i18n[config.uiLanguage].editAvatar || '編輯頭像'}</span></div>
                    <div class="menu-item delete" data-action="delete-astras"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.067-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg><span>${i18n[config.uiLanguage].delete || '刪除'}</span></div>
                `;
            }
            menu.innerHTML = `
                <div class="menu-header">${astra.name}</div>
                <div class="menu-options">${menuOptions}</div>
            `;
            menuWrapper.appendChild(overlay);
            menuWrapper.appendChild(menu);
            document.body.appendChild(menuWrapper);
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
                menu.classList.add('visible');
            });
            const closeMenu = () => {
                overlay.classList.remove('visible');
                menu.classList.remove('visible');
                menu.addEventListener('transitionend', () => menuWrapper.remove(), { once: true });
            };
            overlay.addEventListener('click', closeMenu);
            let touchStartY = 0;
            let touchMoveY = 0;
            menu.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
            menu.addEventListener('touchmove', (e) => {
                touchMoveY = e.touches[0].clientY;
                const deltaY = touchMoveY - touchStartY;
                if (deltaY > 0) { menu.style.transform = `translateY(${deltaY}px)`; }
            }, { passive: true });
            menu.addEventListener('touchend', () => {
                const deltaY = touchMoveY - touchStartY;
                if (deltaY > 100) { closeMenu(); }
                else { menu.style.transform = ''; }
                touchStartY = 0; touchMoveY = 0;
            });
            menu.addEventListener('click', (e) => {
                const actionTarget = e.target.closest('.menu-item');
                if (!actionTarget) return;
                const action = actionTarget.dataset.action;
                closeMenu();
                setTimeout(() => {
                    switch(action) {
                        case 'edit-astras':
                            editingAstrasId = astrasId;
                            ALL_ELEMENTS.astrasNameInput.value = astra.name;
                            ALL_ELEMENTS.astrasDescInput.value = astra.description;
                            ALL_ELEMENTS.astrasInstructionsInput.value = astra.instructions;
                            ALL_ELEMENTS.astrasCreateModal.querySelector('h2').textContent = i18n[config.uiLanguage].editAstras || '編輯 Astras';
                            toggleModal(ALL_ELEMENTS.astrasCreateModal, true);
                            break;
                        case 'edit-avatar':
                            openAvatarEditor(astrasId);
                            break;
                        case 'delete-astras':
                            deleteAstras(astrasId);
                            break;
                    }
                }, 300);
            });
        };
        const setupScrollToBottomButton = () => {
    const { scrollToBottomBtn, chatContainer } = ALL_ELEMENTS;
    scrollToBottomBtn.addEventListener('click', () => {
        isAutoScrolling = true;
        scrollToBottomBtn.classList.remove('visible');
        scrollToBottomBtn.classList.add('jelly-animate');
        scrollToBottomBtn.addEventListener('animationend', () => {
            scrollToBottomBtn.classList.remove('jelly-animate');
        }, { once: true });
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth'
        });
        const scrollEndTimer = setTimeout(() => {
            isAutoScrolling = false;
        }, 1000);
        const interruptHandler = () => {
            clearTimeout(scrollEndTimer);
            isAutoScrolling = false;
            chatContainer.removeEventListener('wheel', interruptHandler);
            chatContainer.removeEventListener('touchstart', interruptHandler);
        };
        chatContainer.addEventListener('wheel', interruptHandler, { once: true });
        chatContainer.addEventListener('touchstart', interruptHandler, { once: true });
    });
    const handleScroll = () => {
        if (isAutoScrolling) return;
        const isAtBottom = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight < 100;
        if (isAtBottom) {
            scrollToBottomBtn.classList.remove('visible');
        } else {
            scrollToBottomBtn.classList.add('visible');
        }
    };
    chatContainer.addEventListener('scroll', throttle(handleScroll, 100));

    // ✨ 這是核心修正 ✨
    const updateButtonPosition = () => {
        const { inputBarContainer, scrollToBottomBtn } = ALL_ELEMENTS;
        const inputBarHeight = inputBarContainer.offsetHeight;
        // 我們不再需要計算 followUpContainer 的高度了
        const totalBottomOffset = inputBarHeight + 16; // 簡化計算
        scrollToBottomBtn.style.bottom = `${totalBottomOffset}px`;
    };

    const resizeObserver = new ResizeObserver(updateButtonPosition);
    resizeObserver.observe(ALL_ELEMENTS.inputBarContainer);
    // ✨ 我們也不再需要觀察 followUpContainer 的高度變化了
    // resizeObserver.observe(ALL_ELEMENTS.followUpContainer); 
    updateButtonPosition();
};
        const showUpdateHistory = () => {
            const container = ALL_ELEMENTS.updateInfoContent;
            container.innerHTML = '';
            if (typeof updateLogs !== 'undefined' && updateLogs.length > 0) {
                updateLogs.forEach(log => {
                    const logEntry = document.createElement('div');
                    logEntry.className = 'prose prose-sm max-w-none';
                    logEntry.innerHTML = `
                        <h3 class="font-bold text-lg">${log.version} <span class="text-sm font-normal text-[var(--text-secondary)]">- ${log.date}</span></h3>
                        <ul>
                            ${log.content.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    `;
                    container.appendChild(logEntry);
                });
            } else {
                container.innerHTML = `<p>${i18n[config.uiLanguage].noUpdateHistory || '目前沒有更新紀錄。'}</p>`;
            }
            toggleModal(ALL_ELEMENTS.updateInfoModal, true);
        };
        const checkAndShowLatestUpdate = async () => {
    if (!config.enableUpdateNotifications || typeof updateLogs === 'undefined' || updateLogs.length === 0) {
        return;
    }
    const lastSeenVersion = config.lastSeenVersion || '0.0.0'; // 如果從未見過，則設為 '0.0.0'
    const newUpdates = updateLogs.filter(log => compareVersions(log.version, lastSeenVersion) > 0);
    if (newUpdates.length > 0) {
        newUpdates.sort((a, b) => compareVersions(b.version, a.version));
        const contentContainer = ALL_ELEMENTS.latestUpdateContent;
        const modalTitle = document.querySelector('#latest-update-modal h2');
        if (modalTitle) {
            modalTitle.textContent = i18n[config.uiLanguage].newVersionsFound.replace('{count}', newUpdates.length);
        }
        contentContainer.innerHTML = newUpdates.map(log => `
            <div class="prose prose-sm max-w-none mb-6 pb-4 border-b border-[var(--border-color)] last:border-b-0 last:mb-0 last:pb-0">
                <h4 class="font-bold text-lg">${log.version} <span class="text-sm font-normal text-[var(--text-secondary)]">- ${log.date}</span></h4>
                <ul>
                    ${log.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
        contentContainer.style.maxHeight = '60vh';
        contentContainer.style.overflowY = 'auto';
        toggleModal(ALL_ELEMENTS.latestUpdateModal, true);
        const latestVersionInLog = newUpdates[0].version; // 因為我們已經排序了，所以 newUpdates[0] 現在是最新版
        config.lastSeenVersion = latestVersionInLog;
        await saveConfig();
    }
};
        /**
 * @description 設定 Intersection Observer 來監聽聊天視窗中的訊息，並高亮右側對應的目錄項目
 */
function setupMessageIntersectionObserver() {
    // 如果之前有觀察者，先斷開連接，避免重複觀察
    if (messageObserver) {
        messageObserver.disconnect();
    }

    const messageItems = ALL_ELEMENTS.messageList.querySelectorAll('.message-item');
    const historyItems = ALL_ELEMENTS.historySidebarList.querySelectorAll('.history-sidebar-item');

    // 如果沒有訊息，就不用觀察了
    if (messageItems.length === 0) {
        return;
    }
    
    // 觀察者的回呼函式，當有元素進入或離開視窗時會被觸發
    const observerCallback = (entries) => {
        let mostVisibleEntry = null;

        // 找出所有可見的 entry 中，可見比例最高的那個
        for (const entry of entries) {
            if (entry.isIntersecting) {
                if (!mostVisibleEntry || entry.intersectionRatio > mostVisibleEntry.intersectionRatio) {
                    mostVisibleEntry = entry;
                }
            }
        }

        // 如果找到了最可見的訊息
        if (mostVisibleEntry) {
            const visibleMessageIndex = mostVisibleEntry.target.dataset.messageIndex;

            // 移除所有歷史項目上的 'active' class
            historyItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // 找到對應的歷史項目並加上 'active' class
            const activeHistoryItem = ALL_ELEMENTS.historySidebarList.querySelector(`.history-sidebar-item[data-message-index="${visibleMessageIndex}"]`);
            if (activeHistoryItem) {
                activeHistoryItem.classList.add('active');
            }
        }
    };

    // 建立觀察者實例
    messageObserver = new IntersectionObserver(observerCallback, {
        root: ALL_ELEMENTS.chatContainer, // 觀察的根元素是聊天容器
        rootMargin: '0px',
        threshold: [0.0, 0.25, 0.5, 0.75, 1.0] // 在不同可見比例時都觸發回呼
    });
    
    // 開始觀察每一則訊息
    messageItems.forEach(item => {
        messageObserver.observe(item);
    });
}
        const renderTrash = () => {
            const container = ALL_ELEMENTS.trashListContainer;
            const deletedConvs = conversations.filter(c => c.deletedAt).sort((a,b) => new Date(b.deletedAt) - new Date(a.deletedAt));
            container.innerHTML = '';
            if (deletedConvs.length === 0) {
                container.innerHTML = `<p class="text-center text-[var(--text-secondary)] py-4">${i18n[config.uiLanguage].trashIsEmpty || '垃圾桶是空的。'}</p>`;
                ALL_ELEMENTS.emptyTrashBtn.disabled = true;
                ALL_ELEMENTS.trashBatchSelectBtn.disabled = true;
                return;
            }
            ALL_ELEMENTS.emptyTrashBtn.disabled = false;
            ALL_ELEMENTS.trashBatchSelectBtn.disabled = false;
            deletedConvs.forEach(conv => {
                const item = document.createElement('div');
                item.className = 'trash-item flex items-center p-2 rounded-lg bg-[var(--hover-bg)] border border-[var(--border-color)]';
                item.dataset.id = conv.id;
                const checkboxHTML = isTrashSelectionMode
                    ? `<input type="checkbox" class="trash-select-checkbox h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3 flex-shrink-0" data-id="${conv.id}" ${selectedTrashIds.has(conv.id) ? 'checked' : ''}>`
                    : '';
                item.innerHTML = `
                    ${checkboxHTML}
                    <div class="flex-1 min-w-0">
                        <p class="font-medium truncate">${conv.title}</p>
                        <p class="text-xs text-[var(--text-secondary)]">${i18n[config.uiLanguage].deletedOn || '刪除於'}: ${formatFullTimestamp(conv.deletedAt)}</p>
                    </div>
                    <div class="flex gap-2 flex-shrink-0 ml-2">
                        <button data-id="${conv.id}" class="trash-item-view-btn text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200">${i18n[config.uiLanguage].view || '檢視'}</button>
                        <button data-id="${conv.id}" class="trash-item-restore-btn text-xs bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200">${i18n[config.uiLanguage].restore || '還原'}</button>
                        <button data-id="${conv.id}" class="trash-item-delete-btn text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200">${i18n[config.uiLanguage].delete || '刪除'}</button>
                    </div>
                `;
                container.appendChild(item);
                let pressTimer = null;
                item.addEventListener('touchstart', (e) => {
                    if (e.target.closest('button')) return;
                    pressTimer = setTimeout(() => {
                        e.preventDefault();
                        showTrashItemInViewModal(conv.id);
                    }, 500);
                }, { passive: false });
                item.addEventListener('touchend', () => clearTimeout(pressTimer));
                item.addEventListener('touchmove', () => clearTimeout(pressTimer));
                if (isTrashSelectionMode) {
                    item.addEventListener('click', (e) => {
                        if (e.target.closest('button')) return;
                        const checkbox = item.querySelector('.trash-select-checkbox');
                        if (checkbox) {
                            checkbox.checked = !checkbox.checked;
                            checkbox.dispatchEvent(new Event('change'));
                        }
                    });
                }
            });
            container.querySelectorAll('.trash-item-view-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); showTrashItemInViewModal(e.currentTarget.dataset.id); }));
            container.querySelectorAll('.trash-item-restore-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); handleRestoreTrashItem(e.currentTarget.dataset.id); }));
            container.querySelectorAll('.trash-item-delete-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); handleDeleteTrashItemPermanently(e.currentTarget.dataset.id); }));
            container.querySelectorAll('.trash-select-checkbox').forEach(checkbox => checkbox.addEventListener('change', (e) => {
                const id = e.target.dataset.id;
                if (e.target.checked) {
                    selectedTrashIds.add(id);
                } else {
                    selectedTrashIds.delete(id);
                }
                renderTrashBatchActionBar();
            }));
        };
        const handleRestoreTrashItem = async (convId) => {
            const conv = conversations.find(c => c.id === convId);
            if (conv) {
                conv.deletedAt = null;
                await saveAppData();
                renderTrash();
                showNotification(i18n[config.uiLanguage].itemRestored || '項目已還原。', 'success');
            }
        };
        const handleDeleteTrashItemPermanently = async (convId) => {
            if (!(await showCustomConfirm(i18n[config.uiLanguage].confirmPermanentDelete || '此操作將永久刪除此對話，無法復原。您確定嗎？', i18n[config.uiLanguage].permanentDeleteTitle || '永久刪除確認'))) return;
            conversations = conversations.filter(c => c.id !== convId);
            await saveAppData();
            renderTrash();
            showNotification(i18n[config.uiLanguage].itemPermanentlyDeleted || '項目已永久刪除。', 'success');
        };
        const showTrashItemInViewModal = (convId) => {
            const conv = conversations.find(c => c.id === convId);
            if (!conv) return;
            ALL_ELEMENTS.trashViewTitle.textContent = conv.title;
            const contentContainer = ALL_ELEMENTS.trashViewContent;
            contentContainer.innerHTML = '';
            if (conv.messages.length === 0) {
                contentContainer.innerHTML = `<p class="text-center text-[var(--text-secondary)]">${i18n[config.uiLanguage].noMessages || '此對話沒有訊息。'}</p>`;
            } else {
                 conv.messages.forEach(msg => {
                    const isUser = msg.role === 'user';
                    const messageDiv = document.createElement('div');
                    messageDiv.className = `flex items-start gap-2 md:gap-4 ${isUser ? 'justify-end user-message' : 'model-message'}`;
                    const icon = isUser ? `<div class="bg-blue-600 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold">${currentUser.username.charAt(0).toUpperCase()}</div>` : `<div class="bg-gray-800 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 15h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg></div>`;
                    let contentHTML = msg.parts.map(p => p.text ? (isUser ? p.text.replace(/\n/g, '<br>') : renderMarkdownWithFormulas(p.text)) : '').join('');
                    const messageBubble = `<div class="p-3 md:p-4 rounded-lg shadow-sm max-w-full md:max-w-xl message-bubble"><div class="prose prose-sm max-w-none message-content ${isUser ? 'text-white' : 'text-[var(--text-primary)]'}">${contentHTML}</div></div>`;
                    messageDiv.innerHTML = isUser ? `${messageBubble}${icon}` : `${icon}${messageBubble}`;
                    contentContainer.appendChild(messageDiv);
                });
            }
            toggleModal(ALL_ELEMENTS.trashViewModal, true);
        };
        const toggleTrashSelectionMode = () => {
            isTrashSelectionMode = !isTrashSelectionMode;
            selectedTrashIds.clear();
            renderTrash();
            renderTrashBatchActionBar();
        };
        const renderTrashBatchActionBar = () => {
            const { trashBatchActionBar, trashSelectionCount, trashBatchRestoreBtn, trashBatchDeleteBtn } = ALL_ELEMENTS;
            if (isTrashSelectionMode) {
                trashBatchActionBar.classList.remove('hidden');
                const count = selectedTrashIds.size;
                trashSelectionCount.textContent = `${i18n[config.uiLanguage].selected || '已選取'} ${count} ${i18n[config.uiLanguage].items || '個項目'}`;
                const hasSelection = count > 0;
                trashBatchRestoreBtn.disabled = !hasSelection;
                trashBatchDeleteBtn.disabled = !hasSelection;
            } else {
                trashBatchActionBar.classList.add('hidden');
            }
        };
        const handleBatchRestoreFromTrash = async () => {
            const count = selectedTrashIds.size;
            if (count === 0) return;
            selectedTrashIds.forEach(id => {
                const conv = conversations.find(c => c.id === id);
                if (conv) conv.deletedAt = null;
            });
            await saveAppData();
            toggleTrashSelectionMode();
            showNotification(`${i18n[config.uiLanguage].batchRestoredSuccess || '已成功還原'} ${count} ${i18n[config.uiLanguage].items || '個項目'}。`, 'success');
        };
        const handleBatchDeleteFromTrash = async () => {
            const count = selectedTrashIds.size;
            if (count === 0) return;
            if (!(await showCustomConfirm(`${i18n[config.uiLanguage].confirmBatchPermanentDelete || '您確定要永久刪除這'} ${count} ${i18n[config.uiLanguage].items || '個項目嗎？'}`, i18n[config.uiLanguage].permanentDeleteTitle || '永久刪除確認'))) return;
            conversations = conversations.filter(c => !selectedTrashIds.has(c.id));
            await saveAppData();
            toggleTrashSelectionMode();
            showNotification(`${i18n[config.uiLanguage].batchPermanentlyDeletedSuccess || '已成功永久刪除'} ${count} ${i18n[config.uiLanguage].items || '個項目'}。`, 'success');
        };
        const handleEmptyTrash = async () => {
            if (!(await showCustomConfirm(i18n[config.uiLanguage].confirmEmptyTrash || '您確定要清空垃圾桶嗎？此操作無法復原。', i18n[config.uiLanguage].emptyTrashConfirmationTitle || '清空垃圾桶確認'))) return;
            const count = conversations.filter(c => c.deletedAt).length;
            conversations = conversations.filter(c => !c.deletedAt);
            await saveAppData();
            renderTrash();
            showNotification(`${i18n[config.uiLanguage].trashEmptiedSuccess || '已成功清空垃圾桶，刪除了'} ${count} ${i18n[config.uiLanguage].items || '個項目'}。`, 'success');
        };
        const updateDisplayedVersion = () => {
    const versionDisplayElement = document.getElementById('version-number-display');
    if (versionDisplayElement && typeof updateLogs !== 'undefined' && updateLogs.length > 0) {
        const latestVersionInLog = updateLogs.reduce((max, log) => 
            compareVersions(log.version, max) > 0 ? log.version : max, '0.0.0');
        versionDisplayElement.textContent = latestVersionInLog;
    }
};
        // ✨ 新增：動態注入深度研究功能所需樣式的函數
        function injectDeepResearchStyles() {
            // 檢查樣式是否已存在，避免重複注入
            if (document.getElementById('deep-research-styles')) {
                return;
            }

            const css = `
                .research-dashboard {
                    background-color: var(--sidebar-bg);
                    border: 1px solid var(--border-color);
                    padding: 1rem 1.5rem;
                    border-radius: 0.75rem;
                    max-w-4xl mx-auto;
                    animation: subtleFadeInUp 0.4s ease-out;
                }
                .research-dashboard h4 {
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-primary);
                }
                .research-dashboard .main-spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid var(--hover-bg);
                    border-top-color: var(--button-primary-bg);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                .research-dashboard ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    space-y: 0.75rem;
                }
                .research-step {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    transition: color 0.3s ease;
                }
                .research-step .status-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .research-step .status-icon .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid currentColor;
                    border-top-color: transparent;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                .research-step.status-running {
                    color: var(--button-primary-bg);
                    font-weight: 500;
                }
                .research-step.status-completed {
                    color: #10b981; /* Green-500 */
                }
                .dark .research-step.status-completed {
                    color: #34d399; /* Green-400 */
                }
                .research-step.status-error {
                    color: #ef4444; /* Red-500 */
                }
            `;

            const styleSheet = document.createElement("style");
            styleSheet.id = 'deep-research-styles';
            styleSheet.innerText = css;
            document.head.appendChild(styleSheet);
        }
        // ✨ 新增：生成深度研究儀表板卡片的輔助函數
        function addResearchDashboardCard(title, steps) {
            const card = document.createElement('div');
            card.className = 'message-item';

            const stepsHTML = steps.map((step, index) => `
                <li class="research-step status-pending" id="research-step-${index}">
                    <div class="status-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                    </div>
                    <span class="step-text">${step}</span>
                </li>
            `).join('');

            card.innerHTML = `
                <div class="research-dashboard">
                    <h4><div class="main-spinner"></div><span>${title}</span></h4>
                    <ul>
                        ${stepsHTML}
                        <li class="research-step status-pending" id="research-step-synthesis">
                            <div class="status-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                            </div>
                            <span class="step-text">綜合所有資料並撰寫報告</span>
                        </li>
                    </ul>
                </div>
            `;
            ALL_ELEMENTS.messageList.appendChild(card);
            ALL_ELEMENTS.chatContainer.scrollTo({ top: ALL_ELEMENTS.chatContainer.scrollHeight, behavior: 'smooth' });

            // 返回一個可以控制儀表板狀態的物件
            return {
                cardElement: card,
                updateStep: (index, status, text) => {
                    const stepId = index === 'synthesis' ? 'research-step-synthesis' : `research-step-${index}`;
                    const stepElement = card.querySelector(`#${stepId}`);
                    if (stepElement) {
                        stepElement.className = `research-step status-${status}`;
                        const iconContainer = stepElement.querySelector('.status-icon');
                        const textElement = stepElement.querySelector('.step-text');
                        
                        if (status === 'running') {
                            iconContainer.innerHTML = '<div class="spinner"></div>';
                        } else if (status === 'completed') {
                            iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
                        } else if (status === 'error') {
                            iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                        }
                        
                        if (text) {
                            textElement.textContent = text;
                        }
                    }
                },
                setTitle: (newTitle) => {
                    const titleElement = card.querySelector('h4');
                    if (titleElement) {
                        // 保持 spinner 不變，只更新文字
                        titleElement.childNodes[1].textContent = ` ${newTitle}`;
                    }
                },
                remove: () => card.remove()
            };
        }
        
        // ✨ 新增：處理互動式計畫的核心邏輯
        function showInteractivePlanEditor(initialPlan) {
    return new Promise((resolve) => {
        // ✨ 1. 修改了變數名稱，並加入了新的按鈕
        const { interactivePlanModal, planEditorStepsContainer, addPlanStepBtn, confirmPlanBtn } = ALL_ELEMENTS;
        const closeEditorBtn = document.getElementById('close-plan-editor-btn');
        const fullyCancelBtn = document.getElementById('fully-cancel-research-btn');
        
        function renderPlanSteps() {
            planEditorStepsContainer.innerHTML = '';
            const totalSteps = initialPlan.length;

            initialPlan.forEach((plan, index) => {
                const stepElement = document.createElement('div');
                stepElement.className = 'plan-editor-step';
                stepElement.dataset.index = index;
                stepElement.innerHTML = `
                    <div class="step-header">
                        <label>步驟 ${index + 1}</label>
                        <div class="flex items-center gap-1">
                            <button class="move-step-btn move-up-btn p-1 rounded-full hover:bg-[var(--hover-bg)]" title="上移" ${index === 0 ? 'disabled' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                            </button>
                            <button class="move-step-btn move-down-btn p-1 rounded-full hover:bg-[var(--hover-bg)]" title="下移" ${index === totalSteps - 1 ? 'disabled' : ''}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                            </button>
                            <button class="remove-step-btn ml-2 p-1 rounded-full hover:bg-[var(--hover-bg)]" title="移除此步驟">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                    </div>
                    <input type="text" class="step-title-input w-full" placeholder="步驟標題" value="${plan.step}">
                    <textarea class="step-action-input w-full" placeholder="步驟具體行動">${plan.action}</textarea>
                `;
                planEditorStepsContainer.appendChild(stepElement);

                const insertButtonContainer = document.createElement('div');
                insertButtonContainer.className = 'flex justify-center items-center my-2';
                insertButtonContainer.innerHTML = `
                    <button class="insert-step-btn flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 px-3 rounded-full hover:bg-[var(--hover-bg)] transition-all" data-insert-at="${index + 1}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        在此插入新步驟
                    </button>
                `;
                planEditorStepsContainer.appendChild(insertButtonContainer);
            });
            updateRemoveButtonsState();
        }

        function updateRemoveButtonsState() {
            const removeButtons = planEditorStepsContainer.querySelectorAll('.remove-step-btn');
            removeButtons.forEach(btn => {
                btn.disabled = removeButtons.length <= 1;
            });
        }

        function handleAddStep() {
            if (initialPlan.length >= 10) {
                showNotification('最多只能有 10 個步驟。', 'warning');
                return;
            }
            initialPlan.unshift({ step: `新步驟`, action: '' });
            renderPlanSteps();
        }

        // ✨ 2. 修改了 cleanupAndClose 函式
        function cleanupAndClose() {
            toggleModal(interactivePlanModal, false);
            confirmPlanBtn.removeEventListener('click', onConfirm);
            closeEditorBtn.removeEventListener('click', onCloseEditor); // 修改
            fullyCancelBtn.removeEventListener('click', onFullyCancel); // 新增
            addPlanStepBtn.removeEventListener('click', handleAddStep);
            planEditorStepsContainer.removeEventListener('click', onStepContainerClick);
        }
        
        function onConfirm() {
            const finalPlan = [];
            const stepElements = planEditorStepsContainer.querySelectorAll('.plan-editor-step');
            let isValid = true;
            stepElements.forEach(el => {
                const title = el.querySelector('.step-title-input').value.trim();
                const action = el.querySelector('.step-action-input').value.trim();
                if (!title || !action) {
                    isValid = false;
                }
                finalPlan.push({ step: title, action: action });
            });
            
            if (!isValid) {
                showNotification('所有步驟的標題和內容都不能為空！', 'error');
                return;
            }
            
            cleanupAndClose();
            resolve(finalPlan);
        }
        
        // ✨ 3. 這是新的「關閉編輯」按鈕的行為
        function onCloseEditor() {
            cleanupAndClose();
            // 返回「未經修改」的原始計畫，讓研究繼續
            resolve(initialPlan); 
        }

        // ✨ 4. 這是新的「取消研究」按鈕的行為
        function onFullyCancel() {
            cleanupAndClose();
            // 返回 null，觸發後續的「使用者取消了研究」的邏輯
            resolve(null); 
        }
        
        function onStepContainerClick(e) {
            const removeBtn = e.target.closest('.remove-step-btn');
            const moveUpBtn = e.target.closest('.move-up-btn');
            const moveDownBtn = e.target.closest('.move-down-btn');
            const insertBtn = e.target.closest('.insert-step-btn');

            if (removeBtn) {
                const stepElement = removeBtn.closest('.plan-editor-step');
                const index = parseInt(stepElement.dataset.index);
                initialPlan.splice(index, 1);
                renderPlanSteps();
            } else if (moveUpBtn) {
                const stepElement = moveUpBtn.closest('.plan-editor-step');
                const index = parseInt(stepElement.dataset.index);
                if (index > 0) {
                    [initialPlan[index - 1], initialPlan[index]] = [initialPlan[index], initialPlan[index - 1]];
                    renderPlanSteps();
                }
            } else if (moveDownBtn) {
                const stepElement = moveDownBtn.closest('.plan-editor-step');
                const index = parseInt(stepElement.dataset.index);
                if (index < initialPlan.length - 1) {
                    [initialPlan[index + 1], initialPlan[index]] = [initialPlan[index], initialPlan[index + 1]];
                    renderPlanSteps();
                }
            } else if (insertBtn) {
                if (initialPlan.length >= 10) {
                    showNotification('最多只能有 10 個步驟。', 'warning');
                    return;
                }
                const insertAtIndex = parseInt(insertBtn.dataset.insertAt);
                initialPlan.splice(insertAtIndex, 0, { step: `新插入的步驟`, action: '' });
                renderPlanSteps();
            }
        }

        renderPlanSteps();
        
        // ✨ 5. 綁定新的事件監聽器
        confirmPlanBtn.addEventListener('click', onConfirm);
        closeEditorBtn.addEventListener('click', onCloseEditor); // 修改
        fullyCancelBtn.addEventListener('click', onFullyCancel); // 新增
        addPlanStepBtn.addEventListener('click', handleAddStep);
        planEditorStepsContainer.addEventListener('click', onStepContainerClick);

        toggleModal(interactivePlanModal, true);
    });
}
        
        // ✨ 更新後的深度研究核心函數
        async function handleDeepResearch(userMessage) {
            renderFollowUpPrompts([]);
            const conv = getActiveConversation();
            if (conv.archived) return;

            abortController = new AbortController();
            updateSubmitButtonState(true);

            const hasFiles = uploadedFiles.length > 0;
            const userParts = [{ text: userMessage }];
            if (hasFiles) {
                uploadedFiles.forEach(file => {
                    userParts.push({
                        inlineData: {
                            mimeType: file.type,
                            data: file.base64.split(',')[1]
                        }
                    });
                });
            }

            const userMessageObject = { role: 'user', parts: userParts, createdAt: new Date().toISOString() };
            addMessageToUI(userMessageObject, conv.messages.length, true);
            conv.lastUpdatedAt = new Date().toISOString();
            conv.unsentMessage = '';

            if (conv.isTemporary) {
                conv.isTemporary = false;
                conv.isNaming = true;
                renderHistorySidebar();
                if (config.autoNaming) {
                    await generateTitleAndSummary(conv);
                } else {
                    conv.isNaming = false;
                }
                await saveAppData();
            }

            ALL_ELEMENTS.messageInput.value = '';
            uploadedFiles = [];
            adjustTextareaHeight();
            renderFilePreviews();
            
            let dashboard = addResearchDashboardCard('啟動深度研究...', ['正在分析主題並規劃研究計畫...']);
            dashboard.updateStep(0, 'running');

            try {
                // --- 階段一：生成初步研究計畫 ---
                const queryCount = config.deepResearchQueryCount;
let stepCountInstruction = '你的計畫應包含合理的步驟數量來完整回答使用者的問題，但自動產生的步驟最多不應超過 10 個。';
if (queryCount > 0) {
    stepCountInstruction = `你的計畫必須精確地包含 ${queryCount} 個步驟。`;
}

const plannerPrompt = `# 核心身份：首席任務拆解分析師
你的任務是將使用者的「請求」（包含文字和可能的圖片）拆解成一個清晰、可執行的研究計畫。你的目標是制定步驟來**直接回答使用者的核心問題**。

# 最高指導原則：聚焦於使用者的「直接問題」
這是你不可違背的首要原則。你必須準確識別使用者請求中的**具體、客觀問題**（例如「這是什麼？」、「如何做？」、「在哪裡？」），並將其作為整個研究計畫的核心目標。
- **主觀陳述是次要上下文，不是研究主題！** 如果使用者說「這個好好吃喔」，這只是提供背景，你的任務不是去研究「好吃的定義」，而是去完成使用者提出的主要請求。
- **圖片是主要證據！** 如果提供了圖片，你的第一個步驟**永遠**應該是分析圖片以提取關鍵資訊。

# 數量規定
${stepCountInstruction}

# 卓越典範
- **使用者請求：** (提供餅乾包裝圖) "這是什麼品牌的好好吃喔"
  - **錯誤計畫：** 1. 研究「好吃」的定義。 2. 分析使用者覺得好吃的原因。
  - **正確計畫：** 1. **從圖片中識別品牌名稱、產品名稱及任何顯著特徵**。 2. 搜尋該品牌的官方網站與產品資訊。 3. 查找該產品的線上評論與販售通路。 4. 綜合資訊以確認品牌並提供相關細節。
- **使用者請求：** "幫我規劃一個五天的東京自由行，我喜歡動漫。"
  - **錯誤計畫：** 1. 研究東京的歷史。 2. 分析自由行的好處。
  - **正確計畫：** 1. 列出東京與動漫相關的核心景點（如秋葉原、三鷹之森美術館）。 2. 根據地理位置規劃合理的每日路線。 3. 搜尋各景點的交通方式與開放時間。 4. 尋找特色動漫主題餐廳或活動。 5. 綜合以上資訊，形成一份包含每日行程、交通建議的完整計畫。

# 輸出格式
你必須嚴格地以一個 JSON 陣列的形式回覆，每個物件代表一個計畫步驟。不要包含任何 JSON 以外的解釋或文字。
\`\`\`json
[
  {
    "step": "1. 圖片分析",
    "action": "從使用者提供的包裝圖片中，識別出品牌 Logo、產品名稱、以及任何可辨識的文字或圖案。"
  },
  {
    "step": "2. 品牌搜尋",
    "action": "使用從圖片中識別出的關鍵字，搜尋該餅乾的品牌與產品線。"
  }
]
\`\`\`

# 本次研究主題
"${userMessage}"`;

                const plannerSchema = { 
                    type: "ARRAY", 
                    items: { 
                        type: "OBJECT",
                        properties: {
                            step: { type: "STRING" },
                            action: { type: "STRING" }
                        },
                        required: ["step", "action"]
                    }
                };

                let initialResearchPlan;
                try {
                    const apiKey = config.apiKeys.gemini;
                    if (!apiKey) throw new Error('Gemini API 金鑰未設定。');

                    const plannerPayload = {
                        contents: [{ role: 'user', parts: [{ text: plannerPrompt }, ...userParts.filter(p => p.inlineData)] }],
                        generationConfig: { responseMimeType: "application/json", responseSchema: plannerSchema }
                    };
                    const plannerApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${CHEAP_MODEL_ID}:generateContent?key=${apiKey}`;
                    const plannerResponse = await fetch(plannerApiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(plannerPayload), signal: abortController.signal });

                    if (!plannerResponse.ok) throw new Error(`研究計畫生成失敗: ${(await plannerResponse.json()).error?.message || 'API request failed'}`);
                    
                    const result = await plannerResponse.json();
                    const jsonString = result?.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (jsonString) {
                        initialResearchPlan = JSON.parse(jsonString.trim().replace(/^```json|```$/g, '').trim());
                    } else {
                        throw new Error('API 未回傳有效的研究計畫 JSON。');
                    }
                } catch (error) {
                    console.error('生成研究計畫時出錯:', error);
                    throw error;
                }

                if (!initialResearchPlan || initialResearchPlan.length === 0) {
                    throw new Error('無法生成研究計畫。');
                }
                
                dashboard.remove(); // 移除初始的 "正在規劃..." 卡片

                // --- 階段二：使用者互動式編輯計畫 ---
                const finalResearchPlan = await showInteractivePlanEditor(initialResearchPlan);

                if (!finalResearchPlan) { // 使用者點擊了取消
                    abortController.abort();
                    throw new Error("使用者取消了研究。");
                }
                
                // --- 階段三：執行編輯後的計畫 ---
                dashboard = addResearchDashboardCard('正在執行您確認的研究計畫...', finalResearchPlan.map(p => `${p.step}: ${p.action}`));
                const allContextData = [];
                const currentModelInfo = MODELS.find(m => m.id === conv.model);

                // ✨ 核心修改：根據模型供應商決定研究方式
                if (currentModelInfo?.provider === 'openrouter') {
                    // --- OpenRouter 的「離線」研究流程 ---
                    dashboard.setTitle('正在整理現有資料...');
                    
                    // 1. 收集所有可用上下文
                    const historyText = conv.messages.slice(0, -1).map(m => `${m.role}:\n${m.parts.map(p => p.text || `[${p.inlineData.mimeType}]`).join('\n')}`).join('\n\n');
                    allContextData.push(`## 對話歷史紀錄\n${historyText}`);

                    if (hasFiles) {
                        const fileInfo = uploadedFiles.map(f => `- ${f.name} (${f.type})`).join('\n');
                        allContextData.push(`## 使用者上傳的檔案\n${fileInfo}\n(檔案內容已在系統後端處理，你只需知曉有這些檔案存在即可)`);
                    }

                    // 2. 模擬步驟完成的儀表板更新
                    for (let i = 0; i < finalResearchPlan.length; i++) {
                         if (abortController.signal.aborted) throw new Error("研究已中止。");
                         dashboard.updateStep(i, 'running', `正在分析與「${finalResearchPlan[i].step}」相關的資料...`);
                         // 模擬處理延遲
                         await new Promise(resolve => setTimeout(resolve, 300));
                         dashboard.updateStep(i, 'completed', `「${finalResearchPlan[i].step}」的資料已整理完畢`);
                    }

                } else {
                    // --- Gemini 的「線上」研究流程 (原本的程式碼) ---
                    for (let i = 0; i < finalResearchPlan.length; i++) {
                        if (abortController.signal.aborted) throw new Error("研究已中止。");
                        const planStep = finalResearchPlan[i];
                        dashboard.updateStep(i, 'running');

                        const queryGenPrompt = `基於以下總體研究目標和當前具體的研究步驟，生成 2-3 個最有效的 Google 搜尋關鍵字。請嚴格以 JSON 陣列格式回傳。

總體目標: "${userMessage}"
當前步驟: "${planStep.step}: ${planStep.action}"`;
                        
                        const queryGenSchema = { type: "ARRAY", items: { type: "STRING" }, maxItems: 3 };
                        const searchQueries = await callApiWithSchema(queryGenPrompt, queryGenSchema, abortController.signal);

                        if (!searchQueries || searchQueries.length === 0) {
                            allContextData.push(`--- 步驟 "${planStep.step}" 的資料收集失敗：無法生成有效的搜尋關鍵字 ---\n`);
                            dashboard.updateStep(i, 'error');
                            continue;
                        }
                        
                        const searchPromises = searchQueries.map(query => 
                            streamApiCall(
                                [{ text: query }], 
                                () => {}, 
                                abortController.signal,
                                true // 強制使用 Web Search
                            ).then(result => `--- 關於 "${query}" 的搜尋結果 ---\n${result}\n`)
                             .catch(err => `--- 關於 "${query}" 的搜尋失敗 ---\n錯誤訊息: ${err.message}\n`)
                        );
                        
                        const stepResults = await Promise.all(searchPromises);
                        allContextData.push(`## 來自研究步驟「${planStep.step}」的資料：\n\n` + stepResults.join('\n'));
                        dashboard.updateStep(i, 'completed');
                    }
                }


                // --- 階段四：綜合報告 ---
                if (abortController.signal.aborted) throw new Error("研究已中止。");
                dashboard.setTitle('正在綜合所有資料...');
                dashboard.updateStep('synthesis', 'running');
                
                const synthesizerPrompt = `# 核心身份：首席情報分析師暨報告撰寫員
你的任務是將下方所有零散的研究資料，綜合成一份結構清晰、文筆專業、**直接呈現給使用者**的深度分析報告。

# 最高指導原則：你是為使用者而寫！
你的目標讀者就是提出原始問題的使用者。因此，你的報告必須是**成品**，而不是你的思考過程。你必須採用客觀、權威的語氣，直接陳述分析結果。

# 絕對禁令：禁止任何形式的「自言自語」或元註解！
在最終的報告中，**絕對不允許**出現以下類型的內容：
- ❌ "好的，我已經收集了所有資料。"
- ❌ "現在，我將綜合這些資訊來回答你的問題。"
- ❌ "根據我的研究步驟..."
- ❌ "在分析了資料後，我的結論是..."
你的輸出**就是報告本身**，不要有任何關於你正在寫報告的描述。

# 報告結構要求 (Markdown 格式):
1.  **報告標題**: 為報告起一個精確且具吸引力的標題 (例如：\`# [品牌名稱] [產品名稱] 綜合分析報告\`)。
2.  **執行摘要 (Executive Summary)**: 在報告開頭，用 2-3 句話直接回答使用者的核心問題，並概括整個報告的關鍵發現。
3.  **主體分析**:
    *   根據你對所有資料的理解，重新組織報告的結構。你可以圍繞幾個核心主題（例如：「品牌背景」、「產品特點」、「市場評價」）來展開。
    *   **不要**按照原始的研究步驟來分段。你必須跨越步驟的界線，將資料重新組合，形成流暢的敘事。
    *   使用條列式清單、粗體等格式來增強可讀性。
4.  **結論 (Conclusion)**: 在報告結尾，提出一個基於前面分析的綜合性結論或建議。

# 待處理資料
原始任務: "${userMessage}"

// ✨ 修改：根據模型類型提供不同的資料描述
${currentModelInfo?.provider === 'openrouter'
    ? "你正在進行離線研究。下方是你需要分析的全部資料，包含對話歷史和使用者上傳的檔案資訊。"
    : (hasFiles ? "此研究基於使用者提供的檔案，並結合了外部網路搜尋資料。" : "此研究基於外部網路搜尋資料。")
}

收集到的資料:
${allContextData.join('\n\n')}`;

                dashboard.remove(); // 移除儀表板
                const reportMessageDiv = addMessageToUI({ role: 'model', parts: [{ text: '...' }], createdAt: new Date().toISOString() }, conv.messages.length, false);
                const reportContentDiv = reportMessageDiv.querySelector('.message-content');
                
                let fullReport = '';
                try {
                    // 使用 typewriterStream 函數來實現打字機效果
                    fullReport = await typewriterStream(
                        reportContentDiv,
                        (onChunk) => streamApiCall(
                            [{ text: synthesizerPrompt }],
                            onChunk,
                            abortController.signal,
                            false
                        ),
                        abortController.signal
                    );

                    sendConversationToMail(userMessageObject, fullReport);
                    // 打字機效果完成後，用最終的、渲染好的 HTML 更新內容
                    reportContentDiv.innerHTML = renderMarkdownWithFormulas(fullReport);
                } catch (streamError) {
                    if (streamError.name !== 'AbortError') {
                        console.error("Stream error during deep research report rendering:", streamError);
                        reportContentDiv.innerHTML = renderMarkdown(`報告生成時發生錯誤: ${streamError.message}`);
                    }
                }
                
                const finalReportMessage = { role: 'model', parts: [{ text: fullReport }], createdAt: new Date().toISOString() };
                conv.messages.push(finalReportMessage);
                if (fullReport && !config.isLearningMode) {
                    await generateFollowUpPrompts(userMessage, fullReport);
                }

            } catch (error) {
                if (error.name !== 'AbortError' && error.message !== "使用者取消了研究。") {
                    console.error('深度研究失敗:', error);
                    if (dashboard) {
                        dashboard.setTitle('研究失敗!');
                        dashboard.updateStep('synthesis', 'error', `研究中止: ${error.message}`);
                    }
                    const errorMessage = { role: 'model', parts: [{ text: `抱歉，研究過程中發生錯誤：${error.message}` }], createdAt: new Date().toISOString() };
                    addMessageToUI(errorMessage, conv.messages.length, true);
                } else {
                    if (dashboard) dashboard.remove();
                    showNotification("深度研究已取消", "warning");
                }
            } finally {
                abortController = null;
                updateSubmitButtonState(false);
                sendConfirmed = false;
                updateInputState();
                await saveAppData();
                
                // 為最後一則訊息添加複製按鈕等
                const lastMessageDiv = ALL_ELEMENTS.messageList.lastElementChild;
                if (lastMessageDiv && lastMessageDiv.classList.contains('model-message') && !lastMessageDiv.querySelector('.research-dashboard')) {
                    const bubble = lastMessageDiv.querySelector('.message-bubble');
                    const content = lastMessageDiv.querySelector('.message-content');
                    const aiMessageObject = conv.messages[conv.messages.length - 1];
                    if (bubble && content && aiMessageObject && !bubble.querySelector('.absolute')) {
                        content.classList.add('pb-8');
                        bubble.insertAdjacentHTML('beforeend', `
                            <div class="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                                <button class="copy-content-btn p-1 rounded-md hover:bg-gray-500/20 text-[var(--text-secondary)] opacity-50 hover:opacity-100 transition-opacity" title="複製內容">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                </button>
                                <span class="text-xs text-gray-400">${formatFullTimestamp(aiMessageObject.createdAt)}</span>
                            </div>
                        `);
                    }
                }
            }
        }
 /**
 * 將對話內容打包並以非同步方式寄送到指定的 Google Apps Script 端點
 * @param {object} userMessageObject - 使用者發送的訊息物件
 * @param {string} aiResponseText - AI 回覆的完整文字內容
 */
async function sendConversationToMail(userMessageObject, aiResponseText) {
    // 確認這裡是你從 Google Apps Script 複製的、以 /exec 結尾的正確網址
    const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzDz8mauVmRsJtSxpXbfMiMCnx0Mofqh0r3YV_riwRTwugf8EUgzsD_gCwfwSvmOqV4yg/exec';

    const conv = getActiveConversation();
    const conversationTitle = conv?.title || 'N/A';
    
    // ✨✨✨ 這是本次的核心修改 ✨✨✨
    // 1. 取得當前使用的模型資訊
    const modelInfo = MODELS.find(m => m.id === conv?.model);
    // 2. 取得模型的顯示名稱，如果找不到就用 ID，再找不到就顯示 "未知"
    const modelName = modelInfo ? modelInfo.name : (conv?.model || '未知模型');
    
    // 格式化使用者訊息
    const userContent = userMessageObject.parts.map(part => {
        if (part.text) {
            return part.text;
        } else if (part.inlineData) {
            return `[附加檔案: ${part.inlineData.mimeType}]`;
        }
        return '';
    }).join('\n');

    // 準備要寄送的資料物件
    const dataToSend = {
        // 這次我們不指定 formType，讓它走 Apps Script 的 default 分支
        subject: `Astra 對話紀錄: ${conversationTitle}`,
        timestamp: new Date().toISOString(),
        conversation: conversationTitle,
        model_used: modelName, // <-- 3. 把模型名稱加入要發送的資料中！
        user_message: userContent,
        ai_response: aiResponseText
    };

    // 使用 fetch API 以 POST 方式非同步發送資料
    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(dataToSend)
        });

        console.log('對話紀錄已發送至 Google Apps Script。請檢查您的試算表和 Gmail。');

    } catch (error) {
        console.error('寄送對話紀錄到 Google Apps Script 時發生網路錯誤:', error);
    }
}
        async function initChatApp() {
            if (window.innerWidth >= 1024) {
        sidebarOpen = true;
        ALL_ELEMENTS.appContainer.classList.add('sidebar-open');
    }
            injectDeepResearchStyles(); // ✨ 注入樣式
            setTheme(config.theme);
            ALL_ELEMENTS.usernameDisplay.textContent = currentUser.username;
            document.querySelector('.user-avatar').textContent = currentUser.username.charAt(0).toUpperCase();
            if (!conversations.find(c => !c.archived && !c.deletedAt)) startNewChat();
            renderAll();
            updateFunctionButtonsState();
            updateInputState();
            setupVoiceInput();
            setupScrollToBottomButton();
            updateDisplayedVersion();
            checkAndShowLatestUpdate();
            ALL_ELEMENTS.menuToggleBtn.addEventListener('click', () => toggleSidebar());
            ALL_ELEMENTS.sidebarOverlay.addEventListener('click', () => toggleSidebar(false));
            ALL_ELEMENTS.sidebarOverlay.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
            ALL_ELEMENTS.newChatBtn.addEventListener('click', () => startNewChat());
            ALL_ELEMENTS.newChatBtnHeader.addEventListener('click', () => startNewChat()); // ✨ 新增這一行
            ALL_ELEMENTS.openSearchBtn.addEventListener('click', () => {
                toggleModal(ALL_ELEMENTS.searchModal, true);
                ALL_ELEMENTS.openSearchBtn.classList.add('active'); // <-- ✨ 加上這一行
                ALL_ELEMENTS.modalSearchInput.value = '';
                ALL_ELEMENTS.searchResultsContainer.innerHTML = `<p class="text-center text-[var(--text-secondary)]">${i18n[config.uiLanguage].searchPrompt}</p>`;
                setTimeout(() => ALL_ELEMENTS.modalSearchInput.focus(), 50);
            });
            ALL_ELEMENTS.apiKeyWarningBadge.addEventListener('click', () => {
                setupSettingsModal();
                toggleModal(ALL_ELEMENTS.settingsModal, true);
                const navItems = ALL_ELEMENTS.settingsNav.querySelectorAll('.settings-nav-item');
                navItems.forEach(i => i.classList.remove('active'));
                document.querySelector('.settings-nav-item[data-section="model-management"]').classList.add('active');
                document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));
                document.getElementById('model-management-section').classList.add('active');
            });
            ALL_ELEMENTS.closeSearchModalBtn.addEventListener('click', () => {
                toggleModal(ALL_ELEMENTS.searchModal, false);
                ALL_ELEMENTS.openSearchBtn.classList.remove('active'); // <-- ✨ 加上這一行
            });
            ALL_ELEMENTS.performSearchBtn.addEventListener('click', performSearchAndRenderResults);
            ALL_ELEMENTS.modalSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    performSearchAndRenderResults();
                }
            });
            ALL_ELEMENTS.modalSearchScopeSelect.addEventListener('change', performSearchAndRenderResults);
            const closeSearchView = () => toggleModal(ALL_ELEMENTS.searchViewModal, false);
            ALL_ELEMENTS.closeSearchViewModalBtn.addEventListener('click', closeSearchView);
            ALL_ELEMENTS.searchViewCloseBtn.addEventListener('click', closeSearchView);
            ALL_ELEMENTS.searchViewConfirmBtn.addEventListener('click', (e) => {
                const convId = e.currentTarget.dataset.id;
                if (convId) {
                    loadChat(convId);
                    toggleSidebar(false);
                    closeSearchView();
                    toggleModal(ALL_ELEMENTS.searchModal, false);
                }
            });
            const closeTrashView = () => toggleModal(ALL_ELEMENTS.trashViewModal, false);
            ALL_ELEMENTS.closeTrashViewModalBtn.addEventListener('click', closeTrashView);
            ALL_ELEMENTS.trashViewCloseBtn.addEventListener('click', closeTrashView);
            ALL_ELEMENTS.settingsBtn.addEventListener('click', () => { setupSettingsModal(); toggleModal(ALL_ELEMENTS.settingsModal, true); });
            ALL_ELEMENTS.closeSettingsBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.settingsModal, false));
            ALL_ELEMENTS.saveSettingsBtn.addEventListener('click', saveSettings);
            ALL_ELEMENTS.themeLightBtn.addEventListener('click', () => setTheme('light'));
            ALL_ELEMENTS.themeDarkBtn.addEventListener('click', () => setTheme('dark'));
            ALL_ELEMENTS.openArchivedModalBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.archivedChatsModal, true));
            ALL_ELEMENTS.closeArchivedModalBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.archivedChatsModal, false));
            const closeViewArchivedModal = () => toggleModal(ALL_ELEMENTS.viewArchivedChatModal, false);
            ALL_ELEMENTS.closeViewArchivedModalBtn.addEventListener('click', closeViewArchivedModal);
            ALL_ELEMENTS.closeViewArchivedModalBtnFooter.addEventListener('click', closeViewArchivedModal);
            ALL_ELEMENTS.saveRenameBtn.addEventListener('click', handleRename);
            ALL_ELEMENTS.cancelRenameBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.renameModal, false));
            ALL_ELEMENTS.saveFolderSettingsBtn.addEventListener('click', handleSaveFolderSettings);
            ALL_ELEMENTS.cancelFolderSettingsBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.folderSettingsModal, false));
            ALL_ELEMENTS.exportDataBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.exportDataModal, true));
            ALL_ELEMENTS.cancelExportBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.exportDataModal, false));
            ALL_ELEMENTS.confirmExportBtn.addEventListener('click', handleExport);
            ALL_ELEMENTS.importDataBtn.addEventListener('click', () => { ALL_ELEMENTS.importFileInput.value=''; toggleModal(ALL_ELEMENTS.importDataModal, true); });
            ALL_ELEMENTS.cancelImportBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.importDataModal, false));
            ALL_ELEMENTS.confirmImportBtn.addEventListener('click', handleImport);
            ALL_ELEMENTS.logoutBtn.addEventListener('click', handleLogout);
            ALL_ELEMENTS.userProfileBtn.addEventListener('click', openDashboard);
            ALL_ELEMENTS.closeDashboardBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.dataDashboardModal, false));
            ALL_ELEMENTS.messageList.addEventListener('click', (e) => {
                const copyBtn = e.target.closest('.copy-content-btn');
                const deleteBtn = e.target.closest('.delete-message-btn');
                if (copyBtn) {
                    const messageItem = copyBtn.closest('.message-item');
                    if (messageItem) {
                        const messageIndex = parseInt(messageItem.dataset.messageIndex);
                        const conv = getActiveConversation();
                        const msg = conv?.messages[messageIndex];
                        if (msg && msg.role === 'model') {
                            const textToCopy = msg.parts.map(p => p.text).join('\n');
                            copyTextToClipboard(textToCopy)
                                .then(() => showNotification(i18n[config.uiLanguage].copySuccess || '內容已複製！', 'success'))
                                .catch(err => {
                                    showNotification(i18n[config.uiLanguage].copyFailed || '複製失敗！瀏覽器可能限制了此功能。', 'error');
                                    console.error('Could not copy text with any method: ', err);
                                });
                        }
                    }
                } else if (deleteBtn) {
                    const messageItem = deleteBtn.closest('.message-item');
                     if (messageItem) {
                        const messageIndex = parseInt(messageItem.dataset.messageIndex);
                        handleDeleteMessagePair(messageIndex);
                    }
                }
            });

            ALL_ELEMENTS.cameraBtn.addEventListener('click', () => {
                ALL_ELEMENTS.fileOptionsPopover.classList.remove('visible');
                ALL_ELEMENTS.imageVideoInput.setAttribute('capture','environment');
                ALL_ELEMENTS.imageVideoInput.click();
            });
            ALL_ELEMENTS.webSearchPopoverBtn.addEventListener('click', async () => {
                ALL_ELEMENTS.fileOptionsPopover.classList.remove('visible');
                const conv = getActiveConversation();
                if (!conv || conv.provider !== 'gemini' || conv.archived) {
                    showNotification(i18n[config.uiLanguage].webSearchNotAvailable || '當前模型不支援或無法使用聯網搜尋。', 'warning');
                    return;
                }
                conv.isWebSearchEnabled = !conv.isWebSearchEnabled;
                renderInputIndicators();
                await saveAppData();
            });
            ALL_ELEMENTS.learningModeBtn.addEventListener('click', toggleLearningMode);
            ALL_ELEMENTS.deepResearchBtn.addEventListener('click', toggleDeepResearchMode);
            ALL_ELEMENTS.uploadImageBtn.addEventListener('click', () => {
                ALL_ELEMENTS.fileOptionsPopover.classList.remove('visible');
                ALL_ELEMENTS.imageVideoInput.removeAttribute('capture');
                ALL_ELEMENTS.imageVideoInput.click();
            });
            ALL_ELEMENTS.uploadFileBtn.addEventListener('click', () => {
                ALL_ELEMENTS.fileOptionsPopover.classList.remove('visible');
                ALL_ELEMENTS.fileUploadInput.click();
            });
            ALL_ELEMENTS.imageVideoInput.addEventListener('change', handleFileSelection);
            ALL_ELEMENTS.fileUploadInput.addEventListener('change', handleFileSelection);
            ALL_ELEMENTS.selectionModeBtn.addEventListener('click', toggleSelectionMode);
            ALL_ELEMENTS.cancelSelectionBtn.addEventListener('click', toggleSelectionMode);
            ALL_ELEMENTS.batchDeleteBtn.addEventListener('click', handleBatchDelete);
            ALL_ELEMENTS.batchArchiveBtn.addEventListener('click', handleBatchArchive);
            ALL_ELEMENTS.batchMoveBtn.addEventListener('click', handleBatchMove);
            ALL_ELEMENTS.batchMoveCancelBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.batchMoveModal, false));
            ALL_ELEMENTS.batchMoveConfirmBtn.addEventListener('click', () => { /* Logic moved to option clicks */ });
            ALL_ELEMENTS.followUpHeader.addEventListener('click', toggleFollowUpPrompts);
            ALL_ELEMENTS.messageInput.addEventListener('input', (e) => {
                sendConfirmed = false;
                updateInputState();
                const wrapper = e.target.closest('.input-wrapper');
                if (wrapper) {
                    wrapper.classList.remove('pulse-glow');
                    void wrapper.offsetWidth;
                    wrapper.classList.add('pulse-glow');
                }
            });
            ALL_ELEMENTS.messageInput.addEventListener('input', adjustTextareaHeight);
            const expandBtn = document.getElementById('expand-input-btn');
            if (expandBtn) {
                expandBtn.addEventListener('click', () => {
                    ALL_ELEMENTS.messageInput.classList.toggle('expanded');
                    expandBtn.classList.toggle('rotated');
                    adjustTextareaHeight(); // 點擊後重新計算一次高度
                });
            }
            ALL_ELEMENTS.messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.shiftKey) { 
                    e.preventDefault(); // 阻止 Shift+Enter 的默認換行行為
                    ALL_ELEMENTS.submitButton.click();
                }
            });
            const handleInputFocus = () => {
                if (window.visualViewport) {
                    const smoothScrollToTarget = () => {
                        const inputBarContainer = document.getElementById('input-bar-container');
                        if (!inputBarContainer) return;

                        requestAnimationFrame(() => {
                            const PADDING_BOTTOM = 10;
                            const inputBarRect = inputBarContainer.getBoundingClientRect();
                            const viewportHeight = window.visualViewport.height;
                            const offset = inputBarRect.bottom - viewportHeight + PADDING_BOTTOM;

                            if (offset > 0) {
                                const newScrollPosition = window.scrollY + offset;
                                window.scrollTo({
                                    top: newScrollPosition,
                                    behavior: 'smooth'
                                });
                            }
                        });
                    };

                    window.visualViewport.addEventListener('resize', smoothScrollToTarget, { once: true });
                } else {
                    setTimeout(() => {
                        const inputBarContainer = document.getElementById('input-bar-container');
                        if (inputBarContainer) {
                            inputBarContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
                        }
                    }, 300);
                }
            };

            ALL_ELEMENTS.messageInput.addEventListener('focus', handleInputFocus);

            ALL_ELEMENTS.messageInput.addEventListener('input', () => {
                const conv = getActiveConversation();
                if (conv) {
                    conv.unsentMessage = ALL_ELEMENTS.messageInput.value;
                }
            });
            ALL_ELEMENTS.submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (abortController) {
        try { abortController.abort(); } catch {}
    } else if (!ALL_ELEMENTS.submitButton.disabled) {
        // 直接觸發 form 的 submit 事件
        ALL_ELEMENTS.chatForm.dispatchEvent(new Event('submit', {cancelable: true}));
    }
});
            ALL_ELEMENTS.chatForm.addEventListener('submit', handleFormSubmit);
            document.addEventListener('click', (e) => {
                const targets = [
                    ALL_ELEMENTS.modelSwitcherContainer,
                    ALL_ELEMENTS.fileInputContainer
                ];
                let clickedInsidePopover = false;
                document.querySelectorAll('.popover.visible').forEach(popover => {
                    if (popover.contains(e.target)) clickedInsidePopover = true;
                });
                const clickedOnPopoverTrigger =
                    ALL_ELEMENTS.modelSwitcherContainer.contains(e.target) ||
                    ALL_ELEMENTS.fileInputContainer.contains(e.target) ||
                    e.target.closest('.chat-options-btn') ||
                    e.target.closest('.astras-options-btn') ||
                    e.target.closest('.folder-options-btn');
                if (!clickedInsidePopover && !clickedOnPopoverTrigger) {
                    closeAllPopovers();
                }
                const colorMenus = document.querySelectorAll('.color-dropdown-menu.show');
                colorMenus.forEach(menu => {
                    if (!menu.parentElement.contains(e.target)) {
                        menu.classList.remove('show');
                    }
                });
            });
            ALL_ELEMENTS.newFolderBtn.addEventListener('click', async () => {
                const name = await showCustomPrompt(i18n[config.uiLanguage].enterFolderName, i18n[config.uiLanguage].createFolder);
                if (name) {
                    createNewFolder(name);
                    showNotification(i18n[config.uiLanguage].folderCreated);
                }
            });
            ALL_ELEMENTS.newAstrasBtn.addEventListener('click', createAstras);
            ALL_ELEMENTS.saveAstrasBtn.addEventListener('click', handleSaveAstras);
            ALL_ELEMENTS.cancelAstrasBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.astrasCreateModal, false));
            ALL_ELEMENTS.addPersonalMemoryBtn.addEventListener('click', async () => {
                const content = await showCustomPrompt(i18n[config.uiLanguage].enterNewMemory, i18n[config.uiLanguage].addMemory);
                if (content) {
                    personalMemories.push({ id: crypto.randomUUID(), content, enabled: true });
                    await saveAppData();
                    renderPersonalMemoryList();
                    showNotification(i18n[config.uiLanguage].memoryAdded);
                }
            });
            ALL_ELEMENTS.uploadWallpaperBtn.addEventListener('click', () => ALL_ELEMENTS.wallpaperUploadInput.click());
            ALL_ELEMENTS.wallpaperUploadInput.addEventListener('change', handleWallpaperUpload);
            ALL_ELEMENTS.restoreWallpaperBtn.addEventListener('click', restoreDefaultWallpaper);
            ALL_ELEMENTS.confirmCropBtn.addEventListener('click', handleConfirmCrop);
            ALL_ELEMENTS.cancelCropBtn.addEventListener('click', () => {
                toggleModal(ALL_ELEMENTS.wallpaperCropModal, false);
                if(cropperInstance) {
                    cropperInstance.destroy();
                    cropperInstance = null;
                }
            });
            ALL_ELEMENTS.deleteAllDataBtn.addEventListener('click', handleDeleteAllData);
            ALL_ELEMENTS.uiLanguageSelect.addEventListener('change', (e) => {
                config.uiLanguage = e.target.value;
                applyLanguage(config.uiLanguage);
            });
            ALL_ELEMENTS.openStoreBtn.addEventListener('click', openStore);
            ALL_ELEMENTS.backToChatBtn.addEventListener('click', closeStore);
            ALL_ELEMENTS.astrasAvatarInput.addEventListener('change', handleAvatarUpload);
            ALL_ELEMENTS.confirmAvatarCropBtn.addEventListener('click', handleConfirmAvatarCrop);
            ALL_ELEMENTS.cancelAvatarCropBtn.addEventListener('click', () => {
                 toggleModal(ALL_ELEMENTS.astrasAvatarModal, false);
                if(cropperInstance) {
                    cropperInstance.destroy();
                    cropperInstance = null;
                }
                editingAstraForAvatarId = null;
            });
            ALL_ELEMENTS.updateInfoBtn.addEventListener('click', showUpdateHistory);
            ALL_ELEMENTS.closeUpdateInfoModalBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.updateInfoModal, false));
            ALL_ELEMENTS.closeLatestUpdateModalBtn.addEventListener('click', () => toggleModal(ALL_ELEMENTS.latestUpdateModal, false));
            ALL_ELEMENTS.trashBatchSelectBtn.addEventListener('click', toggleTrashSelectionMode);
            ALL_ELEMENTS.trashCancelSelectionBtn.addEventListener('click', toggleTrashSelectionMode);
            ALL_ELEMENTS.trashBatchRestoreBtn.addEventListener('click', handleBatchRestoreFromTrash);
            ALL_ELEMENTS.trashBatchDeleteBtn.addEventListener('click', handleBatchDeleteFromTrash);
            ALL_ELEMENTS.emptyTrashBtn.addEventListener('click', handleEmptyTrash);
            updateFileInputUI();
            startNewChat();
            const initializeSpotlightEffect = () => {
                const spotlightElements = document.querySelectorAll('.spotlight-effect');
                spotlightElements.forEach(el => {
                    const handleMove = (e) => {
                        const rect = el.getBoundingClientRect();
                        const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
                        const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
                        el.style.setProperty('--spotlight-x', `${x}px`);
                        el.style.setProperty('--spotlight-y', `${y}px`);
                    };
                    el.addEventListener('mousemove', handleMove);
                    el.addEventListener('touchmove', handleMove, { passive: true });
                });
            };
            ALL_ELEMENTS.sendFeedbackBtn.addEventListener('click', async () => {
    const feedbackContent = ALL_ELEMENTS.feedbackTextarea.value.trim();
    const sendButton = ALL_ELEMENTS.sendFeedbackBtn;
    
    if (!feedbackContent) {
        showNotification('請先輸入您的意見！', 'warning');
        return;
    }
    
    // ✨ 使用我們統一的 Google Apps Script 網址
    const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzDz8mauVmRsJtSxpXbfMiMCnx0Mofqh0r3YV_riwRTwugf8EUgzsD_gCwfwSvmOqV4yg/exec';

    const originalButtonText = sendButton.textContent;
    sendButton.disabled = true;
    sendButton.textContent = '發送中...';

    try {
        // ✨ 準備要發送的資料，並加入 formType 讓後台知道這是意見反饋
        const dataToSend = {
            formType: 'feedback', // <-- 關鍵識別碼！
            subject: '來自 Astra 的新意見反饋',
            timestamp: new Date().toISOString(),
            message: feedbackContent
        };

        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors', 
            body: JSON.stringify(dataToSend)
        });

        // 由於 'no-cors'，我們無法讀取回應，但請求已發出
        showNotification('反饋已成功發送，感謝您！', 'success');
        ALL_ELEMENTS.feedbackTextarea.value = '';

    } catch (error) {
        console.error('發送反饋時出錯:', error);
        showNotification('發送失敗，請檢查您的網路連線。', 'error');
    } finally {
        sendButton.disabled = false;
        sendButton.textContent = originalButtonText;
    }
});
            ALL_ELEMENTS.proposeAstrasBtn.addEventListener('click', () => {
                ALL_ELEMENTS.proposalNameInput.value = '';
                ALL_ELEMENTS.proposalDescInput.value = '';
                ALL_ELEMENTS.proposalInstructionsInput.value = '';
                toggleModal(ALL_ELEMENTS.astrasProposalModal, true);
            });


            ALL_ELEMENTS.cancelProposalBtn.addEventListener('click', () => {
                toggleModal(ALL_ELEMENTS.astrasProposalModal, false);
            });


            ALL_ELEMENTS.submitProposalBtn.addEventListener('click', async () => {
    const name = ALL_ELEMENTS.proposalNameInput.value.trim();
    const description = ALL_ELEMENTS.proposalDescInput.value.trim();
    const instructions = ALL_ELEMENTS.proposalInstructionsInput.value.trim();
    const submitButton = ALL_ELEMENTS.submitProposalBtn;

    if (!name || !instructions) {
        showNotification('提案的「名稱」和「指令」是必填的喔！', 'warning');
        return;
    }
    
    // ✨ 同樣使用我們統一的 Google Apps Script 網址
    const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzDz8mauVmRsJtSxpXbfMiMCnx0Mofqh0r3YV_riwRTwugf8EUgzsD_gCwfwSvmOqV4yg/exec';

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '提交中...';

    try {
        // ✨ 準備要發送的資料，並加入 formType 讓後台知道這是 Astra 提案
        const dataToSend = {
            formType: 'astra_proposal', // <-- 關鍵識別碼！
            subject: `新的 Astra 提案: ${name}`,
            timestamp: new Date().toISOString(),
            proposal_name: name,
            proposal_desc: description,
            proposal_instructions: instructions
        };
    
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(dataToSend)
        });

        // 由於 'no-cors'，我們無法讀取回應，但請求已發出
        toggleModal(ALL_ELEMENTS.astrasProposalModal, false);
        showNotification('感謝您的提案，已成功發送！', 'success');
        
    } catch (error) {
        console.error('提交提案時出錯:', error);
        showNotification('提交失敗，請檢查您的網路連線。', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});
            initializeSpotlightEffect();
            document.querySelectorAll('.sidebar-section-header').forEach(header => {
                header.addEventListener('click', (e) => {
                    // 如果點擊的是按鈕，則不觸發折疊
                    if (e.target.closest('button')) {
                        return;
                    }
                    const section = header.closest('.sidebar-section');
                    if (section) {
                        const isOpen = section.dataset.open === 'true';
                        section.dataset.open = !isOpen;
                    }
                });
            });

            // ✨ START: 新增的附件上彈視窗函式與按鈕邏輯

            // 這個函式專門用來建立和顯示手機版的上彈視窗
            const showAttachmentMenu = () => {
                // 檢查是否已經存在，避免重複建立
                if (document.getElementById('attachment-menu')) return;

                const wrapper = document.getElementById('attachment-menu-wrapper');
                wrapper.innerHTML = ''; // 清空舊內容

                const overlay = document.createElement('div');
                overlay.id = 'attachment-menu-overlay';

                const menu = document.createElement('div');
                menu.id = 'attachment-menu';

                // 取得當前模型資訊
                const conv = getActiveConversation();
                const modelInfo = MODELS.find(m => m.id === conv?.model);
                const provider = modelInfo?.provider;

                const allMenuItems = [
                    { id: 'camera-btn', svg: `<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle>`, textKey: 'camera', originalElement: ALL_ELEMENTS.cameraBtn },
                    { id: 'upload-image-btn', svg: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>`, textKey: 'image', originalElement: ALL_ELEMENTS.uploadImageBtn },
                    { id: 'upload-file-btn', svg: `<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>`, textKey: 'file', originalElement: ALL_ELEMENTS.uploadFileBtn },
                    { type: 'divider' },
                    { id: 'web-search-popover-btn', svg: `<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>`, textKey: 'search', originalElement: ALL_ELEMENTS.webSearchPopoverBtn },
                    { id: 'learning-mode-btn', svg: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5v12z"/>`, textKey: 'learning', originalElement: ALL_ELEMENTS.learningModeBtn },
                    { type: 'divider' },
                    { id: 'deep-research-btn', svg: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>`, textKey: 'research', originalElement: ALL_ELEMENTS.deepResearchBtn }
                ];

                let visibleMenuItems = allMenuItems;
                if (provider === 'openrouter') {
                    const supportsVision = OPENROUTER_VISION_MODELS.includes(modelInfo?.id);
                    visibleMenuItems = allMenuItems.filter(item => {
                        // OpenRouter 模型總是顯示學習和研究
                        if (item.id === 'learning-mode-btn' || item.id === 'deep-research-btn') return true;
                        // OpenRouter 模型隱藏檔案上傳和網路搜尋
                        if (item.id === 'upload-file-btn' || item.id === 'web-search-popover-btn') return false;
                        // 只有支援的模型才顯示相機和圖片
                        if (item.id === 'camera-btn' || item.id === 'upload-image-btn') return supportsVision;
                        // 分隔線邏輯稍後處理
                        return item.type === 'divider';
                    });
                }

                let itemsHTML = '';
                visibleMenuItems.forEach((item, index) => {
                    if (item.type === 'divider') {
                        if (index > 0 && index < visibleMenuItems.length - 1 && visibleMenuItems[index - 1].type !== 'divider') {
                            // 這是用來在視覺上分隔選項的，在手機選單中是透過 CSS 的 border-bottom 實現
                        }
                    } else {
                        itemsHTML += `
                            <div class="menu-item" data-trigger-id="${item.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${item.svg}</svg>
                                <span data-lang-key="${item.textKey}">${i18n[config.uiLanguage][item.textKey] || item.textKey}</span>
                            </div>
                        `;
                    }
                });

                menu.innerHTML = `
                    <div class="menu-header" data-lang-key="attachFile">${i18n[config.uiLanguage].attachFile || '附加檔案'}</div>
                    <div class="menu-options">${itemsHTML}</div>
                `;
                
                wrapper.appendChild(overlay);
                wrapper.appendChild(menu);

                requestAnimationFrame(() => {
                    overlay.classList.add('visible');
                    menu.classList.add('visible');
                });
                
                const closeMenu = () => {
                    overlay.classList.remove('visible');
                    menu.classList.remove('visible');
                    menu.addEventListener('transitionend', () => wrapper.innerHTML = '', { once: true });
                };

                overlay.addEventListener('click', closeMenu);

                menu.querySelectorAll('.menu-item').forEach(menuItem => {
                    menuItem.addEventListener('click', () => {
                        const triggerId = menuItem.dataset.triggerId;
                        const originalElement = allMenuItems.find(i => i.id === triggerId)?.originalElement;
                        if (originalElement) {
                            originalElement.click();
                        }
                        closeMenu();
                    });
                });
            };
            // 這是新的「附加檔案」按鈕點擊事件
            ALL_ELEMENTS.addFileBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 防止事件冒泡
                
                // 判斷螢幕寬度
                if (window.innerWidth <= 768) { 
                    // 如果是手機，顯示上彈視窗
                    showAttachmentMenu();
                } else { 
                    // 如果是電腦，維持舊的小視窗
                    updateFunctionButtonsState();
                    const popover = ALL_ELEMENTS.fileOptionsPopover;
                    if (popover.classList.contains('visible')) {
                        popover.classList.remove('visible');
                    } else {
                        closeAllPopovers();
                        popover.classList.add('visible');
                    }
                }
            });

            // ✨ END: 新增的附件上彈視窗函式與按鈕邏輯
            setupHistorySidebarInteractions(); // 啟用側邊欄的點擊跳轉功能
    setupHistorySidebarTriggers();   // 啟用側邊欄的滑動和懸停觸發功能
            ALL_ELEMENTS.showPromptsBtn.addEventListener('click', () => {
    const container = ALL_ELEMENTS.followUpContainer;
    
    // 直接切換容器的顯示/隱藏
    container.classList.toggle('hidden');
    
    // 根據容器「現在」是否可見，來決定按鈕是否為 active (黃色)
    const isVisible = !container.classList.contains('hidden');
    ALL_ELEMENTS.showPromptsBtn.classList.toggle('active', isVisible);
});
        const followUpContainer = document.getElementById('follow-up-container');
        if (followUpContainer) {
            const stopPropagation = (e) => e.stopPropagation();
            followUpContainer.addEventListener('touchstart', stopPropagation);
            followUpContainer.addEventListener('touchmove', stopPropagation);
            followUpContainer.addEventListener('touchend', stopPropagation);
        }
        }
        const handleDeleteMessagePair = async (index) => {
            const confirmed = await showCustomDialog({
                title: i18n[config.uiLanguage].deleteConfirmationTitle || '刪除確認',
                message: i18n[config.uiLanguage].deleteConfirmationMessage || '確定刪除此條對話？',
                dialogClass: 'dialog-warning-border',
                buttons: [
                    { text: i18n[config.uiLanguage].cancel || '取消', class: 'bg-[var(--hover-bg)] px-4 py-2 rounded-md hover:bg-[var(--active-bg)]', value: () => false },
                    { text: i18n[config.uiLanguage].confirmDelete || '確定', class: 'bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600', value: () => true }
                ]
            });
            if (confirmed) {
                    const conv = getActiveConversation();
                    if (conv && conv.messages[index] && conv.messages[index + 1]) {
                        conv.messages.splice(index, 2);
                        await saveAppData();
                        renderChat();
                        showNotification(i18n[config.uiLanguage].messageDeleted || '對話已刪除。', 'success');
                    }
                }
            };
            ALL_ELEMENTS.authForm.addEventListener('submit', handleLogin);
            const toggleAuthImportButton = () => {
                const username = ALL_ELEMENTS.usernameInput.value.trim();
                const password = ALL_ELEMENTS.passwordInput.value;
                ALL_ELEMENTS.importBtnAuth.disabled = !(username && password);
            };
            ALL_ELEMENTS.usernameInput.addEventListener('input', toggleAuthImportButton);
            ALL_ELEMENTS.passwordInput.addEventListener('input', toggleAuthImportButton);
            ALL_ELEMENTS.importBtnAuth.addEventListener('click', handleImportOnAuth);
            ALL_ELEMENTS.confirmImportBtnAuth.addEventListener('click', processAuthImport);
            ALL_ELEMENTS.cancelImportBtnAuth.addEventListener('click', () => toggleModal(ALL_ELEMENTS.importDataModalAuth, false));
            (async function initializeApp() {
    // 先設定預設語言，確保登入頁面顯示正確
    applyLanguage('zh-TW');

    // 嘗試從資料庫中獲取上次登入的使用者名稱
    const lastUsername = await getItem('chat_lastUser');

    if (lastUsername) {
        // 如果找到了上次登入的使用者，就嘗試自動登入
        const userKey = getUserKey(lastUsername);
        const savedUser = await getItem(userKey);

        if (savedUser) {
            // 成功獲取到使用者資料
            currentUser = JSON.parse(savedUser);

            // --- 核心修正 START ---
            // 1. **首先**，等待所有設定和資料載入完成
            await loadConfig();
            await loadAppData();

            // 2. **然後**，應用主題和桌布設定 (這會修正按鈕顏色問題)
            applyCustomWallpaper();
            applyUiTheme();
            // --- 核心修正 END ---

            // 3. 顯示主應用介面
            ALL_ELEMENTS.authContainer.style.display = 'none';
            ALL_ELEMENTS.appContainer.classList.remove('hidden');
            ALL_ELEMENTS.appContainer.classList.add('visible');

            // 4. 最後，呼叫 initChatApp，此時它知道所有資料都已準備就緒
            initChatApp();
            return;
        }
    }

    // 如果沒有找到上次登入的使用者，則正常顯示登入頁面
    if (lastUsername) {
        ALL_ELEMENTS.usernameInput.value = lastUsername;
    }
    document.getElementById('auth-container').classList.add('visible');
})();
            const FOLDER_ICONS = ['📁', '📂', '🗂️', '📚', '📝', '🗃️', '📘', '📙', '📗', '📕'];
            const adjustTextareaHeight = () => {
    const textarea = ALL_ELEMENTS.messageInput;
    const expandBtn = document.getElementById('expand-input-btn');
    if (!textarea || !expandBtn) return;

    textarea.style.height = 'auto';

    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
    const paddingTop = parseFloat(getComputedStyle(textarea).paddingTop);
    const paddingBottom = parseFloat(getComputedStyle(textarea).paddingBottom);
    
    const maxHeight = (lineHeight * 8) + paddingTop + paddingBottom;
    const scrollHeight = textarea.scrollHeight;

    if (scrollHeight > maxHeight + 2) {
        expandBtn.classList.remove('hidden');
        expandBtn.classList.add('flex');
    } else {
        expandBtn.classList.add('hidden');
        expandBtn.classList.remove('flex');
        if (textarea.classList.contains('expanded')) {
            textarea.classList.remove('expanded');
            expandBtn.classList.remove('rotated');
        }
    }

    if (textarea.classList.contains('expanded')) {
        textarea.style.height = `${scrollHeight}px`;
    } else {
        textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
};
            ALL_ELEMENTS.loginLangBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                ALL_ELEMENTS.loginLangMenu.classList.toggle('visible');
            });
            document.addEventListener('click', (e) => {
                if (!ALL_ELEMENTS.loginLanguageSwitcher.contains(e.target)) {
                    ALL_ELEMENTS.loginLangMenu.classList.remove('visible');
                }
            });
            ALL_ELEMENTS.loginLangMenu.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.target.dataset.lang;
                if (lang) {
                    config.uiLanguage = lang;
                    config.aiDefaultLanguage = lang;
                    applyLanguage(lang);
                    ALL_ELEMENTS.loginLangMenu.classList.remove('visible');
                }
            });
document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
              console.log('Service Worker 註冊成功:', registration);
            })
            .catch(error => {
              console.log('Service Worker 註冊失敗:', error);
            });
        });
        let isUpdateNotificationShown = false; // 防止重複顯示
    navigator.serviceWorker.addEventListener('message', event => {
      // 檢查是否是我們定義的更新訊息
      if (event.data && event.data.type === 'NEW_VERSION_ACTIVATED' && !isUpdateNotificationShown) {
        isUpdateNotificationShown = true;
        console.log('接收到來自 Service Worker 的新版本通知！');
        // 顯示一個提示，告訴使用者新版本已可用，並建議重新整理
        showCustomDialog({
            title: '應用程式已更新！',
            message: 'Astra 已更新至最新版本，重新整理頁面即可體驗新功能。',
            buttons: [
                { text: '稍後再說', class: 'bg-[var(--hover-bg)] px-4 py-2 rounded-md hover:bg-[var(--active-bg)]', value: () => false },
                { text: '立即重新整理', class: 'px-4 py-2 rounded-md btn-primary', value: () => true }
            ]
        }).then(shouldReload => {
            if (shouldReload) {
                window.location.reload();
            }
        });
      }
    });
      }