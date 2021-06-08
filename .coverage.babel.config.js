const defaultBabel = require('@plone/volto/babel');

function applyDefault(api) {
  const voltoBabel = defaultBabel(api);
  voltoBabel.plugins.push(
    '@babel/plugin-transform-modules-commonjs',
    'istanbul',
  );
  return voltoBabel;
}

module.exports = applyDefault;
