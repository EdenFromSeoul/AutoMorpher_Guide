---
title: "색상 자동 조정"
slug: "texture-studio-auto-color"
category: "사용 가이드"
description: "다른 Mesh의 색상을 참조해 선택한 영역의 색상을 자동으로 맞춥니다."
order: 48
version: "3.5.0"
parent: "texture-studio"
---

Mesh·UV 선택과 미리보기·저장 방법은 [Texture Studio 가이드](../texture-studio/)에서 확인할 수 있습니다.

## [1] 기준점 선택과 자동 조정

<strong>① 변환 기준점</strong>은 색을 바꿀 Mesh의 점이고, <strong>② 변환 목표점</strong>은 원하는 색을 가져올 다른 Mesh(Target)의 점입니다. 

①의 색상을 ②에 맞춰 선택 영역을 조정합니다.

<img src="{{BASE_PATH}}/media/texture-studio/auto-color-points-figma-ko.webp" alt="파란색 ① 변환 기준점 선택: UV에서 선택 또는 Mesh에서 선택. 주황색 ② 변환 목표점 선택: Target Mesh에서 선택." width="1440" height="1000" loading="lazy" />

1. 조정할 Mesh와 UV 영역을 선택하고 <strong>색상 자동 조정</strong>을 엽니다.
2. <strong>1. 조정할 Mesh의 기준점</strong>에서 <strong>UV에서 선택</strong> 또는 <strong>Mesh에서 선택</strong>을 누릅니다. 
   1. UV 또는 Scene에서 색을 바꿀 부분의 점을 클릭합니다.
3. <strong>2. Target 기준점</strong>에서 <strong>Target Mesh에서 선택</strong>을 누르고 Scene의 다른 Mesh에서 원하는 색이 잘 보이는 점을 클릭합니다.
   1. 투명한 부분이나 무늬의 경계는 피합니다.
4. 표시된 기준 Mesh, UV 좌표와 <strong>목표 색상</strong>을 확인하고 조정 방식을 선택합니다.
5. <strong>자동 조정</strong>을 누릅니다. 완료 후 Scene과 결과 메시지를 확인합니다.

<img src="{{BASE_PATH}}/media/texture-studio/outfit-auto-points-annotated-figma-ko.webp" alt="파란색 ①은 의상 앞면의 변환 기준점, 주황색 ②는 소매의 변환 목표점. UV의 파란 원은 같은 기준점입니다." width="2001" height="1400" loading="lazy" />

## [2] 조정 방식

| 방식 | 적용 범위 |
| --- | --- |
| <strong>Texture만 조정</strong> | 선택한 UV의 Texture 색상을 조정하고 Material의 색·조명 설정은 유지합니다. |
| <strong>Material 설정도 맞춤</strong> | 참조 Material의 색·조명 설정도 함께 적용합니다. 같은 Shader 또는 lilToon 계열 간에 지원하며, Material 설정은 슬롯 전체에 영향을 줍니다. |

## [3] 조정 예시

두 예시 모두 소매의 색상을 참조합니다.

<strong>의상 예시 — Texture만 조정</strong>

<img src="{{BASE_PATH}}/media/texture-studio/outfit-auto-annotated-figma-ko.webp" alt="소매의 주황색 ②를 참조해 의상 앞면의 파란색 ①을 밝게 조정한 결과. 선택한 기준점과 목표점을 표시했습니다." width="2001" height="1400" loading="lazy" />

<strong>헤어 예시 — Material 설정도 맞춤</strong>

<img src="{{BASE_PATH}}/media/texture-studio/hair-auto-annotated-figma-ko.webp" alt="앞머리의 파란색 ①을 기준점으로, 소매의 주황색 ②를 목표점으로 지정해 헤어 네 Mesh를 자동 조정한 결과." width="2001" height="1400" loading="lazy" />

## [4] 결과 확인

Material 설정과 조명에 따라 Texture와 Scene의 색상이 다를 수 있으므로, 최종 결과는 Scene에서 확인합니다.
