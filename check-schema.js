/* ============================================================
   モグ卓 地雷チェックシート 共通スキーマ
   check.html（PL入力）と check-kp.html（KP集約）で共有します。
   項目を増減したい場合はこのファイルを編集してください。
   ============================================================ */

/* 5段階スケール（◎〇△××） */
window.JIRAI_SCALE = [
  { v: "love",   sym: "◎",  t: "好き",       love: true },
  { v: "normal", sym: "〇",  t: "普通" },
  { v: "meh",    sym: "△",  t: "好みじゃない" },
  { v: "weak",   sym: "×",  t: "苦手",       attention: true },
  { v: "never",  sym: "××", t: "絶対NG",     attention: true, strong: true }
];
window.JIRAI_SCALE_DEFAULT = "normal"; // 未操作時の既定値（〇）

/* 凡例テキスト */
window.JIRAI_LEGEND = [
  "◎：好き（好き度は◎の数で表せます）",
  "〇：普通",
  "△：好みじゃない",
  "×：苦手",
  "××：何があっても通りたくない"
];

/* セクション定義
   type:"scale"  … ◎〇△×× で回答
   type:"choice" … 項目ごとに固有の選択肢（index が大きいほど配慮寄り）
   choice は attentionFrom 以上の index を「要配慮」とみなす */
window.JIRAI_SECTIONS = [
  {
    id: "theme", title: "シナリオで扱うテーマや描写", type: "scale",
    items: [
      { id: "r18",         label: "R-18描写" },
      { id: "gore",        label: "グロ・ゴアなど猟奇的な描写" },
      { id: "jumpscare",   label: "びっくり演出" },
      { id: "insect",      label: "虫" },
      { id: "crime",       label: "犯罪" },
      { id: "lifeethics",  label: "人の生死や蘇生に関わる倫理的なテーマ" },
      { id: "pregnancy",   label: "妊娠・中絶・未成年の性行為に関わる描写やテーマ" },
      { id: "bully",       label: "いじめ・パワハラ" },
      { id: "suicide",     label: "自殺" },
      { id: "meta",        label: "メタフィクション" },
      { id: "war",         label: "戦争" },
      { id: "realdisease", label: "実在の病気" },
      { id: "fakedisease", label: "架空の病気" },
      { id: "realcase",    label: "実際に起きた事件" },
      { id: "horror",      label: "ホラー（創作）" },
      { id: "urbanhorror", label: "都市伝説などをモチーフとしたホラー" },
      { id: "animaldeath", label: "動物の死亡描写" },
      { id: "animalabuse", label: "動物への虐待描写" },
      { id: "incest",      label: "近親相姦" }
    ]
  },
  {
    id: "npc", title: "NPC・KPCについて", type: "scale",
    items: [
      { id: "npc_kill",      label: "NPCを殺さなければいけない状況" },
      { id: "npc_death",     label: "確定死亡NPC" },
      { id: "npc_many",      label: "大人数のNPC（名前付き5人以上）" },
      { id: "kpc_alt",       label: "別世界軸のKPC（もしくはPC）の存在" },
      { id: "kpc_altdeath",  label: "別世界軸のKPC（もしくはPC）の死亡" },
      { id: "npc_imposter",  label: "NPC本人だと思っていたら別人（成り代わりなど）" },
      { id: "npc_sacrifice", label: "NPC・KPCのためにPCが犠牲になる場面" },
      { id: "npc_denounce",  label: "NPCから強く（特に集団で）糾弾されること" }
    ]
  },
  {
    id: "pvp", title: "PvPについて", type: "scale",
    items: [
      { id: "pvp_verbal",         label: "口論・議論など肉体的被害を伴わないもの" },
      { id: "pvp_physical",       label: "PC同士の肉体的被害を伴う争い" },
      { id: "pvp_decide_noloss",  label: "特定PCに決断権がある場面：ロストが存在しない" },
      { id: "pvp_decide_loss",    label: "特定PCに決断権がある場面：ロストが存在する" }
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
      { id: "emo_in_love",   label: "他者から感情を向けられる：恋愛感情" },
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
    id: "lost", title: "ロスト・欠損について", type: "scale",
    items: [
      { id: "lost_fixed",  label: "確定ロスト" },
      { id: "lost_san0",   label: "SAN0ロスト" },
      { id: "lost_body",   label: "肉体的ロスト" },
      { id: "lost_mid",    label: "途中ロスト（クライマックス前）" },
      { id: "lost_none",   label: "ロストがないシナリオ" },
      { id: "lost_dice",   label: "出目のギミックによるロスト" },
      { id: "lost_choice", label: "自らの選択によるロスト" },
      { id: "lost_known",  label: "ロストと分かっていてその選択をする行為" },
      { id: "lost_limb",   label: "欠損：四肢の欠損" },
      { id: "lost_sense",  label: "欠損：失明・聴覚の喪失" },
      { id: "lost_organ",  label: "欠損：内蔵の喪失や機能障害" }
    ]
  },
  {
    id: "table", title: "その他：同卓時の注意", type: "scale",
    items: [
      { id: "tbl_sexual",  label: "自PC・同卓PCへの性的な発言" },
      { id: "tbl_fixedrp", label: "同卓者による確定RP" },
      { id: "tbl_strong",  label: "極端に強いステータス" },
      { id: "tbl_weak",    label: "極端に弱いステータス" },
      { id: "tbl_unreal",  label: "現実味のない設定" },
      { id: "tbl_crime",   label: "犯罪歴を持つPC" },
      { id: "tbl_age",     label: "極端な年齢のPC（子供・老人）" },
      { id: "tbl_eatweet", label: "卓中の飲食・Twitter" },
      { id: "tbl_longrp",  label: "長めのRP" },
      { id: "tbl_bgm",     label: "苦手BGM" }
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
