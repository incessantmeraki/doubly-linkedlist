# doubly-linkedlist

[![Build Status](https://travis-ci.org/incessantmeraki/doubly-linkedlist.svg?branch=master)](https://travis-ci.org/incessantmeraki/doubly-linkedlist)

simple and fast circular doubly linked list with a runtime of O(1) for basic operations 

## Usage

### Example

```js
  var Dlist = require('doubly-linkedlist')
  var q = new Dlist()
  q.pushBack('hello')
  q.pushFront('world')
  console.log(q.popFront()) // world
  console.log(q.popBack()) // hello
```

### API

#### `llist= new Dlist()`
Creates a new linked list structure 

#### `llist.pushFront(val)`
pushes val into the front of the list 

#### `llist.pushBack(val)`
pushes val into the end of the list 

#### `llist.popBack()`
removes element from the end of the list and return it

#### `llist.popFront()`
removes element from the front of the list and return it 

#### `llist.remove(node)`
removes node from the list

#### `llist.forEach(cb(value))`
traverses each node of the list

#### `llist.clear()`
clears all elements of list

#### `llist.size()`
returns size of the list

#### `llist.isEmpty()`
returns true if the list is empty otherwise false

## License

MIT
