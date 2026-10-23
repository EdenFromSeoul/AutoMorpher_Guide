---
title: "Kisetter API 사용 가이드"
slug: "api"
category: "참조"
description: "외부 Unity Editor 툴에서 Avatar·Profile 대응을 시작하고 결과를 받거나, Mesh Studio·Texture Studio를 여는 방법입니다."
order: 72
version: "Dev · 6c0de6a3"
---

<div class="guide-intro">
  <p><strong>외부 Editor 툴에서 Kisetter를 호출하는 개발자용 가이드입니다.</strong> 원본 아바타 또는 Profile로 의상 대응을 시작하고, 완료 결과를 받아 다음 작업으로 연결할 수 있습니다.</p>
  <p>API는 <strong>Unity Editor 메인 스레드의 Edit Mode</strong>에서 사용합니다. 호출하면 Kisetter 창이 열리며, 사전 조정·신체 Mesh 선택·진행 및 오류 안내는 기존 UI 흐름을 따릅니다.</p>
</div>

API가 포함된 Kisetter를 설치한 프로젝트에서 진행하세요. 아래 내용은 2026-10-22의 `Dev / 6c0de6a3` 소스와 통합 Sample을 기준으로 합니다. 입력 아바타와 의상 준비는 [의상 자동 대응 가이드](../auto-fitting/), Profile 설치는 [Profile 가이드](../profiles/)를 참고하세요.

## 1. 인스턴스와 Editor 코드 준비

공개 API는 **인스턴스 클래스**인 `Eden.Kisetter.API.KisetterApi`입니다. 다음 파일을 확인하세요.

| 파일 | 용도 |
| --- | --- |
| `Assets/@Eden_Tools/Kisetter/Editor/API/KisetterApi.cs` | 공개 API |
| 같은 폴더의 `KisetterAvatarOptions.cs`, `KisetterProfile.cs`, `KisetterRunResult.cs` | 옵션·Profile·실행 결과 타입 |
| `Assets/@Eden_Tools/Kisetter/API_Sample/Editor/KisetterApiSample.cs` | 모든 호출법을 모은 통합 예제 |
| `Assets/@Eden_Tools/Kisetter/API_Sample/README.md` | 통합 예제 설명 |

연동 스크립트를 프로젝트의 `Editor` 폴더에 두고 아래 namespace를 추가합니다. 자체 asmdef를 쓰는 외부 툴이라면 Editor 어셈블리에서 `Kisetter_Editor`를 참조하도록 구성하세요. Sample 전용 asmdef나 Dummy 파일은 필요하지 않습니다.

```csharp
using System.Collections.Generic;
using Eden.Kisetter.API;
using UnityEngine;
```

외부 Editor 클래스의 필드로 API 인스턴스를 만듭니다.

```csharp
private readonly KisetterApi api = new KisetterApi();
```

이 페이지의 메서드 예제는 해당 클래스 안에 넣고, 씬의 오브젝트를 매개변수로 전달하는 형태입니다. 코드 조각을 모두 연속 실행하지 말고 목적에 맞는 호출 하나를 선택하세요. 대응 예제의 `OnCompleted` 구현은 [실행 결과 처리](#5-실행-결과-처리)에 있습니다.

### 설치 확인 Sample 사용하기

설치 여부 확인은 공개 API의 메서드가 아니라, 통합 Sample의 `IsKisetterInstalled()`가 제공합니다. 아래 코드는 Editor 메서드 안에서 사용합니다.

```csharp
var sample = new Eden.Kisetter.Samples.KisetterApiSample();
if (!sample.IsKisetterInstalled())
    return;
```

이 함수는 현재 Editor 세션에서 Kisetter Editor 타입을 불러올 수 있는지 확인합니다. API별 지원 여부나 버전 호환성 검사는 아닙니다.

!!! info "미설치 프로젝트의 컴파일 구성"
    실행 시 설치 확인만으로는 Kisetter 타입을 직접 참조하는 코드의 컴파일 오류를 막을 수 없습니다. 미설치 시 연동 코드를 컴파일에서 제외하는 조건부 컴파일 또는 선택적 어셈블리 구성은 외부 툴에서 관리해야 합니다.

Sample의 래퍼는 미설치 시 API를 호출하지 않습니다. 실행 함수는 `false`, Profile 조회는 빈 배열, `TryGetCurrentAvatarOptions(out options)`는 `false`를 반환하며 이때의 `options`는 사용하면 안 됩니다. 이 경우 완료 콜백도 호출되지 않습니다. 아래 예제는 설치된 공개 API를 직접 호출합니다.

## 2. Avatar 모드로 대응 시작하기

씬의 **원본 Humanoid 아바타**, **그 아바타에 속한 의상**, **입힐 Humanoid 아바타**를 준비합니다. 입력 조건은 기존 Kisetter UI와 같습니다.

### 현재 설정으로 실행

```csharp
public bool FitAvatar(
    GameObject sourceAvatar,
    GameObject sourceClothes,
    GameObject targetAvatar)
{
    // Omitted options use the current, saved, or built-in settings.
    return api.RunKisetter_AvatarMode(
        sourceAvatar, sourceClothes, targetAvatar,
        onCompleted: OnCompleted);
}
```

`options`를 생략하거나 `null`로 전달하면 열린 창의 현재 설정을 사용합니다. 새 창을 열면 저장된 설정을 불러오고, 저장값이 없으면 Kisetter 기본값을 사용합니다.

### 일부 옵션을 바꾸어 실행

```csharp
public bool FitAvatarWithOptions(
    GameObject sourceAvatar,
    GameObject sourceClothes,
    GameObject targetAvatar)
{
    // Read a copy before changing individual settings.
    KisetterAvatarOptions options = api.GetCurrentAvatarOptions();
    options.BodyGap = 0.0025f; // Example value, not a required setting.

    return api.RunKisetter_AvatarMode(
        sourceAvatar, sourceClothes, targetAvatar,
        options: options,
        onCompleted: OnCompleted,
        CloseKisetterOnCompletion: true);
}
```

`GetCurrentAvatarOptions()`는 **Kisetter 창을 열고 현재 설정의 복사본**을 반환합니다. 복사본만 수정하면 창의 설정은 바뀌지 않습니다. 실행 함수에 전달해야 UI에 반영되고, 기존 Editor에서 저장하는 항목은 저장됩니다. A-pose 선택과 씬 Mesh 참조 등 기존 저장 대상이 아닌 값은 현재 창에서만 유지됩니다.

`new KisetterAvatarOptions()` 또는 `default`는 C# 기본값으로 채워진 구조체입니다. **Kisetter의 기본 설정을 불러오지 않으므로**, 일부 항목만 변경할 때는 위처럼 현재 옵션부터 가져오세요.

### 완료 후 창 닫기

`CloseKisetterOnCompletion`은 옵션 구조체 필드가 아닌 **실행 함수의 별도 매개변수**입니다.

| 값 | 동작 |
| --- | --- |
| 생략 또는 `false` | 완료 후 창 유지. 기본값입니다. |
| `true` | 성공했을 때 창을 닫은 다음 성공 콜백 호출 |

자동 닫기는 이번 호출에만 적용하며 저장되지 않습니다. 취소·실패·거절에는 자동 닫기가 실행되지 않습니다. 사용자가 직접 창을 닫아 취소한 경우에는 당연히 그 창이 닫힌 상태입니다. `UsePreAdjustment = false`로 설정해도 Kisetter 창은 열리고, 필요하면 신체 Mesh 선택 등 기존 UI가 표시됩니다.

## 3. Profile과 BlendShape 선택하기

Editor 메서드에서 다음과 같이 설치된 Profile을 조회합니다. **`GetProfileList()`는 창을 열지 않습니다.**

```csharp
KisetterProfile[] profiles = api.GetProfileList();
foreach (KisetterProfile profile in profiles)
{
    Debug.Log(profile.ProfileName + ": " + profile.BlendShapeCount);
    foreach (ProfileBlendShape shape in profile.BlendShapes)
        Debug.Log(shape.Id + " / " + shape.Name + " / " + shape.IsSelected);
}
```

| 항목 | 의미 |
| --- | --- |
| `KisetterProfile.ProfileName` | 설치된 Profile 이름 |
| `KisetterProfile.BlendShapes` | Profile에 저장된 `ProfileBlendShape[]`. 아바타의 모든 BlendShape 목록은 아닙니다. |
| `KisetterProfile.BlendShapeCount` | 선택 여부와 관계없는 전체 항목 수 |
| `ProfileBlendShape.Id` | 해당 Profile 안의 식별자. 조회한 값을 그대로 유지합니다. |
| `ProfileBlendShape.Name` | UI에 표시할 이름. 중복될 수 있습니다. |
| `ProfileBlendShape.IsSelected` | 적용할 저장 Snapshot의 선택 여부 |

`DisplayName` 필드는 없습니다. 조회할 때마다 독립적인 새 배열을 반환하며, `IsSelected`는 모두 `false`입니다. Profile이 없으면 빈 목록, 저장된 BlendShape가 없으면 빈 BlendShape 배열을 반환합니다. 읽지 못하는 Profile은 Console 경고와 함께 제외합니다.

외부 툴의 UI에서 `profiles` 목록 중 유효한 `selectedProfileIndex`를 고르고, 반환된 ID로 `ISet<string> selectedIds`를 구성했다고 가정하면 다음처럼 선택할 수 있습니다.

```csharp
// Use an index chosen and validated by your tool's UI.
KisetterProfile profile = profiles[selectedProfileIndex];

// Clone the array if another copy must keep independent selections.
profile.BlendShapes = (ProfileBlendShape[])profile.BlendShapes.Clone();

// selectedIds is an ISet<string> populated from the returned Id values.
for (int i = 0; i < profile.BlendShapeCount; i++)
    profile.BlendShapes[i].IsSelected =
        selectedIds.Contains(profile.BlendShapes[i].Id);
```

여기서 인덱스는 UI에서 고른 **Profile 목록 위치**일 뿐, BlendShape ID가 아닙니다. BlendShape는 **반환된 `Id`로 식별하고 `IsSelected`만 수정**하세요. 여러 항목을 선택할 수 있고, 선택은 저장 Snapshot을 적용할지 정하는 값입니다. 임의의 BlendShape 가중치를 전달하는 기능은 아닙니다.

- 선택이 없거나 `BlendShapes`가 `null`/빈 배열이면 기본 Profile을 사용하며, 이전 창의 BlendShape 선택을 이어받지 않습니다.
- 현재 창에 호환되는 Preset이 적용되어 있으면 **Preset의 BlendShape 설정이 우선**합니다.
- 존재하지 않는 Profile이나 선택 ID는 `Rejected` 결과를 받습니다.
- 실행 시 선택 정보를 복사하므로 이후 입력 배열을 수정해도 실행 중인 요청은 바뀌지 않습니다.
- `KisetterProfile` 구조체만 복사하면 배열은 공유됩니다. 별도 선택본이 필요할 때만 예제처럼 배열을 복제하세요.

## 4. Profile 모드로 대응 시작하기

`RunKisetter_ProfileMode`의 첫 인자는 Profile 이름 문자열이 아니라, 앞에서 조회하고 선택한 **`KisetterProfile` 구조체**입니다. 의상과 입힐 아바타는 씬의 오브젝트를 전달합니다.

### 현재 설정으로 실행

```csharp
public bool FitProfile(
    KisetterProfile profile,
    GameObject sourceClothes,
    GameObject targetAvatar)
{
    return api.RunKisetter_ProfileMode(
        profile, sourceClothes, targetAvatar,
        onCompleted: OnCompleted);
}
```

### 일부 옵션을 바꾸어 실행

```csharp
public bool FitProfileWithOptions(
    KisetterProfile profile,
    GameObject sourceClothes,
    GameObject targetAvatar)
{
    KisetterAvatarOptions options = api.GetCurrentAvatarOptions();
    options.BodyGap = 0.0025f; // Change only the settings you need.

    return api.RunKisetter_ProfileMode(
        profile, sourceClothes, targetAvatar,
        options: options,
        onCompleted: OnCompleted,
        CloseKisetterOnCompletion: false);
}
```

Avatar 모드와 같은 `KisetterAvatarOptions?`, `Action<KisetterRunResult>`, `CloseKisetterOnCompletion`을 사용합니다. 옵션 기본값은 `null`, 콜백 기본값은 `null`, 자동 닫기 기본값은 `false`입니다.

`SourceAvatarIsAPose`와 `SourceBodyMeshes`는 Profile이 원본 신체 데이터를 제공하므로 사용하지 않습니다. 입힐 아바타 쪽 옵션은 적용됩니다. 기존 Avatar 모드의 원본 오브젝트·포즈·신체 Mesh 입력은 이후 UI에서 다시 사용할 수 있도록 유지됩니다.

## 5. 실행 결과 처리

Avatar/Profile 실행 함수의 **`bool` 반환값은 시작 허용 여부**입니다. `true`만 보고 의상 대응이나 저장이 완료되었다고 처리하면 안 됩니다. 최종 결과는 `onCompleted: Action<KisetterRunResult>`로 받습니다.

```csharp
private void OnCompleted(KisetterRunResult result)
{
    // This can run before the start method returns.
    switch (result.Status)
    {
        case KisetterRunStatus.Succeeded:
            Debug.Log("Fitting completed.", result.TargetClothes);
            // Use result.TargetAvatar and result.TargetClothes here.
            break;
        case KisetterRunStatus.Canceled:
            Debug.Log("Fitting canceled: " + result.Message);
            break;
        case KisetterRunStatus.Failed:
            Debug.LogError(result.ErrorCode + " / " + result.Message);
            if (result.Exception != null)
                Debug.LogException(result.Exception);
            break;
        case KisetterRunStatus.Rejected:
            Debug.LogWarning(result.ErrorCode + " / " + result.Message);
            break;
    }
}
```

| `Status` | 의미와 처리 |
| --- | --- |
| `Succeeded` | 정상 완료. `TargetAvatar`와 `TargetClothes`를 후속 작업에 사용할 수 있습니다. |
| `Canceled` | 사전 조정 Stop, 창 닫기, Play Mode 진입 또는 어셈블리 재로드에 따른 중단입니다. |
| `Failed` | 시작 또는 처리 중 오류. `Message`, `ErrorCode`, 필요하면 `Exception`을 확인합니다. |
| `Rejected` | 입력이 유효하지 않거나 기존 작업이 진행 중이어서 시작하지 않았습니다. 조건을 해결한 뒤 다시 호출합니다. |

성공할 때만 결과 오브젝트가 제공됩니다. 나머지 상태의 `TargetAvatar`와 `TargetClothes`는 `null`입니다.

콜백을 전달한 요청은 Editor 메인 스레드에서 **요청당 한 번** 결과를 받습니다. 거절·시작 오류는 **실행 함수가 반환되기 전에** 콜백으로 올 수 있으므로, 외부 툴의 진행 상태와 콜백에서 쓸 값을 호출 전에 준비하세요. `false` 반환 뒤에 동일한 완료 처리를 한 번 더 실행하지 마세요. 어셈블리 재로드 뒤 작업은 재개되지 않으며, Unity 강제 종료 시 통지는 보장되지 않습니다.

!!! info "모든 취소 버튼이 Canceled를 반환하지는 않습니다"
    현재 신체 Mesh 선택 화면에서 취소하면 기존 오류 처리에 따라 <code>Failed / TEMP-KST-0112</code>가 전달됩니다. 사전 조정 Stop이나 실행 중 창 닫기의 <code>Canceled</code>와 구분해서 처리하세요.

## 6. Mesh Studio와 Texture Studio 열기

Studio 호출은 창을 열어 편집 대상을 할당합니다. **`true`는 대상 할당 성공**이며 편집·저장 완료가 아닙니다. 완료 콜백, 옵션 구조체, 자동 닫기 매개변수는 없습니다. 이후 편집과 저장은 사용자가 Studio에서 진행합니다.

### Mesh Studio

씬의 `GameObject rootObject`를 전달합니다. Kisetter 창에서 Mesh Studio 탭으로 전환하고 Root Object를 할당합니다.

```csharp
bool opened = api.RunMeshStudio(rootObject);
if (!opened)
    Debug.LogWarning("Mesh Studio could not open. Check the Console.");
```

### Texture Studio: Root Object에서 찾기

```csharp
bool opened = api.RunTextureStudio(rootObject);
```

비활성 자식을 포함해 Root 아래의 `SkinnedMeshRenderer`와 `MeshRenderer`를 찾습니다. `MeshRenderer`에는 Mesh가 있는 `MeshFilter`가 필요합니다. Mesh가 없거나 지원하지 않는 Renderer는 건너뛰며, 유효한 대상이 하나도 없으면 `false`입니다.

### Texture Studio: Renderer 목록 지정

씬의 `SkinnedMeshRenderer clothesSkinnedMeshRenderer`와 `MeshRenderer accessoryMeshRenderer`를 준비한 경우의 별도 호출 예제입니다.

```csharp
// Use scene components with meshes, not Mesh assets.
Renderer[] meshes = { clothesSkinnedMeshRenderer, accessoryMeshRenderer };
bool opened = api.RunTextureStudio(meshes);
```

이 오버로드는 `IReadOnlyList<Renderer>`를 받아 배열과 `List<Renderer>`를 모두 사용할 수 있습니다.

- 전달된 Renderer만 등록하며 자식은 탐색하지 않습니다.
- 중복 참조는 제거하고 첫 등장 순서를 유지합니다. **첫 항목이 Main Mesh**가 됩니다.
- 빈 목록, `null` 항목, 에셋, Mesh가 없는 항목 또는 지원하지 않는 Renderer가 있으면 전체 요청을 거절합니다. 기존 편집 대상은 유지됩니다.
- 같은 GameObject에 두 Renderer 종류가 있으면 `SkinnedMeshRenderer`를 사용합니다. 그 객체의 다른 Renderer를 명시하면 거절됩니다.
- 입력 목록을 복사하므로 호출 후 목록 수정이 현재 세션을 바꾸지 않습니다.

### 작업 중인 Studio 보호

편집 중인 조작이나 미저장 변경이 없는 Studio 탭은 필요한 탭으로 자동 전환됩니다. 진행 중인 대응, 미저장 편집, 열려 있는 Mesh Studio 저장·분리 창, Texture Studio 선택·그리기·드래그 작업은 보호합니다. 해당 작업을 마치거나 변경을 저장·취소한 뒤 다시 호출하세요.

Studio가 `false`를 반환하면 Console 안내를 확인합니다. Texture Studio는 설치된 Kisetter에서 해당 기능이 활성화되어 있어야 합니다. 현재 소스는 기존 `KisetterDev.isEarlyAccessMode` 조건을 따르며, API가 그 조건을 우회하지 않습니다.

## 7. 공통 옵션 참고

`GetCurrentAvatarOptions()`로 가져온 복사본에서 필요한 필드만 바꾸고 실행 함수의 `options`로 전달합니다. 아래는 공개 필드 목록입니다. 설정 개념은 [파라미터 설명](../parameters/)도 참고하세요.

### 입력과 사전 조정

| 필드 | 의미 |
| --- | --- |
| `SourceAvatarIsAPose` | 원본 아바타가 현재 A-pose인지 지정. Profile 모드에서는 미사용 |
| `TargetAvatarIsAPose` | 입힐 아바타가 현재 A-pose인지 지정 |
| `BodyGap` | 신체와 의상 사이 간격. UI의 신체 표면 간격에 대응 |
| `UsePreAdjustment` | 자동 대응 전 사전 조정 화면 사용 |
| `SkipFootFitting` | 발 자동 대응 건너뛰기 |
| `AutoAssignBodyMeshes` | 원본·입힐 아바타 신체 Mesh 자동 선택 |
| `SourceBodyMeshes` | 자동 선택을 끌 때 사용할 원본 `SkinnedMeshRenderer[]`. Profile 모드에서는 미사용 |
| `TargetBodyMeshes` | 수동으로 지정할 입힐 아바타 신체 Mesh 배열 |

신체 Mesh 배열의 `null`은 현재 선택 유지, 빈 배열은 선택 해제입니다. 전달한 아바타 밖의 Mesh는 제외하며, 선택된 신체 Mesh가 없으면 기존 선택 UI가 표시됩니다.

### 변형과 Mesh별 선택

| 필드 | 의미 |
| --- | --- |
| `MatchBodyShape` | 체형 차이에 맞추는 변형 사용 |
| `ClothMeshes` | `KisetterClothMeshOption[]`. `Mesh`와 `ApplyFitting`으로 의상 Mesh별 대응 여부 지정 |
| `SmoothingIntensity` | 스무딩 강도. UI처럼 0–1로 제한 |
| `SmoothingRadius` | 스무딩에 사용하는 주변 영역 반경 |
| `SmoothingIterations` | 스무딩 반복 횟수 |
| `FittingIterations` | 의상 대응 반복 횟수 |
| `BodyCorrelationIterations` | 신체 형태와의 대응 관계를 보정하는 반복 횟수 |

`ClothMeshes`는 현재 Source Clothes에 속한 Mesh만 변경합니다. 배열이 `null`이거나 항목이 생략되면 기존 선택을 유지하고, 새로 발견한 Mesh는 기본 선택됩니다. GameObject의 활성 상태를 바꾸지는 않습니다.

### 결과와 본 처리

| 필드 | 의미 |
| --- | --- |
| `RemovePreviouslyFittedClothes` | 기존 UI 규칙에 따라 이전 대응 의상 제거 |
| `ExportResultAsFbx` | 결과를 FBX로 내보내기 |
| `SaveResultAsBlendShape` | 대응 결과를 BlendShape로 저장 |
| `BlendShapeName` | 저장할 BlendShape 이름. 비어 있으면 기본 이름 사용 |
| `MergeClothesArmatureWithAvatar` | 의상 Armature를 아바타에 병합 |
| `PreserveClothesBoneRotation` | Armature를 병합하지 않을 때 의상 본 회전 유지 |

### 신체 Mesh와 제외할 의상 Mesh 지정 예시

씬의 `sourceBodyMesh`, `targetBodyMesh`, `clothesMesh`는 모두 `SkinnedMeshRenderer` 참조입니다. 아래처럼 복사본을 수정한 다음 Avatar 또는 Profile 실행 함수 하나에 전달합니다.

```csharp
KisetterAvatarOptions options = api.GetCurrentAvatarOptions();
options.AutoAssignBodyMeshes = false;
options.SourceBodyMeshes = new[] { sourceBodyMesh }; // Avatar mode only.
options.TargetBodyMeshes = new[] { targetBodyMesh };
options.ClothMeshes = new[]
{
    new KisetterClothMeshOption
    {
        Mesh = clothesMesh,
        ApplyFitting = false
    }
};
// Pass options to ONE Avatar-mode or Profile-mode call.
```

옵션 조회·적용 시 배열은 복사되지만 배열 안의 Unity 오브젝트는 같은 객체에 대한 참조입니다.

## 8. 실행되지 않을 때 확인할 내용

| 상황 | 확인할 내용 |
| --- | --- |
| 옵션/Profile 조회에서 예외 발생 | Edit Mode인지 확인합니다. 공개 조회 API는 Play Mode에서 `InvalidOperationException`을 던집니다. |
| `Rejected / EditModeRequired` | Play Mode를 종료한 뒤 Editor 메인 스레드에서 호출합니다. |
| `Rejected / EditorBusy` | 기존 대응, 튜토리얼, Preset 편집 또는 Studio 작업을 먼저 마칩니다. 기존 작업을 강제로 교체하지 않습니다. |
| Profile 또는 선택 ID 거절 | `GetProfileList()`로 다시 조회하고 해당 Profile이 반환한 ID를 사용합니다. |
| 신체 Mesh 선택 화면 표시 | 수동 선택을 완료하거나 유효한 신체 Mesh 배열을 전달합니다. |
| `Failed` | `ErrorCode`, `Message`, `Exception`과 기존 오류창을 확인합니다. 데이터 문제와 호출 문제를 구분합니다. |
| Studio가 `false` 반환 | Console에서 입력, 기능 활성화, 미저장 편집 또는 진행 중 작업 안내를 확인합니다. |

<details class="doc-optional-step">
<summary>확인된 실행 범위와 남아 있는 검증</summary>

2026-10-22의 Unity **6000.2.6f2** 검증 기록에서 Avatar 및 기본 Profile 대응, Mesh 저장, 콜백·취소·거절, Studio 전환과 실제 Texture 편집 보호를 확인했습니다.

UI와 API의 수치적 동일성은 확인되지 않았습니다. 해당 환경에서 최대 World 정점 차이는 UI/API 약 **29.06 mm**, UI 반복 약 **35.08 mm**였습니다. 이를 API로 인한 차이라고 단정하거나 동일한 결과를 보장할 근거로 사용하지 않습니다.

검증에 사용한 Shinano의 `Body_base::Toe_heels` Snapshot은 Torso Grid 데이터 불일치로 기존 UI와 API 양쪽에서 실패했습니다. 선택 없는 기본 Profile은 성공했지만, 모든 Profile·BlendShape·Preset 조합이 검증된 것은 아닙니다. 이 사례가 모든 Profile의 사용 제한을 뜻하지는 않습니다.

Unity 2022, 실행 중 Play Mode/어셈블리 재로드 전환, FBX 내보내기 등은 이 실행 검증 범위에 포함되지 않았습니다. 위의 호출 계약은 확인한 소스 기준이며, 개별 조합의 결과는 프로젝트에서 확인하세요.

<button type="button" class="doc-details-close" data-details-close>검증 범위 닫기</button>
</details>

