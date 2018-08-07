import Vue from 'vue';

import { storiesOf } from '@storybook/vue'
import VueInfoAddon, { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
// import { action } from '@storybook/addon-knobs'

import HelperInput from '../components/HelperInput.vue';

storiesOf('Vue Input Helper', module)
  // .addDecorator(withKnobs)
  // .addDecorator(VueInfoAddon)
  .add(
    'Show a text input',
    withInfo({
      summary: 'This summary is set by options.summary !!',
      propTables: [HelperInput]
    })(() => ({
    components: { HelperInput },
    template: '<HelperInput :name="\'test\'" @change="action(\'coucou\')"></HelperInput>',
    propsDescription: {
      // These description will appear in `description` column in props table
      name: 'Name of you\'re output value',
      options: 'Whether component is visible or not'
    }
  })))
  .add(
    'Show a select with options input',
    withInfo({

    })(() => {
      components: {  }
    })
  )
;