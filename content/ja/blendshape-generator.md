---
title: "BlendShapeの作成"
slug: "blendshape-generator"
category: "機能説明"
description: "アバターのBlendShapeを衣装Meshに生成する方法です。"
order: 40
---

```jsx
⚫ アバター内の特定のMeshが持っているBlendShapeを、他のMeshにも追加する機能です。
```

<video controls preload="metadata" src="{{BASE_PATH}}/media/f00f010315c1e2c6.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## BlendShape Meshを設定する前の確認事項

- BlendShape Generatorは、**現在Source AvatarとBlendShape Meshに設定されているBlendShapeの値**を基準に、Meshの変形を計算します。
- そのため、生成を行う前に、Source AvatarとBlendShape MeshのBlendShape値が意図した状態になっているか確認してください。
    - 例えば、`Breast_Small` BlendShapeが存在しない衣装に新しく追加したい場合は、Source AvatarまたはBlendShape Meshの`Breast_Small`の値が0になっている必要があります。

## 参照MeshのBlendShape値が0ではない状態で生成する場合

- 一部の衣装は、アバターの基本体型ではなく、**参照Meshに特定のBlendShapeが適用された状態**に合わせて作られている場合があります。
- このように、衣装に合わせるために参照Meshの`Breast_Small`、`BigBreast`などの値が0ではない状態で、そのBlendShapeを生成対象として選択すると、

    ツールは現在の形状を各BlendShapeの**Weight 100の状態**として判断し、BlendShapeを生成します。

    - また、**Weight 0のときの形状**に戻せるように、`[Body Base]`という補助用BlendShapeが一緒に生成されます。
    - この場合、生成された他のBlendShapeを正常に動作させるには、`[Body Base]`の値を**100に設定しておく必要があります**。

## 1. ソースの準備

1. Avatar AnimatorにアバターのAnimatorを割り当てます。
2. BlendShape Meshに、追加対象のBlendShapeを持つメッシュを割り当てます。
    1. 例）Head Mesh / Body Mesh

## 2. Meshの追加

![image.png]({{BASE_PATH}}/media/b92ba5eb4cb31f50.png)

1. ［BlendShapeを追加するMesh一覧］のウィンドウをクリックして、リストを開きます。
2. 追加するMeshを、［Skinned Mesh Rendererをここにドラッグして追加］と表示されたボックスにドラッグして追加します。
    1. 1つのSkinned Mesh Rendererを直接ドラッグして追加できます。
    2. または、複数のSkinned Mesh Rendererを子として持つ親オブジェクトをドラッグして、一度に追加することもできます。
3. [X] ボタンまたは [すべて削除] ボタンを押すと、リストからMeshを削除できます。

## 3. オプション設定（Optional）

![]({{BASE_PATH}}/media/192be8103c352e29.png)

1. [Options] ボタンをクリックしてオプションを設定できます。
    1. 衣装をボディに密着させたい場合は、**Min Marginの値を0に設定することをおすすめします。**
        1. ただし、この値を0に設定すると、**一部のBlendShapeでメッシュの貫通（突き抜け）が発生する可能性があります。**
2. 基準となるメッシュとの最小距離、またはSmoothに関連するパラメータを設定できます。
    - [パラメータの説明](../parameters/)

## 4. 追加するBlendShapeの選択

![image.png]({{BASE_PATH}}/media/6c1c9e10d25d5e57.png)

1. [BlendShape一覧] ボタンをクリックして、リストを開きます。
2. [BlendShape一覧を更新] ボタンをクリックして、追加可能なBlendShapeのリストを更新します。
    1. 準備手順1で [BlendShape Mesh] に割り当てたMeshが持つBlendShapeがリストに表示されます。

        ![image.png]({{BASE_PATH}}/media/e42e1993f7358f31.png)

3. 他のSkinned Mesh Rendererに追加するBlendShapeを選択します。
    1. [すべて選択]で全項目を選択できます。
    2. [すべて解除]で、すべて選択を解除できます。

    ### 選択したBlendShapeのうち、実際にメッシュに変化が生じるBlendShapeのみが追加されます。


## 5. [**BlendShape 作成** ] ボタンをクリックして作成を進めます。

![image.png]({{BASE_PATH}}/media/c91deab014e01912.png)

## ETC. BlendShapeの確認

- Object配下のすべてのBlendShapeを統合して調整できる［Eden BlendShape Controller］を、きせった (Kisetter)をご購入いただいた方に無料で配布しております。
    - ツールの起動パス：[上部バー] - [きせった (Kisetter)] - [Eden BlendShape Controller]
    - 使用方法：[**BlendShape Controller**](../blendshape-controller/)
