---
title: "衣装の貫通を解消"
slug: "mesh-editing-clipping"
category: "使用ガイド"
description: "基準Meshに入り込んだ衣装を表面の外側に補正"
order: 33
version: "3.4.1"
parent: "mesh-editing"
---

<strong>衣装の貫通を解消(Resolve Clothing Clipping)</strong>は、基準Meshに入り込んだMain Meshを表面の外側に補正します。

<figure>
  <video controls preload="metadata" width="844" height="812" style="height: auto; aspect-ratio: 844 / 812;" playsinline aria-label="衣装の貫通解消の使用例"><source src="{{BASE_PATH}}/media/mesh-studio/clipping.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/clipping.mp4">動画ファイルを開く</a></video>
  <figcaption>衣装の貫通解消の使用例</figcaption>
</figure>

## [1] 使い方

1. <strong>基準Mesh</strong>に体のMeshなどを指定します。
2. <strong>表面との間隔 (mm)</strong>とブラシの半径・強度を設定します。
3. 対象が見えるようにScene Viewを調整し、ブラシの矢印を確認します。
4. Main Meshの貫通している部分をドラッグします。

## [2] ブラシ設定

| オプション | 説明 |
| --- | --- |
| <strong>ブラシ半径(Brush Radius)</strong> | カーソルの周囲で貫通を補正する範囲を調整します。 |
| <strong>ブラシ強度(Brush Strength)</strong> | 基準Meshに入り込んだ衣装を外側へ補正する強さを調整します。表面との間隔は別のオプションで設定します。 |
| <strong>対称(Symmetry)</strong> | X / Y / Zから使用する軸を選ぶと、Root Objectを基準に反対側にも操作を適用します。複数の軸を同時に選択できます。 |

| 操作 | 動作 |
| --- | --- |
| <strong>Shift + マウスホイール</strong> | ブラシ半径を調整 |
| <strong>Ctrl + Shift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Caps Lockがオンの状態でShift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Esc</strong> | 操作中のブラシストロークを取り消す |

ショートカットはScene View上で操作します。macOSではCtrlの代わりにCommandを使用できます。

## [3] 基準Meshと表面との間隔

<strong>基準Mesh(Reference Meshes)</strong>には、貫通補正の基準となる表面を指定します。アバターの体以外のMeshも使用できます。

<img src="{{BASE_PATH}}/media/mesh-studio/reference-meshes.png" alt="基準Meshと表面との間隔の設定" width="534" height="233" loading="lazy" />

1. 衣装の親階層から自動で設定された体のMeshが正しいか確認します。
2. <strong>体のMeshを探す(Find Body Mesh)</strong>を押すと、親階層のHumanoid Avatarから体のMeshを再検索します。
3. <strong>+</strong>で基準Meshを追加し、<strong>−</strong>で不要な項目を削除します。手動で追加したMeshは自動検索時にも保持されます。

Main Mesh自身や、Main Meshと同じMeshデータを使用する項目は基準から除外されます。

<strong>表面との間隔 (mm)(Surface Gap (mm))</strong>は、貫通を補正した衣装と基準表面の間に設ける隙間です。1 mm離す場合は`1`を入力します。

## [4] 結果を確認する

矢印側に露出した基準Meshの外側の表面を参照します。近くの布や重なった層も補正に追従する場合があるため、周囲の形状も確認してください。別の向きの貫通は視点を変えて調整します。

## [5] 編集結果を保存する

編集後、必要に応じて[Weightの再計算とPhysBoneの再配置](../mesh-editing/#3-weightの再計算とphysboneの再配置)を行います。MeshまたはBlendShapeとして保存する方法は[保存とMeshの分離](../mesh-editing/#4-保存とmeshの分離)を確認してください。
