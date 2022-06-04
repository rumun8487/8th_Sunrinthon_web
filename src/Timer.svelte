<script>

</script>

<div id="contentBox">
    <div id="anotherBox">
        <div id="textBox">
            <p>타이머 및 일정표</p>
            <p>예선 마감 까지</p>
        </div>
        <div id="bubbleBox">
            <div id="speechBubble">
                <p class="sc7 cream">00:00:00</p>
            </div>
        </div>
    </div>
</div>

<style>
    #contentBox {
        width: 100%;
        height: 45%;
        display: flex;
        
    }

    #anotherBox {
        display: flex;
    }
    #textBox {
        display:flex;
        flex-direction: column;
    }
    #textBox :nth-child(1) {
        align-self: flex-start;
    }
    #textBox :nth-child(2) {
        align-self: flex-end;
    }
    #bubbleBox{
        background-color: var(--blue-green);
        height: fit-content;
        width: 100%;
    }

    #speechBubble {
        
        position:relative;
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
        right: 48.5%;
        top: 100%;
        position: absolute;
        border-top: 30px solid var(--blue-green);
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 30px solid transparent;
    }

    #speechBubble > p {
        font-size: 64px;
        text-align: center;
    }
</style>