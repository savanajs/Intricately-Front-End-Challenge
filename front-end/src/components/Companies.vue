<template>
    <div class="card">
        <div class="card__top">
            {{title}}
        </div>
        <div class="card__content">
        <ul class="list-block-secondary">
            <li :key="index" v-for="(item, index) in companies" class="list__item">
                <div class="row item-center nowrap">
                <div class="col wrap-icon">
                    <img :src="item.image" :alt="item.name" id="logo-company" />
                </div>
                <div class="col">
                    <a href="#">{{item.name}}</a>
                </div>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'CompaniesComponent',
  props: {
    title: String
  },
  computed: {
    ...mapState({
        companies: (state) => {
            return state.companies;
        }
    })
  }
}
</script>