---
title: "Auto Fitting Mode"
slug: "auto-fitting"
category: "User Guide"
description: "Complete workflow for automatically fitting an outfit to a target avatar."
order: 20
---

```jsx
⚫ This mode automatically adjusts and deforms the outfit to fit the Target Avatar.
⚫ If you need to adjust bones manually, please use Manual Fitting Mode.
```

<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/NGmrRP2BJxk" title="Auto Fitting demo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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


### 1-2. 📄 Using a Source Profile

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

### 3. 🔧きせった (Kisetter) Setup

1. Place きせった (Kisetter) in the Hierarchy.
    - Prefab path: `Assets\@Eden_Tools\Kisetter\Kisetter.prefab`

### 4. きせった (Kisetter) Setup

1. Click きせった (Kisetter) - Auto Fitting Mode.

![image.png]({{BASE_PATH}}/media/fa9c758660c7fc41.png)

1. Assign **the** previously prepared **avatar and** **outfit** to the きせった (Kisetter).

    ![image.png]({{BASE_PATH}}/media/accec900aaa7f385.png)

    - **Source Avatar Object**: The original avatar object for the outfit
    - **Source Clothes Object**: The outfit object
    - **Target Avatar Object**: The target avatar object
2. When using Profile Mode

    ![image.png]({{BASE_PATH}}/media/bbdb578a05be2ec9.png)

    - **Profile**: The Profile that matches the outfit you want to use
    - **Source Clothes Object**: The outfit object
    - **Target Avatar Object**: The avatar object to fit the outfit to


### 5. きせった (Kisetter) Option Setup

1. **Automatically Assign Body Mesh**
    1. When checked, the system automatically searches for the mesh corresponding to the avatar's torso.
    2. **If the Body Mesh cannot be found automatically, the Body Mesh selection window will appear.**
        1. In this window, **select the mesh corresponding to the torso and click the [Select] button.**

    ![]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

2. **Mesh List**

    ![]({{BASE_PATH}}/media/96e934f55c9b6933.png)

    - Click the **[Refresh Mesh List]** button to refresh the mesh list.
    - If there are any meshes you do not want to transform, deselect those items.
3. **Body Gap**
    - This parameter sets the minimum distance between the garment and the body.
    - If the body is penetrating the garment significantly, increase this value.
4. **Skip Foot Fitting**
    - This option prevents **fitting(shape modification)** from being applied **to shoes**.
    (Scale adjustments will still be applied.)
    - To deform the shape according to the specific details of the foot, please disable this option.
5. **[Advanced Option] - [Save Settings] - Save Result As BlendShape**
    - When enabled, the transformed result is saved as a BlendShape rather than being applied directly to the mesh.
6. **[Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar**
    - This option reassigns the weights of the clothing mesh based on the target avatar's armature.
    - Please enable this only when you need to connect the costume directly to the avatar's bones without using Modular Avatar or similar features.
- For detailed explanations of other parameters, please refer to the following document.
    - [Parameter Description](../parameters/)

### 6. Performing the Transformation

Click [**Run ALL]** to proceed with the transformation.

![image.png]({{BASE_PATH}}/media/388999557ff08862.png)

- Use **the Step-by-Step Progress** below to proceed with Fitting and Weighting step by step.

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
