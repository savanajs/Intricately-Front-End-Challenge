
<template>
    <article class="profile">
        <div class="profile-company">
            <div class="row">
                <div class="col">
                    <div class="wrap-logo">
                        <img :src="item.image" :alt="item.name" id="logo-company" />
                    </div>
                    </div>
                    <div class="col">
                    <h1 class="heading-1">{{item.name}}</h1>
                    <p>
                        {{item.locale}}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col">
                <p class="description">
                    {{item.description}} <a :href="item.url" target="_blank">View more</a>
                </p>
                </div>
            </div>
        </div>
    </article>
</template>

<script>

export default {
  name: 'CardComponent',
  props: ['item']
}
</script>