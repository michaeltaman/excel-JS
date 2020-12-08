import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners= []) {
    if (!$root) {
      throw new Error(`No $root providen for DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    //console.log(this.listeners, this.$root)
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`The method ${method} is not
          implemented in ${this.name} Component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
  
  removeDomListeners() {
    console.log('REMOVE DOM LISTENERS')
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}

