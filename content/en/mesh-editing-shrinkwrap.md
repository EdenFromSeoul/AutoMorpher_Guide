---
title: "Shrinkwrap"
slug: "mesh-editing-shrinkwrap"
category: "User Guide"
description: "Fit clothing to the reference surface at the specified gap."
order: 34
version: "3.4.1"
parent: "mesh-editing"
---

<strong>Shrinkwrap</strong> fits the Main Mesh to a reference surface. It is useful for reducing the gap where clothing floats away from the body.

<figure>
  <video controls preload="metadata" width="940" height="800" style="height: auto; aspect-ratio: 940 / 800;" playsinline aria-label="Shrinkwrap demonstration"><source src="{{BASE_PATH}}/media/mesh-studio/shrinkwrap.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/shrinkwrap.mp4">Open the video file</a></video>
  <figcaption>Shrinkwrap demonstration</figcaption>
</figure>

## [1] How to use it

1. Assign <strong>Reference Meshes</strong> and set <strong>Surface Gap (mm)</strong>.
2. Adjust brush radius and strength.
3. Drag over the area to fit, then inspect it from other angles.

## [2] Brush settings

| Option | Description |
| --- | --- |
| <strong>Brush Radius</strong> | Set the area around the cursor to fit to the reference mesh. |
| <strong>Brush Strength</strong> | Set how strongly the clothing moves toward the reference surface and specified gap. Lower values let you fit the surface gradually. |
| <strong>Symmetry</strong> | Enable X / Y / Z to apply the operation to the opposite side relative to Root Object. Multiple axes can be enabled together. |

| Input | Action |
| --- | --- |
| <strong>Shift + mouse wheel</strong> | Adjust brush radius. |
| <strong>Ctrl + Shift + mouse wheel</strong> | Adjust brush strength. |
| <strong>Shift + mouse wheel with Caps Lock on</strong> | Adjust brush strength. |
| <strong>Esc</strong> | Cancel the current brush stroke. |

Use these shortcuts in the Scene View. On macOS, use Command instead of Ctrl.

## [3] Reference meshes and surface gap

Use <strong>Reference Meshes</strong> to specify the surface to fit the clothing to. You can use the avatar’s body meshes or other meshes.

<img src="{{BASE_PATH}}/media/mesh-studio/reference-meshes.png" alt="Reference meshes and surface gap settings" width="534" height="233" loading="lazy" />

1. Check the body mesh automatically found in the clothing’s parent hierarchy.
2. Click <strong>Find Body Mesh</strong> to search again for a body mesh on a Humanoid Avatar in that hierarchy.
3. Use <strong>+</strong> to add a reference and <strong>−</strong> to remove one. Manually added meshes are retained during automatic discovery.

The Main Mesh itself and renderers sharing its mesh data are excluded from the references.

<strong>Surface Gap (mm)</strong> sets the clearance to leave between the fitted clothing and the reference surface. Enter `1` for a 1 mm gap.

## [4] Check the result

Use Resolve Clothing Clipping to bring penetrating areas outside the surface, and Shrinkwrap to adjust the fit along the surface.

## [5] Save your edits

After editing, [recalculate weights and realign PhysBones](../mesh-editing/#3-recalculate-weights-and-realign-physbones) if needed. See [saving and mesh separation](../mesh-editing/#4-save-and-separate-meshes) to save the result as a Mesh or BlendShape.
