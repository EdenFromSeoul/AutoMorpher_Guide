---
title: "Installation and Quick Start"
slug: "getting-started"
category: "Getting Started"
description: "Download きせった (Kisetter) {{VERSION}} from Booth, install it in your Unity project, and prepare your first fitting."
order: 10
---

## Before You Begin

きせった (Kisetter) is a Unity editor tool that adapts clothing made for one Humanoid avatar to another avatar's body shape. It automatically adjusts the clothing's bones, mesh, and weights, and also supports manual bone adjustments and saving the result as a BlendShape when needed.

!!! info "Current documentation version"
    This guide is written for **きせった (Kisetter) {{VERSION}}**.

## Supported Environment

| Environment | Unity version |
| --- | --- |
| VRChat | Unity 2022.3.22f1 |
| Warudo | Unity 2021.3.18f1 |
| General Unity projects | Unity 6000 |

- Supported OS: Windows and Linux
- Required external dependencies: None
- Avatar rig: Unity Humanoid

## Installation

1. Download the files from the [きせった (Kisetter) Booth page](https://edenlabs.booth.pm/items/7721082).
2. Extract the archive and locate the included UnityPackage.
3. Open the Unity project where you want to use the tool.
4. Double-click the UnityPackage, or select **Assets → Import Package → Custom Package** from the Unity menu.
5. Select every package item, then click **Import**.
6. Confirm that the きせった (Kisetter) files were created at the following path.

```text
Assets/@Eden_Tools/Eden_AutoMorpher
```

## Updating to the Latest Version

If an earlier version is already installed, import the new UnityPackage over the existing project without removing the old version first. Select every item in the Import window.

!!! warning "Back up your work first"
    Before updating an important avatar project, we recommend backing up the project or the Prefab you are editing.

## Choose Your First Task

- For a fast automatic fitting, start with [Auto Fitting Mode](../auto-fitting/).
- To adjust bones manually after the automatic fitting, use [Manual Fitting Mode](../manual-fitting/).
- To add an avatar's BlendShapes to clothing, see [BlendShape Generator](../blendshape-generator/).

If you encounter a problem, check [Q&A and Troubleshooting](../faq/) or follow [How to Contact Support](../contact/).