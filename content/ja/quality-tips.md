---
title: "変形品質を向上させるヒント"
slug: "quality-tips"
category: "トラブルシューティング"
description: "胸・足・靴・帽子・手袋などの変形品質を改善する方法です。"
order: 80
---

---

## 👚体型差によって胸まわりの形状が崩れる場合の解決策

アバター間の体型差が大きい場合、変形が正常に行われないことがあり、

特に**胸の部分で形状が崩れてしまう現象が**頻繁に発生することがあります。

このような場合、元のアバターや衣装に**胸のサイズを調整できるシェイプキー**がある場合は、

そのシェイプキーを使用して、**対象のアバターの胸の形状にできるだけ近づけたうえで**

変形を行うと、より自然な結果になりやすくなります。

**例）Shinano → Milltina**

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>基本フィッティング結果（BlendShape未調整）</figcaption>
    <img src="{{BASE_PATH}}/media/79d070c14fc47913.png" alt="基本フィッティング結果（BlendShape未調整）" />
  </figure>
  <figure>
    <figcaption>BlendShape調整結果（Big Breast 100）</figcaption>
    <img src="{{BASE_PATH}}/media/4f2ffb4ff1cc49bf.png" alt="BlendShape調整結果（Big Breast 100）" />
  </figure>
</div>

### Mesh編集ツールを活用した調整

**また、[Manual Mode]で、体型差が大きい部位を先に調整しておくことで、より自然なフィッティング結果を得ることができます。**

- **[Manual Fitting Mode]**で、まず**[Auto Setup]**を実行します。
- その後、**Mesh StudioなどのMesh編集**ツールを使用して、Target Clothes Objectを追加で調整します。
    - 特に胸など、体型差が大きい部位は、Source Clothes Objectに近い形状になるように調整してください。
- このように調整することで、全体的にアバターの体型により自然にフィットした結果を得ることができます。

![]({{BASE_PATH}}/media/4d7849ac3b32aab7.png)

---

## 🦶 足の変形を安定して行う方法

本ツールは変形プロセスにおいて**足の形状も考慮するため**、

**Source AvatarとTarget Avatarの足の形状が似ているほど**、より安定した結果が得られます。

そのため、変形を行う前に、

**Source Avatar**と**Target Avatar**の足の形状を、できるだけ同じ状態に調整しておくことをおすすめします。

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>悪い例</figcaption>
    <img src="{{BASE_PATH}}/media/7307a7d1c11dca6e.png" alt="悪い例" />
  </figure>
  <figure>
    <figcaption>良い例</figcaption>
    <img src="{{BASE_PATH}}/media/00934d0789ea93c5.png" alt="良い例" />
  </figure>
</div>

---

## ⚠️ 靴が潰れてしまう場合の解決方法

足の形状を合わせた後も、靴が潰れたり形状が崩れたりする場合は、

「**Advanced Option」の** 「**`Skip Foot Fitting`」を有効にしてください**。

このオプションを使用すると、足の**位置とサイズの調整のみが適用され**、

形状の変形処理をスキップすることで、靴が潰れる現象を防ぐことができます。

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>デフォルトの靴フィッティング結果（オプション未適用）</figcaption>
    <img src="{{BASE_PATH}}/media/fccaf6469d47c205.png" alt="デフォルトの靴フィッティング結果（オプション未適用）" />
  </figure>
  <figure>
    <figcaption>「Skip Foot Fitting」適用結果（オプション適用）</figcaption>
    <img src="{{BASE_PATH}}/media/2386b5110acd4ad5.png" alt="「Skip Foot Fitting」適用結果（オプション適用）" />
  </figure>
</div>

---

## 🥿 靴が水たまりのように平らになってしまう場合

- 靴が水たまりのように平らになってしまう場合は、Source AvatarのFoot側にShrinkが適用されていないかご確認ください。
<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>悪い例</figcaption>
    <img src="{{BASE_PATH}}/media/f2b4b7949a1fc65d.png" alt="悪い例" />
  </figure>
  <figure>
    <figcaption>良い例</figcaption>
    <img src="{{BASE_PATH}}/media/883788331c7a228d.png" alt="良い例" />
  </figure>
</div>


### a. 足部分の手動調整方法

- **[Manual Fitting Mode]で[0. Auto Setup]を実行した後、足のサイズを手動で調整できます。**
    - Target Clothes ObjectのArmature配下、Footボーンの直上に、靴のスケール調整**用のscaleSupportBoneが**生成されます。
    - 該当するボーンの**ScaleとPosition**を調整すると、足まわりをより簡単に合わせることができます。

![]({{BASE_PATH}}/media/db67a2c69d60ef36.png)

---

## 🎩🧤 帽子・手袋のWeighting対応方法

現在、きせった (Kisetter)は**頭や手に取り付けられた衣装ボーンの自動位置調整機能には対応していません。**

1. **[Manual Fitting Mode]**で**[0. Auto Setup]**を実行した後、手袋や帽子の位置をボーンを操作して手動で調整してください。
2. **[Advanced Option] - [Weighting] - [Transfer Weight To Avatar]**を無効にしている場合は、対応後にボーンの位置を直接調整して、希望する位置に合わせることができます。

---

## 👕 既存のアバターが着用している衣装を対応させる方法

きせった (Kisetter)は、**衣装が独自のArmatureを持っている場合にのみ**正常に動作します。

ただし、アバターがすでにデフォルト衣装を着用している場合や、衣装が個別のプレハブとして分離されていない場合でも、

その衣装を変形させたい場合があります。

このような場合は、添付の動画のように、以下の手順で対応できます。

<video controls preload="metadata" src="{{BASE_PATH}}/media/12d3891b5e38ec25.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

1. **既存のアバターをコピーします**。
2. コピーしたアバターから、Animatorおよび不要なComponentを削除します。
    1. 特に、VRC Avatar DescriptorやPipeline Managerなどのアバター関連Componentは削除してください。削除しない場合、VRChatへアップロードする際に問題が発生する可能性があります。
3. **Body Meshなどの不要なMeshを削除し**、衣装のみが残る形に整理します。
4. 衣装のみを残したオブジェクトを、元のアバターの子Object（Hierarchy上で下の階層）へ移動します。
5. そのオブジェクトを**衣装のプレハブとして使用すれば**、きせった (Kisetter)で変形を行うことができます。

この方法を活用すれば、別途分離されていない**アバターのデフォルト衣装も、変形対象として使用できます。**

---

## 🔗 他のBlendShapeと併用するBlendShapeの作成方法

BlendShape Generatorは、基本的に**1つのBlendShapeを単独で使用すること**を前提に設計されています。

そのため、特定のBlendShapeが適用された状態で併用するBlendShapeを作成したい場合は、以下の手順で進めてください。

- 以下の動画は、`Breast_Small`と`Breast_Flat（With Small)`を作成する場合の例です。

<video controls preload="metadata" src="{{BASE_PATH}}/media/868d0bf7dced00c7.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

1. ベースとなるBlendShapeがまだ存在しない場合は、先にBlendShape GeneratorでベースBlendShapeを作成します。
    - 動画では`Breast_Small`を作成しています。
2. アバターと衣装側で、ベースBlendShapeのWeightを**100**に設定します。
    - 動画では**BlendShape Controller**を使用し、複数のMeshの値をまとめて調整しています。
3. BlendShape Generatorで、追加で作成したいBlendShapeを選択します。
    - 動画では`Breast_Flat`を選択しています。
    - このとき、**ベースBlendShapeがチェックされている場合は、チェックを外してください。**
        - 動画では`Breast_Small`のチェックを外します。
4. BlendShapeの生成を実行します。
5. 生成されたBlendShapeが意図した形で動作するか確認してください。
