---
title: "설치 및 빠른 시작"
slug: "getting-started"
category: "시작하기"
description: "Booth에서 Auto Morpher 3.0.7을 내려받아 Unity 프로젝트에 설치하고 첫 작업을 준비합니다."
order: 10
---

## 시작하기 전에

Auto Morpher는 Unity Humanoid 아바타용 의상을 다른 아바타 체형에 맞게 변형하는 Unity 에디터 도구입니다. 의상의 본, Mesh, Weight를 자동으로 조정하며 필요한 경우 수동 본 조정과 BlendShape 기반 결과 저장도 지원합니다.

!!! info "현재 문서 버전"
    이 가이드는 **Auto Morpher 3.0.7**을 기준으로 작성되었습니다.

## 지원 환경

| 사용 환경 | Unity 버전 |
| --- | --- |
| VRChat | Unity 2022.3.22f1 |
| Warudo | Unity 2021.3.18f1 |
| 일반 Unity | Unity 6000 |

- 지원 OS: Windows, Linux
- 필수 외부 의존성: 없음
- 아바타 Rig: Unity Humanoid

## 설치

1. [Auto Morpher Booth 페이지](https://edenlabs.booth.pm/items/7721082)에서 파일을 내려받습니다.
2. 압축 파일을 해제하고 포함된 UnityPackage를 확인합니다.
3. 사용할 Unity 프로젝트를 엽니다.
4. UnityPackage를 더블 클릭하거나 Unity 메뉴에서 **Assets → Import Package → Custom Package**를 선택합니다.
5. 패키지의 항목을 모두 선택한 뒤 **Import**를 누릅니다.
6. 다음 경로에 Auto Morpher 파일이 생성되었는지 확인합니다.

```text
Assets/@Eden_Tools/Eden_AutoMorpher
```

## 3.0.7로 업데이트

기존 버전이 설치되어 있다면 별도의 제거 과정 없이 **새 UnityPackage를 기존 프로젝트에 덮어쓰기**로 가져옵니다. Import 창에서 새 패키지의 항목을 모두 선택해 주세요.

!!! warning "작업 전 백업"
    중요한 아바타 프로젝트는 패키지를 업데이트하기 전에 프로젝트 또는 작업 중인 Prefab을 백업하는 것을 권장합니다.

## 첫 작업 선택

- 빠르게 자동 대응하려면 [Auto Fitting Mode](../auto-fitting/)를 시작하세요.
- 자동 변형 후 본을 직접 조정하려면 [Manual Fitting Mode](../manual-fitting/)를 사용하세요.
- 기존 아바타의 BlendShape를 의상에 추가하려면 [BlendShape 생성](../blendshape-generator/)을 확인하세요.

문제가 발생하면 [Q&A 및 오류 해결](../faq/)을 확인하거나 [Eden Labs Discord](https://discord.com/invite/JFzDGrN2bF)의 Help 채널로 문의해 주세요.
