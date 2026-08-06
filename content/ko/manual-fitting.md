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

### 1. 🧍‍♂️Source Avatar Setup

1. 아바타를 Scene에 배치한 뒤 **회전(Rotation)과 스케일(Scale)을 초기화**합니다.
2. 아바타에 **Animator**와 몸통**에 해당하는 Skinned Mesh Renderer**가 정상적으로 존재하는지 확인합니다.

    ![image.png]({{BASE_PATH}}/media/093321aadd4b9de3.png)

3. Body Mesh가 **축소되거나 가려진 부분 없이 전부 보이도록** BlendShape를 조정합니다.

    ![image.png]({{BASE_PATH}}/media/466cf73fc279e345.png)


### 1. 👕Source Clothes Setup

1. 의상을 Scene에 배치한 뒤 **Source Avatar의 자식으로 넣고 위치와 크기**를 맞춰줍니다.

    ![image.png]({{BASE_PATH}}/media/e0968448f39f5435.png)

2. Source Avatar에 맞게 의상의 BlendShape**를 조절**합니다.

    ![image.png]({{BASE_PATH}}/media/d89034290e6953d7.png)

3. Avatar의 BlendShape도 의상에 맞춰 👠**Foot Heel, 👙Breast** 등의 BlendShape를 조절합니다.

    ![image.png]({{BASE_PATH}}/media/ebdd8f821892ae10.png)


### 1-2. 📄 Source Profile 사용

1. 📄 Profile 준비
- Profile 경로: `Assets\@Eden_Tools\Kisetter\Profiles`
- 목록에 원하는 Profile이 보이지 않는 경우, 위 경로에 **Profile 폴더를 직접 추가** 해 주세요.
    - Profile 폴더 구성 예시

        Profiles
        └─ ProfileName
            ├─ ProfileName.json
            └─ ProfileName.eb

        ![image.png]({{BASE_PATH}}/media/9e1066872143049d.png)


![image.png]({{BASE_PATH}}/media/1f6499e157008668.png)

1. 만약, Profile이 Foot_Heel을 조정한 Profile이라면, Target Avatar도 그에 맞춰 비슷한 발의 형태가 되도록 BlendShape를 조정해주세요.
    1. **의상에 맞춰 Foot_Heel (or HighHeel) Profile을 사용해주세요.**

### 2. 🧍Target Avatar Setup

1. 아바타를 Scene에 배치한 뒤 **회전(Rotation)과 스케일(Scale)을 초기화**합니다.
2. 아바타에 **Animator**와 몸통**에 해당하는 Skinned Mesh Renderer**가 정상적으로 존재하는지 확인합니다.

    ![image.png]({{BASE_PATH}}/media/f32c8c8362afe00c.png)

3. Body Mesh가 **축소되거나 가려진 부분 없이 전부 보이도록** BlendShape를 조정합니다.

    ![image.png]({{BASE_PATH}}/media/63feca0954364a0e.png)

- 만약, Source의 Foot Heel을 조정한 경우 Target Avatar도 비슷한 발의 형태가 되도록 BlendShape를 조정해주세요.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/7307a7d1c11dca6e.png" alt="Bad Case 1" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/00934d0789ea93c5.png" alt="Good Case 1" />
  </figure>
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/0020676efddbe42b.png" alt="Bad Case 2" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/3c3912e4aed163f4.png" alt="Good Case 2" />
  </figure>
</div>

## [2] 변형 진행

### 3. 🔧きせった (Kisetter) Setup

1. きせった (Kisetter)를 Hierachy에 배치합니다.
    - Prefab 경로: `Assets\@Eden_Tools\Kisetter\Kisetter.prefab`

### 4. きせった (Kisetter) Setup

1. きせった (Kisetter) - Manual Fitting Mode 를 클릭합니다.

![image.png]({{BASE_PATH}}/media/4b01517fa984a0e9.png)

1. 앞서 준비한 **아바타**와 **의상**을 きせった (Kisetter)에 할당해 줍니다.

    ![image.png]({{BASE_PATH}}/media/9eb723c87de25386.png)

    - **Source Avatar Object**: 의상의 원본 아바타 오브젝트
    - **Source Clothes Object**: 의상 오브젝트
    - **Target Avatar Object**: 대응할 아바타 오브젝트
2. Profile Mode 일 경우

    ![image.png]({{BASE_PATH}}/media/30a02f9502619203.png)

    - **Profile**: 사용할 의상에 맞는 Profile
    - **Source Clothes Object**: 의상 오브젝트
    - **Target Avatar Object**: 대응할 아바타 오브젝트


### 5. きせった (Kisetter) Option Setup

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

### 6. 변형 진행

**Run ALL**을 눌러서 변형을 진행합니다.

![image.png]({{BASE_PATH}}/media/388999557ff08862.png)

- Fitting과 Weighting을 단계별로 진행하려면 아래의 **Step-by-step Progress**를 사용합니다.

### 7. 본 조정 진행

Manual Fitting Mode일 경우, 자동 대응된 의상에서 본을 조정할 수 있습니다.

![image.png]({{BASE_PATH}}/media/300303c039d540ee.png)

#### 조작 방식

![image.png]({{BASE_PATH}}/media/0403a56fedd1ed35.png)

- 상단의 W:Move / E:Rotation / R:Scale을 누르거나 키보드의 W/E/R 버튼을 눌러 조작 방식을 변경할 수 있습니다.
    - W:Move - Position 이동
    - E:Rotation - Rotation 회전
    - R:Scale - Scale 조정

#### 좌우 대칭

![image.png]({{BASE_PATH}}/media/7b0f0c16790de3d6.png)

- 좌우 대칭되는 본이 있을 경우, Mirror 버튼을 통해 같이 움직일 수 있습니다.
- Mirror:On일 경우 아바타 기준 X축으로 거울처럼 움직입니다.

#### 본 목록

![image.png]({{BASE_PATH}}/media/df7b1834b78e0a74.png)

- 조작할 수 있는 본의 목록입니다.
- 조작할 수 있는 Bones List에는 목록이 나열됩니다.
    - Bone List:Humanoid Bone Only
        - Bone List에 Hip, Chest 같은 Humanoid Bone만 표시됩니다.
    - Bone List: Show Other Bones
        - Bone List에 Hip, Chest 같은 Humanoid Bone 외에도 그 자식 본들이 표시됩니다.
- Humanoid Bone Picker
    - 원하는 부위를 클릭하여 본을 선택할 수 있습니다.
- 화면에 있는 아바타의 푸른 점을 눌러서도 본을 선택하여 조정할 수 있습니다.
- **모자, 장갑, 신발 등은 해당 옵션을 통해 세부적으로 추가 조정해 주시는 것을 권장드립니다.**

![image.png]({{BASE_PATH}}/media/4db99de895e9a2be.png)

- 조정이 완료되면 아래 버튼을 눌러 대응을 진행해 주세요.

### 8. 메시 편집 진행

Manual Fitting Mode에서는 자동 피팅된 의상의 메시를 Scene View에서 직접 조정할 수 있습니다.

![image.png]({{BASE_PATH}}/media/a68b20823cea5910.png)

#### 조정할 Mesh 선택

![image.png]({{BASE_PATH}}/media/6080b4583790bee0.png)

- `Main`에서 편집할 메시를 선택합니다.
- 여러 Mesh를 같이 조정하고 싶으시다면, 조정하고 싶은 Mesh의 `Affect`를 체크해주세요.
- `변경 사항 취소` 버튼을 통해서, 수정한 내용을 되돌릴 수 있습니다.

#### Vertex 선택

- Vertex를 클릭하거나, Drag를 통해 Box 형태로 여러 Vertex를 한번에 선택할 수 있습니다.
- 선택된 Vertex는 노란색으로 표시됩니다.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>단일 선택</figcaption>
    <img src="{{BASE_PATH}}/media/6d66d5ebb4b09557.png" alt="단일 Vertex 선택" />
  </figure>
  <figure>
    <figcaption>다중 선택</figcaption>
    <img src="{{BASE_PATH}}/media/83e7aa82741df69b.png" alt="다중 Vertex 선택 1" />
    <img src="{{BASE_PATH}}/media/c225300a136c51be.png" alt="다중 Vertex 선택 2" />
  </figure>
</div>

#### 연결된 Vertex 선택

- 메시가 서로 분리된 여러 영역으로 구성된 경우 특정 영역을 한 번에 선택할 때 유용합니다.

![image.png]({{BASE_PATH}}/media/b1812976161ccd17.png)

- `L`: 마우스 커서 근처의 버텍스와 연결된 버텍스를 모두 추가 선택합니다.
- `Shift + L`: 마우스 커서 근처의 버텍스와 연결된 버텍스를 모두 선택 해제합니다.

#### Vertex 조작

- `W / E / R` 버튼 또는 키보드 단축키로 조작 방식을 변경합니다.
    - `W`: 이동
    - `E`: 회전
    - `R`: 크기 조절

<div class="doc-media-grid doc-media-grid-3">
  <figure>
    <figcaption><code>W</code> 이동</figcaption>
    <img src="{{BASE_PATH}}/media/4accd5822cf38fba.png" alt="W 이동 조작 예시" />
  </figure>
  <figure>
    <figcaption><code>E</code> 회전</figcaption>
    <img src="{{BASE_PATH}}/media/bd90cd4b8efaf419.png" alt="E 회전 조작 예시" />
  </figure>
  <figure>
    <figcaption><code>R</code> 크기 조절</figcaption>
    <img src="{{BASE_PATH}}/media/edb5ec08dcbebbe3.png" alt="R 크기 조절 예시" />
  </figure>
</div>

- 핸들 방향(조작 방향)
    - `월드` : 월드 좌표축을 기준으로 핸들을 표시합니다.
    - `버텍스 노멀` : 선택한 버텍스의 노멀 방향을 기준으로 핸들을 표시합니다.

#### Vertex 표시

- 조정 창에서 Vertex의 표시 방식을 변경할 수 있습니다.

![image.png]({{BASE_PATH}}/media/7f5e56bc1c2229cb.png)

- `버텍스 표시`: 조정할 Vertex의 표시 여부를 설정합니다.
- `가려진 버텍스 표시`: 다른 Mesh에 가려져 보이지 않는 Vertex도 표시할지 여부를 설정합니다.
- `표시 거리`: 카메라로부터 설정한 거리 이내에 있는 버텍스만 표시합니다.

#### Vertex 숨기기

- 조정을 방해하는 Vertex는 `G` 키를 눌러서 숨길 수 있습니다.
    - `G`: 선택한 Vertex 숨기기
    - `Shift + G`: 숨긴 Vertex 다시 표시

![image.png]({{BASE_PATH}}/media/33954415fccf5904.png)

![image.png]({{BASE_PATH}}/media/1f4b2b7df45a31f9.png)

#### 대칭 편집

![image.png]({{BASE_PATH}}/media/3111582ed270d28f.png)

- `대칭`: `X / Y / Z` 중 대칭 편집에 사용할 축을 선택합니다.
    - 여러 축을 동시에 활성화할 수도 있습니다.
- `대칭 이동`
    - `반전`: 선택한 축을 기준으로 반대편 버텍스가 거울처럼 움직입니다.
    - `동일`: 반대편 버텍스에도 같은 방향의 변형을 적용합니다.
- `대칭 클리핑`
    - 대칭 축 부근의 버텍스가 반대쪽 영역을 넘어가지 않도록 제한합니다.

#### 편집 영향 범위 설정

![image.png]({{BASE_PATH}}/media/4e4790e5af577f26.png)

- 선택한 버텍스를 조작하면 주변 버텍스도 설정된 범위와 가중치에 따라 함께 변형됩니다.
- 영향을 강하게 받을 수록 빨간색, 약하게 받을 수록 파란색으로 표시됩니다.
- `선택 방식`
    - `직선 거리`: 선택한 버텍스와 Brush Radius 거리 이내의 Vertex 들이 영향을 받습니다.
    - `인접 거리`: 선택한 버텍스와 Brush Radius 거리 이내의 연결된 Vertex만 영향을 받습니다.
- `가중치 방식`
    - `선형`
        - 선택 지점에서 멀어질수록 영향이 일정하게 감소합니다.
    - `가우시안`
        - 선택 영역과 주변 영역이 부드럽게 연결되도록 영향을 적용합니다.
    - `고정`
        - 브러시 범위 안의 버텍스가 동일하게 움직입니다.
- `강도`
    - 주변 버텍스에 적용되는 변형의 강도를 조절합니다.
    - `Ctrl(Command) / Caps Lock + Shift + 마우스 휠`
        - 브러시 강도를 조절합니다.
- `브러시 반경`
    - 선택 영역 주변에 영향을 주는 범위를 조절합니다.
    - `Shift + 마우스 휠`
        - 브러시 반경을 조절합니다.

#### 형태 복원

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>복원 전</figcaption>
    <img src="{{BASE_PATH}}/media/3f5de925356ee854.png" alt="복원 전" />
  </figure>
  <figure>
    <figcaption>복원 후</figcaption>
    <img src="{{BASE_PATH}}/media/6005155dce938126.png" alt="복원 후" />
  </figure>
</div>

변형 결과물 혹은 편집 중 주름이나 모서리 형태가 과도하게 찌그러졌을 경우 `로컬 형태 복원`을 사용해 주변 형태를 자연스럽게 정리할 수 있습니다.

- `반복 횟수`
    - 형태 복원 계산을 반복하는 횟수입니다.
    - 값이 높을수록 복원 효과가 넓고 부드럽게 적용될 수 있습니다.
- `복원 강도`
    - 원래의 로컬 형태를 반영하는 강도를 조절합니다.
- `선택 영역 복원`
    - 현재 선택한 영역의 로컬 형태를 한 번에 복원합니다.
- `복원 브러시`
    - 버튼을 활성화한 후 Scene View에서 드래그하여 필요한 부분만 복원합니다.
    - 편집으로 발생한 변형 차이를 주변 버텍스와 부드럽게 연결하여 국소적인 찌그러짐을 완화합니다.

#### 편집 완료

- 메시 조정과 뚫림 확인이 완료되면 `확인 후 계속` 버튼을 눌러 다음 과정을 진행해 주세요.
- `확인 후 계속`을 누르면 현재 편집 결과가 적용되고 나머지 Kisetter 작업이 진행됩니다.

## [3] 결과 확인

### 9. 변형된 결과물 확인

### 9-1. 변형 결과물 확인

- 변형된 결과물이 아바타에 맞게 적용되었는지 확인합니다.
- 원치 않는 형태로 변형된 경우, **[Advanced Option] - [Save Settings] - Save Result As BlendShape**를 활성화했다면 의상에 추가된 Kisetter_fit BlendShape 값을 조절해 원래 형태로 되돌릴 수 있습니다.

### 9-2. VRChat - Modular Avatar

- Modular Avatar는 예시일 뿐이며, VRCFury 등 다른 툴을 사용해 의상의 본이 아바타를 따라 움직이도록 설정해도 괜찮습니다.
    - 단, [Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar를 체크한 경우에는 의상이 이미 Avatar 본을 따라 움직이도록 설정됩니다.
- 의상을 우클릭한 뒤 [Modular Avatar] - [Setup Outfit]을 선택하여, 의상의 본이 아바타를 따라 움직이도록 설정합니다.

![image.png]({{BASE_PATH}}/media/a477756018a1e22d.png)

- Table Of Content
