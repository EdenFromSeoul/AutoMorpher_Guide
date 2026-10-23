---
title: "Texture Studio Guide"
slug: "texture-studio"
category: "User Guide"
description: "Learn how to select the regions you want, freely edit their colors, and save the results."
order: 45
version: "3.5.0"
---

<div class="guide-intro">
  <p>⚫ <strong>Texture Studio</strong> adjusts mesh texture colors in Unity while showing the result in the Scene view.</p>
  <p>⚫ Select meshes and UV regions, use the color tools you need, then preview and save the result.</p>
</div>

| Feature | What it does |
| --- | --- |
| Mesh and UV selection | Recolor an entire mesh or adjust the color of just the parts you select. |
| [Set Hue / Hue Shift](../texture-studio-color-adjustment/) | Give clothing or hair the color you want, or make existing colors brighter or more vivid. |
| [Gradients](../texture-studio-gradient/) | Create smooth blends between multiple colors. |
| [Automatic color adjustment](../texture-studio-auto-color/) | Match colors across different parts for a consistent look. |
| Preview / history | See the difference before and after editing, and recover an earlier state when needed. |
| Save | Keep the finished colors as textures and materials for use on your avatar. |

## [1] Prepare the workspace

1. Open **Texture Studio (Early Access)** at the top of the **きせった(Kisetter)** window.
2. Assign an outfit, hair object, or parent under **Meshes to Edit** and click **Load**. You can also drag meshes from the Hierarchy into the central drop area.
3. Click a **mesh name** to make it the main editing target. Its row shows **Editing**.
4. Select a texture tab in **Texture UV** on the right. Material slots sharing a texture are listed together.

<img src="{{BASE_PATH}}/media/texture-studio/outfit-meshes.webp" alt="Scene and Texture Studio UI with the outfit mesh selected" width="1905" height="1065" loading="lazy" />

## [2] Select meshes and UV regions

### Adjust multiple hair meshes together

1. Click the name of one hair mesh to make it the main editing target.
2. Click **Include** for the other hair meshes you want to adjust.
3. Check that those rows show **Included** and the heading on the right shows the number of added meshes.

<img src="{{BASE_PATH}}/media/texture-studio/hair-setup-closeup.webp" alt="The main mesh and additional hair meshes included for simultaneous adjustment" width="1905" height="1065" loading="lazy" />

Changing the main mesh clears the **Included** meshes, so choose the main mesh first.

The **On/Off eye icon** activates or deactivates the mesh object.

Use the mesh name and **Included** column to choose which meshes to edit.

### Select UV regions

UVs are connected sections of a mesh laid out on the texture.

Color edits apply to the selected UV regions.

| Action | Result |
| --- | --- |
| Click an island | Toggle that island's selection. |
| Drag in the UV view | Select a region with a box. |
| Hold Shift / Ctrl while selecting | Add to / remove from the selection. |
| **Select All** | Select UV regions across all editing meshes and texture slots. |
| **Deselect All** | Clear UV selections across all editing meshes and texture slots. |
| **Show UV** | Show UV lines over the texture. |
| **Visualize UV on Mesh** | Show UV lines on meshes in the Scene view. |

### Select and recolor individual parts

You can select separate UV regions within a single mesh to give each part a different color.

The examples below show the fringe adjusted one part at a time.

1. Keep only the fringe mesh as the editing target and click **Deselect All**.
2. Select the desired islands in Texture UV on the right. Turn on **Visualize UV on Mesh** to check the selection using the yellow lines in the Scene view.
   - You can also click a part directly in the Scene view to select it.
3. Choose a color in **Set Hue**. Turn off **Visualize UV on Mesh** when checking the resulting color.
4. Before moving to the next section, click **Deselect All** and select the new region. Previous colors remain applied while you adjust the newly selected region separately.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>① Center fringe · UV selection</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-center-selection-closeup.webp" alt="① Center fringe · UV selection" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>① Center fringe · red applied</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-center-color-closeup.webp" alt="① Center fringe · red applied" width="1905" height="1065" loading="lazy" /></figure>
</div>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>② Side fringe sections · UV selection</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-sides-selection-closeup.webp" alt="② Side fringe sections · UV selection" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>② Side fringe sections · green added</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-sides-color-closeup.webp" alt="② Side fringe sections · green added" width="1905" height="1065" loading="lazy" /></figure>
</div>

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>③ Short curved strand · UV selection</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-strand-selection-closeup.webp" alt="③ Short curved strand · UV selection" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>③ Short curved strand · gold added</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-parts-strand-color-closeup.webp" alt="③ Short curved strand · gold added" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Example: adjust only the eyes

1. Select the mesh containing the eyes as the main target.
2. Open the texture tab containing the eyes and click **Deselect All**.
3. Click each eye's UV island as shown below. Confirm that only those two regions have yellow UV lines.
4. Adjust their color while leaving the skin and eyelashes unchanged.

<img src="{{BASE_PATH}}/media/texture-studio/eyes-uv-selection.webp" alt="Only the two eye UV islands selected on the face texture" width="1905" height="1065" loading="lazy" />

<img src="{{BASE_PATH}}/media/texture-studio/eyes-color.webp" alt="Teal eyes after a UV-only color edit, with the facial skin unchanged" width="1905" height="1065" loading="lazy" />

Use the same steps to select the **facial skin island**. The image below shows the selection before recoloring. If the body skin uses a separate mesh or texture, adjust that region separately.

<img src="{{BASE_PATH}}/media/texture-studio/skin-uv-selection.webp" alt="Facial skin UV selected with the hue shift panel open" width="1905" height="1065" loading="lazy" />

## [3] Adjust color and tone

Choose a color or shift existing hues, then adjust intensity, brightness, contrast, and gamma.

This example changes a beige outfit to teal.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · beige outfit</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="Before · beige outfit" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>After · teal outfit</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-color.webp" alt="After · teal outfit" width="1905" height="1065" loading="lazy" /></figure>
</div>

[View instructions and outfit / hair examples →](../texture-studio-color-adjustment/)

## [4] Create a gradient

Apply a gradient along the direction and length of a line drawn in UV space.

This example adds a white, yellow, and pink gradient to the hair.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · pale pink hair</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-before.webp" alt="Before · pale pink hair" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>After · white, yellow, and pink gradient</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-gradient.webp" alt="After · white, yellow, and pink gradient" width="1905" height="1065" loading="lazy" /></figure>
</div>

[View instructions and outfit / hair examples →](../texture-studio-gradient/)

## [5] Adjust colors automatically

Automatically adjust selected regions toward a reference color picked on another mesh.

This example brightens the outfit texture using the sleeve as a reference.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · beige outfit</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="Before · beige outfit" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>After · automatically matched using the sleeve</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-auto.webp" alt="After · automatically matched using the sleeve" width="1905" height="1065" loading="lazy" /></figure>
</div>

[View instructions and outfit / hair examples →](../texture-studio-auto-color/)

## [6] Preview and undo

### Compare with the original

Turn off **Preview Edited Result** to show the original state of registered meshes. Edits are retained; turn it back on to see the result again.

<img src="{{BASE_PATH}}/media/texture-studio/preview-original-closeup.webp" alt="Original hair displayed with edited preview off and edit settings retained" width="1905" height="1065" loading="lazy" />

### History and restoring the original

| Control | Result |
| --- | --- |
| **Undo** / Ctrl+Z | Reverse the latest editing step. |
| **Redo** / Ctrl+Y | Reapply an undone step. |
| **Maximum undo steps** | Set the history capacity: default 30, range 1–100. |
| **Revert** on a mesh row | Restore that mesh's UV regions across all its texture slots. |
| **Revert All** | Restore all edits to the original state. |

Overlapping UV regions on a shared texture can affect other meshes, so check the Scene after restoring.

## [7] Save textures and materials

1. Expand **Save**.
2. Choose the **Material Save Mode**.
3. Choose a **Save location** and **Save Suffix**.
4. Click **Save**. Edited textures are saved as PNGs and connected to materials using the chosen method.
5. Follow the prompt to continue editing or finish.

<img src="{{BASE_PATH}}/media/texture-studio/save-options.webp" alt="New or existing material, destination folder, and filename suffix options" width="940" height="235" loading="lazy" />

| Setting | Use |
| --- | --- |
| **Create New Material** | Create a separate material and apply it to the edited mesh. Use this for a color variant. |
| **Apply to Existing Material** | Update the existing material. Other objects sharing it may also change. |
| **Same folder as original** | Save in the same folder as the original assets. |
| **Choose folder** | Select a destination under the project's `Assets` directory. |

Saving makes the result the baseline for further edits and clears the previous edit history.
