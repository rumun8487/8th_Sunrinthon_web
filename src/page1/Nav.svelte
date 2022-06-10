<script>
</script>

<nav>
    <div id="imageBox">
        <img src="/logo.png" alt="로고" id="nav_logo" />
    </div>
    <div id="nav_list_box">
        <ul id="nav_list">
            <li class="nav_item" onclick="">메인화면</li>
            <li class="nav_item" onclick="">타이머 & 일정</li>
            <li class="nav_item" onclick="">참가팀</li>
            <li class="nav_item" onclick="">대회 안내</li>
            <li class="nav_item" onclick="">카드뉴스</li>
        </ul>
    </div>
</nav>

<style>
    /**일단 임시로 박아논 css 수정 맘대로해봐요*/
    nav {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: space-around;
    }
    #imageBox {
        max-width: 50%;
        max-height: 100%;
    }
    #nav_logo {
        max-width: 100%;
        max-height: 100%;
        margin-top: 60px;
        width: 168px;
        height: 41px;
    }
    #nav_list_box {
    }
    #nav_list {
        list-style: none;
        user-select: none;
    }
    .nav_item {
        display: list-item;
        font-size: 1.8em;
        margin-left: 40px;
        margin-top: 15px;
        font-family: "SCDream7";
        color: white;
        float: left;
    }

    @media only screen and (max-width: 820px) {
        nav {
            height: 20%;
            display: flex;
            flex-wrap: wrap;
        }

        #imageBox {
            margin-top: 10px;
            max-width: 100%;
            max-height: 100%;
        }

        #nav_logo {
            margin-top: 0px;
        }

        #nav_list {
            display: flex;

            justify-content: space-around;
        }

        .nav_item {
            font-size: 1.4rem;
            font-family: "SCDream5";
            margin-left: 10px;
        }
    }
</style>
