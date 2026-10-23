---
title: "Adjust color and tone"
slug: "texture-studio-color-adjustment"
category: "User Guide"
description: "Use Set Hue, Hue Shift, intensity, brightness, contrast, and gamma to adjust outfit and hair colors."
order: 46
version: "3.5.0"
parent: "texture-studio"
---

For mesh and UV selection, previews, and saving, see the [Texture Studio Guide](../texture-studio/).

## [1] Choose a color

1. Select the meshes and UV regions.
2. Open **Set Hue**.
3. Choose a color from the palette, or enter a **HEX** code and press Enter.
   1. You can also reuse **Recent Colors**.
4. Adjust tone while checking the Scene view. These examples use `#57AAB8`.

**Outfit example**

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-before.webp" alt="Original beige outfit" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>After setting the hue</figcaption><img src="{{BASE_PATH}}/media/texture-studio/outfit-color.webp" alt="Teal outfit and color selection controls" width="1905" height="1065" loading="lazy" /></figure>
</div>

**Hair example — multiple meshes together**

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-before-closeup.webp" alt="Original pale pink hair" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>After setting the hue</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-color-closeup.webp" alt="Front, head, side, and twintail hair meshes changed to teal together" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Texture view and material preview

- **Texture View** shows texture colors before material correction.
- **Material Preview** reflects supported lilToon Main Texture color correction in the palette and UV view. It does not reproduce Scene lighting, shadows, reflections, emission, or transparency.
- **Texture HEX / Preview HEX** show the color codes before and after correction at the selected reference point.
- **Reselect Reference Point in Texture** changes the palette's reference UV. It does not change the selected editing region.

<img src="{{BASE_PATH}}/media/texture-studio/material-preview.webp" alt="Material preview with Texture HEX, Preview HEX, and reference UV controls" width="399" height="665" loading="lazy" />

## [2] Shift existing hues and adjust tone

In <strong>Hue Shift</strong>, move a slider or enter a value in its number field. `0` means no adjustment.

The examples below show the result of adjusting each control.

| Control | Lower values | Higher values |
| --- | --- | --- |
| <strong>Hue Shift (°)</strong> | Shift in the opposite direction around the color wheel | Shift hue around the color wheel |
| <strong>Intensity</strong> | Reduce saturation toward neutral gray | Make existing colors more vivid |
| <strong>Brightness</strong> | Darken the overall result | Lighten the overall result |
| <strong>Contrast</strong> | Soften the difference between light and dark | Strengthen the difference between light and dark |
| <strong>Gamma</strong> | Lighten midtones | Darken midtones |

### Hue Shift (°)

Shift hues around the color wheel. Setting this to `+120°` changes the pale pink hair to mint.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · all values 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="Original pink hair with Hue Shift and all four tone controls set to zero" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>Hue Shift +120°</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-hue-shift-closeup.webp" alt="Hue Shift +120° — multiple hair meshes adjusted together" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Intensity

Adjust color saturation. Setting this to `+70` makes the pink more vivid.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · all values 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="Original pink hair with Hue Shift and all four tone controls set to zero" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>Intensity +70</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-intensity-closeup.webp" alt="Intensity +70 — multiple hair meshes adjusted together" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Brightness

Lighten or darken the whole selected region. Setting this to `-25` darkens both highlights and shadows.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · all values 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="Original pink hair with Hue Shift and all four tone controls set to zero" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>Brightness −25</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-brightness-closeup.webp" alt="Brightness −25 — multiple hair meshes adjusted together" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Contrast

Adjust the difference between light and dark areas. Setting this to `+60` emphasizes the contrast between hair strands.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · all values 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="Original pink hair with Hue Shift and all four tone controls set to zero" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>Contrast +60</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-contrast-closeup.webp" alt="Contrast +60 — multiple hair meshes adjusted together" width="1905" height="1065" loading="lazy" /></figure>
</div>

### Gamma

Adjust midtone brightness. Positive values darken midtones; negative values lighten them. This example uses `+60`.

<div class="doc-media-grid doc-media-grid-2">
  <figure><figcaption>Before · all values 0</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-shift-baseline-closeup.webp" alt="Original pink hair with Hue Shift and all four tone controls set to zero" width="1905" height="1065" loading="lazy" /></figure>
  <figure><figcaption>Gamma +60</figcaption><img src="{{BASE_PATH}}/media/texture-studio/hair-gamma-closeup.webp" alt="Gamma +60 — multiple hair meshes adjusted together" width="1905" height="1065" loading="lazy" /></figure>
</div>
