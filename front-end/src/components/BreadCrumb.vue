<template>
    <ul class="list-inline list-terniary breadcrumb space">
        <li class="list__item">
            <a href="/" class="item__link">Home</a>
        </li>
        <li>/</li>
        <li class="list__item">
            {{currentPage}}
        </li>
    </ul>
</template>

<script>

export default {
  name: 'CardComponent',
  props: ['currentPage']
}
</script>