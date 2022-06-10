

<div id="page3contentBox">
    <div id="cardNewsTextBox">
        <div id="title"><p class="sc5">Card News</p></div>
        <div id="kr-title"><p class="sc8">카드 뉴스</p></div>
    </div>

    <div class="cardNews">
        <div id="slideContainer">
            <div class="slide">
                <img src="/cards/card1.png">
            </div>
            <div class="slide">
                <img src="/cards/card2.png">
            </div>
            <div class="slide">
                <img src="/cards/card3.png">
            </div>
            <div class="slide">
                <img src="/cards/card4.png">
            </div>
            <div class="slide">
                <img src="/cards/card5.png">
            </div>
        </div>
    </div>

</div>


<script>

</script>

<style>
    #cardNewsTextBox{
        margin-left: 15%;
    }
    #slideContainer {
        display: flex;
        animation: 20s linear 1s infinite alternate scroll;
    }

    #slideContainer :after {
        
    }

    .cardNews{
        display: flex;
        width: 100%;
        filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.4));
        
    }

    .cardNews:after {
        background-image: linear-gradient(to right, var(--rgba-grey) 1px, transparent 100px);
    }


    /* .cardNews:hover {
        animation-play-state: paused;
    } */

    .slide {
        display: flex;
        align-items: center;
        perspective: 10em;
        transition: transform .4s;
    }

    .slide:hover{
        transform: scale(1.01);
        
    }

    #title > p{
        font-size: 1.8rem;
    }

    
    #kr-title >p{
        font-size: 2.4rem;
    }


    @keyframes scroll{
        0%{
            transform: translateX(-50%);
        }
        100%{
            transform: translateX(5%);
        }
    }

</style>

