'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    emberData: {
      deprecations: {
        // New projects can safely leave this deprecation disabled.
        // If upgrading, to opt-into the deprecated behavior, set this to true and then follow:
        // https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object
        // before upgrading to Ember Data 6.0
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    babel: {
      plugins: [
        [
          require.resolve('@babel/plugin-transform-react-jsx'),
          {
            runtime: 'automatic',
            importSource: 'react',
          },
        ],
      ],
    },
    postcssOptions: {
      compile: {
        enabled: true,
        cacheInclude: [
          /.*\.(css|hbs|js|gjs|gts|ts|tsx|jsx)$/,
          /tailwind\.config\.js$/,
        ],
        plugins: [
          {
            module: require('tailwindcss'),
            options: {
              config: './tailwind.config.js',
            },
          },
          require('autoprefixer'),
        ],
      },
    },
  });

  return app.toTree();
};
