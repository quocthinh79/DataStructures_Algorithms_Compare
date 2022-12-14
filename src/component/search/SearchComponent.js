import axios from "axios";
import React, { useEffect, useState } from "react";
import BinarySearchTreeMy from "../../BinarySearchTree/BinarySearchTree";

function SearchComponent() {
  const [photosApi, setPhotoApi] = useState([]);

  const treeTemp = new BinarySearchTreeMy();
  const [tree, setTree] = useState(new BinarySearchTreeMy());

  const treeTempID = new BinarySearchTreeMy();
  const [treeID, setTreeID] = useState(new BinarySearchTreeMy());

  const treeTempIDNotSuffer = new BinarySearchTreeMy();
  const [treeIDNotSuffer, setTreeIDNotSuffer] = useState(
    new BinarySearchTreeMy()
  );

  const mapTemp = new Map();
  const [map, setMap] = useState(new Map());

  const mapTemp1 = new Map();
  const [map1, setMap1] = useState(new Map());

  const [elapsedDfsTH1, setElapsedDfsTH1] = useState("");
  const [elapsedDfsTH2, setElapsedDfsTH2] = useState("");
  const [elapsedDfsTH3, setElapsedDfsTH3] = useState("");

  const [elapsedBfsTH1, setElapsedBfsTH1] = useState("");
  const [elapsedBfsTH2, setElapsedBfsTH2] = useState("");
  const [elapsedBfsTH3, setElapsedBfsTH3] = useState("");

  const [elapsedMapTH1, setElapsedMapTH1] = useState("");
  const [elapsedMapTH2, setElapsedMapTH2] = useState("");
  const [elapsedMapTH3, setElapsedMapTH3] = useState("");

  const [elapsedMapTH4, setElapsedMapTH4] = useState("");
  const [elapsedMapTH5, setElapsedMapTH5] = useState("");
  const [elapsedMapTH6, setElapsedMapTH6] = useState("");

  const mergeSortGiam = (arr) => {
    if (arr.length <= 1) return arr;
    const middlePoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, middlePoint);
    let right = arr.slice(middlePoint);
    return mergeUnsortedArrsGiam(mergeSortGiam(left), mergeSortGiam(right));
  };

  const mergeUnsortedArrsGiam = (left, right) => {
    const sortedItems = [];
    while (left.length && right.length) {
      if (left[0].id > right[0].id) {
        sortedItems.push(left.shift());
      } else {
        sortedItems.push(right.shift());
      }
    }
    return [...sortedItems, ...left, ...right];
  };

  const mergeSortTang = (arr) => {
    if (arr.length <= 1) return arr;
    const middlePoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, middlePoint);
    let right = arr.slice(middlePoint);
    return mergeUnsortedArrsTang(mergeSortTang(right), mergeSortTang(left));
  };

  const mergeUnsortedArrsTang = (left, right) => {
    const sortedItems = [];
    while (left.length && right.length) {
      if (left[0].id < right[0].id) {
        sortedItems.push(left.shift());
      } else {
        sortedItems.push(right.shift());
      }
    }
    return [...sortedItems, ...left, ...right];
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        response.data.forEach((item, index) => {
          treeTemp.insertTextObject(item);
        });
        const suffer = response.data.sort(() => 0.5 - Math.random());
        suffer.forEach((item, index) => {
          treeTempID.insertWithID(item);
          mapTemp.set(item.id, item);
          for (let i = 0; i < 10; i++) {
            if (i === 4 && item.id === 1) {
              mapTemp1.set(new String(item.id), {
                ...item,
                title: "Le Quoc Thinh",
              });
            } else {
              mapTemp1.set(new String(item.id), { ...item });
            }
          }
        });
        setTree(treeTemp);
        setTreeID(treeTempID);
        setMap(mapTemp);
        setMap1(mapTemp1);
        setPhotoApi(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    if (photosApi.length > 0) {
      DfsBinaryTreeID(treeID.root, 1, setElapsedDfsTH1);
      BfsBinaryTreeID(treeID.root, 1, setElapsedBfsTH1);

      DfsBinaryTreeID(treeID.root, 5000, setElapsedDfsTH2);
      BfsBinaryTreeID(treeID.root, 5000, setElapsedBfsTH2);
    }
  }, [tree]);

  useEffect(() => {
    const sapXep = mergeSortGiam(photosApi);
    const slice1 = sapXep.slice(0, 10);
    const slice1SapXep = mergeSortTang(slice1);
    const slice2 = sapXep.slice(10, 5000);
    for (let i = 0; i < slice2.length; i++) {
      treeTempIDNotSuffer.insertWithID(slice2[i]);
    }
    for (let i = 0; i < slice1.length; i++) {
      treeTempIDNotSuffer.insertWithID(slice1SapXep[i]);
    }
    setTreeIDNotSuffer(treeTempIDNotSuffer);
  }, [photosApi]);

  useEffect(() => {
    DfsBinaryTreeID(treeIDNotSuffer.root, 4991, setElapsedDfsTH3);
    BfsBinaryTreeID(treeIDNotSuffer.root, 4991, setElapsedBfsTH3);
  }, [treeIDNotSuffer]);

  useEffect(() => {
    if (map.size > 0) {
      const start = window.performance.now();
      map.get(1);
      setElapsedMapTH1(window.performance.now() - start);

      const start1 = window.performance.now();
      map.get(5000);
      setElapsedMapTH2(window.performance.now() - start1);

      const start2 = window.performance.now();
      map.get(4991);
      setElapsedMapTH3(window.performance.now() - start2);
    }
  }, [map]);

  useEffect(() => {
    if (map1.size > 0) {
      const start = window.performance.now();
      map1.forEach((item, index) => {
        if (item.title === "Le Quoc Thinh") {
          setElapsedMapTH4(window.performance.now() - start);
        }
      });
    }
  }, [map1]);

  const DfsBinaryTreeID = (root, target, set) => {
    var startDfsTH2 = window.performance.now();
    if (root == null) return;
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
      var tempNode = queue.pop();
      if (target === tempNode.value.id) {
        set(window.performance.now() - startDfsTH2);
      }
      if (tempNode.right != null) {
        queue.push(tempNode.right);
      }
      if (tempNode.left != null) {
        queue.push(tempNode.left);
      }
    }
  };

  const BfsBinaryTreeID = (root, target, set) => {
    var startDfsTH2 = window.performance.now();
    if (root == null) return;
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {
      var tempNode = queue.shift();
      if (target === tempNode.value.id) {
        set(window.performance.now() - startDfsTH2);
      }
      if (tempNode.left != null) {
        queue.push(tempNode.left);
      }
      if (tempNode.right != null) {
        queue.push(tempNode.right);
      }
    }
  };

  return (
    <>
      <div className="">
        <h5 class="modal-title d-flex justify-content-start">Tr?????ng h???p 1</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">T??n c???u tr??c d??? li???u</th>
              <th scope="col">T??n gi???i thu???t</th>
              <th scope="col">Tr?????ng h???p</th>
              <th scope="col">Th???i gian c???n ????? ho??n th??nh (ms)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Binary Search Tree</td>
              <td>DFS</td>
              <td>T??m ki???m ID nh??? nh???t</td>
              <td>{elapsedDfsTH1}</td>
            </tr>
            <tr>
              <td>Binary Search Tree</td>
              <td>BFS</td>
              <td>T??m ki???m ID nh??? nh???t</td>
              <td>{elapsedBfsTH1}</td>
            </tr>
            <tr>
              <td>Hash Table (Map)</td>
              <td></td>
              <td>T??m ki???m ID nh??? nh???t</td>
              <td>{elapsedMapTH1}</td>
            </tr>
            <tr>
              <td>Hash Table (Map)</td>
              <td>Hash table b??? collision</td>
              <td>T??m ki???m ID nh??? nh???t</td>
              <td>{elapsedMapTH4}</td>
            </tr>
          </tbody>
        </table>
        <h5 class="modal-title d-flex justify-content-start">Tr?????ng h???p 2</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">T??n c???u tr??c d??? li???u</th>
              <th scope="col">T??n gi???i thu???t</th>
              <th scope="col">Tr?????ng h???p</th>
              <th scope="col">Th???i gian c???n ????? ho??n th??nh (ms)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Binary Search Tree</td>
              <td>DFS</td>
              <td>T??m ki???m ID l???n nh???t</td>
              <td>{elapsedDfsTH2}</td>
            </tr>
            <tr>
              <td>Binary Search Tree</td>
              <td>BFS</td>
              <td>T??m ki???m ID l???n nh???t</td>
              <td>{elapsedBfsTH2}</td>
            </tr>
            <tr>
              <td>Hash Table (Map)</td>
              <td></td>
              <td>T??m ki???m ID l???n nh???t</td>
              <td>{elapsedMapTH2}</td>
            </tr>
          </tbody>
        </table>
        <h5 class="modal-title d-flex justify-content-start">Tr?????ng h???p 3</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">T??n c???u tr??c d??? li???u</th>
              <th scope="col">T??n gi???i thu???t</th>
              <th scope="col">Tr?????ng h???p</th>
              <th scope="col">Th???i gian c???n ????? ho??n th??nh (ms)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Binary Search Tree</td>
              <td>DFS</td>
              <td>T??m ki???m ID G???n node cha</td>
              <td>{elapsedDfsTH3}</td>
            </tr>
            <tr>
              <td>Binary Search Tree</td>
              <td>BFS</td>
              <td>T??m ki???m ID G???n node cha</td>
              <td>{elapsedBfsTH3}</td>
            </tr>
            <tr>
              <td>Hash Table (Map)</td>
              <td></td>
              <td>T??m ki???m ID G???n node cha</td>
              <td>{elapsedMapTH3}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchComponent;
