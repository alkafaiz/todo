const { override, addPostcssPlugins } = require('customize-cra');

module.exports = override(
    // ...addExternalBabelPlugins([
    //     '@babel/plugin-transform-react-jsx',
    //     {
    //         pragma: 'h',
    //         pragmaFrag: 'Fragment',
    //     },
    // ]),
    addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
    // addWebpackAlias({
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat', // Must be below test-utils
    //     'react/jsx-runtime': 'preact/jsx-runtime',
    // })
);
