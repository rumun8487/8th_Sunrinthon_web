<main>
    
    <div id="page1_cont1">
        <div id="content1Box">
            <div id="textBox">
                <p class="sc5 cream" >선린인터넷 고등학교 최대규모 대회</p>
                <p class="sc7 cream" >Sunrinthon</p>
            </div>
            <div id="assign">
                <div id="linkBox">
                    <span class="sc7" >신청하기</span>
                </div>
            </div>
        </div>
    </div>
    <div id="page1_cont2">
        <img src="/textBubble.png" alt="선린 인터넷" id="textBubble">
    </div>
</main>

<style>
    main {
        display: flex;
        height: 75%;
    }

    #page1_cont1 {
        width: 45vw;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    #page1_cont2 {
        width: 55vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #content1Box{
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #textBox :nth-child(1) {
        font-size: 24px;
    }

    #textBox :nth-child(2) {
        font-size: 50px;
    }

    #linkBox{
        width: fit-content;
        background-color: #F7E79E;
        color: #A07F4E;
        border-radius: 5px;
        padding: 5px 40px 5px;
        box-shadow: 2px 2px 2px 2px var(--grey-for-shadow);
    }

    #linkBox > span {
        font-size: 28px
    }

    #textBubble {
        width: 70%;
    }
</style>