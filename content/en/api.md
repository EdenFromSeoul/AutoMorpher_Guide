---
title: "Kisetter API Guide"
slug: "api"
category: "Reference"
description: "Start Avatar or Profile fitting from an external Unity Editor tool, handle the result, or open Mesh Studio and Texture Studio."
order: 72
version: "Dev · 6c0de6a3"
---

<div class="guide-intro">
  <p><strong>A developer guide to calling Kisetter from external Editor tools.</strong> Start outfit fitting with a source avatar or Profile, then use the completion result in your next operation.</p>
  <p>Call the API on the <strong>Unity Editor main thread in Edit Mode</strong>. Calls open the Kisetter window; pre-adjustment, body mesh selection, progress, and error dialogs follow the existing UI workflow.</p>
</div>

Use a project with an API-enabled Kisetter installation. This guide is based on the 2026-10-22 `Dev / 6c0de6a3` source and consolidated sample. See the [Automatic Outfit Fitting Guide](../auto-fitting/) for scene inputs and the [Profile guide](../profiles/) for Profile installation.

## 1. Prepare your Editor code and instance

The public API, `Eden.Kisetter.API.KisetterApi`, is an **instance class**. Locate these files:

| File | Purpose |
| --- | --- |
| `Assets/@Eden_Tools/Kisetter/Editor/API/KisetterApi.cs` | Public API |
| `KisetterAvatarOptions.cs`, `KisetterProfile.cs`, `KisetterRunResult.cs` in the same folder | Options, Profile, and result types |
| `Assets/@Eden_Tools/Kisetter/API_Sample/Editor/KisetterApiSample.cs` | Consolidated examples of all calls |
| `Assets/@Eden_Tools/Kisetter/API_Sample/README.md` | Sample documentation |

Put integration scripts in an `Editor` folder and add these namespaces. If your tool uses its own asmdef, configure its Editor assembly to reference `Kisetter_Editor`. No sample-specific asmdef or Dummy file is required.

```csharp
using System.Collections.Generic;
using Eden.Kisetter.API;
using UnityEngine;
```

Create an API instance as a field of your external Editor class.

```csharp
private readonly KisetterApi api = new KisetterApi();
```

Place the method examples below inside that class and pass scene objects as arguments. Choose the call you need; these examples are alternatives, not operations to start together. The `OnCompleted` handler used by fitting examples is in [Handle the final result](#5-handle-the-final-result).

### Use the installation-check sample

`IsKisetterInstalled()` belongs to the consolidated sample, not the public API. Use this snippet inside an Editor method.

```csharp
var sample = new Eden.Kisetter.Samples.KisetterApiSample();
if (!sample.IsKisetterInstalled())
    return;
```

It checks whether the Kisetter Editor type can be loaded in the current Editor session. It does not check support for individual APIs or version compatibility.

!!! info "Compiling without Kisetter installed"
    A runtime installation check cannot prevent compilation errors in code that directly references missing Kisetter types. Your external tool must manage conditional compilation or optional assembly configuration to exclude the integration when Kisetter is absent.

When installation is missing, sample wrappers do not call the API. Run methods return `false`, Profile queries return an empty array, and `TryGetCurrentAvatarOptions(out options)` returns `false`; do not use that output value. No completion callback runs in this case. The following examples call the installed public API directly.

## 2. Start fitting in Avatar mode

Prepare the **source Humanoid avatar**, **an outfit belonging to that avatar**, and **target Humanoid avatar** in the scene. Input requirements match the existing Kisetter UI.

### Use the current settings

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

Omitting `options` or passing `null` uses the open window's current settings. A newly opened window loads saved settings, falling back to Kisetter's built-in defaults when no saved settings exist.

### Change individual options

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

`GetCurrentAvatarOptions()` **opens Kisetter and returns a copy of the current settings**. Editing this copy alone does not change the window. Passing it to a run method applies it to the UI and saves settings normally persisted by the Editor. A-pose choices and scene mesh references that are not normally persisted remain in the current window only.

`new KisetterAvatarOptions()` and `default` create a struct containing C# default values. They **do not load Kisetter defaults**. Read the current options first when changing only some settings.

### Close the window after completion

`CloseKisetterOnCompletion` is a **separate run-method parameter**, not a field in the options struct.

| Value | Behavior |
| --- | --- |
| Omitted or `false` | Keeps the window open. This is the default. |
| `true` | Closes the window after success, then invokes the success callback. |

Automatic closing applies only to that call and is not saved. Cancellation, failure, or rejection does not trigger automatic closing. If the user cancels by closing the window manually, that window is already closed. Even with `UsePreAdjustment = false`, Kisetter opens and may show existing UI such as body mesh selection.

## 3. Select a Profile and saved BlendShapes

Query installed Profiles inside an Editor method. **`GetProfileList()` does not open the window.**

```csharp
KisetterProfile[] profiles = api.GetProfileList();
foreach (KisetterProfile profile in profiles)
{
    Debug.Log(profile.ProfileName + ": " + profile.BlendShapeCount);
    foreach (ProfileBlendShape shape in profile.BlendShapes)
        Debug.Log(shape.Id + " / " + shape.Name + " / " + shape.IsSelected);
}
```

| Member | Meaning |
| --- | --- |
| `KisetterProfile.ProfileName` | Installed Profile name |
| `KisetterProfile.BlendShapes` | Saved `ProfileBlendShape[]` entries, not every BlendShape on the original avatar |
| `KisetterProfile.BlendShapeCount` | Total entry count, including unselected entries |
| `ProfileBlendShape.Id` | Identifier within this Profile; retain the returned value |
| `ProfileBlendShape.Name` | Display name; duplicates are possible |
| `ProfileBlendShape.IsSelected` | Whether to apply this saved snapshot |

There is no `DisplayName` field. Every query returns independent new arrays with all `IsSelected` values set to `false`. No installed Profiles produces an empty list; Profiles without saved BlendShapes have empty BlendShape arrays. Unreadable Profiles are skipped with Console warnings.

Assume your tool's UI has chosen a valid `selectedProfileIndex` from `profiles` and populated `ISet<string> selectedIds` with returned IDs:

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

The index selects a **Profile in the displayed list**; it is not a BlendShape ID. Identify BlendShapes by their **returned `Id` and change only `IsSelected`**. Multiple entries can be selected. These flags select saved snapshots; they do not supply arbitrary BlendShape weights.

- No selections, or a `null`/empty `BlendShapes` array, uses the base Profile without inheriting previous window selections.
- If a compatible Preset is assigned in the window, **its BlendShape settings take precedence**.
- Missing Profiles or unknown selected IDs produce `Rejected`.
- Selections are copied at execution time; later input-array edits do not change an ongoing run.
- Copying the `KisetterProfile` struct alone shares its array. Clone it as shown when you need independent selections.

## 4. Start fitting in Profile mode

The first argument to `RunKisetter_ProfileMode` is the **`KisetterProfile` struct** you queried and selected, not a Profile name string. Pass scene objects for the outfit and target avatar.

### Use the current settings

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

### Change individual options

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

Both modes use the same `KisetterAvatarOptions?`, `Action<KisetterRunResult>`, and `CloseKisetterOnCompletion` parameters. Their defaults are `null`, `null`, and `false`, respectively.

`SourceAvatarIsAPose` and `SourceBodyMeshes` are unused because the Profile supplies source body data. Target-side options still apply. Existing Avatar-mode source object, pose, and body mesh inputs are retained for later use in the UI.

## 5. Handle the final result

The **`bool` return value tells you whether an Avatar/Profile run started**. A `true` value does not mean fitting or saving has finished. Receive the final result through `onCompleted: Action<KisetterRunResult>`.

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

| `Status` | Meaning and next action |
| --- | --- |
| `Succeeded` | Completed successfully. Use `TargetAvatar` and `TargetClothes` in your next operation. |
| `Canceled` | Interrupted by pre-adjustment Stop, window closing, entering Play Mode, or assembly reload. |
| `Failed` | A startup or processing error. Inspect `Message`, `ErrorCode`, and, when available, `Exception`. |
| `Rejected` | Did not start because inputs were invalid or an existing operation was active. Resolve the condition before retrying. |

Output objects are provided only on success. For other statuses, `TargetAvatar` and `TargetClothes` are `null`.

When a callback is supplied, the API reports the result **once per request on the Editor main thread**. Rejection and startup errors may call it **before the run method returns**. Initialize your tool's progress state and callback inputs before calling the API. Do not repeat completion handling after a `false` return. Runs do not resume after assembly reload; forced Unity process termination cannot guarantee notification.

!!! info "Not every Cancel button reports Canceled"
    Canceling the current body mesh selection UI follows the existing error path and reports <code>Failed / TEMP-KST-0112</code>. Handle this separately from pre-adjustment Stop or window closing, which report <code>Canceled</code>.

## 6. Open Mesh Studio and Texture Studio

Studio calls open the window and assign editing targets. **`true` means target assignment succeeded**, not that editing or saving finished. There are no completion callbacks, options structs, or automatic-close parameters. Users continue editing and saving in the Studio UI.

### Mesh Studio

Pass a scene `GameObject rootObject`. Kisetter switches to Mesh Studio and assigns the Root Object.

```csharp
bool opened = api.RunMeshStudio(rootObject);
if (!opened)
    Debug.LogWarning("Mesh Studio could not open. Check the Console.");
```

### Texture Studio: discover from a Root Object

```csharp
bool opened = api.RunTextureStudio(rootObject);
```

This scans the root and its children, including inactive objects, for `SkinnedMeshRenderer` and `MeshRenderer`. A `MeshRenderer` needs a `MeshFilter` with a mesh. Renderers without meshes and unsupported types are skipped. No valid targets returns `false`.

### Texture Studio: supply a Renderer list

This alternative assumes scene components named `SkinnedMeshRenderer clothesSkinnedMeshRenderer` and `MeshRenderer accessoryMeshRenderer`.

```csharp
// Use scene components with meshes, not Mesh assets.
Renderer[] meshes = { clothesSkinnedMeshRenderer, accessoryMeshRenderer };
bool opened = api.RunTextureStudio(meshes);
```

The overload accepts `IReadOnlyList<Renderer>`, so arrays and `List<Renderer>` both work.

- Registers only the supplied Renderers, without scanning children.
- Removes duplicate references while retaining first-occurrence order. **The first entry becomes the Main Mesh.**
- An empty list, null entry, asset, missing mesh, or unsupported Renderer rejects the whole request and preserves the current targets.
- If a GameObject has both Renderer types, Texture Studio uses its `SkinnedMeshRenderer`. Explicitly supplying the other Renderer is rejected.
- The list is copied; later edits to the original list do not change the session.

### Protect active Studio work

Idle Studio tabs switch automatically when there are no active interactions or unsaved changes. Running fitting, unsaved edits, open Mesh Studio save/separate windows, and Texture Studio picking, drawing, or dragging are protected. Finish the operation or save/discard changes before retrying.

If a Studio call returns `false`, check the Console. Texture Studio must be enabled in the installed Kisetter. The current source follows the existing `KisetterDev.isEarlyAccessMode` availability condition; the API does not bypass it.

## 7. Shared options reference

Read a copy with `GetCurrentAvatarOptions()`, modify only the fields you need, and pass it as `options`. All public fields are listed below. See [Parameter Description](../parameters/) for the underlying settings.

### Inputs and pre-adjustment

| Field | Meaning |
| --- | --- |
| `SourceAvatarIsAPose` | Whether the source avatar is currently in an A-pose; unused in Profile mode |
| `TargetAvatarIsAPose` | Whether the target avatar is currently in an A-pose |
| `BodyGap` | Gap between the body and clothing; corresponds to Body Gap in the UI |
| `UsePreAdjustment` | Enables pre-adjustment before automatic fitting |
| `SkipFootFitting` | Skips automatic foot fitting |
| `AutoAssignBodyMeshes` | Automatically selects source and target body meshes |
| `SourceBodyMeshes` | Source `SkinnedMeshRenderer[]` for manual selection; unused in Profile mode |
| `TargetBodyMeshes` | Manually selected target body mesh array |

For body mesh arrays, `null` retains the current selection and an empty array clears it. Meshes outside the supplied avatar are ignored. When no body meshes are selected, the existing selection UI appears.

### Deformation and per-mesh selections

| Field | Meaning |
| --- | --- |
| `MatchBodyShape` | Enables deformation to match the body shape |
| `ClothMeshes` | `KisetterClothMeshOption[]`; each entry specifies `Mesh` and `ApplyFitting` |
| `SmoothingIntensity` | Smoothing strength, clamped to 0–1 as in the UI |
| `SmoothingRadius` | Radius of the surrounding region used for smoothing |
| `SmoothingIterations` | Number of smoothing iterations |
| `FittingIterations` | Number of clothing fitting iterations |
| `BodyCorrelationIterations` | Iterations to refine correspondence with the body shape |

`ClothMeshes` affects only meshes belonging to the current Source Clothes. A `null` array or omitted entries retains existing selections; newly discovered meshes start selected. It does not change GameObject active states.

### Results and bones

| Field | Meaning |
| --- | --- |
| `RemovePreviouslyFittedClothes` | Removes previously fitted clothing using the existing UI rules |
| `ExportResultAsFbx` | Exports the result as FBX |
| `SaveResultAsBlendShape` | Saves the fitting result as a BlendShape |
| `BlendShapeName` | Name of the saved BlendShape; blank uses the default |
| `MergeClothesArmatureWithAvatar` | Merges the clothing armature into the avatar |
| `PreserveClothesBoneRotation` | Preserves clothing bone rotations when the armature is not merged |

### Assign body meshes and exclude a clothing mesh

The scene references `sourceBodyMesh`, `targetBodyMesh`, and `clothesMesh` below are all `SkinnedMeshRenderer` components. Modify the copy, then pass it to one Avatar-mode or Profile-mode call.

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

Arrays are copied when options are read or applied; the Unity objects inside them remain references to the same objects.

## 8. When a call does not proceed

| Situation | What to check |
| --- | --- |
| Options/Profile query throws | Confirm Edit Mode. Public query APIs throw `InvalidOperationException` in Play Mode. |
| `Rejected / EditModeRequired` | Exit Play Mode and call on the Editor main thread. |
| `Rejected / EditorBusy` | Finish existing fitting, tutorials, Preset editing, or Studio work. The API does not replace active work. |
| Profile or selected ID rejected | Query `GetProfileList()` again and use IDs returned for that Profile. |
| Body mesh selection UI appears | Complete the selection or supply valid body mesh arrays. |
| `Failed` | Inspect `ErrorCode`, `Message`, `Exception`, and the error dialog. Distinguish data issues from call issues. |
| Studio returns `false` | Check the Console for input, availability, unsaved-edit, or ongoing-operation details. |

<details class="doc-optional-step">
<summary>Verified execution scope and remaining checks</summary>

The 2026-10-22 verification record for Unity **6000.2.6f2** confirms Avatar and base Profile fitting, mesh saving, callbacks/cancellation/rejection, Studio transitions, and protection of actual Texture edits within the tested scenarios.

Numerical equality between UI and API results was not confirmed. In that environment, maximum world-space vertex differences were approximately **29.06 mm** for UI/API and **35.08 mm** for repeated UI runs. These measurements neither establish an API-specific cause nor guarantee identical results.

The tested Shinano `Body_base::Toe_heels` snapshot failed in both the existing UI and API because of mismatched Torso Grid data. The base Profile without selections succeeded, but not every Profile, BlendShape, or Preset combination has been verified. This case is not a restriction on all Profiles.

Unity 2022, Play Mode/assembly reload transitions during execution, and FBX export were outside that execution test scope. The contracts above follow the inspected source; verify your own project combinations.

<button type="button" class="doc-details-close" data-details-close>Close verification details</button>
</details>

