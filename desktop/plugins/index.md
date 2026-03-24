---
parent: OpenGolfSim Desktop
title: Plugins
nav_order: 8
---

# Plugins

You can extend OpenGolfSim by writing your own custom plugins, which run within the main OpenGolfSim desktop app window. Plugins are still very experimental and only support custom launch monitor plugins.

1. TOC
{:toc}


## SDK Documentation

You can browse our full [Plugin SDK Documentation](/apis/plugins/) here.

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
      "name": "Connector API",
      "version": "1.0.0",
      "description": "Creates a simple TCP server to allow connectors to send and receive shot data",
      "plugin": {
        "type": "launch"
      }
    }
    ```

1. `index.js` - This file will contain all your javascript plugin code. When your plugin is started we'll execute the code in this file.


```javascript
const PORT = 3921;

const device = { isConnected: false, isReady: false };


const serverCallback = (socket) => {
  // A TCP client has connected
  device.isConnected = true;
  launchMonitor.updateDeviceStatus(device);

  socket.on('data', (data) => {
    // A message has been received
    console.log(`Socket data received`);
    try {
      // Parse the JSON payload
      const obj = JSON.parse(data);
      if (obj.type === 'device') {
        // Set the status to ready
        launchMonitor.setReady(obj.status === 'ready');
      } else if (obj.type === 'shot') {
        // Send the shot data in OpenGolfSim format
        launchMonitor.sendShot({
          ballSpeed: obj.shot.speed,
          verticalLaunchAngle: obj.shot.vla,
          horizontalLaunchAngle: obj.shot.hla,
          spinSpeed: obj.shot.totalspin,
          spinAxis: obj.shot.spinaxis
        });
      }

    } catch (error) {
      console.error(error);
    }
  });

  socket.on('end', () => {
    console.log(`Socket ended`);
    device.isConnected = false;
    launchMonitor.updateDeviceStatus(device);
  });

  socket.on('error', (err) => {
    console.error(`Socket error: ${err}`);
  });
};

const server = network.createServer(serverCallback);

server.on('close', () => {
  console.log('TCP server closed');
});

console.log(`Starting TCP server...`);
server.listen(PORT, () => {
  console.log(`TCP server listening at 127.0.0.1:${PORT}`);
});
```