---
title: Course Layer
parent: Course Map
nav_order: 1
---

# Course Layer

Your course map is the primary outline of your course layout and components. You'll add the basic shapes to define things like fairways, bunkers, water, trees, etc. 

Make sure you've completed the [downloaded and setup](/course-building/getting-started/#3-install-inkscape) steps for Inkscape.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8TL2oM-hVhw?si=0xqobxO_cVXu2lca" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

1. TOC
{: toc }

## Setup

1. Setup your SVG document
    
    1. If you used Course Terrain Tool to process your terrain data, open the SVG file that was created during that process.
    
    2. If you're creating a fictional course, create a new blank SVG document the size of your desired terrain (e.g. 500x500).

1. Make sure your default units are set to millimeters.
    
    - Select **File > Document Properties**{: .label } and ensure the Format and Display Units are set to **mm**.
    
    <a href="/assets/course-building/inkscape-document.jpg" target="_blank">
      <img src="/assets/course-building/inkscape-document.jpg" width="250" />
    </a>

2. Make sure you have installed the official [OpenGolfSim color palette](/course-building/getting-started/#install-the-ogs-color-palette) and placed the OpenGolfSim.gpl (GIMP Palette) file into the user palettes folder, which can be found via **Edit > Preferences > System > User Palettes**{: .label }

### Fictional Course

1. Open Inkscape
2. Create a new blank Inkscape document
3. Go to **File > Document Properties** and set the dimensions of the document to the same as your Unity terrain size. (e.g. `1000 mm x 1000 mm`)

### Course Terrain Tool

Course Terrain Tool should output an SVG containing layers for satellite imagery and hill shade that can be opened in Inkscape. Double check that your Inkscape document size in millimeters matches your terrain size in kilometers. (e.g. 1000mm x 1000mm svg = 1000km x 1000km terrain)


## Drawing Your Course

This is by far the most time consuming part of the process. You'll need to draw your course elements as vector paths in your SVG. We highly recommend starting with just a single hole or two and going through the rest of the process first, before building a full course out.

### Course

1. Select or create the **Course** layer.

    {: .note }
    > Note: Make sure you have a layer / group with an `id` of `course`. Meshery will only process shapes from this layer.

2. Select the **Pen Tool**{: .label } for drawing Bezier curves.

3. Draw each feature of your hole using the correct color for each different surface (e.g. fairway, bunker, water, etc.)

