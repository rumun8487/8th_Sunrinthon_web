<script>
    import Nav from "./Nav.svelte";
    import Main from "./Main.svelte";
</script>

<div id="page" class="grid">
    <Nav></Nav>
</div>

<style>
    .grid {
        background-image: linear-gradient(to top, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px , transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
            linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px);
        background-size: 
            10vw 10vh,
            10vw 10vh,
            15vw 10vh,
            25vw 10vh,
            35vw 10vh,
            55vw 10vh,
            65vw 10vh,
            75vw 10vh,
            85vw 10vh;
    }

    @media only screen and (max-width: 1200px) {
        .grid {
            background-image: linear-gradient(to top, var(--rgba-grey) 1px, transparent 1px),
                linear-gradient(to left, var(--rgba-grey) 1px , transparent 1px),
                linear-gradient(to left, var(--rgba-grey) 1px, transparent 1px),
                linear-gradient(to right, rgba(0,0,0,0) 50%,var(--rgba-grey) 1px, transparent 1px);
            background-size: 
                25vw 10vh,
                25vw 10vh,
                100vw 10vh,
                100vw 10vh;
        }
    }

    #page {
        width: 100%;
        height: 100%;
        background-color: var(--blue-green);
    }
</style>
