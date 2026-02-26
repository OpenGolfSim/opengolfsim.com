---
title: Creating Meshes
parent: Course Meshes
nav_order: 1
---

# Creating Meshes


<a href="/assets/course-building/meshery-window.png" target="_blank">
  <img src="/assets/course-building/meshery-window.png" width="500" alt="Meshery Screenshot" />
</a>


## Import Files

1. Download and open the [Meshery](/utilities/course-meshery) tool.
    
    On Windows, you may get a warning from Microsoft Defender. Click **More info** and then select **Run anyways**

2. Click the **Import RAW Terrain**{: .label } button and locate the raw terrain data file you created in the [Course Terrain](/course-building/course-map) step.

3. Click the **Import SVG**{: .label } button and locate the SVG file you created in the [Course Map](/course-building/course-map) step.

4. Set the **Terrain Height**{: .label } value to the same thing as your **Terrain Height** in Unity.

    To find your terrain height

    1. Click the terrain object in your scene.
    
    2. Click the **Terrain Settings** tab in the Inspector on the right.
    
    3. Scroll down to your Terrain Size section and you should see **Terrain Height**

5. In Meshery you can optionally set a **Terrain Smoothing**{: .label } value for you terrain, to smooth out any rough / bumpy terrain. For more fine grained control, consider editing and smoothing your terrain in Unity and exporting a new RAW file for Meshery.


## Digging

You can adjust the dig settings at the time of import, or on individual shapes after import. By default Meshery will dig bunkers, rivers, and lake beds a bit lower than your terrain, to ensure they have some depth to them.

## Vertex Painting

For more advanced users, you can enable vertex shading / blending. Which will add blue or red vertex colors to the inner or outer edges of a shape. This will let you use custom material blending. Note: this still a relatively new feature, so experiment with caution!
