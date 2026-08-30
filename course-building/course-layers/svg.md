---
title: Course SVG
parent: Course Layers
nav_order: 2
---

# Course SVG

Your course map is the primary outline of your course layout and components. You'll add the basic shapes to define things like fairways, bunkers, water, trees, etc. 

Make sure you've completed the [downloaded and setup](/course-building/getting-started/#download--install-inkscape) steps for Inkscape.

1. TOC
{: toc }

## Generate SVG

Once you have a Course Area and Terrain setup, you can generate your SVG.

1. In Meshery under Course Layers Generate your SVG document

2. Ensure your hillshade and satellite layers are checked (if you generated them)

3. Optionally, search for existing course shapes via the OpenStreetMap database.

4. Generate the SVG and save it to your project folder.

5. Before editing your SVG, make sure you have installed the official [OpenGolfSim color palette](/course-building/getting-started/#setup-the-ogs-color-palette) and placed the `OpenGolfSimPalette.gpl` file into the user palettes folder, which can be found via **Edit > Preferences > System > User Palettes**{: .label } of Inkscape.

6. Open your SVG in Inkscape and edit/build your course shapes.

## Editing your SVG

Below are some basic tips and guidelines for building your SVG so that it can be used to properly generate meshes.

- Only use closed paths. Meshery expects all items in the course layer to be closed paths layered onto each other. Shapes, lines and other shape types may not work.
- Avoid transforms. If you move or scale an existing shape, you'll need to use the flatten tool to apply the transforms attributes it adds.


### Rivers & Cart Paths

The easiest way to layout rivers and cart paths is to use a **Stroke** rather than a path, then convert to a closed path.

1. Use the pen tool to draw your line. 
2. From the palette, right click a color and select **Set Stroke**. Then in the **Fill & Stroke** tab set the fill to `X` (no fill)
3. Once your stroke looks correct, you'll need to convert to a closed path. In the main menu select **Path > Object to Path**.