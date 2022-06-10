<body>
    

<div id="page3contentBox">
    <div id="cardNewsTextBox">
        <div id="title"><p class="sc5">Card News</p></div>
        <div id="kr-title"><p class="sc8">카드 뉴스</p></div>
    </div>

    <div class="cardNews">

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


<script>

</script>

<style>
    #cardNewsTextBox{
        margin-left: 15%;
    }
    .cardNews{
        display: flex;
        width: 100%;
        filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.58));
        animation: scroll 40s linear infinite;
    }

    .slide {
        display: flex;
        align-items: center;
        perspective: 20em;
    }

    img:hover{
        transform: translateZ(20px);
    }

    #title > p{
        font-size: 1.8rem;
    }

    
    #kr-title >p{
        font-size: 2.4rem;
    }
    /* Rectangle 25 */


    .cardNews::before,
    .cardNews::after{
        background: linear-gradient(90deg, rgba(46, 55, 53, 0.17) 0%, rgba(217, 217, 217, 0) 95.09%);
        content: '';
        height: 100%;
        position: absolute;
        width: 15%;
        z-index: 2;
    }

    .cardNews::before{
        left: 0;
        top: 0;
    }

    .cardNews::after{
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    @keyframes scroll{
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(-25em * 9);
        }
    }

</style>

</body>
