<script>

    setInterval(() => {
        document.querySelector("#sideBar").classList.toggle("hidden-left");
        document.querySelector("#applyButton").classList.toggle("hidden-right");
    }, 1000);
</script>

<div>
    <div id="sideBar" class="hidden-left">
        <ul class="sc5">
            <li>메인</li>
            <li>타이머</li>
            <li>참가팀</li>
            <li>안내</li>
        </ul>
    </div>
    <div id="applyButton" class="hidden-right">
        <div id="circle" >
            <span class="sc7">신청</span>
        </div>
    </div>
</div>



<style>
    #sideBar.hidden-left {
        margin-left: -30%;
    }

    #applyButton.hidden-right {
        margin-left: 30%;
    }

    #sideBar {
        display: flex;
        justify-content: center;
        position: absolute;
        background-color: var(--cream);
        margin-top: 7%;
        z-index: 10;
        height: 60%;
        width: 6%;
        margin-left: 30px;
        box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.38);
        border-radius: 10px;
        transition: all .4s ease-in-out;
    }
    #sideBar > ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        justify-content: space-around;
    }
    #sideBar > ul > li {
        font-size: 18px;
        margin: 10px;
    }
    
    #applyButton {
        z-index: 10;
        position: absolute;
        top: calc(70% - 45px);
        left: calc(100% - 90px - 2%);
        width: 100%;
        transition: all .4s ease-in-out;
        
    }
    #circle {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        color: #F5F8E0;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.44);
        background-color: #7F7562;
    }
</style>
