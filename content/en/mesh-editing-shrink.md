---
title: "Shrink"
slug: "mesh-editing-shrink"
category: "User Guide"
description: "Collapse selected vertices to create a shape that hides part of the clothing."
order: 36
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Shrink</strong> collapses selected vertices toward their bones to hide part of the clothing. Use <strong>Save as BlendShape</strong> to keep the result as a BlendShape.

<figure>
  <video controls preload="metadata" width="880" height="766" style="height: auto; aspect-ratio: 880 / 766;" playsinline aria-label="Shrink selection and preview demonstration"><source src="{{BASE_PATH}}/media/mesh-studio/shrink.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/shrink.mp4">Open the video file</a></video>
  <figcaption>Shrink selection and preview demonstration</figcaption>
</figure>

<img src="{{BASE_PATH}}/media/mesh-studio/shrink-settings.png" alt="Shrink preview and selection methods" width="634" height="234" loading="lazy" />

## [1] Select an area and preview

1. Under <strong>Selection Method</strong>, choose <strong>Click / Box</strong> or <strong>Brush Select</strong>.
2. Use <strong>Select</strong> to add areas and <strong>Deselect</strong> to remove them.
3. Choose <strong>Preview On</strong> to inspect the shrink result. Choose <strong>Preview Off</strong> to adjust the selection on the unshrunk shape without clearing the selection.
4. Keep <strong>Preview On</strong> selected when saving the result.

## [2] Selection controls

| Selection method | Add or remove vertices |
| --- | --- |
| <strong>Click / Box</strong> | Click or drag to select; Shift adds and Ctrl removes. |
| <strong>Brush Select</strong> | In Select mode, drag to add. Use Deselect or Shift-drag to remove. |

Both methods share the same selection. <strong>Clear selection / restore</strong> clears it and restores the unshrunk shape.

## [3] Brush settings

The Shrink brush <strong>selects or deselects</strong> vertices to collapse. Brush strength does not control the amount of shrink.

| Option | Description |
| --- | --- |
| <strong>Brush Radius</strong> | Set the area selected around the cursor in Brush Select. The radius option is hidden in Click / Box. |
| <strong>Select / Deselect</strong> | Drag to add an area in Select mode or remove it in Deselect mode. Shift-drag also removes vertices while Select is active. |
| <strong>Symmetry</strong> | Select or deselect vertices on the opposite X / Y / Z side relative to Root Object. Multiple axes can be enabled together. |

| Input | Action |
| --- | --- |
| <strong>Shift + mouse wheel</strong> | Adjust brush radius. |
| <strong>Esc</strong> | Cancel the current brush stroke. |

Use these shortcuts in the Scene View. On macOS, use Command instead of Ctrl.

Brush Strength, Brush Weight Mode, and Reference Meshes are not used here. Adjust the selection while inspecting the result with <strong>Preview On</strong>.

## [4] Save your edits

After editing, [recalculate weights and realign PhysBones](../mesh-editing/#3-recalculate-weights-and-realign-physbones) if needed. See [saving and mesh separation](../mesh-editing/#4-save-and-separate-meshes) to save the result as a Mesh or BlendShape.
