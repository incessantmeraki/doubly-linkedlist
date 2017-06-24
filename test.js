var test = require('tape')
var Dlist = require('./index.js')

var myList

test ('setup', function (t) {
  myList = new Dlist()
  t.plan(2)
  t.true(myList.isEmpty())
  t.equal(0, myList.size())
  t.end()
})

test('basic pushBack pop functions', function (t) {
  t.plan(5)
  myList.pushBack('Hello')
  myList.pushBack('World')

  t.equal(2, myList.size())
  t.equal('Hello', myList.popFront().val)
  t.equal(1, myList.size())
  t.equal('World', myList.popBack().val)
  t.equal(0, myList.size())
  t.end()
})

test('remove and forEach api', function (t) {
  myList.pushBack('one')
  myList.pushBack('two')
  myList.pushBack('three')
  myList.pushBack('four')
  myList.pushBack('five')

  var size = 5
  t.equal(5, myList.size())
  myList.forEach(function (node) {
    t.equal(myList.size(), size--)
    myList.remove(node)
  })
  t.true(myList.isEmpty())
  t.equal(0, myList.size())
  t.end()
})
