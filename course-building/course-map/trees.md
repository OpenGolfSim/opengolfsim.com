---
title: Tree Layer
parent: Course Map
nav_order: 2
---

# Tree Layer

{: .warning }
> This is still a work in progress!

<iframe width="560" height="315" src="https://www.youtube.com/embed/YzPZCiBRqiQ?si=KiUt6bEaI_FrUxiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


1. Select or create the **Trees** layer.

    {: .note }
    > Note: Make sure you have a layer / group with an `id` of `trees`. Meshery will only process shapes from this layer into image masks.

2. Add paths or shapes with the tree color to indicate where you want trees planted.

3. Disable all other layers and temporarily make your tree shapes white.

4. Export a square PNG image with a black background. Essentially you want a square black image with white pixels where you want trees planted.

5. Import this PNG file into your Unity project and enable read/write on the asset. (Make sure you click Apply)

6. Create a new Tree Planter object, configure some trees, and assign this image as the image mask.