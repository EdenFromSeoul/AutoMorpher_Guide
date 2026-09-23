---
title: "Mesh Studio Guide"
slug: "mesh-editing"
category: "User Guide"
description: "Edit clothing with vertex controls and brushes, adjust weights and PhysBones, and save the result as a Mesh or BlendShape."
order: 30
version: "3.4.1"
---

<div class="guide-intro">
  <p>⚫ <strong>Mesh Studio</strong> lets you edit clothing meshes directly in Unity’s Scene View.</p>
  <p>⚫ Easily fix clipping, adjust the gap from the body, and repair distorted areas, then save the result as a <strong>Mesh or BlendShape</strong>.</p>
</div>

## [1] Prepare to edit

### 1. Open Mesh Studio

1. Select the <strong>Mesh Studio</strong> tab at the top of the きせった(Kisetter) window.
2. Under <strong>Mesh Selection</strong>, drag the clothing object or its parent into <strong>Root Object</strong>.
3. Click <strong>Refresh Meshes</strong> if the list is empty or the clothing hierarchy has changed.

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/tab.png" alt="Mesh Studio tab at the top of the Kisetter window" width="605" height="206" loading="lazy" /></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/root-object.png" alt="Assigning clothing to Root Object" width="791" height="392" loading="lazy" /></figure>
</div>

Meshes appear in the list when there are <strong>Skinned Mesh Renderers</strong> under Root Object. When working on clothing fitted to an avatar, place the clothing under that avatar in the hierarchy.

### 2. Choose the Main Mesh and additional meshes

| Control | How to use it |
| --- | --- |
| 1. <strong>Refresh Meshes</strong> | Reload the Skinned Mesh Renderers under Root Object. |
| 2. <strong>Active</strong> | Turn the mesh object on or off. |
| 3. <strong>Main Mesh</strong> | Choose the mesh whose vertices you will select and edit. The selected mesh is marked <strong>Main</strong>. |
| 4. <strong>Meshes to edit</strong> | Select or deselect additional meshes to deform with the Main Mesh. |
| 5. <strong>Revert to Original</strong> | <strong>Revert to Original</strong>: Revert edits to that mesh.<br /><strong>Revert All</strong>: Revert edits to all meshes. |

<img src="{{BASE_PATH}}/media/mesh-studio/mesh-selection.png" alt="Main Mesh, additional meshes, active state, and revert controls" width="1086" height="636" loading="lazy" />

Changing the Main Mesh clears the additional mesh selection. Choose the Main Mesh first, then select any additional meshes.

## [2] Interface and shared settings

### 1. Choose where controls appear

Use <strong>Vertex Controls Location</strong> to choose the location of the editing controls.

<img src="{{BASE_PATH}}/media/mesh-studio/controls-location.png" alt="Vertex Controls Location setting" width="1172" height="1038" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/scene-ui.png" alt="Scene UI" width="900" height="879" loading="lazy" /><figcaption>Scene UI</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/editor-ui.png" alt="Mesh Studio window" width="899" height="837" loading="lazy" /><figcaption>Mesh Studio window</figcaption></figure>
</div>

### 2. Vertex display

Use <strong>Vertex Display</strong> to adjust how vertices appear. Editable vertices are white by default, and selected vertices are yellow. Affected neighboring vertices range from blue for a weaker influence to red for a stronger influence.

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/vertex-display.png" alt="Vertex Display panel" width="1155" height="1010" loading="lazy" /><figcaption>Vertex Display panel</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/vertex-colors.png" alt="Selected vertices and influence colors" width="1036" height="604" loading="lazy" /><figcaption>Selected vertices and influence colors</figcaption></figure>
</div>

| Control | Description |
| --- | --- |
| <strong>Show Vertices</strong> | Show or hide editable vertex points. |
| <strong>Show Occluded</strong> | Also show vertices obscured by other meshes. |
| <strong>Vertex Size</strong> | Adjust the size of the vertex points. |
| <strong>Draw Distance</strong> | Set the maximum distance from the camera at which vertices appear. The slider's maximum value removes the distance limit. |
| <strong>Vertex Color</strong> | Set the vertex display color. |

### 3. Choose an editing mode

Choose a tool under <strong>Edit Mode</strong>, then adjust its options under <strong>Tool Settings</strong>.

<img src="{{BASE_PATH}}/media/mesh-studio/edit-mode-buttons.png" alt="The six editing tools" width="358" height="172" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/edit-modes.png" alt="Location of the Edit Mode panel" width="1197" height="1024" loading="lazy" /><figcaption>Location of the Edit Mode panel</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/tool-settings.png" alt="Location of the Tool Settings panel" width="1162" height="1007" loading="lazy" /><figcaption>Location of the Tool Settings panel</figcaption></figure>
</div>


Choose a tool below to open its instructions and examples.

| Tool | Use it to… |
| --- | --- |
| <span id="3-edit-vertices"></span>[Vertex Control](../mesh-editing-vertex-control/) | Move, rotate, or scale selected vertices. |
| <span id="1-restore-brush"></span>[Restore Brush](../mesh-editing-restore/) | Restore distorted areas using a shape recorded in a BlendShape. |
| <span id="2-resolve-clothing-clipping"></span>[Resolve Clothing Clipping](../mesh-editing-clipping/) | Move clothing that penetrates the reference mesh back outside its surface. |
| <span id="3-shrinkwrap"></span>[Shrinkwrap](../mesh-editing-shrinkwrap/) | Fit clothing to the reference surface at the specified gap. |
| <span id="4-relax"></span>[Relax](../mesh-editing-relax/) | Even out vertices and soften sharp bends. |
| <span id="5-shrink"></span>[Shrink](../mesh-editing-shrink/) | Collapse selected vertices to create a shape that hides part of the clothing. |

## [3] Recalculate weights and realign PhysBones

After editing the mesh, use <strong>Clothing Weight Recalculation / PhysBone Realignment</strong> if needed.

### 1. Assign the reference avatar and body meshes

1. Check the clothing <strong>Root Object</strong>.
2. Assign the target avatar's valid Humanoid Animator to <strong>Reference Avatar</strong>.
3. Assign the avatar's body meshes to <strong>Body Meshes</strong>, or use <strong>Auto-assign Body Mesh</strong>.

<img src="{{BASE_PATH}}/media/mesh-studio/rig-setup.png" alt="Reference Avatar and Body Meshes settings" width="655" height="156" loading="lazy" />

Place the clothing under the reference avatar and check the structure and positions of corresponding bones. The edited clothing and renderers sharing its mesh data cannot serve as body meshes.

Both operations currently require a valid Reference Avatar and Body Meshes. If a button is disabled, check these settings and whether there are eligible edited targets.

### 2. Realign PhysBones

<strong>Realign PhysBones</strong> adjusts clothing accessory bone positions to the edited meshes. Protected bones, including bones matched to the avatar, are excluded.

<figure>
  <video controls preload="metadata" width="1616" height="856" style="height: auto; aspect-ratio: 1616 / 856;" playsinline aria-label="PhysBone realignment demonstration"><source src="{{BASE_PATH}}/media/mesh-studio/physbones.mp4" type="video/mp4" /><a href="{{BASE_PATH}}/media/mesh-studio/physbones.mp4">Open the video file</a></video>
  <figcaption>PhysBone realignment demonstration</figcaption>
</figure>

1. Finish editing the mesh, then click <strong>Realign PhysBones</strong>.
2. Check that accessory bones for straps and decorations align with the edited mesh.
3. Save to keep the result.

Bones whose reference vertices were deleted are excluded. Related Constraints remain unlocked afterward; check their result and lock state when working with clothing that uses Constraints.

### 3. Recalculate Weights

<strong>Recalculate Weights</strong> recalculates clothing weights using the body meshes. It adjusts weights associated with the avatar while retaining clothing accessory bone weights and preserving the current Mesh and BlendShape shapes.

<img src="{{BASE_PATH}}/media/mesh-studio/weight-scope.png" alt="Weight Recalculation Scope" width="651" height="121" loading="lazy" />

1. Choose the <strong>Weight Recalculation Scope</strong>.
2. Click <strong>Recalculate Weights</strong>.
3. Check how the clothing follows the avatar in different poses, then save.

| Scope | Target |
| --- | --- |
| <strong>Edited Meshes</strong> | Meshes you have edited. |
| <strong>All Meshes under Root</strong> | All meshes loaded from Root Object. |

## [4] Save and separate meshes

### 1. Save your edits

Click <strong>Save...</strong> and choose a save method. The result is stored in a <strong>copy of the mesh</strong>, preserving the original mesh asset. The saved mesh is assigned to the object.

<img src="{{BASE_PATH}}/media/mesh-studio/save-dialog.png" alt="Location of the Save button" width="1004" height="169" loading="lazy" />

<div class="doc-media-grid doc-media-grid-2">
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/save-mesh.png" alt="Apply to Mesh" width="367" height="214" loading="lazy" /><figcaption>Apply to Mesh</figcaption></figure>
  <figure><img src="{{BASE_PATH}}/media/mesh-studio/save-blendshape.png" alt="Save as BlendShape" width="368" height="234" loading="lazy" /><figcaption>Save as BlendShape</figcaption></figure>
</div>

Save location: `Assets/@Eden_Mesh_MeshStudio/<Root Object name>/`

| Save method | Result |
| --- | --- |
| <strong>Apply to Mesh</strong> | Apply the current edited shape to the mesh. |
| <strong>Save as BlendShape</strong> | Store the deformation as a named BlendShape. It is added only to meshes with changes. |

For BlendShape output, enter a <strong>BlendShape Name</strong>. If the name already exists, an overwrite confirmation appears. Choosing <strong>Overwrite</strong> replaces that BlendShape.

!!! warning "⚠️ Before saving"
    Saving ends the current editing session and also saves open Scenes to retain the new mesh assignments. Turn the shrink preview on before saving a Shrink result.

### 2. Separate the selected area

Use <strong>Separate Selected Mesh</strong> to save selected faces as a separate object and mesh.

<img src="{{BASE_PATH}}/media/mesh-studio/separate-dialog.png" alt="Location of Separate Selected Mesh" width="961" height="142" loading="lazy" />

1. Select vertices on the Main Mesh. A triangle is separated only when <strong>all three of its vertices are selected</strong>.
2. Click <strong>Separate Selected Mesh</strong>.
3. Choose <strong>Apply to Mesh</strong> or <strong>Save as BlendShape</strong>, and enter a BlendShape name if needed.
4. Check which areas will be separated and retained, then click <strong>Separate</strong>.

The existing renderer receives a copy of the remaining mesh, and a new object receives a copy of the separated mesh. BlendShape, SubMesh, and Material data are retained. When saving as a BlendShape, edited deformations are distributed to the corresponding regions of each output mesh.

!!! warning "⚠️ Before separating"
    Separation and saving cannot be undone, and the editing session ends. The new renderer is not automatically connected to existing AnimationClips or external scripts. Check any required references afterward.

<details class="doc-optional-step">
<summary>If separation is unavailable or BlendShape saving is disabled</summary>

- Select all three vertices of each triangle you want to separate.
- Some faces must remain in the existing mesh.
- Meshes with a Cloth component, multiple Mesh LOD levels, or non-triangle topology cannot be separated.
- If editing changed the topology, for example by deleting vertices, the separated result cannot be saved as a BlendShape. Use <strong>Apply to Mesh</strong>.

</details>

### 3. Exit without saving

Choose <strong>Discard Change & Exit</strong> to end the session without keeping edits. <strong>Cancel</strong> in a save dialog cancels the save and lets you continue editing.

<img src="{{BASE_PATH}}/media/mesh-studio/save-actions.png" alt="Save and discard controls" width="693" height="120" loading="lazy" />
