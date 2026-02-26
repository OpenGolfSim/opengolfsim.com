---
title: Getting Started
parent: Course Building
nav_order: 1
---

# Getting Started

Before you start building courses, you'll need a few of different tools installed on your machine to create courses for OpenGolfSim. We recommend grabbing and setting up all these tools before you start. Don't worry if you're not very technical, they are all pretty user friendly.

1. TOC
{:toc}


## 1. Install Unity

We use Unity as our 3D engine and simulator environment. The process for creating OpenGolfSim courses and games uses a specific version of Unity and custom tools to export your course as a Unity asset bundle.

To get started, downloaded and install Unity Editor version `6000.2.6f2`. It needs to be that specific version of Unity, or the built course may not work correctly. You can Unity Hub to install specific versions, or directly using the link below.

<a href="https://unity.com/releases/editor/whats-new/6000.2.6f2" target="_blank" class="btn">
  <span>Download Unity Editor 6000.2.6f2</span>
</a>

{: .note }
> Note: We are looking into upgrading to `6000.3` soon, now that Unity has dropped official support for `6000.2`.

---


## 2. Install Project Template

Next, download our Unity project template from our github repository and add it as a new project in Unity.

<a href="https://github.com/OpenGolfSim/unity-universal-template/archive/refs/heads/main.zip" target="_blank" class="btn">OpenGolfSim Project Template (URP)</a>

{: .note }
> While URP is the recommended pipeline template for all new course builds, we do still offer an [HDRP-based template](https://github.com/OpenGolfSim/unity-project-template) for more advanced users that only want to create courses for Mac & PC.


### Adding the project to Unity Hub

1. Download the [project template zip](#2-install-project-template)
2. Extract files to a new folder on your computer with the name of your course/project
3. Open **Unity Hub**{: .label } and in the top-right select **Add > Add project from disk**{: .label }

    <a href="/assets/course-building/unity-add-project.jpg" target="_blank">
      <img src="/assets/course-building/unity-add-project.jpg" width="250" />
    </a>

4. Select the extracted project folder
5. You should now be able to open the empty template project. The first time you launch it, it will take a minute to install the required packages and tools.

---

## 3. Install Inkscape

Inkscape is a free vector graphics editing program. We use it to layout the course using the pen tool to create vector paths that represent features like fairways, greens, tee boxes, etc. 

<a href="https://inkscape.org/" target="_blank" class="btn">Download Inkscape</a>

### Setup the OGS Color Palette

You'll need the official OGS color palette installed in Inkscape so you can set shapes to the correct color codes.

1. Download the latest OpenGolfSim color palette:

    <a download="OGSColorPalette.gpl" href="https://raw.githubusercontent.com/OpenGolfSim/course-meshery/main/data/palette.gpl" target="_blank" class="btn">Download OGS Color Palette.gpl</a>
    <br>
    <small>Right-click the download button and select   <em>Save Link As...</em></small>

    1. Save the file to your local machine with a name like `OGS Color Palette.gpl`

    2. Place the file into the user palettes folder, which can be found via **Edit > Preferences > System > User Palettes**{: .label }

---

## 4. Install Course Terrain Tool (optional)

[Course Terrain Tool](/tools/course-terrain-tool) is an open-source tool created by OpenGolfSim to source and process real-world lidar point-cloud data into usable terrain data for your golf course. It also downloads and processes satellite and hill-shade imagery to aid in course design.

<a href="/tools/course-terrain-tool" target="_blank" class="btn">Download Course Terrain Tool</a>

---

## 5. Install Course Meshery

[Course Meshery](/tools/course-meshery) is an open-source tool created by OpenGolfSim to generate course meshes from SVG and raw terrain data files.

<a href="/tools/course-meshery" target="_blank" class="btn">Download Course Meshery</a>


<!-- ## Course Publisher Account

You'll need access our online course publishing tools. You can request access for your OpenGolfSim account on our course building Discord channel.

<a class="btn" href="https://discord.gg/9JqxNArQ" target="_blank">#course-building Discord Channel</a> -->

---

## Course Building Videos

Check out our playlist of how-to videos for our course building process.

<a target="_blank" href="https://www.youtube.com/playlist?list=PLiIjwFoWd00HW3tXWQ5pUrC5DK6U6q27W" class="btn">Course Building Videos</a>

---


[Next up: Course Terrain](/course-building/course-terrain/){: .btn .btn-green }