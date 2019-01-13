import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';


const ZiplineService = Service.extend({

});

module('Integration | Component | ember-zipline', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:zipline', ZiplineService);
  });

  test('it renders', async function(assert) {
    await render(hbs`
      <EmberZipline
        @data={{hash
          MyButton=(component 'my-button' label='Hello')
        }}
      />
    `);

    let ziplineService = this.owner.lookup('service:zipline');
    assert.ok(ziplineService.get('data'), 'Has data object');
  });
});
