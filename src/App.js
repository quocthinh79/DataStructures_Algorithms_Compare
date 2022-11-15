import "./App.css";
import SortComponent from "./component/sort/SortComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchComponent from "./component/search/SearchComponent";
import Array from "./array/Array";

const {
  LinkedList,
  LinkedListNode,
  Stack,
  Queue,
} = require("datastructures-js");

function App() {
  const bubbleSortTextArray = (array, type = "GIAMDAN") => {
    let isOrdered;
    switch (type) {
      case "GIAMDAN":
        for (let i = 0; i < array.length; i++) {
          isOrdered = true;
          for (let x = 0; x < array.length - 1 - i; x++) {
            if (array[x].title.localeCompare(array[x + 1].title) === -1) {
              [array[x], array[x + 1]] = [array[x + 1], array[x]];
              isOrdered = false;
            }
          }
          if (isOrdered) break;
        }
        break;
      case "TANGDAN":
        for (let i = 0; i < array.length; i++) {
          isOrdered = true;
          for (let x = 0; x < array.length - 1 - i; x++) {
            if (array[x].title.localeCompare(array[x + 1].title) === 1) {
              [array[x], array[x + 1]] = [array[x + 1], array[x]];
              isOrdered = false;
            }
          }
          if (isOrdered) break;
        }
        break;
      default:
        break;
    }
    return array;
  };

  const bubbleSortLinkedList = (linkedList, type = "GIAMDAN") => {
    let sentinel = new LinkedListNode(0, linkedList._head);
    let dirty = true;
    while (dirty) {
      dirty = false;
      let node = sentinel;
      while (node._next && node._next._next) {
        let first = node._next;
        let second = first._next;
        switch (type) {
          case "GIAMDAN":
            if (first._value.id < second._value.id) {
              // swap
              node._next = second;
              first._next = second._next;
              second._next = first;
              dirty = true;
            }
            break;
          case "TANGDAN":
            if (first._value.id > second._value.id) {
              // swap
              node._next = second;
              first._next = second._next;
              second._next = first;
              dirty = true;
            }
            break;
          default:
            break;
        }
        node = node._next;
      }
    }

    linkedList._head = sentinel._next;
  };

  const bubbleSortStack = (s1, type = "GIAMDAN") => {
    const s2 = new Stack();
    switch (type) {
      case "GIAMDAN":
        while (!s1.isEmpty()) {
          let temp = s1.pop();
          while (!s2.isEmpty() && s2.peek().id > temp.id) {
            s1.push(s2.pop());
          }
          s2.push(temp);
        }
        while (!s2.isEmpty()) {
          s1.push(s2.pop());
        }
        break;
      case "TANGDAN":
        while (!s1.isEmpty()) {
          let temp = s1.pop();
          while (!s2.isEmpty() && s2.peek().id < temp.id) {
            s1.push(s2.pop());
          }
          s2.push(temp);
        }
        while (!s2.isEmpty()) {
          s1.push(s2.pop());
        }
        break;
      default:
        break;
    }
  };

  const selectionSortLinkedList = (head, type = "GIAMDAN") => {
    switch (type) {
      case "GIAMDAN":
        var temp = head._head;
        while (temp) {
          var min = temp;
          var r = temp._next;
          while (r) {
            if (min._value.id < r._value.id) min = r;
            r = r._next;
          }
          var x = temp._value.id;
          temp._value.id = min._value.id;
          min._value.id = x;
          temp = temp._next;
        }
        break;
      case "TANGDAN":
        var temp = head._head;
        while (temp) {
          var min = temp;
          var r = temp._next;
          while (r) {
            if (min._value.id > r._value.id) min = r;
            r = r._next;
          }
          var x = temp._value.id;
          temp._value.id = min._value.id;
          min._value.id = x;
          temp = temp._next;
        }
        break;
      default:
        break;
    }
  };

  function sortedMergeLinkedList(a, b) {
    var result = null;
    if (a == null) return b;
    if (b == null) return a;
    if (a.val <= b.val) {
      result = a;
      result.next = sortedMergeLinkedList(a.next, b);
    } else {
      result = b;
      result.next = sortedMergeLinkedList(a, b.next);
    }
    return result;
  }

  function mergeSortLinkedList(h) {
    if (h == null || h.next == null) {
      return h;
    }
    var middle = getMiddleLinkedList(h);
    var nextofmiddle = middle.next;
    middle.next = null;
    var left = mergeSortLinkedList(h);
    var right = mergeSortLinkedList(nextofmiddle);
    var sortedlist = sortedMergeLinkedList(left, right);
    return sortedlist;
  }

  function getMiddleLinkedList(head) {
    if (head == null) return head;

    var slow = head,
      fast = head;

    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  return (
    <div className="App">
      <Router>
        <div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              to={`/sort`}
              className="btn btn-primary me-md-2"
              type="button"
            >
              Sort
            </Link>
            <Link
              to={`/search`}
              className="btn btn-primary me-md-2"
              type="button"
            >
              Search
            </Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<></>}></Route>
          <Route exact path="/sort" element={<SortComponent />}></Route>
          <Route exact path="/search" element={<SearchComponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
