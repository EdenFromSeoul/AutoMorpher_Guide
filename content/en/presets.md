---
title: "Preset Guide"
slug: "presets"
category: "User Guide"
description: "Save adjustments for an avatar pair as a preset, then load or edit them for future conversions."
order: 25
version: "3.4.1"
---

<div class="guide-intro">
  <p>A <strong>preset</strong> saves adjustments for an avatar pair so you can reuse them.<br>Save settings you use often, or share your settings with other users.</p>
</div>

<aside class="admonition tip">
  <strong>Try other users' presets and share your own!</strong>
  <p>Download and share presets in <b>💾｜preset-share</b> on our <a href="https://discord.gg/Czuxfw8ng8"><b>Discord server</b></a>.</p>
</aside>

<iframe class="youtube-embed" id="preset-video" src="https://www.youtube-nocookie.com/embed/1y4bThRyBIw" title="Preset guide video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 1. Before you begin

To **create, apply, or edit a preset**, assign the **Source Avatar**, **Source Clothes Object**, and **Target Avatar**.

- If you use a source profile instead of the source avatar, assign the **Profile** instead.

## 2. Prepare a preset

You can **import another user's preset or create your own**.

If you have already added the preset you want to use, go to [**3. Apply a preset**](#3-apply-a-preset).

<span id="2-load-a-preset" class="doc-anchor-alias" data-anchor-target="2-1-import-a-preset" aria-hidden="true"></span>

<span id="2-load-and-use-presets" class="doc-anchor-alias" data-anchor-target="2-1-import-a-preset" aria-hidden="true"></span>

<span id="2-add-preset-files" class="doc-anchor-alias" data-anchor-target="2-1-import-a-preset" aria-hidden="true"></span>

### 2-1. Import a preset

<span id="9-add-presets" class="doc-anchor-alias" data-anchor-target="preset-download" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-download">
<summary>Download and add presets from other users</summary>

Download a preset or receive one from another user for your **source avatar → target avatar** pair.

We also run a **💾｜preset-share** channel on our [**Discord server**](https://discord.gg/Czuxfw8ng8) where users can share presets.

1. Prepare the `.ksPreset` file.

   - For `.asset` or `.unitypackage` files, see [**Add directly through Unity**](#preset-unity-import).

2. Expand **Import / Export Preset Files** and click **Import**.

   ![File section and Import button outlined in red]({{BASE_PATH}}/media/presets/file-import-open-figma.webp)

3. Select one `.ksPreset` file in the file picker.
4. Click **OK** when **The preset was imported successfully.** appears.

   ![Preset import completed and OK button]({{BASE_PATH}}/media/presets/file-import-complete-figma.webp)

<h4 id="preset-import-conflict">If a preset with the same name already exists</h4>

If a duplicate-name window appears, choose one of the following options.

![Duplicate preset name with Overwrite and Save with a different name]({{BASE_PATH}}/media/presets/file-import-conflict-figma.webp)

- **Overwrite** replaces the existing preset with the imported contents.
- **Save with a different name** lets you enter a new preset name and click **Save** to add a separate preset.

![New preset name field and Save button]({{BASE_PATH}}/media/presets/file-import-rename-figma.webp)

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<details class="doc-optional-step" id="preset-unity-import">
<summary>Add directly through Unity (.asset / .unitypackage)</summary>

<div class="preset-file-types">

| File format | How to add it |
| --- | --- |
| `.unitypackage` | Open the Unity project you want to use, double-click the file, and click **Import**. |
| `.asset` | Open `Assets/@Eden_Tools/Kisetter/Presets` and move the file into it. |

</div>

If the **Select Preset** window is open, click **Refresh**.

- Check that the file was added correctly to `Assets/@Eden_Tools/Kisetter/Presets`.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<span id="4-create-a-new-preset-or-edit-an-existing-one" class="doc-anchor-alias" data-anchor-target="2-2-create-your-own-preset" aria-hidden="true"></span>

<span id="4-create-and-edit-presets" class="doc-anchor-alias" data-anchor-target="2-2-create-your-own-preset" aria-hidden="true"></span>

### 2-2. Create your own preset

Choose either **adjusting the settings yourself** or **saving the settings from the last conversion**.

#### Create by adjusting the settings

1. Expand **Create / Edit Preset** in the Kisetter window, then click **Create New Preset**.

   ![Locations of the Create New Preset and Edit Loaded Preset buttons]({{BASE_PATH}}/media/presets/create-edit-preset.png)

2. Adjust the settings you need in the editor.

   | Tab | What you can adjust |
   | --- | --- |
   | **BlendShape** | Select **Source Avatar** or **Target Avatar** to adjust the BlendShape values of its body mesh. |
   | **Matching** | Adjust bone and breast reference positions. |
   | **Options** | Adjust Kisetter's basic and advanced fitting options, such as Body Gap and Smooth. |

   <details class="doc-optional-step">
   <summary>Avatar view and visibility settings</summary>

   ![Avatar view, spacing, opacity, and outfit visibility settings]({{BASE_PATH}}/media/presets/avatar-view-settings.png)

   **Avatar View**: Side by side places the two avatars next to each other. Overlay displays them in the same position so you can compare their body shapes.

   **Avatar Spacing**: Adjusts the distance between the avatars in Side by side mode.

   **Source Opacity**: Adjusts the opacity of the source avatar.

   **Target Opacity**: Adjusts the opacity of the target avatar.

   **Show only working objects**: Temporarily hides Scene objects outside the current work.

   **Show Source Clothes**: Controls the visibility of the outfit on the source avatar. Available in Side by side mode.

   **Show Target Clothes**: Controls the visibility of the outfit on the target avatar.

   <button type="button" class="doc-details-close" data-details-close>Close avatar view details</button>
   </details>

   <details class="doc-optional-step">
   <summary>Body Shape Matching and preview</summary>

   ![Body Shape Matching and preview settings with the refresh button]({{BASE_PATH}}/media/presets/body-shape-preview.png)

   **Body Shape Matching**: Compensates for differences in body shape. Useful when the avatars have noticeably different breast sizes.

   **Preview**: Select On to see an approximate preview of the body shape matching result.

   **Refresh Body Shape Preview**: Updates the preview with your changed settings.

   <button type="button" class="doc-details-close" data-details-close>Close preview details</button>
   </details>

   <details class="doc-optional-step">
   <summary>BlendShape tab</summary>

   ![BlendShape tab and the Update Bone Pose button]({{BASE_PATH}}/media/presets/blendshape-adjustment.png)

   **Update Bone Pose for Current BlendShapes**: Click after changing BlendShape values to update the bone matching pose.

   Select **Source Avatar** or **Target Avatar**, then adjust the BlendShape values in the list using the sliders or numeric fields.

   Adjusting a BlendShape on the source avatar also adjusts the outfit's BlendShape if it has the same name.

   <br>

   **Source Body Mesh** and other body mesh fields: Assign meshes manually if the wrong mesh is selected or the body consists of multiple meshes.

   <button type="button" class="doc-details-close" data-details-close>Close BlendShape details</button>
   </details>

   <details class="doc-optional-step">
   <summary>Matching tab</summary>

   ![Breast and bone matching controls with the bone selection panel]({{BASE_PATH}}/media/presets/matching-adjustment.png)

   **Reset Matching**: Returns bone and breast matching adjustments to their initial state.

   <br>

   **Breast Matching**: Adjust the reference positions if they do not match the avatar's actual breast positions.

   Note: This is only available when Body Shape Matching at the top of the editor is enabled.

   **Breast Guides**: Select On to display the breast guide planes and reference points.

   **Breast Region**: In the Scene view, move the Y axis of the movement gizmo at the center of each guide plane to align it with the upper or lower edge of the breast region.

   Note: Match each avatar's guide planes to its actual breast positions. Do not place both avatars' guides at the same height.

   **Nipple Adjustment**: Drag to mark the most protruding point on each breast on the body mesh. Press Esc to cancel.

   <br>

   **Bone Matching**<br>
   **W(Move)**: Adjusts the position of the selected bone.<br>
   **E(Rotate)**: Adjusts the rotation of the selected bone.<br>
   **R(Scale)**: Adjusts the scale of the selected bone.<br>
   **Mirror**: Select On to adjust the corresponding bone on the opposite side at the same time. Select Off to adjust only one side.

   <button type="button" class="doc-details-close" data-details-close>Close matching details</button>
   </details>

   <details class="doc-optional-step">
   <summary>Options tab</summary>

   ![Basic and advanced fitting options, including Body Gap and Smooth]({{BASE_PATH}}/media/presets/fitting-options.png)

   **Body Gap**: Sets the minimum gap between the outfit and the avatar's body.

   **Automatically Assign Torso Mesh**: Automatically finds the avatar's body mesh. Disable this option to assign body meshes manually.

   **Body Shape Matching**: Compensates for differences in body shape between the source and target avatars.

   **Smooth**: Adjusts how strongly smoothing is applied to the deformation.

   **Fitting Settings**: Adjusts Fitting Iteration and Body Penetration Correction Iterations.

   <br>

   See [**Parameter Description**](../parameters/) for the basic concepts behind these options.

   <button type="button" class="doc-details-close" data-details-close>Close option details</button>
   </details>

3. Click **Save** in the editor to open the save window. Check **Preset Name**, **Source Avatar Name**, and **Target Avatar Name**, then click **Save** and confirm.
4. You return to Kisetter with the saved preset selected.

To edit an existing preset, choose it in **Select Preset**, click **Apply**, then click **Edit Loaded Preset**. The adjustment and saving steps are the same.

<details class="doc-optional-step" id="finish-or-cancel-editing" open>
<summary>Finish or cancel editing</summary>

If you have unsaved changes when you click **Return to Kisetter**, choose one of the following:

- **Save and Return**: Check the names in the save window and save the preset.
- **Return Without Saving**: Discard the changes from this editing session and return.
- **Continue Editing**: Return to the editor and keep adjusting.

<button type="button" class="doc-details-close" data-details-close>Close finish and cancel instructions</button>
</details>

<span id="3-save-the-last-conversion-as-a-preset" class="doc-anchor-alias" data-anchor-target="create-from-the-last-conversion-settings" aria-hidden="true"></span>

<span id="create-from-a-completed-conversion" class="doc-anchor-alias" data-anchor-target="create-from-the-last-conversion-settings" aria-hidden="true"></span>

#### Create from the last conversion settings

1. Complete the conversion with **Dress Avatar**. If working step by step, complete **Weighting**.
2. Click **Save Last Conversion as Preset** in the **Preset** section.

   ![Location of the Save Last Conversion as Preset button]({{BASE_PATH}}/media/presets/save-last-conversion.png)

3. Check the following fields in the save window and edit the names if needed.

   | Field | What to enter |
   | --- | --- |
   | **Preset Name** | The preset's name |
   | **Source Avatar Name** | The source avatar's name |
   | **Target Avatar Name** | The target avatar's name |

   ![Save window with preset, source avatar, and target avatar name fields]({{BASE_PATH}}/media/presets/save-preset-dialog.png)

4. Click **Save**, then confirm in the confirmation dialog.
5. When the save completion message appears, the preset has been created and is automatically selected in the Kisetter window.

!!! info "Saves the settings from the last conversion, not the current values"
    To save changes made after conversion, complete another conversion or use <strong>Create by adjusting the settings</strong>.

<details class="doc-optional-step" id="preset-names-and-save-location">
<summary>Preset names and save location</summary>

- Presets are saved in `Assets/@Eden_Tools/Kisetter/Presets`.
- Saving with the same name for the same avatar pair prompts you to overwrite. Use a different name to keep the existing preset.

<button type="button" class="doc-details-close" data-details-close>Close naming and save location details</button>
</details>

<span id="6-what-presets-save-and-important-notes" class="doc-anchor-alias" data-anchor-target="preset-contents" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-contents">
<summary>What presets save and what they leave out</summary>

| Category | Contents |
| --- | --- |
| **Saved adjustments** | Avatar body mesh BlendShape values; avatar bone position, rotation, and scale adjustments; breast reference positions; and supported fitting options |
| **Not included** | Adjustments to the outfit itself; the actual avatar and outfit objects in the Scene; and finished outfit Prefabs or Mesh files |

<button type="button" class="doc-details-close" data-details-close>Close saved contents details</button>
</details>

<span id="load-and-apply" class="doc-anchor-alias" data-anchor-target="3-apply-a-preset" aria-hidden="true"></span>

<span id="apply-a-preset" class="doc-anchor-alias" data-anchor-target="3-apply-a-preset" aria-hidden="true"></span>

## 3. Apply a preset

1. Click **Select Preset** in the **Preset** section.

   ![Select Preset button outlined in red]({{BASE_PATH}}/media/presets/file-select-open-figma.webp)

2. Use the **Source Avatar** and **Target Avatar** names to find a preset for the avatars you want to use.

   ![Avatar filters, preset selection, and Apply button]({{BASE_PATH}}/media/presets/file-select-list-figma.webp)

3. Select a preset from **Presets**, then click **Apply**.
4. Check that the applied **BlendShape** values and settings suit your outfit. If you need to make changes, use **Edit Loaded Preset** to adjust and save them. Once the settings are ready, click **Dress Avatar** to run the conversion.

!!! warning "Check any messages shown when applying a preset"
    If a message says the bone settings differ, check the result and make any needed adjustments with <strong>Edit Loaded Preset</strong>.

<span id="5-restore-the-state-before-applying-a-preset" class="doc-anchor-alias" data-anchor-target="preset-restore" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-restore" open>
<summary>Restore the state before applying a preset</summary>

![Location of the Restore Previous button]({{BASE_PATH}}/media/presets/restore-previous.png)

Click **Restore Previous** to restore the settings and BlendShape values from immediately before the last preset was applied.

You cannot restore these settings after changing the source avatar or profile, outfit, or target avatar.

This does not undo previously generated conversion results.

<button type="button" class="doc-details-close" data-details-close>Close restore instructions</button>
</details>

<span id="3-save-and-share-your-presets" class="doc-anchor-alias" data-anchor-target="4-export-and-share-presets" aria-hidden="true"></span>

## 4. Export and share presets

Got a conversion result you are happy with? Share your preset in the [**💾｜preset-share** channel](https://discord.gg/Czuxfw8ng8).

<span id="8-export-presets" class="doc-anchor-alias" data-anchor-target="preset-share" aria-hidden="true"></span>

<details class="doc-optional-step" id="preset-share" open>
<summary>Export through Kisetter and share</summary>

1. Expand **Import / Export Preset Files** and click **Export**.

   ![File section and Export button outlined in red]({{BASE_PATH}}/media/presets/file-export-open-figma.webp)

2. Use the **Source Avatar** and **Target Avatar** names to find the preset you want to export in the list, select it, then click **Export**.

   ![Preset selection and Export button]({{BASE_PATH}}/media/presets/file-export-list-figma.webp)

3. Choose a location and file name, then save it as a `.ksPreset` file.
4. Click **OK** when **The preset was exported successfully.** appears.

   ![Preset export completed and OK button]({{BASE_PATH}}/media/presets/file-export-complete-figma.webp)

To share presets, export each one and share the files as they are or bundle them in a ZIP file.

If you share presets in **💾｜preset-share** on our [**Discord server**](https://discord.gg/Czuxfw8ng8), follow the channel's **post guidelines**.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<details class="doc-optional-step" id="preset-unity-export">
<summary>Export directly through Unity (.unitypackage)</summary>

1. In Unity's Project window, open `Assets/@Eden_Tools/Kisetter/Presets` and select the presets to share. You can select several at once.

   ![Presets folder and saved presets in Unity's Project window]({{BASE_PATH}}/media/presets/preset-folder.png)

2. Choose **Right-click → Export Package…**, check which files are included, then click **Export…** and choose a file name and location.

   ![Selecting presets and choosing Export Package from the context menu]({{BASE_PATH}}/media/presets/export-package.png)

Open the `.unitypackage` in the destination project and click **Import**.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<span id="7-unavailable-buttons-or-missing-presets" class="doc-anchor-alias" data-anchor-target="5-troubleshooting" aria-hidden="true"></span>

## 5. Troubleshooting

<details class="doc-optional-step" id="preset-file-help-1">
<summary>File import or export buttons are hidden or unavailable</summary>

Expand **Import / Export Preset Files**. If the buttons are unavailable, finish any conversion, editing, or saving in progress and stop Unity playback if it is running.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<details class="doc-optional-step" id="preset-file-help-2">
<summary>A file cannot be imported or uses an unsupported version</summary>

Check that the file is a `.ksPreset` exported by Kisetter. If its version is unsupported, check which Kisetter version created it.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<details class="doc-optional-step" id="preset-file-help-3">
<summary>Overwrite is unavailable in the duplicate-name window</summary>

Choose **Save with a different name** and save with another preset name.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<details class="doc-optional-step" id="preset-file-help-4">
<summary>Import succeeds, but the preset cannot be applied</summary>

Choose a preset for the current avatar pair in **Select Preset**, then click **Apply**. Check any messages shown when applying it.

<button type="button" class="doc-details-close" data-details-close>Close instructions</button>
</details>

<details class="doc-optional-step">
<summary>Select Preset or Create New Preset is unavailable</summary>

Check that the source avatar (or source profile), outfit, and target avatar are all assigned. Exit Unity's Play mode and finish any conversion, preset editing, or saving currently in progress.

<button type="button" class="doc-details-close" data-details-close>Close solution</button>
</details>

<details class="doc-optional-step">
<summary>Edit Loaded Preset is unavailable</summary>

First, click **Select Preset**, select a preset, and click **Apply**.

<button type="button" class="doc-details-close" data-details-close>Close solution</button>
</details>

<details class="doc-optional-step">
<summary>Save Last Conversion as Preset is unavailable</summary>

Check that you have completed a full conversion with **Dress Avatar** in the current session. If you worked step by step, you must finish **Weighting**. The source and target avatars must be the same as when the conversion completed. If you already saved that conversion as a preset, complete another conversion to enable the button again.

<button type="button" class="doc-details-close" data-details-close>Close solution</button>
</details>

<details class="doc-optional-step">
<summary>A preset does not appear in the list</summary>

Check the **Source Avatar / Target Avatar** filters. If you added the file through Unity, place the `.asset` directly in the Presets folder and click **Refresh**.

<button type="button" class="doc-details-close" data-details-close>Close solution</button>
</details>

<details class="doc-optional-step">
<summary>A message says the preset cannot be applied</summary>

Check that the preset matches the current source and target avatar pair.

<button type="button" class="doc-details-close" data-details-close>Close solution</button>
</details>

When you are ready, return to the [Automatic Outfit Fitting Guide](../auto-fitting/) to check your options and run the conversion.
