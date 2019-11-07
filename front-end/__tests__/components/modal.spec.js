/* eslint-disable */
import Vue from "vue";
import { mount } from '@vue/test-utils';
import Modal from '../../src/components/Modal';

describe('Modal', () => {

  let component, vm;

  beforeAll(() => {
    component = Vue.extend(Modal);
    vm = new component().$mount();
  });

  it('is a Vue instance', () => {

    const wrapper = mount(Modal);
    expect(wrapper.isVueInstance()).toBeTruthy();

  });

  it('is a method closeModal defined', () => {

    expect(vm.closeModal).toBeDefined();

  });

});

