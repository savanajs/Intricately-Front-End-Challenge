/* eslint-disable */
import Vue from "vue";
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils';
import Card from '../../src/components/Card';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Card Component', () => {

    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(Card);
        vm = new cmp({
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

});

