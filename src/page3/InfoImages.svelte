<script>
    export let currentImage, isOpen;

    let height;
    
    $: (currentImage == 6) ? height = 500 : height = 338;
    $: if(!isOpen) {
        height = 0;
    }
</script>

<div id="InfoImageSprite" style="background-position : {-1532 * ((currentImage) ? (currentImage-1) : 0)}px 0; height: {height}px;">

</div>

<style>
    #InfoImageSprite {
        background: url('/Imageslide.png');
        width: 600%;
        height: 338px;
        transition: all .4s ease-in-out;
    }
</style>