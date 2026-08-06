---
title: "Profileの作成および追加方法"
slug: "profiles"
category: "機能説明"
description: "衣装対応情報をProfileとして作成・追加する方法です。"
order: 60
---

<video controls preload="metadata" src="{{BASE_PATH}}/media/8d1ba909a5c2bb70.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## Profileの作成方法

1. Profileを作成する **アバターをSceneに配置**します。
2. アバターの **Rotation（回転）** と **Scale（スケール）** を初期値に設定します。
3. アバターに以下の要素が **正常に存在していることを確認**します。
    - **Animator**
    - **Body Skinned Mesh Renderer**
4. Body Meshが **縮小されたり隠れたりせず、すべて表示されるように** Shape Keyを調整します。
    - 作成するProfileに応じて 👠**Foot Heel、👙Breast** などのShape Keyを調整します。
5. **Kisetter – Kisetter_ProfileSaver** を **Hierarchy** に配置します。
6. **Profile Name** に作成するProfile名を入力します。
7. **Source Avatar** スロットに対象のアバターを割り当てます。
8. **Source Body Mesh** スロットに **Body Skinned Mesh Renderer** を割り当てます。

    ![image.png]({{BASE_PATH}}/media/d1548659e15d02f4.png)

9. **Save Profile** ボタンをクリックします。
    - 必要に応じてBody MeshのShape Keyを調整した後、上記の手順を繰り返して、特定のShape Keyに対応したProfileを作成します。
10. Profileが正常に作成されたかを確認します。
    - Profileパス: `Assets\@Eden_Tools\Kisetter\Profiles`

## Profileの追加方法

1. ProfileフォルダをProfileのパスに追加します。
    - Profileのパス: `Assets\@Eden_Tools\Kisetter\Profiles`
    - 一覧に目的のProfileが表示されない場合は、上記のパスに **Profileフォルダを直接追加**してください。
        - Profileフォルダの構成例

            Profiles
            └─ ProfileName
                ├─ ProfileName.json
                └─ ProfileName.eb


    ![image.png]({{BASE_PATH}}/media/99347e5849f09c7b.png)

2. きせった (Kisetter)に Profileが正常に表示されているか確認します。
    1. きせった (Kisetter)をHierarchyに配置します
        - Prefabのパス: `Assets\@Eden_Tools\Kisetter\Kisetter.prefab`
        - または、空のゲームオブジェクトにきせった (Kisetter) Componentを追加します。
    2. **プロファイルモード** をクリックします。

        ![image.png]({{BASE_PATH}}/media/8c84dfb545bfbd8c.png)

    3. Source Avatar - Profileに、追加したProfileが表示されているか確認します。

        ![image.png]({{BASE_PATH}}/media/2066d7a880e49364.png)

        - **Profile**: 衣装が対応しているアバターのProfile
            - Profileが一覧に表示されない場合は、**Refreshボタンをクリックして再読み込みするか**、
            `Assets\@Eden_Tools\Kisetter\Profiles` フォルダ内に **Profileが正しく追加されているか確認してください。**
