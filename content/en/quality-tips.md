---
title: "Tips for Improving Fit"
slug: "quality-tips"
category: "Troubleshooting"
description: "Improve fitting quality around the chest, feet, shoes, hats, and gloves."
order: 80
---

!!! tip "💡 Tips for Improving Conversion Quality"
    - The more similar the body shapes of the Source Avatar and Target Avatar are, the better the conversion quality will be.
    - We especially recommend matching areas such as foot angle and breast size as closely as possible before conversion.

## 👚How to Fix Chest Deformation Caused by Body Shape Differences

If there is a significant difference in body type between avatars, the transformation may not occur properly,

and **the shape**may often become **distorted**, particularly **in the chest area**.

In such cases, if the original avatar or outfit has **a Shape Key that allows you to adjust the chest size**,

**it is helpful to** use that Shape Key **to align the chest shape as closely as possible with the target avatar**

before proceeding with the deformation.

**Example) Shinano → Milltina**

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Default fitting result (Shape Key not adjusted)</figcaption>
    <img src="{{BASE_PATH}}/media/79d070c14fc47913.png" alt="Default fitting result (Shape Key not adjusted)" />
  </figure>
  <figure>
    <figcaption>Result after adjusting the Shape Key (Big Breast 100)</figcaption>
    <img src="{{BASE_PATH}}/media/4f2ffb4ff1cc49bf.png" alt="Result after adjusting the Shape Key (Big Breast 100)" />
  </figure>
</div>

### Adjustments using mesh editing tools

**Select [Enable Pre-adjustment] to adjust areas with significant body shape differences first and achieve a more natural fitting result.**

- Select **[Enable Pre-adjustment]**, then adjust the clothing shape with Bone Adjustment and additional Mesh editing.
- Then, use **a mesh editing tool such as Mesh Studio**to further adjust **the converted clothing**.
    - In particular, adjust areas with significant body shape differences, such as the chest, to match the shape of the Source Clothes Object.
- Adjusting in this way will yield results that fit the avatar’s body shape more naturally overall.

![]({{BASE_PATH}}/media/4d7849ac3b32aab7.png)

---

## 🦶 How to Perform Foot Deformation Stably

Since this tool **takes the shape of the feet into account**during the transformation process,

**the more similar the foot shapes** of the original avatar and the target avatar **are**, the more stable the results will be.

Therefore, before proceeding with the transformation,

we recommend**adjusting the foot shapes of the Source Avatar and Target Avatar**to be**as identical as possible**.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/7307a7d1c11dca6e.png" alt="Bad Case" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/00934d0789ea93c5.png" alt="Good Case" />
  </figure>
</div>

---

## ⚠️ Solution for when shoes become distorted

If the shoes appear squashed or distorted even after adjusting the foot shape,

please select **`Preserve Shoe Shape` in the Basic Option**.

This option keeps the shape of meshes around the feet,

helping prevent the shoes from becoming squashed or losing their original shape.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Result with "Fit to Feet" selected</figcaption>
    <img src="{{BASE_PATH}}/media/fccaf6469d47c205.png" alt="Result with &quot;Fit to Feet&quot; selected" />
  </figure>
  <figure>
    <figcaption>Result with "Preserve Shoe Shape" selected</figcaption>
    <img src="{{BASE_PATH}}/media/2386b5110acd4ad5.png" alt="Result with &quot;Preserve Shoe Shape&quot; selected" />
  </figure>
</div>

---

## 🥿 When the shoe flattens out like a puddle

- If the shoe flattens out like a puddle, please check whether "Shrink" is applied to the Foot part of the Source Avatar.
<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/f2b4b7949a1fc65d.png" alt="Bad Case" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/883788331c7a228d.png" alt="Good Case" />
  </figure>
</div>


### a. How to adjust the foot with pre-adjustment

- **After selecting [Enable Pre-adjustment], you can directly adjust the foot size.**
    - **A scaleSupportBone**for adjusting the shoe scale is created below the converted clothing’s Armature, directly above the Foot bone.
    - **Adjusting the scale and position** of this bone allows you to fit the foot area more comfortably.

![]({{BASE_PATH}}/media/db67a2c69d60ef36.png)

---

## 🎩🧤 How to Handle Weighting for Hats and Gloves

Currently, きせった (Kisetter) **does not support automatic position adjustment for clothing bones attached to the head or hands.**

1. After selecting **[Enable Pre-adjustment]**, adjust the position of gloves or hats using the bones.
2. If you have disabled**[Advanced Option] - [Weighting] - [Transfer Weight To Avatar]**, you can manually adjust the bone positions after the transfer to achieve the desired placement.

---

## 👕 How to Handle Clothing Already Worn by the Avatar

きせった (Kisetter) works properly **only when the outfit has its own armature**.

However, even if the avatar is already wearing the default outfit or the outfit is not separated into a separate prefab,

you may still want to modify that outfit.

In such cases, you can follow the steps shown in the attached video.

<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/FgtGvQu43Rg" title="Quality Tips demo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

1. **Copy the existing avatar**.
2. **Remove the Animator and any unnecessary components**from the copied avatar.
    1. In particular, you must delete avatar-related components such as the VRC Avatar Descriptor and Pipeline Manager to avoid issues when uploading to VRChat.
3. **Delete unnecessary meshes, such as the Body Mesh**, to leave only the outfit.
4. Move the object containing only the outfit to be a child of the existing avatar (below it in the hierarchy).
5. **If you use**this object **as a costume prefab**, you can apply transformations using the きせった (Kisetter).

By using this method, **even the default avatar outfit**—which isn’t separated into distinct parts— **can be used as a target for deformation.**

---

## 🔗 How to Create a BlendShape That Works Together with Another BlendShape

BlendShape Generator is designed with the assumption that each BlendShape is generated **as a standalone BlendShape**.

If you want to create a BlendShape that is used while another specific BlendShape is already applied, please follow the steps below.

- The video below shows an example of creating `Breast_Small` and `Breast_Flat (With Small)`.

<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/zTOce_H2Kds" title="Quality Tips demo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

1. If the base BlendShape does not exist yet, first create the base BlendShape with BlendShape Generator.
    - In the video, `Breast_Small` is created first.
2. Set the Weight of the base BlendShape to **100** on both the avatar and the outfit.
    - In the video, **BlendShape Controller** is used to adjust the values on multiple Meshes at once.
3. In BlendShape Generator, select the BlendShape you want to create next.
    - In the video, `Breast_Flat` is selected.
    - At this step, **if the base BlendShape is checked, please uncheck it.**
        - In the video, `Breast_Small` is unchecked.
4. Generate the BlendShape.
5. Check that the generated BlendShape works as intended.
