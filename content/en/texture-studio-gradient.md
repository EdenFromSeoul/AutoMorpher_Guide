---
title: "Create a gradient"
slug: "texture-studio-gradient"
category: "User Guide"
description: "Draw a line in the UV view to apply gradients to outfits and hair."
order: 47
version: "3.5.0"
parent: "texture-studio"
---

For mesh and UV selection, previews, and saving, see the [Texture Studio Guide](../texture-studio/).

## [1] How to use it

<img src="{{BASE_PATH}}/media/texture-studio/gradient-open-palette-figma-en.webp" alt="Select the Gradient tab marked 1, then click the horizontal color bar marked 2 directly below it to open the Gradient Editor palette" width="1440" height="650" loading="lazy" />

1. Select meshes and UV regions, then open **Gradient**.
2. Click the **horizontal color bar below the tabs** (②) to open the **Gradient Editor**. Set the colors and their positions, or choose a preset.
   - Click **New** under **Preset** to save the current colors as a preset.
3. Close the Gradient Editor and click **Draw on UV**.
4. Drag across the area where you want to draw the gradient in the UV view on the right.
5. Check the Scene view, then click **Finish Drawing**.

## [2] Outfit and hair examples

**Outfit example — a vertical white, blue, and red gradient**

<img src="{{BASE_PATH}}/media/texture-studio/outfit-gradient.webp" alt="Gradient outfit with start and end points shown in the UV view" width="1905" height="1065" loading="lazy" />

**Hair example — a white, yellow, and pink gradient**

<img src="{{BASE_PATH}}/media/texture-studio/hair-gradient.webp" alt="Gradient across four hair meshes and its direction line in UV space" width="1905" height="1065" loading="lazy" />

## [3] Things to check

Gradients follow **UV positions**. If roots and tips do not run in the same direction in the UV layout, different hair sections receive different color distributions. Select individual islands and work on them separately when needed.

Dragging again during drawing changes the current line. After finishing, drawing again applies a new gradient over the existing result. Escape or right-click cancels only the current drag; use **Undo** to reverse a completed edit.
