<script>
    const openLink = () => () => {
        window.open("https://bit.ly/8th_sunrinthon_tryout")
    }
</script>

<main>
    <div id="page1_cont1">
        <div id="content1Box">
            <div id="textBox">
                <p class="sc5 cream">선린인터넷 고등학교 최대규모 대회</p>
                <p class="sc7 cream">Sunrinthon</p>
            </div>
            <div id="assign">
                <div id="linkBox">
                    <span class="sc7" on:click={openLink()}>신청하기</span>
                </div>
            </div>
        </div>
    </div>
    <div id="page1_cont2">
        <img src="/textBubble.png" alt="선린 인터넷" id="textBubble" />
        <img src="/cursor.png" alt="커서" id="handCursor" />
    </div>
</main>

<style>
    main {
        margin-top: 5%;
        display: flex;
        height: 75%;
    }

    #page1_cont1 {
        width: 55vw;
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

    #content1Box {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #textBox :nth-child(1) {
        font-size: 2.4rem;
    }

    #textBox :nth-child(2) {
        font-size: 5rem;
    }


    #linkBox {
        width: fit-content;
        background-color: #f7e79e;
        color: #a07f4e;
        border-radius: 10px;
        padding: 5px 40px 5px;
        box-shadow: 0px 10px 27px 2px rgba(0, 0, 0, 0.08);
        cursor: pointer;
    }

    #linkBox > span {
        font-size: 2.8rem;
    }

    #textBubble {
        position: relative;
        z-index: 1;
        width: 70%;
        filter: drop-shadow(0.6em 1em 0.5em var(--grey-for-shadow));
    }

    #handCursor {
        position: absolute;
        z-index: 3;
        width: 5%;
        margin-left: 30%;
        margin-top: 15%;
    }

    @media only screen and (max-width: 820px) {
        main {
            display: flex;
            flex-wrap: wrap;
        }

        #page1_cont1 {
            z-index: 1;
            width: 100%;
            height: 100%;
        }

        #content1Box {
            display: flex;
            justify-content: space-between;
        }
        #page1_cont2 {
            position: absolute;
            bottom: 0.5%;
            width: 100%;
            height: 100%;
        }

        #textBox {
            text-align: center;
        }

        #textBox :nth-child(1) {
            font-size: 2rem;
        }

        #textBox :nth-child(2) {
            font-size: 3.5rem;
        }

        #assign {
            display: flex;
            justify-content: center;
        }
    }

    @media only screen and (min-width: 530px) and (max-width:820px){
        #page1_cont2 {
            top: 30%;
            align-items: center;
            height: 50%;
        }

        #linkBox {
            font-size: 1.8rem;
        }
    }

</style>
