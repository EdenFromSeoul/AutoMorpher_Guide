---
title: "Kisetterの動作の流れ"
slug: "how-kisetter-works"
category: "はじめに"
description: "Pose Setup、Fitting、Weightingを通して衣装が対象アバターにフィットするまでの流れを説明します。"
order: 15
---

Kisetterは衣装を一度に変形するのではなく、**ボーンを準備し、Meshをフィットさせ、最後にWeightを再計算する**順序で処理します。このページではボタンの操作方法ではなく、各段階で内部的に何が行われるかを説明します。

!!! info "3つの段階で理解する"
    **Pose Setup**で衣装のボーンを準備し、**Fitting**でMeshを体型に合わせ、**Weighting**で新しい体型に合うWeightを計算します。

## 全体の流れ

<div class="process-overview" role="list" aria-label="Kisetterの3段階の処理">
  <div class="process-stage" role="listitem"><span>01</span><strong>Pose Setup</strong><p>衣装のポーズとボーンを対象アバターに合わせて準備します。</p></div>
  <span class="process-arrow" aria-hidden="true">→</span>
  <div class="process-stage" role="listitem"><span>02</span><strong>Fitting</strong><p>衣装Meshを変形し、Bodyとの貫通を補正します。</p></div>
  <span class="process-arrow" aria-hidden="true">→</span>
  <div class="process-stage" role="listitem"><span>03</span><strong>Weighting</strong><p>Armatureを構成し、頂点Weightを再計算します。</p></div>
</div>

| 段階 | 主な処理 | 次の段階へ渡すもの |
| --- | --- | --- |
| Pose Setup | ポーズの正規化、衣装の複製、ボーン調整 | 準備済みの衣装と体型差の情報 |
| Fitting | Mesh変形、貫通補正、必要に応じた手動編集 | 保存されたMesh Asset |
| Weighting | Armatureの再構成、Weightの再計算 | Unityで使用する最終衣装 |

Kisetterは元の衣装を複製し、新しいMeshで作業するため、**元の衣装は変更されません。** 完成したMeshとFBXは次の場所に保存されます。

```text
Assets/@Eden_Mesh/<アバター名>/<衣装名>
```

!!! warning "完了前にキャンセルした場合"
    処理途中のMeshは、まだAssetとして保存されていない作業用Meshの場合があります。この状態でUnityを再起動したりVRChatへアップロードしたりするとMeshが消えることがあるため、もう一度最後まで処理して保存してください。

## 1. Pose Setup

Pose Setupは、変形を行う前に衣装をできるだけTarget Avatarに合わせる工程です。

<div class="stage-diagram" role="list" aria-label="Pose Setupの処理の流れ">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>Body Meshを検索</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>A PoseからT Poseへ変換</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>衣装を複製</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Source Avatarと衣装のボーン対応を確認</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">05</span><strong>対象アバターに合わせて衣装ボーンを調整</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">06</span><strong>2つのアバターの体型差を収集</strong></div>
</div>

1. **Body Meshを検索** — アバターの体を表すMeshを探します。複数のBody Meshを使うアバターでは、必要なMeshを手動で指定する場合があります。
2. **A PoseからT Poseへ変換** — アバターと衣装を同じT Poseの基準に揃えます。
3. **衣装を複製** — Source Clothesを複製し、対象アバター用の新しい衣装を作成します。
4. **専用衣装を確認** — Source Avatarと衣装のHumanoidボーンを比較し、そのアバター用の衣装であることを確認します。
5. **衣装ボーンを調整** — 2つのアバターの体型差をもとに、衣装ボーンの位置と大きさを対象に合わせます。
6. **体型差の情報を収集** — 次のFittingでMeshを変形するためのデータを準備します。

> `ClothesHumanoidMatchedBone is Null`が表示された場合は、衣装PrefabのScaleが正しいか、選択したSource Avatar専用の衣装かを確認してください。

**この段階の結果：** 対象アバターの骨格と体型を基準に、Mesh変形を始められる衣装が準備されます。

## 2. Fitting

Fittingは、衣装をTarget Avatarに合わせて自然に変形する段階です。

<div class="stage-diagram" role="list" aria-label="Fittingの処理の流れ">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>衣装Meshの情報を収集</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>補助ボーンを追加調整</strong><small>Manual</small></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>体型差を補正</strong><small>オプション</small></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Fitting Iterationの回数だけ衣装を変形</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">05</span><strong>Body Correlation Iterationの回数だけ貫通を補正</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">06</span><strong>Meshを編集</strong><small>Manual</small></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">07</span><strong>ボーン位置・名前とPhysBoneを調整</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">08</span><strong>MeshをAssetとして保存</strong></div>
</div>

### Auto FittingとManual Fittingの違い

| モード | 自動で行う処理 | 手動で調整できる処理 |
| --- | --- | --- |
| Auto Fitting | 体型補正、Mesh変形、貫通補正、保存 | なし |
| Manual Fitting | Auto Fittingと同じ基本処理 | 変形前の補助ボーン調整、変形後のMesh編集 |

### 処理順序

1. **Mesh情報を収集** — 各衣装Meshの頂点位置と接続関係を読み取ります。
2. **補助ボーンを調整（Manual Fitting）** — 変形前に補助ボーンを動かし、衣装全体のシルエットを整えます。
3. **体型差を補正** — `Body Shape Matching`が有効な場合、差が大きい体型同士を追加で補正します。
4. **衣装を変形** — 衣装の頂点とBody Meshの位置関係を基準に、`Fitting Iteration`で指定した回数だけMeshを変形します。
5. **Bodyの貫通を補正** — Body Meshを貫通する頂点を探し、`Body Correlation Iteration`で指定した回数だけ交差を減らします。
6. **Meshを編集（Manual Fitting）** — 肌が見える部分を修正したり、形状復元で歪んだ部分を戻したりします。
7. **ボーンを仕上げる** — 対象アバターに合わせてHumanoid Boneの位置と名前を変更し、PhysBoneの位置とColliderの大きさも調整します。
8. **Meshを保存** — 結果をMesh Assetとして保存し、Weightingへ渡します。

体型差は可能な範囲で自動計算されますが、衣装の構造や体型差によっては追加の調整が必要です。その場合は[Manual Fitting Mode](../manual-fitting/)でボーンやMeshを直接調整してください。

**この段階の結果：** 対象アバターの外形に合わせて変形され、Assetとして保存された衣装Meshが作成されます。

## 3. Weighting

Weightingは、変形した衣装が対象アバターの動きに自然に追従するようにする最後の段階です。

<div class="stage-diagram" role="list" aria-label="Weightingの処理の流れ">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>衣装Meshの情報を再収集</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>衣装Armatureを再構成</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>Weightを再計算</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>FBXを書き出し</strong><small>オプション</small></div>
  <div class="stage-diagram-node is-complete" role="listitem"><span class="stage-diagram-index">✓</span><strong>完了</strong></div>
</div>

1. **Mesh情報を再収集** — Fitting後のMeshの頂点位置と接続関係をもう一度読み取ります。
2. **Armatureを再構成** — 出力設定に応じて衣装専用Armatureを構成するか、衣装ボーンを対象アバターのArmatureへ接続します。必要なボーンがない場合は追加し、衣装Armatureを維持する場合は回転を保つためのAnchor Boneが追加されることがあります。
3. **Weightを再計算** — 対象アバターのBody Meshを基準に、衣装の各頂点のWeightを計算して反映します。
4. **FBXを書き出し** — オプションが有効な場合、結果をFBXとして保存し、衣装がそのFBXから読み込んだMeshを参照するように接続し直します。

!!! info "FBXの書き出しに失敗しても"
    FBXの保存または再読み込みに失敗した場合は、既存のMesh Assetをそのまま使用します。FBXファイルだけが作成されないため、UnityやVRChatで衣装を使用することには問題ありません。

**この段階の結果：** 対象アバターのArmatureと動きに合うWeightが設定された最終衣装が完成します。

## 完了後に確認すること

- Hierarchyで、変換した衣装が対象アバターの下に正しく配置されているか確認します。
- Sceneで腕や脚などの主な関節を動かし、貫通や大きな歪みがないか確認します。
- `Assets/@Eden_Mesh/<アバター名>/<衣装名>`に結果Assetが作成されているか確認します。
- 修正が必要な場合は[Manual Fitting Mode](../manual-fitting/)で補正し、品質の問題が続く場合は[変形品質を向上させるヒント](../quality-tips/)を確認します。
