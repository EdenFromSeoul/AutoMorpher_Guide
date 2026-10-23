---
title: "Texture Studio ガイド"
slug: "texture-studio"
category: "使用ガイド"
description: "好きな領域を選び、自由に色を編集して保存する方法を解説します。"
order: 45
version: "3.5.0"
---

<div class="guide-intro">
  <p>⚫ <strong>Texture Studio</strong>は、UnityでMeshのTextureの色を調整し、Sceneで結果を確認できるツールです。</p>
  <p>⚫ MeshとUV領域を選び、必要な色編集機能を使い、結果を確認して保存します。</p>
</div>

| 機能 | できること |
| --- | --- |
| Mesh・UV選択 | Mesh全体の色を変えたり、好きな部分だけを選んで色を調整したりできます。 |
| [色相指定・色相シフト](../texture-studio-color-adjustment/) | 衣装や髪を好みの色に変えたり、元の色をもとに明るさや鮮やかさを調整したりできます。 |
| [グラデーション](../texture-studio-gradient/) | 複数の色がなめらかにつながる表現を作れます。 |
| [色の自動調整](../texture-studio-auto-color/) | 異なるパーツの色合いを揃え、統一感を出せます。 |
| プレビュー・編集履歴 | 編集前後の違いを確認し、必要に応じて以前の状態に戻せます。 |
| 保存 | 完成した色をTextureとMaterialとして保存し、アバターに使えます。 |

## [1] 編集の準備

1. **きせった(Kisetter)** ウィンドウ上部の **Texture Studio (Early Access)** を開きます。
2. **編集対象 Mesh** に衣装・髪または親オブジェクトを指定し、**読み込む**を押します。中央のドラッグ領域にHierarchyのMeshを直接追加することもできます。
3. リストの **Mesh名** をクリックしてメインの編集対象を選びます。その行に **編集中** と表示されます。
4. 右の **Texture UV** で編集するTextureタブを選びます。同じTextureを共有するMaterialスロットは、名前がまとめて表示されます。

<img src="{{BASE_PATH}}/media/texture-studio/outfit-meshes.webp" alt="衣装のMeshを選択したSceneとTexture Studio" width="1905" height="1065" loading="lazy" />

## [2] 複数MeshとUV領域の選択

### 複数の髪Meshを同時に調整する

1. 同時に調整する髪Meshのうち1つをクリックして、メインの編集対象にします。
2. ほかの髪Meshの **追加** を押します。
3. 追加した行に **同時調整** と表示され、右の見出しに追加したMeshの数が表示されることを確認します。

<img src="{{BASE_PATH}}/media/texture-studio/hair-setup-closeup.webp" alt="メインとほかの髪Meshを同時調整に含めたリスト" width="1905" height="1065" loading="lazy" />

メインのMeshを変更すると **同時調整** の選択が解除されるため、先にメインを決めてください。

**On/Offの目のアイコン** はMeshオブジェクトの有効・無効を切り替えます。

編集対象はMesh名と **同時調整** 列で選びます。

### UVの選択方法

UVは、Texture上に展開されたMeshのつながった部分です。

色の調整は選択したUV領域に適用されます。

| 操作 | 動作 |
| --- | --- |
| Islandをクリック | その部分の選択を切り替えます。 |
| UV上をドラッグ | ボックス内の領域を選択します。 |
| Shift / Ctrlを押しながら選択 | 選択に追加 / 選択から除外します。 |
| **全選択** | 編集対象の全Mesh・全TextureスロットのUV領域を選択します。 |
| **全解除** | 編集対象MeshとTextureスロット全体のUV選択を解除します。 |
| **UV 表示** | Texture上にUVの線を表示します。 |
| **MeshにUVを表示** | SceneのMesh上にUVの線を表示します。 |

### パーツごとの選択と色の調整

1つのMeshの中でも、UV領域を分けてパーツごとに違う色を適用できます。

以下は前髪をパーツごとに調整した例です。

1. 編集対象を前髪のMeshだけにして **全解除** を押します。
2. 右のTexture UVで目的のパーツのIslandを選びます。**MeshにUVを表示** をオンにすると、Sceneの黄色い線で選択範囲を確認できます。
   - Scene上で目的のパーツを直接クリックして選ぶこともできます。
3. **色相指定** で色を選びます。結果を確認するときは **MeshにUVを表示** をオフにして色を見やすくします。
4. 次のパーツに移るときは **全解除** を押してから新しい領域を選びます。適用済みの色は保持され、新しく選択した領域だけを調整できます。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>① 中央の前髪 · UV選択</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-center-selection-closeup.webp" alt="① 中央の前髪 · UV選択" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>① 中央の前髪 · 赤を適用</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-center-color-closeup.webp" alt="① 中央の前髪 · 赤を適用" width="1905" height="1065" loading="lazy" /></figure>
</div>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>② 左右の前髪 · UV選択</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-sides-selection-closeup.webp" alt="② 左右の前髪 · UV選択" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>② 左右の前髪 · 緑を追加</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-sides-color-closeup.webp" alt="② 左右の前髪 · 緑を追加" width="1905" height="1065" loading="lazy" /></figure>
</div>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>③ 短くカーブした毛束 · UV選択</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-strand-selection-closeup.webp" alt="③ 短くカーブした毛束 · UV選択" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>③ 短くカーブした毛束 · 金色を追加</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-strand-color-closeup.webp" alt="③ 短くカーブした毛束 · 金色を追加" width="1905" height="1065" loading="lazy" /></figure>
</div>

### 例：瞳だけを調整する

1. 瞳を含むMeshをメインの編集対象にします。
2. 瞳のあるTextureタブを開き、**全解除** を押します。
3. 下の例のように、左右の瞳のUV Islandをそれぞれクリックします。2つの領域だけに黄色のUV線が表示されることを確認します。
4. 色を調整すると、肌やまつ毛を維持しながら瞳だけを変更できます。

<img src="{{BASE_PATH}}/media/texture-studio/eyes-uv-selection.webp" alt="顔のTextureで左右の瞳だけを選択した状態" width="1905" height="1065" loading="lazy" />

<img src="{{BASE_PATH}}/media/texture-studio/eyes-color.webp" alt="顔の肌を維持して瞳だけを青緑色に変えた結果" width="1905" height="1065" loading="lazy" />

肌も同じ手順で **顔の肌のIsland** を選びます。下の画像は色を変える前の選択状態です。体の肌が別のMeshやTextureにある場合は、その領域も別途調整します。

<img src="{{BASE_PATH}}/media/texture-studio/skin-uv-selection.webp" alt="顔の肌のUVだけを選択して色相シフトを開いた状態" width="1905" height="1065" loading="lazy" />

## [3] 色とトーンの調整

色を指定したり元の色相を移動したりして、鮮やかさ・明るさ・コントラスト・ガンマを調整します。

下は衣装をベージュから青緑色に変えた例です。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · ベージュの衣装</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="変更前 · ベージュの衣装" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>変更後 · 青緑色の衣装</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-color.webp" alt="変更後 · 青緑色の衣装" width="1905" height="1065" loading="lazy" /></figure>
</div>

[使い方と衣装・髪の作例を見る →](../texture-studio-color-adjustment/)

## [4] グラデーションを作る

UV上に引いた線の方向と長さに沿ってグラデーションを適用します。

下は髪に白・黄色・ピンクのグラデーションを適用した例です。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · 明るいピンクの髪</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-before.webp" alt="変更前 · 明るいピンクの髪" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>変更後 · 白・黄色・ピンクのグラデーション</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-gradient.webp" alt="変更後 · 白・黄色・ピンクのグラデーション" width="1905" height="1065" loading="lazy" /></figure>
</div>

[使い方と衣装・髪の作例を見る →](../texture-studio-gradient/)

## [5] 色の自動調整

別のMeshで選んだ参照色に合わせて、選択領域を自動調整します。

下は袖を参照して衣装のTextureを明るく合わせた例です。

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>変更前 · ベージュの衣装</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="変更前 · ベージュの衣装" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>変更後 · 袖の色を参照して自動調整</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-auto.webp" alt="変更後 · 袖の色を参照して自動調整" width="1905" height="1065" loading="lazy" /></figure>
</div>

[使い方と衣装・髪の作例を見る →](../texture-studio-auto-color/)

## [6] 結果の確認と取り消し

### 元の状態と比較する

**編集結果のプレビュー** をオフにすると、登録したMeshの元の状態を表示します。編集内容は保持され、オンに戻すと結果を再表示します。

<img src="{{BASE_PATH}}/media/texture-studio/preview-original-closeup.webp" alt="編集設定を保持したままプレビューをオフにして元の髪を表示" width="1905" height="1065" loading="lazy" />

### 履歴と元の状態への復元

| 項目 | 動作 |
| --- | --- |
| **取り消し** / Ctrl+Z | 最近の編集を1段階戻します。 |
| **やり直し** / Ctrl+Y | 取り消した編集を再適用します。 |
| **取り消し回数の上限** | 保存する履歴数を設定します。初期値30、範囲1～100です。 |
| Mesh行の **元に戻す** | そのMeshの全Textureスロットに対応するUV領域を元に戻します。 |
| **すべて元に戻す** | 全体の編集を元の状態に戻します。 |

同じTextureで別MeshとUVが重なる部分には影響が及ぶ場合があるため、復元後もSceneを確認してください。

## [7] TextureとMaterialの保存

1. **保存** の設定を開きます。
2. **Materialの保存方法** を選びます。
3. **保存場所** と **保存時の接尾辞** を設定します。
4. **保存** を押します。編集したTextureがPNGで保存され、選択した方式でMaterialに設定されます。
5. 保存後の案内に従って編集を続けるか終了します。

<img src="{{BASE_PATH}}/media/texture-studio/save-options.webp" alt="新しいMaterialの作成、既存Materialへの適用、保存場所と接尾辞の設定" width="940" height="235" loading="lazy" />

| 設定 | 使い方 |
| --- | --- |
| **新しいMaterialを作成** | 新しいMaterialを作り、編集したMeshに適用します。カラーバリエーションを作る場合に使用します。 |
| **既存のMaterialに適用** | 既存Materialを更新します。同じMaterialを使う別のオブジェクトにも影響する場合があります。 |
| **元と同じフォルダ** | 元のAssetと同じフォルダに保存します。 |
| **フォルダを指定** | プロジェクトの `Assets` 以下の保存先を選びます。 |

保存した結果が次の編集の基準になり、それまでの編集履歴は消去されます。
