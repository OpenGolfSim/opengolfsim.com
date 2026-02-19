---
title: Practice Ranges
parent: Course Building
nav_order: 3
published: false
---

Tired of hitting balls on the same range every day? Switch things up by building your own custom practice ranges for OpenGolfSim.

1. TOC
{:toc}

## Getting Started

First make sure you have [setup and installed a Unity project](/tools/unity-setup.md) and installed the [OpenGolfSim Tools](/tools/unity-sdk) package.

## Building Your Course in Unity

1. Add a new terrain object to the scene 
2. Set the terrain size. We recommend a terrain size of 1000m x 1000m for practice ranges, which is 1 square kilometer.

#### Guides and Tools

There's a ton of guides, tutorials, and tools out there to help you create terrains and environments in Unity. To get you started, we've curated a few helpful resources for learning how to build terrains in Unity.

- <a href="https://docs.unity3d.com/6000.2/Documentation/Manual/terrain-RaiseLowerTerrain.html" target="_blank">Unity 6.2: Sculpt the terrain with a brush</a>

    For simple scenes, you can use the built-in Unity terrain brushes to manually raise and lower the terrain.

- <a href="/tools/course-terrain-tool">Course Terrain Tool</a>

    Try using our new experimental tool to find and create height maps from real-world lidar data.

- <a href="https://assetstore.unity.com/packages/tools/terrain/gaia-pro-vs-terrain-trees-grass-water-for-unity-6-263149" target="_blank">Gaia Pro VS</a>
    
    For creating biomes and planting mass trees/vegetation in Unity. This version of Gaia is compatible with OpenGolfSim's version of Unity (6000.2), and makes quickly planting lots trees or painting terrain quick and easy.

- <a href="https://assetstore.unity.com/packages/tools/terrain/r-a-m-3-river-auto-material-3-287456">R.A.M 3 - River Auto Material 3</a>

    Another useful Unity asset for carving and shaping terrain and generating rivers and lakes.

### Add Start & Aim Positions

1. Create an empty game object named `StartPoint` and position it in the scene where you want your player to hit from.
2. Create an empty game object named `AimPoint` and position it in the scene where you want your player to aim initially.


## Create Course Build

To export your new range as a playable course for OpenGolfSim, you'll need to export your Unity scene as an asset bundle.

### Create New AssetBundle

1. In Unity, locate and select your scene in your Assets folder. 
2. At the bottom of the Inspector you should see an `AssetBundle` section. Click the dropdown and add create a new asset bundle.
3. Enter the name of your course all lowercase, and without spaces. (e.g. `spacerange`)

### Export Checklist

To prep your scene for export to a playable course bundle, you'll need to make sure to check a few things:

- [ ] Make sure any cameras in your scene are disabled or removed.

- [ ] Remove any runtime-based scripts / dependencies.
        
    <small>Note: One limitation of Unity asset bundles is that scripts are not exported with the scene. So avoid using or adding any scripts that are used at runtime.</small>


### Course Export Tool

1. Make sure to set a bundle version in your Unity project's settings. 
    1. Select **Edit** > **Project Settings** > **Player**
    2. Enter a **Product Name** and **Version** for your course.

2. Build your course file using our OpenGolfSim Tools
    1. Select **Tools** > **OpenGolfSim** > **Build Course**

3. Click `Select Output Folder` to set the build location of your course.

4. Enter a description for your course.

5. Click the **Export** button.

<a href="/assets/course-building/unity-course-build-tool.jpg" target="_blank">
  <img src="/assets/course-building/unity-course-build-tool.jpg" style="max-width:200px;" />
</a>


Once the export has completed, you should see a few files have been created. One with your asset bundle name, and a file named `course.json`. This file contains some metadata about your course package.

Example **course.json**:
```json
{
    "name": "Space Range",
    "course": "spacerange",
    "version": "1.0.1",
    "description": "A simple driving range set in space.",
    "gameMode": 0
}
```

### Course Poster

You can place a 1280x720 JPEG file in your course folder named `poster.jpg` to represent your course in the library.

{: .note }
> Course posters look best when they are an actual rendering of your course level, not a photograph of the course. It also shouldn't contain any text or logos.

## Loading and Testing Your Course

1. Make sure **OpenGolfSim Desktop** is not currently running. (Right click the logo in the status bar and select `Quit OpenGolfSim`)

2. Create a new folder for your course within the OGS Courses directory.

    `%USERPROFILE%/AppData/Roaming/opengolfsim-desktop/ogs_courses/spacerange`

3. Copy/move both your exported asset bundle file and `course.json` file into that folder. You should end up with a folder structure like:

    - `spacerange/spacerange`
    - `spacerange/course.json`
    - `spacerange/poster.jpg`


3. Fire up OpenGolfSim and you should see your new course listed in your course library.


---

Having trouble? Come chat with us on our [Discord](/connect-with-us/).