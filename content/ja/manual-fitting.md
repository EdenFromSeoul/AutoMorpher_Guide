---
title: "Manual Fitting Mode"
slug: "manual-fitting"
category: "使用ガイド"
description: "自動変形とボーンの手動調整を組み合わせる手順です。"
order: 30
---

```
⚫ ユーザーが Target Avatar に合わせて手動で調整した衣装を基準に、変形を行うモードです。

⚫ 対応中に Bone Adjustment ウィンドウから必要な部分を追加で調整することで、より精密な変形ができます。
```

!!! warning "영상 링크 준비 중"
    이 단계의 원본 영상은 GitHub 파일 크기 제한을 초과하여 현재 배포본에서 제외되었습니다. YouTube 영상으로 교체될 예정입니다.

## [1] 準備

### 1. 🧍‍♂️Source Avatar Setup

1. アバターを Scene に配置し、**Rotation** と **Scale** をリセットします。
2. アバターに **Animator** と、身体に該当する **Skinned Mesh Renderer** が正しく存在しているか確認します。

    ![]({{BASE_PATH}}/media/093321aadd4b9de3.png)

3. Body Mesh が縮小されたり隠れたりせず、全体が表示されるように BlendShape を調整します。

![]({{BASE_PATH}}/media/466cf73fc279e345.png)

### 1. 👕Source Clothes Setup

1. 衣装を Scene に配置し、**Source Avatar** の子オブジェクトにしたうえで、位置とサイズを調整します。

    ![]({{BASE_PATH}}/media/e0968448f39f5435.png)

2. Source Avatar に合わせて、衣装の **BlendShape** を調整します。

    ![]({{BASE_PATH}}/media/d89034290e6953d7.png)

3. 衣装に合わせて、アバター側の 👠 **Foot Heel** や 👙 **Breast** などの BlendShape も調整します。

    ![]({{BASE_PATH}}/media/ebdd8f821892ae10.png)


### 1-2. 📄 Source Profile を使用する場合

1. 📄 Profile を準備します。
- Profile の保存先: `Assets\@Eden_Tools\Kisetter\Profiles`
- 使用したい Profile が一覧に表示されない場合は、上記のパスに **Profile フォルダを直接追加**してください。
    - Profile フォルダ構成例:
    Profiles
    └─ ProfileName
        ├─ ProfileName.json
        └─ ProfileName.eb

    ![image.png]({{BASE_PATH}}/media/9e1066872143049d.png)

    ![image.png]({{BASE_PATH}}/media/1f6499e157008668.png)

1. Profile が Foot_Heel を調整した Profile の場合は、Target Avatar もそれに合わせて近い足の形になるように BlendShape を調整してください。
    - **衣装に合わせて Foot_Heel または HighHeel Profile を使用してください。**

### 2. 🧍Target Avatar Setup

1. アバターを Scene に配置し、**Rotation** と **Scale** をリセットします。
2. アバターに **Animator** と、身体に該当する **Skinned Mesh Renderer** が正しく存在しているか確認します。

    ![image.png]({{BASE_PATH}}/media/f32c8c8362afe00c.png)

3. Body Mesh が縮小されたり隠れたりせず、全体が表示されるように BlendShape を調整します。

    ![image.png]({{BASE_PATH}}/media/63feca0954364a0e.png)

    - Source 側で Foot Heel を調整している場合は、Target Avatar も近い足の形になるように BlendShape を調整してください。

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/7307a7d1c11dca6e.png" alt="Bad Case 1" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/00934d0789ea93c5.png" alt="Good Case 1" />
  </figure>
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/0020676efddbe42b.png" alt="Bad Case 2" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/3c3912e4aed163f4.png" alt="Good Case 2" />
  </figure>
</div>

## [2] 変形設定と実行

### 3. 🔧きせった (Kisetter)の設定

1. きせった (Kisetter)をHierarchyに配置します。
    - Prefabのパス:`Assets\@Eden_Tools\Kisetter\Kisetter.prefab`

### 4. きせった (Kisetter)の設定

1. 「きせった (Kisetter) - Manual Fitting Mode」をクリックします。

![image.png]({{BASE_PATH}}/media/4b01517fa984a0e9.png)

1. 事前に用意した**アバターと** **衣装をきせった (Kisetter)**に割り当てます。

    ![image.png]({{BASE_PATH}}/media/accec900aaa7f385.png)

    - **Source Avatar Object**: 衣装の元となるアバターオブジェクト
    - **Source Clothes Object**: 衣装オブジェクト
    - **Target Avatar Object**: 衣装を対応させる対象のアバターオブジェクト
2. Profile Mode の場合

    ![image.png]({{BASE_PATH}}/media/bbdb578a05be2ec9.png)

    - **Profile**: 使用する衣装に合った Profile
    - **Source Clothes Object**: 衣装オブジェクト
    - **Target Avatar Object**: 対応させるアバターオブジェクト

### 5. きせった (Kisetter) オプション設定

1. **Body Meshを自動的に割り当てる**
    1. チェックを入れると、アバターの胴体に該当するメッシュを自動的に検出します。
    2. **Body Meshが自動的に検出されなかった場合、Body Meshの選択ウィンドウが表示されます。**
        1. このウィンドウで**胴体に該当するメッシュを選択し、[Select]ボタンをクリックしてください。**

    ![]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

2. **Mesh List**

    ![]({{BASE_PATH}}/media/96e934f55c9b6933.png)

    - **[Refresh Mesh List]** ボタンを押して、メッシュリストを更新します。
    - 変形させないメッシュがある場合は、該当する項目のチェックを外してください。
3. **Body Gap**
    - 衣装とボディの間の最小距離を設定するパラメータです。
    - ボディの貫通（穴あき）がひどい場合は、この値を大きくしてください。
4. **Skip Foot Fitting**
    - **靴にFitting（形状の変形）**を適用しないオプションです。（スケール調整はそのまま適用されます）
    - 足の細かな形状に合わせて変形させたい場合は、このオプションを無効にしてください。
5. **[Advanced Option] - [Save Settings] - Save Result As BlendShape**
    - 有効にすると、変形結果をメッシュに直接反映せず、BlendShapeとして保存します。
6. **[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar**
    - 衣装メッシュのウェイトを、Target Avatarのアーマチュアを基準に再設定するオプションです。
    - Modular Avatarなどを使用せず、衣装をアバターのボーンに直接接続する必要がある場合のみ有効にしてください。
- その他のパラメータに関する詳しい説明は、以下のドキュメントを参照してください。
    - [パラメータの説明](../parameters/)

### 6. 変形の実行

「**Run ALL」を**押して、変形を進めます。

![image.png]({{BASE_PATH}}/media/388999557ff08862.png)

- FittingとWeightingをステップごとに実行する場合は、以下のStep-by-step Progressを使用します。

### 7. ボーン調整

Manual Fitting Mode の場合、自動対応された衣装のボーンを調整できます。

![image.png]({{BASE_PATH}}/media/300303c039d540ee.png)

#### 操作方法

![image.png]({{BASE_PATH}}/media/0403a56fedd1ed35.png)

- 上部の **W: Move / E: Rotation / R: Scale** をクリックするか、キーボードの **W / E / R** キーを押すことで、操作モードを切り替えられます。
    - **W: Move**: Position の移動
    - **E: Rotation**: Rotation の回転
    - **R: Scale**: Scale の調整

#### 左右対称

![image.png]({{BASE_PATH}}/media/7b0f0c16790de3d6.png)

- 左右対称になるボーンがある場合、**Mirror** ボタンで一緒に動かすことができます。
- **Mirror: On** の場合、アバター基準の X 軸で鏡のように動きます。

#### ボーンリスト

![image.png]({{BASE_PATH}}/media/df7b1834b78e0a74.png)

- 調整できるボーンの一覧です。
- 調整可能なボーンが Bones List に表示されます。
    - **Bone List: Humanoid Bone Only**
        - Bone List に Hip や Chest などの Humanoid Bone のみが表示されます。
    - **Bone List: Show Other Bones**
        - Hip や Chest などの Humanoid Bone 以外にも、その子ボーンが Bone List に表示されます。
- **Humanoid Bone Picker**
    - 調整したい部位をクリックして、ボーンを選択できます。
- 画面上のアバターに表示されている青い点をクリックしても、ボーンを選択して調整できます。

**帽子、手袋、靴などは、このオプションを使って細かく追加調整することをおすすめします。**

![image.png]({{BASE_PATH}}/media/4db99de895e9a2be.png)

- 調整が完了したら、下のボタンを押して対応を進めてください。

### 8. メッシュ編集

Manual Fitting Modeでは、自動フィッティングされた衣装のメッシュをScene View上で直接調整できます。

![image.png]({{BASE_PATH}}/media/a68b20823cea5910.png)

#### 調整するメッシュを選択

![image.png]({{BASE_PATH}}/media/ed253ff14c2595e7.png)

- 編集するメッシュを`Main`として選択します。
- 複数のメッシュを同時に編集する場合は、追加するメッシュの`Affect`を有効にします。
- `変更を取り消す`ボタンで、そのメッシュに加えた編集を元に戻せます。

#### 頂点を選択

- 頂点をクリックして選択するか、ドラッグした範囲内の複数の頂点をまとめて選択できます。
- 選択中の頂点は黄色で表示されます。

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>単一選択</figcaption>
    <img src="{{BASE_PATH}}/media/6d66d5ebb4b09557.png" alt="単一頂点の選択" />
  </figure>
  <figure>
    <figcaption>複数選択</figcaption>
    <img src="{{BASE_PATH}}/media/83e7aa82741df69b.png" alt="複数頂点の選択 1" />
    <img src="{{BASE_PATH}}/media/59be9be2b2a38490.png" alt="複数頂点の選択 2" />
  </figure>
</div>

#### 接続された頂点を選択

- メッシュが分離した複数の領域で構成されている場合に、特定の領域をまとめて選択できます。

![image.png]({{BASE_PATH}}/media/b1812976161ccd17.png)

- `L`: マウスカーソルに最も近い頂点と接続されたすべての頂点を追加選択します。
- `Shift + L`: マウスカーソルに最も近い頂点と接続されたすべての頂点を選択解除します。

#### 頂点を操作

- `W / E / R`ボタンまたはキーボードショートカットで操作モードを切り替えます。
    - `W`: 移動
    - `E`: 回転
    - `R`: スケール

<div class="doc-media-grid doc-media-grid-3">
  <figure>
    <figcaption><code>W</code> 移動</figcaption>
    <img src="{{BASE_PATH}}/media/4accd5822cf38fba.png" alt="W 移動操作の例" />
  </figure>
  <figure>
    <figcaption><code>E</code> 回転</figcaption>
    <img src="{{BASE_PATH}}/media/bd90cd4b8efaf419.png" alt="E 回転操作の例" />
  </figure>
  <figure>
    <figcaption><code>R</code> スケール</figcaption>
    <img src="{{BASE_PATH}}/media/edb5ec08dcbebbe3.png" alt="R スケール操作の例" />
  </figure>
</div>

- `ハンドル方向`
    - `ワールド`: ハンドルをワールド座標軸に合わせます。
    - `頂点法線`: ハンドルを選択した頂点の法線方向に合わせます。

#### 頂点表示

- 編集パネルで頂点の表示方法を設定できます。

![image.png]({{BASE_PATH}}/media/7f5e56bc1c2229cb.png)

- `頂点を表示`: 編集可能な頂点を表示するかどうかを設定します。
- `隠れた頂点を表示`: 現在の視点でメッシュに隠れている頂点も表示するかどうかを設定します。
- `表示距離`: カメラから指定した距離以内の頂点のみ表示します。

#### 頂点を隠す

- 編集の妨げになる頂点は、`G`キーで非表示にできます。
    - `G`: 選択した頂点を非表示
    - `Shift + G`: 非表示にしたすべての頂点を再表示

    ![image.png]({{BASE_PATH}}/media/33954415fccf5904.png)

    ![image.png]({{BASE_PATH}}/media/1f4b2b7df45a31f9.png)


#### 対称編集

![image.png]({{BASE_PATH}}/media/3111582ed270d28f.png)

- `対称`: 対称編集に使用する`X / Y / Z`軸を選択します。
    - 複数の軸を同時に有効にすることもできます。
- `対称移動`
    - `反転`: 選択した軸を基準に、反対側の頂点を鏡像方向へ動かします。
    - `同一`: 反対側の頂点にも同じ方向の変形を適用します。
- `対称クリッピング`
    - 対称軸付近の頂点が反対側へ越えないように制限します。

#### 編集の影響範囲

![image.png]({{BASE_PATH}}/media/4e4790e5af577f26.png)

- 選択した頂点を操作すると、設定した範囲とウェイトに応じて周囲の頂点も変形します。
- 影響が強い頂点ほど赤く、弱い頂点ほど青く表示されます。
- `選択方式`
    - `直線距離`: 選択範囲からの直線距離が`ブラシ半径`以内の頂点が影響を受けます。
    - `隣接距離`: メッシュの接続に沿った距離が`ブラシ半径`以内の頂点が影響を受けます。
- `ウェイト方式`
    - `線形`
        - 選択位置から離れるほど影響が一定の割合で減少します。
    - `ガウシアン`
        - 選択範囲から周囲へ滑らかにつながるように影響を適用します。
    - `固定`
        - ブラシ範囲内のすべての頂点に同じウェイトを適用します。
- `強度`
    - ブラシ範囲内で周囲の頂点が受ける影響の強さを調整します。
    - `Ctrl（Command）+ Shift + マウスホイール`
    - `Caps Lock + Shift + マウスホイール`
        - ブラシの強度を調整します。
- `ブラシ半径`
    - 選択範囲の周囲に影響する範囲を調整します。
    - `Shift + マウスホイール`
        - ブラシ半径を調整します。

#### ローカル形状復元

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>復元前</figcaption>
    <img src="{{BASE_PATH}}/media/3f5de925356ee854.png" alt="復元前" />
  </figure>
  <figure>
    <figcaption>復元後</figcaption>
    <img src="{{BASE_PATH}}/media/6005155dce938126.png" alt="復元後" />
  </figure>
</div>

編集中にシワや角の形状が過度に崩れた場合は、`ローカル形状復元`を使用して周囲の形状を滑らかに整えることができます。

- `反復回数`
    - ローカル形状復元の計算を繰り返す回数です。
    - 値を高くすると、復元効果がより広く滑らかに広がります。
- `復元強度`
    - 対応するSourceメッシュのローカル形状を反映する強さを調整します。
- `選択範囲を復元`
    - 現在選択している範囲のローカル形状をまとめて復元します。
- `復元ブラシ`
    - ボタンを有効にし、Scene View上でドラッグして必要な部分だけを復元します。
    - 編集による変形差分を周囲の頂点となめらかになじませ、局所的な形状の崩れを軽減します。

#### 編集完了

- メッシュを調整したら、`貫通を確認`で貫通の有無を確認し、`確定して続行`を押して次の工程へ進んでください。
- `確定して続行`を押すと現在の編集結果が適用され、Kisetterの残りの処理が続きます。

## [3] 結果の確認

### 9. 変換結果の確認

### 9-1. 変形結果の確認

- 変形結果がアバターに合わせて正しく適用されているかを確認します。
- 意図しない形に変形された場合、**[Advanced Option] - [Save Settings] - Save Result As BlendShape**を有効にしていた場合は、衣装に追加されたKisetter_fit BlendShapeの値を調整することで、元の形に戻すことができます。

### 9-2. VRChat - Modular Avatar

- Modular Avatarはあくまで一例であり、VRCFuryなどの他のツールを使用して、衣装のボーンがアバターの動きに追従するように設定しても問題ありません。
    - ただし、[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatarにチェックを入れている場合は、衣装はすでにアバターのボーンに追従するように設定されています。
- 衣装を右クリックし、[Modular Avatar] - [Setup Outfit]を選択して、衣装のボーンがアバターに追従するように設定します。

![]({{BASE_PATH}}/media/a477756018a1e22d.png)

- 目次
