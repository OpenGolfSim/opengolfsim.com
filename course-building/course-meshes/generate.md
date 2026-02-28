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

1. Download and open the [Meshery](/tools/course-meshery) tool.
    
    {: .note }
    > On Windows, you may get a warning from Microsoft Defender. Click **More info** and then select **Run anyways**

2. Click the **Import RAW Terrain**{: .label } button and locate the raw terrain data file you created in the [Course Terrain](/course-building/course-terrain) step.

3. Click the **Import SVG**{: .label } button and locate the SVG file you created in the [Course Map](/course-building/course-map) step.

4. Set the **Terrain Height**{: .label } value to the same thing as your **Terrain Height** in Unity.

    To find your terrain height

    1. Click the terrain object in your scene.
    
    2. Click the **Terrain Settings** tab in the Inspector on the right.
    
    3. Scroll down to your Terrain Size section and you should see **Terrain Height**

5. In Meshery you can optionally set a **Terrain Smoothing**{: .label } value for you terrain, to smooth out any rough / bumpy terrain. For more fine grained control, consider editing and smoothing your terrain in Unity and exporting a new RAW file for Meshery.

## Surface Settings

### Triangle Spacing

The **Base Tri Spacing** setting adjusts the distribution of triangles across the mesh surface. This value sets the target spacing for the underlying grid sampling; lower values create a denser, higher-resolution grid, while higher values result in a sparse, lower-poly mesh. Use higher values for large-scale or base meshes to maintain efficiency, and lower values for smaller meshes like greens where you want a higher degree of slope accuracy.

### Digging

You can adjust the dig settings at the time of import, or on individual shapes after import. By default Meshery will dig bunkers, rivers, and lake beds a bit lower than your terrain, to ensure they have some depth to them.

<img src="/assets/course-building/digsettings.jpg" alt="Vertex Shading" />

**Dig Depth**

How deep to dig down from the existing terrain data. 

**Dig Distance**

The distance of the transition of the dig from the edge.

## Vertex Painting

For more advanced users, you can enable vertex shading / blending. Which will add blue or red vertex colors to the inner or outer edges of a shape. This will let you use custom material blending. Note: this still a relatively new feature, so experiment with caution!

<img src="/assets/course-building/vertexshading.jpg" alt="Vertex Shading" />

Blending is an advanced feature to daw red or blue vertex shading to the inner and outer edges of the mesh. Outer edges will be red, while inner edges will be shaded blue.

**Blend Tri Spacing**
The triangle grid size within the blended edge. You may want to add extra triangle density around the edges, to have more control over vertex shading.

**Blend Distance**
How far from the edge to fill with vertex shading.