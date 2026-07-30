/* ============================================================
   モグ卓 地雷チェックシート 共通スキーマ
   check.html（PL入力）と check-kp.html（KP集約）で共有します。
   項目を増減したい場合はこのファイルを編集してください。
   ============================================================ */

/* 5段階スケール（◎〇△××） */
window.JIRAI_SCALE = [
  { v: "love",   sym: "◎",  t: "好き",       love: true },
  { v: "normal", sym: "〇",  t: "普通" },
  { v: "meh",    sym: "△",  t: "微妙" },
  { v: "weak",   sym: "×",  t: "苦手",       attention: true },
  { v: "never",  sym: "××", t: "絶対NG",     attention: true, strong: true }
];
window.JIRAI_SCALE_DEFAULT = "normal"; // 未操作時の既定値（〇）

/* 凡例テキスト */
window.JIRAI_LEGEND = [
  "◎：好き（好き度は◎の数で表せます）",
  "〇：普通",
  "△：微妙",
  "×：苦手",
  "××：何があっても通りたくない"
];

/* セクション定義
   type:"scale"  … ◎〇△×× で回答
   type:"choice" … 項目ごとに固有の選択肢（index が大きいほど配慮寄り）
   choice は attentionFrom 以上の index を「要配慮」とみなす */
window.JIRAI_SECTIONS = [
  {
    id: "trend", title: "シナリオの傾向・展開", type: "scale",
    items: [
      { id: "tr_emo",       label: "エモ重視（エモシ）" },
      { id: "tr_romance",   label: "恋愛要素が多い" },
      { id: "tr_ntr",       label: "NTR・当て馬系の展開" },
      { id: "tr_battle",    label: "戦闘重視" },
      { id: "tr_pvp",       label: "PvP前提のシナリオ" },
      { id: "tr_gag",       label: "ギャグ寄り" },
      { id: "tr_many",      label: "大人数卓" },
      { id: "tr_uchiyoso",  label: "うちよそ（既存PC/KPCとの親密な関係）" },
      { id: "tr_realint",   label: "リアルINTが必須の謎解き" },
      { id: "tr_mindread",  label: "作者の脳内当てが必要な謎解き" },
      { id: "tr_trick",     label: "叙述トリックなど、PLに罠を仕掛ける展開" },
      { id: "tr_adlib",     label: "KPのアドリブ依存が大きい（描写例が少ない）" }
    ]
  },
  {
    id: "world", title: "シナリオ設定・世界観", type: "scale",
    items: [
      { id: "w_mythos",     label: "神話的事象の独自解釈" },
      { id: "w_nyaru",      label: "雑なニャルラトホテプ黒幕設定" },
      { id: "w_othermyth",  label: "クトゥルフ以外の神話等がモチーフ" },
      { id: "w_lesscoc",    label: "極端にクトゥルフ要素が少ない" },
      { id: "w_canon",      label: "アーカム等、原作準拠設定" },
      { id: "w_child",      label: "学生・子供PCシナリオ" },
      { id: "w_police",     label: "警察・刑事PCシナリオ" },
      { id: "w_yakuza",     label: "ヤクザ・マフィアPCシナリオ" },
      { id: "w_erajp",      label: "時代物・日本（大正等）" },
      { id: "w_eraworld",   label: "時代物・海外（ガスライト等）" },
      { id: "w_horror",     label: "ホラー・怪談・都市伝説メイン" },
      { id: "w_fantasy",    label: "ファンタジー" },
      { id: "w_steampunk",  label: "スチームパンク" },
      { id: "w_sf",         label: "SF設定" },
      { id: "w_future",     label: "未来・タイムスリップ" },
      { id: "w_postworld",  label: "世界滅亡後" },
      { id: "w_nichiasa",   label: "ニチアサ風" },
      { id: "w_parallel",   label: "パラレルワールド" },
      { id: "w_fakeworld",  label: "世界観・時代背景が実は事前情報と違う（幻覚/妄想・バーチャル等）" },
      { id: "meta_contained", label: "メタ：作中で完結（劇中劇・夢/VRなど虚構内の虚構）" },
      { id: "meta_charaware", label: "メタ：PC・NPCが物語（シナリオ）の存在だと気づく" },
      { id: "meta_pl",        label: "メタ：PL本人に語りかける（第四の壁を破る）" },
      { id: "w_original",   label: "原作・元ネタがある（小説・映画・漫画・SCP等）" }
    ]
  },
  {
    id: "theme", title: "シナリオで扱うテーマや描写", type: "scale",
    items: [
      { id: "gore",        label: "R-18G（グロ・ゴアなど猟奇的な描写）" },
      { id: "horror",      label: "ホラー（創作）" },
      { id: "urbanhorror", label: "都市伝説などをモチーフとしたホラー" },
      { id: "jumpscare",   label: "ジャンプスケア・びっくり演出" },
      { id: "cannibal",    label: "カニバリズム" },
      { id: "vomit",       label: "嘔吐・排泄の描写" },
      { id: "cluster",     label: "集合体（トライポフォビア）" },
      { id: "insect",      label: "昆虫(蜂・蜘蛛など)・爬虫類（蛇など）" },
      { id: "confinement", label: "閉所に閉じ込められる" },
      { id: "r18",         label: "R-18描写" },
      { id: "sexviolence", label: "性暴力・強姦などの描写" },
      { id: "incest",      label: "近親相姦" },
      { id: "pregnancy",   label: "妊娠・中絶・未成年の性行為に関わる描写やテーマ" },
      { id: "gendershift", label: "性転換" },
      { id: "fetish",      label: "特殊性癖・異常性癖" },
      { id: "lowneta",     label: "下ネタ" },
      { id: "crime",       label: "犯罪" },
      { id: "minorcruel",  label: "未成年キャラへの残酷・犯罪描写" },
      { id: "bully",       label: "いじめ・パワハラ" },
      { id: "animalabuse", label: "動物への虐待描写" },
      { id: "animaldeath", label: "動物の死亡描写" },
      { id: "drug",        label: "薬物" },
      { id: "suicide",     label: "自殺" },
      { id: "mental",      label: "精神疾患・発達障害の描写" },
      { id: "lifeethics",  label: "人の生死や蘇生に関わる倫理的なテーマ" },
      { id: "war",         label: "戦争" },
      { id: "disaster",    label: "自然災害" },
      { id: "gendernorm",  label: "男尊女卑・女尊男卑" },
      { id: "realcase",    label: "実際に起きた事件" },
      { id: "realperson",  label: "実在の人物（偉人・犯罪者など）" },
      { id: "realreligion",label: "実在の宗教" },
      { id: "realdisease", label: "実在の病気" },
      { id: "fakedisease", label: "架空の病気" }
    ]
  },
  {
    id: "ho", title: "HOなどによる設定介入", type: "scale",
    items: [
      { id: "ho_pre_crime",  label: "事前HOの設定介入：犯罪歴" },
      { id: "ho_pre_blood",  label: "事前HOの設定介入：血縁関係" },
      { id: "ho_pre_dear",   label: "事前HOの設定介入：大切な人" },
      { id: "ho_mid_crime",  label: "シナリオ中に発覚するHO：犯罪歴" },
      { id: "ho_mid_blood",  label: "シナリオ中に発覚するHO：血縁関係" },
      { id: "ho_mid_dear",   label: "シナリオ中に発覚するHO：大切な人" },
      { id: "emo_in_obsess", label: "他者から感情を向けられる：過度の執着・恨み" },
      { id: "emo_in_crime",  label: "他者から感情を向けられる：監禁などの犯罪手段" },
      { id: "emo_out_love",  label: "自PCが感情を向ける：恋愛感情" },
      { id: "emo_out_obsess",label: "自PCが感情を向ける：過度の執着・恨み" },
      { id: "emo_out_crime", label: "自PCが感情を向ける：監禁などの犯罪手段" },
      { id: "fixed_dice",    label: "確定描写：出目によるもの" },
      { id: "fixed_set",     label: "確定描写：出目によらず決められているもの" }
    ]
  },
  {
    id: "secretho", title: "秘匿HOの内容・処理", type: "scale",
    items: [
      { id: "sh_amnesia",   label: "PCが記憶喪失である" },
      { id: "sh_falsemem",  label: "PCが記憶を改ざんされている/している（自覚なし）" },
      { id: "sh_hostile",   label: "他PCへの敵意を抱いている" },
      { id: "sh_lowfree",   label: "極端に自由度の低いHO" },
      { id: "sh_highfree",  label: "極端に自由度の高いHO" },
      { id: "sh_sex",       label: "秘匿内で性別が指定されている" },
      { id: "sh_age",       label: "秘匿内で年齢が指定されている" },
      { id: "sh_look",      label: "秘匿内で外見が指定されている" },
      { id: "sh_character", label: "秘匿内で性格が指定されている" },
      { id: "sh_addlater",  label: "秘匿情報が後から追加配布される" },
      { id: "sh_dummy",     label: "最初に配布される秘匿情報がダミー（嘘）である" },
      { id: "sh_reveal",    label: "秘匿を公開するタイミングをシナリオで指定される" },
      { id: "sh_surprise",  label: "秘匿と公言されていないシナリオで突然秘匿が飛んでくる" },
      { id: "sh_common",    label: "全員がほぼ共通の秘匿内容" },
      { id: "sh_unequal",   label: "特定のHOのみ情報量や行動が多い" },
      { id: "sh_pivotal",   label: "特定のHOの行動が全体のロストやED分岐に直結する" },
      { id: "sh_psycho",    label: "PCからPCへの心理学" },
      { id: "sh_knownby",   label: "自分の秘匿内容を事前に把握している別PCが存在する" },
      { id: "sh_guess",     label: "他PCの秘匿を当てる必要がある" },
      { id: "sh_hide",      label: "他PCにバレてはいけない秘匿がある" },
      { id: "sh_mastermind",label: "秘匿と公言されていないシナリオで、PCの中に黒幕が存在する" },
      { id: "sh_special",   label: "秘匿中に特殊な能力・技能を使う場面が用意されている" }
    ]
  },
  {
    id: "npc", title: "NPC・KPCについて", type: "scale",
    items: [
      { id: "npc_death",     label: "確定死亡NPC・KPC" },
      { id: "npc_wasteddeath", label: "演出のためだけにNPC・KPCが死ぬ" },
      { id: "npc_kill",      label: "NPC・KPCを殺さなければいけない状況" },
      { id: "npc_sacrifice", label: "NPC・KPCのためにPCが犠牲になる場面" },
      { id: "npc_many",      label: "大人数のNPC・KPC（名前付き5人以上）" },
      { id: "kpc_alt",       label: "別世界軸のKPC（もしくはPC）の存在" },
      { id: "npc_imposter",  label: "NPC・KPC本人だと思っていたら別人（成り代わりなど）" },
      { id: "npc_denounce",  label: "NPC・KPCから強く（特に集団で）糾弾されること" },
      { id: "npc_overshadow",  label: "NPC・KPCが活躍しすぎてPCの存在意義が薄れる" }
    ]
  },
  {
    id: "pcreceive", title: "PCが受ける行動・設定", type: "scale",
    items: [
      { id: "rcv_bully",    label: "PCがいじめを受ける" },
      { id: "rcv_abuse",    label: "PCが虐待を受ける" },
      { id: "rcv_harass",   label: "PCがハラスメント行為を受ける" },
      { id: "rcv_torture",  label: "PCが拷問を受ける" },
      { id: "rcv_sexviol",  label: "PCが性的な暴力を受ける" },
      { id: "rcv_petcruel", label: "PCのペットに対する残虐描写が入る" },
      { id: "rcv_denounced",label: "PCが他PCから糾弾される" },
      { id: "rcv_ganged",   label: "PC内で1対多・ハブにされる展開がある" },
      { id: "rcv_amnesia",  label: "PCが記憶を失う" },
      { id: "rcv_love_nf",  label: "異性NPCに恋愛感情を持たれる" },
      { id: "rcv_love_pf",  label: "異性PCに恋愛感情を持たれる" },
      { id: "rcv_love_ns",  label: "同性NPCに恋愛感情を持たれる" },
      { id: "rcv_love_ps",  label: "同性PCに恋愛感情を持たれる" }
    ]
  },
  {
    id: "pvp", title: "PvPについて", type: "scale",
    items: [
      { id: "pvp_verbal",         label: "口論・議論など肉体的被害を伴わないもの" },
      { id: "pvp_physical",       label: "PC同士の肉体的被害を伴う争い" },
      { id: "pvp_decide",         label: "特定PCに決断権がある場面" },
      { id: "pvp_forced",         label: "洗脳・発狂などPCの意思によらないPvP" }
    ]
  },
  {
    id: "forcedrp", title: "強制されるRP（自主的ではなく強制される場合）", type: "scale",
    items: [
      { id: "frp_child",    label: "子供RP" },
      { id: "frp_hetero",   label: "異性RP" },
      { id: "frp_emotion",  label: "感情的になるRP" },
      { id: "frp_emo",      label: "エモRP" },
      { id: "frp_farewell", label: "死ぬ前の別れの言葉RP" },
      { id: "frp_insane",   label: "発狂RP" },
      { id: "frp_psycho",   label: "サイコパスRP" },
      { id: "frp_violence", label: "暴力・虐待・いじめRP" },
      { id: "frp_persuade", label: "PC/NPCへの説得RP" },
      { id: "frp_love_h",   label: "恋愛RP（異性）" },
      { id: "frp_love_s",   label: "恋愛RP（同性）" },
      { id: "frp_sensitive",label: "センシティブRP" }
    ]
  },
  {
    id: "lost", title: "ロスト・欠損について", type: "scale",
    items: [
      { id: "lost_none",   label: "ロストがないシナリオ" },
      { id: "lost_fixed",  label: "確定ロスト" },
      { id: "lost_high",       label: "序盤・中盤から死にやすい高ロスト" },
      { id: "lost_instadeath", label: "ヒントや忠告のない即死トラップ" },
      { id: "lost_san0",   label: "SAN0ロスト" },
      { id: "lost_body",   label: "肉体的ロスト" },
      { id: "lost_mid",    label: "途中ロスト（クライマックス前）" },
      { id: "lost_dice",   label: "出目のギミックによるロスト" },
      { id: "lost_choice", label: "自らの選択によるロスト" },
      { id: "lost_known",  label: "ロストと分かっていてその選択をする行為" },
      { id: "lost_aftereffect",label: "確定でPCに余命・重い後遺症が残る" },
      { id: "lost_limb",   label: "欠損：四肢の欠損" },
      { id: "lost_sense",  label: "欠損：失明・聴覚の喪失" },
      { id: "lost_organ",  label: "欠損：内蔵の喪失や機能障害" }
    ]
  },
  {
    id: "ending", title: "ED・分岐について", type: "scale",
    items: [
      { id: "ed_bad",       label: "バッドエンド" },
      { id: "ed_merrybad",  label: "メリーバッドエンド" },
      { id: "ed_multibad",  label: "マルチバッドエンド" },
      { id: "ed_bitter",    label: "後味の悪いED" },
      { id: "ed_forcedhappy", label: "ご都合ハッピーエンド" },
      { id: "ed_dream",     label: "夢オチ" },
      { id: "ed_sequel",    label: "続編を匂わせるオチ" },
      { id: "ed_meta",      label: "メタフィクションが関わるED" },
      { id: "ed_timeback",  label: "時間遡行を行う" },
      { id: "ed_parallel",  label: "パラレルワールド・別世界線へ行く" },
      { id: "ed_memloss",   label: "PC/NPCの記憶が消える" },
      { id: "ed_epilogue",  label: "PLがエピローグを考えて自由描写" },
      { id: "ed_norp",      label: "RP無しで描写のみのED" },
      { id: "ed_sparse",    label: "極端に描写の少ないED" },
      { id: "ed_single",    label: "1つしか用意されていないED" },
      { id: "ed_inconsistent", label: "整合性の取れない分岐条件・ED" },
      { id: "ed_point",     label: "ポイント制でのED分岐" },
      { id: "ed_multidice", label: "複数のダイスロールでのED分岐" },
      { id: "ed_onedice",   label: "1回のダイスロールでのED分岐" },
      { id: "ed_choice",    label: "探索者の決断によるED分岐" },
      { id: "ed_kp",        label: "KPの裁量による分岐（NPCへの説得や好感度等）" }
    ]
  },
  {
    id: "table", title: "その他：同卓時の注意", type: "scale",
    items: [
      { id: "tbl_sexual",  label: "自PC・同卓PCへの性的な発言" },
      { id: "tbl_fixedrp", label: "同卓者による確定RP" },
      { id: "tbl_pldiscuss", label: "PL発言（メタ相談）の多用" },
      { id: "tbl_longrp",  label: "長めのRP" },
      { id: "tbl_strong",  label: "極端に強いステータス" },
      { id: "tbl_weak",    label: "極端に弱いステータス" },
      { id: "tbl_unreal",  label: "現実味のない設定" },
      { id: "tbl_crime",   label: "犯罪歴を持つ同卓PC" },
      { id: "tbl_age",     label: "極端な年齢の同卓PC（子供・老人）" },
      { id: "tbl_eatweet", label: "卓中の飲食・Twitter" },
      { id: "tbl_bgm",     label: "苦手BGM" },
      { id: "tbl_record",  label: "セッションの録画・配信・見学" }
    ]
  },
  {
    id: "media", title: "画像・ログの取り扱い", type: "choice", attentionFrom: 2,
    items: [
      { id: "media_art", label: "立ち絵・作成画像の保存およびSNS投稿",
        options: ["自由にしてOK", "事後報告があれば可", "事前相談を希望", "個人保存のみ可（投稿不可）"] },
      { id: "media_log", label: "ログ・スクショを第三者に見せる（SNS含む）",
        options: ["問題なし", "報告があれば可", "内容を伏せて相談", "完全非公開を希望"] }
    ]
  },
  {
    id: "mastering", title: "演出・マスタリングへの同意", type: "choice", attentionFrom: 2,
    items: [
      { id: "mst_gmset", label: "GMによるPC詳細設定・関係性の付与",
        options: ["お任せしてOK", "相談があれば可", "PL側での設定を優先"] },
      { id: "mst_norp", label: "結果が変わらない展開でのロールプレイ要求",
        options: ["歓迎（重視したい）", "許容（適度であれば）", "早期の切り上げを希望"] },
      { id: "mst_negative", label: "ネガティブな演出（暴言・家庭事情の深掘り等）への耐性",
        options: ["問題なし", "相談があれば可", "避けたい"] }
    ]
  }
];

/* 自由記入欄 */
window.JIRAI_FREE = [
  { id: "free_dislike", label: "苦手なことメモ",       ph: "上のカテゴリで拾いきれない苦手や、補足したいこと" },
  { id: "free_notice",  label: "お知らせしたい事項",   ph: "自分がやりがちなこと、取り扱い注意、事前に伝えたいこと" },
  { id: "free_likes",   label: "好きな要素など",       ph: "こういうPC・RP・描写が来ると嬉しい、という要素" }
];

/* ---- 共有ヘルパ ---- */
window.JIRAI = {
  scaleMap: function () {
    var m = {}; window.JIRAI_SCALE.forEach(function (s) { m[s.v] = s; }); return m;
  },
  // 全 scale 項目をフラットに
  scaleItems: function () {
    var out = [];
    window.JIRAI_SECTIONS.forEach(function (sec) {
      if (sec.type === "scale") sec.items.forEach(function (it) { out.push({ sec: sec, item: it }); });
    });
    return out;
  },
  esc: function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
};
