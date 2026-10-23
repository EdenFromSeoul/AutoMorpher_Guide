---
title: "色とトーンの調整"
slug: "texture-studio-color-adjustment"
category: "使用ガイド"
description: "色相指定・色相シフトと鮮やかさ・明るさ・コントラスト・ガンマで衣装や髪の色を調整します。"
order: 46
version: "3.5.0"
parent: "texture-studio"
---

Mesh・UVの選択やプレビュー・保存方法は [Texture Studio ガイド](../texture-studio/)で確認できます。

## [1] 色を指定する

1. MeshとUV領域を選びます。
2. **色相指定** を選びます。
3. カラーパレットで色を選ぶか、**HEX** にカラーコードを入力してEnterを押します。
   1. **最近使用した色** から選び直すこともできます。
4. Sceneで結果を見ながらトーンを調整します。例では `#57AAB8` を指定しています。

**衣装の例**

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="変更前のベージュの衣装" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>色相指定後</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-color.webp" alt="青緑色に変更した衣装と色相指定UI" width="1905" height="1065" loading="lazy" /></figure>
</div>

**髪の例 — 複数のMeshを同時調整**

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-before-closeup.webp" alt="変更前の明るいピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>色相指定後</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-color-closeup.webp" alt="前髪や横髪、ツインテールをまとめて青緑色に変更した状態" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Texture表示とMaterialプレビュー

- **Texture 表示**：Material補正前のTextureの色を表示します。
- **Material プレビュー**：対応するlilToonのMain Textureの色補正をパレットとUV画面に反映します。Sceneの照明・影・反射・発光・透明度は反映しません。
- **Texture HEX / 補正 HEX**：選択した基準点の補正前・補正後のカラーコードを表示します。
- **Textureで基準点を選び直す**：パレット表示の基準UVを変更します。編集領域の選択は変わりません。

<img src="{{BASE_PATH}}/media/texture-studio/material-preview.webp" alt="MaterialプレビューのTexture HEX、補正HEX、基準UV設定" width="399" height="665" loading="lazy" />

## [2] 元の色相と明暗を調整する

<strong>色相シフト</strong> タブのスライダーか右側の数値欄で調整します。`0` は補正なしの状態です。

以下は各項目を調整した結果です。

| 項目 | 値を下げると | 値を上げると |
| --- | --- | --- |
| <strong>色相シフト (°)</strong> | 色相環の逆方向へ移動 | 色相環に沿って色相を移動 |
| <strong>鮮やかさ</strong> | 彩度が下がり無彩色に近づく | 元の色がより鮮やかになる |
| <strong>明るさ</strong> | 全体が暗くなる | 全体が明るくなる |
| <strong>コントラスト</strong> | 明暗差が小さくなり柔らかく見える | 明暗差が大きくなりくっきり見える |
| <strong>ガンマ</strong> | 中間トーンが明るくなる | 中間トーンが暗くなる |

### 色相シフト (°)

色相環に沿って色相を変えます。例では `+120°` に設定し、淡いピンクの髪をミント色に変えています。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · すべて0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="色相シフトと4つのトーン調整がすべて0の元のピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>色相シフト +120°</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-hue-shift-closeup.webp" alt="色相シフト +120° — 複数の髪Meshを同時調整" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 鮮やかさ

色の彩度を調整します。例では `+70` に上げ、ピンクをより鮮やかにしています。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · すべて0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="色相シフトと4つのトーン調整がすべて0の元のピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>鮮やかさ +70</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-intensity-closeup.webp" alt="鮮やかさ +70 — 複数の髪Meshを同時調整" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 明るさ

選択範囲全体を明るく、または暗くします。例では `-25` に下げ、明るい部分と影の両方を暗くしています。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · すべて0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="色相シフトと4つのトーン調整がすべて0の元のピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>明るさ −25</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-brightness-closeup.webp" alt="明るさ −25 — 複数の髪Meshを同時調整" width="1905" height="1065" loading="lazy" /></figure>
</div>

### コントラスト

明るい部分と暗い部分の差を調整します。例では `+60` に上げ、髪の明暗差を強調しています。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · すべて0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="色相シフトと4つのトーン調整がすべて0の元のピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>コントラスト +60</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-contrast-closeup.webp" alt="コントラスト +60 — 複数の髪Meshを同時調整" width="1905" height="1065" loading="lazy" /></figure>
</div>

### ガンマ

中間トーンの明るさを調整します。正の値で暗く、負の値で明るくなります。例では `+60` を適用しています。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · すべて0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="色相シフトと4つのトーン調整がすべて0の元のピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>ガンマ +60</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-gamma-closeup.webp" alt="ガンマ +60 — 複数の髪Meshを同時調整" width="1905" height="1065" loading="lazy" /></figure>
</div>
