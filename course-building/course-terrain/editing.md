---
title: Edit Terrain
parent: Terrain
nav_order: 3
grand_parent: Course Building
---

# Editing Terrain

You'll likely want to edit your terrain to smooth out rough edges. Lidar or DSM terrain data isn't perfect and often includes some noise or points on things like buildings and trees. You can also flatten tee boxes, smooth out green slopes using the brush tools available.

{: .tip }
> We recommend first building your course SVG, which will be overlaid onto the terrain editor, allowing you to see exactly where your course features (tee boxes, fairways, bunkers, etc) are.

<img src="/assets/course-building/meshery/terrain.jpg" width="500" />

## Brush Tool

The brush tool lets you edit the terrain by painting certain operations directly onto the rendered terrain preview.

### Smooth

Smoothing the terrain will help soften or smooth out areas with bumps or noise, or help reduce the steep angle of some spots.

### Dig

You can dig terrain down in areas with the brush to dig out areas like lakes or bunkers. Set your brush radius and strength and left click the map to dig terrain.

### Raise

You can raise terrain areas with the brush to give additional elevation to certain areas. Set your brush radius and strength and left click the map to raise terrain.

### Set Height

You can raise or lower terrain to a specific height using the set height tools. 

{: .tip }
> You can shift-click the map to sample the current height of a spot.

## Processing

Processing operations allow you to automate some operations on the entire terrain. Most expect that your <a href="/course-building/course-layers/svg/">course SVG</a> is built and loaded in, as they need to be able to sample defined river and lake areas.

### Smooth All

You can apply a blanket smoothing to your terrain data by setting the amount and clicking the smooth all button.

### Smooth Lake Areas

Smoothing lake aras will attempt to ensure the ring of your lakes are at a similar height. Since water planes are perfectly flat, a lake that isn't will cause the water plane to sit low or high in spots. This operation will smooth and dig around the lake edge to ensure it's flat enough for a water plane.

### Flatten Rivers

Since rivers can't flow uphill, this operation will ensure your river is dug out and flattened a bit.

