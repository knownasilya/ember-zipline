ember-zipline
==============================================================================

Send components from one location to another declaratively. USe case is for
sharing components with an ember engine isntance.


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-zipline
```


Usage
------------------------------------------------------------------------------

Define what data/components we want to send.

```hbs
<EmberZipline
  @data={{hash
    UserProfile=(component 'user-profile' user=this.user)
  }}
/>
```

Inject the zipline service.

```js
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  ziplineService: service('zipline')
});
```

Access the sent data/components via the service.

```hbs
{{#let this.ziplineService.data.UserProfile as |UserProfile|}}
  <UserProfile/>
{{/let}}
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
