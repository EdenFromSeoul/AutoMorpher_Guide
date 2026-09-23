---
title: "Vertex Control"
slug: "mesh-editing-vertex-control"
category: "User Guide"
description: "Move, rotate, or scale selected vertices."
order: 31
version: "3.4.1"
parent: "mesh-editing"
---

## [1] Select vertices

Select <strong>Vertex Control</strong>, then click vertices or drag a selection box in the Scene View.

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/6d66d5ebb4b09557.png" alt="A single vertex selected by clicking" width="535" height="491" loading="lazy" /><figcaption>Click selection</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/83e7aa82741df69b.png" alt="Multiple vertices selected within a box" width="649" height="519" loading="lazy" /><figcaption>Box selection</figcaption></figure>
</div>

| Input | Action |
| --- | --- |
| <strong>Left click</strong> | Select a vertex. |
| <strong>Shift + left click</strong> | Add a vertex to the selection. |
| <strong>Ctrl + left click</strong> | Remove a vertex from the selection. |
| <strong>Left drag</strong> | Select vertices inside the box. |
| <strong>Shift + left drag</strong> | Add vertices inside the box. |
| <strong>Ctrl + left drag</strong> | Deselect vertices inside the box. |
| <strong>A</strong> | Select all vertices in the Main Mesh that have not been hidden. |
| <strong>L</strong> | Add all vertices connected to the vertex near the cursor. |
| <strong>Shift + L</strong> | Deselect all vertices connected to the vertex near the cursor. |

<strong>L / Shift + L</strong> is useful for selecting one connected piece of a mesh containing several separate pieces.

## [2] Move, rotate, and scale

Select vertices, choose <strong>W(Move) / E(Rotate) / R(Scale)</strong> using the buttons or keyboard, and drag the handle in the Scene View.

<div class="doc-media-grid doc-media-grid-3">
  <figure><img src="{{BASE_PATH}}/media/4accd5822cf38fba.png" alt="Moving vertices with the Move handle" width="756" height="598" loading="lazy" /><figcaption>W · Move</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/bd90cd4b8efaf419.png" alt="Rotating vertices with the Rotate handle" width="729" height="575" loading="lazy" /><figcaption>E · Rotate</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/edb5ec08dcbebbe3.png" alt="Scaling vertices with the Scale handle" width="639" height="536" loading="lazy" /><figcaption>R · Scale</figcaption></figure>
</div>

Set <strong>Handle Direction</strong> to <strong>World</strong> for world-coordinate axes, or <strong>Vertex Normal</strong> to orient the handle to the selected vertex's surface normal.

## [3] Influence on neighboring vertices

Moving selected vertices also deforms nearby vertices according to the radius and weight settings. Stronger influence appears red, and weaker influence appears blue.

<img src="{{BASE_PATH}}/media/4e4790e5af577f26.png" alt="Editing influence and brush range settings" width="692" height="528" loading="lazy" />

| Setting | Option | Description |
| --- | --- | --- |
| <strong>Pick Mode</strong> | <strong>Euclidean</strong> | Affect vertices within the radius based on distance through space. |
| | <strong>Adjacency</strong> | Affect vertices within the radius based on distance along mesh connections. |
| <strong>Brush Weight Mode</strong> | <strong>Linear</strong> | Influence decreases steadily with distance. |
| | <strong>Gaussian</strong> | Create a smooth transition from the center to the surrounding area. |
| | <strong>Clamp</strong> | Apply the same weight to vertices within the radius. |


### Brush settings

| Option | Description |
| --- | --- |
| <strong>Brush Radius</strong> | Set how far deformation extends around the selected vertices. |
| <strong>Brush Strength</strong> | Set how strongly nearby vertices follow when you move, rotate, or scale the selection. |

| Input | Action |
| --- | --- |
| <strong>Shift + mouse wheel</strong> | Adjust brush radius. |
| <strong>Ctrl + Shift + mouse wheel</strong> | Adjust brush strength. |
| <strong>Shift + mouse wheel with Caps Lock on</strong> | Adjust brush strength. |

Use these shortcuts in the Scene View. On macOS, use Command instead of Ctrl.

!!! tip "💡 Another nearby piece moves with the selection"
    Use Adjacency to limit the influence according to mesh connections. Also check which additional meshes are selected under Meshes to edit.

## [4] Hide or delete vertices

| Input | Action |
| --- | --- |
| <strong>G</strong> | Hide selected vertices. |
| <strong>Shift + G</strong> | Show all hidden vertices. |
| <strong>Delete Vertices</strong>, <strong>Backspace</strong>, or <strong>X</strong> | Delete selected vertices from the mesh. |

Hidden vertices are protected from editing. Use hiding to limit the area you work on; deleting changes the mesh's vertices and faces.

## [5] Symmetry movement and clipping

<strong>Symmetry</strong>: Enable X / Y / Z to apply the operation to the opposite side relative to Root Object. Multiple axes can be enabled together. Symmetry axes are disabled in <strong>Adjacency</strong> mode. Use <strong>Euclidean</strong> for symmetry editing.

<img src="{{BASE_PATH}}/media/mesh-studio/symmetry.png" alt="Symmetry editing example" width="1082" height="791" loading="lazy" />

| Control | Description |
| --- | --- |
| <strong>Symmetry Move → Mirror</strong> | Move the opposite vertices as a mirror image. |
| <strong>Symmetry Move → Same</strong> | Apply the deformation in the same direction on the opposite side. |
| <strong>Symmetry Clipping</strong> | Prevent vertices near a symmetry axis from crossing to the opposite side. |

## [6] Save your edits

After editing, [recalculate weights and realign PhysBones](../mesh-editing/#3-recalculate-weights-and-realign-physbones) if needed. See [saving and mesh separation](../mesh-editing/#4-save-and-separate-meshes) to save the result as a Mesh or BlendShape.
