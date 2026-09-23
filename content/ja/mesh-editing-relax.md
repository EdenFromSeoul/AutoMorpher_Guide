---
title: "リラックス"
slug: "mesh-editing-relax"
category: "使用ガイド"
description: "頂点の配置や急な曲がりを滑らかに調整"
order: 35
version: "3.4.1"
parent: "mesh-editing"
---

<strong>リラックス(Relax)</strong>は、頂点の間隔や急な曲がりをならして表面を滑らかにします。ブラシ範囲全体を1枚の平面にする機能ではありません。

<figure>
  <video controls preload="metadata" width="810" height="754" style="height: auto; aspect-ratio: 810 / 754;" playsinline aria-label="リラックスブラシの使用例"><source src="{{BASE_PATH}}/media/mesh-studio/relax.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/relax.mp4">動画ファイルを開く</a></video>
  <figcaption>リラックスブラシの使用例</figcaption>
</figure>

<img src="{{BASE_PATH}}/media/mesh-studio/relax-settings.png" alt="リラックスブラシの設定" width="402" height="207" loading="lazy" />

## [1] 使い方

1. リラックスを選択します。
2. 半径と強度を調整し、乱れた部分を少しずつドラッグします。
3. ひもの幅や厚み、しわ、装飾とのつながりが意図した形になっているか確認します。

## [2] ブラシ設定

| オプション | 説明 |
| --- | --- |
| <strong>ブラシ半径(Brush Radius)</strong> | カーソルの周囲で頂点の配置や曲がりを整える範囲を調整します。 |
| <strong>ブラシ強度(Brush Strength)</strong> | 周囲の頂点を参照して表面を滑らかにする強さを調整します。ひもやしわの形状を確認しながら少しずつ適用します。 |
| <strong>対称(Symmetry)</strong> | X / Y / Zから使用する軸を選ぶと、Root Objectを基準に反対側にも操作を適用します。複数の軸を同時に選択できます。 |

| 操作 | 動作 |
| --- | --- |
| <strong>Shift + マウスホイール</strong> | ブラシ半径を調整 |
| <strong>Ctrl + Shift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Caps Lockがオンの状態でShift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Esc</strong> | 操作中のブラシストロークを取り消す |

ショートカットはScene View上で操作します。macOSではCtrlの代わりにCommandを使用できます。

## [3] 基準Mesh

<strong>基準Mesh(Reference Meshes)</strong>には、表面を整える際に参照するMeshを指定します。近くに対応する基準表面があればそれを参照し、基準がない場合や対応する表面が見つからない場合は、衣装自体の周囲の形状を参照します。

1. 衣装の親階層から自動で設定された体のMeshが正しいか確認します。
2. <strong>体のMeshを探す(Find Body Mesh)</strong>を押すと、親階層のHumanoid Avatarから体のMeshを再検索します。
3. <strong>+</strong>で基準Meshを追加し、<strong>−</strong>で不要な項目を削除します。手動で追加したMeshは自動検索時にも保持されます。

Main Mesh自身や、Main Meshと同じMeshデータを使用する項目は基準から除外されます。

リラックスでは<strong>表面との間隔</strong>の入力欄は表示されません。近くに基準表面が見つかると、他のブラシで設定された間隔を参照します。

## [4] 結果を確認する

リラックスでも幅や厚みが変わる場合があるため、弱い強度から始めると調整しやすくなります。ひもや装飾のつながり、残したいしわも確認してください。

## [5] 編集結果を保存する

編集後、必要に応じて[Weightの再計算とPhysBoneの再配置](../mesh-editing/#3-weightの再計算とphysboneの再配置)を行います。MeshまたはBlendShapeとして保存する方法は[保存とMeshの分離](../mesh-editing/#4-保存とmeshの分離)を確認してください。
