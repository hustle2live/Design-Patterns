class State {
    constructor(smartphone) {
        this.device = smartphone;
    }
}
var ScreenState;
(function (ScreenState) {
    ScreenState["READY"] = "onReady";
    ScreenState["LOCKED"] = "onLocked";
    ScreenState["BUSY"] = "onApp";
})(ScreenState || (ScreenState = {}));
class SmartPhone {
    constructor() {
        console.log(' ..... New device has initiated 📲 ..... ');
        this.state = new OnReadyState(this);
    }
    changeState(newState) {
        this.state = newState;
        console.log('');
    }
    blockDisplay() {
        console.log('📴 Device screen blocked ');
    }
    unlockDisplay() {
        console.log('📱 Device unlocked ✔️');
    }
    loadApp() {
        console.log('--Clicked load app--');
        this.state.loadApp();
    }
    volumeIncrease() {
        console.log('volume more 🔊🔊');
    }
    volumeDecrease() {
        console.log('volume less 🔉');
    }
    clickPower() {
        console.log('--Clicked power Button--');
        this.state.clickPower();
    }
    clickVolumeAdd() {
        console.log('--Clicked Volume Add--');
        this.state.clickVolumeAdd();
    }
    clickVolumeLow() {
        console.log('--Clicked Volume Low--');
        this.state.clickVolumeLow();
    }
}
class OnReadyState extends State {
    constructor(dev) {
        super(dev);
        this.screenState = ScreenState.READY;
        console.log(`Device is : ${this.screenState}`);
    }
    clickPower() {
        this.device.changeState(new OnLockedState(this.device));
    }
    clickVolumeAdd() {
        this.device.volumeIncrease();
    }
    clickVolumeLow() {
        this.device.volumeDecrease();
    }
    loadApp() {
        console.log('loading app 🔂');
        this.device.changeState(new OnAppState(this.device));
    }
}
class OnLockedState extends State {
    constructor(dev) {
        super(dev);
        this.screenState = ScreenState.LOCKED;
        console.log(`Device is : ${this.screenState}`);
    }
    clickPower() {
        this.device.changeState(new OnReadyState(this.device));
    }
    clickVolumeAdd() {
        console.log('[Denied:] The device is locked 📵');
    }
    clickVolumeLow() {
        console.log('[Denied:] The device is locked 📵');
    }
    loadApp() {
        console.log('[Denied:] The device is locked 📵');
    }
}
class OnAppState extends State {
    constructor(dev) {
        super(dev);
        this.screenState = ScreenState.BUSY;
        console.log(`Device is : ${this.screenState}`);
    }
    clickPower() {
        this.device.changeState(new OnLockedState(this.device));
    }
    clickVolumeAdd() {
        this.device.volumeIncrease();
    }
    clickVolumeLow() {
        this.device.volumeDecrease();
    }
    loadApp() {
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
