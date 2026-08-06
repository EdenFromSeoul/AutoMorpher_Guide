---
title: "BlendShape Controller"
slug: "blendshape-controller"
category: "機能説明"
description: "複数のMeshのBlendShapeを一か所で確認・調整します。"
order: 50
---

```jsx
⚫ Object配下のすべてのMeshのBlendShapeを一括で調整できるツールです。
```

<video controls preload="metadata" src="{{BASE_PATH}}/media/54a6d32ee890122e.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## 1. Root Objectの割り当て

1. **BlendShapeをまとめて調整するMeshを含む、最上位の親オブジェクトをTarget Root Objectに割り当てます**

## 2. Meshリストの更新

![]({{BASE_PATH}}/media/42180213d77349b0.png)

1. **[Refresh Mesh & BlendShape List] ボタンをクリックして**、MeshおよびBlendShapeのリストを更新します。
2. **[Include Inactive Object]を有効にすると**、非アクティブ（Active OFF）のMeshもリストに含まれます。
3. **[Select]のチェックを外すと、そのObjectはBlendShapeの調整およびリストの更新対象から除外されます。**

## 3. BlendShapeの調整

![]({{BASE_PATH}}/media/e17f9fec5f099312.png)

1. **BlendShapeリストには、Meshが持つすべてのBlendShapeが表示されます。**
    1. **SearchにBlendShape名を入力すると**、目的のBlendShapeのみをフィルタリングして表示できます。
    2. **下部のMesh Listには、そのBlendShapeを持つMeshのリストが表示されます。**
2. **Weight Slider動かすか、[0] [100] ボタンをクリックして、BlendShapeの値を調整できます。**
