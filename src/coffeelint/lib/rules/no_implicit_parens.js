// Generated by CoffeeScript 1.7.1
(function() {
  var NoImplicitParens;

  module.exports = NoImplicitParens = (function() {
    function NoImplicitParens() {}

    NoImplicitParens.prototype.rule = {
      name: 'no_implicit_parens',
      strict: true,
      level: 'ignore',
      message: 'Implicit parens are forbidden',
      description: "This rule prohibits implicit parens on function calls.\n<pre>\n<code># Some folks don't like this style of coding.\nmyFunction a, b, c\n\n# And would rather it always be written like this:\nmyFunction(a, b, c)\n</code>\n</pre>\nImplicit parens are permitted by default, since their use is\nidiomatic CoffeeScript."
    };

    NoImplicitParens.prototype.tokens = ['CALL_END'];

    NoImplicitParens.prototype.lintToken = function(token, tokenApi) {
      var i, t;
      if (token.generated) {
        if (tokenApi.config[this.rule.name].strict !== false) {
          return true;
        } else {
          i = -1;
          while (true) {
            t = tokenApi.peek(i);
            if ((t == null) || (t[0] === 'CALL_START' && t.generated)) {
              return true;
            }
            if (t[2].first_line !== token[2].first_line) {
              return null;
            }
            i -= 1;
          }
        }
      }
    };

    return NoImplicitParens;

  })();

}).call(this);
