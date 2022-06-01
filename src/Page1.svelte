<script>
    import Nav from "./Nav.svelte";
    import Main from "./Main.svelte";
</script>

<div id="page" class="grid">
    
</div>

<style>
    .grid {
        background-image: linear-gradient(to top, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px);
        background-size: 
            10vw 10vh
            ;
    }
    #page {
        width: 100%;
        height: 100%;
        background-color: var(--blue-green);
    }
</style>
