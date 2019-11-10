<template>
    <div class="card">
        <div class="card__top">
            {{title}}
        </div>
        <div class="card__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CardComponent',
  props: ['title']
}
</script>