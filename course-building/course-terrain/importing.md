---
title: Importing Terrain
parent: Terrain
grand_parent: Course Building
nav_order: 3
published: false
---

# Importing Terrain

To visualize and inspect your terrain data, you'll want to import the RAW file as a new terrain object in Unity.


<iframe width="560" height="315" src="https://www.youtube.com/embed/PebH5B-MC8A?si=d3ACrfBi6fwQx0B1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


{: .note }
> If you are creating your own [fictional terrain](/course-building/course-terrain/fictional), you can skip these steps.


1. In Unity, import your .RAW terrain file you created in Course Terrain Tool in the terrain settings.

    1. Select or create a terrain object in your scene. In Unity, you can create a new Terrain object under **GameObject > 3D Object > Terrain**{: .label }
    
    2. Click the terrain settings in the *Hierarchy* then in the *Inspector*, select the Terrain Settings (gear icon).

    3. Select **Import Raw**{: .label } and locate the `.raw` file from your Course Terrain Tool export.

    4. Confirm that **Byte Order** is set to `Windows`.

    5. Confirm that **Terrain Size** match your stats file.

    6. Click **Import**{: .label }

2. Import your Bing or Google TIFF image and update the max resolution to 8192.

    1. Drag the `Overlays/` folder from your Course Terrain Tool export into your Unity project's assets.

    2. Click the satellite image file you want to use and the inspector change the max resolution to `8192x8192` and click **Apply**

    3. Select the terrain object in your scene and in the inspector go to the **Paint Terrain** tab and select **Paint Texture** from the dropdown.

    4. Click **Edit Terrain Layers**{: .label } and select **Create Layer**

    5. Assign the satellite image as the **Diffuse** texture

    6. Under **Tiling Settings**, set the **Size** X and Y to your terrain size. (e.g. `X: 1200, Y: 1200`).


You should now have your satellite imagery lined up with your terrain slopes. Fly around to inspect that things like bunkers and lakes are lining up with your sand. If you notice things are just slightely off, you can manually adjust your satellite imagery file in GIMP or Photoshop.

If things look good, you can now start to edit, dig, or smooth-out your course terrain using Unity's built-in terrain tools. When you're ready you'll want to [export](/course-building/course-terrain/exporting) a new RAW file before creating your course meshes.
