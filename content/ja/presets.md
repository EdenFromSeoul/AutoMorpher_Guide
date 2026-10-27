---
title: "プリセット使用ガイド"
slug: "presets"
category: "使用ガイド"
description: "アバターの組み合わせに合わせた調整値をプリセットとして保存し、読み込みや編集をして再利用する方法です。"
order: 25
version: "3.4.1"
---

<div class="guide-intro">
  <p><strong>プリセット（Preset）</strong>は、アバターの組み合わせに合わせた調整値を保存して再利用する機能です。<br>よく使う設定を保存したり、ほかのユーザーと設定を共有したりしてみてください。</p>
</div>

<aside class="admonition tip">
  <strong>ほかのユーザーのプリセットを使って、自分のプリセットも共有しましょう！</strong>
  <p><a href="https://discord.gg/Czuxfw8ng8"><b>Discordサーバー</b></a>の<b>💾｜preset-share</b>チャンネルで、プリセットを入手・共有できます。</p>
</aside>

<iframe class="youtube-embed" id="preset-video" src="https://www.youtube-nocookie.com/embed/1y4bThRyBIw" title="プリセット使用ガイド動画" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. 使用前の準備

プリセットを**作成・適用・編集するには**、**変換元アバター**・**着せる衣装**・**変換先アバター**を割り当てます。

- 変換元アバターの代わりに変換元プロファイルを使用する場合は、**Profile**を指定します。

## 2. プリセットを準備する

**ほかのユーザーのプリセットを読み込むことも、自分でプリセットを作ることもできます。**

使いたいプリセットがすでに追加されている場合は、[**3. プリセットを適用する**](#3-プリセットを適用する)に進んでください。

<span id="2-プリセットを読み込む" class="doc-anchor-alias" data-anchor-target="2-1-プリセットを読み込む" aria-hidden="true"></span>

<span id="2-プリセットを読み込んで使う" class="doc-anchor-alias" data-anchor-target="2-1-プリセットを読み込む" aria-hidden="true"></span>

<span id="2-プリセットファイルを追加する" class="doc-anchor-alias" data-anchor-target="2-1-プリセットを読み込む" aria-hidden="true"></span>

### 2-1. プリセットを読み込む

<span id="9-プリセットを追加する" class="doc-anchor-alias" data-anchor-target="preset-download" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-download">
<summary>ほかのユーザーのプリセットをダウンロード・追加する</summary>

配布元やほかのユーザーから、**変換元アバター → 変換先アバター**の組み合わせに合うプリセットを入手します。

[**Discordサーバー**](https://discord.gg/Czuxfw8ng8)でも、プリセットを共有できる<strong>💾｜preset-share</strong>チャンネルを運営しています。

1. `.ksPreset`ファイルを用意します。

   - `.asset`や`.unitypackage`を受け取った場合は、[**Unityで直接追加する**](#preset-unity-import)を確認してください。

2. **プリセットファイルの読み込み / 書き出し**を展開し、**読み込み**を押します。

   ![ファイル項目と読み込みボタンを赤枠で強調]({{BASE_PATH}}/media/presets/file-import-open-figma.webp)

3. ファイル選択ウィンドウで`.ksPreset`ファイルを1つ選びます。
4. **読み込みに成功しました。**という案内で**OK**を押します。

   ![プリセットの読み込み完了とOKボタン]({{BASE_PATH}}/media/presets/file-import-complete-figma.webp)

<h4 id="preset-import-conflict">同名のプリセットがある場合</h4>

プリセット名の重複を知らせるウィンドウが開いたら、以下のどちらかを選びます。

![名前の重複ウィンドウの上書きと名前変更ボタン]({{BASE_PATH}}/media/presets/file-import-conflict-figma.webp)

- **上書き**：既存のプリセットを受け取った内容に置き換えます。
- **名前を変更して保存**：新しいプリセット名を入力し、**保存**を押して別のプリセットとして追加します。

![新しいプリセット名と保存ボタン]({{BASE_PATH}}/media/presets/file-import-rename-figma.webp)

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<details class="doc-optional-step" id="preset-unity-import">
<summary>Unityで直接追加する (.asset / .unitypackage)</summary>

<div class="preset-file-types">

| ファイル形式 | 追加方法 |
| --- | --- |
| `.unitypackage` | 使用するUnityプロジェクトを開いた状態でファイルをダブルクリックし、**Import**を押します。 |
| `.asset` | `Assets/@Eden_Tools/Kisetter/Presets`フォルダーを開き、ファイルを移動します。 |

</div>

**プリセットを選択**ウィンドウが開いている場合は、**更新**を押します。

- `Assets/@Eden_Tools/Kisetter/Presets`フォルダーにファイルが正しく追加されているか確認してください。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<span id="4-新しいプリセットを作成する-既存のプリセットを編集する" class="doc-anchor-alias" data-anchor-target="2-2-プリセットを自分で作る" aria-hidden="true"></span>

<span id="4-プリセットを作成-編集する" class="doc-anchor-alias" data-anchor-target="2-2-プリセットを自分で作る" aria-hidden="true"></span>

### 2-2. プリセットを自分で作る

**自分で調整して作る方法**と**直前の変形に使用した値から作る方法**のどちらかを選んでください。

#### 自分で調整して作る

1. Kisetterウィンドウの**プリセット作成・編集**を展開し、**新しいプリセットを作成**を押します。

   ![新しいプリセットを作成ボタンと読み込んだプリセットを編集ボタンの位置]({{BASE_PATH}}/media/presets/create-edit-preset.png)

2. 編集画面で必要な項目を調整します。

   | タブ | 調整する内容 |
   | --- | --- |
   | **BlendShape** | **変換元アバター**または**変換先アバター**を選び、胴体MeshのBlendShape値を調整します。 |
   | **マッチング調整** | ボーンと胸の対応位置を調整します。 |
   | **オプション調整** | 体表面との間隔やスムージングなど、きせったの基本・詳細変形オプションを調整します。 |

   <details class="doc-optional-step">
   <summary>アバターの表示設定</summary>

   ![アバターの表示方法・間隔・不透明度と衣装の表示設定]({{BASE_PATH}}/media/presets/avatar-view-settings.png)

   **アバター表示**: 並べて表示では2体のアバターを左右に配置します。重ねて表示では2体を重ね、体型の違いを比較できます。

   **アバター間隔**: 並べて表示で、2体のアバターの間隔を調整します。

   **Source 不透明度**: 変換元アバターの不透明度を調整します。

   **Target 不透明度**: 変換先アバターの不透明度を調整します。

   **作業対象のみ表示**: 作業に関係のないSceneオブジェクトを一時的に非表示にします。

   **元の衣装を表示**: 変換元アバター側の衣装の表示・非表示を切り替えます。並べて表示で使用できます。

   **対象の衣装を表示**: 変換先アバター側の衣装の表示・非表示を切り替えます。

   <button type="button" class="doc-details-close" data-details-close>アバター表示の説明を閉じる</button>
   </details>

   <details class="doc-optional-step">
   <summary>体型差補正とプレビュー</summary>

   ![体型差補正とプレビューの設定、プレビュー更新ボタン]({{BASE_PATH}}/media/presets/body-shape-preview.png)

   **体型差補正**: 2体のアバターの体型差を補正します。胸の大きさが大きく異なる場合におすすめです。

   **プレビュー**: オンを選ぶと、おおよその体型補正結果を確認できます。

   **体型補正プレビューを更新**: 変更した設定をプレビューに反映します。

   <button type="button" class="doc-details-close" data-details-close>プレビューの説明を閉じる</button>
   </details>

   <details class="doc-optional-step">
   <summary>BlendShapeタブ</summary>

   ![BlendShapeタブとボーンポーズの更新ボタン]({{BASE_PATH}}/media/presets/blendshape-adjustment.png)

   **現在のBlendShapeに合わせてボーンポーズを更新**: BlendShape値を変更した後に押して、マッチングに使うボーンのポーズを更新します。

   **変換元アバター**または**変換先アバター**を選び、一覧のBlendShape値をスライダーや数値入力で調整します。

   変換元アバターのBlendShapeを調整すると、衣装に同じ名前のBlendShapeがある場合は連動して調整されます。

   <br>

   **元のBody Mesh**などの胴体Mesh欄: 誤ったMeshが選ばれた場合や、胴体が複数のMeshで構成されている場合は手動で指定します。

   <button type="button" class="doc-details-close" data-details-close>BlendShapeの説明を閉じる</button>
   </details>

   <details class="doc-optional-step">
   <summary>マッチング調整タブ</summary>

   ![胸とボーンのマッチング調整およびボーン選択画面]({{BASE_PATH}}/media/presets/matching-adjustment.png)

   **マッチング調整をリセット**: ボーン・胸のマッチング調整を初期状態に戻します。

   <br>

   **胸のマッチング調整**: 自動で設定された基準位置が実際の胸の位置と異なる場合に調整します。

   ※ 画面上部の体型差補正が有効な場合のみ使用できます。

   **胸調整を表示**: オンを選ぶと、胸のガイド板と基準点を表示します。

   **胸の範囲調整**: Sceneビューで、ガイド板中央の移動ツール（Gizmo）のY軸を動かし、胸の上端・下端に位置を合わせます。

   ※ ガイド板は各アバターの実際の胸の位置に合わせます。2体の板を同じ高さにそろえないでください。

   **乳首位置の調整**: 胴体Meshの左右の胸で、最も突き出ている部分をマウスでドラッグして指定します。Escでキャンセルします。

   <br>

   **ボーンのマッチング調整**<br>
   **W(移動)**: 選択したボーンの位置を調整します。<br>
   **E(回転)**: 選択したボーンの角度を調整します。<br>
   **R(拡縮)**: 選択したボーンの大きさを調整します。<br>
   **ミラー調整**: オンを選ぶと、反対側の対応するボーンも同時に調整します。片側だけを調整する場合はオフを選んでください。

   <button type="button" class="doc-details-close" data-details-close>マッチング調整の説明を閉じる</button>
   </details>

   <details class="doc-optional-step">
   <summary>オプション調整タブ</summary>

   ![体表面との間隔やスムージングなどの基本・詳細変形オプション]({{BASE_PATH}}/media/presets/fitting-options.png)

   **体表面との間隔**: 衣装とアバターの胴体の間に確保する最小間隔を設定します。

   **胴体 Meshを自動割り当て**: アバターの胴体Meshを自動で検出します。胴体Meshを手動で指定する場合は、自動割り当てを無効にしてください。

   **体型差補正**: 変換元アバターと変換先アバターの体型差を補正します。

   **スムージング**: 変形を滑らかに整える強さを調整します。

   **変形オプション**: 変形回数と身体との貫通補正回数を調整します。

   <br>

   各オプションの基本的な考え方は、[**パラメータの説明**](../parameters/)を確認してください。

   <button type="button" class="doc-details-close" data-details-close>オプション調整の説明を閉じる</button>
   </details>

3. 編集画面の**保存**を押して保存ウィンドウを開きます。**プリセット名**・**元のアバター名**・**対象のアバター名**を確認し、**保存**を押して確定します。
4. 保存したプリセットが選択された状態でKisetter画面に戻ります。

既存のプリセットを編集する場合は、**プリセットを選択**でプリセットを選んで**適用**を押し、続いて**読み込んだプリセットを編集**を押します。その後の調整・保存方法は同じです。

<details class="doc-optional-step" id="編集を終了-キャンセルする" open>
<summary>編集を終了・キャンセルする</summary>

**Kisetterに戻る**を押したときに未保存の変更がある場合は、以下から選びます。

- **保存して戻る**: 保存ウィンドウで名前を確認し、プリセットを保存します。
- **保存せずに戻る**: 今回の編集内容を破棄して戻ります。
- **編集を続ける**: 編集画面に戻り、調整を続けます。

<button type="button" class="doc-details-close" data-details-close>編集終了の説明を閉じる</button>
</details>

<span id="3-直前の変形に使った設定をプリセットとして保存する" class="doc-anchor-alias" data-anchor-target="直前の変形に使用した値から作る" aria-hidden="true"></span>

<span id="完了した変形の設定から作る" class="doc-anchor-alias" data-anchor-target="直前の変形に使用した値から作る" aria-hidden="true"></span>

#### 直前の変形に使用した値から作る

1. **着せる**で変形を完了します。段階的に進める場合は、**Weighting**まで完了します。
2. **プリセット**欄の**直前の変形をプリセット保存**を押します。

   ![直前の変形をプリセット保存ボタンの位置]({{BASE_PATH}}/media/presets/save-last-conversion.png)

3. 保存ウィンドウで以下の項目を確認し、必要に応じて名前を変更します。

   | 項目 | 入力する内容 |
   | --- | --- |
   | **プリセット名** | プリセットの名前 |
   | **元のアバター名** | 変換元アバターの名前 |
   | **対象のアバター名** | 変換先アバターの名前 |

   ![プリセット名と元・対象のアバター名を入力する保存ウィンドウ]({{BASE_PATH}}/media/presets/save-preset-dialog.png)

4. **保存**を押し、確認ダイアログで保存を確定します。
5. 保存完了のメッセージが表示されると、プリセットが作成され、Kisetterウィンドウで自動的に選択されます。

!!! info "現在の値ではなく、直前の変形に使用した値を保存します"
    変形後に変更した値を保存するには、もう一度変形を完了するか、<strong>自分で調整して作る方法</strong>を使ってください。

<details class="doc-optional-step" id="保存名と保存先">
<summary>保存名と保存先</summary>

- プリセットは`Assets/@Eden_Tools/Kisetter/Presets`フォルダーに保存されます。
- 同じアバターの組み合わせに同じ名前で保存すると、上書き確認が表示されます。既存のプリセットを残す場合は別の名前で保存してください。

<button type="button" class="doc-details-close" data-details-close>保存名と保存先の説明を閉じる</button>
</details>

<span id="6-保存される内容と注意事項" class="doc-anchor-alias" data-anchor-target="preset-contents" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-contents">
<summary>保存される内容と保存されない内容</summary>

| 区分 | 内容 |
| --- | --- |
| **保存される調整値** | アバターの胴体MeshのBlendShape値、アバターボーンの位置・回転・大きさの調整値、胸の対応位置情報、プリセットが対応している変形オプション |
| **保存されない内容** | 衣装自体の調整値、Scene内のアバター・衣装オブジェクトそのもの、完成した衣装のPrefabやMeshファイル |

<button type="button" class="doc-details-close" data-details-close>保存内容の説明を閉じる</button>
</details>

<span id="読み込んで適用する" class="doc-anchor-alias" data-anchor-target="3-プリセットを適用する" aria-hidden="true"></span>

<span id="プリセットを適用する" class="doc-anchor-alias" data-anchor-target="3-プリセットを適用する" aria-hidden="true"></span>

## 3. プリセットを適用する

1. **プリセット**欄の**プリセットを選択**を押します。

   ![プリセットを選択ボタンを赤枠で強調]({{BASE_PATH}}/media/presets/file-select-open-figma.webp)

2. **変換元アバター**と**変換先アバター**の名前で、使用するアバターに合うプリセットを探します。

   ![アバターの絞り込みとプリセット選択・適用ボタン]({{BASE_PATH}}/media/presets/file-select-list-figma.webp)

3. **プリセット一覧**から使いたいプリセットを選び、**適用**を押します。
4. 適用された**BlendShape**値や設定が衣装に合っているか確認します。修正が必要な場合は、**読み込んだプリセットを編集**で調整して保存します。設定を確認したら、**着せる**を押して変形を進めます。

!!! warning "適用時のメッセージを確認してください"
    ボーン設定が異なるというメッセージが表示されたら、適用結果を確認し、必要な部分を<strong>読み込んだプリセットを編集</strong>で調整してください。

<span id="5-適用前の状態に戻す" class="doc-anchor-alias" data-anchor-target="preset-restore" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-restore" open>
<summary>適用前の状態に戻す</summary>

![プリセットの適用前の状態に戻すボタンの位置]({{BASE_PATH}}/media/presets/restore-previous.png)

**適用前に戻す**を押すと、最後にプリセットを適用する直前の設定とBlendShape値に戻ります。

適用後に変換元アバター・プロファイル、衣装、変換先アバターを変更した場合は戻せません。

すでに生成された変形結果は元に戻りません。

<button type="button" class="doc-details-close" data-details-close>適用前に戻す説明を閉じる</button>
</details>

<span id="3-プリセットを保存-共有する" class="doc-anchor-alias" data-anchor-target="4-プリセットを書き出して共有する" aria-hidden="true"></span>

## 4. プリセットを書き出して共有する

満足のいく変換結果が得られたら、プリセットを[**💾｜preset-share**チャンネル](https://discord.gg/Czuxfw8ng8)で共有してみてください。

<span id="8-プリセットを書き出す" class="doc-anchor-alias" data-anchor-target="preset-share" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-share" open>
<summary>Kisetterから書き出して共有する</summary>

1. **プリセットファイルの読み込み / 書き出し**を展開し、**書き出し**を押します。

   ![ファイル項目と書き出しボタンを赤枠で強調]({{BASE_PATH}}/media/presets/file-export-open-figma.webp)

2. **変換元アバター**と**変換先アバター**の名前で一覧から書き出すプリセットを探し、選択して**書き出し**を押します。

   ![書き出すプリセットの選択と書き出しボタン]({{BASE_PATH}}/media/presets/file-export-list-figma.webp)

3. 保存先とファイル名を指定し、`.ksPreset`ファイルとして保存します。
4. **書き出しが完了しました。**という案内で**OK**を押します。

   ![プリセットの書き出し完了とOKボタン]({{BASE_PATH}}/media/presets/file-export-complete-figma.webp)

プリセットを共有するには、それぞれ書き出したファイルをそのまま共有するか、ZIPにまとめて共有します。

[**Discordサーバー**](https://discord.gg/Czuxfw8ng8)の<strong>💾｜preset-share</strong>チャンネルで共有する場合は、チャンネルの<strong>投稿ガイドライン</strong>に沿って投稿してください。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<details class="doc-optional-step" id="preset-unity-export">
<summary>Unityから直接書き出す (.unitypackage)</summary>

1. UnityのProjectウィンドウで`Assets/@Eden_Tools/Kisetter/Presets`を開き、共有するプリセットを選びます。複数をまとめて選ぶこともできます。

   ![UnityのProjectウィンドウのPresetsフォルダーとプリセット一覧]({{BASE_PATH}}/media/presets/preset-folder.png)

2. <strong>右クリック → Export Package…</strong>を選び、含めるファイルを確認してから<strong>Export…</strong>を押し、ファイル名と保存先を指定します。

   ![プリセットを選択してExport Packageを開く画面]({{BASE_PATH}}/media/presets/export-package.png)

受け取った`.unitypackage`は、使用するプロジェクトで開いて**Import**します。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<span id="7-ボタンが無効-プリセットが一覧に表示されない場合" class="doc-anchor-alias" data-anchor-target="5-トラブルシューティング" aria-hidden="true"></span>

## 5. トラブルシューティング

<details class="doc-optional-step" id="preset-file-help-1">
<summary>ファイルの読み込み・書き出しボタンが見つからない、または無効な場合</summary>

**プリセットファイルの読み込み / 書き出し**を展開します。ボタンが無効な場合は、変形・編集・保存を完了し、Unityの再生中であれば停止します。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<details class="doc-optional-step" id="preset-file-help-2">
<summary>ファイルを読み込めない、または対応していないバージョンの場合</summary>

Kisetterから書き出した`.ksPreset`ファイルか確認します。未対応のバージョンという案内が出た場合は、ファイルを作成したKisetterのバージョンを確認してください。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<details class="doc-optional-step" id="preset-file-help-3">
<summary>名前の重複ウィンドウで上書きできない場合</summary>

**名前を変更して保存**を選び、別のプリセット名で保存します。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<details class="doc-optional-step" id="preset-file-help-4">
<summary>読み込みには成功したが適用できない場合</summary>

**プリセットを選択**で現在のアバターの組み合わせに合うプリセットを選び、**適用**を押します。適用時に表示されるメッセージを確認してください。

<button type="button" class="doc-details-close" data-details-close>説明を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>「プリセットを選択」または「新しいプリセットを作成」が無効な場合</summary>

変換元アバター（または変換元プロファイル）、着せる衣装、変換先アバターがすべて指定されているか確認してください。Unityが再生中の場合は再生を停止し、変形やプリセットの編集・保存が進行中の場合は、先に完了させてください。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>「読み込んだプリセットを編集」が無効な場合</summary>

まず**プリセットを選択**で編集したいプリセットを選び、**適用**を押してください。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>「直前の変形をプリセット保存」が無効な場合</summary>

現在の作業で、**着せる**による変形を最後まで完了したか確認してください。段階的に進めた場合は、**Weighting**まで完了する必要があります。変形完了時と同じ変換元・変換先アバターの組み合わせで保存できます。同じ変形結果をすでに保存した場合は、再度変形を完了するとボタンが有効になります。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>プリセットが一覧に表示されない場合</summary>

**変換元アバター / 変換先アバター**の絞り込みを確認します。Unityで直接追加した場合は、`.asset`をPresetsフォルダーの直下に置いて**更新**を押します。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>プリセットを適用できないというメッセージが表示される場合</summary>

現在の変換元アバター・変換先アバターの組み合わせに合うプリセットか確認してください。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

準備ができたら、[衣装自動対応ガイド](../auto-fitting/)に戻ってオプションを確認し、変形を進めてください。
