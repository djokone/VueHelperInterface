<script>
  import VueTypes from 'vue-types'
  import InputBuilder from '../lib/InputBuilder'
  import { isEmpty } from 'lodash'
  // import inputDispatcher from '../lib/InputUtils'
  // import tinymce from 'tinymce'
  const wrapType = VueTypes.oneOfType([
      VueTypes.shape({
        tag: String,
        options: VueTypes.shape({
          'class': VueTypes.oneOfType([VueTypes.arrayOf(String), VueTypes.objectOf(Boolean)])
        })
      }),
      VueTypes.bool
    ]
  )
  const Input = new InputBuilder()

  export default({
    render (h) {
      let toRender = Input.mount(h, this).render()
      console.log(toRender)
      return toRender
    },
    data () {
      return {
        localData: this.value
      }
    },
    props: {
      name: VueTypes.string,
      options: {
        default: false
      },
      wrap: wrapType.def(function () {
        return {tag: 'div', options: { class: {input: false}}}
      }),
      value: VueTypes.any.def(''),
      label: {
        default: null
      },
      disabled:VueTypes.bool.def(false),
      component: {
        default: false,
        type: [Object, Boolean]
      },
      type: VueTypes.string.def('text'),
      placeholder: VueTypes.string.def('Put your placeholder here !')
    },
    methods: {
      upLocal (val) {
        this.$set(this, 'localData', val)
      }
    },
    computed: {
      getValue () {
        return this.value
      },
      isPassword () {
        return this.type === 'password'
      },
      isInput () {
        return this.type === 'text'
      },
      isTextarea () {
        return this.type === 'textarea'
      },
      isTinymce () {
        return this.type === 'tinymce'
      },
      classError () {
        if (this.getError) {
          return 'hasError'
        }
      },
      getLabel () {
        if (this.label) {
          return this.label
        } else if (this.label === null) {
          return this.name
        } else {
          return false
        }
      },
      getError () {
        if (!isEmpty(this.localErrors)) {
          return this.localErrors
        } else {
          return false
        }
      }
    },
    watch: {
      value (newVal) {
        this.$set(this, 'localData', newVal)
        // this.localData = cloneDeep(newVal)
      }
    },
    components: {
      // tinymce
    }
  })
</script>
