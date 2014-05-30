<h1>
<a name="flat-ui-free-21" class="anchor" href="#flat-ui-free-21">
<span class="octicon octicon-link"></span>
</a>
Function Collection
</h1>

<div class="highlight highlight-js">
<pre>
Meteor.uuid
function () {
  var HEX_DIGITS = "0123456789abcdef";
  var s = [];
  for (var i = 0; i &lt; 36; i++) {
    s[i] = Random.choice(HEX_DIGITS);
  }
  s[14] = "4";
  s[19] = HEX_DIGITS.substr((parseInt(s[19],16) & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}
</pre>
</div>

https://github.com/angular/angular.js/blob/6c59e770084912d2345e7f83f983092a2d305ae3/src/Angular.js#L670
<div class="highlight highlight-js">
<pre>
/**
 * @ngdoc function
 * @name angular.equals
 * @function
 *
 * @description
 * Determines if two objects or two values are equivalent. Supports value types, regular expressions, arrays and
 * objects.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties pass `===` comparison.
 * * Both values are NaN. (In JavasScript, NaN == NaN => false. But we consider two NaN as equal)
 * * Both values represent the same regular expression (In JavasScript,
 *   /abc/ == /abc/ => false. But we consider two regular expressions as equal when their textual
 *   representation matches).
 *
 * During a property comparison, properties of `function` type and properties with names
 * that begin with `$` are ignored.
 *
 * Scope and DOMWindow objects are being compared only by identify (`===`).
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
  var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
  if (t1 == t2) {
    if (t1 == 'object') {
      if (isArray(o1)) {
        if (!isArray(o2)) return false;
        if ((length = o1.length) == o2.length) {
          for(key=0; key &lt; length; key++) {
            if (!equals(o1[key], o2[key])) return false;
          }
          return true;
        }
      } else if (isDate(o1)) {
        return isDate(o2) && o1.getTime() == o2.getTime();
      } else if (isRegExp(o1) && isRegExp(o2)) {
        return o1.toString() == o2.toString();
      } else {
        if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2)) return false;
        keySet = {};
        for(key in o1) {
          if (key.charAt(0) === '$' || isFunction(o1[key])) continue;
          if (!equals(o1[key], o2[key])) return false;
          keySet[key] = true;
        }
        for(key in o2) {
          if (!keySet.hasOwnProperty(key) &&
              key.charAt(0) !== '$' &&
              o2[key] !== undefined &&
              !isFunction(o2[key])) return false;
        }
        return true;
      }
    }
  }
  return false;
}
</pre>
</div>

<div class="highlight highlight-js">
<pre>
function matchUrl(c) {
	var b = void 0,
		d = "url,,scheme,,authority,path,,query,,fragment".split(","),
		e = /^(([^\:\/\?\#]+)\:)?(\/\/([^\/\?\#]*))?([^\?\#]*)(\?([^\#]*))?(\#(.*))?/,
		a = {
			url: void 0,
			scheme: void 0,
			authority: void 0,
			path: void 0,
			query: void 0,
			fragment: void 0,
			valid: !1
		};
	"string" === typeof c && "" != c && (b = c.match(e));
	if ("object" === typeof b)
		for (x in b) d[x] && "" != d[x] && (a[d[x]] = b[x]);
	a.scheme && a.authority && (a.valid = !0);
  	a.query = getQueryVariable(a.query);
	return a
}

function getQueryVariable(query) {
	var vars = query.split("&");
    var result = {};
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		result[pair[0]] = pair[1];
	}
	return result;
}
console.log(matchUrl("http://throwflag.meteor.com/_oauth/twitter?close&state=pTHu5BOGvT4ziyc0irj6X5OKd2lA-2B1TzhiwBewz52&oauth_token=vvdOd2lgI1XpeXHz4WAmHJhqjBfchciNImMsaCjBU&oauth_verifier=AZo9P4BiXptauimD6MqqTL6osr4V6B2UdPMEegONs"));
</pre>
</div>
