/**
 * @fileoverview use relative URLs to replace absolute URLs
 * @author Yuwei <https://github.com/keyfoxth>
 */

'use strict'

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'use relative URLs to replace absolute URLs',
      category: 'Best Practices',
      recommended: true,
      replacedBy: ['relative-url']
    },
    fixable: 'code',
    schema: []
  },

  create: function (context) {
    function checkUrl (node) {
      const handleRegexp = /http(|s):\/\//i
      const nodeRaw = node.raw

      context.report({
        node,
        message: 'Absolute URLs will be terrible to maintain and debug.',
        fix (fixer) {
          const result = nodeRaw.replace(handleRegexp, '//')
          return fixer.replaceText(node, result)
        }
      })
    }

    function checkString (node) {
      const urlRegexp = /^http(|s):\/\//i

      if (node.value.match(urlRegexp)) {
        checkUrl(node)
      }
    }

    function checkLiteral (node) {
      const sourceCode = context.getSourceCode()
      const token = sourceCode.getFirstToken(node)

      if (token.type === 'String') {
        checkString(node)
      }
    }

    return {
      Literal: checkLiteral
    }
  }
}
