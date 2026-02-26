---
title: Course Export
parent: Course Building
nav_order: 5
---

# Course Export

1. TOC
{:toc}

### Define Tees

Before we can export and play the new course, we need to define each hole's par, pin locations, and tee position.

1. Add a new Course Details object to your scene. Right-click the **Hierarchy** panel and from the dropdown menu select **OpenGolfSim > Create Course Details**{: .label }. This should add a new game object called `OGSCourseDetails` with an **OGS Course** script attached.

2. With the new `OGSCourseDetails` object selected, you should see some settings in the **Inspector** panel.

3. Expand the **Holes** section and click the **+**{: .label } button to add your first hole. This should add 2 movable handles to the scene, the hole and tee box.

4. Set the Par for your hole. For most par 3 holes, you won't need an aim point. The player will be aimed at the hole position. For par 4 or 5 holes that require an aim point, check the **Aim Point** box.

5. Drag the handles around your course to position the hole, tee (and aim) points on your course.

    {: .tip }
    > Make sure you don't drag the parent game object. At first all the points are added on top of each other, making it hard to drag the correct handle. In that case, just manually enter some random values in the Inspector to move just the points you want first. Then you can drag them around.

6. The points should auto-snap to the ground Y position, but only when they are within 100 or so meters of the terrain. If you can move the point on the Y axis, it's not close enough to snap.

7. Once you have your course laid out. You're ready to export your course build!


### Export Course

1. You'll first need to assign an AssetBundle to your main course scene.

    1. In Unity, locate and select your scene in your project folder. 

    2. At the bottom of the Inspector you should see an `AssetBundle` section. Click the dropdown and add create a new asset bundle.

    3. Enter a unique name/slug for your course (all lowercase and no spaces). (e.g. `spacerange` or `the_moon_gc`)


2. Then you can export your asset bundle using the Export Tool.

    1. Select **Tools > OpenGolfSim > Export Course Build**{: .label }

    2. Select an output folder to export your build files to. We recommend creating a new folder with a version number, to easily differentiate between your exports. (e.g. `the_moon_gc_v1`)

    3. Click the **Export**{: .label } button to begin the export. This step can take a long time, but once finished you should have a folder with some `.unity3d` files in it.


### Playing Your Course

1. Move or copy the folder containing your exported course files into the `ogs_courses` directory, which should be located at:

    **Windows**
    ```
    C:\Users\USERNAME\AppData\Roaming\opengolfsim-desktop\ogs_courses
    ```
    
    **MacOS**
    ```
    /Users/USERNAME/Library/Application Support/opengolfsim-desktop/ogs_courses
    ```

2. Start (or restart) the OpenGolfSim desktop app, and you should see your course with some generic details now in your library.

3. If you want a custom poster for your local course. You can add a file named `poster.jpg` to your course build folder.

