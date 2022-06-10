<script>
    import Info from "./page3/info.svelte";
    import CardNews from "./page3/CardNews.svelte";
</script>

<div id="page3" class="grid">
    <div id="InfoTitle">
        <div id="contentBox">
                <div id="title"><p class="sc5">2022 8th Sunrinthon Information</p></div>
                <div id="kr-title"><p class="sc8">2022 8th 선린톤 대회 안내</p></div>
            </div>
        <Info></Info>
        <CardNews></CardNews>
    </div>
</div>

<style>
    #page3 {
        background-color: var(--cream);
        width: 100%;
        height: 150%;
        display: flex;
        align-content: center;
        justify-content: center;

    }

    #InfoTitle{
        width: 70%;
        height: 90%;
        display: flex;
        flex-direction: column;
        
    }

    #title > p{
        font-size: 18px;
        margin-top: 1%;
    }
    #kr-title>p{
        font-size: 24px;
    }



</style>