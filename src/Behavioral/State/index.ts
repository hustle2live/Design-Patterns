interface IDevice {
   clickPower(): void;
   clickVolumeAdd(): void;
   clickVolumeLow(): void;
   loadApp(): void;
}

abstract class State implements IDevice {
   protected device: SmartPhone;
   abstract screenState: string;

   constructor(smartphone: SmartPhone) {
      this.device = smartphone;
   }

   abstract clickPower(): void;
   abstract clickVolumeAdd(): void;
   abstract clickVolumeLow(): void;
   abstract loadApp(): void;
}

enum ScreenState {
   READY = 'onReady',
   LOCKED = 'onLocked',
   BUSY = 'onApp'
}

class SmartPhone implements IDevice {
   state: State;
   constructor() {
      console.log(' ..... New device has initiated 📲 ..... ');
      this.state = new OnReadyState(this);
   }
   changeState(newState: State): void {
      this.state = newState;
      console.log('');
   }
   blockDisplay(): void {
      console.log('📴 Device screen blocked ');
   }
   unlockDisplay(): void {
      console.log('📱 Device unlocked ✔️');
   }
   loadApp(): void {
      console.log('--Clicked load app--');
      this.state.loadApp();
   }
   volumeIncrease(): void {
      console.log('volume more 🔊🔊');
   }
   volumeDecrease(): void {
      console.log('volume less 🔉');
   }
   clickPower(): void {
      console.log('--Clicked power Button--');
      this.state.clickPower();
   }
   clickVolumeAdd(): void {
      console.log('--Clicked Volume Add--');
      this.state.clickVolumeAdd();
   }
   clickVolumeLow(): void {
      console.log('--Clicked Volume Low--');
      this.state.clickVolumeLow();
   }
}

class OnReadyState extends State {
   screenState = ScreenState.READY;
   constructor(dev: SmartPhone) {
      super(dev);
      console.log(`Device is : ${this.screenState}`);
   }

   clickPower(): void {
      this.device.changeState(new OnLockedState(this.device));
   }
   clickVolumeAdd(): void {
      this.device.volumeIncrease();
   }
   clickVolumeLow(): void {
      this.device.volumeDecrease();
   }

   loadApp(): void {
      console.log('loading app 🔂');
      this.device.changeState(new OnAppState(this.device));
   }
}

class OnLockedState extends State {
   screenState = ScreenState.LOCKED;
   constructor(dev: SmartPhone) {
      super(dev);
      console.log(`Device is : ${this.screenState}`);
   }

   clickPower(): void {
      this.device.changeState(new OnReadyState(this.device));
   }

   clickVolumeAdd(): void {
      console.log('[Denied:] The device is locked 📵');
   }

   clickVolumeLow(): void {
      console.log('[Denied:] The device is locked 📵');
   }

   loadApp(): void {
      console.log('[Denied:] The device is locked 📵');
   }
}

class OnAppState extends State {
   screenState = ScreenState.BUSY;
   constructor(dev: SmartPhone) {
      super(dev);
      console.log(`Device is : ${this.screenState}`);
   }

   clickPower(): void {
      this.device.changeState(new OnLockedState(this.device));
   }
   clickVolumeAdd(): void {
      this.device.volumeIncrease();
   }
   clickVolumeLow(): void {
      this.device.volumeDecrease();
   }
   loadApp(): void {
      console.log('loading app 🔂');
      this.device.changeState(new OnAppState(this.device));
   }
}

const myDevice = new SmartPhone();
console.log('');

myDevice.clickPower();
console.log('');
myDevice.clickVolumeAdd();
console.log('');
myDevice.loadApp();
console.log('');

myDevice.clickPower();
console.log('');

myDevice.clickVolumeLow();
myDevice.clickVolumeLow();
console.log('');

myDevice.clickVolumeAdd();
console.log('');

myDevice.loadApp();
