import {$} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    //this.$el = document.querySelector(selector);
    this.$el = $(selector);
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      //$el - is the root html-element for current
      // Component (Header, Table, Formula etc.)

      //$el.innerHTML = component.toHTML()
      //debugger
      //DEBUG
      if (component.name) {
        window['c' + component.name] = component
      }
      $el.html(component.toHTML())
      //debugger
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    // afterbegin, afterend, beforeend, beforebegin
    /* this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
    console.log(this.$el)*/

    /* const node = document.createElement('h1')
    node.textContent = 'TEST'
    this.$el.append(node);*/

    this.$el.append(this.getRoot())
    //console.log(this.components)
    this.components.forEach(component => component.init())
  }
}

