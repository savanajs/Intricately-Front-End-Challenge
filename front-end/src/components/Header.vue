<template>
  <header id="header">
    <div class="shell">
        <div class="row">
            <div class="col col--1-lg col--1-md col--2-sm header__logo">
                <a href="/" title="Intricately">
                    <img src="../assets/imgs/logo-pink.png" alt="Intricately" id="logo" />
                </a>
            </div>
            <div class="col col--6-lg col--10-md col--10-sm header__search">
                <div class="search__first">
                    <form action="" class="search">
                        <input type="search" name="search" placeholder="Search companies" class="search-input" />
                    </form>
                </div>
                <div class="or search__second">
                    or
                </div>
                <div class="search__second">
                    <a href="/#" class="btn">
                        New smartlist
                    </a>
                </div>
            </div>
            <div class="col col--3-lg col---md col--12-sm header__list">
                <ul class="list-inline list-primary">
                    <li class="list__item">
                        <a class="item__link" href="#">Prospect</a>
                        <i class="icon icon-arrow"></i>
                    </li>
                    <li class="list__item">
                        <a class="item__link" href="#">Alert</a>
                        <i class="icon icon-arrow"></i>
                    </li>
                    <li class="list__item">
                        <a class="item__link" href="#">Learn</a>
                        <i class="icon icon-arrow"></i>
                    </li>
                </ul>
            </div>
            <div class="col col--2-lg header__profile">
                <ul class="list-inline list-primary">
                    <li class="list__item">
                        <img src="../assets/imgs/default.png" alt="Browser" id="browser-photo" />
                    </li>
                    <li class="list__item list__item--user">
                        <a class="item__link" href="#">
                            <img src="../assets/imgs/group-copy.png" alt="User" id="user-photo" />
                        </a>
                        <i class="icon icon-arrow"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'headerComponent',
}
</script>

<style>

</style>
