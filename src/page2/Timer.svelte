<script>
    export let formatedRemaining;

</script>

<div id="timerBox">
    <div id="textBox">
        <p class="sc8">타이머 및 일정표</p>
        <p class="sc7 bluegreen">예선 마감 까지</p>
    </div>
    <div id="bubbleBox">
        <div id="speechBubble">
            <p id="timeText" class="sc7 cream">{formatedRemaining}</p>
        </div>
    </div>
</div>

<style>
    #timerBox {
        width: 100%;
        height: 35%;
    }
    #textBox {
        display: flex;
        flex-direction: column;
    }
    #textBox :nth-child(1) {
        font-size: 2.4rem;
        align-self: flex-start;
    }
    #textBox :nth-child(2) {
        font-size: 2.4rem;
        align-self: flex-end;
    }
    #bubbleBox {
        background-color: var(--blue-green);
        height: fit-content;
        width: 100%;
    }

    #speechBubble {
        position: relative;
        width: 100%;
        height: fit-content;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    #speechBubble:before {
        content: "";
        width: 0px;
        height: 0px;
        right: 49.15%;
        top: 100%;
        position: absolute;
        border-top: 30px solid var(--blue-green);
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 30px solid transparent;
    }

    #speechBubble > p {
        font-size: 6.4rem;
        text-align: center;
    }

    @media only screen and (max-width: 860px) {
        #speechBubble {
            padding: 20px 0px 20px 0px;
            width: 100%;
        }

        #speechBubble:before {
            right: calc(50% - 30px)
        }
        #speechBubble > p {
        font-size: 3rem;
    }
    }
</style>
