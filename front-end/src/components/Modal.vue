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

<style lang="scss" scoped>
.overlay {
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  .modal {
    width: 600px;
    border-radius: 5px;
    background-color: #fff;
    transform: translate(-50%, -50%) scale(2);
    zoom: 0.5;
    position: fixed;
    top: 40%;
    left: 50%;
    min-height: 350px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.2);
    .modal__footer,
    .modal__content {
      padding: 20px 20px 0px 20px;
    }
    .modal__header {
      padding: 0px 20px 0px 20px;
      text-transform: uppercase;
      color: #999;
      position: relative;
      .modal-close {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 1.8em;
        text-decoration: none;
        text-transform: lowercase;
      }
    }
  }
}

.modal-one {
  .wrap-field {
    label {
      margin-bottom: 20px;
    }
    textarea {
      height: 210px;
    }
    &.actions {
      text-align: right;
    }
  }
}

@media screen and (max-width: 767px) {
  .modal {
    width: 300px !important;
  }
}
</style>
