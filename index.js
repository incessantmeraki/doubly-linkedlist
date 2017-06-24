function Dnode() {
  this.val = null
  this.flink = null
  this.blink = null
}

function Dlist() {
  this._sentinel = new Dnode()
  this._sentinel.flink = this._sentinel
  this._sentinel.blink = this._sentinel
  this._size = 0
}

Dlist.prototype.isEmpty = function () {
  return (this._size === 0)
}

Dlist.prototype.size = function () {
  return this._size
}

Dlist.prototype.insertBefore = function (val, node) {
  var newNode = new Dnode()
  newNode.val = val
  this._size++

  var prevNode = node.blink
  prevNode.flink = newNode
  node.blink = newNode
  newNode.blink=prevNode
  newNode.flink=node
}

Dlist.prototype.insertAfter = function (val, node) {
 this.insertBefore(val, node.flink) 
}

Dlist.prototype.pushFront = function (val) {
  this.insertBefore(val, this._sentinel.flink)
}

Dlist.prototype.pushBack = function (val) {
  this.insertBefore(val, this._sentinel)
}

Dlist.prototype.popFront = function () {
  var node = this._sentinel.flink
  this.remove(this._sentinel.flink)
  return node
}

Dlist.prototype.popBack = function () {
  var node = this._sentinel.blink
  this.remove(this._sentinel.blink)
  return node
}


Dlist.prototype.remove = function (node) {
  if (node === this._sentinel) {
    console.error("Sentinel cannot be removed")
    return
  }

  var prev = node.blink
  var next = node.flink
  node = null
  this._size--
  prev.flink = next
  next.blink = prev
}

Dlist.prototype.clear = function ()
{
  this._size = 0
  this._sentinel = null
}


Dlist.prototype.forEach = function (cb) {
  if (this._size === 0) {
    console.error("Empty linked list")
    return
  }
  for ( var node = this._sentinel.flink; node != this._sentinel; node = node.flink) {
    cb(node)
  }
}
module.exports = Dlist
