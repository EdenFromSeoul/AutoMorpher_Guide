---
title: "色の自動調整"
slug: "texture-studio-auto-color"
category: "使用ガイド"
description: "別のMeshの色を参照して、選択領域の色を自動で合わせます。"
order: 48
version: "3.5.0"
parent: "texture-studio"
---

Mesh・UVの選択やプレビュー・保存方法は [Texture Studio ガイド](../texture-studio/)で確認できます。

## [1] 基準点の選択と自動調整

**① 基準点** は色を変えるMesh上の点、**② 参照点** は目標の色を取得する別のMesh（Target）上の点です。

①の色を②に合わせて、選択領域を調整します。

<img src="{{BASE_PATH}}/media/texture-studio/auto-color-points-figma-ja.webp" alt="青の①は変換する基準点：UVで選択またはMeshで選択。オレンジの②は目標色の参照点：Target Meshで選択。" width="1440" height="1000" loading="lazy" />

1. 調整するMeshとUV領域を選び、**色の自動調整** を開きます。
2. **1. 調整するMeshの基準点** で **UVで選択** または **Meshで選択** を押します。
   1. UVまたはScene上で色を変える部分の点をクリックします。
3. **2. Targetの参照点** で **Target Meshで選択** を押し、Scene上の別のMeshで、目標の色が分かりやすい点をクリックします。
   1. 透明部分や模様の境界は避けてください。
4. 表示された基準Mesh、UV座標、**目標色** を確認し、調整方式を選びます。
5. **自動調整** を押し、完了後にSceneと結果メッセージを確認します。

<img src="{{BASE_PATH}}/media/texture-studio/outfit-auto-points-annotated-figma-ja.webp" alt="青の①は衣装前面の基準点、オレンジの②は袖の参照点です。UVの青い円は同じ基準点です。" width="2001" height="1400" loading="lazy" />

## [2] 調整方式

| 方式 | 適用範囲 |
| --- | --- |
| **Textureのみ調整** | 選択したUVのTextureを調整し、Materialの色・照明設定は維持します。 |
| **Material設定も合わせる** | 参照Materialの色・照明設定も合わせます。同じShaderまたはlilToon系のShader間で対応し、Material設定はスロット全体に影響します。 |

## [3] 調整例

どちらの例も、袖の色を参照しています。

**衣装の例 — Textureのみ調整**

<img src="{{BASE_PATH}}/media/texture-studio/outfit-auto-annotated-figma-ja.webp" alt="袖のオレンジの②を参照して、衣装前面の青の①を明るく調整した結果。選択した基準点と参照点を表示しています。" width="2001" height="1400" loading="lazy" />

**髪の例 — Material設定も合わせる**

<img src="{{BASE_PATH}}/media/texture-studio/hair-auto-annotated-figma-ja.webp" alt="前髪の青の①を基準点、袖のオレンジの②を参照点にして、4つのヘアMeshを自動調整した結果。" width="2001" height="1400" loading="lazy" />

## [4] 結果の確認

Material設定や照明によってTextureとSceneの色は異なる場合があるため、最終的な見た目はSceneで確認します。
