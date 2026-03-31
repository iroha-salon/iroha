// --- App State & Content ---
const contentData = {
    hero: {
        title: "誰かのお世話をする<br>人を癒すためのサロン",
        sub: "神奈川のレイキサロン＆アロマセラピー",
        img: "/image/top.jpg"
    },
    services: [
        { 
        type: "Energy Work", 
        name: "レイキ・ヒーリング", 
        desc: "【女性限定】レイキとアロマを融合させたオリジナル施術。", 
        fullDesc: "（レイキによるエネルギーチャージ）<br><br>【女性限定】レイキヒーリングとアロマセラピーを融合させた、IROHAオリジナルの施術メニュー。アロマセラピーで癒されつつ、体内のエネルギーバランスを調整し、自然治癒力を高めたい方におすすめです。",
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600" 
        },
        { 
        type: "Body Care", 
        name: "オプションマッサージ", 
        desc: "ヘッド、デコルテ、上半身など重点的にケアします。", 
        fullDesc: "辛い部位やお悩みにあわせて、ヘッド、デコルテ、上半身、下半身（フット）をそれぞれ集中して施術します。",
        img: "/image/service2.jpg" 
        },
        { 
        type: "Body Care", 
        name: "出張サービス", 
        desc: "小さいお子様がいらっしゃるなど、外出できない方向けに出張ヒーリングを承ります。", 
        fullDesc: "小さいお子様がいらっしゃるなど、外出できない方向けに出張ヒーリングを承ります。<br><br>【お子様と一緒に受けられます】<br>・お子様が嫌がらないようでしたら、お子様を抱っこしていただき、一緒にレイキヒーリングを受けられます。<br>・リラックス状態のお母様から自然にお子様にエネルギーが伝わり、お子様もリラックスします。<br>・お母様だけの施術ですと、落ち着かないお子様もいらっしゃいますが、その場合、一緒に受けることで相乗効果が得られます。<br>※別途、お子様分の費用が発生することはありません。",
        img: "/image/service3.jpg" 
        }
    ],
    menu: [
        { name: "初回遠隔ヒーリング20分", time: "45分", price: "2,500円", fullDesc: "（レイキの説明とヒアリングを大目に見て45分程度）<br><br>遠隔ヒーリングとはどんなものなのか少し説明させていただいて、初回はzoom越しで体験から行っていただくものです。" },
        { name: "遠隔ヒーリング60分", time: "60分", price: "11,000円", fullDesc: "遠隔ヒーリング20分を体験された方限定となります。zoom越しでも、対応は初回20分体験されたときに話をして決めさせていただきます。" },
        { name: "6th sennse healing ビジターコース", time: "45分", price: "12,800円", fullDesc: "初めてレイキを受けられる方におすすめのコースです。チャクラのメゾットで気の流れの循環、体調を整えます。<br>初めにカウンセリング・足浴15分、施術45分、終了後にはハーブティーを飲んでいただきます。全体で90分程度になります。" },
        { name: "6th sense healing スタンダードコース", time: "120分", price: "14,800円", fullDesc: "レイキヒーリングを受けられたことのある方におすすめのコースとなります。<br>不眠の方やゆっくり休まれたい方は睡眠の質が異なりますのでお勧めです。<br>カウンセリングシートを書いていただき、足浴を行います。<br>着衣のままゆっくりと横になっていただき手を当てていきます。<br>終了後にはハーブティーを取っていただき、体調のことをお伝えしていきます。<br><br>全体で90～120分時間をいただいております。" },
        { name: "満月・新月healing（2回1セット）", time: "60分", price: "20,000円", fullDesc: "満月・新月に2回1set行うことで、心の開放と浄化、スタートのセットヒーリング＋体調や気持ちを整えていきます。<br>満月・新月時にはアロマオイルは異なり香りも楽しめます。<br>初めにカウンセリング15分、施術60分、終了時にはハーブティーを飲んでいただき全体で90～120分程です。<br>1か月2回のタイミングがおすすめですが、月をまたいでも可能です。セットメニューとなります。" },
        { name: "【オプション】ヘッドマッサージ", time: "15分", price: "2,000円", fullDesc: "頭を中心にトリートメントを行います。片頭痛の方、悩みが多くて頭を使われる方などにお勧めです。<br>ヘッドマッサージ用のオイルを少し使用しゆっくりとほぐしていきます。" },
        { name: "【オプション】ヘッド＋デコルテ", time: "15分", price: "3,000円", fullDesc: "上半身中心のトリートメントを行います。肩こりの方、呼吸が浅いと感じている方、息苦しさがあるような方、コロナ後遺症の方などにお勧めです。" },
        { name: "【オプション】フットマッサージ", time: "15分", price: "3,000円", fullDesc: "下半身中心のトリートメント（足浴を含む）を行います。立ち仕事、接客業、長時間勤務の方などにお勧めです。" },
        { name: "【オプション】宿命鑑定", time: "30分", price: "5,000円", fullDesc: "宿命鑑定を行い、お客様の特徴や才能、強みについてアドバイスしたり、変化のきっかけやタイミングなどをご案内します。転職・引っ越し・結婚など転機に自分自身の強みを知ることで自信につながります。" },
        { name: "【オプション】カードリーディング", time: "1枚引き", price: "1,000円", fullDesc: "カードを1枚引いていただき、お客様のご希望内容に合わせてアドバイスいたします。" },
        { name: "出張サービス（加算料金）", time: "1時間毎", price: "2,000円〜", fullDesc: "上記メニュー料金に加えて、交通費（実費）と、移動時間1時間毎に2,000円（最大4,000円）を別途頂戴いたします。" }
    ],
    faqs: [
        {
            q: "初めて利用する場合、事前に準備することはレイキを受けると具体的にどんな効果があるのでしょうか？",
            a: "身体がリセットされ、深い層に入り瞑想状態になります。ゆっくり休めたと感じる方が多いです。"
        },
        {
            q: "アレルギーや敏感肌を持っているのですが、施術を受けられますか？",
            a: "レイキもマッサージもオイル等は使用しませんので問題ありません。"
        },
        {
            q: "予約のキャンセルは可能ですか？",
            a: "予約のキャンセルは、予約日前日の17時までにお願いします。それ以降のキャンセルにはキャンセル料が発生する場合があります。無断キャンセルや当日キャンセルには、予約料金の全額を請求することがありますのでご了承ください。"
        }
    ]
};

// --- Main Renderer ---
function renderApp() {
    const app = document.getElementById('app');

    // IDが最大のものを最新記事として取得
    const latestNews = (typeof newsData !== 'undefined' && newsData.length > 0) 
        ? newsData.reduce((max, item) => item.id > max.id ? item : max) 
        : null;
    
    app.innerHTML = `
        ${renderHeader('index')}

        <main>
            <section class="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
                <img src="${contentData.hero.img}" class="absolute inset-0 w-full h-full object-cover" alt="Hero">
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="relative z-10 text-center text-white px-6">
                    <h2 class="text-3xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">${contentData.hero.title}</h2>
                    <p class="mb-10 font-light tracking-widest">${contentData.hero.sub}</p>
                    <a href="https://misako168.stores.jp/reserve/1222iroha/1176606" class="btn-hover inline-block bg-[#e91e63] text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform" aria-label="予約ページへ移動する"">
                        ご予約はこちらから ${typeof ICONS !== 'undefined' ? ICONS.arrowRight : '→'}
                    </a>
                </div>
            </section>

            <section id="concept" class="max-w-7xl mx-auto px-6 py-20 md:py-32">
                <div class="grid md:grid-cols-2 mb-8 lg:gap-4 items-center">
                    <div class="reveal">
                        <h3 class="text-2xl md:text-4xl mb-4 leading-relaxed">
                            「IROHA」へようこそ。<br>
                            <span class="text-[#e91e63] text-lg md:text-xl font-bold">いつも自分のことは後回し。自身の不調に気付けていますか？</span>
                        </h3>
                        <p class="leading-loose text-gray-600 mb-8">
                            ご自身の心と身体が健康でなければ、愛情を持ってお世話ができず、些細なことでイライラが募り、自己嫌悪に陥るばかり。日頃、誰かのお世話をしている人こそ、自分自身のコンディションを整えることが大切です。
                        </p>
                    </div>
                    <div class="reveal">
                        <img src="/image/concept1.jpg" class="rounded-lg w-full h-auto" alt="Concept 1">
                    </div>
                </div>
                <div class="grid md:grid-cols-2 mb-8 lg:gap-4 items-center">
                    <div class="reveal">
                        <h3 class="text-2xl md:text-4xl mb-4 leading-relaxed">
                            <span class="text-[#e91e63] text-lg md:text-xl font-bold">レイキによる調整とは</span>
                        </h3>
                        <p class="leading-loose text-gray-600 mb-8">
                            レイキヒーラーの手のひらから放射される癒しのエネルギーにより、心と身体の見えないエネルギーを調和させ、あなたの軸を本来あるべきところに戻します。<br>IROHAでは「完全オリジナルメニュー」で不調の根っこの部分にアプローチします。
                        </p>
                    </div>
                    <div class="reveal">
                        <img src="/image/concept2.jpg" class="rounded-lg w-full h-auto" alt="Concept 1">
                    </div>
                </div>
                <div class="grid md:grid-cols-2 mb-8 lg:gap-4 items-center">
                    <div class="reveal">
                        <h3 class="text-2xl md:text-4xl mb-4 leading-relaxed">
                            <span class="t ext-[#e91e63] text-lg md:text-xl font-bold">不調の要因を正しくつきとめて本来のあなたに戻るお手伝いをします</span>
                        </h3>
                        <p class="leading-loose text-gray-600 mb-8">
                            不調の理由を自分で正しく判断するのは難しいもの。IROHAのお客様の多くが、不調の理由を勘違いしたまま、長年、的外れな施術を続けていたことに気づかれます。<br>IROHAでは、不調の要因を正しくつきとめ、心身ともに健やかになるためのお手伝いをいたします。
                        </p>
                    </div>
                    <div class="reveal">
                        <img src="/image/concept3.jpg" class="rounded-lg w-full h-auto" alt="Concept 1">
                    </div>
                </div>
            </section>

            <section id="news" class="bg-white py-16 md:py-20 px-6 border-b border-gray-100">
                <div class="max-w-4xl mx-auto">
                    ${SectionTitle ? SectionTitle("News", "お知らせ") : `<div class="text-center mb-10"><h2 class="text-3xl font-bold">お知らせ</h2></div>`}
                    <div class="bg-[#fffaf0] rounded-2xl p-6 md:p-8 shadow-sm reveal">
                        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-[#b2945e]/30 pb-4 mb-4">
                            <h3 class="text-xl font-bold text-gray-800">${latestNews ? latestNews.title : 'お知らせ'}</h3>
                        </div>
                        <p class="text-gray-600 leading-loose line-clamp-3 mb-6">
                            ${latestNews ? latestNews.content.replace(/<br>/g, ' ') : '現在お知らせはありません。'}
                        </p>
                        <div class="text-right">
                            <a href="/news" class="inline-flex items-center gap-2 text-[#e91e63] font-bold hover:translate-x-1 transition-transform" aria-label="お知らせ一覧ページへ移動する">
                                お知らせ一覧を見る ${typeof ICONS !== 'undefined' ? ICONS.arrowRight : '→'}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-[#fffaf0] py-10 px-6">
                <div class="text-center mb-16 reveal active">
                        <span class="text-[#b2945e] font-serif italic text-xl block mb-2">Self Introduce</span>
                        <h2 class="text-3xl md:text-4xl font-bold text-[#4a4a4a] relative inline-block pb-4">
                            施術者紹介
                            <span class="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#b2945e] rounded-full"></span>
                        </h2>
                    </div>
                <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl reveal">
                        <img src="/image/profile.jpg" alt="代表：千田美佐子" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 reveal">
                        <h3 class="text-2xl md:text-3xl font-bold mb-4">千田美佐子</h3>
                        <p class="text-gray-600 leading-loose mb-8">
                        「誰かのお世話をしている人、誰かを癒している人を癒したい」という想いで、IROHA（いろは）サロン開店。
                        </p>
                        <a href="/profile" class="inline-flex items-center gap-2 text-[#e91e63] font-bold hover:translate-x-1 transition-transform">
                            詳しくはこちら ${ICONS.arrowRight}
                        </a>
                    </div>
                </div>
            </section>

            <section id="service" class="bg-white py-20 md:py-32 px-6 border-b border-gray-100">
                <div class="max-w-7xl mx-auto">
                    ${SectionTitle("Service", "サービス")}
                    <div class="grid md:grid-cols-2 gap-12">
                        ${contentData.services.map((s, index) => `
                            <article onclick="openServiceModal(${index})" 
                                class="reveal group overflow-hidden bg-[#fff9f6] rounded-2xl shadow-sm transition-all cursor-pointer hover:shadow-md"
                                role="button" tabindex="0">
                                <div class="overflow-hidden">
                                    <img src="${s.img}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" alt="${s.name}">
                                </div>
                                <div class="p-8">
                                    <span class="font-serif italic text-[#b2945e] text-xl">${s.type}</span>
                                    <h4 class="text-xl font-bold my-2 group-hover:text-[#e91e63] transition-colors">${s.name}</h4>
                                    <p class="text-sm text-gray-500 mb-6">${s.desc}</p>
                                    <div class="flex items-center text-[#e91e63] font-bold text-sm uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                        Read More <span class="ml-2">${ICONS.arrowRight}</span>
                                    </div>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="menu" class="bg-white py-20 md:py-32 px-6">
                <div class="max-w-4xl mx-auto">
                    ${SectionTitle("Menu", "メニュー")}
                    <div class="space-y-4">
                        ${contentData.menu.map((m, index) => `
                            <button onclick="openMenuModal(${index})" 
                                class="reveal w-full group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#fffaf0] rounded-xl border border-transparent hover:border-[#e91e63]/30 hover:bg-[#fdf2f2] transition-all text-left shadow-sm">
                                <div class="flex-1">
                                    <h4 class="text-lg font-bold text-gray-800 group-hover:text-[#e91e63] transition-colors">${m.name}</h4>
                                    <span class="text-[10px] text-[#b2945e] md:hidden">タップで詳細を表示</span>
                                </div>
                                <div class="flex items-center mt-2 md:mt-0">
                                    <div class="flex flex-col">
                                        <span class="text-lg text-gray-500 font-medium">${m.time}</span>
                                        <span class="text-lg font-bold text-[#b2945e] min-w-[100px]">${m.price}</span>
                                    </div>
                                    <span class="text-[#e91e63] group-hover:translate-x-1 transition-transform">
                                        ${ICONS.arrowRight}
                                    </span>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                    <div class="mt-12 p-6 bg-[#fffaf0] rounded-xl reveal">
                        <h5 class="text-[#e91e63] font-bold mb-2 flex items-center gap-2">
                            キャンセルポリシー
                        </h5>
                        <p class="text-sm text-gray-600 leading-loose">
                            予約のキャンセルは、予約日の前日17時までにお願いします。無断キャンセルや当日キャンセルには、予約料金の全額を請求することがあります。
                        </p>
                    </div>
                </div>
            </section>

            <section id="flow" class="bg-[#fffaf0] py-20 md:py-32 px-6">
                <div class="max-w-4xl mx-auto">
                    ${SectionTitle("Flow", "施術の流れ")}
        
                    <div class="space-y-16">
                        <div class="flex flex-col md:flex-row-reverse items-center gap-8 reveal">
                            <div class="w-full md:w-1/2">
                                <img src="/image/flow1.jpg" class="rounded-2xl shadow-sm w-full h-64 object-cover" alt="カウンセリング">
                            </div>
                            <div class="w-full md:w-1/2">
                                <h3 class="text-xl font-bold text-[#e91e63] mb-4 border-b-2 border-[#e91e63] inline-block pb-1">1. カウンセリング</h3>
                                <p class="text-gray-600 leading-loose">カウンセリングシートに必要事項を記載していただきます。その日の体調にあわせて、施術メニューの変更も可能です。</p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row-reverse items-center gap-8 reveal">
                            <div class="w-full md:w-1/2">
                                <img src="/image/flow3.jpeg" class="rounded-2xl shadow-sm w-full h-64 object-cover" alt="足浴">
                            </div>
                            <div class="w-full md:w-1/2">
                                <h3 class="text-xl font-bold text-[#e91e63] mb-4 border-b-2 border-[#e91e63] inline-block pb-1">2. 足浴</h3>
                                <p class="text-gray-600 leading-loose">施術前に足湯で身体を温めます。</p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row-reverse items-center gap-8 reveal">
                            <div class="w-full md:w-1/2">
                                <img src="/image/flow2.jpg" class="rounded-2xl shadow-sm w-full h-64 object-cover" alt="施術">
                            </div>
                            <div class="w-full md:w-1/2">
                                <h3 class="text-xl font-bold text-[#e91e63] mb-4 border-b-2 border-[#e91e63] inline-block pb-1">3. 施術</h3>
                                <p class="text-gray-600 leading-loose">ご希望の施術を行います。施術中のオプション追加のご要望もお受けしています。</p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row-reverse items-center gap-8 reveal">
                            <div class="w-full md:w-1/2">
                                <img src="/image/flow4.jpeg" class="rounded-2xl shadow-sm w-full h-64 object-cover" alt="お身体の確認">
                            </div>
                            <div class="w-full md:w-1/2">
                                <h3 class="text-xl font-bold text-[#e91e63] mb-4 border-b-2 border-[#e91e63] inline-block pb-1">4. お身体の確認</h3>
                                <p class="text-gray-600 leading-loose">施術終了後、ハーブティーを飲みながら、お身体の状態をお聞きします。施術後にお気をつけていただきたいこともお伝えします。</p>
                            </div>
                        </div>
                    </div>
                   <div class="text-center mt-4 reveal">
                    <a href="https://misako168.stores.jp/reserve/1222iroha/1176606" class="btn-hover inline-block bg-[#e91e63] text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 hover:translate-x-1 transition-transform" aria-label="予約ページへ移動する"">
                       ご予約はこちらから ${typeof ICONS !== 'undefined' ? ICONS.arrowRight : '→'}
                    </a>
                   </div>
                </div>
            </section>

            <section id="voice" class="bg-marble py-20 px-6">
                <div class="max-w-5xl mx-auto">
                    ${SectionTitle("Customer's Voice", "お客様の声")}
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white p-8 rounded-xl shadow-sm flex gap-4 reveal">
                            <div class="text-[#b2945e] flex-shrink-0">${ICONS.user}</div>
                            <div>
                                <h5 class="font-bold text-[#b2945e] mb-2 text-lg">コロナ後の息苦しさが楽になった</h5>
                                <p class="text-sm leading-relaxed">コロナ時に外出できず引きこもっていたので、コロナ後も鬱々としていましたが、施術後に感じていた息苦しさがなくなりました。</p>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-sm flex gap-4 reveal">
                            <div class="text-[#b2945e] flex-shrink-0">${ICONS.user}</div>
                            <div>
                                <h5 class="font-bold text-[#b2945e] mb-2 text-lg">睡眠が改善しました</h5>
                                <p class="text-sm leading-relaxed">気管支炎のようにのどが痛く、声も出なかったのですが、終了後にお茶を飲めるようになり、すんなり声が出たことに驚きました</p>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-sm flex gap-4 reveal">
                            <div class="text-[#b2945e] flex-shrink-0">${ICONS.user}</div>
                            <div>
                                <h5 class="font-bold text-[#b2945e] mb-2 text-lg">呼吸が楽になった</h5>
                                <p class="text-sm leading-relaxed">不眠症でなかなか寝付けなかったのが、すぐに眠れて睡眠も深くなり、睡眠の質が変わりました。</p>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-sm flex gap-4 reveal">
                            <div class="text-[#b2945e] flex-shrink-0">${ICONS.user}</div>
                            <div>
                                <h5 class="font-bold text-[#b2945e] mb-2 text-lg">20年来の肩こりが改善</h5>
                                <p class="text-sm leading-relaxed">肩こりがひどく、いろいろ試しても効果がなかったのですが、レイキ施術直後から1週間経っても肩こりの症状がなく驚いています。レイキが自分に合っていたようです。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" class="py-20 md:py-32 px-6 bg-white">
                <div class="max-w-3xl mx-auto">
                    ${SectionTitle("Q & A", "よくある質問")}
                    <div class="space-y-4">
                        ${contentData.faqs.map((faq, index) => `
                            <div class="reveal border-b border-gray-100">
                                <button 
                                    class="faq-trigger w-full py-6 flex justify-between items-center text-left hover:text-[#716329] transition-colors focus:outline-none"
                                    aria-expanded="false"
                                    aria-controls="faq-answer-${index}"
                                >
                                    <span class="font-bold text-lg pr-4 flex">
                                        <span class="text-[#b2945e] mr-3 font-serif">Q.</span> ${faq.q}
                                    </span>
                                    <span class="icon-wrapper">${ICONS.chevronDown}</span>
                                </button>
                                <div id="faq-answer-${index}" class="faq-content bg-gray-50/50 rounded-lg" role="region">
                                    <div class="p-6 text-gray-600 leading-loose flex">
                                        <span class="text-[#e91e63] mr-3 font-serif font-bold">A.</span>
                                        <p>${faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="contact" class="py-20 md:py-32 px-6 bg-[#fffaf0]">
                <div class="max-w-3xl mx-auto">
                    ${SectionTitle ? SectionTitle("Contact", "お問い合わせ") : `<div class="text-center mb-10"><h2 class="text-3xl font-bold">お問い合わせ</h2></div>`}
                
                    <div class="mb-12">
                        <p class="text-gray-600 leading-loose">
                            IROHAに関する取材やお問い合せは、<a href='https://lin.ee/Ofst5Om' class='hover:opacity-70 transition-opacity' aria-label='LINE'><span>公式LINE</span></a>または<a href='mailto:pooh335pooh@gmail.com' class='hover:opacity-70 transition-opacity' aria-label='メール'><span>メール</span></a>よりご連絡ください。<span>施術のご予約は、上記の「ご予約はこちら」よりご予約ください。</span>
                        </p>
                    </div>
                </div>
            </section>
        </main>

        ${renderFooter()}
    `;

    // アニメーション・メニュー等の初期化
    initRevealAnimations();
    initMobileMenu();

    // FAQ アコーディオン制御
    document.querySelectorAll('.faq-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const content = trigger.nextElementSibling;
            const isOpen = trigger.getAttribute('aria-expanded') === 'true';
            const icon = trigger.querySelector('.icon-wrapper svg');
            trigger.setAttribute('aria-expanded', !isOpen);
            content.classList.toggle('open');
            if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
}

// --- Menu モーダル制御 ---
window.openMenuModal = function(index) {
    const item = contentData.menu[index];
    const modal = document.createElement('div');
    modal.id = 'menu-modal';
    modal.className = 'fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeMenuModal()"></div>
        <div class="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-modal-in">
            <button onclick="closeMenuModal()" class="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="p-8 md:p-10">
                <div class="mb-6">
                    <h4 class="text-2xl font-bold text-gray-800 my-2">${item.name}</h4>
                    <div class="flex items-center gap-4 text-[#b2945e] font-bold">
                        <span>${item.time}</span>
                        <span>/</span>
                        <span>${item.price}</span>
                    </div>
                </div>
                <div class="text-gray-600 leading-relaxed space-y-4 border-t pt-6 text-sm md:text-base">
                    ${item.fullDesc}
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
};

window.closeMenuModal = function() {
    const modal = document.getElementById('menu-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
};

// --- Service モーダル制御 ---
window.openServiceModal = function(index) {
    const service = contentData.services[index];
    const modal = document.createElement('div');
    modal.id = 'service-modal';
    modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6';
    modal.innerHTML = `
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeServiceModal()"></div>
        <div class="relative bg-white w-full max-w-2xl max-h-full rounded-2xl overflow-y-auto shadow-2xl animate-modal-in">
            <button onclick="closeServiceModal()" class="absolute top-4 right-4 z-10 p-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div>
                <img src="${service.img}" class="w-full h-48 md:h-64 object-cover" alt="${service.name}">
                <div class="p-8 md:p-10">
                    <span class="font-serif italic text-[#b2945e] text-xl border-b border-[#b2945e]/30 pb-2 block mb-4">${service.type}</span>
                    <h4 class="text-2xl font-bold mb-6">${service.name}</h4>
                    <div class="text-gray-600 leading-loose space-y-4">${service.fullDesc}</div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
};

window.closeServiceModal = function() {
    const modal = document.getElementById('service-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
};

// Keydown global listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
        closeMenuModal();
    }
});

document.addEventListener('DOMContentLoaded', renderApp);
