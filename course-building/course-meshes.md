---
title: Course Meshes
parent: Course Building
nav_order: 3
---

# Course Meshes

To create separate playable surfaces, like fairways and greens. We need to convert the basic shapes we drew in Inkscape into 3D objects that are sloped to match our terrain. We created a specialized tool for this, called Meshery.


1. TOC
{:toc}

## Creating Meshes


1. Download and open the [Meshery](/tools/utilities/course-meshery) tool.
    
    On Windows, you may get a warning from Microsoft Defender. Click **More info** and then select **Run anyways**

2. Click the **Import RAW Terrain**{: .label } button and locate the raw terrain data file you created in the [Course Terrain](/tools/course-building/course-map) step.

3. Click the **Import SVG**{: .label } button and locate the SVG file you created in the [Course Map](/tools/course-building/course-map) step.

4. Set the **Terrain Height**{: .label } value to the same thing as your **Terrain Height** in Unity.

    To find your terrain height

    1. Click the terrain object in your scene.
    
    2. Click the **Terrain Settings** tab in the Inspector on the right.
    
    3. Scroll down to your Terrain Size section and you should see **Terrain Height**

5. In Meshery you can optionally set a **Terrain Smoothing**{: .label } value for you terrain, to smooth out any rough / bumpy terrain. For more fine grained control, consider editing and smoothing your terrain in Unity and exporting a new RAW file for Meshery.

6. Click **Export Meshes**{: .label } and select a the location to save your OBJ file containing your course meshes.

<a href="/assets/course-building/meshery-window.png" target="_blank">
  <img src="/assets/course-building/meshery-window.png" width="500" alt="Meshery Screenshot" />
</a>

## Import Meshes Into Unity

Next you'll want to import the OBJ file into your Unity project. These meshes will sit just above your terrain layer. Make sure you're using the project template and have the OpenGolfSim Developer Toolkit package, which should include a tool for importing and batch assigning base materials to your meshes.

1. In your Unity project, go to **Tools > OpenGolfSim > Import Meshes**{: .label }

2. Click the **Select Folder**{: .label } button and locate the folder on your computer that was created by the Course Meshery tool.

    <a href="/assets/course-building/import-meshes.png" target="_blank"><img src="/assets/course-building/import-meshes.png" alt="Import Mesh Screenshot" width="300" /></a>

3. At this point you can batch assign materials like grass and sand to your course surfaces. 

4. Click the **Import OBJs**{: .label } button and wait for the script to automatically import the course meshes to your scene.

5. Once the task finishes, you should see a new parent game object with the name of your file. 

6. After import, you'll likely need to reposition the parent game object to sit above the terrain by offsetting the Y position to be above the terrain.

---

[Next up: Build Your Course](/tools/course-building/course-export){: .btn }