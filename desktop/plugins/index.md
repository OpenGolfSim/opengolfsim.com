---
parent: OpenGolfSim Desktop
title: Plugins
nav_order: 8
---

# Plugins

You can extend OpenGolfSim by writing your own custom plugins, which run within the main OpenGolfSim desktop app window. Plugins are still very experimental and only support custom launch monitor plugins.

1. TOC
{:toc}

## Execution Environment

For security, our Plugin SDK operates in a isolated script context. So we expose some global namespaces to enable communications with OpenGolfSim and launch monitors over network (TCP, WebSockets) or bluetooth. 

- No Module System: require(), import, and export are disabled.

- Global Scope: Only the specific namespaces defined below are available.

- Standard JS: Only ECMAScript built-ins (e.g., `JSON`, `Map`, `Math`) are present.

### Documentation

- [SDK Reference](/apis/plugins/) - Our full plugin SDK reference docs.
- [`plugins.d.ts`](https://help.opengolfsim.com/apis/plugins.d.ts) - Our SDK type definition file. Useful for supplying to LLMs or IDEs for programmatic information about our SDK methods and options.

  {: .note }
  > Most modern IDEs like VSCode will load our SDK types for reference and code completion by adding a triple slash reference at the top of your plugin code that points to a local version of the `plugins.d.ts` file. Learn more about [triple slash directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).
  > ```
  > /// <reference path="plugins.d.ts" />
  > ```

## Install Plugins

To install a plugin, copy the provided plugin to your OpenGolfSim `plugins/` folder (see below).

### Plugin Folder Location

The plugin folder contains all your installed plugins.

#### Windows

On Windows, the plugins folder should be found at:

```
%USERPROFILE%\AppData\Roaming\opengolfsim-desktop\plugins\
```

#### MacOS

On MacOS, the plugins folder should be found at:

```
~/Library/Application Support/opengolfsim-desktop/plugins/
```

## Development

To create a new custom plugin, create a new folder in the OpenGolfSim `plugins/` folder (see above) and create the following two files inside it:

1. `package.json` - A metadata file that contains information about your plugin in JSON format

    Here is an example `package.json` file:

    ```json
    {
      "name": "Connector API",
      "version": "1.0.0",
      "description": "Creates a simple TCP server to allow connectors to send and receive shot data",
      "plugin": {
        "type": "launch"
      }
    }
    ```

1. `index.js` - This file will contain all your javascript plugin code. When your plugin is started we'll execute the code in this file.

    Here's a simple example of creating a new TCP server on port `3921` that listens for status and shot data events, and sends them to OpenGolfSim.

    ```javascript
    /// <reference path="plugins.d.ts" />

    const PORT = 3921;

    const device = { isConnected: false, isReady: false };

    const server = network.createServer((socket) => {
      // A TCP client has connected
      device.isConnected = true;
      shotData.updateDeviceStatus(device);

      socket.on('data', (data) => {
        // A message has been received
        logging.info(`Socket data received`);
        try {
          // Parse the JSON payload
          const obj = JSON.parse(data);

          if (obj.type === 'device') {
            // Set the status to ready
            device.isReady = obj.status === 'ready';
            shotData.updateDeviceStatus(device);

          } else if (obj.type === 'shot') {
            // Send the shot data in OpenGolfSim format
            shotData.sendShot({
              ballSpeed: obj.shot.speed,
              verticalLaunchAngle: obj.shot.vla,
              horizontalLaunchAngle: obj.shot.hla,
              spinSpeed: obj.shot.totalspin,
              spinAxis: obj.shot.spinaxis
            });

          }

        } catch (error) {
          logging.error(error);
        }
      });

      socket.on('end', () => {
        logging.info(`Socket ended`);
        device.isConnected = false;
        shotData.updateDeviceStatus(device);
      });

      socket.on('error', (err) => {
        logging.error(`Socket error: ${err}`);
      });
    });

    server.on('close', () => {
      logging.info('TCP server closed');
    });

    logging.info(`Starting TCP server...`);
    server.listen(PORT, () => {
      logging.info(`TCP server listening at 127.0.0.1:${PORT}`);
    });

    ```