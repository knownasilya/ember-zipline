import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from './template';

export default Component.extend({
  ziplineService: service('zipline'),

  layout,
  tagName: '',

  didReceiveAttrs() {
    let zipline = this.ziplineService;
    let data = this.data;

    zipline.set('data', data);
  }
});
