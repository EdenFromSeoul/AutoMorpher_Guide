---
title: "密着"
slug: "mesh-editing-shrinkwrap"
category: "使用ガイド"
description: "基準Meshの表面と設定した間隔に合わせて衣装を密着"
order: 34
version: "3.4.1"
parent: "mesh-editing"
---

<strong>密着(Shrinkwrap)</strong>は、Main Meshを基準Meshの表面に沿わせて整えます。体から浮いている部分の隙間を減らしたいときに便利です。

<figure>
  <video controls preload="metadata" width="940" height="800" style="height: auto; aspect-ratio: 940 / 800;" playsinline aria-label="密着ブラシの使用例"><source src="{{BASE_PATH}}/media/mesh-studio/shrinkwrap.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/shrinkwrap.mp4">動画ファイルを開く</a></video>
  <figcaption>密着ブラシの使用例</figcaption>
</figure>

## [1] 使い方

1. <strong>基準Mesh</strong>を指定し、<strong>表面との間隔 (mm)</strong>を設定します。
2. ブラシの半径と強度を調整します。
3. 密着させたい部分をドラッグし、他の角度からも確認します。

## [2] ブラシ設定

| オプション | 説明 |
| --- | --- |
| <strong>ブラシ半径(Brush Radius)</strong> | カーソルの周囲で基準Meshに密着させる範囲を調整します。 |
| <strong>ブラシ強度(Brush Strength)</strong> | 衣装が基準の表面と指定した間隔に近づく強さを調整します。値を下げると、少しずつ密着させられます。 |
| <strong>対称(Symmetry)</strong> | X / Y / Zから使用する軸を選ぶと、Root Objectを基準に反対側にも操作を適用します。複数の軸を同時に選択できます。 |

| 操作 | 動作 |
| --- | --- |
| <strong>Shift + マウスホイール</strong> | ブラシ半径を調整 |
| <strong>Ctrl + Shift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Caps Lockがオンの状態でShift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Esc</strong> | 操作中のブラシストロークを取り消す |

ショートカットはScene View上で操作します。macOSではCtrlの代わりにCommandを使用できます。

## [3] 基準Meshと表面との間隔

<strong>基準Mesh(Reference Meshes)</strong>には、衣装を密着させる表面を指定します。アバターの体以外のMeshも使用できます。

<img src="{{BASE_PATH}}/media/mesh-studio/reference-meshes.png" alt="基準Meshと表面との間隔の設定" width="534" height="233" loading="lazy" />

1. 衣装の親階層から自動で設定された体のMeshが正しいか確認します。
2. <strong>体のMeshを探す(Find Body Mesh)</strong>を押すと、親階層のHumanoid Avatarから体のMeshを再検索します。
3. <strong>+</strong>で基準Meshを追加し、<strong>−</strong>で不要な項目を削除します。手動で追加したMeshは自動検索時にも保持されます。

Main Mesh自身や、Main Meshと同じMeshデータを使用する項目は基準から除外されます。

<strong>表面との間隔 (mm)(Surface Gap (mm))</strong>は、密着後の衣装と基準表面の間に設ける隙間です。1 mm離す場合は`1`を入力します。

## [4] 結果を確認する

入り込んだ部分を外に出すときは衣装の貫通を解消を、表面に沿って間隔を整えるときは密着を使ってください。

## [5] 編集結果を保存する

編集後、必要に応じて[Weightの再計算とPhysBoneの再配置](../mesh-editing/#3-weightの再計算とphysboneの再配置)を行います。MeshまたはBlendShapeとして保存する方法は[保存とMeshの分離](../mesh-editing/#4-保存とmeshの分離)を確認してください。
