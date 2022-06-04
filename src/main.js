import Page1 from './Page1.svelte';
import Page2 from './Page2.svelte';

const Main = new Page1({
	target: document.body
})

const TimerSchedule = new Page2({
	target: document.body
})

export default [Main, TimerSchedule];