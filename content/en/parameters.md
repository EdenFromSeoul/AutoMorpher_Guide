---
title: "Parameter Description"
slug: "parameters"
category: "Reference"
description: "Explanation of basic and advanced fitting and weighting options."
order: 70
---

## [Basic Option]

---

## 1. Automatically Assign Body Mesh

- When enabled, this option automatically searches for the Body Mesh on the Avatar.

    ### a. If automatic Body Mesh detection fails

    - If the Body Mesh cannot be found automatically **, the Body Mesh selection window will appear.**
    - In that window,**select the mesh corresponding to the torso as shown in** the example image,**then click the [Select] button.**

    ![]({{BASE_PATH}}/media/c53593bfe1a40b1f.png)

    ### b. How to Manually Assign the Body Mesh

    - If an error message stating that the Body Mesh cannot be found appears, please disable this option and manually assign the Body Skinned Mesh Renderer corresponding to the torso.
        - For VRChat avatars, the mesh labeled "Body" usually represents the face/head, so please assign the mesh corresponding to the torso, as shown in the example image.

        ![]({{BASE_PATH}}/media/13adc48cf815771b.png)


---

## 2. Mesh List

- This option allows you to select the mesh to be deformed.
- If the mesh is not visible, click the **[Refresh Mesh List]** button to refresh the mesh list.
- If there are any meshes you do not want to transform, uncheck their checkboxes.

    ![]({{BASE_PATH}}/media/96e934f55c9b6933.png)


- **Examples of when "Bag" is selected and when it is not**

![]({{BASE_PATH}}/media/57eedd916e681082.png)

---

## 3. Body Gap

![]({{BASE_PATH}}/media/c67a2ab5dcd06bd5.png)

- This parameter sets **the minimum distance**between the garment and the body.
    - The garment will be transformed to move further away from the body by the set value.
- If the garment penetrates the body (becomes transparent) excessively, increase this value.

- **Example**

![]({{BASE_PATH}}/media/d5b8827a74775213.png)

---

## 4. Skip Foot Fitting

![]({{BASE_PATH}}/media/f7fcadce704cdd10.png)

- This option determines **whether detailed fitting is applied**to the shoe mesh.
    - When enabled, only resizing is applied to the shoes; detailed fitting that directly modifies the shape is not applied.
- Depending on the avatar, shoe fitting may not apply correctly, or the shoe shape may become distorted.
    - If the shoe shape breaks or becomes awkwardly distorted after fitting, please enable this option.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Good Case (Shinano → Sio)</figcaption>
    <img src="{{BASE_PATH}}/media/088422ae766e0202.png" alt="Good Case (Shinano → Sio)" />
  </figure>
  <figure>
    <figcaption>Bad Case (Shinano → Airi)</figcaption>
    <img src="{{BASE_PATH}}/media/0353c26a99c4ac65.png" alt="Bad Case (Shinano → Airi)" />
  </figure>
</div>

---

## 5. Remove AutoMorphed Other Clothes

![]({{BASE_PATH}}/media/f3189ed48074c5d2.png)

- When enabled, this option automatically deletes any outfits on the Target Avatar that have already been mapped using きせった (Kisetter).
    - Please enable this when you want to delete unnecessary outfits.

## —————————————————————————

## [Advanced Option]

## A. Save Settings

### 1. Save Results As BlendShape

- **Saves**the deformation results **as a BlendShape**.
- You can **switch between the pre- and post-transformation states**by adjusting the BlendShape value.

    ### **a. BlendShape Name**

    - Set the name of the BlendShape to be saved.


- Example

![]({{BASE_PATH}}/media/79483bf7f05478a5.png)

## —————————————————————————

## B. Fitting Options

### 1. Sigma

- The higher the value, the wider the influence range and **the smoother the deformation**.
    - Recommended value: 2–5

---

### 2. Smooth Radius

- Sets **the distance range of neighboring vertices**to be referenced when applying smoothing.

---

### 3. Smooth Neighbor Max Num

- Sets **the maximum number of neighboring vertices**to reference when applying smoothing.

---

### 4. Smoothing Iteration

- The higher the value, the stronger the smoothing effect, resulting in a smoother transformation.
    - Recommended value: 1–4
    - Higher values increase the processing time.
    - **Please note that setting this value too high may actually degrade the quality of the deformation.**

---

### 5. Fitting Iteration

- This option sets the number of times the garment transformation is repeated.

    ### a. Expand Iteration

    - **This is the number of times the process of pushing**the garment **outward**to prevent it from sinking into the body **is repeated**.
    - If the garment is still buried in the body after fitting, increase this value.

    ### b. Shrink Iteration

    - **This is the number of times**the pushed-out clothing is re-adjusted **to fit snugly against the body's surface**.
    - If the clothing is still far from the body after the adjustment, increase this value.

## —————————————————————————

## C. Weighting Options

### 1. Transfer Weight To Avatar

- **This option calculates**the weighting **so that**the garment mesh **moves directly in accordance with the Target Avatar’s bones**.
    - When enabled, **the movement is based on the Target Avatar’s armature bones** rather than the bones within the costume.
- This option is useful when you are not using a feature that automatically connects the costume’s bones to the avatar’s bones, such as with Modular Avatars.
- **If you want to save the outfit as a separate Prefab, please disable this option!**

    ### a. 🟢 Transfer Weight To Avatar Enabled

    - **Reparent Accessory Bones**

        ![]({{BASE_PATH}}/media/6bfe4dbfd9d5b359.png)

        - When enabled, **this automatically moves**any additional bones included in the outfit **to the Target Avatar’s Armature**.
        - This allows you to configure accessories or attached parts to move along with the avatar.

    ### b. 🔴 Transfer Weight To Avatar Disabled

    - **Add Anchor Bone**

        ![]({{BASE_PATH}}/media/e891172961998502.png)

        - **This option determines whether to add an intermediate bone for rotation correction**when restructuring bones to match the Target Avatar.
        - When enabled, the rotation of the outfit’s existing bones is preserved, and a correction bone is added to its parent to compensate.

![]({{BASE_PATH}}/media/7a304ce4506efe38.png)
