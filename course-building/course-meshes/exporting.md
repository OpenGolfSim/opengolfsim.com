---
title: Exporting Meshes
parent: Course Meshes
nav_order: 2
---

# Exporting Meshes

To get your meshes from Meshery into Unity we'll export an OBJ file containing all your new meshes and then import that OBJ file into your Unity project. These meshes will sit just above or replace your terrain layer. Make sure you're using the latest [project template](/course-building/getting-started/#2-install-project-template) which should contain the latest **OpenGolfSim Developer Toolkit** package with scripts for importing your meshes and building your course.

## Export from Meshery

1. Once you are satisfied with your meshes in Meshery, click the Export Meshes button.

2. Save the OBJ file to your course terrain folder.


## Import Into Unity

1. In your Unity project, go to **Tools > OpenGolfSim > Import Meshes**{: .label }

2. Click the **Select Folder**{: .label } button and locate the folder on your computer that was created by the Course Meshery tool.

    <a href="/assets/course-building/import-meshes.png" target="_blank"><img src="/assets/course-building/import-meshes.png" alt="Import Mesh Screenshot" width="300" /></a>

3. At this point you can batch assign materials like grass and sand to your course surfaces. 

4. Click the **Import OBJs**{: .label } button and wait for the script to automatically import the course meshes to your scene.

5. Once the task finishes, you should see a new parent game object with the name of your file. 

6. After import, you'll likely need to reposition the parent game object to sit above the terrain by offsetting the Y position to be above the terrain.

---

[Next up: Build Your Course](/course-building/course-export){: .btn }
