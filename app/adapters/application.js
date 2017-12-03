/**
 * Created by Anushka Getamanna on 10/12/2016.
 */
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'rest/user/regester',
  //http://www.propozer.lk/propozer-ws/rest/user/regester/test

  host: 'http://www.propozer.lk/propozer-ws/rest/user/regester',

  headers: {
    "API_KEY": "secret key",
    "ANOTHER_HEADER": "Some header value"
  }

});
