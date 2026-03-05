const LEVEL1_DATA = {
    id: 1,
    title: "社会構造の基礎",
    icon: "🏗️",
    description: "社会構造とは何か、階層と格差、資本の4形態を学ぶ",
    modules: [
        {
            id: 101,
            title: "社会構造の定義",
            duration: "15分",
            content: `
<h2>社会構造とは何か</h2>
<div class="info-box tip">
<div class="info-box-title">定義</div>
社会構造とは「個人の意思とは独立して存在し、人々の行動や選択を方向づける"見えない骨格"」のことです。
</div>

<p>あなたが何語を話すか、どんな仕事に就けるか、誰と結婚するか、何を「常識」と感じるか――これらすべては社会構造の影響下にあります。</p>

<h2>社会を構成する5つのレイヤー</h2>
<table>
<thead><tr><th>レイヤー</th><th>内容</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>Layer 5</strong></td><td>世界システム（グローバル秩序）</td><td>国家間の力関係、国際機関、貿易体制、軍事同盟</td></tr>
<tr><td><strong>Layer 4</strong></td><td>国家・政治制度</td><td>法律、統治機構、官僚制、民主主義/権威主義</td></tr>
<tr><td><strong>Layer 3</strong></td><td>経済システム</td><td>資本主義、労働市場、企業、金融、所有制度</td></tr>
<tr><td><strong>Layer 2</strong></td><td>社会的制度・中間集団</td><td>教育、宗教、メディア、家族、地域コミュニティ</td></tr>
<tr><td><strong>Layer 1</strong></td><td>個人・アイデンティティ</td><td>階層、ジェンダー、民族、文化資本、社会関係資本</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">重要ポイント</div>
上のレイヤーが下のレイヤーを規定し、下のレイヤーが上のレイヤーを再生産します。個人は「自由に選択している」と感じますが、その選択肢自体が構造によって用意されているのです。
</div>

<h2>「魚は水を意識しない」問題</h2>
<p>「魚にとって水は"存在しないもの"である。なぜなら、それ以外の環境を知らないから。」</p>
<p>同様に、日本人は「年功序列」が当然だと思っていますが、アメリカ人には奇異に映ります。先進国の人は「毎日食事できる」のが普通だと感じますが、世界の8億人は飢餓状態にあります。男性は「ガラスの天井」の存在に気づきにくいのです。</p>

<div class="info-box success">
<div class="info-box-title">社会構造を学ぶとは</div>
「自分が泳いでいる水の正体」に気づくことです。
</div>`,
            quiz: [
                { id: "q101_1", type: "choice", question: "社会構造の定義として最も適切なものはどれですか？", options: ["個人が自由に作り変えられるルール", "個人の意思とは独立して存在し、行動や選択を方向づける見えない骨格", "法律と制度のみを指す言葉", "経済システムの別名"], answer: 1, explanation: "社会構造とは個人の意思とは独立して存在し、人々の行動や選択を方向づける「見えない骨格」のことです。" },
                { id: "q101_2", type: "choice", question: "5層モデルにおいて、最上位（Layer 5）に位置するのは何ですか？", options: ["個人・アイデンティティ", "経済システム", "世界システム（グローバル秩序）", "国家・政治制度"], answer: 2, explanation: "Layer 5は世界システム（グローバル秩序）で、国家間の力関係、国際機関、貿易体制、軍事同盟などが含まれます。" },
                { id: "q101_3", type: "choice", question: "「魚は水を意識しない」問題が示す意味として正しいのはどれですか？", options: ["魚は知能が低い", "当事者は自分を取り巻く構造に気づきにくい", "水中の生物は環境に適応している", "海外旅行の重要性"], answer: 1, explanation: "これは「自分にとって当たり前の環境（構造）は、それ以外の環境を知らなければ見えない」という比喩です。" },
                { id: "q101_4", type: "choice", question: "5層モデルで「教育、宗教、メディア、家族」が含まれるのはどのレイヤーですか？", options: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], answer: 1, explanation: "Layer 2は「社会的制度・中間集団」で、教育、宗教、メディア、家族、地域コミュニティが含まれます。" },
                { id: "q101_5", type: "fill", question: "社会を構成する5つのレイヤーのうち、Layer 3 は「____システム」と呼ばれます。", answer: "経済", explanation: "Layer 3は経済システムで、資本主義、労働市場、企業、金融、所有制度が含まれます。" }
            ]
        },
        {
            id: 102,
            title: "階層と格差",
            duration: "20分",
            content: `
<h2>社会階層の古典的モデル</h2>

<h3>マルクスの二項対立モデル</h3>
<table>
<thead><tr><th>階級</th><th>特徴</th></tr></thead>
<tbody>
<tr><td><strong>ブルジョワジー（資本家階級）</strong></td><td>生産手段（資本）を所有する者。工場、土地、株式など。</td></tr>
<tr><td><strong>プロレタリアート（労働者階級）</strong></td><td>労働力を売るしかない者。賃金で生活する。</td></tr>
</tbody>
</table>
<p>マルクスの主張：「資本家は労働者が生み出す価値の一部を搾取する。この構造は資本主義が続く限り変わらない。」</p>

<h3>ウェーバーの三次元モデル</h3>
<p>ウェーバーは階層が「経済」だけでは決まらないと主張しました。</p>
<table>
<thead><tr><th>次元</th><th>内容</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>① 階級（Class）</strong></td><td>経済的な地位（所得・財産）</td><td>市場での競争力</td></tr>
<tr><td><strong>② 身分（Status）</strong></td><td>社会的な威信・名誉</td><td>医者 ＞ タクシー運転手（所得が同じでも）</td></tr>
<tr><td><strong>③ 権力（Power）</strong></td><td>他者の行動を左右する力</td><td>政治家、官僚、経営者</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">立体的な理解</div>
金持ちだが社会的威信が低い（成金）、威信は高いが経済力がない（没落貴族、大学教授）など、階層は複数の軸で立体的に理解する必要があります。
</div>

<h2>現代日本の階層構造</h2>
<table>
<thead><tr><th>階層</th><th>資産基準</th><th>世帯数</th><th>割合</th></tr></thead>
<tbody>
<tr><td>超富裕層</td><td>5億円〜</td><td>約9万世帯</td><td>0.2%</td></tr>
<tr><td>富裕層</td><td>1〜5億円</td><td>約140万世帯</td><td>2.6%</td></tr>
<tr><td>準富裕層</td><td>5,000万〜1億円</td><td>約325万世帯</td><td>6.0%</td></tr>
<tr><td>アッパーマス層</td><td>3,000〜5,000万</td><td>約726万世帯</td><td>13.4%</td></tr>
<tr><td>マス層</td><td>3,000万円未満</td><td>約4,213万世帯</td><td>77.8%</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">注目データ</div>
上位2.8%が日本の個人金融資産の約25%を保有しています。「一億総中流」は過去の話で、二極化が進行しています。
</div>

<h2>格差を測る指標：ジニ係数</h2>
<p>ジニ係数は不平等の温度計です。0.0が完全平等、1.0が完全不平等を表します。</p>
<table>
<thead><tr><th>国・地域</th><th>ジニ係数</th></tr></thead>
<tbody>
<tr><td>北欧諸国（スウェーデン等）</td><td>約0.25</td></tr>
<tr><td>ドイツ、フランス</td><td>約0.30</td></tr>
<tr><td><strong>日本（再分配後）</strong></td><td><strong>約0.33</strong></td></tr>
<tr><td>アメリカ</td><td>約0.39</td></tr>
<tr><td>中国</td><td>約0.45</td></tr>
<tr><td>ブラジル、南アフリカ</td><td>0.50〜</td></tr>
</tbody>
</table>

<div class="info-box danger">
<div class="info-box-title">日本の特殊性</div>
日本は「再分配前」のジニ係数は0.57と先進国で最悪水準です。社会保障と税制で0.33まで圧縮していますが、高齢化による年金依存がジニ係数を押し上げています。
</div>`,
            quiz: [
                { id: "q102_1", type: "choice", question: "マルクスの階級モデルで「生産手段を所有する者」はどれですか？", options: ["プロレタリアート", "ブルジョワジー", "インテリゲンチア", "プチブルジョワジー"], answer: 1, explanation: "ブルジョワジー（資本家階級）は工場、土地、株式などの生産手段を所有する階級です。" },
                { id: "q102_2", type: "choice", question: "ウェーバーの三次元モデルに含まれないのはどれですか？", options: ["階級（Class）", "身分（Status）", "権力（Power）", "文化（Culture）"], answer: 3, explanation: "ウェーバーの三次元は「階級（Class）」「身分（Status）」「権力（Power）」です。文化は含まれません。" },
                { id: "q102_3", type: "choice", question: "日本の所得階層で最も割合が大きいのはどの層ですか？", options: ["富裕層", "準富裕層", "アッパーマス層", "マス層"], answer: 3, explanation: "マス層（資産3,000万円未満）が約77.8%と最大の割合を占めます。" },
                { id: "q102_4", type: "choice", question: "ジニ係数が0.0の場合、それは何を意味しますか？", options: ["完全不平等", "完全平等", "中程度の格差", "計測不能"], answer: 1, explanation: "ジニ係数0.0は全員が同じ所得の完全平等状態を意味します。" },
                { id: "q102_5", type: "fill", question: "日本の再分配前のジニ係数は約____で先進国最悪水準です。", answer: "0.57", explanation: "日本は再分配前のジニ係数が0.57と非常に高く、社会保障と税制で0.33まで圧縮しています。" }
            ]
        },
        {
            id: 103,
            title: "資本の4形態",
            duration: "20分",
            content: `
<h2>ブルデューの資本理論</h2>
<p>社会学者ピエール・ブルデューは、「金」だけが資本ではないと指摘し、4つの資本を定義しました。</p>

<table>
<thead><tr><th>資本の種類</th><th>内容</th><th>具体例</th></tr></thead>
<tbody>
<tr><td><strong>① 経済資本</strong></td><td>金銭、不動産、株式、事業資産</td><td>最もわかりやすい「金持ち」の指標</td></tr>
<tr><td><strong>② 文化資本</strong></td><td>知識、教養、学歴、言葉遣い、振る舞い、美的感覚</td><td>「育ちの良さ」として可視化される</td></tr>
<tr><td><strong>③ 社会関係資本</strong></td><td>人脈、コネクション、信頼関係のネットワーク</td><td>「誰を知っているか」が機会を決める</td></tr>
<tr><td><strong>④ 象徴資本</strong></td><td>名誉、評判、正統性、ブランド</td><td>他の資本が「認められた」状態</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">資本の変換</div>
<ul>
<li>経済資本 → 文化資本（子供を私立校に入れる）</li>
<li>文化資本 → 社会関係資本（同窓ネットワーク）</li>
<li>社会関係資本 → 経済資本（コネで仕事を得る）</li>
<li>経済資本 → 象徴資本（寄付で名誉を得る）</li>
</ul>
</div>

<h2>文化資本の3つの形態</h2>
<table>
<thead><tr><th>形態</th><th>内容</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>身体化された文化資本</strong></td><td>話し方、立ち居振る舞い</td><td>教養ある話し方、マナー</td></tr>
<tr><td><strong>客体化された文化資本</strong></td><td>書籍、美術品、楽器</td><td>蔵書、絵画コレクション</td></tr>
<tr><td><strong>制度化された文化資本</strong></td><td>学歴、資格、肩書き</td><td>東大卒、医師免許</td></tr>
</tbody>
</table>

<h2>文化資本の「見えない伝達」</h2>
<table>
<thead><tr><th>項目</th><th>文化資本・高の家庭</th><th>文化資本・低の家庭</th></tr></thead>
<tbody>
<tr><td>蔵書</td><td>家に本棚1,000冊</td><td>家に本がほとんどない</td></tr>
<tr><td>食事時</td><td>夕食時に時事問題を議論</td><td>テレビを見ながら食事</td></tr>
<tr><td>休日</td><td>美術館・博物館に定期的に</td><td>ショッピングモール</td></tr>
<tr><td>教育観</td><td>親が「大学は当然」と語る</td><td>親が「学歴より根性」と語る</td></tr>
<tr><td>習い事</td><td>ピアノ、水泳、英語</td><td>特になし</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">問いかけ</div>
子供が18歳になった時点で、「選択肢の数」が根本的に異なっています。これは「個人の努力」の問題なのか？ それとも「構造」の問題なのか？
</div>

<h2>社会関係資本 ── 「弱い紐帯の強さ」</h2>
<p>社会学者マーク・グラノヴェッターは「弱い紐帯（知り合い程度の関係）」の重要性を指摘しました。</p>
<ul>
<li><strong>強い紐帯</strong>（親友・家族）：同じ情報、同じ価値観を共有</li>
<li><strong>弱い紐帯</strong>（知り合い・友人の友人）：異なる世界の情報が流れ込む</li>
</ul>
<div class="info-box success">
<div class="info-box-title">注目</div>
<ul>
<li>転職の機会は「親友」より「知り合い程度の人」から得られる</li>
<li>イノベーションは「異質なネットワーク」の交差点で生まれる</li>
<li>名門校の真の価値 ＝ 教育内容 ＜ 卒業生ネットワーク</li>
</ul>
</div>`,
            quiz: [
                { id: "q103_1", type: "choice", question: "ブルデューが定義した4つの資本に含まれないのはどれですか？", options: ["経済資本", "文化資本", "技術資本", "象徴資本"], answer: 2, explanation: "ブルデューの4つの資本は「経済資本」「文化資本」「社会関係資本」「象徴資本」です。技術資本は含まれません。" },
                { id: "q103_2", type: "choice", question: "「学歴」は文化資本の3形態のうち、どれに分類されますか？", options: ["身体化された文化資本", "客体化された文化資本", "制度化された文化資本", "象徴的な文化資本"], answer: 2, explanation: "学歴、資格、肩書きは「制度化された文化資本」に分類されます。" },
                { id: "q103_3", type: "choice", question: "グラノヴェッターの「弱い紐帯の強さ」理論で、転職の機会をもたらしやすいのはどちらですか？", options: ["親友や家族（強い紐帯）", "知り合い程度の人（弱い紐帯）", "どちらも同じ", "どちらでもない"], answer: 1, explanation: "弱い紐帯（知り合い程度の関係）は異なる世界の情報をもたらし、転職の機会は親友より知り合い程度の人から得られることが多いです。" },
                { id: "q103_4", type: "choice", question: "「子供を私立校に入れる」という行為は、どの資本からどの資本への変換ですか？", options: ["文化資本から経済資本", "経済資本から文化資本", "社会関係資本から象徴資本", "象徴資本から経済資本"], answer: 1, explanation: "お金（経済資本）を使って教育機会（文化資本）を得ることは、経済資本から文化資本への変換です。" },
                { id: "q103_5", type: "fill", question: "ブルデューの4つの資本のうち、人脈やコネクション、信頼関係のネットワークを指すのは「____資本」です。", answer: "社会関係", explanation: "社会関係資本（Social Capital）は、人脈、コネクション、信頼関係のネットワークを指します。" }
            ]
        }
    ]
};
