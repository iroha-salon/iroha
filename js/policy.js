// --- Policy Content Data ---
const policyData = {
    'privacy.html': {
        en: "Privacy Policy",
        jp: "プライバシーポリシー",
        sections: [
            { title: "1. 個人情報の収集", content: "個人情報の保護に関する法律及びその他関連する法令等を遵守し、個人情報の適切な取扱い及び保護に努めます。" },
            { title: "2. 個人情報の利用目的", content: "お客様からご提供いただいた個人情報を以下の目的で利用いたします。<br>・商品・サービスの提供<br>・お問い合わせへの対応<br>・新商品・サービスのご案内<br>・アンケート調査などの実施" },
            { title: "3. 個人情報の保管", content: "お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。" },
            { title: "4. 個人情報の第三者への開示", content: "次の場合を除いて、お客様からいただいた個人情報を、第三者に開示することはありません。<br>・提供者の同意がある場合<br>・法令に基づく場合<br>・不正行為やその他の違法行為を防ぐために個人情報の開示が必要となった場合" },
            { title: "5. 個人情報のお客さまへの開示", content: "お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。" },
            { title: "6. 免責事項", content: "当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。 当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。 当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。 当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。" },
            { title: "7. 著作権について", content: "当サイトに掲載されている情報についての著作権は放棄しておりません。当サイト記事からの引用に関しましては「引用元の明示」によって無償で引用頂けます。ただし、全文転載はお断りいたしております。引用許可範囲についても、事前予告なくこれを変更する事があります。また、当サイトのRSSを利用し、コンテンツをそのまま盗用することも禁止しています。" },
            { title: "8. プライバシーポリシーの変更について", content: "当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。 修正された最新のプライバシーポリシーは常に本ページにて開示されます。" },
            { title: "9. お問い合わせについて", content: "当サイトの個人情報の取扱に関するお問い合せは、<a href='https://lin.ee/Ofst5Om' class='hover:opacity-70 transition-opacity' aria-label='LINE'><span>公式LINE</span></a>または<a href='mailto:pooh335pooh@gmail.com' class='hover:opacity-70 transition-opacity' aria-label='メール'><span>メール</span></a>よりご連絡ください。" }
        ]
    },
    'tokushoho.html': {
        en: "Legal Notice",
        jp: "特商法に基づく表記",
        sections: [
            { title: "1. 販売業者名", content: "IROHA（いろは）" },
            { title: "2. 運営責任者名", content: "千田美佐子" },
            { title: "3. 電話番号", content: "080-5088-2405" },
            { title: "4. メールアドレス", content: "pooh335pooh@gmail.com" },
            { title: "5. サイトURL", content: "iroha-salon.netlify.app" },
            { title: "6. 商品の販売価格", content: "6th sense healing 7,800円～<br>各種オプション 500円～" },
            { title: "7. 支払い方法", content: "<div><p class='mb-4 font-bold'>現金払い</p><p><span class='font-bold align-top'>銀行振込</span><span class='inline-block ml-2'>みずほ銀行 蒲田支店<br>普） 3607123</span></p></div>" },
            { title: "8. サービス提供の時期", content: "ご予約お申し込み後、当店からのご連絡をもってサービス日時を確定いたします。" },
            { title: "9. キャンセルポリシー", content: "予約のキャンセルは、予約日前日の17時までにお願いします。それ以降のキャンセルにはキャンセル料が発生する場合があります。無断キャンセルや当日キャンセルには、予約料金の全額を請求することがあります。" },
            { title: "10. その他注意事項", content: "アロマセラピーの施術時には、アロマオイルのアレルギーがないか事前に確認させていただきます。" },
        ]
    },
    'terms.html': {
        en: "Terms of Service",
        jp: "利用規約",
        sections: [
            { title: "第1条（適用）", content: "本規約は、IROHA（以下、「当サロン」と言います）の提供するサービス（以下、「本サービス」と言います）の利用条件を定めるものです。本サービスを利用することで、利用者は本規約の全条項に同意したものとみなします。" },
            { title: "第2条（サービス内容）", content: "当サロンは、アロマセラピー、ボディメンテナンス、レイキなどのサービスを提供します。" },
            { title: "第3条（予約方法）", content: "本サービスの予約は、ウェブサイト上の予約フォーム、電話、または直接来店により行えます。予約時には、氏名、連絡先、希望サービス、希望日時などの必要情報を提供していただきます。" },
            { title: "第4条（料金と支払い）", content: "施術料金は、ウェブサイトに掲載されている料金を基準とします。支払いは、現金または銀行振込で行うことができます。" },
            { title: "第5条（キャンセルポリシー）", content: "予約のキャンセルは、予約日の前日17時までにお願いします。無断キャンセルや当日キャンセルには、予約料金の全額を請求することがあります。" },
            { title: "第6条（禁止事項）", content: "当サロン内での喫煙、過度な騒音、他の顧客やスタッフへの迷惑行為は禁止します。当サロンの設備や備品を故意に損傷させた場合、修理費用等を請求することがあります。" },
            { title: "第7条（免責事項）", content: "当サロンは、施術による結果に関して、明示的または暗示的な保証を行いません。お客様が当サロンの提供するサービスに関して損害を被った場合でも、当サロンは責任を負いかねます。" },
            { title: "第8条（個人情報の取り扱い）", content: "当サロンは、お客様から提供された個人情報を、本サービスの提供以外の目的で使用することはありません。個人情報は適切に管理し、第三者に提供することはありません。" },
            { title: "第9条（規約の変更）", content: "当サロンは、必要に応じて本規約を変更することができます。変更後の規約は、ウェブサイトに掲載することで効力を発生します。" },
            { title: "第10条（連絡先）", content: "お問い合わせやご意見は、お問い合わせフォームからお願いします。" }
        ]
    }
};

function renderPolicyPage() {
    const path = window.location.pathname.split('/').pop();
    const data = policyData[path];
    const app = document.getElementById('app');

    if (!data) return;

    app.innerHTML = `
        ${renderHeader(path)}
        <main class="pt-24 pb-20 bg-[#fff9f6]">
            <article class="max-w-4xl mx-auto px-6 py-12 bg-white shadow-sm rounded-2xl reveal">
                ${SectionTitle(data.en, data.jp)}
                <div class="space-y-10 mt-12">
                    ${data.sections.map(section => `
                        <section>
                            <h3 class="text-xl font-bold text-[#716329] border-b border-[#b2945e]/20 pb-2 mb-4">${section.title}</h3>
                            <p class="leading-loose text-gray-700 whitespace-pre-wrap">${section.content}</p>
                        </section>
                    `).join('')}
                </div>
                <div class="mt-16 text-center">
                    <a href="/" class="inline-flex items-center gap-2 text-[#b2945e] font-bold hover:underline">
                        ${ICONS.arrowRight} トップページへ戻る
                    </a>
                </div>
            </article>
        </main>
        ${renderFooter(path)}
    `;

    initRevealAnimations();
    initMobileMenu();
}

document.addEventListener('DOMContentLoaded', renderPolicyPage);
