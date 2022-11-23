import "./App.css";
import SortComponent from "./component/sort/SortComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchComponent from "./component/search/SearchComponent";
import Array from "./array/Array";
import LinkedListWithArrayComponent from "./component/linkedListWithArray/LinkedListWithArrayComponent";
import SortTH1WithArray from "./component/sort/SortTH1WithArray";

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
              to={`/sort-th1-with-array`}
              className="btn btn-primary me-md-2"
              type="button"
            >
              Sort TH1 With Array
            </Link>
            <Link
              to={`/search`}
              className="btn btn-primary me-md-2"
              type="button"
            >
              Search
            </Link>
            <Link
              to={`/linked-list-with-array`}
              className="btn btn-primary me-md-2"
              type="button"
            >
              Linked List With Array
            </Link>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<></>}></Route>
          <Route exact path="/sort" element={<SortComponent />}></Route>
          <Route
            exact
            path="/sort-th1-with-array"
            element={<SortTH1WithArray />}
          ></Route>
          <Route exact path="/search" element={<SearchComponent />}></Route>
          <Route
            exact
            path="/linked-list-with-array"
            element={<LinkedListWithArrayComponent />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
