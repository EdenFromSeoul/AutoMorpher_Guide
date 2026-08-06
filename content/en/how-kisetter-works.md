---
title: "How Kisetter Works"
slug: "how-kisetter-works"
category: "Getting Started"
description: "Understand how Kisetter fits clothing to a target avatar through Pose Setup, Fitting, and Weighting."
order: 15
---

Kisetter does not reshape clothing in a single operation. It first **prepares the bones, fits the mesh, and then recalculates the weights**. This page explains what happens inside each stage rather than how to use each button.

!!! info "Three stages at a glance"
    **Pose Setup** prepares the clothing bones, **Fitting** reshapes the mesh for the target body, and **Weighting** recalculates how the finished clothing follows the target rig.

## Overall Workflow

<div class="process-overview" role="list" aria-label="The three stages of Kisetter">
  <div class="process-stage" role="listitem"><span>01</span><strong>Pose Setup</strong><p>Prepare the clothing pose and bones for the target avatar.</p></div>
  <span class="process-arrow" aria-hidden="true">→</span>
  <div class="process-stage" role="listitem"><span>02</span><strong>Fitting</strong><p>Reshape the clothing mesh and reduce body intersections.</p></div>
  <span class="process-arrow" aria-hidden="true">→</span>
  <div class="process-stage" role="listitem"><span>03</span><strong>Weighting</strong><p>Rebuild the armature and recalculate vertex weights.</p></div>
</div>

| Stage | Main work | Output passed forward |
| --- | --- | --- |
| Pose Setup | Normalize the pose, duplicate the clothing, adjust bones | Prepared clothing and body-shape difference data |
| Fitting | Reshape the mesh, correct intersections, optionally edit by hand | A saved Mesh Asset |
| Weighting | Rebuild the armature and recalculate weights | Final clothing ready for Unity |

Kisetter works on a duplicate with a new mesh, so **the original clothing is not modified**. Finished Mesh and FBX files are saved under:

```text
Assets/@Eden_Mesh/<Avatar Name>/<Clothing Name>
```

!!! warning "If you cancel before completion"
    A mesh that is still being processed may not have been saved as an Asset. Restarting Unity or uploading to VRChat in this state can make the working mesh disappear. Run the process to completion so the result is saved.

## 1. Pose Setup

Pose Setup is the process of fitting the clothing to the Target Avatar as closely as possible before deformation begins.

<div class="stage-diagram" role="list" aria-label="Pose Setup process">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>Find the Body Mesh</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>Convert A Pose to T Pose</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>Duplicate the clothing</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Validate source and clothing bone matching</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">05</span><strong>Adjust clothing bones for the target</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">06</span><strong>Collect body-shape difference data</strong></div>
</div>

1. **Find the Body Mesh** — Kisetter locates the mesh that represents the avatar's body. If the avatar uses several Body Meshes, you may need to assign the required meshes manually.
2. **Convert A Pose to T Pose** — The avatar and clothing are placed in the same T Pose reference.
3. **Duplicate the clothing** — Kisetter copies the Source Clothes and creates new clothing for the target avatar.
4. **Validate the source outfit** — Humanoid bones on the Source Avatar and clothing are compared to confirm that the clothing was made for that avatar.
5. **Adjust the clothing bones** — Bone positions and sizes are adapted to the target using the differences between the two body shapes.
6. **Collect body-shape data** — Kisetter prepares the data that the Fitting stage will use to deform the mesh.

> If you see `ClothesHumanoidMatchedBone is Null`, check that the clothing Prefab has the correct Scale and that it is made for the selected Source Avatar.

**Result of this stage:** the clothing is ready to be reshaped using the target avatar's skeleton and body proportions.

## 2. Fitting

Fitting is the stage where the clothing is naturally deformed to fit the Target Avatar.

<div class="stage-diagram" role="list" aria-label="Fitting process">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>Collect clothing Mesh data</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>Adjust helper bones</strong><small>Manual</small></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>Correct body-shape differences</strong><small>Optional</small></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Deform for each Fitting Iteration</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">05</span><strong>Correct intersections for each Body Correlation Iteration</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">06</span><strong>Edit the Mesh</strong><small>Manual</small></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">07</span><strong>Adjust bones, names, and PhysBones</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">08</span><strong>Save the Mesh as an Asset</strong></div>
</div>

### Auto Fitting vs. Manual Fitting

| Mode | Automatic processing | Manual control |
| --- | --- | --- |
| Auto Fitting | Body-shape correction, mesh deformation, intersection correction, saving | None |
| Manual Fitting | The same core processing as Auto Fitting | Adjust helper bones before fitting and edit the mesh afterward |

### Processing Order

1. **Collect Mesh data** — Read vertex positions and connectivity for each clothing mesh.
2. **Adjust helper bones (Manual Fitting)** — Refine the overall silhouette before deformation begins.
3. **Correct body-shape differences** — When `Body Shape Matching` is enabled, reduce larger differences between the source and target bodies.
4. **Deform the clothing** — Move vertices according to their relationship with the Body Mesh for the configured number of `Fitting Iteration` passes.
5. **Correct body intersections** — Find clothing vertices inside the Body Mesh and reduce intersections for the configured number of `Body Correlation Iteration` passes.
6. **Edit the Mesh (Manual Fitting)** — Repair exposed areas or restore distorted regions with the shape restoration tools.
7. **Finalize the bones** — Update Humanoid Bone names and positions for the target, then adjust PhysBone positions and Collider sizes.
8. **Save the Mesh** — Store the result as a Mesh Asset for the Weighting stage.

Kisetter automatically compensates for body-shape differences where possible, but some clothing structures or large differences still require manual correction. Use [Manual Fitting Mode](../manual-fitting/) to adjust the bones or mesh directly.

**Result of this stage:** a clothing mesh fitted to the target avatar and saved as an Asset.

## 3. Weighting

Weighting makes the fitted clothing follow the target avatar's motion naturally.

<div class="stage-diagram" role="list" aria-label="Weighting process">
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">01</span><strong>Collect clothing Mesh data again</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">02</span><strong>Rebuild the clothing Armature</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">03</span><strong>Recalculate weights</strong></div>
  <div class="stage-diagram-node" role="listitem"><span class="stage-diagram-index">04</span><strong>Export FBX</strong><small>Optional</small></div>
  <div class="stage-diagram-node is-complete" role="listitem"><span class="stage-diagram-index">✓</span><strong>Complete</strong></div>
</div>

1. **Collect Mesh data again** — Read the final vertex positions and connectivity after Fitting.
2. **Rebuild the Armature** — Depending on the output setting, keep a clothing-specific Armature or connect clothing bones to the target Armature. Missing bones are created when needed. When the clothing Armature is preserved, Anchor Bones may be added to preserve rotation.
3. **Recalculate weights** — Calculate and apply each clothing vertex's Weight using the target Body Mesh as the reference.
4. **Export FBX** — When enabled, save the result as FBX and reconnect the clothing to the Mesh imported from that FBX.

!!! info "If FBX export fails"
    Kisetter keeps using the existing Mesh Asset if the FBX cannot be saved or imported again. Only the FBX file is missing; the clothing can still be used in Unity or VRChat.

**Result of this stage:** final clothing weighted for the target avatar's Armature and movement.

## What to Check After Completion

- Confirm that the converted clothing is placed correctly under the target avatar in the Hierarchy.
- Pose major joints such as the arms and legs in the Scene and check for intersections or severe deformation.
- Confirm that the result was created in `Assets/@Eden_Mesh/<Avatar Name>/<Clothing Name>`.
- If correction is needed, use [Manual Fitting Mode](../manual-fitting/). For persistent quality issues, see [Tips for Improving Fit](../quality-tips/).
