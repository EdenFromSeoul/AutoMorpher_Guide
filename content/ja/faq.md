---
title: "Q&A・トラブルシューティング"
slug: "faq"
category: "トラブルシューティング"
description: "使用条件、よくある質問、代表的なエラーの解決方法をまとめています。"
order: 90
---

## 使用案内

### 🧩 どのようなアバターに使用できますか？

**T Poseに設定されたUnity Humanoidの人型アバター**に使用できます。

アバターには **Animator** が含まれ、ボーンが正しく設定されている必要があります。また、体型の基準として使用できる**胴体のBody Mesh**が必要です。

Humanoidとして自動認識されないアバターやBody Meshが複数あるアバターでは、Body Meshの自動割り当てを無効にし、体型の基準として使用するBody Skinned Mesh Rendererを手動で指定してください。処理対象は **Mesh List** で必要なMeshだけを選択できます。

---

### 🧍‍♂️ A Poseのアバターも使用できますか？

はい、A Poseのアバターにも対応しています。

A Poseアバターの場合は、下の画像のようにアバター割り当て欄の横にある **A Pose Avatar** を有効にしてください。

![image.png]({{BASE_PATH}}/media/921efb52954f2edb.png)

有効にすると、プログラムが自動的に腕をT Poseへ変形して対応を進めます。

- Source Avatarの場合は、衣装も自動的にT Poseに合わせて変形されます。

![image.png]({{BASE_PATH}}/media/4bdf81298b21f9e3.png)

---

### ⚖️ 体型差が大きいアバター同士でも対応できますか？

体型差が大きい場合、特に**胸の大きさが大きく異なる場合**は、変形が不自然になったりフィッティングに失敗したりすることがあります。

安定した結果を得るには、次の方法をお試しください。

- 体型が似ているアバター同士で対応する
- **BlendShape**（Big Breastなど）やMesh Studioのような編集ツールを使い、対象アバターとの体型差をできるだけ小さくしてから変換する

詳しくは[変形品質を向上させるヒント](../quality-tips/)をご覧ください。

---

### 🧍‍♀️🧍‍♂️ 性別が異なるアバターの衣装も着せられますか？

はい。ツールの動作にアバターの性別は関係ありません。

例: https://x.com/EDEN_LABS_JP/status/2012466971267215649?s=20

ただし、胸などの体型差が大きい場合は結果が不自然になることがあります。この場合は、BlendShapeで体型をできるだけ近づけてからフィッティングすることをおすすめします。

---

### 📦 対応した衣装をUnity Packageとして書き出せますか？

**[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar** を無効にして対応した場合は、衣装をPrefabにしてUnity Packageとして書き出せます。

- 変形後のMeshは `Assets/@Eden_Mesh*` 以下に保存されます。Unity Packageへ書き出す際は、そのMeshファイルも必ず含めてください。

![image.png]({{BASE_PATH}}/media/3ca16a48eeb2d31c.png)

---

### 📤 対応した衣装をFBXとして書き出せますか？

現在、対応した衣装をFBXとして書き出す機能は提供していません。

---

### 🧩 BlendShape Generatorは専用衣装にしか使用できませんか？

いいえ。専用衣装でなくてもBlendShapeを作成できます。

専用衣装ではより精密な生成が可能ですが、一般的なMeshやHair MeshにもアバターのBlendShape変化に合わせたBlendShapeを作成できます。

---

### ⚙️ Unity 2019.4.31f1（旧VRChatバージョン）で使用できますか？

Unity 2019ではツールが使用する一部機能に対応していないため、使用できません。**Unity 2021以降**をご利用ください。

---

### ❗エラーが発生した場合はどこへ問い合わせればよいですか？

[お問い合わせ方法](../contact/)に記載された情報を準備し、Eden Labs Discordの **[❓｜help_質問]** チャンネルへお問い合わせください。

## エラー案内

### 👕 衣装が過度に膨らみます

次のような場合に衣装が過度に膨らむことがあります。

- **Source Body MeshにShrink BlendShapeが適用されている**

  Source Body MeshのBlendShapeを確認し、Shrink関連の値を解除してください。

- **Source AvatarとSource Clothesが正しく一致していない**

  2つのオブジェクトの **Position、Rotation、Scale** が正しく合っているか確認してください。

- **Source AvatarとSource ClothesのBlendShape状態が異なる**

  例えば、アバターが `Big_Breast: 0`、衣装が `Big_Breast: 100` の場合、その差分が含まれて衣装が大きく変形することがあります。

![image.png]({{BASE_PATH}}/media/466cf73fc279e345.png)

---

### 👕 衣装が小さく縮みすぎます

衣装が異常に縮小される場合は、次を確認してください。

- **Target Body MeshにShrink BlendShapeが適用されている**

  Target Body MeshのBlendShapeを確認し、Shrink関連の値が適用されている場合は解除してください。

![image.png]({{BASE_PATH}}/media/63feca0954364a0e.png)

---

### 🦶 足が不自然に変形します

足の形が不自然な場合は、次を確認してください。

- **Source AvatarまたはProfileとTarget AvatarでFoot BlendShapeの形が異なる**

  両方のAvatarのFoot BlendShapeが同じ形になるように調整してください。

- 問題が続く場合は、Advanced Optionの `Skip Foot Fitting` を有効にして足の詳細フィッティングを省略できます。

詳しくは[変形品質を向上させるヒント](../quality-tips/)の足に関する項目をご覧ください。

---

### 🧍 Body Meshが見つかりません

1. Body Meshを自動検出できない場合は、Body Mesh選択ウィンドウが表示されます。胴体に該当するMeshを選択し、**Select** をクリックしてください。

![image.png]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

2. それでも検出できない場合は、Body Meshの自動検出を無効にし、Body Meshを手動で割り当ててください。

3. Body Meshが複数ある場合は、体型の基準として使用するMeshを手動で指定し、**Mesh List** で変形するMeshだけを選択してください。

![image.png]({{BASE_PATH}}/media/13adc48cf815771b.png)

---

### ⚠️ `clothesHumanoidMatchedBones is null` エラー

選択したSource AvatarまたはProfileと一致するSource Clothesのボーンを見つけられない場合に発生します。

次を確認してください。

- Source Clothesが選択したSource AvatarまたはProfile専用の衣装であること
- 別アバター用の衣装やボーン名・構造が異なる衣装は変形できません。ボーン名と位置が一致しているか確認してください。
- 衣装をSource Avatarの子に配置し、Transformをリセットしてから再度お試しください。

![image.png]({{BASE_PATH}}/media/f47b0548486bef92.png)

---

### ⚠️ `Transform resides in a Prefab asset and cannot be set to prevent data corruption`

Projectウィンドウにある元のAvatarまたは衣装Prefabを、きせった (Kisetter)へ直接割り当てた場合に発生することがあります。

まずAvatarと衣装を **Hierarchy** へ配置し、Hierarchy上のオブジェクトをきせった (Kisetter)へ割り当ててください。

---

### ⚠️ Profile Mode: `refBone transform is null (refBone = {Humanoid Bone})`

Profile Modeでポーズを自動調整する際に使用する基準ボーンが衣装に存在しない場合に発生します。

同じアバター専用の別衣装がある場合は、エラーに表示された `refBone` に該当するボーンをコピーし、問題の衣装へ追加してください。ボーン名と位置を同じにします。

このケースは今後のアップデートで自動的に補完できるよう改善予定です。

---

### 🦴 Clothes Armature Error

衣装のArmatureに関するエラーです。

- Armatureがない状態でSkinned Mesh Rendererだけを割り当てると、ツールは正常に動作しません。
- **Armatureを含む衣装オブジェクト全体**を割り当ててください。
- アバターにすでに着せている衣装を対応する場合は、[変形品質を向上させるヒント](../quality-tips/)をご覧ください。

---

### 🪡 変形後に衣装の位置を調整できません

**[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar** を有効にして対応すると、HipやChestなどのWeightがAvatarのArmatureへ移動します。

そのため、衣装Armatureの該当ボーンを動かしても位置が変わりません。変形後も衣装ボーンを調整したい場合は、このオプションを無効にして再度対応してください。

![image.png]({{BASE_PATH}}/media/4b247fa9ed1391e6.png)

---

### 🧥 対応すると既存の衣装が消えます

**[Basic Option] - Remove AutoMorphed Other Clothes** を有効にしている場合、Target Avatarにすでに存在する、きせった (Kisetter)で対応済みの衣装が自動的に削除されます。

同じアバターに2着以上の衣装を対応する場合は、このオプションを無効にしてください。

---

### 🔁 BlendShape Generatorで`Body Base`が追加されました

参照Meshの `Breast_Small`、`BigBreast` などが0以外の状態でそのBlendShapeを生成対象にすると、ツールは現在の形状をそのBlendShapeのWeight 100として扱います。

- Weight 0の形状を補正するために `Body Base` BlendShapeが追加されます。
- 他の生成済みBlendShapeを正しく動作させるには、`Body Base`を **100** に設定してください。

---

### 🧬 他のBlendShapeと同時に使用するBlendShapeがアバターに合いません

BlendShape Generatorは、基本的に各BlendShapeを単独で使用することを想定しています。

他のBlendShapeが有効な状態で一緒に使用するBlendShapeを作成する場合は、[変形品質を向上させるヒント](../quality-tips/)の**他のBlendShapeと一緒に使用するBlendShapeの作成方法**をご覧ください。

---

### 🎛️ BlendShape Controllerで選択したものと異なるBlendShapeが動きます

使用中にBlendShapeの一覧または順序が変更されると、選択中とは異なるBlendShapeが動くことがあります。

**Refresh Mesh & BlendShape List** をクリックして一覧を更新し、もう一度お試しください。

![image.png]({{BASE_PATH}}/media/d26452fee322d03e.png)

## その他

### ❓ このツールの特徴は何ですか？

本ツールは、モデリングの専門知識がない方でも、好きな衣装をアバターへ簡単かつ自由に適用できることを目標に開発されています。

アバターの身体的特徴を自動で分析し、対応先アバターの体型に合わせて衣装を自動調整・変形します。少ない入力で作業できるよう構成されており、

- Source AvatarとTarget Avatarだけでも変形を試すことができます。
- Source AvatarのProfileがある場合は、Target Avatarと衣装だけで対応できます。

組み合わせによっては追加の補正が必要な場合がありますが、実際の使用例をもとに継続して改善し、すべてのユーザーがより少ない制約で衣装を活用できる環境を目指しています。