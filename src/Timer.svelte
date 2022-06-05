<script>
    const handleUndefined = variable => variable || '00:00:00'
    const qualificationDue = new Date("6/18/22");
    let hour, min, sec;
    let formated;
    const timeLeft = setInterval(() => {
        let remaining = qualificationDue - Date.now();

        hour = Math.floor(remaining/1000  / 60 / 60);
        remaining -= hour* 1000 * 60 * 60
        min = Math.floor(remaining / 1000 / 60);
        remaining -= min * 1000 * 60
        sec = Math.floor(remaining / 1000);

        formated = `${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
    }, 1000);

</script>

<div id="contentBox">
    <div id="textBox">
        <p class="sc8">타이머 및 일정표</p>
        <p class="sc7 bluegreen">예선 마감 까지</p>
    </div>
    <div id="bubbleBox">
        <div id="speechBubble">
            <p class="sc7 cream">{handleUndefined(formated)}</p>
        </div>
    </div>
</div>

<style>
    #contentBox {
        width: 100%;
        height: 35%;
    }
    #textBox {
        display: flex;
        flex-direction: column;
    }
    #textBox :nth-child(1) {
        font-size: 24px;
        align-self: flex-start;
    }
    #textBox :nth-child(2) {
        font-size: 24px;
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
