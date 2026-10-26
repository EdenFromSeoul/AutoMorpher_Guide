---
title: "プリセット使用ガイド"
slug: "presets"
category: "使用ガイド"
description: "アバターの組み合わせに合わせた調整値をプリセットとして保存し、読み込みや編集をして再利用する方法です。"
order: 25
version: "3.4.1"
---

<div class="guide-intro">
  <p><strong>プリセット（Preset）</strong>は、アバターの組み合わせに合わせたBlendShape・ボーン・胸の対応位置や、一部の変形オプションを保存して再利用できる機能です。<br>よく使う変換設定を保存したり、ほかのユーザーが作成したプリセットを読み込んで活用したりできます。</p>
</div>

<aside class="admonition tip">
  <strong>ほかのユーザーのプリセットを使って、自分のプリセットも共有しましょう！</strong>
  <p><a href="https://discord.gg/Czuxfw8ng8"><b>Discordサーバー</b></a>の<b>💾｜preset-share</b>チャンネルでは、ほかのきせったユーザーが作成したプリセットをダウンロードできます。サーバーに参加し、使いたいアバターの組み合わせに合うプリセットを探してみてください。満足のいく変換結果が得られたプリセットがあれば、ぜひ共有してください。</p>
</aside>

<iframe class="youtube-embed" id="preset-video" src="https://www.youtube-nocookie.com/embed/1y4bThRyBIw" title="プリセット使用ガイド動画" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. 使用前の準備

プリセット機能を使うには、**変換元アバター**・**着せる衣装**・**変換先アバター**をすべて割り当ててください。変換元アバターの代わりに変換元プロファイルを使用する場合は、**Profile**を指定します。

まだ割り当てていない場合は、[衣装自動対応ガイドの**4. きせった (Kisetter)の設定**](../auto-fitting/#4-きせった-kisetter-の設定)を確認してください。

!!! info "ProfileとPresetは異なる機能です"
    Profileは、変換元アバターの代わりに使用できる変換元データです。<br>
    Presetは、変形に使用する調整値を保存した設定です。プロファイルを使用する場合も、プリセットを併用できます。

<span id="2-プリセットを読み込む" class="doc-anchor-alias" data-anchor-target="2-プリセットを読み込んで使う" aria-hidden="true"></span>

## 2. プリセットを読み込んで使う

Unityプロジェクトにすでに入っているプリセットを使う場合は、下の[**読み込んで適用する**](#読み込んで適用する)へ進んでください。ほかのユーザーのプリセットを使いたい場合や、受け取ったファイルを追加する場合は、次の手順を確認してください。

<span id="9-プリセットを追加する" class="doc-anchor-alias" data-anchor-target="preset-download" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-download" open>
<summary>ほかのユーザーのプリセットをダウンロード・追加する</summary>

ほかのユーザーが作成したプリセットは、[**Discordサーバー**](https://discord.gg/Czuxfw8ng8)の<strong>💾｜preset-share</strong>チャンネルで入手できます。すでにファイルを受け取っている場合は、Unityに追加する手順から進めてください。別の場所で入手したプリセットも、同じ方法で追加できます。

1. サーバーに参加し、**💾｜preset-share**チャンネルを開きます。
2. **変換先アバター**の名前で投稿を探し、本文に記載された**変換元アバター → 変換先アバター**の組み合わせと使用条件を確認します。
3. 添付されたプリセットをダウンロードします。ZIPファイルの場合は、先に解凍してください。
4. ダウンロードしたファイル、または解凍したファイルの形式に合わせて、Unityプロジェクトに追加します。

<div class="preset-file-types">

| ファイル形式 | 追加方法 |
| --- | --- |
| `.unitypackage` | 使用するUnityプロジェクトを開いた状態でファイルをダブルクリックし、**Import**を押します。取り込んだプリセットが下記フォルダー内にあることを確認してください。 |
| `.asset` | `Assets/@Eden_Tools/Kisetter/Presets`フォルダー内に、プリセットの`.asset`ファイルを入れます。 |

</div>

プリセットの保存先: `Assets/@Eden_Tools/Kisetter/Presets`

追加できたら、下の[**読み込んで適用する**](#読み込んで適用する)へ進んでください。読み込みウィンドウの**更新**を押すと、追加したプリセットが一覧に反映されます。

<button type="button" class="doc-details-close" data-details-close>ダウンロード・追加の説明を閉じる</button>
</details>

### 読み込んで適用する

1. **プリセット**欄の**読み込み**を押します。

   ![プリセット欄の読み込みボタンの位置]({{BASE_PATH}}/media/presets/load-preset.png)

2. 新しいプリセットを追加した場合は、読み込みウィンドウで**更新**を押します。
3. **変換元アバター**と**変換先アバター**の名前で一覧を絞り込みます。

   ![変換元アバターと変換先アバターの名前でプリセット一覧を絞り込む画面]({{BASE_PATH}}/media/presets/filter-avatars.png)

   - 名前はあらかじめ決められたものではなく、プリセットの作成者が作成時や保存時に自由に指定・変更したものです。
4. **プリセット一覧**から使いたいプリセットを選び、**適用**を押します。
5. 適用後は、**BlendShape**や必要な設定が衣装に合っているか確認してから、**着せる**を押して変形を進めてください。調整が必要な場合は、[**プリセットを作成・編集する**](#4-プリセットを作成-編集する)を確認してください。

!!! warning "適用時のメッセージを確認してください"
    プリセットと現在のアバターのボーン構成が合わない場合は、適用できないことがあります。変換先アバターのボーン設定が保存時と異なるというメッセージが表示されたら、適用結果を確認し、必要に応じてボーンを調整してください。同じアバターの組み合わせでも、衣装や体型の設定によって結果は変わることがあります。

<span id="5-適用前の状態に戻す" class="doc-anchor-alias" data-anchor-target="preset-restore" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-restore" open>
<summary>適用前の状態に戻す</summary>

![プリセットの適用前の状態に戻すボタンの位置]({{BASE_PATH}}/media/presets/restore-previous.png)

読み込んだプリセットが合わない場合は、**適用前に戻す**を押します。**最後にプリセットを適用する直前の設定とBlendShape値**に戻り、プリセットの選択が解除されます。

この機能は、変換元アバターまたはプロファイル、着せる衣装、変換先アバターが適用時と同じ場合に使用できます。アバターや衣装の組み合わせを変更した後は、適用前の状態に戻せません。

プリセットファイルを削除したり、すでに生成された変形結果をすべて元に戻したりする機能ではありません。

<button type="button" class="doc-details-close" data-details-close>適用前に戻す説明を閉じる</button>
</details>

<span id="3-直前の変形に使った設定をプリセットとして保存する" class="doc-anchor-alias" data-anchor-target="3-プリセットを保存-共有する" aria-hidden="true"></span>

## 3. プリセットを保存・共有する

直前に完了した変形で使用した設定値を保存するときに使います。事前調整で変更したボーン・胸のマッチング調整値もプリセットに含まれます。

1. このボタンは変形完了後にのみ有効になります。まず**着せる**で変形を最後まで完了してください。段階的に進める場合は、**Weighting**まで完了します。
2. **プリセット**欄の**直前の変形をプリセット保存**を押します。

   ![直前の変形をプリセット保存ボタンの位置]({{BASE_PATH}}/media/presets/save-last-conversion.png)

3. 保存ウィンドウで以下の項目を確認し、必要に応じて名前を変更します。

   | 項目 | 入力する内容 |
   | --- | --- |
   | **プリセット名** | 後から見分けやすいプリセットの名前 |
   | **元のアバター名** | 変換元アバターを識別する名前 |
   | **対象のアバター名** | 変換先アバターを識別する名前 |

   ![プリセット名と元・対象のアバター名を入力する保存ウィンドウ]({{BASE_PATH}}/media/presets/save-preset-dialog.png)

4. **保存**を押し、確認ダイアログで保存を確定します。
5. 保存完了のメッセージが表示されると、プリセットが作成され、Kisetterウィンドウで自動的に選択されます。

!!! info "現在の値ではなく、直前の変形に使用した値を保存します"
    変形完了後に設定値を変更しても、保存されるのは直前の変形時の設定値です。変更後の値を保存するには、もう一度変形を完了するか、以下のプリセット作成・編集機能を使ってください。同じ変形結果の設定を一度保存するとボタンは無効になり、再度変形を完了すると保存できるようになります。

満足のいく変換結果が得られたら、保存したプリセットを[**💾｜preset-share**チャンネル](https://discord.gg/Czuxfw8ng8)で共有してみてください。ほかのきせったユーザーの衣装対応にも役立ちます。

<span id="8-プリセットを書き出す" class="doc-anchor-alias" data-anchor-target="preset-share" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-share" open>
<summary>自分のプリセットをDiscordで共有する</summary>

1. UnityのProjectウィンドウで`Assets/@Eden_Tools/Kisetter/Presets`フォルダーを開き、共有するプリセットを選びます。複数のプリセットをまとめて選ぶこともできます。

   ![UnityのProjectウィンドウにあるAssets、@Eden_Tools、Kisetter、Presetsフォルダーと保存済みプリセットの一覧]({{BASE_PATH}}/media/presets/preset-folder.png)

2. <strong>右クリック → Export Package…</strong>を選び、含めるファイルを確認してから<strong>Export…</strong>を押し、ファイル名と保存先を指定します。

   ![複数のプリセットを選択し、右クリックメニューからExport Packageを選ぶ画面]({{BASE_PATH}}/media/presets/export-package.png)

3. 書き出した`.unitypackage`ファイルを**ZIP形式で圧縮**します。
4. [**Discordサーバー**](https://discord.gg/Czuxfw8ng8)に参加し、**💾｜preset-share**チャンネルで**新しい投稿**を作成してZIPファイルを添付します。投稿内容は、チャンネルの**投稿ガイドライン**に沿って記入してください。

書き出した`.unitypackage`ファイルは、プリセットを別のUnityプロジェクトへ移す場合にも使えます。

<button type="button" class="doc-details-close" data-details-close>共有の説明を閉じる</button>
</details>

<details class="doc-optional-step" id="保存名と保存先">
<summary>保存名と保存先</summary>

- **元のアバター名**と**対象のアバター名**には、英字・数字・空白と`_ - . ( ) [ ] +`のみ使用できます。この名前が読み込みウィンドウのアバター一覧に表示されます。
- **プリセット名**には、ファイル名に使用できない文字を入力しないでください。名前の末尾にピリオドは使用できません。
- プリセットは、Unityプロジェクトの`Assets/@Eden_Tools/Kisetter/Presets`内に、**変換元アバター / 変換先アバター / プリセット名**ごとのフォルダーと`.asset`ファイルとして保存されます。
- 同じアバターの組み合わせで同名のプリセットがある場合、上書き確認が表示されます。既存のプリセットを残すには、キャンセルして別のプリセット名で保存してください。

<button type="button" class="doc-details-close" data-details-close>保存名と保存先の説明を閉じる</button>
</details>

<span id="6-保存される内容と注意事項" class="doc-anchor-alias" data-anchor-target="preset-contents" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-contents">
<summary>保存される内容と保存されない内容</summary>

| 区分 | 内容 |
| --- | --- |
| **保存される調整値** | アバターの胴体MeshのBlendShape値、アバターボーンの位置・回転・大きさの調整値、胸の対応位置情報、プリセットが対応している変形オプション |
| **保存されない内容** | 衣装自体の調整値、Scene内のアバター・衣装オブジェクトそのもの、完成した衣装のPrefabやMeshファイル |

プリセットは、**Kisetterのすべての設定や作業結果を丸ごと保存する機能ではありません。** 成果物のファイルは、通常の保存・エクスポート機能で別途保存してください。

<button type="button" class="doc-details-close" data-details-close>保存内容の説明を閉じる</button>
</details>

<span id="4-新しいプリセットを作成する-既存のプリセットを編集する" class="doc-anchor-alias" data-anchor-target="4-プリセットを作成-編集する" aria-hidden="true"></span>

## 4. プリセットを作成・編集する

変形を実行せずに新しいプリセットを作成したいときや、読み込んだプリセットをさらに調整したいときに使います。

1. Kisetterウィンドウの**プリセット作成・編集**を展開し、目的に合ったボタンを選びます。

   ![新しいプリセットを作成ボタンと読み込んだプリセットを編集ボタンの位置]({{BASE_PATH}}/media/presets/create-edit-preset.png)

   - **新しいプリセットを作成**: 現在のアバターの組み合わせで、新しいプリセットを作成します。
   - **読み込んだプリセットを編集**: 読み込み済みのプリセットをさらに編集します。
2. 編集画面で必要な項目を調整します。

   | タブ | 調整する内容 |
   | --- | --- |
   | **BlendShape** | **変換元アバター**または**変換先アバター**を選び、胴体MeshのBlendShape値を調整します。 |
   | **マッチング調整** | ボーンと胸の対応位置を調整します。 |
   | **オプション調整** | 体表面との間隔やスムージングなど、きせったの基本・詳細変形オプションを調整します。 |

   各機能の詳しい説明は、以下の項目を展開して確認してください。

   <details class="doc-optional-step">
   <summary>アバターの表示設定</summary>

   画面上部で、アバターと衣装を見やすい状態に設定します。

   ![アバターの表示方法・間隔・不透明度と衣装の表示設定]({{BASE_PATH}}/media/presets/avatar-view-settings.png)

   **アバター表示**: 並べて表示では2体のアバターを左右に配置します。重ねて表示では2体を重ね、体型の違いを比較できます。

   **アバター間隔**: 並べて表示で、2体のアバターの表示間隔を調整します。重ねて表示では使用できません。

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

   **体型差補正**: 変換元アバターと変換先アバターの体型差を補正する機能です。アバター間で胸の大きさが大きく異なる場合は、このオプションの使用をおすすめします。胸のマッチング調整は、このオプションが有効な場合のみ使用できます。

   **プレビュー**: オンを選ぶと、おおよその体型補正結果を確認できます。

   **体型補正プレビューを更新**: 変更した設定をプレビューに反映します。反映には少し時間がかかることがあります。

   <button type="button" class="doc-details-close" data-details-close>プレビューの説明を閉じる</button>
   </details>

   <details class="doc-optional-step">
   <summary>BlendShapeタブ</summary>

   ![BlendShapeタブとボーンポーズの更新ボタン]({{BASE_PATH}}/media/presets/blendshape-adjustment.png)

   **現在のBlendShapeに合わせてボーンポーズを更新**: 変更したBlendShapeに合わせて、マッチングに使うボーンのポーズを再計算します。BlendShapeを変更した後は、更新することをおすすめします。

   **変換元アバター**または**変換先アバター**を選び、一覧のBlendShape値をスライダーや数値入力で調整します。

   変換元アバターのBlendShapeを調整すると、着せる衣装にも同じ名前のBlendShapeがある場合、その値も連動して変更されます。名前が異なる場合や、該当する項目がない場合は連動しません。

   <br>

   **元のBody Mesh**などの胴体Mesh欄: 「胴体 Meshを自動割り当て」が有効な場合、自動検出された胴体Meshが表示されます。誤ったMeshが選ばれた場合や、胴体が複数のMeshで構成されている場合は、手動で指定できます。

   <button type="button" class="doc-details-close" data-details-close>BlendShapeの説明を閉じる</button>
   </details>

   <details class="doc-optional-step">
   <summary>マッチング調整タブ</summary>

   ボーンと胸の対応位置を事前に調整するときに使います。

   ![胸とボーンのマッチング調整およびボーン選択画面]({{BASE_PATH}}/media/presets/matching-adjustment.png)

   **マッチング調整をリセット**: ボーン・胸のマッチング調整を初期状態に戻します。

   <br>

   **胸のマッチング調整**: 変換元アバターと変換先アバターの胸の領域が正しく対応するように、基準位置を調整します。自動で設定された位置が実際の体型と異なる場合に修正してください。

   ※ 画面上部の体型差補正が有効な場合のみ使用できます。

   **胸調整を表示**: オンを選ぶと、胸のガイド板と基準点を表示します。

   **胸の範囲調整**: Sceneビューで、ガイド板中央の移動ツール（Gizmo）のY軸を動かし、胸の上端・下端に位置を合わせます。

   ※ 2体のアバターのガイド板を同じ高さにそろえるのではなく、それぞれのアバターの実際の胸の位置に合わせてください。

   **乳首位置の調整**: 胴体Meshの左右の胸の前面で、最も突き出ている部分をマウスでドラッグして指定します。キャンセルするにはEscを押します。この位置は、胸の突出部をどこに対応させるかを決める基準点になります。

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

   プリセットに保存する基本・詳細変形オプションを調整します。

   ![体表面との間隔やスムージングなどの基本・詳細変形オプション]({{BASE_PATH}}/media/presets/fitting-options.png)

   **体表面との間隔**: 衣装とアバターの胴体の間に確保する最小間隔を設定します。

   **胴体 Meshを自動割り当て**: アバターの胴体Meshを自動で検出します。胴体Meshを手動で指定する場合は、自動割り当てを無効にしてください。

   **体型差補正**: 変換元アバターと変換先アバターの体型差を補正します。編集画面上部の同じオプションと連動しています。

   **スムージング**: 変形を滑らかに整える強さを調整します。

   **変形オプション**: 変形回数と身体との貫通補正回数を調整します。

   <br>

   参考: 各オプションの基本的な考え方は、[**パラメータの説明**](../parameters/)を確認してください。

   <button type="button" class="doc-details-close" data-details-close>オプション調整の説明を閉じる</button>
   </details>

3. 編集画面の**保存**を押し、**プリセット名**・**元のアバター名**・**対象のアバター名**を確認してから、**保存**を押して確認ダイアログで確定します。名前のルールや保存先は、[**保存名と保存先**](#保存名と保存先)を確認してください。
4. 保存完了のメッセージが表示されるとKisetter画面に戻り、保存したプリセットが自動的に選択されます。

この設定で衣装を対応させるには、**着せる**を押して変形を進めてください。

<details class="doc-optional-step" id="編集を終了-キャンセルする" open>
<summary>編集を終了・キャンセルする</summary>

**Kisetterに戻る**を押すと、前の画面に戻ります。未保存の変更がある場合は、以下のいずれかを選んでください。

- **保存して戻る**: 保存ウィンドウで名前を確認し、プリセットを保存します。
- **保存せずに戻る**: 今回の編集内容を破棄して戻ります。
- **編集を続ける**: 編集画面に戻り、調整を続けます。

<button type="button" class="doc-details-close" data-details-close>編集終了の説明を閉じる</button>
</details>

保存したプリセットを共有する場合は、[**自分のプリセットをDiscordで共有する**](#preset-share)を確認してください。

<span id="7-ボタンが無効-プリセットが一覧に表示されない場合" class="doc-anchor-alias" data-anchor-target="5-トラブルシューティング" aria-hidden="true"></span>

## 5. トラブルシューティング

<details class="doc-optional-step">
<summary>「読み込み」または「新しいプリセットを作成」が無効な場合</summary>

変換元アバター（または変換元プロファイル）、着せる衣装、変換先アバターがすべて指定されているか確認してください。Unityが再生中の場合は再生を停止し、変形やプリセットの編集・保存が進行中の場合は、先に完了させてください。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>「読み込んだプリセットを編集」が無効な場合</summary>

まず**読み込み**で編集したいプリセットを選び、**適用**を押してください。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>「直前の変形をプリセット保存」が無効な場合</summary>

現在の作業で、**着せる**による変形を最後まで完了したか確認してください。段階的に進めた場合は、**Weighting**まで完了する必要があります。変形完了時と同じ変換元・変換先アバターの組み合わせで保存できます。同じ変形結果をすでに保存した場合は、再度変形を完了するとボタンが有効になります。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>プリセットが一覧に表示されない場合</summary>

プリセットの`.asset`ファイルが`Assets/@Eden_Tools/Kisetter/Presets`フォルダー内にあることを確認し、**更新**を押してください。**変換元アバター / 変換先アバター**の絞り込みによって表示されていない可能性も確認してください。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

<details class="doc-optional-step">
<summary>プリセットを適用できないというメッセージが表示される場合</summary>

選択したプリセットと衣装が、現在の変換元アバターに対応しているか確認してください。ボーン構造に互換性がないプリセットは、アバター名を変えるだけでは適用できません。

<button type="button" class="doc-details-close" data-details-close>解決方法を閉じる</button>
</details>

準備ができたら、[衣装自動対応ガイド](../auto-fitting/)に戻ってオプションを確認し、変形を進めてください。
