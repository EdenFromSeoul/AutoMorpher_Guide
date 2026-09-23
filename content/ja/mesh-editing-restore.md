---
title: "復元ブラシ"
slug: "mesh-editing-restore"
category: "使用ガイド"
description: "BlendShapeに記録された形状を基準に、変形した部分を復元"
order: 32
version: "3.4.1"
parent: "mesh-editing"
---

<strong>復元ブラシ(Restore Brush)</strong>は、元の形状を記録したBlendShapeを参照して変形した部分を復元します。Main Meshで使用できるBlendShapeを指定してください。

<figure>
  <video controls preload="metadata" width="870" height="754" style="height: auto; aspect-ratio: 870 / 754;" playsinline aria-label="復元ブラシの使用例"><source src="{{BASE_PATH}}/media/mesh-studio/restore.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/restore.mp4">動画ファイルを開く</a></video>
  <figcaption>復元ブラシの使用例</figcaption>
</figure>

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/restore-before.png" alt="復元前" width="868" height="738" loading="lazy" /><figcaption>復元前</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/restore-after.png" alt="復元後" width="838" height="744" loading="lazy" /><figcaption>復元後</figcaption></figure>
</div>

<img src="{{BASE_PATH}}/media/mesh-studio/restore-settings.png" alt="BlendShape、復元基準、復元モードの設定" width="525" height="234" loading="lazy" />

## [1] 使い方

1. <strong>ブレンドシェイプ(BlendShape)</strong>で復元の基準を選びます。
2. <strong>復元基準(Restore Reference)</strong>を`0`または`100`に設定します。
3. <strong>復元モード(Mode)</strong>を選びます。
4. 半径と強度を調整し、Main Meshの上を左ドラッグします。

## [2] ブラシ設定

| オプション | 説明 |
| --- | --- |
| <strong>ブラシ半径(Brush Radius)</strong> | カーソルの周囲で形状を復元する範囲を調整します。 |
| <strong>ブラシ強度(Brush Strength)</strong> | 選択した復元モードとBlendShapeの基準形状に沿って復元する強さを調整します。弱い強度で何度かドラッグすると、変化を少しずつ確認できます。 |
| <strong>対称(Symmetry)</strong> | X / Y / Zから使用する軸を選ぶと、Root Objectを基準に反対側にも操作を適用します。複数の軸を同時に選択できます。 |

| 操作 | 動作 |
| --- | --- |
| <strong>Shift + マウスホイール</strong> | ブラシ半径を調整 |
| <strong>Ctrl + Shift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Caps Lockがオンの状態でShift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Esc</strong> | 操作中のブラシストロークを取り消す |

ショートカットはScene View上で操作します。macOSではCtrlの代わりにCommandを使用できます。

## [3] 復元基準

| 復元基準 | 使用する形状 |
| --- | --- |
| <strong>0</strong> | 選択したBlendShapeの値が0の形状 |
| <strong>100</strong> | 選択したBlendShapeの値が100の形状 |

基準の作成時には、他のBlendShapeは0として計算されます。Inspectorで複数のBlendShapeを組み合わせた現在の表示とは異なる場合があるため、復元したい形状がどの値に記録されているか確認してください。

自動選択では<strong>MF_Originがあれば100</strong>、なければ<strong>Kisetter_Fitを0</strong>で選択します。どちらもない場合は手動で選んでください。別のBlendShapeを手動で選ぶ際は、復元基準も確認してください。

## [4] 復元モード

| 復元モード | 説明 |
| --- | --- |
| <strong>原形復元(Original Shape Restore)</strong> | 基準と現在の形状の差を、周囲の頂点に合わせて滑らかに補正します。 |
| <strong>形状復元(Shape Restore)</strong> | 基準の形状を現在の位置と向きに合わせて復元します。ブラシ内では、元の形状で近接するパーツの相対的な配置も復元します。 |

非表示の頂点とブラシの範囲外の頂点は固定されます。広い範囲が変形している場合は半径を少しずつ広げ、保護したい部分は先に非表示にしてください。

## [5] 編集結果を保存する

編集後、必要に応じて[Weightの再計算とPhysBoneの再配置](../mesh-editing/#3-weightの再計算とphysboneの再配置)を行います。MeshまたはBlendShapeとして保存する方法は[保存とMeshの分離](../mesh-editing/#4-保存とmeshの分離)を確認してください。
