---
title: "그라데이션 만들기"
slug: "texture-studio-gradient"
category: "사용 가이드"
description: "UV 위에 선을 그어 의상과 헤어에 그라데이션을 적용합니다."
order: 47
version: "3.5.0"
parent: "texture-studio"
---

Mesh·UV 선택과 미리보기·저장 방법은 [Texture Studio 가이드](../texture-studio/)에서 확인할 수 있습니다.

## [1] 사용 방법

<img src="{{BASE_PATH}}/media/texture-studio/gradient-open-palette-figma-ko.webp" alt="① 그라데이션 탭을 선택하고 ② 바로 아래 가로 색상 막대를 클릭하면 Gradient Editor 팔레트 창이 열립니다" width="1440" height="650" loading="lazy" />

1. 적용할 Mesh와 UV 영역을 선택하고 <strong>그라데이션</strong> 탭을 엽니다.
2. 탭 바로 아래의 <strong>가로 색상 막대</strong>(②)를 눌러 <strong>Gradient Editor</strong>를 엽니다. 색상과 각 색상의 위치를 정하거나 프리셋을 선택합니다.
    - Preset 아래 New 버튼을 눌러서 현재 조정한 색상을 저장할 수 있습니다.
3. Gradient Editor를 닫고 <strong>UV에서 그리기</strong>를 누릅니다.
4. 오른쪽 UV 위에서 그리기 원하는 영역을 드래그 합니다.
5. Scene에서 확인한 뒤 <strong>그리기 종료</strong>를 누릅니다.

## [2] 의상과 헤어 예시

<strong>의상 예시 — 흰색·파랑·빨강의 세로 그라데이션</strong>

<img src="{{BASE_PATH}}/media/texture-studio/outfit-gradient.webp" alt="의상에 적용된 그라데이션과 UV의 시작점·끝점" width="1905" height="1065" loading="lazy" />

<strong>헤어 예시 — 흰색·노랑·분홍 그라데이션</strong>

<img src="{{BASE_PATH}}/media/texture-studio/hair-gradient.webp" alt="헤어 네 Mesh에 적용한 그라데이션과 UV 위의 방향선" width="1905" height="1065" loading="lazy" />

## [3] 확인할 점

그라데이션은 <strong>UV 위치</strong>를 기준으로 적용됩니다. 헤어의 뿌리와 끝이 UV에서 서로 다른 방향으로 배치되어 있으면 파츠마다 그라데이션 방향이 달라집니다. 원하는 부위의 Island만 선택해 나누어 작업해 주세요.

그리기 모드에서 다시 드래그하면 현재 선을 바꿀 수 있습니다. 종료 후 다시 그리면 기존 결과 위에 새 그라데이션이 적용됩니다. Esc 또는 우클릭은 진행 중인 드래그만 취소하므로, 완료한 작업은 <strong>실행 취소</strong>로 되돌립니다.
