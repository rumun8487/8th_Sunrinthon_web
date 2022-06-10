<body>
    

<div id="contentBox">
    <div id="title"><p class="sc5">Card News</p></div>
    <div id="kr-title"><p class="sc8">카드 뉴스</p></div>
    <div id="cardNews">
        <object data="/card1.svg" type="image/svg+xml"></object>
        <object data="/card2.svg" type="image/svg+xml"></object>
        <object data="/card3.svg" type="image/svg+xml"></object>
        <object data="/card4.svg" type="image/svg+xml"></object>
        <object data="/card5.svg" type="image/svg+xml"></object>
    </div>
</div>

<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<script>
    $(document).ready(function(){
        $('.autoplay').slick({
            dots: true
        });
    });
</script>


<style>
    #CardNews{
        position: absolute;
        flex-direction: row;
        width: 150%;
    }

    #title > p{
        font-size: 18p  x;
    }

    #kr-title >p{
        font-size: 24px;
    }
</style>

</body>
