// news-page.js
const ITEMS_PER_PAGE = 5;
let currentPage = 1;

function renderNewsPage() {
    const app = document.getElementById('app');
    if (!app) return;

    const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // ニュースリストのHTML生成
    const newsListHtml = currentNews.map(news => `
        <article class="bg-[#fffaf0] rounded-2xl p-6 md:p-8 shadow-sm mb-8 reveal active">
            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-[#b2945e]/30 pb-4 mb-6">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800">${news.title}</h2>
            </div>
            <div class="text-gray-600 leading-loose space-y-4">
                ${news.content}
            </div>
        </article>
    `).join('');

    // ページネーション（インジケーター）の動的生成
    let paginationHtml = '';
    if (totalPages > 1) {
        paginationHtml = `<div class="flex justify-center items-center gap-3 mt-12" role="navigation" aria-label="ページネーション">`;
        
        // 戻るボタン
        paginationHtml += `
            <button onclick="changePage(${currentPage - 1})" 
                class="w-10 h-10 rounded-full flex items-center justify-center border border-[#b2945e] text-[#b2945e] hover:bg-[#b2945e] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                ${currentPage === 1 ? 'disabled' : ''} aria-label="前のページ">
                &lt;
            </button>
        `;

        // ページ番号ボタン
        for (let i = 1; i <= totalPages; i++) {
            paginationHtml += `
                <button onclick="changePage(${i})" 
                    class="w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${currentPage === i ? 'bg-[#b2945e] text-white border-[#b2945e]' : 'border-[#b2945e] text-[#b2945e] hover:bg-[#b2945e]/10'}"
                    aria-label="${i}ページ目" ${currentPage === i ? 'aria-current="page"' : ''}>
                    ${i}
                </button>
            `;
        }

        // 次へボタン
        paginationHtml += `
            <button onclick="changePage(${currentPage + 1})" 
                class="w-10 h-10 rounded-full flex items-center justify-center border border-[#b2945e] text-[#b2945e] hover:bg-[#b2945e] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                ${currentPage === totalPages ? 'disabled' : ''} aria-label="次のページ">
                &gt;
            </button>
        `;
        paginationHtml += `</div>`;
    }

    // 全体のレンダリング（ヘッダー・フッター関数が存在する前提）
    app.innerHTML = `
        ${typeof renderHeader === 'function' ? renderHeader('news') : ''}

        <main class="pt-32 pb-20 px-6 min-h-screen">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16 reveal active">
                    <span class="text-[#b2945e] font-serif italic text-xl block mb-2">News</span>
                    <h1 class="text-3xl md:text-4xl font-bold text-[#4a4a4a] relative inline-block pb-4">
                        お知らせ一覧
                        <span class="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#b2945e] rounded-full"></span>
                    </h1>
                </div>

                <div id="news-container">
                    ${newsListHtml}
                </div>

                ${paginationHtml}
            </div>
        </main>

        ${typeof renderFooter === 'function' ? renderFooter() : ''}
    `;

    // ページ遷移時に上部へスムーズスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.changePage = function(page) {
    const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderNewsPage();
    }
};

// news読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('/news')) {
        renderNewsPage();
    }
});
