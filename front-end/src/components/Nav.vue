<template>
    <nav>
        <ul class="list-block list-block--primary">
            <li class="list__item">
                <router-link to="/data" class="item__link" :class="{active: activePage == 1}">
                    Company Data
                </router-link>
            </li>
            <li class="list__item">
                <router-link to="/" class="item__link" :class="{active: activePage == 2}">
                    Company Table
                </router-link>
            </li>
            <li class="list__item">
                <router-link to="/" class="item__link" :class="{active: activePage == 3}">
                    Company Page
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'NavComponent',
  props: {
    activePage: String
  }
}
</script>