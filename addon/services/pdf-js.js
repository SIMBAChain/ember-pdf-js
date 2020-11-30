/* global PDFJS */
import { getOwner } from '@ember/application'
import Service from '@ember/service'

export default Service.extend({
  init () {
    this._super(...arguments)

    let appConfig = getOwner(this).resolveRegistration('config:environment')
    let addonConfig = appConfig.emberPdfJs

    this.PDFJS = PDFJS
    this.PDFJS.workerSrc = addonConfig.workerSrc
  }
})
