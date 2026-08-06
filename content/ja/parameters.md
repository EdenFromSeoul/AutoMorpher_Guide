---
title: "パラメータの説明"
slug: "parameters"
category: "リファレンス"
description: "基本オプションと高度なFitting・Weightingオプションを説明します。"
order: 70
---

## [Basic Option]

---

## 1. Body Meshの自動割り当て

- 有効にすると、アバターからBody Meshを自動で検出するオプションです。

    ### a. Body Meshの自動検出に失敗した場合

    - Body Meshを自動で検出できない場合、**Body Meshの選択ウィンドウが表示されます。**
    - そのウィンドウで、画像例のように**胴体に該当するMeshを選択し、[Select] ボタンをクリックしてください。**

    ![]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

    ### b. Body Meshの手動割り当て方法

    - 「Body Meshが見つかりません」というエラーメッセージが表示された場合は、このオプションを無効にしたうえで、胴体に該当するBody Skinned Mesh Rendererを手動で指定してください。
        - VRChat用アバターでは、「Body」という名前のMeshは多くの場合、顔や頭部を表すMeshであるため、画像例を参考に、胴体に該当するMeshを割り当ててください。

        ![]({{BASE_PATH}}/media/13adc48cf815771b.png)


---

## 2. Mesh List

- 変形対象のMeshを選択するオプションです。
- メッシュが表示されない場合は、**[Refresh Mesh List]** ボタンを押してメッシュリストを更新してください。
- 変形させたくないMeshがある場合は、該当する項目のチェックを外してください。

    ![]({{BASE_PATH}}/media/96e934f55c9b6933.png)


- **Bagを選択した場合と選択しなかった場合の例**

![]({{BASE_PATH}}/media/57eedd916e681082.png)

---

## 3. Body Gap

![]({{BASE_PATH}}/media/c67a2ab5dcd06bd5.png)

- 衣装とボディの間の**最小間隔**を設定するパラメータです。
    - 設定した値の分だけ、衣装がボディから離れるように変形します。
- ボディの貫通（突き抜け）がひどい場合は、この値を大きくしてください。

- **例**

![]({{BASE_PATH}}/media/d5b8827a74775213.png)

---

## 4. Skip Foot Fitting

![]({{BASE_PATH}}/media/f7fcadce704cdd10.png)

- 靴のメッシュに**詳細フィッティングを適用するかどうか**を設定するオプションです。
    - 有効にすると、靴にはサイズ調整のみが適用され、形状を直接変形させる詳細フィッティングは適用されません。
- アバターによっては、靴のフィッティングが正常に適用されなかったり、靴の形状が歪んだりする場合があります。
    - フィッティング後に靴の形状が崩れたり、不自然に歪んだりする場合は、このオプションを有効にしてください。

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>良い例 (Shinano → Sio)</figcaption>
    <img src="{{BASE_PATH}}/media/088422ae766e0202.png" alt="良い例 (Shinano → Sio)" />
  </figure>
  <figure>
    <figcaption>悪い例 (Shinano → Airi)</figcaption>
    <img src="{{BASE_PATH}}/media/0353c26a99c4ac65.png" alt="悪い例 (Shinano → Airi)" />
  </figure>
</div>

---

## 5. Remove AutoMorphed Other Clothes

![]({{BASE_PATH}}/media/f3189ed48074c5d2.png)

- 有効にすると、変換時にTarget Avatar上のきせった (Kisetter)で変換済みの衣装を自動的に削除します。
    - 不要な衣装を削除したい場合に有効にしてください。

## —————————————————————————

## [Advanced Option]

## A. Save Settings

### 1. Save Results As BlendShape

- 変形結果をBlendShapeとして保存します。
- BlendShapeの値を調整することで、変形前と変形後の状態を切り替えることができます。

    ### **a. BlendShape Name**

    - 保存するBlendShapeの名前を設定します。

- 例

![]({{BASE_PATH}}/media/79483bf7f05478a5.png)

## —————————————————————————

## B. Fitting Options

### 1. Sigma

- 値が高いほど影響範囲が広がり、**より滑らかな変形が**適用されます。
    - 推奨値：2 ～ 5

---

### 2. Smooth Radius

- Smooth適用時に参照する**周辺Vertexまでの距離範囲**を設定します。
    - 推奨値：0.01〜0.05

---

### 3. Smooth Neighbor Max Num

- Smooth適用時に参照する**周辺Vertexの最大数を**設定します。

---

### 4. Smoothing Iteration

- 値が高いほどSmooth効果が強くなり、変形がより滑らかになります。
    - 推奨値：1～4
    - 値が高いほど、処理にかかる時間が長くなります。
    - **値を過度に高くすると、かえって変形の品質が低下する可能性があるため、ご注意ください。**

---

### 5. Fitting Iteration

- 衣装の変形を繰り返す回数を設定するオプションです。

    ### a. Expand Iteration

    - 衣装が体の内側に食い込まないように、**外側へ押し出す処理の繰り返し回数です**。
    - 変形後も衣装が体に埋もれている場合は、この値を大きくしてください。

    ### b. Shrink Iteration

    - 押し出された衣装を再び**体の表面に密着させるための繰り返し回数です**。
    - 変形後も衣装が体から大きく離れている場合は、この値を大きくしてください。

## —————————————————————————

## C. Weighting Options

### 1. Transfer Weight To Avatar

- Weighting時に、衣装のMeshが**Target Avatarのボーンに直接追従するように設定するオプションです**。
    - 有効にすると、衣装内のボーンではなく、Target Avatarのアーマチュアのボーンを基準に動くように変更されます。
- Modular Avatarのように、衣装のボーンをアバターのボーンに自動的に接続する機能を使用しない場合に活用できます。
- **衣装を別のプレハブとして保存したい場合は、このオプションを無効にしてください！**

    ### a. 🟢 Transfer Weight To Avatar が有効

    - **Reparent Accessory Bones**

        ![]({{BASE_PATH}}/media/6bfe4dbfd9d5b359.png)

        - 有効にすると、衣装に含まれる追加ボーンをTarget AvatarのArmatureへ自動的に移動します。
        - これにより、アクセサリーや付属パーツがアバターに追従して動くように設定できます。

    ### b. 🔴 Transfer Weight To Avatar が無効

    - **Add Anchor Bone**

        ![]({{BASE_PATH}}/media/e891172961998502.png)

        - Target Avatarに合わせてボーンを再構成する際に、回転補正用の中間ボーンを追加するかを設定するオプションです。
        - 有効にすると、衣装の既存のボーンのRotation（回転）を維持した状態で、その親に補正用のボーンを追加して対応します。

![]({{BASE_PATH}}/media/7a304ce4506efe38.png)
