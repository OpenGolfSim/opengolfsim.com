---
title: Course Meshery
parent: Tools
category: tools
nav_order: 2
---

# Course Meshery

<img src="/assets/course-building/meshery_icon_512x512.png" alt="Course Meshery" srcset="/assets/course-building/meshery_icon_512x512.png 2x" />


**Course Meshery** is an open-source tool, created by OpenGolfSim, that converts a course SVG file and raw terrain file as input and exports a collection of meshes that conform to the terrain height. This makes it easy to layout your golf course in a vector program, like <a href="https://inkscape.org/" target="_blank">Inkscape</a> and automatically generate 3D models you can easily import on top of your terrain into Unity.


<a target="_blank" class="btn btn-icon btn-green" href="https://github.com/OpenGolfSim/course-meshery-tool/releases/latest/download/meshery-windows-latest.zip">
  <img src="/assets/icons/windows.svg" width="24" />
  <span style="margin-left: 3px;">Download for Windows</span>
</a>
<a target="_blank" class="btn btn-icon btn-green" href="https://github.com/OpenGolfSim/course-meshery-tool/releases/latest/download/meshery-macos-latest.zip">
  <img src="/assets/icons/apple.svg" width="24" />
  <span style="margin-left: 3px;">Download for Mac</span>
</a>
<a target="_blank" class="btn" href="https://github.com/OpenGolfSim/course-meshery-tool">View Project on GitHub</a>

---

<img src="/assets/course-building/meshery-window.png" />

### Generating Meshes

To generate your meshes:

1. Download and open **Meshery**

2. Click **Import RAW Terrain**{: .label } and select the RAW terrain data file for your course.

  1. Set the **Terrain Height** to the height scale of your terrain. (Usually found in Unity or your terrain stats CSV file)

3. Click **Import SVG**{: .label } and select the SVG file you created in Inkscape for your course.

  1. If you made any changes to the terrain in Unity, make sure you export a new RAW file from your terrain settings.

4. Adjust grid spacing, dig bunkers, and smooth your terrain.

5. Click **Export Meshes** and save your meshes into a single OBJ file.

6. Once completed the generated OBJ file should be shown in the output folder you selected.

The OGS SDK for Unity contains an import tool for automating the process of importing these meshes and batch assigning their materials. Follow the Unity SDK guide for importing and customizing meshes.

{: .note}

> Note: After importing the meshes into Unity, you likely need to manually reposition the imported mesh to be above the terrain. Slowly increase the Y value of the parent object until you can see it and it stops z-fighting with the terrain.

