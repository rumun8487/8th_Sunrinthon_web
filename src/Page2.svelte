<script>
    import Timer from './Timer.svelte';
    import Schedule from './Schedule.svelte';
</script>

<div id="page2" class="grid">
    <div id="contentBox">
        <div>
            <div id="title"><p class="sc5">Timer & Schedule</p></div>
        </div>
        <div id="components">
            <Timer></Timer>
            <Schedule></Schedule>
        </div>
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
    
    #title > p {
        font-size: 18px;
    }

    #contentBox {
        width: 70%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #components {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
</style>