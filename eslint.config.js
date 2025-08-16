import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs'],
  },
})
