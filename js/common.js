// --- SVG Icons Data ---
const ICONS = {
    user: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>`,
    menu: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`,
    chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 666.66668 666.66717"><defs><clipPath><path d="M 0,700 H 700 V 0 H 0 Z"/></clipPath></defs><g transform="matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"><g><g><g transform="translate(600,350)" id="g27"><path d="m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0" style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none"/></g><g transform="translate(447.9175,273.6036)"><path d="M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z" style="fill:#716329;fill-opacity:1;fill-rule:nonzero;stroke:none;"/></g></g></g></g></svg>`,
    line: `<svg viewBox="0 0 320 320" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#806b1a;}</style></defs><g><g><rect rx="72.14" height="320" width="320" style="fill: #fff;"></rect><path d="M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z" style="fill:#716329;"></path><path d="M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z" class="cls-1"></path><path class="cls-1" d="M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z"></path><rect class="cls-1" x="128.73" y="121.85" width="11.64" height="50.64" rx="2.04"></rect><path class="cls-1" d="M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z"></path></g></g></svg>`,
    blog: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
};

// ヘッダーを生成する共通関数
function renderHeader(currentPage = 'index') {
    return `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-[#b2945e]/10 px-6 py-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" class="text-2xl font-serif font-bold text-[#716329] tracking-tighter">IROHA</a>
            <nav class="hidden md:flex gap-8 text-sm font-medium" aria-label="メインナビゲーション">
                <a href="/#service" class="hover:text-[#716329] transition-colors">Service</a>
                <a href="/#flow" class="hover:text-[#716329] transition-colors">flow</a>
                <a href="/#voice" class="hover:text-[#716329] transition-colors">Voice</a>
                <a href="/#faq" class="hover:text-[#716329] transition-colors">FAQ</a>
            </nav>
            <button id="menu-toggle" class="md:hidden p-2 text-gray-600" aria-label="メニューを開く" aria-expanded="false">
                <span id="menu-icon-open">${ICONS.menu}</span>
                <span id="menu-icon-close" class="hidden">${ICONS.close}</span>
            </button>
        </div>
        <nav id="mobile-menu" class="md:hidden fixed top-[73px] left-0 right-0 bg-white border-b border-[#b2945e]/10 px-6 py-8 flex flex-col gap-6 shadow-xl closed">
            <a href="/#service" class="text-lg font-medium hover:text-[#716329]">Service</a>
            <a href="/#flow" class="text-lg font-medium hover:text-[#716329]">flow</a>
            <a href="/#voice" class="text-lg font-medium hover:text-[#716329]">Voice</a>
            <a href="/#faq" class="text-lg font-medium hover:text-[#716329]">FAQ</a>
        </nav>
    </header>
    `;
}
// フッターを生成する共通関数
function renderFooter() {
    return `
    <footer class="bg-[#716329] text-white py-12 px-6">
        <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-4xl font-serif mb-4 tracking-widest text-[#fdf2f8]">IROHA</h2>
            <p class="text-sm mb-8 tracking-wider">神奈川のレイキサロン＆アロマセラピー</p>
            
            <div class="flex justify-center gap-6 mb-10">
                <a href="https://www.instagram.com/6th.sense.healing_salon" class="hover:opacity-70 transition-opacity" aria-label="Instagram">${ICONS.instagram}</a>
                <a href="https://www.facebook.com/profile.php?id=100004199551444" class="hover:opacity-70 transition-opacity" aria-label="Facebook">${ICONS.facebook}</a>
                <a href="https://lin.ee/Ofst5Om" class="hover:opacity-70 transition-opacity" aria-label="LINE">${ICONS.line}</a>
                <a href="https://ameblo.jp/pooh335pooh/" class="hover:opacity-70 transition-opacity" aria-label="Blog">${ICONS.blog}</a>
            </div>

            <nav class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs mb-10 border-t border-white/10 pt-8" aria-label="フッターナビゲーション">
                <a href="/privacy" class="underline underline-offset-4 hover:no-underline">プライバシーポリシー</a>
                <a href="/tokushoho" class="underline underline-offset-4 hover:no-underline">特商法取引に基づく表記</a>
                <a href="/terms" class="underline underline-offset-4 hover:no-underline">利用規約</a>
            </nav>

            <p class="text-[10px] text-white/60 tracking-widest">©IROHA All rights reserved.</p>
        </div>
    </footer>
    `;
}

// セクションタイトルの共通化
const SectionTitle = (en, jp) => `
    <div class="text-center mb-16 reveal">
        <span class="text-[#b2945e] font-serif italic text-xl block mb-2">${en}</span>
        <h2 class="text-3xl md:text-4xl font-bold text-[#4a4a4a] relative inline-block pb-4">
            ${jp}
            <span class="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#b2945e] rounded-full"></span>
        </h2>
    </div>
`;

// --- 共通アニメーション制御 ---
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
// モバイルメニューの開閉制御
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('closed');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            mobileMenu.classList.add('open');
            mobileMenu.classList.remove('closed');
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    });

    // リンククリック時に閉じる
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('closed');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        });
    });

    // メニュー外をクリックした時に閉じる
    document.addEventListener('click', (event) => {
        // メニューが開いている（closedクラスを持っていない）かチェック
        const isMenuOpen = !mobileMenu.classList.contains('closed') && mobileMenu.classList.contains('open');
        
        // クリックされた要素がメニュー本体(mobileMenu)でも、切り替えボタン(menuToggle)でも、その子要素でもない場合
        if (isMenuOpen && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('closed');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}
