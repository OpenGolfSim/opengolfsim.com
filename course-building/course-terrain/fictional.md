---
title: Fictional Terrain
parent: Course Terrain
nav_order: 2
grand_parent: Course Building
---

## Fictional Terrain

You can create a completely fictional course terrain by creating blank terrain object and shaping it using the built-in terrain tools in Unity. This will give you the most control over your course and allow you to design your course from the ground up.

1. In your Unity project, right-click in your Hierarchy on the left and select **3D Object > Terrain**{: .label } to add a new terrain object to the scene.

2. Set the terrain size to the size of your course in meters. For example, if you want to create a course that fits within 1 square kilometer, you would use a terrain size of `1000` by `1000` (meters).

3. At this point you could start to create your [Course Map](/course-building/course-map) and layout a few holes of your course. From Inkscape, you can [export](/course-building/course-map/exporting) a high resolution (8192x8192) PNG file. You can then import that as the terrain's image texture, to give you some visual reference points for modeling your terrain.

4. You can use the built-in Unity terrain tools to raise/lower and shape your course terrain. You can also use various environment building tools from the Unity Asset Store to more easily create and model your terrain. Visit our course building channel on [Discord](/connect-with-us/) to discuss and share tools and techniques.

5. When you are happy with your terrain shape, [export a RAW](/course-building/course-terrain/exporting) file which you'll use later in the [Meshery](/tools/course-meshery) process.
