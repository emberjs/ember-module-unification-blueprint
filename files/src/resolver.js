import Resolver from 'ember-resolver/resolvers/module-unification';
import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

export default Resolver.extend({
  config: buildResolverConfig(config.modulePrefix)
});
