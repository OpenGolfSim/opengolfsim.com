---
title: Exporting Terrain
parent: Terrain
grand_parent: Course Building
nav_order: 4
published: false
---

## Unity Export

If you want to create backups of your terrain while you work, or when you are ready to generate your course meshes, you'll want to export a RAW terrain file from Unity and save it locally on your computer.

To export a .RAW terrain file from Unity

1. Select or create a terrain object in your scene. In Unity, you can create a new Terrain object under **GameObject > 3D Object > Terrain**{: .label }

2. Click the terrain settings in the *Hierarchy* then in the *Inspector*, select the Terrain Settings (gear icon).

3. Select **Export Raw**{: .label } and locate the `.raw` file from your Course Terrain Tool export.

4. Confirm that **Depth** is set to `Bit 16`.

5. Confirm that **Byte Order** is set to `Windows`.

6. Confirm that **Flip Vertical** is **checked**

7. Click **Export**{: .label }

8. Save this file with a unique name (e.g. `raw_terrain_v01.raw`) to help keep track of exports as you go.


