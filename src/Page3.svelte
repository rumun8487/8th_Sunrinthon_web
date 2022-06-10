<script>
    import Info from "./page3/Info.svelte";
    import CardNews from "./page3/CardNews.svelte";
    import InfoImages from './page3/InfoImages.svelte';

    let selection;
    let open;
</script>

<div id="page3" >
    <div id="contentWrapper">
        <div id="page3Cont1" class="grid">
            <Info bind:select={selection} bind:isOpen = {open}   ></Info>
        </div>
        <InfoImages currentImage={selection} isOpen={open}></InfoImages>
        <div id="page3Cont2" class="grid">
            <!-- <div id="cardNewsTextBox">
                <p>Card News</p>
                <p>카드 뉴스</p>
            </div> -->
            <CardNews></CardNews>
        </div>
    </div>
</div>
<style>
    #page3 {
        background-color: var(--cream);
        width: 100%;
        height: 170%;
        display: flex;
        align-content: center;
        justify-content: center;
    }

    #contentWrapper {
        width: 100%;
        height: 85%;
    }

    #page3Cont1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 40%;
        padding-top: 3%;
    }

    #page3Cont2 {
        height: 73%;
    }



</style>