<template>
    <div class="container">
        <div class="shell shell--primary">
            <section class="content">
                <div class="row">
                <div class="col col--12-lg col--12-md col--12-sm">
                    <ul class="list-inline list-terniary breadcrumb space">
                        <li class="list__item">
                            <a href="/" class="item__link">Home</a>
                        </li>
                        <li>/</li>
                        <li class="list__item">
                            <a href="#" class="item__link">Company Table</a>
                        </li>
                    </ul>
                </div>
                </div>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col col--3-lg col--12-md col--12-sm">
                        <aside class="space">
                            <NavComponent activePage="2" />
                        </aside>
                    </div>
                    <div class="col col--9-lg col--12-md col col--12-sm">
                        ...
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>

import NavComponent from '../components/Nav.vue';

export default {
  name: 'CompanyTable',
  components: {
      NavComponent
  }
}
</script>

<style>

</style>
