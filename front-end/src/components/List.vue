<template>
    <ul class="list-block-secondary">
        <li :key="index" v-for="(item, index) in items" class="list__item">
            <div class="row item-center nowrap">
                <div class="col wrap-icon">
                    <img :src="item.image" :alt="item.name" id="logo-company" />
                </div>
                <div class="col">
                    <a href="#">{{item.name}}</a>
                    <p v-if="item.description">{{item.description}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'ListComponent',
  props: ['items']
}
</script>