/**
 * @fileoverview use relative URLs to replace absolute URLs
 * @author Yuwei <https://github.com/keyfoxth>
 */

'use strict'

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../lib/rules/relative-url')

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const tester = new RuleTester()

tester.run('relative-url', rule, {
  valid: [
    {
      code: `'https'`
    },
    {
      code: `'http'`
    },
    {
      code: `'//github.com'`
    },
    {
      code: `'&url=https://github.com'`
    },
    {
      code: `'&url=http://github.com'`
    }
  ],
  invalid: [
    {
      code: `'https://github.com'`,
      errors: [{
        message: 'Absolute URLs will be terrible to maintain and debug.'
      }]
    },
    {
      code: `'http://github.com'`,
      errors: [{
        message: 'Absolute URLs will be terrible to maintain and debug.'
      }]
    }
  ]
})
