<script>
    import Nav from "./Nav.svelte";
    import Main from "./Main.svelte";
</script>

<div id="page" class="grid">
    <div id="tempNav">tempNav</div>
    <Main></Main>
</div>

<style>
    #tempNav{
        width: 100vw;
        height: 15%;
        background-color: white;
    }
    #page {
        width: 100%;
        height: 100%;
        background-color: var(--blue-green);
    }
</style>
