---
title: "Kisetter API使用ガイド"
slug: "api"
category: "リファレンス"
description: "外部のUnity EditorツールからAvatar・Profileモードの対応を開始して結果を受け取る方法と、Mesh Studio・Texture Studioの開き方を説明します。"
order: 72
version: "Dev · 6c0de6a3"
---

<div class="guide-intro">
  <p><strong>外部EditorツールからKisetterを呼び出す開発者向けガイドです。</strong> 元のアバターまたはProfileを使って衣装対応を開始し、完了結果を次の処理に渡せます。</p>
  <p>APIは<strong>Unity Editorのメインスレッド、Edit Mode</strong>で使用します。呼び出すとKisetterウィンドウが開き、事前調整・身体Mesh選択・進行状況・エラー案内は既存UIの処理に従います。</p>
</div>

APIを含むKisetterがインストールされたプロジェクトで進めてください。本ガイドは2026-10-22の`Dev / 6c0de6a3`ソースと統合Sampleに基づきます。入力の準備は[衣装自動対応ガイド](../auto-fitting/)、Profileのインストールは[Profileガイド](../profiles/)を参照してください。

## 1. Editorコードとインスタンスの準備

公開APIの`Eden.Kisetter.API.KisetterApi`は<strong>インスタンスクラス</strong>です。以下のファイルを確認してください。

| ファイル | 用途 |
| --- | --- |
| `Assets/@Eden_Tools/Kisetter/Editor/API/KisetterApi.cs` | 公開API |
| 同じフォルダーの`KisetterAvatarOptions.cs`、`KisetterProfile.cs`、`KisetterRunResult.cs` | オプション・Profile・実行結果の型 |
| `Assets/@Eden_Tools/Kisetter/API_Sample/Editor/KisetterApiSample.cs` | すべての呼び出しをまとめた統合例 |
| `Assets/@Eden_Tools/Kisetter/API_Sample/README.md` | Sampleの説明 |

連携スクリプトをプロジェクトの`Editor`フォルダーに置き、次のnamespaceを追加します。独自のasmdefを使う外部ツールでは、Editorアセンブリから`Kisetter_Editor`を参照するように構成してください。Sample専用asmdefやDummyファイルは不要です。

```csharp
using System.Collections.Generic;
using Eden.Kisetter.API;
using UnityEngine;
```

外部EditorクラスのフィールドとしてAPIインスタンスを作成します。

```csharp
private readonly KisetterApi api = new KisetterApi();
```

以下のメソッド例は、このクラス内に配置してシーンのオブジェクトを引数で渡す形です。例をすべて続けて実行せず、目的に合う呼び出しを一つ選んでください。対応例で使う`OnCompleted`は[実行結果を処理する](#5-実行結果を処理する)で定義します。

### インストール確認Sampleを使う

`IsKisetterInstalled()`は公開APIのメソッドではなく、統合Sampleが提供します。次のコードはEditorメソッド内で使用します。

```csharp
var sample = new Eden.Kisetter.Samples.KisetterApiSample();
if (!sample.IsKisetterInstalled())
    return;
```

現在のEditorセッションでKisetter Editorの型を読み込めるか確認します。個々のAPIへの対応やバージョン互換性を検査するものではありません。

!!! info "Kisetter未インストール時のコンパイル構成"
    実行時のインストール確認だけでは、存在しないKisetter型を直接参照するコードのコンパイルエラーを防げません。未インストール時に連携コードを除外する条件付きコンパイルや任意のアセンブリ構成は、外部ツール側で管理してください。

未インストール時、SampleのラッパーはAPIを呼び出しません。実行関数は`false`、Profile取得は空の配列、`TryGetCurrentAvatarOptions(out options)`は`false`を返します。この場合の`options`は使わず、完了コールバックも呼ばれません。以下の例は、インストール済みの公開APIを直接呼び出します。

## 2. Avatarモードで対応を開始する

シーン内の<strong>変換元Humanoidアバター、そのアバターに属する衣装、変換先Humanoidアバター</strong>を準備します。入力条件は既存のKisetter UIと同じです。

### 現在の設定で実行する

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

`options`を省略するか`null`を渡すと、開いているウィンドウの現在の設定を使用します。新しく開く場合は保存済み設定を読み込み、保存値がなければKisetterの初期値を使用します。

### 一部のオプションを変更して実行する

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

`GetCurrentAvatarOptions()`は<strong>Kisetterウィンドウを開き、現在の設定のコピーを返します</strong>。コピーを編集するだけではウィンドウの設定は変わりません。実行関数に渡すとUIに反映され、既存Editorの保存対象となる設定は保存されます。A-pose選択やシーンのMesh参照など、通常は保存されない値は現在のウィンドウ内だけで保持されます。

`new KisetterAvatarOptions()`や`default`はC#の既定値で構成された構造体です。<strong>Kisetterの初期設定は読み込みません</strong>。一部だけ変更する場合は、先に現在の設定を取得してください。

### 完了後にウィンドウを閉じる

`CloseKisetterOnCompletion`はオプション構造体のフィールドではなく、<strong>実行関数の独立した引数</strong>です。

| 値 | 動作 |
| --- | --- |
| 省略または`false` | 完了後もウィンドウを保持。既定値です。 |
| `true` | 成功後にウィンドウを閉じてから成功コールバックを呼び出します。 |

自動終了は今回の呼び出しだけに適用され、保存されません。キャンセル・失敗・拒否では自動終了しません。ユーザーが手動でウィンドウを閉じてキャンセルした場合、そのウィンドウは閉じた状態です。`UsePreAdjustment = false`でもKisetterウィンドウは開き、必要に応じて身体Mesh選択などの既存UIが表示されます。

## 3. ProfileとBlendShapeを選択する

Editorメソッド内でインストール済みProfileを取得します。<strong>`GetProfileList()`はウィンドウを開きません。</strong>

```csharp
KisetterProfile[] profiles = api.GetProfileList();
foreach (KisetterProfile profile in profiles)
{
    Debug.Log(profile.ProfileName + ": " + profile.BlendShapeCount);
    foreach (ProfileBlendShape shape in profile.BlendShapes)
        Debug.Log(shape.Id + " / " + shape.Name + " / " + shape.IsSelected);
}
```

| メンバー | 意味 |
| --- | --- |
| `KisetterProfile.ProfileName` | インストール済みProfile名 |
| `KisetterProfile.BlendShapes` | Profileに保存された`ProfileBlendShape[]`。元アバターの全BlendShapeではありません。 |
| `KisetterProfile.BlendShapeCount` | 未選択項目も含む全項目数 |
| `ProfileBlendShape.Id` | Profile内の識別子。取得した値を維持します。 |
| `ProfileBlendShape.Name` | 表示用の名前。重複する場合があります。 |
| `ProfileBlendShape.IsSelected` | 保存済みSnapshotを適用するかどうか |

`DisplayName`フィールドはありません。取得のたびに独立した新しい配列を返し、`IsSelected`はすべて`false`です。Profileがなければ空の一覧、保存済みBlendShapeがなければ空のBlendShape配列を返します。読み取れないProfileはConsoleの警告とともに除外します。

外部ツールのUIで`profiles`から有効な`selectedProfileIndex`を選び、返されたIDで`ISet<string> selectedIds`を構成した場合の例です。

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

ここでのインデックスはUIで選んだ<strong>Profile一覧の位置</strong>であり、BlendShapeのIDではありません。BlendShapeは<strong>返されたIdで識別し、IsSelectedだけを変更</strong>してください。複数項目を選択できます。選択フラグは保存Snapshotの適用を指定するもので、任意のBlendShapeウェイトを渡す機能ではありません。

- 選択なし、または`BlendShapes`が`null`・空配列の場合は基本Profileを使用し、以前のウィンドウの選択を引き継ぎません。
- ウィンドウに互換性のあるPresetが設定されている場合は、<strong>PresetのBlendShape設定を優先</strong>します。
- 存在しないProfileや選択IDは`Rejected`になります。
- 実行時に選択情報をコピーするため、その後に入力配列を変更しても実行中の要求には影響しません。
- `KisetterProfile`構造体だけをコピーすると配列は共有されます。独立した選択を保持する必要がある場合に、例のように配列を複製してください。

## 4. Profileモードで対応を開始する

`RunKisetter_ProfileMode`の最初の引数は名前文字列ではなく、取得して選択した<strong>`KisetterProfile`構造体</strong>です。衣装と変換先アバターにはシーンのオブジェクトを渡します。

### 現在の設定で実行する

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

### 一部のオプションを変更して実行する

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

Avatarモードと同じ`KisetterAvatarOptions?`、`Action<KisetterRunResult>`、`CloseKisetterOnCompletion`を使います。既定値はそれぞれ`null`、`null`、`false`です。

Profileが元の身体データを提供するため、`SourceAvatarIsAPose`と`SourceBodyMeshes`は使用しません。変換先側のオプションは適用されます。Avatarモードの元オブジェクト・ポーズ・身体Mesh入力は、後でUIから再利用できるよう保持されます。

## 5. 実行結果を処理する

Avatar/Profile実行関数の<strong>bool戻り値は開始できたかどうか</strong>を示します。`true`だけで対応や保存が完了したと判断しないでください。最終結果は`onCompleted: Action<KisetterRunResult>`で受け取ります。

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

| `Status` | 意味と処理 |
| --- | --- |
| `Succeeded` | 正常完了。`TargetAvatar`と`TargetClothes`を後続処理に使用できます。 |
| `Canceled` | 事前調整のStop、ウィンドウを閉じる操作、Play Mode移行、アセンブリ再ロードによる中断 |
| `Failed` | 開始時または処理中のエラー。`Message`、`ErrorCode`、必要に応じて`Exception`を確認します。 |
| `Rejected` | 入力が無効、または既存の処理が進行中のため開始しませんでした。条件を解消してから再度呼び出します。 |

結果オブジェクトは成功時だけ提供されます。それ以外の`TargetAvatar`と`TargetClothes`は`null`です。

コールバックを渡した要求は、Editorメインスレッドで<strong>要求ごとに1回</strong>結果を受け取ります。拒否や開始エラーでは、<strong>実行関数が戻る前</strong>に呼ばれることがあります。外部ツールの進行状態やコールバックで使う値は呼び出し前に準備し、`false`が返った後に同じ完了処理を重複実行しないでください。アセンブリ再ロード後に処理は再開されず、Unityの強制終了時は通知を保証できません。

!!! info "すべてのキャンセルがCanceledになるわけではありません"
    現在の身体Mesh選択画面をキャンセルすると、既存のエラー処理に従って<code>Failed / TEMP-KST-0112</code>が返ります。事前調整のStopやウィンドウを閉じた場合の<code>Canceled</code>と区別してください。

## 6. Mesh StudioとTexture Studioを開く

Studioの呼び出しはウィンドウを開いて編集対象を割り当てます。<strong>trueは対象割り当ての成功</strong>を表し、編集・保存完了ではありません。完了コールバック、オプション構造体、自動終了の引数はありません。その後の編集と保存はユーザーがStudio上で行います。

### Mesh Studio

シーンの`GameObject rootObject`を渡します。KisetterウィンドウがMesh Studioタブに切り替わり、Root Objectが割り当てられます。

```csharp
bool opened = api.RunMeshStudio(rootObject);
if (!opened)
    Debug.LogWarning("Mesh Studio could not open. Check the Console.");
```

### Texture Studio：Root Objectから検索する

```csharp
bool opened = api.RunTextureStudio(rootObject);
```

非アクティブな子も含めてRoot以下の`SkinnedMeshRenderer`と`MeshRenderer`を検索します。`MeshRenderer`にはMeshが設定された`MeshFilter`が必要です。MeshのないRendererや非対応の種類は除外され、有効な対象が一つもなければ`false`を返します。

### Texture Studio：Renderer一覧を渡す

シーン内の`SkinnedMeshRenderer clothesSkinnedMeshRenderer`と`MeshRenderer accessoryMeshRenderer`を用意した場合の、別の呼び出し例です。

```csharp
// Use scene components with meshes, not Mesh assets.
Renderer[] meshes = { clothesSkinnedMeshRenderer, accessoryMeshRenderer };
bool opened = api.RunTextureStudio(meshes);
```

このオーバーロードは`IReadOnlyList<Renderer>`を受け取り、配列と`List<Renderer>`の両方を使用できます。

- 指定したRendererだけを登録し、子は検索しません。
- 重複参照を除き、最初に出現した順序を維持します。<strong>先頭の項目がMain Mesh</strong>になります。
- 空一覧、`null`項目、アセット、Meshなし、非対応Rendererのいずれかがあると要求全体を拒否し、既存の編集対象を維持します。
- 同じGameObjectに両方のRendererがある場合は`SkinnedMeshRenderer`を使用します。そのオブジェクトの別のRendererを明示すると拒否されます。
- 入力一覧をコピーするため、呼び出し後に元の一覧を変えても現在のセッションは変わりません。

### 進行中のStudio作業を保護する

操作中でも未保存の変更がある状態でもなければ、Studioタブは必要なタブに自動で切り替わります。実行中の対応、未保存編集、開いているMesh Studioの保存・分離ウィンドウ、Texture Studioの選択・描画・ドラッグは保護されます。作業を終えるか変更を保存・破棄してから再度呼び出してください。

Studioが`false`を返した場合はConsoleを確認します。Texture Studioはインストール済みKisetterで有効になっている必要があります。現在のソースは既存の`KisetterDev.isEarlyAccessMode`条件に従い、APIがこの条件を迂回することはありません。

## 7. 共通オプション一覧

`GetCurrentAvatarOptions()`で取得したコピーの必要なフィールドだけを変更し、実行関数の`options`に渡します。以下は公開フィールドの一覧です。設定の基本概念は[パラメータの説明](../parameters/)も参照してください。

### 入力と事前調整

| フィールド | 意味 |
| --- | --- |
| `SourceAvatarIsAPose` | 元アバターが現在A-poseかどうか。Profileモードでは未使用 |
| `TargetAvatarIsAPose` | 変換先アバターが現在A-poseかどうか |
| `BodyGap` | 身体と衣装の間隔。UIの身体表面間隔に対応 |
| `UsePreAdjustment` | 自動対応前に事前調整画面を使用 |
| `SkipFootFitting` | 足の自動対応をスキップ |
| `AutoAssignBodyMeshes` | 元・変換先アバターの身体Meshを自動選択 |
| `SourceBodyMeshes` | 手動選択用の元の`SkinnedMeshRenderer[]`。Profileモードでは未使用 |
| `TargetBodyMeshes` | 手動指定する変換先の身体Mesh配列 |

身体Mesh配列が`null`なら現在の選択を維持し、空配列なら選択を解除します。指定したアバター外のMeshは除外します。選択された身体Meshがなければ既存の選択UIが表示されます。

### 変形とMeshごとの選択

| フィールド | 意味 |
| --- | --- |
| `MatchBodyShape` | 体型差に合わせる変形を有効化 |
| `ClothMeshes` | `KisetterClothMeshOption[]`。`Mesh`と`ApplyFitting`で対応対象を指定 |
| `SmoothingIntensity` | スムージング強度。UIと同様に0–1へ制限 |
| `SmoothingRadius` | スムージングに使う周辺領域の半径 |
| `SmoothingIterations` | スムージングの反復回数 |
| `FittingIterations` | 衣装対応の反復回数 |
| `BodyCorrelationIterations` | 身体形状との対応関係を補正する反復回数 |

`ClothMeshes`は現在のSource Clothesに属するMeshだけに作用します。`null`や省略した項目は既存の選択を維持し、新しく検出したMeshは既定で選択されます。GameObjectのアクティブ状態は変更しません。

### 結果とボーン

| フィールド | 意味 |
| --- | --- |
| `RemovePreviouslyFittedClothes` | 既存UIの規則で以前の対応衣装を削除 |
| `ExportResultAsFbx` | 結果をFBXとして書き出す |
| `SaveResultAsBlendShape` | 対応結果をBlendShapeとして保存 |
| `BlendShapeName` | 保存するBlendShape名。空の場合は既定の名前 |
| `MergeClothesArmatureWithAvatar` | 衣装のArmatureをアバターに統合 |
| `PreserveClothesBoneRotation` | Armatureを統合しない場合に衣装ボーンの回転を維持 |

### 身体Meshと対応から外す衣装Meshを指定する例

`sourceBodyMesh`、`targetBodyMesh`、`clothesMesh`はシーン内の`SkinnedMeshRenderer`参照です。コピーを変更したら、AvatarまたはProfileの実行関数一つに渡します。

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

取得・適用時に配列はコピーされますが、配列内のUnityオブジェクトは同じオブジェクトへの参照です。

## 8. 実行できない場合の確認

| 状況 | 確認する内容 |
| --- | --- |
| オプション・Profile取得で例外 | Edit Modeか確認します。公開取得APIはPlay Modeで`InvalidOperationException`を投げます。 |
| `Rejected / EditModeRequired` | Play Modeを終了し、Editorメインスレッドから呼び出します。 |
| `Rejected / EditorBusy` | 対応、チュートリアル、Preset編集、Studio作業を先に完了します。既存作業を強制的に置き換えません。 |
| Profileや選択IDが拒否される | `GetProfileList()`で再取得し、そのProfileが返したIDを使用します。 |
| 身体Mesh選択画面が表示される | 選択を完了するか、有効な身体Mesh配列を渡します。 |
| `Failed` | `ErrorCode`、`Message`、`Exception`とエラー画面を確認し、データの問題と呼び出しの問題を区別します。 |
| Studioが`false`を返す | Consoleで入力、機能の有効状態、未保存編集、進行中の作業を確認します。 |

<details class="doc-optional-step">
<summary>確認済みの実行範囲と未確認事項</summary>

2026-10-22のUnity <strong>6000.2.6f2</strong>の検証記録では、Avatarと基本Profile対応、Mesh保存、コールバック・キャンセル・拒否、Studio切り替え、実際のTexture編集の保護を、対象シナリオで確認しました。

UIとAPIの数値的な同一性は確認できていません。その環境での最大World頂点差は、UI/API間で約<strong>29.06 mm</strong>、UIの反復実行で約<strong>35.08 mm</strong>でした。API固有の原因と断定したり、同一結果を保証したりする根拠にはなりません。

検証したShinanoの`Body_base::Toe_heels` Snapshotは、Torso Gridデータ不一致により既存UI・APIの両方で失敗しました。未選択の基本Profileは成功しましたが、すべてのProfile・BlendShape・Presetの組み合わせを検証したわけではありません。この事例が全Profileの利用制限を意味するわけではありません。

Unity 2022、実行中のPlay Mode移行・アセンブリ再ロード、FBX書き出しなどは今回の実行検証の対象外です。上記の呼び出し仕様は確認したソースに基づき、個々の組み合わせの結果は各プロジェクトで確認してください。

<button type="button" class="doc-details-close" data-details-close>検証範囲を閉じる</button>
</details>

