---
title: "Automatic Outfit Fitting Guide"
slug: "auto-fitting"
category: "User Guide"
description: "Complete workflow for automatically fitting an outfit to a target avatar, with optional pre-adjustment and additional Mesh editing."
order: 20
---

<div class="guide-intro">
  <p>⚫ This guide covers the <strong>complete workflow for automatically fitting an outfit to the Target Avatar</strong>.</p>
  <p>⚫ The default is <strong>Skip Pre-adjustment</strong>. When needed, select <strong>Enable Pre-adjustment</strong> to make additional bone and Mesh adjustments before the transformation.</p>
  <p>⚫ The bone adjustment feature from the former <strong>Manual Fitting Mode</strong> is available before the transformation when you select <strong>Enable Pre-adjustment</strong>.</p>
</div>

<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/NGmrRP2BJxk" title="Auto Fitting demo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> ⚠️ **Note!** This video was recorded for an earlier version. The startup procedure, option names, and behavior may differ from the current version. An updated video will be added soon.

!!! tip "💡 Tips for Improving Conversion Quality"
    - The more similar the body shapes of the Source Avatar and Target Avatar are, the better the conversion quality will be.
    - We especially recommend matching areas such as foot angle and breast size as closely as possible before conversion.

## [1] Preparation

### 1. 🧍‍♂️Source Avatar Setup

1. Place the avatar in the Scene, then **reset its rotation and scale**.
2. Verify that **the Animator and** the **Skinned Mesh Renderer corresponding to the** torso are present on the avatar.

    ![]({{BASE_PATH}}/media/093321aadd4b9de3.png)

3. Adjust the BlendShapes **so that** the Body Mesh **is fully visible without any parts being scaled down or obscured**.

    ![]({{BASE_PATH}}/media/466cf73fc279e345.png)


### 1. 👕Source Clothes Setup

1. Place the outfit in the Scene, make it a child of the **Source Avatar**, then adjust its position and scale.

    ![image.png]({{BASE_PATH}}/media/e0968448f39f5435.png)

2. Adjust the outfit’s **BlendShapes** to match the Source Avatar.

    ![image.png]({{BASE_PATH}}/media/d89034290e6953d7.png)

3. Also adjust the avatar’s BlendShapes, such as 👠 **Foot Heel** or 👙 **Breast**, to match the outfit.

    ![image.png]({{BASE_PATH}}/media/ebdd8f821892ae10.png)


### 1-2. 📄 Using a Separately Created Profile

You do not need to follow these preparation steps when using an included Profile.

<details class="doc-optional-step">
<summary>How to Prepare and Configure a Custom Profile</summary>

1. Prepare the Profile.
- Profile path: `Assets\@Eden_Tools\Kisetter\Profiles`
- If the Profile you want does not appear in the list, manually add the Profile folder to the path above.
    - Example Profile folder structure:
    Profiles
    └─ ProfileName
        ├─ ProfileName.json
        └─ ProfileName.eb

        ![image.png]({{BASE_PATH}}/media/9e1066872143049d.png)

        ![image.png]({{BASE_PATH}}/media/1f6499e157008668.png)

1. If the Profile uses a Foot_Heel adjustment, adjust the Target Avatar’s BlendShapes so that its foot shape is similar.
    - Please use a **Foot_Heel** or **HighHeel** Profile that matches the outfit.

<button type="button" class="doc-details-close" data-details-close>Close profile instructions</button>
</details>

### 2. 🧍Target Avatar Setup

1. Place the avatar in the scene, then **reset its rotation and scale**.
2. Verify that **the Animator and** the **Skinned Mesh Renderer corresponding to the** torso are present on the avatar.

    ![]({{BASE_PATH}}/media/f32c8c8362afe00c.png)

3. Adjust the BlendShape **so that** the Body Mesh **is fully visible without any parts being scaled down or obscured**.

    ![]({{BASE_PATH}}/media/63feca0954364a0e.png)

    - If the Source Avatar uses a Foot Heel adjustment, adjust the Target Avatar’s BlendShapes so that the foot shape is similar.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/7307a7d1c11dca6e.png" alt="Bad Case 1" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/00934d0789ea93c5.png" alt="Good Case 1" />
  </figure>
  <figure>
    <figcaption>Bad Case</figcaption>
    <img src="{{BASE_PATH}}/media/0020676efddbe42b.png" alt="Bad Case 2" />
  </figure>
  <figure>
    <figcaption>Good Case</figcaption>
    <img src="{{BASE_PATH}}/media/3c3912e4aed163f4.png" alt="Good Case 2" />
  </figure>
</div>

## [2] Morphing in Progress

### 3. Open きせった (Kisetter)

1. From the Unity Editor menu bar, select EDEN LABS > きせった (Kisetter).

   ![Unity Editor menu path for opening きせった]({{BASE_PATH}}/media/c5c66a352ee78bc4.png)

2. きせった (Kisetter) opens in a separate editor window.

### 4. きせった (Kisetter) Setup

1. In the opened きせった (Kisetter) window, assign the previously prepared **avatar and outfit**.

    - **Source Avatar Object**: The original avatar object for the outfit
    - **Source Clothes Object**: The outfit object
    - **Target Avatar Object**: The target avatar object
2. When using a Profile

    - Select the **Use Source Profile** button.
    - **Profile**: The Profile that matches the outfit you want to use
    - **Source Clothes Object**: The outfit object
    - **Target Avatar Object**: The avatar object to fit the outfit to


### 5. きせった (Kisetter) Option Setup

1. **Body Gap**
    - This parameter sets the minimum distance between the garment and the body.
    - If the body is penetrating the garment significantly, increase this value.

2. **Pre-adjustment**
    - This option lets you choose whether to adjust the outfit bones before the transformation.
    - The default is **Skip Pre-adjustment**. Select **Enable Pre-adjustment** when you want to adjust the bones before the transformation.

<details class="doc-optional-step">
<summary>If you select “Enable Pre-adjustment”: View bone adjustment instructions</summary>

Enable pre-adjustment to adjust the clothing shape with Bone Adjustment and additional Mesh editing during fitting.

![]({{BASE_PATH}}/media/300303c039d540ee.png)

**Bone Controls**

![]({{BASE_PATH}}/media/0403a56fedd1ed35.png)

- You can change the operation mode by clicking **W: Move / E: Rotation / R: Scale** at the top, or by pressing **W / E / R** on the keyboard.
    - **W: Move**: Move the Position
    - **E: Rotation**: Rotate the selected bone
    - **R: Scale**: Adjust the Scale

**Mirror**

![]({{BASE_PATH}}/media/7b0f0c16790de3d6.png)

- If there is a symmetrical bone on the opposite side, you can move both sides together using the **Mirror** button.
- When **Mirror: On** is enabled, the movement is mirrored along the avatar’s X-axis.

**Bone List**

![]({{BASE_PATH}}/media/df7b1834b78e0a74.png)

- This is the list of bones that can be adjusted.
- Adjustable bones are displayed in the Bones List.
    - **Bone List: Humanoid Bone Only**
        - Only Humanoid Bones such as Hip and Chest are displayed in the Bone List.
    - **Bone List: Show Other Bones**
        - Child bones other than Humanoid Bones such as Hip and Chest are also displayed in the Bone List.
- **Humanoid Bone Picker**
    - You can select a bone by clicking the desired body part.
- You can also select and adjust bones by clicking the blue points on the avatar in the Scene view.
- **We recommend using this option to make additional detailed adjustments for items such as hats, gloves, and shoes.**

![]({{BASE_PATH}}/media/4db99de895e9a2be.png)

<button type="button" class="doc-details-close" data-details-close>Close pre-adjustment instructions</button>
</details>

3. **Preserve Shoe Shape**
    - Select one of the following two options.
    - **Preserve Shoe Shape** (Default)
        - Keeps the shape of meshes around the feet.
    - **Fit to Feet**
        - Deforms the shoes to match the shape of the feet.
4. **[Advanced Option] - [Save Settings] - Save Result As BlendShape**
    - When enabled, the transformed result is saved as a BlendShape rather than being applied directly to the mesh.
5. **[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar**
    - This option reassigns the weights of the clothing mesh based on the target avatar's armature.
    - Please enable this only when you need to connect the costume directly to the avatar's bones without using Modular Avatar or similar features.
- For detailed explanations of other parameters, please refer to the following document.
    - [Parameter Description](../parameters/)

### 6. Performing the Transformation

Click **Dress Avatar** to proceed with the transformation.

- Use **the Step-by-Step Progress** below to proceed with Fitting and Weighting step by step.

!!! info "Optional · Adjust After Conversion"
    Click Adjust After Conversion to perform additional mesh editing. Use it when you want to make further adjustments after conversion.

## [3] Checking the Results

### 7. Checking the Fitting Results

### 7-1. Checking the Fitting Results

- Check whether the morphed result has been applied correctly to the avatar.
- If the transformation resulted in an undesired shape, and you enabled **[Advanced Option] - [Save Settings] - Save Result As BlendShape**, you can adjust the Kisetter_fit BlendShape values added to the outfit to restore the original shape.

### 7-2. VRChat - Modular Avatar

- The Modular Avatar is merely an example; you may use other tools, such as VRCFury, to configure the outfit’s bones to follow the avatar’s movements.
    - However, if you have checked [Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar, the outfit is already set to follow the avatar’s bones.
- Right-click the outfit and select [Modular Avatar] - [Setup Outfit] to configure the outfit’s bones to follow the avatar.

![]({{BASE_PATH}}/media/a477756018a1e22d.png)

- Table of Contents
