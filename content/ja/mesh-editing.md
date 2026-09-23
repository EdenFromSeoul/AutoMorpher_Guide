---
title: "Mesh Studio ガイド"
slug: "mesh-editing"
category: "使用ガイド"
description: "頂点操作とブラシで衣装のMeshを編集し、Weight・PhysBoneの調整後にMeshまたはBlendShapeとして保存する方法です。"
order: 30
version: "3.4.1"
---

<div class="guide-intro">
  <p>⚫ <strong>Mesh Studio</strong>は、UnityのScene Viewで衣装のMeshを直接編集できるツールです。</p>
  <p>⚫ 衣装の貫通、体との隙間、崩れた形状を手軽に修正し、<strong>MeshまたはBlendShape</strong>として保存できます。</p>
</div>

## [1] 編集の準備

### 1. Mesh Studioを開く

1. きせった(Kisetter)ウィンドウ上部の<strong>Mesh Studio</strong>タブを選択します。
2. <strong>編集対象 Mesh(Mesh Selection)</strong>の<strong>Root Object</strong>に、編集する衣装のオブジェクト、またはその親オブジェクトをドラッグします。
3. 一覧が空の場合や衣装の構成を変更した場合は、<strong>リストを更新(Refresh Meshes)</strong>を押します。

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/tab.png" alt="Kisetterウィンドウ上部のMesh Studioタブ" width="605" height="206" loading="lazy" /></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/root-object.png" alt="衣装をRoot Objectに指定する方法" width="791" height="392" loading="lazy" /></figure>
</div>

Root Objectの配下に<strong>Skinned Mesh Renderer</strong>があると、対象のMeshが一覧に表示されます。アバターに合わせた衣装を編集する場合は、衣装をそのアバターの子に配置してください。

### 2. Main Meshと一緒に編集するMeshを選ぶ

| 項目 | 使い方 |
| --- | --- |
| 1. <strong>リストを更新(Refresh Meshes)</strong> | Root Object配下のSkinned Mesh Rendererの一覧を更新します。 |
| 2. <strong>有効状態(Active)</strong> | Meshオブジェクトの有効・無効を切り替えます。 |
| 3. <strong>Main Mesh</strong> | 頂点の選択・編集の基準となるMeshを指定します。選択したMeshには<strong>Main</strong>と表示されます。 |
| 4. <strong>編集するMesh(Meshes to edit)</strong> | Main Meshと一緒に変形させるMeshを選択・解除します。 |
| 5. <strong>元に戻す(Revert to Original)</strong> | <strong>元に戻す(Revert to Original)</strong>：そのMeshの編集内容を元に戻します。<br /><strong>すべて元に戻す(Revert All)</strong>：すべてのMeshの編集内容を元に戻します。 |

<img src="{{BASE_PATH}}/media/mesh-studio/mesh-selection.png" alt="Main Mesh、追加対象、有効状態、元に戻すボタン" width="1086" height="636" loading="lazy" />

Main Meshを変更すると、一緒に編集するMeshの選択が解除されます。Main Meshを先に指定してから追加の対象を選んでください。

## [2] 画面構成と共通設定

### 1. 操作UIの表示先

<strong>Vertex 操作オプションの表示先(Vertex Controls Location)</strong>で、操作パネルを表示する場所を選択します。

<img src="{{BASE_PATH}}/media/mesh-studio/controls-location.png" alt="Vertex操作オプションの表示先設定" width="1172" height="1038" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/scene-ui.png" alt="Scene UI" width="900" height="879" loading="lazy" /><figcaption>Scene UI</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/editor-ui.png" alt="Mesh Studioウィンドウ" width="899" height="837" loading="lazy" /><figcaption>Mesh Studioウィンドウ</figcaption></figure>
</div>

### 2. 頂点の表示設定

<strong>頂点の表示設定(Vertex Display)</strong>で頂点の見え方を調整します。初期設定では編集可能な頂点は白、選択した頂点は黄色です。周囲の頂点は影響が弱いほど青、強いほど赤で表示されます。

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/vertex-display.png" alt="頂点の表示設定パネル" width="1155" height="1010" loading="lazy" /><figcaption>頂点の表示設定パネル</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/vertex-colors.png" alt="選択した頂点と周囲への影響を示す色" width="1036" height="604" loading="lazy" /><figcaption>選択した頂点と周囲への影響を示す色</figcaption></figure>
</div>

| 項目 | 説明 |
| --- | --- |
| <strong>頂点を表示(Show Vertices)</strong> | 編集可能な頂点の表示を切り替えます。 |
| <strong>隠れた頂点を表示(Show Occluded)</strong> | 他のMeshに隠れている頂点も表示します。 |
| <strong>頂点サイズ(Vertex Size)</strong> | 画面に表示する頂点の大きさを調整します。 |
| <strong>表示距離(Draw Distance)</strong> | カメラから頂点を表示する最大距離を設定します。スライダーの最大値では距離制限がなくなります。 |
| <strong>頂点の色(Vertex Color)</strong> | 頂点の表示色を設定します。 |

### 3. 編集モードを選ぶ

<strong>編集モード(Edit Mode)</strong>でツールを選び、<strong>ツール設定(Tool Settings)</strong>で各ツールのオプションを調整します。

<img src="{{BASE_PATH}}/media/mesh-studio/edit-mode-buttons.png" alt="6種類の編集ツール" width="358" height="172" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/edit-modes.png" alt="編集モードパネルの位置" width="1197" height="1024" loading="lazy" /><figcaption>編集モードパネルの位置</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/tool-settings.png" alt="ツール設定パネルの位置" width="1162" height="1007" loading="lazy" /><figcaption>ツール設定パネルの位置</figcaption></figure>
</div>


以下のツール名を選ぶと、各編集モードの使い方と使用例を確認できます。

| ツール | 用途 |
| --- | --- |
| <span id="3-頂点を編集する"></span>[頂点編集(Vertex Control)](../mesh-editing-vertex-control/) | 選択した頂点の移動・回転・拡縮 |
| <span id="1-復元ブラシ"></span>[復元ブラシ(Restore Brush)](../mesh-editing-restore/) | BlendShapeに記録された形状を基準に、変形した部分を復元 |
| <span id="2-衣装の貫通を解消"></span>[衣装の貫通を解消(Resolve Clothing Clipping)](../mesh-editing-clipping/) | 基準Meshに入り込んだ衣装を表面の外側に補正 |
| <span id="3-密着"></span>[密着(Shrinkwrap)](../mesh-editing-shrinkwrap/) | 基準Meshの表面と設定した間隔に合わせて衣装を密着 |
| <span id="4-リラックス"></span>[リラックス(Relax)](../mesh-editing-relax/) | 頂点の配置や急な曲がりを滑らかに調整 |
| <span id="5-shrink"></span>[Shrink](../mesh-editing-shrink/) | 選択した頂点を収縮させ、衣装の一部を隠す形状を作成 |

## [3] Weightの再計算とPhysBoneの再配置

Meshの形状を調整した後、必要に応じて<strong>衣装のウェイト再計算・PhysBone再配置(Clothing Weight Recalculation / PhysBone Realignment)</strong>を使用します。

### 1. 基準Avatarと身体のMeshを指定する

1. 衣装の<strong>Root Object</strong>が正しいか確認します。
2. <strong>基準Avatar(Reference Avatar)</strong>に、衣装を着せるアバターの有効なHumanoid Animatorを指定します。
3. <strong>身体のMesh(Body Meshes)</strong>にアバターの体のMeshを指定します。<strong>身体のMeshを自動設定(Auto-assign Body Mesh)</strong>でも検索できます。

<img src="{{BASE_PATH}}/media/mesh-studio/rig-setup.png" alt="基準Avatarと身体のMeshの設定" width="655" height="156" loading="lazy" />

衣装は基準アバターの子に配置し、対応するボーンの構造と位置を確認してください。編集中の衣装や同じMeshデータを共有するRendererは、身体のMeshとして使用できません。

現在はどちらの機能も、有効な基準Avatarと身体のMeshの設定が必要です。ボタンが無効の場合は、これらの設定と、処理対象になる編集済みのMeshがあるか確認してください。

### 2. PhysBoneを再配置

<strong>PhysBoneを再配置(Realign PhysBones)</strong>は、編集したMeshに合わせて衣装の補助ボーンの位置を整えます。アバターに対応付けられたボーンなど、保護対象のボーンは調整から除外されます。

<figure>
  <video controls preload="metadata" width="1616" height="856" style="height: auto; aspect-ratio: 1616 / 856;" playsinline aria-label="PhysBone再配置の使用例"><source src="{{BASE_PATH}}/media/mesh-studio/physbones.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/physbones.mp4">動画ファイルを開く</a></video>
  <figcaption>PhysBone再配置の使用例</figcaption>
</figure>

1. Meshの編集後に<strong>PhysBoneを再配置</strong>を押します。
2. ひもや装飾の補助ボーンが、編集したMeshに合っているか確認します。
3. 結果を保持するには最後に保存します。

参照する頂点を削除したボーンは除外されます。関連するConstraintはロック解除の状態で保持されるため、Constraintを使う衣装は結果とロック状態も確認してください。

### 3. Weightを再計算

<strong>Weightを再計算(Recalculate Weights)</strong>は、身体のMeshを基準に衣装のWeightを再計算します。衣装固有の補助ボーンのWeightを保持しながらアバターに対応するWeightを調整し、現在のMeshとBlendShapeの形状を維持します。

<img src="{{BASE_PATH}}/media/mesh-studio/weight-scope.png" alt="Weightの再計算範囲" width="651" height="121" loading="lazy" />

1. <strong>Weightの再計算範囲(Weight Recalculation Scope)</strong>を選択します。
2. <strong>Weightを再計算</strong>を押します。
3. アバターのポーズを変え、衣装が意図したとおりに動くか確認して保存します。

| 範囲 | 対象 |
| --- | --- |
| <strong>編集したMesh(Edited Meshes)</strong> | 編集したMesh |
| <strong>Root配下のすべてのMesh(All Meshes under Root)</strong> | Root Objectから読み込んだすべてのMesh |

## [4] 保存とMeshの分離

### 1. 編集内容を保存する

<strong>保存...(Save...)</strong>を押して保存方法を選びます。結果は元のMeshアセットを上書きせず、<strong>複製したMesh</strong>に保存され、オブジェクトには保存後のMeshが割り当てられます。

<img src="{{BASE_PATH}}/media/mesh-studio/save-dialog.png" alt="保存ボタンの位置" width="1004" height="169" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/save-mesh.png" alt="Meshに適用" width="367" height="214" loading="lazy" /><figcaption>Meshに適用</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/save-blendshape.png" alt="BlendShapeとして保存" width="368" height="234" loading="lazy" /><figcaption>BlendShapeとして保存</figcaption></figure>
</div>

保存先：`Assets/@Eden_Mesh_MeshStudio/<Root Object名>/`

| 保存方法 | 結果 |
| --- | --- |
| <strong>Meshに適用(Apply to Mesh)</strong> | 現在の編集形状をMeshに反映します。 |
| <strong>BlendShapeとして保存(Save as BlendShape)</strong> | 編集による変形を、名前を付けたBlendShapeに保存します。変更のあるMeshにのみ追加されます。 |

BlendShapeとして保存する場合は<strong>BlendShape名(BlendShape Name)</strong>を入力します。同じ名前があると上書き確認が表示されます。<strong>上書き(Overwrite)</strong>を選ぶと、そのBlendShapeが変更されます。

!!! warning "⚠️ 保存前に確認"
    保存が完了すると編集セッションが終了し、Meshの割り当てを保持するために開いているSceneも保存されます。Shrinkの結果を保存する場合は収縮プレビューをオンにしてください。

### 2. 選択範囲を分離する

<strong>選択したMeshを分離(Separate Selected Mesh)</strong>を使うと、選択した面を別のオブジェクトとMeshとして分離・保存できます。

<img src="{{BASE_PATH}}/media/mesh-studio/separate-dialog.png" alt="選択したMeshを分離ボタンの位置" width="961" height="142" loading="lazy" />

1. Main Meshで分離したい面の頂点を選びます。<strong>3つの頂点がすべて選択された三角形</strong>が対象です。
2. <strong>選択したMeshを分離</strong>を押します。
3. <strong>Meshに適用</strong>または<strong>BlendShapeとして保存</strong>を選び、必要に応じてBlendShape名を入力します。
4. 分離する範囲と残す範囲を確認し、<strong>分離(Separate)</strong>を押します。

元のRendererには残った部分のMeshのコピーが、新しいオブジェクトには分離したMeshのコピーが割り当てられます。BlendShape・SubMesh・Materialの情報も保持されます。BlendShapeとして保存する場合、編集による変形はそれぞれのMeshの該当部分に分けて保存されます。

!!! warning "⚠️ 分離前に確認"
    分離・保存はUndoで元に戻せず、編集セッションも終了します。新しいRendererは既存のAnimationClipや外部スクリプトに自動接続されないため、必要な参照を確認してください。

<details class="doc-optional-step">
<summary>分離できない、またはBlendShapeとして保存できない場合</summary>

- 分離したい三角形の3つの頂点をすべて選択してください。
- 元のMeshにも一部の面を残す必要があります。
- Clothコンポーネントが付いたMesh、複数のMesh LODを持つMesh、三角形以外のTopologyは分離できません。
- 頂点の削除などで編集前後のTopologyが変わった場合、分離結果をBlendShapeとして保存できません。<strong>Meshに適用</strong>を使ってください。

</details>

### 3. 保存せずに終了する

編集内容を残さず終了する場合は<strong>変更を破棄して終了(Discard Change & Exit)</strong>を選びます。保存ダイアログの<strong>キャンセル(Cancel)</strong>は、保存を取り消して編集を続けるときに使います。

<img src="{{BASE_PATH}}/media/mesh-studio/save-actions.png" alt="保存と変更を破棄するボタン" width="693" height="120" loading="lazy" />
