import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function SortComponent() {
  const [photosApi, setPhotoApi] = useState([]);
  const [userApi, setUserApi] = useState([]);

  // Bubble sort array
  const arrayTempTH1 = new Array();
  const [arrayTH1, setArrayTH1] = useState(new Array());
  const [elapsedArrayTH1, setElapsedArrayTH1] = useState("");

  const arrayTempTH2 = new Array();
  const [arrayTH2, setArrayTH2] = useState(new Array());
  const [elapsedArrayTH2, setElapsedArrayTH2] = useState("");

  const arrayTempTH3 = new Array();
  const [arrayTH3, setArrayTH3] = useState(new Array());
  const [elapsedArrayTH3, setElapsedArrayTH3] = useState("");

  const arrayTempTH4 = new Array();
  const [arrayTH4, setArrayTH4] = useState(new Array());
  const [elapsedArrayTH4, setElapsedArrayTH4] = useState("");

  // Selection sort array
  const arrayTempSelectionSortTH1 = new Array();
  const [arraySelectionSortTH1, setArraySelectionSortTH1] = useState(
    new Array()
  );
  const [elapsedArraySelectionSortTH1, setElapsedArraySelectionSortTH1] =
    useState("");

  const arrayTempSelectionSortTH2 = new Array();
  const [arraySelectionSortTH2, setArraySelectionSortTH2] = useState(
    new Array()
  );
  const [elapsedArraySelectionSortTH2, setElapsedArraySelectionSortTH2] =
    useState("");

  const arrayTempSelectionSortTH3 = new Array();
  const [arraySelectionSortTH3, setArraySelectionSortTH3] = useState(
    new Array()
  );
  const [elapsedArraySelectionSortTH3, setElapsedArraySelectionSortTH3] =
    useState("");

  const arrayTempSelectionSortTH4 = new Array();
  const [arraySelectionSortTH4, setArraySelectionSortTH4] = useState(
    new Array()
  );
  const [elapsedArraySelectionSortTH4, setElapsedArraySelectionSortTH4] =
    useState("");

  // Merge sort array
  const arrayMergeSortTempTH1 = new Array();
  const [arrayMergeSortTH1, setArrayMergeSortTH1] = useState(new Array());
  const [elapsedArrayMergeSortTH1, setElapsedArrayMergeSortTH1] = useState("");

  const arrayMergeSortTempTH2 = new Array();
  const [arrayMergeSortTH2, setArrayMergeSortTH2] = useState(new Array());
  const [elapsedArrayMergeSortTH2, setElapsedArrayMergeSortTH2] = useState("");

  const arrayMergeSortTempTH3 = new Array();
  const [arrayMergeSortTH3, setArrayMergeSortTH3] = useState(new Array());
  const [elapsedArrayMergeSortTH3, setElapsedArrayMergeSortTH3] = useState("");

  const arrayMergeSortTempTH4 = new Array();
  const [arrayMergeSortTH4, setArrayMergeSortTH4] = useState(new Array());
  const [elapsedArrayMergeSortTH4, setElapsedArrayMergeSortTH4] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(function (response) {
        for (let i = 0; i < 10; i++) {
          const suffer = response.data.sort(() => 0.5 - Math.random());
          suffer.forEach((item, index) => {
            arrayTempTH3.push(item);
            arrayTempSelectionSortTH3.push(item);
            arrayMergeSortTempTH3.push(item);
          });
        }
        for (let i = 0; i < 10; i++) {
          response.data.forEach((item, index) => {
            arrayTempTH1.push(item);
            arrayTempTH2.push(item);
            arrayTempSelectionSortTH1.push(item);
            arrayTempSelectionSortTH2.push(item);
            arrayMergeSortTempTH1.push(item);
            arrayMergeSortTempTH2.push(item);
          });
        }
        setArrayTH1(mergeSortTang(arrayTempTH1));
        setArrayTH2(mergeSortTang(arrayTempTH2));
        setArrayTH3(arrayTempTH3);
        setArraySelectionSortTH1(mergeSortTang(arrayTempSelectionSortTH1));
        setArraySelectionSortTH2(mergeSortTang(arrayTempSelectionSortTH2));
        setArraySelectionSortTH3(arrayTempSelectionSortTH3);
        setArrayMergeSortTH1(mergeSortTang(arrayMergeSortTempTH1));
        setArrayMergeSortTH2(mergeSortTang(arrayMergeSortTempTH2));
        setArrayMergeSortTH3(arrayMergeSortTempTH3);

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
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setUserApi(response.data);
        response.data.forEach((item, index) => {});
        const suffer = response.data.sort(() => 0.5 - Math.random());
        suffer.forEach((item, index) => {
          arrayTempTH4.push(item);
          arrayTempSelectionSortTH4.push(item);
          arrayMergeSortTempTH4.push(item);
        });
        setArrayTH4(arrayTempTH4);
        setArraySelectionSortTH4(arrayTempSelectionSortTH4);
        setArrayMergeSortTH4(arrayMergeSortTempTH4);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const bubbleSortArray = (array, type = "GIAMDAN") => {
    let isOrdered;
    switch (type) {
      case "GIAMDAN":
        for (let i = 0; i < array.length; i++) {
          isOrdered = true;
          for (let x = 0; x < array.length - 1 - i; x++) {
            if (array[x].id < array[x + 1].id) {
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
            if (array[x].id > array[x + 1].id) {
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
  const selectionSortArray = (arr, type = "GIAMDAN") => {
    switch (type) {
      case "GIAMDAN":
        var i, j, min_idx;
        for (i = 0; i < arr.length - 1; i++) {
          min_idx = i;
          for (j = i + 1; j < arr.length; j++)
            if (arr[j].id > arr[min_idx].id) {
              min_idx = j;
            }
          var temp = arr[min_idx];
          arr[min_idx] = arr[i];
          arr[i] = temp;
        }
        break;
      case "TANGDAN":
        var i, j, min_idx;
        for (i = 0; i < arr.length - 1; i++) {
          min_idx = i;
          for (j = i + 1; j < arr.length; j++)
            if (arr[j].id < arr[min_idx].id) {
              min_idx = j;
            }
          var temp = arr[min_idx];
          arr[min_idx] = arr[i];
          arr[i] = temp;
        }
        break;
      default:
        break;
    }
  };

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
    if (photosApi.length > 0) {
      // Bubble sort array
      if (arrayTH1.length > 0) {
        var startArrayTH1 = window.performance.now();
        bubbleSortArray(arrayTH1, "GIAMDAN");
        setElapsedArrayTH1(window.performance.now() - startArrayTH1);
      }

      if (arrayTH2.length > 0) {
        var startArrayTH2 = window.performance.now();
        bubbleSortArray(arrayTH2, "TANGDAN");
        setElapsedArrayTH2(window.performance.now() - startArrayTH2);
      }

      if (arrayTH3.length > 0) {
        var startArrayTH3 = window.performance.now();
        bubbleSortArray(arrayTH3, "TANGDAN");
        setElapsedArrayTH3(window.performance.now() - startArrayTH3);
      }

      // Selection sort array
      if (arraySelectionSortTH1.length > 0) {
        var startArraySelectionSortTH1 = window.performance.now();
        selectionSortArray(arraySelectionSortTH1, "GIAMDAN");
        setElapsedArraySelectionSortTH1(
          window.performance.now() - startArraySelectionSortTH1
        );
      }

      if (arraySelectionSortTH2.length > 0) {
        var startArraySelectionSortTH2 = window.performance.now();
        selectionSortArray(arraySelectionSortTH2, "TANGDAN");
        setElapsedArraySelectionSortTH2(
          window.performance.now() - startArraySelectionSortTH2
        );
      }

      if (arraySelectionSortTH3.length > 0) {
        var startArraySelectionSortTH3 = window.performance.now();
        selectionSortArray(arraySelectionSortTH3, "TANGDAN");
        setElapsedArraySelectionSortTH3(
          window.performance.now() - startArraySelectionSortTH3
        );
      }

      // Merge sort array
      if (arrayMergeSortTH1.length > 0) {
        var startArrayMergeSortTH1 = window.performance.now();
        mergeSortGiam(arrayMergeSortTH1);
        setElapsedArrayMergeSortTH1(
          window.performance.now() - startArrayMergeSortTH1
        );
      }

      if (arrayMergeSortTH2.length > 0) {
        var startArrayMergeSortTH2 = window.performance.now();
        mergeSortTang(arrayMergeSortTH2);
        setElapsedArrayMergeSortTH2(
          window.performance.now() - startArrayMergeSortTH2
        );
      }

      if (arrayMergeSortTH3.length > 0) {
        var startArrayMergeSortTH3 = window.performance.now();
        mergeSortTang(arrayMergeSortTH3);
        setElapsedArrayMergeSortTH3(
          window.performance.now() - startArrayMergeSortTH3
        );
      }
    }
  }, [photosApi]);

  useEffect(() => {
    if (userApi.length > 0) {
      if (arrayTH4.length > 0) {
        var startArrayTH4 = window.performance.now();
        bubbleSortArray(arrayTH4, "GIAMDAN");
        setElapsedArrayTH4(window.performance.now() - startArrayTH4);
      }

      if (arraySelectionSortTH4.length > 0) {
        var startArraySelectionSortTH4 = window.performance.now();
        selectionSortArray(arraySelectionSortTH4, "GIAMDAN");
        setElapsedArraySelectionSortTH4(
          window.performance.now() - startArraySelectionSortTH4
        );
      }
      if (arrayMergeSortTH4.length > 0) {
        var startArrayMergeSortTH4 = window.performance.now();
        mergeSortGiam(arrayMergeSortTH4);
        setElapsedArrayMergeSortTH4(
          window.performance.now() - startArrayMergeSortTH4
        );
      }
    }
  }, [userApi]);

  return (
    <div>
      {/* Bubble sort array */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Trường hợp</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>
              Sắp xếp một mảng từ tăng dần thành nhỏ dần (id) - 50000 item
            </td>
            <td>{elapsedArrayTH1}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>Sắp xếp một mảng đã được sắp xếp sẵn (id) - 50000 item</td>
            <td>{elapsedArrayTH2}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>Sắp xếp một mảng đã bị xáo trộn (id) - 50000 item</td>
            <td>{elapsedArrayTH3}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần (id) - 10 item</td>
            <td>{elapsedArrayTH4}</td>
          </tr>
        </tbody>
      </table>
      {/* Selection sort array */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Trường hợp</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>
              Sắp xếp một mảng từ tăng dần thành nhỏ dần (id) - 50000 item
            </td>
            <td>{elapsedArraySelectionSortTH1}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>Sắp xếp một mảng đã được sắp xếp sẵn (id) - 50000 item</td>
            <td>{elapsedArraySelectionSortTH2}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>Sắp xếp một mảng đã bị xáo trộn (id) - 50000 item</td>
            <td>{elapsedArraySelectionSortTH3}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần (id) - 10 item</td>
            <td>{elapsedArraySelectionSortTH4}</td>
          </tr>
        </tbody>
      </table>
      {/* Merge sort array */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Trường hợp</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>
              Sắp xếp một mảng từ tăng dần thành nhỏ dần (id) - 50000 item
            </td>
            <td>{elapsedArrayMergeSortTH1}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>Sắp xếp một mảng đã được sắp xếp sẵn (id) - 50000 item</td>
            <td>{elapsedArrayMergeSortTH2}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>Sắp xếp một mảng đã bị xáo trộn (id) - 50000 item</td>
            <td>{elapsedArrayMergeSortTH3}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>Sắp xếp một mảng đã bị xáo trộn (id) - 10 item</td>
            <td>{elapsedArrayMergeSortTH4}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SortComponent;
