// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("sparql", function(config) {
  var indentUnit = config.indentUnit;
  var curPunc;

  function wordRegexp(words) {
    return new RegExp("^(?:" + words.join("|") + ")$", "i");
  }
  var ops = wordRegexp(["str", "lang", "langmatches", "datatype", "bound", "sameterm", "isiri", "isuri",
                        "iri", "uri", "bnode", "count", "sum", "min", "max", "avg", "sample",
                        "group_concat", "rand", "abs", "ceil", "floor", "round", "concat", "substr", "strlen",
                        "replace", "ucase", "lcase", "encode_for_uri", "contains", "strstarts", "strends",
                        "strbefore", "strafter", "year", "month", "day", "hours", "minutes", "seconds",
                        "timezone", "tz", "now", "uuid", "struuid", "md5", "sha1", "sha256", "sha384",
                        "sha512", "coalesce", "if", "strlang", "strdt", "isnumeric", "regex", "exists",
                        "isblank", "isliteral", "a"]);
  var keywords = wordRegexp(["base", "prefix", "select", "distinct", "reduced", "construct", "describe",
                             "ask", "from", "named", "where", "order", "limit", "offset", "filter", "optional",
                             "graph", "by", "asc", "desc", "as", "having", "undef", "values", "group",
                             "minus", "in", "not", "service", "silent", "using", "insert", "delete", "union",
                             "true", "false", "with",
                             "data", "copy", "to", "move", "add", "create", "drop", "clear", "load"]);
  var operatorChars = /[*+\-<>=&|\^\/!\?]/;

  function tokenBase(stream, state) {
    var ch = stream.next();
    curPunc = null;
    if (ch == "$" || ch == "?") {
      if(ch == "?" && stream.match(/\s/, false)){
        return "operator";
      }
      stream.match(/^[\w\d]*/);
      return "variable-2";
    }
    else if (ch == "<" && !stream.match(/^[\s\u00a0=]/, false)) {
      stream.match(/^[^\s\u00a0>]*>?/);
      return "atom";
    }
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenLiteral(ch);
      return state.tokenize(stream, state);
    }
    else if (/[{}\(\),\.;\[\]]/.test(ch)) {
      curPunc = ch;
      return "bracket";
    }
    else if (ch == "#") {
      stream.skipToEnd();
      return "comment";
   