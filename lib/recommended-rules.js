module.exports = {
  // getter、setter 需要成对出现
  'accessor-pairs': 2,
  // 数组的括号内前后不允许有空格
  'array-bracket-spacing': [2, 'never'],
  // 箭头函数的箭头前后需要有空格
  'arrow-spacing': [2, { 'before': true, 'after': true }],
  // 代码块如果在一行内则大括号中的首尾需要有空格
  'block-spacing': [2, 'always'],
  // if-else 之类结构的大括号风格一致
  'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
  // 驼峰风格变量名
  'camelcase': [2, { 'properties': 'never' }],
  // 对象的最后一个属性末尾不允许使用逗号
  'comma-dangle': [2, 'never'],
  // 逗号前不允许有空格，逗号后需要有空格
  'comma-spacing': [2, { 'before': false, 'after': true }],
  // 不允许行首逗号
  'comma-style': [2, 'last'],
  // constructor 中需要有 super
  'constructor-super': 2,
  // 多行 if 需要有大括号
  'curly': [2, 'multi-line', 'consistent'],
  // 链式调用时，点号需要放在第二行开头，不允许放在第一行结尾
  'dot-location': [2, 'property'],
  // 强制使用换行符（LF）结束文件
  'eol-last': [2, 'always'],
  // 需要使用 ===、!==，与 null 比较时除外
  'eqeqeq': [2, 'always', { 'null': 'ignore' }],
  // 不允许函数名和执行它的括号之间有空格
  'func-call-spacing': 2,
  // generator 的 * 前后需要有空格
  'generator-star-spacing': [2, { 'before': true, 'after': true }],
  // 需要处理 callback 中的 error，参数名称为 err、 error
  'handle-callback-err': [2, '^(err|error)$'],
  // 强制缩进
  'indent': [2, 2, { 'SwitchCase': 1 }],
  // jsx 中的属性需要用单引号
  'jsx-quotes': [2, 'prefer-single'],
  // 对象字面量中冒号前面不允许有空格，后面需要有空格
  'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
  // 关键字前后需要有空格
  'keyword-spacing': [2, { 'before': true, 'after': true }],
  // 限制换行符为 LF
  'linebreak-style': [2, 'unix'],
  // 构造函数名称需要大写字母开头
  'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
  // 调用没有参数的构造函数时需要括号
  'new-parens': 2,
  // 不允许使用 Array 构造函数
  'no-array-constructor': 2,
  // 不允许使用 caller、callee
  'no-caller': 2,
  // 不允许对定义过的 class 重新赋值
  'no-class-assign': 2,
  // 不允许在条件语句中使用赋值语句，除非这个赋值语句被括号包起来了
  'no-cond-assign': 2,
  // 不允许对使用 const 定义的常量重新赋值
  'no-const-assign': 2,
  // 不允许在正则表达式中使用 Control 字符
  'no-control-regex': 2,
  // 不允许使用 debugger
  'no-debugger': 2,
  // 不允许使用 delete
  'no-delete-var': 2,
  // 不允许在 function 中定义重复参数
  'no-dupe-args': 2,
  // 不允许定义重复类
  'no-dupe-class-members': 2,
  // 不允许在对象字面量中出现重复键值
  'no-dupe-keys': 2,
  // 不允许在 switch 语句中出现重复测试表达式的 case
  'no-duplicate-case': 2,
  // 不允许在正则表达式中出现空字符集 []
  'no-empty-character-class': 2,
  // 不允许解构中出现空 {} 或 []
  'no-empty-pattern': 2,
  // 不允许使用 eval
  'no-eval': 2,
  // 不允许对 catch 的第一个参数 error 重新赋值
  'no-ex-assign': 2,
  // 不允许修改原生对象
  'no-extend-native': 2,
  // 不允许出现不必要的 bind 绑定
  'no-extra-bind': 2,
  // 不允许出现不必要的布尔转换
  'no-extra-boolean-cast': 2,
  // 不允许出现不必要的括号
  'no-extra-parens': [2, 'functions'],
  // switch 的 case 中需要有 break、return、throw
  'no-fallthrough': 2,
  // 浮动数不允许省略 0
  'no-floating-decimal': 2,
  // 不允许对一个函数申明重新赋值
  'no-func-assign': 2,
  // 不允许对全局变量赋值
  'no-global-assign': 2,
  // 不允许对 setTimeout、setInterval 传入字符串
  'no-implied-eval': 2,
  // 不允许在 if 中出现函数申明
  'no-inner-declarations': [2, 'functions'],
  // 不允许出现无效的正则表达式
  'no-invalid-regexp': 2,
  // 不允许出现特殊空白符，例如全角空格
  'no-irregular-whitespace': 2,
  // 不允许使用 __iterator__
  'no-iterator': 2,
  // 不允许 label 名称与定义过的变量重复
  'no-label-var': 2,
  // 不允许使用 label
  'no-labels': 2,
  // 不允许不必要的 {} 块
  'no-lone-blocks': 2,
  // 不允许混用空格和缩进
  'no-mixed-spaces-and-tabs': 2,
  // 不允许出现多个空格
  'no-multi-spaces': 2,
  // 不允许出现多行字符串
  'no-multi-str': 2,
  // 不允许出现连续空行
  'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 1, 'maxBOF': 1 }],
  // 不允许直接 new Object
  'no-new-object': 2,
  // 不允许直接 new require('foo')
  'no-new-require': 2,
  // 不允许直接 new Symbol('foo')
  'no-new-symbol': 2,
  // 不允许直接 new 基本包装类型
  'no-new-wrappers': 2,
  // 不允许直接将 Math、JSON、Reflect 当成函数来调用
  'no-obj-calls': 2,
  // 不允许以 0 开头的八进制
  'no-octal': 2,
  // 不允许使用八进制的转义符
  'no-octal-escape': 2,
  // 不允许直接用字符串连接 __dirname、__filename
  'no-path-concat': 2,
  // 不允许使用 __proto__
  'no-proto': 2,
  // 不允许重复声明变量
  'no-redeclare': 2,
  // 不允许在正则表达式的出现连续空格
  'no-regex-spaces': 2,
  // 不允许在 return 语句里赋值
  'no-return-assign': [2, 'always'],
  // 不允许将自己赋值给自己
  'no-self-assign': 2,
  // 不允许将自己与自己比较
  'no-self-compare': 2,
  // 不允许使用逗号操作符
  'no-sequences': 2,
  // 不允许使用保留字作为变量名
  'no-shadow-restricted-names': 2,
  // 不允许数组中出现连续逗号
  'no-sparse-arrays': 2,
  // 不允许在 super 被调用之前使用 this、super
  'no-this-before-super': 2,
  // 限制 throw 需要是一个 Error 对象
  'no-throw-literal': 2,
  // 不允许行尾出现空格
  'no-trailing-spaces': 2,
  // 不允许使用未定义的变量
  'no-undef': [2, { 'typeof': false }],
  // 不允许给变量赋值 undefined
  'no-undef-init': 2,
  // 不允许混淆的多行表达式
  'no-unexpected-multiline': 2,
  // 不允许循环内中出现不修改的循环条件
  'no-unmodified-loop-condition': 2,
  // 不允许没必要的三元运算符
  'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
  // 不允许在 return、throw、break、continue 之后还有代码
  'no-unreachable': 2,
  // 不允许在 finally 中出现 return、throw、break、continue
  'no-unsafe-finally': 2,
  // 不允许在 in、instanceof 操作符的左侧使用 ！
  'no-unsafe-negation': 2,
  // 不允许出现未使用的变量
  'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
  // 不允许没必要的 call、apply
  'no-useless-call': 2,
  // 不允许没必要的计算键名
  'no-useless-computed-key': 2,
  // 不允许没必要的 constructor
  'no-useless-constructor': 2,
  // 不允许没必要的转义
  'no-useless-escape': 0,
  // 不允许属性前空格
  'no-whitespace-before-property': 2,
  // 不允许使用 with
  'no-with': 2,
  // 对象字面量只有一行时，大括号内的首尾需要有空格
  'object-curly-spacing': [2, 'always', { objectsInObjects: false }],
  // 不允许用逗号一次申明多个变量
  'one-var': [2, 'never'],
  // 需要换行时，操作符需要放在行末
  'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' }}],
  // 代码块首尾不需要要空行
  'padded-blocks': [2, 'never'],
  // 使用 const 来申明申明后不再被修改的变量
  'prefer-const': 2,
  // 需要使用单引号
  'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
  // 不允许句尾分号
  'semi': [2, 'never'],
  // 一行出现多个语句时，分号前面不允许有空格，分号后面需要有空格
  'semi-spacing': [2, { 'before': false, 'after': true }],
  // if、function 等的大括号之前需要要有空格
  'space-before-blocks': [2, 'always'],
  // function 的小括号之前需要要有空格
  'space-before-function-paren': [2, 'always'],
  // 小括号内的首尾不允许有空格
  'space-in-parens': [2, 'never'],
  // 操作符左右需要有空格
  'space-infix-ops': 2,
  // new、typeof 等后面需要有空格，++、-- 等不允许有空格
  'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
  // 注释前后需要有空格
  'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
  // ${name} 内的首尾不允许有空格
  'template-curly-spacing': [2, 'never'],
  // 使用 isNaN() 检查 NaN
  'use-isnan': 2,
  // typeof 操作的对象需要是 undefined、object、boolean、number、string、function、symbol
  'valid-typeof': 2,
  // 立即执行的函数需要符合 (function () { foo () })()
  'wrap-iife': [2, 'inside', { 'functionPrototypeMethods': true }],
  //  yield* 后需要空格
  'yield-star-spacing': [2, 'both'],
  // 使用 if (color === 'red') { ... } 而不是 if ('red' === color) { ... }
  'yoda': [2, 'never', { 'onlyEquality': true }],
  // relative-url.js
  'k/relative-url': 2
}
