---
title: "Manual Fitting Mode"
slug: "manual-fitting"
category: "User Guide"
description: "Workflow combining automatic fitting with manual bone adjustments."
order: 30
---

```
⚫ This mode runs the deformation based on an outfit that the user has manually adjusted to fit the Target Avatar.

⚫ During the fitting process, you can make additional adjustments in the Bone Adjustment window for a more precise result.
```

<iframe class="youtube-embed" src="https://www.youtube-nocookie.com/embed/QG0csy8LUQU" title="Manual Fitting Mode demo" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

1. Place Eden きせった (Kisetter) in the Hierarchy.
    - Prefab path: `Assets\@Eden_Tools\Kisetter\Kisetter.prefab`

### 4. きせった (Kisetter) Setup

1. Click きせった (Kisetter) - Manual Fitting Mode.

![image.png]({{BASE_PATH}}/media/4b01517fa984a0e9.png)

1. Assign **the**previously prepared **avatar and** **outfit**to the きせった (Kisetter).

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

### 7. Bone Adjustment

In Manual Fitting Mode, you can adjust the bones of the automatically fitted outfit.

![image.png]({{BASE_PATH}}/media/300303c039d540ee.png)

#### Bone Controls

![image.png]({{BASE_PATH}}/media/0403a56fedd1ed35.png)

- You can change the operation mode by clicking **W: Move / E: Rotation / R: Scale** at the top, or by pressing **W / E / R** on the keyboard.
    - **W: Move**: Move the Position
    - **E: Rotation**: Rotate the selected bone
    - **R: Scale**: Adjust the Scale

#### Mirror

![image.png]({{BASE_PATH}}/media/7b0f0c16790de3d6.png)

- If there is a symmetrical bone on the opposite side, you can move both sides together using the **Mirror** button.
- When **Mirror: On** is enabled, the movement is mirrored along the avatar’s X-axis.

#### Bone List

![image.png]({{BASE_PATH}}/media/df7b1834b78e0a74.png)

- This is the list of bones that can be adjusted.
- Adjustable bones are displayed in the Bones List.
    - **Bone List: Humanoid Bone Only**
        - Only Humanoid Bones such as Hip and Chest are displayed in the Bone List.
    - **Bone List: Show Other Bones**
        - Child bones other than Humanoid Bones such as Hip and Chest are also displayed in the Bone List.
- **Humanoid Bone Picker**
    - You can select a bone by clicking the desired body part.
- You can also select and adjust bones by clicking the blue points on the avatar in the Scene view.

**We recommend using this option to make additional detailed adjustments for items such as hats, gloves, and shoes.**

![image.png]({{BASE_PATH}}/media/4db99de895e9a2be.png)

- When you finish adjusting the bones, click the button below to continue the fitting process.

### 8. Mesh Editing

In Manual Fitting Mode, you can adjust the automatically fitted clothing mesh directly in Scene View.

![image.png]({{BASE_PATH}}/media/a68b20823cea5910.png)

#### Select the Mesh to Edit

![image.png]({{BASE_PATH}}/media/3924b4eb303b4a4a.png)

- Select the mesh you want to edit as `Main`.
- To edit multiple meshes together, enable `Affect` for each additional mesh.
- Use `Discard Changes` to undo edits made to that mesh.

#### Select Vertices

- Click a vertex to select it, or drag to box-select multiple vertices.
- Selected vertices are shown in yellow.

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Single Selection</figcaption>
    <img src="{{BASE_PATH}}/media/6d66d5ebb4b09557.png" alt="Single vertex selection" />
  </figure>
  <figure>
    <figcaption>Multiple Selection</figcaption>
    <img src="{{BASE_PATH}}/media/83e7aa82741df69b.png" alt="Multiple vertex selection 1" />
    <img src="{{BASE_PATH}}/media/7e117f5985e607d2.png" alt="Multiple vertex selection 2" />
  </figure>
</div>

#### Select Connected Vertices

- This is useful when a mesh consists of multiple disconnected parts and you want to select one part at once.

![image.png]({{BASE_PATH}}/media/b1812976161ccd17.png)

- `L`: Adds all vertices connected to the vertex nearest the mouse cursor to the selection.
- `Shift + L`: Deselects all vertices connected to the vertex nearest the mouse cursor.

#### Transform Vertices

- Switch between transform modes using the `W / E / R` buttons or keyboard shortcuts.
    - `W`: Move
    - `E`: Rotate
    - `R`: Scale

<div class="doc-media-grid doc-media-grid-3">
  <figure>
    <figcaption><code>W</code> Move</figcaption>
    <img src="{{BASE_PATH}}/media/4accd5822cf38fba.png" alt="W move operation example" />
  </figure>
  <figure>
    <figcaption><code>E</code> Rotate</figcaption>
    <img src="{{BASE_PATH}}/media/bd90cd4b8efaf419.png" alt="E rotate operation example" />
  </figure>
  <figure>
    <figcaption><code>R</code> Scale</figcaption>
    <img src="{{BASE_PATH}}/media/edb5ec08dcbebbe3.png" alt="R scale operation example" />
  </figure>
</div>

- `Handle Direction`
    - `World`: Aligns the handle with the world coordinate axes.
    - `Vertex Normal`: Aligns the handle with the normal direction of the selected vertices.

#### Vertex Display

- You can configure how vertices are displayed in the editing panel.

![image.png]({{BASE_PATH}}/media/8ae452f1a77f87ba.png)

- `Show Vertices`: Controls whether editable vertices are displayed.
- `Show Occluded`: Controls whether vertices occluded from the current view are also displayed.
- `Draw Distance`: Displays only vertices within the specified distance from the camera.

#### Hide Vertices

- Press `G` to hide vertices that interfere with editing.
    - `G`: Hide selected vertices
    - `Shift + G`: Show hidden vertices again

    ![image.png]({{BASE_PATH}}/media/33954415fccf5904.png)

    ![image.png]({{BASE_PATH}}/media/1f4b2b7df45a31f9.png)


#### Symmetry Editing

![image.png]({{BASE_PATH}}/media/3111582ed270d28f.png)

- `Symmetry`: Select the `X / Y / Z` axis to use for symmetry editing.
    - You can enable multiple axes at the same time.
- `Symmetry Move`
    - `Mirror`: Vertices on the opposite side move as a mirror image across the selected axis.
    - `Same`: Applies the deformation in the same direction to vertices on the opposite side.
- `Symmetry Clipping`
    - Prevents vertices near the symmetry axis from crossing to the opposite side.

#### Adjust the Edit Influence Range

![image.png]({{BASE_PATH}}/media/4e4790e5af577f26.png)

- When you transform selected vertices, nearby vertices are also deformed according to the configured influence range and weight.
- Vertices with stronger influence are shown in red, while vertices with weaker influence are shown in blue.
- `Pick Mode`
    - `Euclidean`: Vertices whose straight-line distance from the selection is within the `Brush Radius` are affected.
    - `Adjacency`: Influence follows the mesh topology and affects connected vertices within the `Brush Radius`.
- `Weight Mode`
    - `Linear`
        - Influence decreases at a constant rate as the distance from the selection increases.
    - `Gaussian`
        - Applies a smooth falloff between the selected area and the surrounding area.
    - `Clamp`
        - All vertices within the brush range receive the same influence.
- `Strength`
    - Adjusts how strongly surrounding vertices are influenced within the brush range.
    - `Ctrl (Command) + Shift + Mouse Wheel`
    - `Caps Lock + Shift + Mouse Wheel`
        - Adjusts the brush strength.
- `Brush Radius`
    - Adjusts the range of influence around the selected area.
    - `Shift + Mouse Wheel`
        - Adjusts the brush radius.

#### Local Shape Restore

<div class="doc-media-grid doc-media-grid-2">
  <figure>
    <figcaption>Before Restore</figcaption>
    <img src="{{BASE_PATH}}/media/3f5de925356ee854.png" alt="Before Restore" />
  </figure>
  <figure>
    <figcaption>After Restore</figcaption>
    <img src="{{BASE_PATH}}/media/6005155dce938126.png" alt="After Restore" />
  </figure>
</div>

If wrinkles or edges become overly distorted during editing, use `Local Shape Restore` to smooth and refine the surrounding shape.

- `Iterations`
    - Sets the number of iterations used for local shape restoration.
    - Higher values spread the restoration effect more widely and smoothly.
- `Restore Strength`
    - Adjusts how strongly the local shape of the paired Source mesh is applied.
- `Restore Selected`
    - Restores the local shape of the currently selected area at once.
- `Restore Brush`
    - Enable the button, then drag in Scene View to restore only the areas you need.
    - Smoothly blends deformation differences with surrounding vertices to reduce localized distortion.

#### Finish Editing

- After adjusting the mesh, use `Check Penetration` to check for penetration, then click `Confirm and Continue` to proceed.
- `Confirm and Continue` applies the current edits and resumes the remaining Kisetter process.

## [3] Checking the Results

### 9. Viewing the Fitting Results

### 9-1. Checking the Fitting Results

- Check whether the morphed result has been applied correctly to the avatar.
- If the transformation resulted in an undesired shape, and you enabled **[Advanced Option] - [Save Settings] - Save Result As BlendShape**, you can adjust the Kisetter_fit BlendShape value added to the outfit to restore it to its original form.

### 9-2. VRChat - Modular Avatar

- The Modular Avatar is merely an example; you may use other tools, such as VRCFury, to configure the outfit’s bones to follow the avatar’s movements.
    - However, if you have checked [Advanced Option] - [Weighting Settings] - Transfer Weight To Avatar, the outfit is already configured to follow the avatar’s bones.
- Right-click the outfit and select [Modular Avatar] - [Setup Outfit] to configure the outfit’s bones to follow the avatar.

![]({{BASE_PATH}}/media/a477756018a1e22d.png)

- Table of Contents
