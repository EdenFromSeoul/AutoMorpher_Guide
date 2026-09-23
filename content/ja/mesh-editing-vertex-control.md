---
title: "頂点編集"
slug: "mesh-editing-vertex-control"
category: "使用ガイド"
description: "選択した頂点の移動・回転・拡縮"
order: 31
version: "3.4.1"
parent: "mesh-editing"
---

## [1] 頂点を選択する

<strong>頂点編集(Vertex Control)</strong>を選び、Scene Viewで頂点をクリックするか、ドラッグして範囲選択します。

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/6d66d5ebb4b09557.png" alt="クリックで頂点を1つ選択した例" width="535" height="491" loading="lazy" /><figcaption>クリックで選択</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/83e7aa82741df69b.png" alt="ボックス内の複数の頂点を選択した例" width="649" height="519" loading="lazy" /><figcaption>ドラッグで範囲選択</figcaption></figure>
</div>

| 操作 | 動作 |
| --- | --- |
| <strong>左クリック</strong> | 頂点を選択 |
| <strong>Shift + 左クリック</strong> | 現在の選択に頂点を追加 |
| <strong>Ctrl + 左クリック</strong> | 頂点の選択を解除 |
| <strong>左ドラッグ</strong> | ボックス内の頂点を選択 |
| <strong>Shift + 左ドラッグ</strong> | ボックス内の頂点を追加選択 |
| <strong>Ctrl + 左ドラッグ</strong> | ボックス内の頂点の選択を解除 |
| <strong>A</strong> | Main Meshの非表示にしていない頂点をすべて選択 |
| <strong>L</strong> | カーソル付近の頂点につながる頂点をすべて追加選択 |
| <strong>Shift + L</strong> | カーソル付近の頂点につながる頂点をすべて選択解除 |

<strong>L / Shift + L</strong>は、Meshが複数の独立したパーツで構成されている場合に、特定のパーツだけを選ぶときに便利です。

## [2] 移動・回転・拡縮

頂点を選択して<strong>W(移動) / E(回転) / R(拡縮)</strong>のボタンまたはショートカットを使い、Scene Viewのハンドルをドラッグします。

<div class="doc-media-grid doc-media-grid-3">
  <figure><img src="{{BASE_PATH}}/media/4accd5822cf38fba.png" alt="移動ハンドルで頂点を動かす例" width="756" height="598" loading="lazy" /><figcaption>W · 移動</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/bd90cd4b8efaf419.png" alt="回転ハンドルで頂点を回転する例" width="729" height="575" loading="lazy" /><figcaption>E · 回転</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/edb5ec08dcbebbe3.png" alt="拡縮ハンドルで頂点を調整する例" width="639" height="536" loading="lazy" /><figcaption>R · 拡縮</figcaption></figure>
</div>

<strong>ハンドル方向(Handle Direction)</strong>は、ワールド座標軸を使う<strong>ワールド(World)</strong>と、選択した頂点の表面の向きを使う<strong>頂点法線(Vertex Normal)</strong>から選びます。

## [3] 周囲の頂点への影響

選択した頂点を動かすと、周囲の頂点も半径と重みの設定に応じて変形します。影響が強いほど赤、弱いほど青で表示されます。

<img src="{{BASE_PATH}}/media/4e4790e5af577f26.png" alt="編集の影響とブラシ範囲の設定" width="692" height="528" loading="lazy" />

| 設定 | 項目 | 説明 |
| --- | --- | --- |
| <strong>選択方式(Pick Mode)</strong> | <strong>直線距離(Euclidean)</strong> | 空間上の距離が半径内にある頂点に影響します。 |
| | <strong>隣接距離(Adjacency)</strong> | Meshの接続に沿った距離が半径内にある頂点に影響します。 |
| <strong>ブラシの重み付け(Brush Weight Mode)</strong> | <strong>線形(Linear)</strong> | 距離に応じて影響が一定の割合で弱まります。 |
| | <strong>ガウシアン(Gaussian)</strong> | 中心と周囲が滑らかにつながるように影響します。 |
| | <strong>固定(Clamp)</strong> | 範囲内の頂点に同じウェイトを適用します。 |


### ブラシ設定

| オプション | 説明 |
| --- | --- |
| <strong>ブラシ半径(Brush Radius)</strong> | 選択した頂点の周囲で、一緒に変形させる範囲を調整します。 |
| <strong>ブラシ強度(Brush Strength)</strong> | 選択した頂点を移動・回転・拡縮したときに、周囲の頂点へ伝わる変形の強さを調整します。 |

| 操作 | 動作 |
| --- | --- |
| <strong>Shift + マウスホイール</strong> | ブラシ半径を調整 |
| <strong>Ctrl + Shift + マウスホイール</strong> | ブラシ強度を調整 |
| <strong>Caps Lockがオンの状態でShift + マウスホイール</strong> | ブラシ強度を調整 |

ショートカットはScene View上で操作します。macOSではCtrlの代わりにCommandを使用できます。

!!! tip "💡 近くの別パーツも動いてしまう場合"
    隣接距離を使うとMeshの接続に基づいて影響範囲を制限できます。編集するMesh一覧で一緒に選択している対象も確認してください。

## [4] 頂点の非表示と削除

| 操作 | 動作 |
| --- | --- |
| <strong>G</strong> | 選択した頂点を非表示 |
| <strong>Shift + G</strong> | 非表示の頂点をすべて再表示 |
| <strong>頂点を削除(Delete Vertices)</strong>または<strong>Backspace / X</strong> | 選択した頂点をMeshから削除 |

非表示にした頂点は編集の影響を受けないように保護されます。作業範囲を限定したいときは非表示を、Meshの頂点や面の構成を変えたいときは削除を使います。

## [5] 対称移動とクリッピング

<strong>対称(Symmetry)</strong>: X / Y / Zから使用する軸を選ぶと、Root Objectを基準に反対側にも操作を適用します。複数の軸を同時に選択できます。 <strong>隣接距離(Adjacency)</strong>では対称軸を選択できません。対称編集には<strong>直線距離(Euclidean)</strong>を使用してください。

<img src="{{BASE_PATH}}/media/mesh-studio/symmetry.png" alt="対称編集の例" width="1082" height="791" loading="lazy" />

| 項目 | 説明 |
| --- | --- |
| <strong>対称移動 → 反転(Mirror)</strong> | 反対側の頂点が鏡写しに動きます。 |
| <strong>対称移動 → 同一(Same)</strong> | 反対側にも同じ方向の変形を適用します。 |
| <strong>対称クリッピング(Symmetry Clipping)</strong> | 対称軸付近の頂点が反対側に越えるのを制限します。 |

## [6] 編集結果を保存する

編集後、必要に応じて[Weightの再計算とPhysBoneの再配置](../mesh-editing/#3-weightの再計算とphysboneの再配置)を行います。MeshまたはBlendShapeとして保存する方法は[保存とMeshの分離](../mesh-editing/#4-保存とmeshの分離)を確認してください。
