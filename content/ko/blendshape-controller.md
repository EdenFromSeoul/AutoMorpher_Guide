---
title: "BlendShape Controller"
slug: "blendshape-controller"
category: "기능 설명"
description: "여러 Mesh의 BlendShape를 한곳에서 확인하고 조정합니다."
order: 50
---

```jsx
⚫ Object의 아래 모든 Mesh의 BlendShape를 한번에 조정하는 Tool 입니다.
```

<video controls preload="metadata" src="{{BASE_PATH}}/media/54a6d32ee890122e.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## 1. Root Object 할당

1. **BlendShape를 함께 조정할 Mesh들이 포함된 최상위 부모 Object를 Target Root Object에 할당합니다.**

## 2. Mesh 목록 갱신

![image.png]({{BASE_PATH}}/media/42180213d77349b0.png)

1. **[Refresh Mesh & BlendShape List] 버튼을 클릭하여** Mesh 및 BlendShape 목록을 갱신합니다.
2. **[Include Inactive Object]를 활성화하면** 비활성화(Active OFF)된 Mesh도 목록에 포함됩니다.
3. **Select 체크를 해제할 경우** 해당 Object는 BlendShape 조정 및 목록 갱신 대상에서 제외됩니다.

## 3. BlendShape 조정

![image.png]({{BASE_PATH}}/media/e17f9fec5f099312.png)

1. **BlendShape List에는 Mesh들이 보유한 모든 BlendShape가 표시됩니다.**
    1. **Search에 BlendShape 이름을 입력하면** 원하는 BlendShape만 필터링하여 표시할 수 있습니다.
    2. 하단의 **Mesh List에는 해당 BlendShape를 보유한 Mesh 목록이 표시됩니다.**
2. **Weight Slider를 움직이거나 [0] [100] 버튼을 클릭하여 BlendShape 값을 조정할 수 있습니다.**
