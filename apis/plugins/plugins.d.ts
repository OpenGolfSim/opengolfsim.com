/**
 * The OpenGolfSim Plugin SDK
 * 
 * @packageDocumentation
 * 
 * You can extend the functionality of OpenGolfSim by creating or installing your own custom plugins.
 * 
 * For security, our Plugin SDK operates in a isolated script context. So we expose some global namespaces to enable communications with OpenGolfSim and launch monitors over network (TCP, WebSockets) or bluetooth. 
 * 
 *   - No Module System: require(), import, and export are disabled.
 *   - Global Scope: Only the specific namespaces defined below are available.
 *   - Standard JS: Only ECMAScript built-ins (e.g., `JSON`, `Map`, `Math`) are present.
 * 
 * 
 * ## Install Plugins
 * To install an new plugin, copy the provided plugin to your OpenGolfSim `plugins/` folder.
 * 
 * ### Plugin Folder Location
 * 
 * #### Windows
 * 
 * On Windows, the plugins folder should be found at:
 * 
 * ```
 * %USERPROFILE%\AppData\Roaming\opengolfsim-desktop\plugins\your-custom-plugin
 * ```
 * 
 * #### MacOS
 * 
 * On MacOS, the plugins folder should be found at:
 * 
 * ```
 * ~/Library/Application Support/opengolfsim-desktop/plugins/your-custom-plugin
 * ```
 * 
 * ## Development
 * 
 * To create a new custom plugin, create a new folder in the OpenGolfSim `plugins/` folder (see above) and create the following two files inside it:
 * 
 * 1. `package.json` - A metadata file that contains information about your plugin in JSON format
 * 
 *     Here is an example `package.json` file:
 * 
 *     ```json
 *     {
 *       "name": "Connector API",
 *       "version": "1.0.0",
 *       "description": "Creates a simple TCP server to allow connectors to send and receive shot data",
 *       "plugin": {
 *         "type": "launch"
 *       }
 *     }
 *     ```
 * 
 * 1. `index.js` - This file will contain all your javascript plugin code. When your plugin is started we'll execute the code in this file.
 * 
 * @example
 * /// <reference path="https://help.opengolfsim.com/apis/plugins/plugins.d.ts" />
 * const PORT = 3921;
 * 
 * const device = { isConnected: false, isReady: false };
 * 
 * const server = network.createServer((socket) => {
 *   // A TCP client has connected
 *   device.isConnected = true;
 *   launchMonitor.updateDeviceStatus(device);
 * 
 *   socket.on('data', (data) => {
 *     // A message has been received
 *     logging.info(`Socket data received`);
 *     try {
 *       // Parse the JSON payload
 *       const obj = JSON.parse(data);
 *       if (obj.type === 'device') {
 *         // Set the status to ready
 *         launchMonitor.setReady(obj.status === 'ready');
 *       } else if (obj.type === 'shot') {
 *         // Send the shot data in OpenGolfSim format
 *         launchMonitor.sendShot({
 *           ballSpeed: obj.shot.speed,
 *           verticalLaunchAngle: obj.shot.vla,
 *           horizontalLaunchAngle: obj.shot.hla,
 *           spinSpeed: obj.shot.totalspin,
 *           spinAxis: obj.shot.spinaxis
 *         });
 *       }
 * 
 *     } catch (error) {
 *       console.error(error);
 *     }
 *   });
 * 
 *   socket.on('end', () => {
 *     console.log(`Socket ended`);
 *     device.isConnected = false;
 *     launchMonitor.updateDeviceStatus(device);
 *   });
 * 
 *   socket.on('error', (err) => {
 *     console.error(`Socket error: ${err}`);
 *   });
 * });
 * 
 * console.log(`Starting TCP server...`);
 * server.listen(PORT, () => {
 *   console.log(`TCP server listening at 127.0.0.1:${PORT}`);
 * });
 */

declare global {
  
  /** @namespace */
  namespace logging {
    function info(...args: any[]): void
    function error(...args: any[]): void
  }

  /**
   * Send and re
   * @namespace
   *
   */
  namespace shotData {

    type Status = {
      isConnected: boolean;
      isReady: boolean;
      batteryLevel?: number;
      firmware?: string;
    };

    type Shot = {
      shotNumber: number;
      ballSpeed: number;
      verticalLaunchAngle: number;
      horizontalLaunchAngle: number;
      spinSpeed: number;
      spinAxis: number;
    };
    
    /** Listen for shot events */
    function on(event: 'shot', listener: (shot: Shot) => void): void;
    /** Listen for club change events */
    function on(event: 'club', listener: (clubId: string) => void): void;
    
    /** Remove a shot event listener */
    function off(event: 'shot', listener: (shot: Shot) => void): void;
    /** Remove a club event listener */
    function off(event: 'club', listener: (clubId: string) => void): void;
    
    /** Set the launch monitor status */
    function updateDeviceStatus(status: Status): void;
    
    /** Send a shot to OpenGolfSim */
    function sendShot(shot: Shot): void;
  }

  
  /**
   * Methods used for creating network (TCP) connections
   * @namespace
  */
  namespace network {
    
    interface TCPSocket {
      on(event: 'data', listener: (d: string) => void): this;
      on(event: 'connect', listener: () => void): this;
      on(event: 'close', listener: () => void): this;
      on(event: 'error', listener: (e: Error) => void): this;
      connect(port: number, host: string, callback: () => void): this;
      write(data: string | Uint8Array): void;
      destroy(): void;
    }
    
    interface TCPServer {
      on(event: 'close', listener: () => void): this;
      on(event: 'error', listener: (e: Error) => void): this;
      on(event: 'connection', listener: (socket: TCPSocket) => void): this;
      listen(port: number, callback: () => void): void;
      close(): void;
    }
    

    function createServer(onSocketConnected: (socket: TCPSocket) => void): TCPServer;
    
  }


  /**
   * Communicate with devices over bluetooth low-energy
   * @namespace
   * @example
   * const bt = bluetooth.createClient();
   * bt.on('discover', (device) => console.log('discovered device', device));
   * await bt.waitForPoweredOn();
   * await bt.startScanning();
   */
  namespace bluetooth {
    type BluetoothAdapterState = 'poweredOn' | 'poweredOff' | 'unauthorized' | 'unsupported' | 'unknown' | 'resetting';
    type BluetoothDeviceState = 'error' | 'connecting' | 'connected' | 'disconnecting' | 'disconnected';

    /** Represents a bluetooth characteristic on the device */
    interface BluetoothCharacteristic {
      on(event: 'data', listener: (data: ArrayBufferLike, isNotification: boolean) => void): this;
      read(): Promise<ArrayBufferLike>;
      write(data: ArrayBufferLike, withoutResponse?: boolean): Promise<void>;
      subscribe(): Promise<void>;
      unsubscribe(): Promise<void>;
    }
    
    /** Represents a bluetooth service on the device */
    interface BluetoothService {
      uuid: string;
    }

    interface BluetoothDeviceAdvertisement {
      localName: string;
      serviceData: {
        uuid: string,
        data: ArrayBufferLike
      }[];
      txPowerLevel: number;
      manufacturerData: ArrayBufferLike;
      serviceUuids: string[];
      serviceSolicitationUuids: string[];
    }

    /** Represents a bluetooth device */
    interface BluetoothDevice {
      readonly id: string;
      readonly address: string;
      readonly addressType: 'public' | 'random';
      readonly connectable: boolean;
      readonly advertisement: BluetoothDeviceAdvertisement;
      readonly rssi: number;
      readonly mtu: number | null;
      readonly state: BluetoothDeviceState;

      connect(): Promise<void>;
      discoverAllServicesAndCharacteristics(): Promise<{
        services: BluetoothService[];
        characteristics: BluetoothCharacteristic[];
      } | undefined>;
    }
    
    /** The main bluetooth interface used for scanning and connecting to devices */
    interface BluetoothClient {
      on(event: 'stateChange', listener: (state: BluetoothAdapterState) => void): this;
      on(event: 'discover', listener: (device: BluetoothDevice) => void): this;
      waitForPoweredOn(timeout?: number): Promise<void>;
      startScanning(serviceUUIDs?: string[], allowDuplicates?: boolean): Promise<void>;
      stopScanning(): Promise<void>;
    }

    function createClient(): BluetoothClient;

  }

}

export {};