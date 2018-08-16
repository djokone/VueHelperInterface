import Helper from './HelperBuilder'
import Label from './LabelBuilder'

// import conditionalArray from './conditionalArray'

export default class Input extends Helper {
  constructor () {
    super()
    this._tag = 'input'
    this._label = {}
    this._directives = []
    this.on = {
      input: this.onInput
    }
  }
  afterMount (builder, vm) {
    this._label = new Label().mount(builder, vm)
    this.wrap = this.vm.wrap
    console.log(this.wrap)
  }
  onInput () {
  }
  get type () {
    return this.vm.type
  }
  get label () {
    return this.vm.getLabel
  }
  get on () {
    return this._on
  }
  set on (val) {
    if (!this._on) {
      this._on = val
    } else {
      this._on = {...this._on, ...val}
    }
  }
  get directives () {
    return this._directives
  }
  get properties () {
    let instance = this.vm
    let attrs = {
      id: instance.name + '_' + instance._uid,
      type: instance.type,
      placeholder: instance.placeholder,
      name: instance.name
    }
    let domProps = {
      value: instance.localData
    }
    return {
      attrs,
      directives: this.directives,
      on: this.on,
      domProps
    }
  }
  DefaultValue () {
  }
  get VueTypes () {
    console.log('vueType')
    console.log(this.type)
    // const CustomTypes = {
    //   value
    // }
    // if (this.type === 'text') {
    // }
  }
}
