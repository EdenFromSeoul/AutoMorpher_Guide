---
title: "Resolve Clothing Clipping"
slug: "mesh-editing-clipping"
category: "User Guide"
description: "Move clothing that penetrates the reference mesh back outside its surface."
order: 33
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Resolve Clothing Clipping</strong> moves penetrating areas of the Main Mesh outside the reference surface.

<figure>
  <video controls preload="metadata" width="844" height="812" style="height: auto; aspect-ratio: 844 / 812;" playsinline aria-label="Resolve Clothing Clipping demonstration"><source src="{{BASE_PATH}}/media/mesh-studio/clipping.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/clipping.mp4">Open the video file</a></video>
  <figcaption>Resolve Clothing Clipping demonstration</figcaption>
</figure>

## [1] How to use it

1. Add body meshes or other suitable surfaces to <strong>Reference Meshes</strong>.
2. Set <strong>Surface Gap (mm)</strong>, radius, and strength.
3. Adjust the Scene View to see the affected area and check the brush arrow.
4. Drag over the clipping area on the Main Mesh.

## [2] Brush settings

| Option | Description |
| --- | --- |
| <strong>Brush Radius</strong> | Set the area around the cursor in which to correct clipping. |
| <strong>Brush Strength</strong> | Set how strongly the brush moves penetrating clothing outside the reference mesh. Set the desired surface gap separately. |
| <strong>Symmetry</strong> | Enable X / Y / Z to apply the operation to the opposite side relative to Root Object. Multiple axes can be enabled together. |

| Input | Action |
| --- | --- |
| <strong>Shift + mouse wheel</strong> | Adjust brush radius. |
| <strong>Ctrl + Shift + mouse wheel</strong> | Adjust brush strength. |
| <strong>Shift + mouse wheel with Caps Lock on</strong> | Adjust brush strength. |
| <strong>Esc</strong> | Cancel the current brush stroke. |

Use these shortcuts in the Scene View. On macOS, use Command instead of Ctrl.

## [3] Reference meshes and surface gap

Use <strong>Reference Meshes</strong> to specify the surface against which clipping is corrected. You can use the avatar’s body meshes or other meshes.

<img src="{{BASE_PATH}}/media/mesh-studio/reference-meshes.png" alt="Reference meshes and surface gap settings" width="534" height="233" loading="lazy" />

1. Check the body mesh automatically found in the clothing’s parent hierarchy.
2. Click <strong>Find Body Mesh</strong> to search again for a body mesh on a Humanoid Avatar in that hierarchy.
3. Use <strong>+</strong> to add a reference and <strong>−</strong> to remove one. Manually added meshes are retained during automatic discovery.

The Main Mesh itself and renderers sharing its mesh data are excluded from the references.

<strong>Surface Gap (mm)</strong> sets the clearance between the corrected clothing and the reference surface. Enter `1` for a 1 mm gap.

## [4] Check the result

The tool uses the outer reference surface exposed toward the arrow. Nearby fabric and overlapping layers may follow the correction, so check the surrounding shape as well. Change your viewpoint to work on clipping facing another direction.

## [5] Save your edits

After editing, [recalculate weights and realign PhysBones](../mesh-editing/#3-recalculate-weights-and-realign-physbones) if needed. See [saving and mesh separation](../mesh-editing/#4-save-and-separate-meshes) to save the result as a Mesh or BlendShape.
