import Page1 from './Page1.svelte';
import Page2 from './Page2.svelte';
import Page3 from './Page3.svelte';

import SideBar from './SideBar.svelte';
import Team_list from './Team_list.svelte';

import Dummy from './Dummy.svelte';


const Sidebar = new SideBar ({
	target: document.body
})

const Main = new Page1({
	target: document.body
})

const TimerSchedule = new Page2({
	target: document.body
})

const TeamList = new Team_list({
	target: document.body
})

const InfoCard = new Page3({
	target: document.body
})

const DummyPage = new Dummy ({
	target:document.body
})



export default [Sidebar, Main,TimerSchedule,TeamList, InfoCard, DummyPage];
