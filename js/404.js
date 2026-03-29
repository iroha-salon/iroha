document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${renderHeader()}
        
        <main class="min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-6">
            <div class="max-w-2xl w-full text-center reveal">
                <span class="text-[#b2945e] font-serif italic text-2xl block mb-2">404 Not Found</span>
                <h1 class="text-3xl md:text-4xl font-bold text-[#4a4a4a] mb-8">
                    ページが見つかりません
                </h1>
                
                <div class="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#b2945e]/10 mb-10">
                    <p class="leading-relaxed mb-6 text-left">
                        お探しのページは、移動または削除されたか、一時的にアクセスできない可能性があります。
                    </p>
                    <p class="text-sm text-gray-500 mb-8 text-left">
                        URLにお間違いがないかご確認いただくか、以下のボタンよりトップページへお戻りください。
                    </p>
                    
                    <a href="/" class="inline-flex items-center gap-2 bg-[#716329] text-white px-10 py-4 rounded-full hover:bg-[#b2945e] transition-all duration-300 btn-hover shadow-lg">
                        トップページへ戻る
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
            </div>
        </main>

        ${renderFooter()}
    `;

    // 共通アニメーションとメニューの初期化
    initRevealAnimations();
    initMobileMenu();
});
