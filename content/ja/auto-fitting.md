---
title: "Auto Fitting Mode"
slug: "auto-fitting"
category: "使用ガイド"
description: "衣装を対象アバターに合わせて自動変形する手順です。"
order: 20
---

```jsx
⚫ 衣装を Target Avatar に合わせて自動的に調整し、変形を行うモードです。
⚫ ボーンを調整する機能が必要な場合は、Manual Fitting Mode を使用してください。
```

<video controls preload="metadata" src="{{BASE_PATH}}/media/5f6d33328f9d377a.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

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

1. 「きせった (Kisetter)- Auto Fitting Mode」をクリックします。

![image.png]({{BASE_PATH}}/media/fa9c758660c7fc41.png)

1. 事前に用意した**アバターと** **衣装を きせった (Kisetter)** に割り当てます。

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

## [3] 結果の確認

### 7. 変換結果の確認

### 7-1. 変形結果の確認

- 変形結果がアバターに合わせて正しく適用されているかを確認します。
- 意図しない形に変形された場合、**[Advanced Option] - [Save Settings] - Save Result As BlendShape**を有効にしていた場合は、衣装に追加されたKisetter_fit BlendShapeの値を調整することで、元の形に戻すことができます。

### 7-2. VRChat - Modular Avatar

- Modular Avatarはあくまで一例であり、VRCFuryなどの他のツールを使用して、衣装のボーンがアバターの動きに追従するように設定しても問題ありません。
    - ただし、[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatarにチェックを入れている場合は、衣装はすでにアバターのボーンに追従するように設定されています。
- 衣装を右クリックし、[Modular Avatar] - [Setup Outfit]を選択して、衣装のボーンがアバターに追従するように設定します。

![]({{BASE_PATH}}/media/a477756018a1e22d.png)

- 目次
