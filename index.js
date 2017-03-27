const stringUtil = require('ember-cli-string-utils');

module.exports = {
  description: 'Ember CLI blueprint for initializing a Ember application with a module unification layout.',

  // filesToRemove: [
  //   'app/styles/.gitkeep',
  //   'app/templates/.gitkeep',
  // ],

  locals(options) {
    let entity = options.entity;
    let rawName = entity.name;
    let name = stringUtil.dasherize(rawName);
    let namespace = stringUtil.classify(rawName);

    return {
      name,
      modulePrefix: name,
      namespace,
      yarn: options.yarn,
    };
  },

  fileMapTokens(options) {
    return {
      __component__() { return options.locals.component }
    }
  }
};
