<template>
    <header class="header header--light is-scroll-top">
        <div class="wrapper">
          <div class="header-in">
            <div class="header-logo">
              <div class="header-collapse-logo">
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="138" height="16" viewBox="0 0 138 16"><path d="M5.867 15.473c-.167.29-.576.527-.91.527h-3.85c-.334 0-.457-.23-.273-.508l4.873-7.396c.184-.28.184-.736 0-1.015L1.375.508C1.19.23 1.315 0 1.648 0h4.087c.335 0 .735.242.89.54l1.58 3.034c.155.297.408.297.563 0L10.348.54c.154-.298.554-.54.888-.54h3.806c.334 0 .46.23.278.51l-4.08 6.34c-.18.28-.182.74 0 1.02l4.884 7.618c.18.282.053.512-.28.512H11.84c-.334 0-.737-.24-.896-.535l-2.172-4.027c-.158-.295-.424-.298-.59-.008l-2.317 4.043zM40.068.607A.61.61 0 0 1 40.676 0h5.994c1.063 0 2.824.365 3.625 1.096s1.338 1.54 1.612 2.424c.1.32.173.637.216.95.043.312.065.604.065.878 0 .275-.022.568-.065.88-.043.314-.116.63-.216.948-.26.885-.793 1.695-1.602 2.436-.808.738-2.02 1.107-3.636 1.107h-1.537a.608.608 0 0 0-.607.606v4.066a.609.609 0 0 1-.607.607h-3.244a.61.61 0 0 1-.607-.608V.607zm4.458 5.985c0 .334.224.607.498.607.273 0 .77-.027 1.102-.06 0 0 .47-.047.76-.262.288-.213.482-.44.583-.686.056-.168.093-.328.107-.48.016-.15.023-.273.023-.364s-.004-.182-.01-.273a5.031 5.031 0 0 0-.033-.275c-.072-.318-.252-.613-.54-.88-.29-.267-.788-.4-1.495-.4h-.388a.61.61 0 0 0-.607.608v2.464zM78 .604c0-.333.272-.604.604-.604h3.202c.333 0 .604.27.604.604v10.95c0 .332.272.603.604.603h2.175c.332 0 .603-.27.603-.604V.603A.61.61 0 0 1 86.4 0h3.2c.333 0 .604.27.604.604v10.95c0 .332.272.603.604.603h2.175c.333 0 .604-.27.604-.604V.603A.609.609 0 0 1 94.193 0h3.202c.333 0 .605.27.605.604v14.79a.606.606 0 0 1-.604.606H78.604a.605.605 0 0 1-.604-.604V.604zM104.83 13.6c-1.387-1.6-2.08-3.467-2.08-5.6 0-2.12.683-3.98 2.047-5.59C106.16.804 108.192 0 110.892 0h.216c2.7 0 4.732.804 6.096 2.41 1.363 1.61 2.046 3.47 2.046 5.59 0 2.133-.683 3.992-2.046 5.578-1.364 1.587-3.396 2.387-6.096 2.4l-.216.022c-2.656 0-4.677-.8-6.063-2.4zm6.603-1.264c.158-.02.317-.06.477-.12.693-.187 1.324-.608 1.895-1.264.57-.657.855-1.64.855-2.952s-.29-2.295-.866-2.952c-.578-.655-1.206-1.077-1.884-1.265a6.428 6.428 0 0 0-.466-.107c-.15-.03-.3-.045-.444-.045-.16 0-.325.017-.498.046-.173.03-.34.072-.5.13-.664.202-1.273.632-1.83 1.287-.554.655-.832 1.623-.832 2.907 0 1.282.278 2.252.833 2.907.556.657 1.166 1.085 1.83 1.288a2.845 2.845 0 0 0 .974.172c.146 0 .297-.01.456-.03zM124 .613c0-.337.276-.613.614-.613h12.772c.338 0 .614.276.614.613v14.773a.615.615 0 0 1-.614.613h-3.32a.617.617 0 0 1-.615-.614V4.453a.614.614 0 0 0-.613-.613h-3.675a.616.616 0 0 0-.614.613v10.934c0 .337-.05.613-.11.613h-3.824a.616.616 0 0 1-.615-.613V.613zM58.83 13.6c-1.387-1.6-2.08-3.467-2.08-5.6 0-2.12.683-3.98 2.047-5.59C60.16.804 62.192 0 64.892 0h.216c2.7 0 4.732.804 6.096 2.41C72.567 4.02 73.25 5.88 73.25 8c0 2.133-.683 3.992-2.046 5.578-1.364 1.587-3.396 2.387-6.096 2.4l-.216.022c-2.656 0-4.677-.8-6.063-2.4zm6.603-1.264c.158-.02.317-.06.477-.12.693-.187 1.324-.608 1.895-1.264.57-.657.855-1.64.855-2.952s-.29-2.295-.866-2.952c-.578-.655-1.206-1.077-1.884-1.265a6.428 6.428 0 0 0-.466-.107c-.15-.03-.3-.045-.444-.045-.16 0-.325.017-.498.046-.173.03-.34.072-.5.13-.664.202-1.273.632-1.83 1.287-.554.655-.832 1.623-.832 2.907 0 1.282.278 2.252.833 2.907.556.657 1.166 1.085 1.83 1.288a2.845 2.845 0 0 0 .974.172c.146 0 .297-.01.456-.03zM20.83 13.6c-1.387-1.6-2.08-3.467-2.08-5.6 0-2.12.683-3.98 2.047-5.59C22.16.804 24.192 0 26.892 0h.216c2.7 0 4.732.804 6.096 2.41C34.567 4.02 35.25 5.88 35.25 8c0 2.133-.683 3.992-2.046 5.578-1.364 1.587-3.396 2.387-6.096 2.4l-.216.022c-2.656 0-4.677-.8-6.063-2.4zm6.603-1.264c.158-.02.317-.06.477-.12.693-.187 1.324-.608 1.895-1.264.57-.657.855-1.64.855-2.952s-.29-2.295-.866-2.952c-.578-.655-1.206-1.077-1.884-1.265a6.428 6.428 0 0 0-.466-.107c-.15-.03-.3-.045-.444-.045-.16 0-.325.017-.498.046-.173.03-.34.072-.5.13-.664.202-1.273.632-1.83 1.287-.554.655-.832 1.623-.832 2.907 0 1.282.278 2.252.833 2.907.556.657 1.166 1.085 1.83 1.288a2.845 2.845 0 0 0 .974.172c.146 0 .297-.01.456-.03z"></path></svg>
                </a>
              </div>
            </div>
              <div class="header-collapse">
                <nav class="header-menu">
                  <div class="header-menu__item">
                    <a href="/" onclick="" class="header-menu__link ">
                      Головна
                    </a>
                  </div>
                  <div class="header-menu__item">
                    <a href="/convert" onclick="" class="header-menu__link ">
                      Продукт
                    </a>
                  </div>
                </nav>
              </div>
              
              <div class="header-buttons">
                <button class="btn __block" type="submit">
                  <span class="btn-content">Завантажити продукт</span>
                </button>
              </div>
  
            </div>
          </div>
      </header>

</template>

<style scoped>

.wrapper {
    height: 100%;
}

.header-in, .header-in__column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.header-in, .wrapper {
    height: 100%;
}

.header-logo {
    padding-right: 30px;
}
.header {
    position: absolute;
    z-index: 300;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: hsla(0,0%,100%,.95);
    border-bottom: 1px solid hsla(0,0%,80%,.5);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    -webkit-transition: background .3s,color .3s,border .3s;
    transition: background .3s,color .3s,border .3s
}

.header a {
    -webkit-transition: color .15s;
    transition: color .15s
}

.header.is-scroll-top {
    background: rgba(0,0,0,0);
    border-bottom-color: rgba(0,0,0,0)
}

.header.is-scroll-top.header--light .request-input .field {
    -webkit-box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.1)
}

.header--light.is-scroll-top {
    color: #fff
}

.header--light.is-scroll-top .header-collapse-logo svg {
    fill: #fff
}

.header--light.is-scroll-top .header-logo-sandwich .sandwich .icon-line {
    background: #fff
}

.header--light.is-scroll-top .header-menu__link,.header--light.is-scroll-top .header-menu__link:hover {
    color: #fff
}

.header--light.is-scroll-top .header-menu__link[href]:hover {
    color: #c1c1c1
}

.header.is-fixed {
    position: fixed;
    top: 0
}

.header.is-fixed.header--light .request-input .field {
    -webkit-box-shadow: inset 0 0 0 1px rgba(0,0,0,.25);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.25)
}

.header.is-fixed.header--light .btn {
    -webkit-box-shadow: none;
    box-shadow: none
}

.header--blog,.header--blog .btn,.header--blog .header-logo-text,.header--blog .header-menu__link,.header--blog input {
    font-family: e-Ukraine,sans-serif;
    font-weight: 300
}

.header--blog .header-in {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.header--blog .header-in__column:nth-child(2) {
    min-width: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.header--blog .header-in__column:nth-child(3) {
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.header--blog .btn {
    font-size: 14px
}

.header--blog.is-search-open .header-menu {
    display: none
}

.header--blog .header-blog-button {
    font-size: 15px
}

.header--blog .header-blog-button a {
    color: #000
}

.header--blog .header-blog-button a:hover {
    color: #777
}

.header--blog .header-blog-button .icon--pencil {
    font-size: 24px;
    margin-right: 10px
}

.header--blog .header-collapse-logo a {
    width: 138px;
    height: 16px
}

.header--blog .header-menu {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.header--blog .header-menu__link[href] {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.header--blog .search-collapsing__button:hover,.header--blog .search-collapsing__button[disabled],.header--blog .search-collapsing__close:hover {
    color: #777
}

@media(max-width: 61.24em) {
    .header--blog .header-blog-button {
        display:none
    }
}

@media(max-width: 39.99em) {
    .header--blog.is-search-open,.header--blog.is-search-open .header-search,.header--blog.is-search-open .search-collapsing__input {
        height:50px
    }

    .header--blog.is-search-open .header-in__column:nth-child(-n+2) {
        display: none
    }

    .header--blog.is-search-open .header-in__column:nth-child(3) {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1
    }

    .header--blog.is-search-open .header-search {
        width: 100%;
        margin-right: 0
    }

    .header--blog.is-search-open .header-search .search-collapsing {
        width: 100%;
        -webkit-transition: none;
        transition: none
    }

    .header--blog.is-search-open .search-collapsing__button {
        left: 10px;
        top: 13px
    }

    .header--blog.is-search-open .search-collapsing__close {
        right: 10px;
        top: 17px
    }

    .header--blog.is-search-open .search-collapsing__input {
        padding: 10px 35px 10px 50px
    }
}



.header-menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width: 61.24em) {
    .header-menu {
        display:none
    }
}

.header-menu__item {
    display: inline-block;
    position: relative
}

.header-menu__link {
    display: block;
    padding: 0 10px;
    color: #000;
    font-weight: 500;
    font-size: 15px;
    line-height: 60px;
    cursor: default
}

.header-menu__link .icon-ref {
    fill: #7b7b7b;
    margin-left: 7px
}

.header-menu__link .a-external {
    position: relative;
    top: -5px;
    margin-left: 3px;
    font-size: 8px;
    vertical-align: middle
}

.header-menu__link:hover {
    color: #000
}

.header-menu__link:hover.__dropdown:after {
    border-color: #000
}

.header-menu__link--dropdown {
    position: relative;
    padding-right: 28px
}

.header-menu__link--dropdown:after {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 10px;
    border: solid #000;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .2s;
    transition: all .2s
}

.header--light:not(.is-fixed) .header-menu__link--dropdown:after {
    border-color: #fff
}

.header-menu .header-menu__link[href] {
    cursor: pointer;
    white-space: nowrap
}

.header-menu .header-menu__link[href]:hover {
    color: #777
}

.header-submenu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-left: -12px;
    padding: 16px 0;
    background: hsla(0,0%,100%,.95);
    border-radius: 5px;
    -webkit-box-shadow: 0 7px 25px rgba(0,0,0,.15);
    box-shadow: 0 7px 25px rgba(0,0,0,.15);
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px);
    -webkit-transition: all .2s;
    transition: all .2s
}

.header.is-fixed .header-submenu {
    border-radius: 0 0 5px 5px
}

.header-submenu:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -7px;
    width: 0;
    height: 0;
    border-color: rgba(0,0,0,0) rgba(0,0,0,0) hsla(0,0%,100%,.95);
    border-style: solid;
    border-width: 0 7.5px 7px
}

.header-submenu.is-visible {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
}

.header-submenu__link {
    display: block;
    padding: 8px 22px;
    font: 15px Montserrat,sans-serif;
    color: #000;
    text-align: left;
    -webkit-transition: color .15s;
    transition: color .15s;
    white-space: nowrap
}

.header-submenu__link:hover {
    color: #777
}

.header-submenu__link .a-external {
    position: relative;
    top: 2px;
    margin-left: 3px;
    font-size: 8px;
    vertical-align: top
}

.header-buttons {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-left: 30px
}

.header-buttons .btn {
    height: 30px;
    font: 15px/30px Montserrat,sans-serif;
    -webkit-box-shadow: none;
    box-shadow: none
}

.header-buttons .btn-content {
    padding: 0 17px
}

.header-buttons .email-request {
    max-width: 340px;
    margin-left: auto
}

.header-buttons .request-input .field {
    width: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.header-collapse {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}

.header-collapse,.header-collapse-logo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.header-collapse-logo {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.header-collapse-logo svg {
    display: block;
    -webkit-transition: fill .3s;
    transition: fill .3s;
    height: auto;
    width: auto
}

.header-logo-text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 16px;
    margin-left: 8px;
    font-size: 21.3px;
    color: #000;
    text-transform: uppercase
}

.header--light:not(.is-fixed) .header-logo-text {
    color: #fff
}

.header-in,.wrapper {
    height: 100%
}

.header-in,.header-in__column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.header-logo {
    padding-right: 30px
}

.header-logo-sandwich,.phone-call {
    display: none
}

.header-logo-sandwich .sandwich {
    position: relative;
    padding: 14px 20px;
    width: 18px;
    height: 15px;
    display: block;
    float: left
}

.header-logo-sandwich .sandwich .icon-line {
    display: block;
    position: relative;
    height: 1px;
    background: #000;
    margin-bottom: 6px;
    -webkit-transition: background .3s;
    transition: background .3s
}

.header-logo-sandwich .sandwich .icon-line:last-child {
    margin-bottom: 0
}

.header-logo-sandwich input[type=checkbox] {
    display: none
}

.header-logo-sandwich input[type=checkbox]:checked+label .icon-line {
    margin-top: 10px
}

.header-logo-sandwich input[type=checkbox]:checked+label .icon-line:first-child {
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg)
}

.header-logo-sandwich input[type=checkbox]:checked+label .icon-line:nth-child(2) {
    margin-top: 3px;
    opacity: 0;
    visibility: hidden
}

.header-logo-sandwich input[type=checkbox]:checked+label .icon-line:last-child {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
    margin-top: -21px
}

.header-button-mobile,.header-order-mobile {
    display: none
}

.header-search {
    height: 36px;
    margin-right: 40px
}

@media(max-width: 61.24em) {
    .header-order-mobile {
        display:block;
        position: absolute;
        top: 19px;
        right: 20px;
        font: 16px/1 Montserrat,sans-serif;
        color: #7ebf0e
    }

    .header-button-mobile {
        display: block;
        margin: 0 20px 0 auto
    }

    .header-button-mobile .btn {
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        font-weight: 500
    }

    .header.is-scroll-top .header-button-mobile,.header.is-scroll-top .header-order-mobile {
        display: none
    }

    .header {
        top: 0;
        height: auto
    }

    .header--blog {
        top: 0
    }

    .header.__show {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0)
    }

    .header-in {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 -20px
    }

    .header-menu {
        background: #ebebeb;
        position: absolute;
        top: 100%;
        left: 0;
        padding: 0;
        margin: 0 auto;
        width: 100%;
        display: none;
        transition: all 1s;
        -webkit-transition: all 1s
    }

    .header-menu-a {
        display: block;
        border-top: 1px solid #d3d2d0
    }

    .header-collapse {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: left;
        width: auto;
        float: left;
        margin: 0
    }

    .header-collapse-logo {
        top: 0;
        padding: 17px 0;
        margin: 0;
        line-height: 16px
    }

    .header-collapse-logo svg {
        vertical-align: middle
    }

    .header-logo-sandwich {
        display: block
    }

    .header-logo-link {
        display: none
    }

    .header-buttons {
        display: none;
        float: right;
        padding: 0;
        width: 30px;
        margin-top: 0;
        margin-right: -40px
    }

    .header-buttons .phone-call {
        display: block;
        color: #000;
        text-align: right
    }

    .header-buttons .phone-call .icon {
        font-size: 30px;
        fill: #000
    }

    .header-buttons .btn {
        display: none
    }

    .header-search {
        margin-right: 20px
    }
}

@media screen and (max-width: 480px) {
    .header-menu-a {
        font-size:1.4em
    }
}


.header--light.is-scroll-top {
    color: #fff;
}

.header.is-scroll-top {
    background: rgba(0,0,0,0);
    border-bottom-color: rgba(0,0,0,0);
}

.header {
    top: 10px;
}

.page {
  position: relative;
}
</style>