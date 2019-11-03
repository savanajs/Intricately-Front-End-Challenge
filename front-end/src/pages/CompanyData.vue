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
                            <a href="#" class="item__link">Company Data</a>
                        </li>
                    </ul>
                </div>
                </div>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col col--3-lg col--12-md col--12-sm">
                        <aside class="space">
                            <NavComponent activePage="1" />
                        </aside>
                    </div>
                    <div class="col col--9-lg col--12-md col col--12-sm">
                        <div class="row">
                            <div class="col col--12-lg col--12-md col col--12-sm">
                                <div class="card wrapper-form">
                                    <div class="card__inner">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero facilis a similique ut sint et sed? Repudiandae reprehenderit, ipsa cumque voluptate cum, commodi rem, minus dicta ab atque tenetur numquam</p>
                                        <form class="form" @submit.stop.prevent="handleSubmit">
                                            <div class="wrap-field half">
                                                <label>Company Name</label>
                                                <input type="text" name="name" value="" placeholder="e.g Your Company Name" v-model="form.name" required />
                                            </div>
                                            <div class="wrap-field half">
                                                <label>Company Spend</label>
                                                <input type="text" name="spend" value="" placeholder="e.g $150,000" v-model="form.spend" required />
                                            </div>
                                            <div class="wrap-field half">
                                                <label>Company Spend Ability</label>
                                                <input type="text" name="ability" value="" placeholder="e.g $150,000 - $330,000" v-model="form.ability" required />
                                            </div>
                                            <div class="wrap-field">
                                                <label>Notes</label>
                                                <textarea @focus="openModal" name="notes" value="" placeholder="e.g Good Tech Company" v-model="form.notes" required></textarea>
                                            </div>
                                            <div class="wrap-field">
                                                <button class="btn" type="submit">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Modal v-if="stateModal">
            <form class="form">
                <div class="wrap-field">
                    <label>Additional Notes</label>
                    <textarea id="modal-spend" name="spend" value="" placeholder="e.g Good Tech Company" v-model="form.notes" required></textarea>
                </div>
                <div class="wrap-field actions">
                    <a @click.stop.prevent="closeModal" class="btn">Save</a>
                </div>
            </form>
        </Modal>
    </div>
</template>
<script>

import NavComponent from '../components/Nav.vue';
import EventBus from '../eventBus.js';
import Modal from '../components/Modal.vue';

export default {
  name: 'CompanyData',
  data() {
      return {
          stateModal: false,
          form: {
              name: '',
              spend: '',
              ability: '',
              notes: ''
          }
      }
  },
  components: {
    NavComponent,
    Modal
  },
  methods: {
    handleSubmit(){

        alert("Form sended!");

    },
    openModal(){

        this.stateModal = true;

        setTimeout(() => {

            document.getElementById('modal-spend').focus();

        });

    },
    closeModal(){

        this.stateModal = false;

    }
  },
  mounted() {
      EventBus.$on('STATE_MODAL', payload => {

          this.stateModal = payload;
      
      });
  },
}
</script>

<style>

</style>
