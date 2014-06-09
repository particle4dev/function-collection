//http://jsfiddle.net/SpYk3/e4Ank/
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
