/* eslint-disable */
import Vue from "vue";
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils';
import List from '../../src/components/List';

import store from '../../src/store';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('List Component', () => {

    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(List);
        vm = new cmp({
            propsData: {
                items: store.state.companies
            }
        }).$mount();
    });

    it('Should component be defined', () => {

        expect(vm).toBeDefined();

    });

    it('Should be return the array of companies', () => {

        expect(vm.items).toEqual([{ "image": "https://via.placeholder.com/56", "name": "Amazon" }, { "image": "https://via.placeholder.com/56", "name": "Oracle" }, { "image": "https://via.placeholder.com/56", "name": "Google" }]);

    });

    it('Should be return the companies', () => {

        expect(vm.items.length).toBeGreaterThan(0);;

    });

});

