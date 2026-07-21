---
title: "Q&A 및 오류 해결"
slug: "faq"
category: "문제 해결"
description: "사용 조건, 자주 묻는 질문과 대표적인 오류 해결 방법을 모았습니다."
order: 90
---

## [사용 안내]

### 🧩 어떤 아바타에 사용할 수 있나요?

**T Pose 형태로 설정된 Unity Humanoid 인간형 아바타에 사용할 수 있습니다.**

또한 아바타에는 **Animator**가 포함되어 있어야 하며 본이 알맞게 설정되어있어야 합니다.

또한, 체형 기준으로 사용할 수 있는 **몸통에 해당하는 Mesh**를 가지고 있어야 합니다.

---

## 🧍‍♂️ A Pose 아바타도 사용 가능한가요?

네, A Pose 형태의 아바타도 지원합니다.

A Pose 아바타의 경우에는, 아래 사진처럼 아바타 할당하는 칸 옆에 [**A Pose Avatar를 체크]**해주세요.

![image.png]({{BASE_PATH}}/media/921efb52954f2edb.png)

체크할 경우 프로그램이 자동으로 팔을 아래의 사진처럼 T Pose 형태로 변형시켜 대응을 진행합니다.

- Source Avatar의 경우 의상도 자동으로 T Pose 형태에 맞춰 변형시켜 대응을 진행합니다.

![image.png]({{BASE_PATH}}/media/4bdf81298b21f9e3.png)

---

## ⚖️ 체형 차이가 큰 아바타도 매칭이 가능한가요?

체형 차이가 큰 경우, 특히 **가슴 크기 차이가 큰 경우** 변형이 부자연스럽거나 피팅에 실패할 수 있습니다.

안정적인 결과를 위해

- **체형이 유사한 아바타 끼리** 대응을 진행하시거나
- **BlendShape(예: Big Breast)** 를 조절하거나 Mesh Studio같은 편집툴을 통해 대상 아바타와 체형을 최대한 맞춘 후 변환을 시도해 주세요.
이에 대해서는 [변형 품질을 높이는 팁](https://app.notion.com/p/34c1bca8582e81e08585f7820c82c01b?pvs=21) 를 참고해주세요.


---

## 🧍‍♀️🧍‍♂️ 성별이 다른 아바타의 의상도 입힐 수 있나요?

네, 동작에 아바타 성별은 상관 없습니다.

ex) https://x.com/EDEN_LABS_JP/status/2012466971267215649?s=20

다만, 가슴 등 **체형 차이가 큰 경우에는 변형 결과가 부자연스러울 수 있습니다.**

이런 경우에는 **BlendShape로 체형을 최대한 비슷하게 조정한 뒤 Auto Morphing을 진행하는 것을 권장드립니다.**

---

## 📦 대응한 의상을 Unity Package로 내보낼 수 있나요?

대응 시 **[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar** 옵션을
 **비활성화한 상태**로 작업하셨다면, 의상을 **Prefab으로 만든 뒤 Unity Package로 내보낼 수 있습니다.**

- 단, 변형된 Mesh는 `Assets/@Eden_Mesh*` 경로 아래에 저장되므로,
**Unity Package로 내보낼 때 해당 Mesh 파일도 누락되지 않도록 함께 포함해 주세요.**

    ![image.png]({{BASE_PATH}}/media/3ca16a48eeb2d31c.png)


---

## 📤 대응한 의상을 FBX로 추출 가능한가요?

아쉽게도 현재는 **대응한 의상을 FBX로 내보내는 기능을 제공하고 있지 않습니다.**

---

## 🧩 [BlendShape Generator] 전용 의상만 BlendShape를 만들 수 있나요?

아닙니다. **전용 의상이 아니어도 BlendShape를 생성할 수 있습니다.**

전용 의상의 경우 더 정밀한 BlendShape 생성이 가능하지만,
 전용 의상이 아닌 **일반 Mesh나 헤어 Mesh**도 아바타의 BlendShape 변화에 맞춰
 BlendShape를 생성할 수 있습니다.

---

## ⚙️ Unity 2019.4.31f1(구 VRC 버전)에서 사용할 수 있나요?

아쉽게도 Unity 2019 버전에서는 프로그램에 사용된 일부 기능을 지원하지 않아 사용할 수 없습니다.

**Unity 2021 이상의 버전**에서 사용해 주세요.

---

## ❗사용하다 오류가 발생했어요. 어디로 문의해야 하나요?

사용하시다가 오류가 발생하실 경우 아래 링크의 **Discord 서버의 [❓｜help_質問]** 채널로 문의해주세요.

- Discord Link: [https://discord.com/invite/JFzDGrN2bF](https://discord.com/invite/JFzDGrN2bF)

## ———————————————————————

## [오류 안내]

## 👕 의상이 과하게 팽창됩니다.

다음과 같은 경우 의상이 과도하게 팽창될 수 있습니다.

- **Source Body Mesh에 Shrink BlendShape가 적용된 경우**

    → Source Body Mesh의 BlendShape 상태를 확인하고, Shrink 관련 값이 적용되어 있는지 점검해 주세요.

- **Source Avatar와 Source Clothes가 정확히 매칭되지 않은 경우**

    → 두 오브젝트의 **위치(Position), 회전(Rotation), 스케일(Scale)** 이 올바르게 맞춰져 있는지 확인해 주세요.

- **Source Avatar와 Source Clothes의 BlendShape가 맞지 않은 경우**

    → 아바타는 [Big_Breast : 0]인데 의상은 [Big_Breast : 100]일 경우 이 차이만큼 더 크게 매칭되기에 의상이 더 크게 변형될 수 있습니다.

    ![image.png]({{BASE_PATH}}/media/466cf73fc279e345.png)


---

## 👕 의상이 너무 쪼그라듭니다.

의상이 비정상적으로 축소되는 경우, 다음 항목을 확인해 주세요.

- **Target Body Mesh에 Shrink BlendShape가 적용된 경우**

    → Target Body Mesh의 BlendShape를 확인하고, Shrink 관련 값이 적용되어 있다면 해제해 주세요.

    ![image.png]({{BASE_PATH}}/media/63feca0954364a0e.png)


---

## 🦶 발이 이상하게 변형됩니다

발 형태가 어색하게 변형되는 경우 아래 사항을 점검해 주세요.

- **Source Avatar / Profile의 Foot BlendShape와 Target Avatar의 Foot BlendShape가 서로 다른 경우**

    → 두 Avatar의 Foot BlendShape가 **동일한 형태**를 가지도록 조절해 주세요.

- 문제가 지속적으로 발생할 경우

    → **Advanced 옵션의 `Skip Foot Fitting`을 활성화**하여 발 보정 과정을 건너뛸 수 있습니다.

    [변형 품질을 높이는 팁](https://app.notion.com/p/34c1bca8582e81e08585f7820c82c01b?pvs=21)  의 **[발 변형을 안정적으로 진행하는 방법]** 를 참고해주세요.


---

## 🧍 Body Mesh를 찾을 수 없습니다.

1. **Body Mesh를 자동으로 찾지 못한 경우, Body Mesh 선택 창이 표시됩니다.**
    1. 이 창에서 **몸통에 해당하는 Mesh를 선택한 뒤 [Select] 버튼을 클릭해 주세요.**

        ![image.png]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)


1. Tool이 Body Mesh를 자동으로 찾지 못하는 경우 다음과 같이 설정해 주세요.
- **자동 Body Mesh 탐색 옵션을 비활성화**한 후 **Body Mesh를 수동으로 직접 할당**해 주세요.

    ![image.png]({{BASE_PATH}}/media/13adc48cf815771b.png)


---

## ⚠️ **[clothesHumanoidMatchedBones is null] 오류가 발생합니다.**

이 오류는 **Source Avatar/Profile과 일치하는 Source Clothes의 본을 찾지 못했을 때** 발생합니다.

다음 항목을 확인해 주세요.

- **Source Clothes가 선택한 Source Avatar/Profile 전용 의상인지** 확인해 주세요.
- 다른 아바타용 의상이거나, 의상의 본 이름/구조가 Source Avatar/Profile과 다를 경우 변형을 진행할 수 없습니다.
    - 본의 이름과 위치가 일치하는지를 확인해주세요.
- 의상을 **Source Avatar의 자식으로 배치한 뒤 Transform Reset**을 진행하고 다시 시도해 주세요.

![image.png]({{BASE_PATH}}/media/f47b0548486bef92.png)

---

## ⚠️ [Transform resides in a Prefab asset and cannot be set to prevent data corruption] 오류가 발생합니다.

이 오류는 **Project 창에 있는 Prefab 원본 아바타/의상을 Auto Morpher에 직접 할당했을 때** 발생할 수 있습니다.

Project 창의 아바타/의상을 바로 할당하지 말고, 먼저 **Hierarchy에 배치한 뒤**, Hierarchy에 있는 오브젝트를 Auto Morpher에 할당해 주세요.

---

## ⚠️ Profile Mode - [refBone transform is null (refBone = {Humanoid Bone})] 오류가 발생합니다.

이 오류는 Profile Mode에서 **포즈를 자동으로 조정할 때 기준으로 사용하는 본이 의상에 없을 경우** 발생합니다.

같은 아바타 전용의 다른 의상이 있다면, 해당 의상에서 **오류에 표시된 refBone에 해당하는 본**을 복사하여 문제가 발생한 의상에 추가해 주세요.

본의 위치와 이름을 동일하게 맞춰주시면 대응을 진행할 수 있습니다.

해당 부분은 추후 업데이트를 통해 **자동으로 보완될 수 있도록 개선할 예정입니다.**

---

## 🦴 Clothes Armature Error

의상 Armature 관련 오류가 발생하는 경우입니다.

- **의상에 Armature가 없는 상태에서 Skinned Mesh Renderer만 할당한 경우**

    → Tool이 정상적으로 동작하지 않습니다.

- 반드시 **Armature를 포함한 의상 오브젝트**를 할당해 주세요.
- 아바타에 이미 입혀져 있는 의상을 입히려 하는 경우, [변형 품질을 높이는 팁](../quality-tips/) 를 참고해주세요.

---

## 🪡 변형 후 의상의 위치를 조절할 수 없나요?

대응 시 **[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar** 옵션을

**활성화한 상태**로 작업하신 경우,

Hip, Chest 등 **아바타 바디에 해당하는 본의 Weight가 Avatar의 Armature로 이동**하게 됩니다.

이로 인해 **의상 Armature의 해당 본을 움직여도 위치가 변경되지 않습니다.**

변형 후 의상의 본을 다시 조정하고 싶으시다면, 해당 옵션을 **비활성화한 상태로 다시 대응을 진행해 주세요.**

![image.png]({{BASE_PATH}}/media/4b247fa9ed1391e6.png)

---

## 🧥 대응을 하면 기존에 입혔던 의상이 사라져요.

**[Basic Option] - Remove AutoMorphed Other Clothes** 옵션을 활성화한 상태로 대응을 진행하면,

Target Avatar에 이미 존재하는 **Auto Morpher로 대응된 의상**이 자동으로 삭제됩니다.

한 아바타에 **두 개 이상의 의상**을 대응하고 싶으시다면, 해당 옵션을 **비활성화한 상태**로 사용해 주세요.

---

## 🔁 [BlendShape Generator] Body Base라는 BlendShape가 추가되어있어요.

참조 Mesh의 `Breast_Small`, `BigBreast` 등의 값이 **0이 아닌 상태**에서 해당 BlendShape를 생성 대상으로 선택하면, 툴은 현재 형태를 각 BlendShape의 **Weight 100 상태**로 판단합니다.

- 이때 **Weight 0일 때의 형태를 보정하기 위해** `[Body Base]` BlendShape가 추가로 생성됩니다.
- `[Body Base]`의 값이 **100으로 설정되어 있어야**, 생성된 다른 BlendShape들이 정상적으로 동작합니다.

---

## 🧬 [BlendShape Generator] 다른 BlendShape와 함께 사용하는 BlendShape가 아바타와 맞지 않는 경우

BlendShape Generator는 기본적으로 **단독으로 BlendShape를 상정하여** 설계되어 있습니다.

- 특정 BlendShape가 적용된 상태에서 함께 사용하는 BlendShape를 생성하려면, [변형 품질을 높이는 팁](../quality-tips/) 에서 **[다른 BlendShape와 함께 사용하는 BlendShape 생성 방법]**을 참고해 주세요.

---

## 🎛️ [BlendShape Controller] 조정한 것과 다른 BlendShape가 움직입니다.

툴 사용 중 **BlendShape 목록 또는 순서가 변경된 경우**, 조정 중인 항목과 다른 BlendShape가 움직일 수 있습니다.

이 경우 **[Refresh Mesh & BlendShape List]** 버튼을 눌러 BlendShape 목록을 갱신한 뒤 다시 사용해 주세요.

![image.png]({{BASE_PATH}}/media/d26452fee322d03e.png)

## ———————————————————————

## [기타]

## ❓ 이 툴의 특징이 무엇인가요?

본 툴은 **모델링에 대한 전문 지식이 없는 사용자도**, 원하는 의상을 아바타에 **쉽고 자유롭게 적용할 수 있도록** 하는 것을 목표로 개발되었습니다.

의상 변형을 위한 다양한 접근 방식이 존재하는 가운데, 저희는 **사용자가 보다 간단한 흐름으로 의상을 적용할 수 있는 경험**에 주목했습니다.

이를 위해 아바타의 **신체적 특징을 자동으로 분석**하고, 의상을 대응할 아바타의 체형에 맞게 **자동으로 조정 및 변형**하는 방식을 중심으로 설계되었습니다.

변형 과정은 최소한의 입력만으로도 진행할 수 있도록 구성되어,

- **Source Avatar와 Target Avatar만으로도** 변형을 시도할 수 있으며
- **Source Avatar의 Profile이 존재할 경우**, Target Avatar만으로도 변형이 가능합니다.

현재 변형 결과는 상황에 따라 추가 보정이 필요할 수 있으나, 이 부분은 사용 사례를 바탕으로 **지속적으로 개선해 나가고 있으며**, 궁극적으로는 **모든 사용자가 제약 없이 의상을 활용할 수 있는 환경**을 목표로 개발을 이어가고 있습니다.
