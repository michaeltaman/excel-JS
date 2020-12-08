import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  //$root - is the html-element for Formula - Component

  // options (see second parameter - object of the constructor)
  // - is the set of abilities which the Formula-Component
  // will be able to support

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    })
  }

  toHTML() {
    return `            
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log(this.$root)
    console.log('Formula: onInput', event.target.textContent.trim())
  }

  onClick() {
    console.log(this.$root)
    console.log('Formula: onClick')
  }
}
