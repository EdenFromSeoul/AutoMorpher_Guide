---
title: "Kisetter 동작 과정"
slug: "how-kisetter-works"
category: "시작하기"
description: "Pose Setup, Fitting, Weighting을 거쳐 의상이 타깃 아바타에 맞춰지는 전체 과정을 이해합니다."
order: 15
---

**きせった (Kisetter)는 크게 세 가지 과정으로 이루어져 있습니다.**

1. **Pose Setup** - 타깃 아바타에 맞춰 의상의 본을 조정
2. **Fitting** - 타깃 아바타에 맞춰 의상의 Mesh를 변형
3. **Weighting** - 타깃 아바타에 맞춰 의상의 Weight를 재계산

## 전체 동작 흐름

<div class="process-overview" role="list" aria-label="Kisetter의 세 단계 동작 과정">
  <div class="process-stage" role="listitem"><span>01</span><strong>Pose Setup</strong><p>타깃 아바타에 맞춰 의상의 본을 조정</p></div>
  <span class="process-arrow" aria-hidden="true">→</span>
  <div class="process-stage" role="listitem"><span>02</span><strong>Fitting</strong><p>타깃 아바타에 맞춰 의상의 Mesh를 변형</p></div>
  <span class="process-arrow" aria-hidden="true">→</span>
  <div class="process-stage" role="listitem"><span>03</span><strong>Weighting</strong><p>타깃 아바타에 맞춰 의상의 Weight를 재계산</p></div>
</div>

기본적으로 きせった (Kisetter)는 Target Avatar에 맞춰 의상의 본을 조정한 뒤, Mesh를 변형하고 Weight를 재계산하는 순서로 진행됩니다.

기존 의상을 복제해 새로운 Mesh로 작업하므로 원본 의상은 변경되지 않습니다.

변환 결과로 저장된 Mesh와 FBX 파일은 다음 경로에서 확인할 수 있습니다.

```text
Assets/@Eden_Mesh/<Avatar 명>/<의상 명>
```

!!! warning "변환 완료 전에 취소한 경우"
    변환이 완료되기 전에 취소하면 현재 Mesh는 아직 Asset으로 저장되지 않은 작업용 Mesh일 수 있습니다. 이 상태에서 Unity를 재시작하거나 VRChat에 업로드하면 Mesh가 사라질 수 있습니다.

아바타 사이의 체형 차이는 가능한 범위에서 자동으로 계산하고 보정하지만, 의상에 따라 결과가 충분하지 않을 수 있습니다.

이 경우 Manual Fitting에서 본 위치나 Mesh를 직접 조정하면 더 나은 결과를 얻을 수 있습니다.

## 1. Pose Setup

Pose Setup은 변형을 진행하기 전 의상을 최대한 Target Avatar에 맞추는 과정입니다.

<div class="stage-diagram" role="list" aria-label="Pose Setup 처리 흐름">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>Body Mesh 탐색</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>A Pose → T Pose 변환</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>의상 복제</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Source Avatar와 의상 간의 본 매칭 여부 검사</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">05</span><strong>Target Avatar에 맞춰 의상의 본 조정 진행</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">06</span><strong>Source Avatar와 Target Avatar 간의 체형 차이 정보 수집</strong></div>
</div>

### Body Mesh 탐색

- 아바타의 몸을 나타내는 Body Mesh를 탐색합니다.
- 기본적으로 하나의 Body Mesh를 자동으로 탐색합니다. 여러 개의 Body Mesh를 사용하는 아바타라면 필요한 Mesh를 수동으로 할당해 주세요.

### A Pose → T Pose 변환

- A Pose 아바타를 T Pose로 변환합니다.
- 아바타와 함께 의상도 T Pose로 변환합니다.

### 의상 복제

- Source Clothes를 복제해 Target Avatar에 적용할 새 의상을 생성합니다.

### Source Avatar와 의상 간의 본 매칭 여부 검사

- きせった (Kisetter)는 Source Avatar의 전용 의상을 변환하는 것을 전제로 하므로, Source Avatar와 Source Clothes의 Humanoid 본을 비교해 전용 의상인지 확인합니다.
- 필요한 Humanoid 본의 대응 관계를 찾지 못하면, `ClothesHumanoidMatchedBone is Null` 오류가 발생합니다.
  - 해당 오류가 발생하면 의상 Prefab의 Scale이 올바른지와 Source Avatar의 전용 의상이 맞는지 확인해 주세요.

### Target Avatar에 맞춰 의상의 본 조정 진행

- 두 아바타의 체형 차이를 기반으로 본의 위치와 크기를 조정해, 의상이 Target Avatar에 최대한 맞도록 준비합니다.

### 체형 차이 보정 정보 수집

- 다음 Fitting 단계에서 사용할 체형 차이 정보를 수집합니다.

## 2. Fitting

Fitting은 의상을 Target Avatar에 맞춰서 자연스럽게 변형하는 단계입니다.

### Auto Fitting

의상 변환 과정을 자동으로 진행합니다.

### Manual Fitting

Auto Fitting 과정에 보조 본 조정과 Mesh 직접 편집 단계가 추가됩니다.

Auto Fitting 결과에 추가 조정이 필요할 때 사용합니다.

<div class="stage-diagram" role="list" aria-label="Fitting 처리 흐름">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>의상의 각 Mesh별 정보 수집</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>[Manual Fitting] 보조 본 추가 조정</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>(체형 차이 보정 옵션을 사용한 경우) 체형 차이 보정 진행</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Fitting Iteration만큼 의상 변형 진행</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">05</span><strong>Body Correlation Iteration만큼 Body Mesh 관통 보정 진행</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">06</span><strong>[Manual Fitting] Mesh 편집 진행</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">07</span><strong>Target Avatar에 맞춰 본 위치 조정 및 이름 수정</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">08</span><strong>Mesh를 Asset으로 저장</strong></div>
</div>

### 의상의 각 Mesh별 정보 수집

- 각 의상 Mesh의 정점 위치와 연결 관계 등의 정보를 수집합니다.

### [Manual Fitting] 보조 본 추가 조정

- Manual Fitting에서는 변형을 시작하기 전에 보조 본을 추가로 조정할 수 있습니다.
  - 이를 통해 변환될 의상의 전체적인 실루엣을 미리 조정할 수 있습니다.

### 체형 차이 보정 진행

- Body Shape Matching 옵션을 사용하면 체형 차이가 큰 아바타 사이의 차이를 줄이기 위한 보정이 진행됩니다.

### 의상 변형 진행

- 각 의상 정점과 Body Mesh 사이의 위치 관계를 기준으로 Mesh를 변형합니다.

### Body 관통 보정 진행

- Body Mesh를 관통하는 의상 정점을 찾아 교차가 줄어들도록 보정합니다.

### [Manual Fitting] Mesh 편집 진행

- Manual Fitting에서는 자동 Fitting이 끝난 후 Mesh를 추가로 편집할 수 있습니다.
  - 일부 뚫린 부분을 수정하거나, 형상 복원 기능으로 왜곡된 부분을 되돌릴 수 있습니다.

### Target Avatar에 맞춰 본 위치 및 이름 수정

- Target Avatar에 맞춰 Humanoid Bone의 위치와 이름을 수정합니다.
- 의상의 PhysBone 위치와 PhysBone Collider 크기도 변형된 의상에 맞춰 다시 조정합니다.

### Mesh를 Asset으로 저장

- Fitting 결과를 Mesh Asset으로 저장합니다. 저장된 Mesh는 다음 Weighting 단계에서 이어서 사용됩니다.
- `Assets/@Eden_Mesh/<Avatar 명>/<의상 명>` 경로에 저장됩니다.

## 3. Weighting

Weighting은 변형된 의상이 타깃 아바타의 움직임을 자연스럽게 따라가도록 만드는 마지막 단계입니다.

<div class="stage-diagram" role="list" aria-label="Weighting 처리 흐름">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>의상의 각 Mesh별 정보 수집</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>의상 Armature 재구성</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>Weight 재계산</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>FBX 내보내기</strong></div>
  <div class="stage-diagram-node is-complete" role="listitem"><span class="stage-diagram-index">✓</span><strong>완료</strong></div>
</div>

### 의상의 각 Mesh별 정보 수집

- Fitting이 끝난 Mesh의 정점 위치와 연결 관계 등의 정보를 다시 수집합니다.

### 의상 Armature 재구성

- 선택한 출력 설정에 따라 의상 전용 Armature를 구성하거나, 의상의 본을 Target Avatar의 Armature에 연결합니다.
  - 의상 Armature를 유지하는 경우, 본의 회전을 보존하기 위해 Anchor Bone이 추가될 수 있습니다.
- 필요한 경우 부족한 본을 추가로 생성합니다.

### Weight 재계산

- Target Avatar의 Body Mesh를 기준으로 각 의상 정점의 Weight를 재계산하고 Mesh에 반영합니다.

### FBX 내보내기

- FBX 내보내기 옵션을 사용한 경우, Weighting이 끝난 결과를 FBX로 저장하고 의상에 다시 연결합니다.
  - `Assets/@Eden_Mesh/<Avatar 명>/<의상 명>` 경로에 저장됩니다.
- 저장된 FBX를 다시 불러온 뒤, 현재 의상이 FBX의 Mesh를 참조하도록 연결합니다.
  - FBX 저장 또는 불러오기에 실패하면 기존 Mesh Asset을 그대로 사용합니다.
  - 이 경우 FBX 파일만 생성되지 않으며, Unity 또는 VRChat에서 의상을 사용하는 데에는 문제가 없습니다.
