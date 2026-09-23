---
title: "Shrink"
slug: "mesh-editing-shrink"
category: "使用ガイド"
description: "選択した頂点を収縮させ、衣装の一部を隠す形状を作成"
order: 36
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Shrink</strong>は、選択した頂点をボーン側に収縮させ、衣装の一部を隠す形状を作ります。<strong>BlendShapeとして保存</strong>すると、収縮した形状をBlendShapeとして残せます。

<figure>
  <video controls preload="metadata" width="880" height="766" style="height: auto; aspect-ratio: 880 / 766;" playsinline aria-label="Shrinkの選択とプレビューの例"><source src="{{BASE_PATH}}/media/mesh-studio/shrink.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/shrink.mp4">動画ファイルを開く</a></video>
  <figcaption>Shrinkの選択とプレビューの例</figcaption>
</figure>

<img src="{{BASE_PATH}}/media/mesh-studio/shrink-settings.png" alt="Shrinkのプレビューと選択方法" width="634" height="234" loading="lazy" />

## [1] 範囲の選択とプレビュー

1. <strong>選択方法(Selection Method)</strong>で<strong>クリック / 範囲(Click / Box)</strong>または<strong>ブラシ選択(Brush Select)</strong>を選びます。
2. <strong>選択(Select)</strong>で収縮させる範囲を追加し、<strong>解除(Deselect)</strong>で除外します。
3. <strong>プレビュー ON(Preview On)</strong>で収縮結果を確認します。<strong>プレビュー OFF(Preview Off)</strong>を選ぶと、選択を保持したまま収縮前の形状で範囲を調整できます。
4. 保存時は<strong>プレビュー ON</strong>を選択してください。

## [2] 選択方法ごとの操作

| 選択方法 | 追加・解除の操作 |
| --- | --- |
| <strong>クリック / 範囲</strong> | クリック・ドラッグで選択、Shiftで追加、Ctrlで解除 |
| <strong>ブラシ選択</strong> | 選択モードでドラッグして追加、解除モードまたはShift + ドラッグで解除 |

どちらの方法も同じ選択範囲を共有します。<strong>選択を消去 / 元に戻す(Clear selection / restore)</strong>で選択を消去し、収縮前に戻せます。

## [3] ブラシ設定

Shrinkのブラシは、収縮させる頂点を<strong>選択・解除</strong>するためのものです。ブラシ強度で収縮量を調整する操作ではありません。

| オプション | 説明 |
| --- | --- |
| <strong>ブラシ半径(Brush Radius)</strong> | ブラシ選択でカーソルの周囲を選択する範囲を調整します。クリック / 範囲では半径オプションは表示されません。 |
| <strong>選択(Select) / 解除(Deselect)</strong> | 選択モードではドラッグした範囲を追加し、解除モードでは除外します。選択モードでもShift + ドラッグで解除できます。 |
| <strong>対称(Symmetry)</strong> | Root Objectを基準にX / Y / Zの反対側の頂点も選択・解除します。複数の軸を同時に使用できます。 |

| 操作 | 動作 |
| --- | --- |
| <strong>Shift + マウスホイール</strong> | ブラシ半径を調整 |
| <strong>Esc</strong> | 操作中のブラシストロークを取り消す |

ショートカットはScene View上で操作します。macOSではCtrlの代わりにCommandを使用できます。

ブラシ強度、重み付け、基準Meshのオプションは使用しません。<strong>プレビュー ON(Preview On)</strong>で収縮結果を確認しながら、選択範囲を調整してください。

## [4] 編集結果を保存する

編集後、必要に応じて[Weightの再計算とPhysBoneの再配置](../mesh-editing/#3-weightの再計算とphysboneの再配置)を行います。MeshまたはBlendShapeとして保存する方法は[保存とMeshの分離](../mesh-editing/#4-保存とmeshの分離)を確認してください。
