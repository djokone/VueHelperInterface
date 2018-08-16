/* @flow */

export default class Helper {
  constructor (config = { verbose: true }) {
    this._config = false
    this._mounted = false
    this._wrap = false
    this.config = config
    this._builder = false
    this._vm = false
    this._childrens = []
    this._properties = {
    }
    this._on = {
    }
    this._tag = 'div'
    this.log('construct')
  }

  log (message) {
    if (this.config.verbose) {
      console.log(message)
    }
  }

  get wrap () {
    return this._wrap
  }

  set wrap (val) {
    this._wrap = val
  }

  set config (val) {
    if (this._config) {
      this._config = {...this._config, ...val}
    } else {
      this._config = val
    }
  }

  /**
   * Config getter
   * @returns {boolean|{}|*}
   */
  get config () {
    return this._config
  }

  /**
   * get Builder
   * @returns {function} the build function
   */
  get builder () {
    return this._builder
  }
  set builder (val) {
    this._setBuilder(val)
  }
  _setBuilder (builder) {
    this._builder = builder
  }

  /**
   * Instnace
   * @returns {*}
   */
  get vm () {
    return this._vm
  }
  set vm (val) {
    this._setVm(val)
  }
  _setVm (instance) {
    this._vm = instance
  }
  get childrens () {
    return this._childrens
  }
  get properties () {
    return {...this._DefaultProperties, ...this.dipatchProperties()}
  }
  setProperties (value) {
    if (this._properties) {
      this._properties = {...this._properties, ...value}
    } else {
      this._properties = {...this._DefaultProperties, ...value}
    }
  }
  get tag () {
    return this._tag
  }
  build () {
    let instance = this.vm
    let components = []
    let build
    if (instance) {
      let component = this.builder(
        this.tag,
        {...this.properties},
        this.childrens
      )
      components.push(this.builder(
        this.tag,
        {...this.properties},
        this.childrens
      ))
      if (this.wrap !== false) {
        build = this.builder(this.wrap.tag, {...this.wrap.options}, components)
      } else {
        build = component
      }
      return build
    } else {
      return false
    }
  }
  mount (builder, instance) {
    this.beforeMount(builder, instance)
    this.builder = builder
    this.vm = instance
    this._mounted = true
    this.afterMount(builder, instance)
    this.log('mounted')
    return this
  }
  beforeMount (builder, instance) {
  }
  afterMount (builder, instance) {
  }
  render () {
    let Vnode = this.build()
    if (this.builder && Vnode) {
      return Vnode
    } else {
      return false
    }
  }

  dipatchProperties () {
  }
}
