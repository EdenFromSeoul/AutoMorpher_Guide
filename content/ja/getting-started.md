---
title: "インストールとクイックスタート"
slug: "getting-started"
category: "はじめに"
description: "Boothからきせった (Kisetter) {{VERSION}}をダウンロードし、Unityプロジェクトへインストールして最初の作業を準備します。"
order: 10
---

## はじめる前に

きせった (Kisetter)は、Unity Humanoidアバター用の衣装を別のアバターの体型に合わせて変形するUnityエディターツールです。衣装のボーン、Mesh、Weightを自動調整し、必要に応じて手動でのボーン調整やBlendShapeとしての結果保存にも対応しています。

!!! info "現在のドキュメントバージョン"
    このガイドは **きせった (Kisetter) {{VERSION}}** を基準に作成されています。

## 対応環境

| 使用環境 | Unityバージョン |
| --- | --- |
| VRChat | Unity 2022.3.22f1 |
| Warudo | Unity 2021.3.18f1 |
| 一般的なUnityプロジェクト | Unity 6000 |

- 対応OS: Windows、Linux
- 必須の外部依存関係: なし
- アバターRig: Unity Humanoid

## インストール

1. [きせった (Kisetter) Boothページ](https://edenlabs.booth.pm/items/7721082)からファイルをダウンロードします。
2. 圧縮ファイルを展開し、同梱されているUnityPackageを確認します。
3. 使用するUnityプロジェクトを開きます。
4. UnityPackageをダブルクリックするか、Unityメニューから **Assets → Import Package → Custom Package** を選択します。
5. パッケージ内の項目をすべて選択し、**Import** をクリックします。
6. 次のパスにきせった (Kisetter)のファイルが作成されていることを確認します。

```text
Assets/@Eden_Tools/Eden_AutoMorpher
```

## 最新バージョンへのアップデート

既存バージョンがインストールされている場合は、削除せずに新しいUnityPackageを既存プロジェクトへ上書きインポートします。Importウィンドウでは新しいパッケージの項目をすべて選択してください。

!!! warning "作業前のバックアップ"
    重要なアバタープロジェクトを更新する前に、プロジェクトまたは作業中のPrefabをバックアップすることをおすすめします。

## 最初の作業を選ぶ

- すばやく自動で対応する場合は、[Auto Fitting Mode](../auto-fitting/)から開始してください。
- 自動変形後にボーンを手動調整する場合は、[Manual Fitting Mode](../manual-fitting/)を使用してください。
- アバターのBlendShapeを衣装に追加する場合は、[BlendShapeの作成](../blendshape-generator/)を確認してください。

問題が発生した場合は、[Q&A・トラブルシューティング](../faq/)を確認するか、[お問い合わせ方法](../contact/)をご覧ください。