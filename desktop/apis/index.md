---
parent: OpenGolfSim Desktop
title: Developer API
thumbnail: /assets/white_256x256.png
---

At OpenGolfSim, we believe in being as transparent and developer friendly as possible. We think this helps grow an active and engaged community and empowers more users to build cool things. 

Below you'll find documentation for our developer API. It's still in the early stages, so check back often for updates.

Have a feature or API idea? Want to nerd out? Come drop us a line on our <a href="/connect-with-us">Discord</a>, we'd love to see what you're building!

1. TOC
{:toc}


## TCP Connection

Our Developer API allows for simple TCP communication on port `3111` to communicate with the OpenGolfSim app programmatically. This makes it easy to create your own experimental integrations, launch monitor connectors, or other custom automation.

{: .tip }
> If connecting over the network, you can also use the local IP of your machine (e.g. `192.168.x.x`)


Once you've established a connection, you can send and receive messages to interact with the API. See our [example code](./examples) to get an idea of how to connect.


## Commands

Below is a list of the commands and payloads that can be sent to the OpenGolfSim API. Messages are JSON formatted payloads sent over the TCP connection.


### Device Status

You can indicate the device's status by sending a `ready` or `busy` event type.

*An example payload for indicating a launch monitor is ready to receive shots:*

```javascript
{
  "type": "device",
  "status": "ready"
}
```

*An example payload for indicating a launch monitor is busy:*

```javascript
{
  "type": "device",
  "status": "busy"
}
```

### Shot Data

Clients can send the follow shot data measurements to simulate or record a shot in OpenGolfSim.

- `type`
  - `shot` - The message type for shots

- `unit`
  - `imperial` - (default) Indicates the speed values are in miles per hour
  - `metric` - Indicates the speed is supplied in meters per second

- `shot`
  - `ballSpeed` - The ball speed in miles per hour (`imperial`) or meters per second (`metric`)
  - `verticalLaunchAngle` - The vertical launch angle of the shot. Should be between 0&deg; and 45&deg;
  - `horizontalLaunchAngle` - The horizontal launch angle of the shot. Should be between -45&deg; and 45&deg;
  - `spinSpeed` - The ball spin speed in rotations per minute (RPM)
  - `spinAxis` - Spin axis. Values should be between -45&deg; and 45&deg;

{: .note }
> Note: If no unit is supplied, then `imperial` (MPH) will be assumed.

*An example payload for a shot in MPH:*

```json
{
  "type": "shot",
  "shot": {
    "ballSpeed": 101.2,
    "verticalLaunchAngle": 15.4,
    "horizontalLaunchAngle": -2.1,
    "spinSpeed": 3021,
    "spinAxis": -0.5
  }
}
```

*An example payload for a shot in metric units:*

```json
{
  "type": "shot",
  "unit": "metric",
  "shot": {
    "ballSpeed": 44.704,
    "verticalLaunchAngle": 15.4,
    "horizontalLaunchAngle": -2.1,
    "spinSpeed": 3021,
    "spinAxis": -0.5
  }
}
```

## Events

The API server will send JSON formatted messages over the TCP connection, which you can read and process for your own project. Below is a list of the events that are sent to any active TCP connection.


### Player Update

Player updates are sent any time a player or player property like the current club is changed.

- `type` - The event type is `player`

- `data` - The player update data
  - `playerId` - The unique player ID
  - `currentPosition` - The players current global position on the map.
  - `club` - The players current club
    - `name` - The club name
    - `id` - The two letter club identifier
    - `distance` - The user setting for this club's distance in meters


```json
{
  "type": "player",
  "data": {
    "playerId": "b79b745b-e643-4b28-be4e-f4ad4690907a",
    "currentPosition": {"x":0,"y":0,"z":0},
    "club": {
      "name": "3W",
      "id": "3W",
      "distance": 205
    }
  }
}
```

### Shot Result

When a shot is completed in the simulator, the Developer API will send a result event with some details about the shot. Note that at the time of writing result data will always be stored/sent in meters.

#### `type`
- `result` - The message type for shots

#### `unit`
- `imperial` - (default) Indicates the speed values are in miles per hour

```json
{
  "type": "result",
  "data": {
    "result": {
      "carry": 196.06776428222656,
      "height": 18.728025436401367,
      "roll": 6.482479572296143,
      "total": 202.54876708984375,
      "lateral": -0.07558325678110123
    },
    "club": {
      "name": "5W",
      "id": "5W",
      "distance": 205
    },
    "shot": {
      "ballSpeed": 135,
      "verticalLaunchAngle": 11.100000381469727,
      "horizontalLaunchAngle": 1.2000000476837158,
      "spinAxis": -2.5,
      "spinSpeed": 4800
    },
    "sessionId": 22
  }
}
```

<!-- #### Shot Result

After a shot has been completed in OpenGolfSim Core connected sockets will receive a `result` event with some stats about the shot from the simulator. This is useful for displaying or recording shot data in your own application.

```json
{
  "type": "result",
  "result": {
    "carry": 220.0,
    "total": 221.5,
    "roll": 1.5,
    "height": 48.1
  },
  "shot": {
    "ballSpeed": 128.5,
    "horizontalLaunchAngle": 2.4,
    "verticalLaunchAngle": 2.4,
    "spinSpeed": 2002,
    "spinAxis": -1.2
  }
}
``` -->

<!-- #### Player Change

When a new player is up, this event will fire and include some details about the player's current state in the game.

```json
{
  "type": "player",
  "player": {
    "name": "Fry",
    "id": "1234-5678-9101-11"
  },
  "state": {
    "score": 8,
    "hole": 4,
    "distanceToPin": 224
  }
}
``` -->
