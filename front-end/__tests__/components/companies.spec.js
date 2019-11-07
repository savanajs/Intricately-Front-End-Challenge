/* eslint-disable */
import Vue from "vue";
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils';
import Companies from '../../src/components/Companies';

import store from '../../src/store';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Companies', () => {

    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(Companies);
        vm = new cmp({
            store,
            propsData: {
                title: 'hello'
            }
        }).$mount();
    });

    it('Should component be defined', () => {

        expect(vm).toBeDefined();

    });

    it('Should be return the value hello on props title', () => {

        expect(vm.title).toBe("hello");

    });

    it('Should be return the array of companies', () => {

        expect(vm.companies).toEqual([{ "image": "https://via.placeholder.com/56", "name": "Amazon" }, { "image": "https://via.placeholder.com/56", "name": "Oracle" }, { "image": "https://via.placeholder.com/56", "name": "Google" }]);

    });

    it('Should be return the companies', () => {

        expect(vm.companies.length).toBeGreaterThan(0);;

    });

});

