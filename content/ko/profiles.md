---
title: "Profile 생성 및 추가"
slug: "profiles"
category: "기능 설명"
description: "의상 대응 정보를 Profile로 생성하고 설치하는 방법입니다."
order: 60
---

<video controls preload="metadata" src="{{BASE_PATH}}/media/8d1ba909a5c2bb70.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## Profile 생성 방법

1. Profile을 생성할 **아바타를 Scene에 배치**합니다.
2. 아바타의 **Rotation(회전)** 과 **Scale(스케일)** 을 **초기값으로 설정**합니다.
3. 아바타에 다음 요소가 **정상적으로 존재하는지 확인**합니다.
    - **Animator**
    - **Body Skinned Mesh Renderer**
4. Body Mesh가 **축소되거나 가려진 부분 없이 전부 보이도록** Shape Key를 조절합니다.
    - 만들 Profile에 따라 👠**Foot Heel, 👙Breast** 등의 Shape Key를 조절합니다.
5. **Auto Morpher – Profile Saver** 를 **Hierarchy** 에 배치합니다.
6. **Profile Name** 에 생성할 Profile의 이름을 입력합니다.
7. **Source Avatar** 슬롯에 대상 아바타를 할당합니다.
8. **Source Body Mesh** 슬롯에 **Body Skinned Mesh Renderer** 를 할당합니다.

    ![image.png]({{BASE_PATH}}/media/d1548659e15d02f4.png)

9. **Save Profile** 버튼을 클릭합니다.
    - 필요한 경우 Body Mesh의 Shape Key를 조절한 뒤, 앞선 과정을 반복하여 특정 Shape Key에 대한 Profile을 생성합니다.
10. Profile이 정상적으로 생성되었는지 확인합니다.
    - Profile 경로: `Assets\@Eden_Tools\Eden_Auto Morpher\Profiles`

## Profile 추가 방법

1. Profile 폴더를 Profile 경로에 추가합니다.
    - Profile 경로: `Assets\@Eden_Tools\Eden_Auto Morpher\Profiles`
    - 목록에 원하는 Profile이 보이지 않는 경우, 위 경로에 **Profile 폴더를 직접 추가** 해 주세요.
        - Profile 폴더 구성 예시

            Profiles
            └─ ProfileName
                ├─ ProfileName.json
                └─ ProfileName.eb


    ![image.png]({{BASE_PATH}}/media/99347e5849f09c7b.png)

2. Auto Morpher에 Profile이 정상적으로 보이는지 확인합니다.
    1. Auto Morpher를 Hierarchy에 배치
        - Prefab 경로: `Assets\@Eden_Tools\Eden_Auto Morpher\EdenAuto Morpher`
        - 또는 빈 게임 오브젝트에 Auto Morpher Component를 추가합니다.
    2. **프로필 모드** 를 클릭합니다.

        ![image.png]({{BASE_PATH}}/media/f420e636785bfa85.png)

    3. **Source Avatar - Profile에 추가한 Profile이 존재하는지 확인합니다.**

        ![image.png]({{BASE_PATH}}/media/2066d7a880e49364.png)

        - **Profile**: 의상에 해당하는 아바타 Profile
            - Profile이 목록에 표시되지 않는 경우, **Refresh 버튼을 눌러 다시 불러오거나** `Assets\@Eden_Tools\Eden_Auto Morpher\Profiles`  폴더에 **Profile이 정상적으로 존재하는지 다시 확인해 주세요.**
