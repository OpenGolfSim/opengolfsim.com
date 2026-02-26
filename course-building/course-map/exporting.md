---
title: Exporting Image
parent: Course Map
nav_order: 3
---

# Export Course Map

It is sometimes helpful to view your drawn course map on your terrain in Unity. To do this, you'll need to export a high resolution image of your course from Inkscape. 

1. In Inkscape, select **File > Export**{: .label }

2. Make sure export is set to **Single File** and that **Page** is selected

3. Set the **Width** and **Height** to `8192`

4. Select the location to save the image.

5. Click **Export**{: .label }

<a href="/assets/course-building/inkscape-export.jpg" target="_blank">
<img src="/assets/course-building/inkscape-export.jpg" width="200" alt="Export Dialog" />
</a>


## In Unity

To view the newly created course map image on your terrain, you'll need to import it to your Unity project and set it as the terrain texture, scaled to the terrain size. 


1. Drag the exported image file into your Unity project assets 

2. Select the image file to bring up the Inspector

3. In the Inspector, set:

    1. Max Size: `8192`
    2. Select Apply

4. Select your Terrain object in the scene.

5. In the Inspector, open **Paint Terrain**, then select **Paint Texture**

6. Create a new Terrain Layer

    1. Under Terrain Layers, select **Edit Terrain Layers > Create Layer**{: .label }

    2. Select the image asset and assign it to the layer.

    3. Set both the **X** and **Y** values for **Size** under **Tiling Settings** to the same as your terrain size. (e.g. 1200 x 1200)

7. Unity will create a Terrain Layer using the selected image as the Diffuse texture.


