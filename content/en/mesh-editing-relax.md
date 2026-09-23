---
title: "Relax"
slug: "mesh-editing-relax"
category: "User Guide"
description: "Even out vertices and soften sharp bends."
order: 35
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Relax</strong> evens out vertex spacing and softens sharp bends. It does not flatten the entire brush area onto a single plane.

<figure>
  <video controls preload="metadata" width="810" height="754" style="height: auto; aspect-ratio: 810 / 754;" playsinline aria-label="Relax demonstration"><source src="{{BASE_PATH}}/media/mesh-studio/relax.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/relax.mp4">Open the video file</a></video>
  <figcaption>Relax demonstration</figcaption>
</figure>

<img src="{{BASE_PATH}}/media/mesh-studio/relax-settings.png" alt="Relax brush settings" width="402" height="207" loading="lazy" />

## [1] How to use it

1. Select Relax.
2. Adjust radius and strength, then brush the uneven area gradually.
3. Check the width and thickness of straps, folds, and connections to decorations.

## [2] Brush settings

| Option | Description |
| --- | --- |
| <strong>Brush Radius</strong> | Set the area around the cursor in which to even out vertices and soften bends. |
| <strong>Brush Strength</strong> | Set how strongly the brush smooths the surface using neighboring vertices. Apply it gradually while checking the shape of straps and folds. |
| <strong>Symmetry</strong> | Enable X / Y / Z to apply the operation to the opposite side relative to Root Object. Multiple axes can be enabled together. |

| Input | Action |
| --- | --- |
| <strong>Shift + mouse wheel</strong> | Adjust brush radius. |
| <strong>Ctrl + Shift + mouse wheel</strong> | Adjust brush strength. |
| <strong>Shift + mouse wheel with Caps Lock on</strong> | Adjust brush strength. |
| <strong>Esc</strong> | Cancel the current brush stroke. |

Use these shortcuts in the Scene View. On macOS, use Command instead of Ctrl.

## [3] Reference meshes

Use <strong>Reference Meshes</strong> to specify a surface to follow while smoothing. The brush uses a nearby matching reference surface when available; otherwise, it uses the surrounding shape of the clothing itself.

1. Check the body mesh automatically found in the clothing’s parent hierarchy.
2. Click <strong>Find Body Mesh</strong> to search again for a body mesh on a Humanoid Avatar in that hierarchy.
3. Use <strong>+</strong> to add a reference and <strong>−</strong> to remove one. Manually added meshes are retained during automatic discovery.

The Main Mesh itself and renderers sharing its mesh data are excluded from the references.

Relax does not show a <strong>Surface Gap</strong> input. When a nearby reference surface is found, it uses the gap set through the other brushes.

## [4] Check the result

Relax can change width or thickness, so start with a low strength. Check connections between straps and decorations, along with any folds you want to keep.

## [5] Save your edits

After editing, [recalculate weights and realign PhysBones](../mesh-editing/#3-recalculate-weights-and-realign-physbones) if needed. See [saving and mesh separation](../mesh-editing/#4-save-and-separate-meshes) to save the result as a Mesh or BlendShape.
