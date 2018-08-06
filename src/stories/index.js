import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HelperInput from './HelperInput.vue';

storiesOf('HelperInput', module)
  .add('story as a template', () => '<HelperInput :name="'test'">story as a function template</HelperInput>')
  .add('story as a component', () => ({
    components: { HelperInput },
    template: '<HelperInput :rounded="true">rounded</my-button>'
  }));