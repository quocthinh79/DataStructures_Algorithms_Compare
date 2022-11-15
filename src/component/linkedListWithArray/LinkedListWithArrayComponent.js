import React, { useEffect, useState } from "react";
import Array from "../../array/Array";

const {
  LinkedList,
  LinkedListNode,
  Stack,
  Queue,
} = require("datastructures-js");

function LinkedListWithArrayComponent() {
  const [elapsedArray1, setElapsedArray1] = useState("");
  const [elapsedArray2, setElapsedArray2] = useState("");
  const [elapsedArray3, setElapsedArray3] = useState("");
  const [elapsedLinkedList2, setElapsedLinkedList2] = useState("");
  const [elapsedLinkedList1, setElapsedLinkedList1] = useState("");
  const [elapsedLinkedList3, setElapsedLinkedList3] = useState("");
  const array = new Array();
  const linkedList = new LinkedList();

  useEffect(() => {
    var start1 = window.performance.now();
    for (let i = 0; i < 1000; i++) {
      array.push({ a: 1, b: 3 });
    }
    setElapsedArray1(window.performance.now() - start1);

    var start2 = window.performance.now();
    for (let i = 0; i < 1000; i++) {
      linkedList.insertFirst({ a: 1, b: 3 });
    }
    setElapsedLinkedList2(window.performance.now() - start2);

    var start3 = window.performance.now();
    array.data[634] = { a: 3, b: 5 };
    setElapsedArray2(window.performance.now() - start3);

    var start4 = window.performance.now();
    linkedList.forEach((item, index) => {
      if (index === 634) {
        item._value = { a: 3, b: 5 };
        setElapsedLinkedList1(window.performance.now() - start4);
      }
    });

    var start5 = window.performance.now();
    array.deleteAt(324);
    array.deleteAt(235);
    array.deleteAt(745);
    array.deleteAt(1);
    array.deleteAt(34);
    setElapsedArray3(window.performance.now() - start5);

    var start6 = window.performance.now();
    linkedList.removeAt(324);
    linkedList.removeAt(235);
    linkedList.removeAt(745);
    linkedList.removeAt(1);
    linkedList.removeAt(34);
    setElapsedLinkedList3(window.performance.now() - start6);
  }, []);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Thao tác</th>
            <th scope="col">Trường hợp</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Insert</td>
            <td></td>
            <td>{elapsedArray1}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Insert</td>
            <td></td>
            <td>{elapsedLinkedList2}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Edit</td>
            <td></td>
            <td>{elapsedArray2}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Edit</td>
            <td></td>
            <td>{elapsedLinkedList1}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Delete</td>
            <td></td>
            <td>{elapsedArray3}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Delete</td>
            <td></td>
            <td>{elapsedLinkedList3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LinkedListWithArrayComponent;
