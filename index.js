/* eslint-env node */

'use strict'

const {setSvgConfiguration} = require('ember-frost-core/utils/frost-icon-svg')

module.exports = {
  name: 'ember-frost-tabs',

  included: function () {
    this.app = this._findHost.call(this) // eslint-disable-line no-useless-call

    // Set ember-cli-svgstore options so that consuming applications don't have to
    setSvgConfiguration.call(this, 'frost-tabs')

    this._super.included.apply(this, arguments)
  },

  /* eslint-disable complexity */
  init: function (app) {
    // eslint-disable-next-line no-unused-expressions
    this._super.init && this._super.init.apply(this, arguments)

    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.optional = this.options.babel.optional || []

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators')
    }
  }
  /* eslint-enable complexity */
}
