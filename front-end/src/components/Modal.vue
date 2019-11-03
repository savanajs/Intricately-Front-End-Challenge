<template>
    <div class="overlay">

      <div class="modal">
        <div class="modal__header">
          <a class="modal-close" href="" @click.stop.prevent="closeModal">x</a>
        </div>
        <div class="modal__content modal-one">
          <slot></slot>  
        </div>
      </div>
    </div>
</template>

<script>

import EventBus from '../eventBus.js';

export default {
  name: 'NavComponent',
  methods: {
      closeModal(){

          EventBus.$emit('STATE_MODAL', false);

      }
  }
}
</script>

<style scoped></style>
