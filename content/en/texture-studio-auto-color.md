---
title: "Adjust colors automatically"
slug: "texture-studio-auto-color"
category: "User Guide"
description: "Use another mesh as a reference to match colors in selected regions automatically."
order: 48
version: "3.5.0"
parent: "texture-studio"
---

For mesh and UV selection, previews, and saving, see the [Texture Studio Guide](../texture-studio/).

## [1] Pick points and adjust

**① Source point** is on the mesh to recolor. **② Target point** supplies the desired color from another mesh (Target).

The selected regions are adjusted to match the color at ① to the color at ②.

<img src="{{BASE_PATH}}/media/texture-studio/auto-color-points-figma-en.webp" alt="Blue 1 marks source point selection: Pick UV or Pick Mesh. Orange 2 marks target reference point selection: Pick on Target Mesh." width="1440" height="1000" loading="lazy" />

1. Select the editing meshes and UV regions, then open **Auto Color**.
2. Under **1. Point on an edited Mesh**, click **Pick UV** or **Pick Mesh**.
   1. Click a point on the part you want to recolor in the UV or Scene view.
3. Under **2. Target reference point**, click **Pick on Target Mesh** and pick a point on another mesh in the Scene view that clearly shows the desired color.
   1. Avoid transparent areas and pattern edges.
4. Check the mesh name, UV coordinates, and **Target color**, then choose an adjustment mode.
5. Click **Adjust automatically**. Check the Scene and the result message when it finishes.

<img src="{{BASE_PATH}}/media/texture-studio/outfit-auto-points-annotated-figma-en.webp" alt="Blue 1 marks the source point on the outfit front; orange 2 marks the target reference on the sleeve. The blue UV ring is the same source point." width="2001" height="1400" loading="lazy" />

## [2] Adjustment modes

| Mode | Scope |
| --- | --- |
| **Texture only** | Adjust the texture in selected UV regions while keeping the material's color and lighting settings. |
| **Match Material settings** | Also match the reference material's color and lighting settings. Supported between materials using the same shader or lilToon shaders. Material settings affect the whole slot. |

## [3] Adjustment examples

Both examples use the sleeve color as the reference.

**Outfit example — Texture only**

<img src="{{BASE_PATH}}/media/texture-studio/outfit-auto-annotated-figma-en.webp" alt="The outfit after matching blue source point 1 to orange sleeve reference 2, with both selected points labeled." width="2001" height="1400" loading="lazy" />

**Hair example — Match Material settings**

<img src="{{BASE_PATH}}/media/texture-studio/hair-auto-annotated-figma-en.webp" alt="Four hair meshes adjusted using blue source point 1 on the bangs and orange target reference 2 on the sleeve." width="2001" height="1400" loading="lazy" />

## [4] Check the result

Material settings and lighting can make texture colors look different in the Scene view. Check the final appearance there.
