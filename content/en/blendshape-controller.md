---
title: "BlendShape Controller"
slug: "blendshape-controller"
category: "Features"
description: "Review and adjust BlendShapes across multiple meshes in one place."
order: 50
---

```jsx
⚫ 아바타의 아래 모든 Mesh의 BlendShape를 한번에 조정하는 Tool 입니다.
```

<video controls preload="metadata" src="{{BASE_PATH}}/media/54a6d32ee890122e.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## 1. Assign Root Object

1. **Assign the top-level parent object containing the meshes to be adjusted together with the BlendShape to the Target Root Object.**

## 2. Refresh Mesh List

![]({{BASE_PATH}}/media/42180213d77349b0.png)

1. **Click the [Refresh Mesh & BlendShape List] button** to update the mesh and blend shape lists.
2. **If [Include Inactive Object] is enabled**, deactivated (Active OFF) meshes will also be included in the list.
3. **If you uncheck the Select box**, the corresponding object will be excluded from BlendShape adjustments and list updates.

## 3. BlendShape Adjustment

![]({{BASE_PATH}}/media/e17f9fec5f099312.png)

1. **The BlendShape List displays all BlendShapes associated with the meshes.**1.
    1. **Enter a BlendShape name in the Search field** to filter and display only the desired BlendShape.
    2. **The Mesh List** at the bottom **displays the list of meshes that have that BlendShape.**
2. **You can adjust the BlendShape value by moving the Weight Slider or clicking the [0] [100] buttons.**
