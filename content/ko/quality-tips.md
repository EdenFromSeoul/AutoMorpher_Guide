---
title: "변형 품질을 높이는 팁"
slug: "quality-tips"
category: "문제 해결"
description: "가슴·발·신발·모자·장갑 등 변형 품질을 개선하는 방법입니다."
order: 80
---

---

## 👚체형 차이로 인해 가슴 변형이 깨질 때 해결 방법

아바타 간 체형 차이가 큰 경우, 변형이 정상적으로 이루어지지 않을 수 있으며

특히 **가슴 부위에서 형태가 뭉개지는 현상**이 자주 발생할 수 있습니다.

이러한 경우, 원본 아바타나 의상에 **가슴 크기를 조절할 수 있는 Shape Key**가 있다면

해당 Shape Key를 사용해 **대상 아바타와 가슴 형태를 최대한 비슷하게 맞춘 후**

변형을 진행하는 것이 도움이 됩니다.

**예시) Shinano → Milltina**

**기본 피팅 결과(BlendShape 미조절)**

![image.png]({{BASE_PATH}}/media/79d070c14fc47913.png)

**BlendShape 조절 결과(Big Breast 100)**

![image.png]({{BASE_PATH}}/media/4f2ffb4ff1cc49bf.png)

### Mesh 편집 툴을 활용한 대응

**혹은 [Manual Mode]에서 체형 차이가 큰 부위를 먼저 맞춰주면, 더 자연스러운 피팅 결과를 얻을 수 있습니다.**

- **[Manual Fitting Mode]**에서 **[Auto Setup]**을 먼저 진행합니다.
- 이후 **Mesh Studio 등 Mesh 편집 툴**을 사용해 **Target Clothes Object**를 추가 조정합니다.
    - 특히 가슴 등 체형 차이가 큰 부위를 Source Clothes Object와 유사한 형태로 맞춰주세요.
- 이렇게 조정하면 전체적으로 아바타 체형에 더 자연스럽게 맞는 결과를 얻을 수 있습니다.

![image.png]({{BASE_PATH}}/media/4d7849ac3b32aab7.png)

---

## 🦶 발 변형을 안정적으로 진행하는 방법

본 툴은 변형 과정에서 **발의 형태 또한 함께 고려**하므로,

원본 아바타와 대응할 아바타의 **발 형태가 유사할수록** 더 안정적인 결과를 얻을 수 있습니다.

따라서 변형을 진행하기 전,

**Source Avatar와 Target Avatar 간의 발 형태를 가능한 한 동일하게 조정**하는 것을 권장합니다.

**Bad Case**

![image.png]({{BASE_PATH}}/media/7307a7d1c11dca6e.png)

**Good Case**

![image.png]({{BASE_PATH}}/media/00934d0789ea93c5.png)

---

## ⚠️ 신발이 뭉개질 때 해결 방법

만약 발 형태를 맞춘 이후에도 신발이 뭉개지거나 형태가 깨지는 현상이 발생한다면,

**Advanced Option의 `Skip Foot Fitting`을 활성화**해 주세요.

이 옵션을 사용하면 발의 **위치와 크기 조정만 적용**되며,

형태 변형을 건너뛰어 신발이 뭉개지는 현상을 방지할 수 있습니다.

**기본 신발 피팅 결과(옵션 미적용)**

![image.png]({{BASE_PATH}}/media/fccaf6469d47c205.png)

**Skip Foot Fitting 적용 결과(옵션 적용)**

![image.png]({{BASE_PATH}}/media/2386b5110acd4ad5.png)

---

## 🥿 신발이 물 웅덩이처럼 납작해질 때

- 만약 신발이 물 웅덩이처럼 납작해진다면, Source Avatar의 Foot 쪽에 Shrink가 걸려있지 않은 지를 확인해주세요.
    - **Bad Case**

        ![image.png]({{BASE_PATH}}/media/f2b4b7949a1fc65d.png)

    - **Good Case**

        ![image.png]({{BASE_PATH}}/media/883788331c7a228d.png)


### a. 발 부분 수동 조절 방법

- **[Manual Fitting Mode]에서 [0. Auto Setup]을 진행한 뒤, 발 크기를 수동으로 조정할 수 있습니다.**
    - Target Clothes Object의 Armature 아래, Foot 본 바로 위에 신발 Scale 조정을 위한 **scaleSupportBone**이 생성됩니다.
    - 해당 본의 **Scale과 Position을 조정하면** 발 부분을 더 편하게 맞출 수 있습니다.

![image.png]({{BASE_PATH}}/media/db67a2c69d60ef36.png)

---

## 🎩🧤 모자 · 장갑 Weighting 대응 방법

현재 Auto Morpher는 **머리나 손에 부착된 의상 본의 자동 위치 조정 기능을 지원하지 않습니다.**

1. **[Manual Fitting Mode]**에서 장갑이나 모자의 위치를 본을 통해 수동으로 조정해 주세요.

---

## 👕 기존 아바타가 입고 있는 의상 대응 방법

Auto Morpher는 **의상이 자체적인 Armature를 가지고 있는 경우에만** 정상적으로 동작합니다.

다만, 아바타가 이미 기본 의상을 입고 있거나, 의상이 별도의 Prefab으로 분리되어 있지 않은 경우에도

해당 의상을 변형하고 싶을 수 있습니다.

이러한 경우에는, 첨부된 영상과 같이 다음 과정을 통해 대응할 수 있습니다.

<video controls preload="metadata" src="{{BASE_PATH}}/media/12d3891b5e38ec25.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

1. **기존 아바타를 복사**합니다.
2. 복사한 아바타에서 **Animator 및 불필요한 Component를 제거**합니다.
    1. 특히 VRC Avatar Descriptor, Pipeline Manager 등의 아바타 관련 Component를 삭제해야 VRChat Upload 시 문제가 발생하지 않습니다.
3. **Body Mesh 등 불필요한 Mesh를 삭제**하여,의상만 남긴 형태로 정리합니다.
4. 의상만 남긴 오브젝트를 기존의 아바타의 자식으로(Hierarchy상 밑으로) 옮겨줍니다.
5. 해당 오브젝트를 **의상 Prefab으로 사용**하면 Auto Morpher를 통해 변형을 진행할 수 있습니다.

이 방법을 활용하면, 별도로 분리되어 있지 않은 **아바타 기본 의상도 변형 대상으로 사용할 수 있습니다.**

---

## 🔗 다른 BlendShape와 함께 사용하는 BlendShape 생성 방법

BlendShape Generator는 기본적으로 **단독으로 BlendShape를 상정하여** 설계되어 있습니다.

따라서 특정 BlendShape가 적용된 상태에서 함께 사용하는 BlendShape를 생성하려면, 아래 순서대로 진행해 주세요.

- 아래의 영상은  Breast_Small과 Breast_Flat(With Small)을 생성하는 예시입니다.

<video controls preload="metadata" src="{{BASE_PATH}}/media/868d0bf7dced00c7.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

1. 기본이 되는 BlendShape가 아직 없다면, 먼저 BlendShape Generator에서 기본 BlendShape(영상에서는 Breast_Small)를 생성합니다.
2. 아바타와 의상에서 기본 BlendShape의 Weight 값을 **100**으로 설정합니다.
    1. 영상에서는 **BlendShape Controller**를 사용해 여러 Mesh의 값을 한 번에 조정했습니다.
3. BlendShape Generator에서 추가로 생성할 BlendShape(영상에서는 Breast_Flat)를 선택합니다.
    1. 이때 **기본 BlendShape(영상에서는 Breast_Small)가 체크되어 있다면 체크를 해제해 주세요.**
4. BlendShape 생성을 진행합니다.
5. 생성된 BlendShape가 의도한 형태로 동작하는지 확인합니다.
