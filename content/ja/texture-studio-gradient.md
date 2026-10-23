---
title: "グラデーションを作る"
slug: "texture-studio-gradient"
category: "使用ガイド"
description: "UV上に線を引き、衣装や髪にグラデーションを適用します。"
order: 47
version: "3.5.0"
parent: "texture-studio"
---

Mesh・UVの選択やプレビュー・保存方法は [Texture Studio ガイド](../texture-studio/)で確認できます。

## [1] 使い方

<img src="{{BASE_PATH}}/media/texture-studio/gradient-open-palette-figma-ja.webp" alt="① グラデーションタブを選択し、② すぐ下の横長の色のバーをクリックするとGradient Editorのパレットが開きます" width="1440" height="650" loading="lazy" />

1. MeshとUV領域を選び、**グラデーション** タブを開きます。
2. タブのすぐ下にある **横長の色のバー**（②）をクリックして **Gradient Editor** を開きます。色と各色の位置を設定するか、プリセットを選びます。
   - **Preset** の下にある **New** を押すと、現在の配色を保存できます。
3. Gradient Editorを閉じ、**UVで描く** を押します。
4. 右のUV上でグラデーションを描きたい範囲をドラッグします。
5. Sceneで確認し、**描画を終了** を押します。

## [2] 衣装と髪の作例

**衣装の例 — 白・青・赤の縦方向グラデーション**

<img src="{{BASE_PATH}}/media/texture-studio/outfit-gradient.webp" alt="衣装のグラデーションとUV上の始点・終点" width="1905" height="1065" loading="lazy" />

**髪の例 — 白・黄色・ピンクのグラデーション**

<img src="{{BASE_PATH}}/media/texture-studio/hair-gradient.webp" alt="髪のグラデーションとUV上に描いた方向線" width="1905" height="1065" loading="lazy" />

## [3] 確認すること

グラデーションは **UVの位置** を基準に適用されます。髪の根元と毛先がUV上で同じ方向に並んでいないと、部位によって色の分布が異なります。必要なIslandだけを選び、分けて作業してください。

描画中にもう一度ドラッグすると現在の線を変更できます。終了後に再び描画すると、既存の結果に新しいグラデーションが重なります。Escまたは右クリックは進行中のドラッグだけをキャンセルするため、完了した作業は **取り消し** で戻します。
