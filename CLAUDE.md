# 事前チェック（mogu-house-rules）

## キパビューへの反映（必ず）

`check-schema.js`（項目・選択肢・見出し・提出シートの見た目 `JIRAI.sheetHTML`）を変えたら、同じ作業の中でキパビュー（隣の `kp-viewer`）にも反映する。

1. `kp-viewer` で `python tools/sync-jirai.py`（`src/js/096-事前チェックの項目.js` に写す。1 行目は残る）
2. `python tools/build.py`（隣に mogu-house-rules があれば、build.py も自動で写してから組み立てる）
3. キパビューの事前チェックのテスト（`ONLY=事前チェック`）を流す
4. 両方のリポジトリでコミットする

`check.html`・`check-kp.html` だけの変更（ページの見た目・文言）は、キパビューには関係しない。

## 項目を足すとき

新しい項目は `check-schema.js` の `JIRAI_ORDER` の **最後に** 足す（途中に入れると、前に配った PL 用リンクの「聞く・聞かない」がずれる）。
