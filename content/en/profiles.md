---
title: "How to Create and Add a Profile"
slug: "profiles"
category: "Features"
description: "Create and install profiles containing outfit fitting information."
order: 60
---

<video controls preload="metadata" src="{{BASE_PATH}}/media/8d1ba909a5c2bb70.mp4">이 브라우저는 동영상 재생을 지원하지 않습니다.</video>

## How to Create a Profile

1. **Place the avatar in the Scene** that you want to use to create the Profile.
2. **Reset the avatar’s Rotation and Scale** to their default values.
3. Verify that the avatar correctly contains the following components:
    - **Animator**
    - **Body Skinned Mesh Renderer**
4. Adjust the Body Mesh BlendShape so that **the entire body is fully visible**, with no shrinkage or hidden parts.
    - Depending on the Profile you are creating, adjust BlendShape such as 👠 **Foot Heel** or 👙 **Breast**.
5. Add **Kisetter – Kisetter_ProfileSaver** to the **Hierarchy**.
6. Enter the name of the Profile to be created in **Profile Name**.
7. Assign the target avatar to the **Source Avatar** slot.
8. Assign the **Body Skinned Mesh Renderer** to the **Source Body Mesh** slot.

    ![image.png]({{BASE_PATH}}/media/d1548659e15d02f4.png)

9. Click the **Save Profile** button.
    - If necessary, adjust the Body Mesh Shape Keys and repeat the previous steps to create Profiles for specific Shape Keys.
10. Verify that the Profile has been created successfully.
    - Profile path: `Assets\@Eden_Tools\Kisetter\Profiles`

## How to Add a Profile

1. Add the Profile folder to the Profile path.
    - Profile path: `Assets\@Eden_Tools\Kisetter\Profiles`
    - If the desired Profile does not appear in the list, **manually add the Profile folder** to the path above.
        - Example Profile folder structure:

            Profiles

            └─ ProfileName

            ├─ ProfileName.json

            └─ ProfileName.eb


    ![image.png]({{BASE_PATH}}/media/99347e5849f09c7b.png)

2. Verify that the Profile appears correctly in きせった (Kisetter).
    1. Add きせった (Kisetter) to the Hierarchy.
        - Prefab path: `Assets\@Eden_Tools\Kisetter\Kisetter.prefab`
        - Alternatively, add the **きせった (Kisetter)** component to an empty GameObject.
    2. Click **Profile Mode**.

        ![image.png]({{BASE_PATH}}/media/fbe82e18cc5a1f39.png)

    3. Check that the added Profile appears under **Source Avatar – Profile**.

        ![image.png]({{BASE_PATH}}/media/2066d7a880e49364.png)

        - **Profile**: The avatar Profile corresponding to the clothing.
            - If the Profile does not appear in the list, click **Refresh** to reload the list, or verify again that the Profile exists under `Assets\@Eden_Tools\Kisetter\Profiles`.
