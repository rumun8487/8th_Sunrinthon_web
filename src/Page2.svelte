<script>
    import Timer from './Timer.svelte';
    import Schedule from './Schedule.svelte';
</script>

<div id="page2" class="grid">
    <div id="contentBox">
        <div>
            <div id="title"><p class="sc5">Timer & Schedule</p></div>
        </div>
        <Timer></Timer>
        <Schedule></Schedule>
    </div>
</div>

<style>
    #page2 {
        height: 100%;
        width: 100%;
        background-color: var(--cream);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #contentBox {
        width: 70%;
        height: 70%;
        display: flex;
    }

    #title {
        height: calc(70% / 20);
    }
</style>