---
title: "BlendShape 생성"
slug: "blendshape-generator"
category: "기능 설명"
description: "아바타의 BlendShape를 의상 Mesh에 생성하는 방법입니다."
order: 40
---

```jsx
⚫ 아바타의 특정 Mesh가 가지고 있는 BlendShape를 다른 Mesh에도 추가해주는 기능입니다.
```

<video controls preload="metadata" src="{{BASE_PATH}}/media/f00f010315c1e2c6.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## BlendShape Mesh 설정 전 확인 사항

- BlendShape Generator는 **현재 Source Avatar와 BlendShape Mesh에 설정되어 있는 BlendShape 값을 기준**으로 Mesh의 변형을 계산합니다.
- 따라서 생성 전, Source Avatar와 BlendShape Mesh의 BlendShape 값이 의도한 상태로 설정되어 있는지 먼저 확인해 주세요.
    - 예를 들어 `Breast_Small` BlendShape 이 없는 의상에 추가 하려 한다면, Source Avatar 또는 BlendShape Mesh의 `Breast_Small` 값이 0으로 설정되어 있어야 합니다.

## 참조 Mesh의 BlendShape 값이 0이 아닌 상태에서 생성하는 경우

- 일부 의상은 아바타의 기본 체형이 아니라, **참조 Mesh의 특정 BlendShape가 적용된 형태**에 맞춰져 있는 경우가 있습니다.
- 이처럼 의상에 맞추기 위해 참조 Mesh의 `Breast_Small`, `BigBreast` 등의 값이 0이 아닌 상태에서, 해당 BlendShape를 생성 대상으로 선택하면,
툴은 현재 형태를 각 BlendShape의 **Weight 100 상태**로 판단하여 BlendShape를 생성합니다.
    - 또한 **Weight 0일 때의 형태**로 되돌릴 수 있도록, `[Body Base]`라는 보조 BlendShape가 함께 생성됩니다.
    - 이 경우 `[Body Base]` BlendShape의 값이 **100으로 설정되어 있어야**, 생성된 다른 BlendShape들이 정상적으로 동작합니다.

## 1. Source 준비

1. Avatar Animator에 아바타의 Animator를 할당해줍니다.
2. BlendShape Mesh에 추가할 BlendShape를 가지고 있는 Mesh를 할당합니다.
    1. ex) Head Mesh / Body Mesh

## 2. Mesh 추가

![image.png]({{BASE_PATH}}/media/05fede0f26ad3fcd.png)

1. [BlendShape를 추가할 Mesh 목록] 창을 클릭하여 목록을 엽니다.
2. 추가할 Mesh를 [Skinned Mesh Renderer를 여기에 드래그하여 추가] 라고 적힌 박스에 드래그 하여 추가합니다.
    1. 하나의 Skinned Mesh Renderer를 직접 드래그하여 추가할 수 있습니다.
    2. 또는 여러 Skinned Mesh Renderer를 자식으로 가진 부모 오브젝트를 드래그하여 한 번에 추가할 수도 있습니다.
3. [X] 버튼 또는 [모두 지우기] 버튼을 눌러 목록에서 Mesh를 제거할 수 있습니다.

## 3. Option 설정(Optional)

![image.png]({{BASE_PATH}}/media/192be8103c352e29.png)

1. Options 버튼을 눌러 옵션을 설정할 수 있습니다.
    1. 의상이 바디에 밀착되도록 움직이길 원하신다면 **Min Margin 값을 0으로 설정하는 것을 권장드립니다.**
        1. 다만, 해당 값을 0으로 설정할 경우 일부 BlendShape에서 **메쉬가 관통(뚫림)되는 현상이 발생할 수 있습니다.**
2. 기준이 되는 Mesh와 띄워질 최소 거리 혹은 Smooth에 관련된 변수를 설정할 수 있습니다.
    - [파라미터 설명](../parameters/)

## 4. 추가할 BlendShape 선택

![image.png]({{BASE_PATH}}/media/ed40124a70c362ae.png)

1. [BlendShape 목록] 버튼을 눌러 목록 창을 엽니다.
2. [BlendShape 목록 갱신] 버튼을 눌러 추가 가능한 BlendShape 목록을 갱신합니다.
    1. 1번 준비 단계에서 [BlendShape Mesh]로 할당한 Mesh가 가지고 있는 BlendShape가 목록에 표시됩니다.

        ![image.png]({{BASE_PATH}}/media/aa15404aa0836498.png)

3. 다른 Skinned Mesh Renderer에 추가할 BlendShape를 선택합니다.
    1. [전체 선택]을 통해 모두 선택할 수 있습니다.
    2. [전체 해제]를 통해 모두 선택 해제할 수 있습니다.

    ### 선택한 BlendShape 중 실제로 Mesh에 변화가 발생하는 BlendShape만 추가됩니다.


## 5. **BlendShape** 생성 버튼을 눌러 생성을 진행합니다.

![image.png]({{BASE_PATH}}/media/710f14f35bb0b8df.png)

## ETC. BlendShape 확인

- Object 아래 모든 BlendShape를 통합하여 조절할 수 있는 [Eden BlendShape Controller]를
Auto Morpher를 구매한 분들에게 무료로 배포 드리고 있습니다.
    - Tool 실행 경로: [상단바] - [Auto Morpher] - [Eden BlendShape Controller]
    - 사용 방법: [**BlendShape Controller**](../blendshape-controller/)
