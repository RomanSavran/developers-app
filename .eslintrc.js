module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'settings': {
        'react': {
            'createClass': 'createReactClass',
            'pragma': 'React',
            'version': '16.5.2'
        },
        'propWrapperFunctions': ['forbidExtraProps']
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'space-infix-ops': ['error'],
        'key-spacing': ['error'],
        'react/jsx-indent': ['error', 4],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'ignoredNodes': ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild']
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': ['error', { allow: ['debug', 'info', 'error'] }]
    }
};
