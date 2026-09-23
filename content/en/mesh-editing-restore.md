---
title: "Restore Brush"
slug: "mesh-editing-restore"
category: "User Guide"
description: "Restore distorted areas using a shape recorded in a BlendShape."
order: 32
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Restore Brush</strong> restores distorted areas using a reference shape recorded in a BlendShape. Choose a BlendShape available on the Main Mesh.

<figure>
  <video controls preload="metadata" width="870" height="754" style="height: auto; aspect-ratio: 870 / 754;" playsinline aria-label="Restore Brush demonstration"><source src="{{BASE_PATH}}/media/mesh-studio/restore.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/restore.mp4">Open the video file</a></video>
  <figcaption>Restore Brush demonstration</figcaption>
</figure>

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/restore-before.png" alt="Before restoration" width="868" height="738" loading="lazy" /><figcaption>Before restoration</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/restore-after.png" alt="After restoration" width="838" height="744" loading="lazy" /><figcaption>After restoration</figcaption></figure>
</div>

<img src="{{BASE_PATH}}/media/mesh-studio/restore-settings.png" alt="BlendShape, Restore Reference, and restoration mode settings" width="525" height="234" loading="lazy" />

## [1] How to use it

1. Select the reference <strong>BlendShape</strong>.
2. Set <strong>Restore Reference</strong> to `0` or `100`.
3. Choose the restoration <strong>Mode</strong>.
4. Adjust radius and strength, then left-drag over the Main Mesh.

## [2] Brush settings

| Option | Description |
| --- | --- |
| <strong>Brush Radius</strong> | Set the area around the cursor in which to restore the shape. |
| <strong>Brush Strength</strong> | Set how strongly the brush restores the shape using the chosen restore mode and BlendShape reference. Use several gentle strokes to inspect gradual changes. |
| <strong>Symmetry</strong> | Enable X / Y / Z to apply the operation to the opposite side relative to Root Object. Multiple axes can be enabled together. |

| Input | Action |
| --- | --- |
| <strong>Shift + mouse wheel</strong> | Adjust brush radius. |
| <strong>Ctrl + Shift + mouse wheel</strong> | Adjust brush strength. |
| <strong>Shift + mouse wheel with Caps Lock on</strong> | Adjust brush strength. |
| <strong>Esc</strong> | Cancel the current brush stroke. |

Use these shortcuts in the Scene View. On macOS, use Command instead of Ctrl.

## [3] Restore Reference

| Restore Reference | Reference shape |
| --- | --- |
| <strong>0</strong> | The shape with the selected BlendShape set to 0. |
| <strong>100</strong> | The shape with the selected BlendShape set to 100. |

Other BlendShapes are treated as 0 when the reference is prepared. This reference may differ from the combined BlendShapes currently visible in the Inspector. Check which value contains the shape you want to restore.

Automatic selection prefers <strong>MF_Origin at 100</strong>, then <strong>Kisetter_Fit at 0</strong>. If neither exists, select a reference manually. When choosing another BlendShape, also check Restore Reference.

## [4] Restoration modes

| Mode | Description |
| --- | --- |
| <strong>Original Shape Restore</strong> | Smooth the difference between the reference and the current shape according to neighboring vertices. |
| <strong>Shape Restore</strong> | Restore the reference shape at the current position and orientation. Nearby pieces in the original shape are also aligned relative to one another within the brush area. |

Hidden vertices and vertices outside the brush area stay fixed. Gradually increase the radius for wider distortions, and hide areas you want to protect before brushing.

## [5] Save your edits

After editing, [recalculate weights and realign PhysBones](../mesh-editing/#3-recalculate-weights-and-realign-physbones) if needed. See [saving and mesh separation](../mesh-editing/#4-save-and-separate-meshes) to save the result as a Mesh or BlendShape.
