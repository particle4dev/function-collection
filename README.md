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
