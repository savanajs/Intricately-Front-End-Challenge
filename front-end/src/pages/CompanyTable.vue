<template>
    <div class="container">
        <div class="shell shell--primary">
            <section class="content">
                <div class="row">
                <div class="col col--12-lg col--12-md col--12-sm">
                    <BreadCrumb currentPage="Company Table"></BreadCrumb>
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
import BreadCrumb from '../components/BreadCrumb';

export default {
  name: 'CompanyTable',
  components: {
      NavComponent,
      BreadCrumb,
  }
}
</script>

<style>

</style>
