---
title: "Manual Fitting Mode"
slug: "manual-fitting"
category: "사용 가이드"
description: "자동 변형과 본 수동 조정을 함께 사용하는 작업 흐름입니다."
order: 30
---

```
⚫ 사용자가 **Target Avatar에 맞게 직접 조절한 의상**을 기준으로 변형을 진행하는 모드입니다.

⚫ 대응 중 Bone Adjustment 창을 통해 필요한 부분을 **추가로 수정**하여 더 정밀한 변형을 할 수 있습니다.
```

!!! warning "영상 링크 준비 중"
    이 단계의 원본 영상은 GitHub 파일 크기 제한을 초과하여 현재 배포본에서 제외되었습니다. YouTube 영상으로 교체될 예정입니다.

## [1] 준비

## 1. 🧍‍♂️Source Avatar Setup

1. 아바타를 Scene에 배치한 뒤 **회전(Rotation)과 스케일(Scale)을 초기화**합니다.
2. 아바타에 **Animator**와 몸통**에 해당하는 Skinned Mesh Renderer**가 정상적으로 존재하는지 확인합니다.

    ![image.png]({{BASE_PATH}}/media/093321aadd4b9de3.png)

3. Body Mesh가 **축소되거나 가려진 부분 없이 전부 보이도록** BlendShape를 조정합니다.

    ![image.png]({{BASE_PATH}}/media/466cf73fc279e345.png)


## 1. 👕Source Clothes Setup

1. 의상을 Scene에 배치한 뒤 **Source Avatar의 자식으로 넣고 위치와 크기**를 맞춰줍니다.

    ![image.png]({{BASE_PATH}}/media/e0968448f39f5435.png)

2. Source Avatar에 맞게 의상의 BlendShape**를 조절**합니다.

    ![image.png]({{BASE_PATH}}/media/d89034290e6953d7.png)

3. Avatar의 BlendShape도 의상에 맞춰 👠**Foot Heel, 👙Breast** 등의 BlendShape를 조절합니다.

    ![image.png]({{BASE_PATH}}/media/ebdd8f821892ae10.png)


## 1-2. 📄 Source Profile 사용

1. 📄 Profile 준비
- Profile 경로: `Assets\@Eden_Tools\Eden_Auto Morpher\Profiles`
- 목록에 원하는 Profile이 보이지 않는 경우, 위 경로에 **Profile 폴더를 직접 추가** 해 주세요.
    - Profile 폴더 구성 예시

        Profiles
        └─ ProfileName
            ├─ ProfileName.json
            └─ ProfileName.eb


    ![image.png]({{BASE_PATH}}/media/99347e5849f09c7b.png)


![image.png]({{BASE_PATH}}/media/1f6499e157008668.png)

1. 만약, Profile이 Foot_Heel을 조정한 Profile이라면, Target Avatar도 그에 맞춰 비슷한 발의 형태가 되도록 BlendShape를 조정해주세요.
    1. **의상에 맞춰 Foot_Heel (or HighHeel) Profile을 사용해주세요.**

## 2. 🧍Target Avatar Setup

1. 아바타를 Scene에 배치한 뒤 **회전(Rotation)과 스케일(Scale)을 초기화**합니다.
2. 아바타에 **Animator**와 몸통**에 해당하는 Skinned Mesh Renderer**가 정상적으로 존재하는지 확인합니다.

    ![image.png]({{BASE_PATH}}/media/f32c8c8362afe00c.png)

3. Body Mesh가 **축소되거나 가려진 부분 없이 전부 보이도록** BlendShape를 조정합니다.

    ![image.png]({{BASE_PATH}}/media/63feca0954364a0e.png)

- 만약, Source의 Foot Heel을 조정한 경우 Target Avatar도 비슷한 발의 형태가 되도록 BlendShape를 조정해주세요.

**Bad Case**

![image.png]({{BASE_PATH}}/media/7307a7d1c11dca6e.png)

**Good Case**

![image.png]({{BASE_PATH}}/media/00934d0789ea93c5.png)

**Bad Case**

![image.png]({{BASE_PATH}}/media/0020676efddbe42b.png)

**Good Case**

![image.png]({{BASE_PATH}}/media/3c3912e4aed163f4.png)

## [2] 변형 진행

## 4. 🔧Auto Morpher Setup

1. Auto Morpher를 Hierachy에 배치합니다.
    - Prefab 경로: `Assets\@Eden_Tools\Eden_Auto Morpher\EdenAuto Morpher`

## 5. Auto Morpher Setup

1. Auto Morpher - Manual Fitting Mode 를 클릭합니다.

    ![image.png]({{BASE_PATH}}/media/245a3c73ff5e383b.png)

2. 앞서 준비한 **아바타**와 **의상**을 Auto Morpher에 할당해 줍니다.

    ![image.png]({{BASE_PATH}}/media/9eb723c87de25386.png)

    - **Source Avatar Object**: 의상의 원본 아바타 오브젝트
    - **Source Clothes Object**: 의상 오브젝트
    - **Target Avatar Object**: 대응할 아바타 오브젝트
3. Profile Mode 일 경우

    ![image.png]({{BASE_PATH}}/media/30a02f9502619203.png)

    - **Profile**: 사용할 의상에 맞는 Profile
    - **Source Clothes Object**: 의상 오브젝트
    - **Target Avatar Object**: 대응할 아바타 오브젝트


## 6. Auto Morpher Option Setup

1. **Body Mesh 자동으로 할당하기**
    1. 체크 시, 아바타의 몸통에 대한 Mesh를 자동으로 탐색합니다.
    2. **Body Mesh를 자동으로 찾지 못한 경우, Body Mesh 선택 창이 표시됩니다.**
        1. 이 창에서 **몸통에 해당하는 Mesh를 선택한 뒤 [Select] 버튼을 클릭해 주세요.**

    ![image.png]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

2. **Mesh List**

    ![image.png]({{BASE_PATH}}/media/96e934f55c9b6933.png)

    - **[Refresh Mesh List]** 버튼을 눌러 Mesh 리스트를 새로고침합니다.
    - 변형하지 않을 Mesh가 있다면 해당 항목의 선택을 해제하세요.
3. **Body Gap**
    - 의상과 바디 사이의 최소 거리를 설정하는 파라미터입니다.
    - 바디 관통(뚫림)이 심하게 발생할 경우 해당 값을 높여주세요.
4. **Skip Foot Fitting**
    - 신발에**Fitting(형태 변형)**을 적용하지 않는 옵션입니다. (스케일 조정은 그대로 적용됩니다)
    - 발의 세부적인 형태에 맞춰 변형하려면 해당 옵션을 비활성화해주세요.
5. **[Advanced Option] - [Save Settings] - Save Result As BlendShape**
    - 활성화 시 변형된 결과를 Mesh에 바로 반영하지 않고 BlendShape로 저장합니다.
6. **[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar**
    - 의상 Mesh의 Weight를 Target Avatar의 Armature 기준으로 다시 연결하는 옵션입니다.
    - Modular Avatar 등을 사용하지 않고 의상을 아바타 본에 직접 연결해야 할 때만 활성화해주세요.
- 그 외 다른 Parameter에 대한 자세한 설명은 다음의 문서를 참조해 주세요.
    - [파라미터 설명](../parameters/)

## 7. 변형 진행

**Run ALL**을 눌러서 변형을 진행합니다.

![image.png]({{BASE_PATH}}/media/a5c95b7da6f8eddf.png)

- Fitting과 Weighting을 단계별로 진행하려면 아래의 **Step-by-step Progress**를 사용합니다.

## 8. 본 조정 진행

Manual Fitting Mode일 경우, 자동 대응된 의상에서 본을 조정할 수 있습니다.

![image.png]({{BASE_PATH}}/media/300303c039d540ee.png)

- 조작 방식

    ![image.png]({{BASE_PATH}}/media/0403a56fedd1ed35.png)

    - 상단의 W:Move /E: Rotation /R: Scale을 누르거나. Keyboard의 W/E/R 버튼을 눌러 조작 방식을 변경할 수 있습니다.
        - W:Move - Position 이동
        - E:Rotation - Rotation 회전
        - R:Scale - Scale 조정
- 좌우 대칭

    ![image.png]({{BASE_PATH}}/media/7b0f0c16790de3d6.png)

    - 좌우 대칭 되는 본이 있을 경우, Mirror 버튼을 통해 같이 움직일 수 있습니다.
    - Mirror:On일 경우 아바타 기준으로 X 축으로 거울처럼 움직입니다.
- 본 목록

    ![image.png]({{BASE_PATH}}/media/df7b1834b78e0a74.png)

    - 조작할 수 있는 본의 목록입니다.
    - 조작할 수 있는 Bones List에는 목록이 나열됩니다.
        - Bone List:Humanoid Bone Only
            - Bone List에 Hip, Chest 같은 Humanoid Bone만 표시됩니다.
        - Bone List: Show Other Bones
            - Bone List에 Hip, Chest 같은 Humanoid Bone외에도 그 자식 본들이 표시됩니다.
    - Humanoid Bone Picker
        - 원하는 부위를 클릭하여 본을 선택할 수 있습니다.
    - 화면에 있는 아바타의 푸른 점을 눌러서도 본을 선택하여 조정할 수 있습니다.
- **모자, 장갑, 신발 등은 해당 옵션을 통해 세부적으로 추가 조정해 주시는 것을 권장드립니다.**

    ![image.png]({{BASE_PATH}}/media/4db99de895e9a2be.png)

- 조정이 완료되면 아래 버튼을 눌러 대응을 진행해 주세요.

## [3] 결과 확인

## 9. 변형된 결과물 확인

### 9-1. 변형 결과물 확인

- 변형된 결과물이 아바타에 맞게 적용되었는지 확인합니다.
- 원치 않는 형태로 변형된 경우, **[Advanced Option] - [Save Settings] - Save Result As BlendShape**를 활성화했다면 의상에 추가된 AutoMorphed BlendShape 값을 조절해 원래 형태로 되돌릴 수 있습니다.

### 9-2. VRChat - Modular Avatar

- Modular Avatar는 예시일 뿐이며, VRCFury 등 다른 툴을 사용해 의상의 본이 아바타를 따라 움직이도록 설정해도 괜찮습니다.
    - 단, [Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar를 체크한 경우에는 의상이 이미 Avatar 본을 따라 움직이도록 설정됩니다.
- 의상을 우클릭한 뒤 [Modular Avatar] - [Setup Outfit]을 선택하여, 의상의 본이 아바타를 따라 움직이도록 설정합니다.

![image.png]({{BASE_PATH}}/media/a477756018a1e22d.png)

- Table Of Content
