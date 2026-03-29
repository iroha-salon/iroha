const profileContent = {
    name: "千田 美佐子 (ちだ みさこ)",
    intro: "はじめまして、6th sense healing IROHAを開業しました、千田美佐子（ちだみさこ）と申します。 私の生い立ち含め、自己紹介をさせてください。",
    stories: [
        {
            title: "看護師になったきっかけ",
            text: "富山県出身ですが、山の方なので海水浴の思い出はありません。田舎育ち活発な女子。<br>かけっこが好きで、高校では陸上部所属。<br>部活に明け暮れ、進路調査で焦ったとき、「就職するには遊べない」安易な気持ちから、看護の道を選びました。"
        },
        {
            title: "看護師としてのキャリア",
            text: "1989年に上京し就職。 人間関係や教育指導などに疲れ、最初の病院は11年勤務し、ここで1回目の離職。<br>アロマセラピーを体験し、香りや施術の心地よさに惚れ、そのままアロマセラピーの資格を取得。 訪問看護にも携わり、利用者さんを癒しながら自分が癒されていました。<br>その後、6年ほどして新たな刺激を求め、病院勤務に戻り、トータル36年看護師として働きました。"
        },
        {
            title: "子どもとの別れ、そして学び",
            text: "40歳結婚。晩婚なのですぐに不妊治療を開始し、3回目で妊娠。 妊娠は普通のことと考え、普通に仕事していました。<br>しかし子供の成長が芳しくなく入院。同時に私の血圧が上昇し母体の危機となりました。 医師から「死産にしますか？出されますか？」と問われ、「生みます！」と即答。<br>ちっちゃなちっちゃな女の子、手足はパパそっくりです。 私は毎日面会に、夫は週一の面会でしたが、普段と表情が全然違います。<br>そんな親子の大切な時間も、たったの30日でサヨナラとなりました。 どうしてこの子は、私たち夫婦のところに来てくれたのだろう？ 寂しさの中でそんなことを考えていました。<br>そんなときに、四柱推命に出会い、結婚も、赤ちゃんのタイミングも、すべて理由があったのだと知りました。 そこから、私自身も四柱推命を学び始めたのです。"
        },
        {
            title: "ぽんこつベテランナースとは？",
            text: "ベテラン看護師は、当然ながら経験を積んでおりますので 技術はもちろんのこと<br>・点滴は大の得意<br>・どんな厄介な医師とのコミュニケーションも円滑にこなす<br>若いナースとは経験値に差がありますので、頼られることも多いのです。 が、しかし。ベテラン（＝歳を重ねている）であるがゆえの支障もあります。<br>具体的には？<br>〇体力の低下<br>・夜勤がつらくなった<br>・緊急コードで走れない<br>・患者さんのオムツ交換、身体拭きが体力的にキツイ<br>〇老眼<br>・薬の確認がつらい（読めない）<br>・電子カルテが見にくい<br>・モニターが見にくい などなど。<br>経験値と気力だけではカバーしきれない不具合が多発するのが、ぽんこつベテランナースなのです。 仕事がイヤなわけじゃない。だけど当たり前にできていたことができなくなる。<br>それがぽんこつベテランナース。"
        },
        {
            title: "看護師歴36年のベテランナースが開業するサロン",
            text: "他のサロンとの差別化を図るべく、オリジナルメニューを考案し、36年看護師として働いた道に終止符を打ちました。<br>仕事として誰かのお世話をしている看護職や介護職の方。 子育てや家族の介護に携わっている方。 そんな日頃「誰かのお世話をしていて、少し疲れている方」を癒し、元気になってもらうためのサロンです。"
        }
    ]
};

function renderProfilePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${renderHeader('profile')}
        <main class="pt-32 pb-20 px-6">
            <div class="max-w-4xl mx-auto">
                ${SectionTitle("Self Introduce", "施術者紹介")}
                
                <article class="bg-white p-8 md:p-16 rounded-3xl shadow-sm reveal active">
                    <div class="mb-12 text-center">
                        <h2 class="text-2xl md:text-4xl font-bold mb-4">${profileContent.name}</h2>
                        <p class="text-gray-500 italic">${profileContent.intro}</p>
                    </div>

                    <div class="space-y-16">
                            ${profileContent.stories.map(s => `
                            <section aria-labelledby="${s.title}">
                                <h3 id="${s.title}" class="text-xl font-bold text-[#e91e63] mb-4 flex items-center">
                                    <span class="w-8 h-px bg-[#e91e63] mr-4"></span> ${s.title}
                                </h3>
                                <p class="text-gray-600 leading-loose pl-12">${s.text}</p>
                            </section>
                        `).join('')}
                    </div>
                
                    <div class="mt-20 p-8 bg-[#fffaf0] rounded-2xl text-center">
                        <p class="font-bold">誰かのお世話をするには、お世話をする方自身が心身ともに健康でなければ務まりません。 ぜひ、お気軽にお問い合わせください。</p>
                    </div>
                </article>

                <div class="text-center mt-12">
                    <a href="/" class="text-gray-500 hover:text-[#716329]">← TOPへ戻る</a>
                </div>
            </div>
        </main>

        ${renderFooter()}
    `;
    // 既存のスクロールアニメーションとメニューの初期化
    initRevealAnimations(); 
    initMobileMenu(); 
}

document.addEventListener('DOMContentLoaded', renderProfilePage);
