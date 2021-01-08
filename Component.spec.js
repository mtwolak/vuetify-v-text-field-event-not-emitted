import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import Component from './Component.vue';

Vue.use(Vuetify);

const vuetify = new Vuetify({});

describe('Component', () => {
  let localVue = createLocalVue();;
  localVue.use(Vuetify);

  let wrapper = mount(Component, {
    localVue,
    vuetify,
  });;

  it('Then props should be returned for a v-text-field Vue instance', async () => {
    wrapper.find(".v-text-field").trigger('click')

    expect(wrapper.emitted('clicked')).toBeTruthy();
  });
});
