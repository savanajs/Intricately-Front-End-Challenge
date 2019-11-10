<template>
    <div class="container">
        <div class="shell shell--primary">
        <section class="content">
            <div class="row">
                <div class="col col--12-lg col--12-md col--12-sm">
                    <BreadCrumb currentPage="Company Page"></BreadCrumb>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="row">
            <div class="col col--3-lg col--12-md col--12-sm">
                <aside class="space">
                    <NavComponent activePage="3"></NavComponent>
                </aside>
            </div>
            <div class="col col--9-lg col--12-md col col--12-sm">
                <Info :item="company"></Info>
                <article>
                    <div class="row">
                        <div class="col col--6-lg col--6-md col--12-sm">
                            <Card title="Activies">
                                <ul class="list-block-secondary">
                                    <li class="list__item">
                                        <div class="row nowrap">
                                            <div class="col">
                                            <span>8 days ago</span>
                                            </div>
                                            <div class="col wrap-icon">
                                            <i class="icon icon-play"></i>
                                            </div>
                                            <div class="col">
                                            <p><a href="#">Cloud Ochestration</a> replaced</p>
                                            <p><span class="line-through">Microsoft</span> on <a href="#">1 property</a></p>
                                            </div>
                                        </div>
                                        </li>
                                        <li class="list__item">
                                        <div class="row nowrap">
                                            <div class="col">
                                            <span>8 days ago</span>
                                            </div>
                                            <div class="col wrap-icon">
                                            <i class="icon icon-play"></i>
                                            </div>
                                            <div class="col">
                                            <p><a href="#">Cloud Ochestration</a> replaced</p>
                                            <p><span class="line-through">Microsoft</span> on <a href="#">1 property</a></p>
                                            </div>
                                        </div>
                                        </li>
                                        <li class="list__item ">
                                        <div class="row nowrap">
                                            <div class="col">
                                            <span>8 days ago</span>
                                            </div>
                                            <div class="col wrap-icon">
                                            <i class="icon icon-play"></i>
                                            </div>
                                            <div class="col">
                                            <p><a href="#">Cloud Ochestration</a> replaced</p>
                                            <p><span class="line-through">Microsoft</span> on <a href="#">1 property</a></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                        <div class="col col--6-lg col--6-md col--12-sm">
                            <Card title="Similar Companies">
                                <ListComponent :items="companies" />
                            </Card>
                            <Card title="Graphic">
                                <div class="graphics">              
                                    <img src="../assets/imgs/graphics.jpg" width="100%" alt="graphics" id="logo-graphics" />
                                </div>
                            </Card>
                            <Card title="Company spend history">
                                <ListComponent :items="companiesSpendHistory" />
                            </Card>
                        </div>
                    </div>
                </article>
            </div>
            </div>
        </section>
        </div>
    </div>
</template>
<script>

import NavComponent from '../components/Nav.vue';
import ListComponent from '../components/List';
import BreadCrumb from '../components/BreadCrumb';
import Card from '../components/Card';
import Info from '../components/Info';
import { mapState } from 'vuex';

export default {
  name: 'CompanyPage',
  components: {
    NavComponent,
    Info,
    BreadCrumb,
    ListComponent,
    Card,
  },
  data(){
      return {
          company: {
              image: "https://via.placeholder.com/32",
              name: "Microsoft",
              locale: "Redmond, WA USA",
              description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero facilis a similique ut sint et sed? Repudiandae reprehenderit, ipsa cumque voluptate cum, commodi rem, minus dicta ab atque tenetur numquam!",
              url: "http://www.microsoft.com"
          }
      }
  },
  computed: {
    ...mapState({
        companies: (state) => {
            return state.companies;
        },
        companiesSpendHistory: (state) => {
            return state.companiesSpendHistory;
        }
    })
  }
}
</script>

<style>

</style>
