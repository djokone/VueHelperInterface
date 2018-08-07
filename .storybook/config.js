import { configure, storiesOf } from '@storybook/vue';
import { setDefaults } from 'storybook-addon-vue-info'

// setDefaults({
//   header: false
// })

// Import your custom components.
import HelperInput from '../src/components/HelperInput.vue';

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
// Vue.component('HelperInput', HelperInput);

const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
  // You can require as many stories as you need.
  req.keys().forEach((filename) => {
    req(filename)
  });
}

configure(loadStories, module);