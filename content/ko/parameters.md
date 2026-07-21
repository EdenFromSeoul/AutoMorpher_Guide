---
title: "파라미터 설명"
slug: "parameters"
category: "참조"
description: "기본 옵션과 고급 Fitting·Weighting 옵션을 설명합니다."
order: 70
---

## [Basic Option]

---

## 1. Body Mesh 자동으로 할당하기

- 활성화 시 Avatar에서 Body Mesh를 자동으로 탐색하는 옵션입니다.

    ### a. Body Mesh 자동 탐색 실패 시

    - 자동으로 Body Mesh를 찾을 수 없을 경우 **, Body Mesh 선택 창이 표시됩니다.**
    - 해당 창에서, 예시의 이미지 처럼**몸통에 해당하는 Mesh를 선택한 뒤 [Select] 버튼을 클릭해 주세요.**

    ![image.png]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

    ### b. Body Mesh 수동 할당 방법

    - Body Mesh를 찾을 수 없다는 오류 메시지가 표시될 경우, 해당 옵션을 비활성화한 후 몸통에 해당하는 Body Skinned Mesh Renderer를 수동으로 지정해 주세요
        - VRChat용 아바타는 Body라고 되어 있는 Mesh 는 보통 얼굴/머리를 나타내는 Mesh이기에, 예시의 사진 처럼 몸통에 해당하는 Mesh를 할당해주세요.

        **Inspector**

        ![image.png]({{BASE_PATH}}/media/13adc48cf815771b.png)

        **BodyMesh Example**

        ![BodyMesh_SampleImage.png]({{BASE_PATH}}/media/853577238ca7768a.png)


---

## 2. Mesh List

- 변형할 Mesh를 선택하는 옵션입니다.
- Mesh가 보이지 않을 경우 **[Refresh Mesh List]** 버튼을 눌러 Mesh 리스트를 새로고침 해주세요.
- 변형하지 않을 Mesh가 있다면 체크 박스 선택을 해제해주세요.

    ![image.png]({{BASE_PATH}}/media/96e934f55c9b6933.png)


- **Bag의 선택을 하였을 때와 하지 않았을 때의 예시**

![image.png]({{BASE_PATH}}/media/57eedd916e681082.png)

---

## 3. Body Gap

![image.png]({{BASE_PATH}}/media/c67a2ab5dcd06bd5.png)

- 의상과 바디 사이의 **최소 간격**을 설정하는 파라미터입니다.
    - 설정한 값만큼 의상이 바디에서 더 떨어지도록 변형됩니다.
- 바디 관통(뚫림)이 심하게 발생하는 경우, 해당 값을 높여주세요.

- **Example**

![image.png]({{BASE_PATH}}/media/d5b8827a74775213.png)

---

## 4. Skip Foot Fitting

![image.png]({{BASE_PATH}}/media/f7fcadce704cdd10.png)

- 신발 Mesh에 **세부 피팅을 적용할지 여부**를 설정하는 옵션입니다.
    - 활성화 시 신발에는 크기 조정만 적용되며, 형태를 직접 변형하는 세부 피팅은 적용되지 않습니다.
- 아바타에 따라 신발 피팅이 정상적으로 적용되지 않거나, 신발 형태가 왜곡될 수 있습니다.
    - 피팅 후 신발 형태가 깨지거나 어색하게 변형될 경우, 해당 옵션을 활성화해 주세요.

- **Good Case (Shinano → Sio)**

![image.png]({{BASE_PATH}}/media/088422ae766e0202.png)

- **Bad Case (Shinano → Airi)**

![image.png]({{BASE_PATH}}/media/0353c26a99c4ac65.png)

---

## 5. Remove AutoMorphed Other Clothes

![image.png]({{BASE_PATH}}/media/f3189ed48074c5d2.png)

- 활성화 시, 대응할 때 Target Avatar에 이미 Auto Morpher로 대응된 의상들을 자동으로 삭제해줍니다.
    - 불필요한 의상을 삭제하실 때 활성화 해주시면 되겠습니다.

## —————————————————————————

## [Advanced Option]

## A. Save Settings

### 1. Save Results As BlendShape

- 변형 결과를 **BlendShape로 저장**합니다.
- BlendShape 값을 조절하여 **변형 전 / 후 상태를 전환**할 수 있습니다.

    ### **a. BlendShape Name**

    - 저장될 BlendShape의 이름을 설정합니다.


- Example

![image.png]({{BASE_PATH}}/media/79483bf7f05478a5.png)

## —————————————————————————

## B. Fitting Options

### 1. Sigma

- 값이 높을수록 영향 범위가 넓어지며 **더 부드러운 변형**이 적용됩니다.
    - 권장값: 2 ~ 5

---

### 2. Smooth Radius

- Smooth 적용 시 참조할 **주변 Vertex의 거리 범위**를 설정합니다.
    - 권장 값: 0.01~0.05

---

### 3. Smooth Neighbor Max Num

- Smooth 적용 시 참조할 **주변 Vertex의 최대 개수**를 설정합니다.

---

### 4. Smoothing Iteration

- 값이 높을수록 Smooth 효과가 강해져 변형이 더 부드러워집니다.
    - 권장 값: 1~4
    - 값이 높을수록 대응에 걸리는 시간이 늘어납니다.
    - **값을 과도하게 높이면 오히려 변형 품질이 저하될 수 있으니 주의해 주세요.**

---

### 5. Fitting Iteration

- 의상 변형을 반복하는 횟수를 설정하는 옵션입니다.

    ### a. Expand Iteration

    - 의상이 몸 안으로 파고들지 않도록 **바깥쪽으로 밀어내는 작업의 반복 횟수**입니다.
    - 대응 후에도 의상이 몸에 파묻혀 있다면 해당 값을 높여주세요.

    ### b. Shrink Iteration

    - 밀려난 의상을 다시 **몸 표면에 밀착시키는 반복 횟수**입니다.
    - 대응 후에도 의상이 몸과 많이 떨어져 있다면 해당 값을 높여주세요.

## —————————————————————————

## C. Weighting Options

### 1. Transfer Weight To Avatar

- Weighting 시 의상 Mesh가 **Target Avatar의 본을 직접 따라 움직이도록 계산하는 옵션**입니다.
    - 활성화하면 의상 안의 본이 아니라, **Target Avatar의 Armature 본을 기준으로 움직이도록 변경됩니다**
- Modular Avatar처럼 의상 본을 아바타 본에 자동으로 연결해 주는 기능을 사용하지 않을 때 활용할 수 있습니다.
- **의상을 별도의 Prefab으로 저장하고자 하신다면 해당 옵션을 비활성화 해주세요!**

    ### a. 🟢 Transfer Weight To Avatar Enabled

    - **Reparent Accessory Bones**

        ![image.png]({{BASE_PATH}}/media/6bfe4dbfd9d5b359.png)

        - 활성화하면 의상에 포함된 추가 본을 **Target Avatar의 Armature로 자동 이동**시킵니다.
        - 이를 통해 액세서리나 부속 파츠가 아바타를 따라 함께 움직이도록 설정할 수 있습니다.

    ### b. 🔴 Transfer Weight To Avatar Disabled

    - **Add Anchor Bone**

        ![image.png]({{BASE_PATH}}/media/e891172961998502.png)

        - Target Avatar에 맞춰 본을 재구성할 때, **회전 보정을 위한 중간 본을 추가할지 설정하는 옵션**입니다.
        - 활성화하면 의상의 기존 본 Rotation을 유지한 상태로, 그 부모에 보정용 본을 추가하여 대응합니다.

![image.png]({{BASE_PATH}}/media/7a304ce4506efe38.png)
