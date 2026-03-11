---
parent: OpenGolfSim Desktop
title: Plugins
nav_order: 8
published: false
---

# Plugins

You can extend OpenGolfSim by writing your own custom plugins, which run within the main OpenGolfSim desktop app window. Plugins are still very experimental and only support custom launch monitor plugins.

1. TOC
{:toc}


## Install Plugins

To install an new plugin, copy the provided plugin to your OpenGolfSim `plugins/` folder.

### Plugin Folder Location

#### Windows

On Windows, the plugins folder should be found at:

```
%USERPROFILE%\AppData\Roaming\opengolfsim-desktop\plugins\your-custom-plugin
```

#### MacOS

On MacOS, the plugins folder should be found at:

```
~/Library/Application Support/opengolfsim-desktop/plugins/your-custom-plugin
```

## Development

To create a new custom plugin, create a new folder in the OpenGolfSim `plugins/` folder (see above) and create the following two files inside it:

1. `package.json` - A metadata file that contains information about your plugin in JSON format

    Here is an example `package.json` file:

    ```json
    {
      "name": "OpenConnect API",
      "version": "1.0.0",
      "description": "Creates an OpenConnect v1 API server to allow connectors to send shot data over TCP",
      "main": "index.js",
      "plugin": {
        "type": "launch"
      }
    }
    ```

1. `index.js` - This file will contain your javascript plugin code. When your plugin is started we'll execute the code in this file.