'use strict';

var test = require('tape');
var pathUtil = require('../path-util')


var cases = [{
    desc: "basic",
    p1: "/a/b/c",
    p2: "/a/b/c/d/e/index.js",
    expected: "../../"
}, 
{
    desc: "same root",
    p1: "/a",
    p2: "/a/index.js",
    expected: ""
},
{
    desc: "no common root",
    p1: "/b",
    p2: "/a/index.js",
    expected: "../b"
},
{
    desc: "trailing slash",
    p1: "/a/",
    p2: "/a/b/index.js",
    expected: "../"
}
]

test('relativePathTo: basic', function(t) {
    cases.forEach(function(e) {
        var pathTo = pathUtil.relativePathTo(e.p1, e.p2);
        t.equal(pathTo, e.expected, "Path relative case '" + e.desc + "'");
    })
    t.end();
});