import axios from "axios";
import { LinkedList, LinkedListNode } from "datastructures-js";
import React, { useEffect, useState } from "react";

function SortTH1WithArray() {
  const [dataFromApi, setDataFromApi] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:9999/").then(function (response) {
      setDataFromApi(response.data);
    });
  }, []);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần</td>
            <td>{dataFromApi && dataFromApi[0][0].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần</td>
            <td>{dataFromApi && dataFromApi[1][0].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần</td>
            <td>{dataFromApi && dataFromApi[2][0].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng gần như đã được sắp xếp</td>
            <td>{dataFromApi && dataFromApi[0][4].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng gần như đã được sắp xếp</td>
            <td>{dataFromApi && dataFromApi[1][4].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng gần như đã được sắp xếp</td>
            <td>{dataFromApi && dataFromApi[2][4].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Mảng đã được sắp xếp hoàn chỉnh (Tăng dần)</td>
            <td>{dataFromApi && dataFromApi[0][1].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Mảng đã được sắp xếp hoàn chỉnh (Tăng dần)</td>
            <td>{dataFromApi && dataFromApi[1][1].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Mảng đã được sắp xếp hoàn chỉnh (Tăng dần)</td>
            <td>{dataFromApi && dataFromApi[2][1].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp một mảng bị xáo trộn phần tử</td>
            <td>{dataFromApi && dataFromApi[0][2].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp một mảng bị xáo trộn phần tử</td>
            <td>{dataFromApi && dataFromApi[1][2].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp một mảng bị xáo trộn phần tử</td>
            <td>{dataFromApi && dataFromApi[2][2].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Array</td>
            <td>Bubble Sort</td>
            <td>10 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp mảng bị xáo trộn ngẫu nhiên</td>
            <td>{dataFromApi && dataFromApi[0][3].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Selection Sort</td>
            <td>10 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp mảng bị xáo trộn ngẫu nhiên</td>
            <td>{dataFromApi && dataFromApi[1][3].speed}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>Merge Sort</td>
            <td>10 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp mảng bị xáo trộn ngẫu nhiên</td>
            <td>{dataFromApi && dataFromApi[2][3].speed}</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linked List</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần</td>
            <td>{dataFromApi && dataFromApi[3][0].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần</td>
            <td>{dataFromApi && dataFromApi[4][0].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng từ tăng dần thành nhỏ dần</td>
            <td>{dataFromApi && dataFromApi[5][0].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linked List</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng gần như đã được sắp xếp</td>
            <td>{dataFromApi && dataFromApi[3][4].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng gần như đã được sắp xếp</td>
            <td>{dataFromApi && dataFromApi[4][4].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Sắp xếp một mảng gần như đã được sắp xếp</td>
            <td>{dataFromApi && dataFromApi[5][4].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linked List</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Mảng đã được sắp xếp hoàn chỉnh (Tăng dần)</td>
            <td>{dataFromApi && dataFromApi[3][1].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Mảng đã được sắp xếp hoàn chỉnh (Tăng dần)</td>
            <td>{dataFromApi && dataFromApi[4][1].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Đã được sắp xếp</td>
            <td>Mảng đã được sắp xếp hoàn chỉnh (Tăng dần)</td>
            <td>{dataFromApi && dataFromApi[5][1].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linked List</td>
            <td>Bubble Sort</td>
            <td>50000 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp một mảng bị xáo trộn phần tử</td>
            <td>{dataFromApi && dataFromApi[3][2].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Selection Sort</td>
            <td>50000 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp một mảng bị xáo trộn phần tử</td>
            <td>{dataFromApi && dataFromApi[4][2].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Merge Sort</td>
            <td>50000 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp một mảng bị xáo trộn phần tử</td>
            <td>{dataFromApi && dataFromApi[5][2].speed}</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Tên cấu trúc dữ liệu</th>
            <th scope="col">Tên giải thuật</th>
            <th scope="col">Số phần tử</th>
            <th scope="col">Trường hợp tổng quát</th>
            <th scope="col">Trường hợp cụ thể</th>
            <th scope="col">Thời gian cần để hoàn thành (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Linked List</td>
            <td>Bubble Sort</td>
            <td>10 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp mảng bị xáo trộn ngẫu nhiên</td>
            <td>{dataFromApi && dataFromApi[3][3].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Selection Sort</td>
            <td>10 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp mảng bị xáo trộn ngẫu nhiên</td>
            <td>{dataFromApi && dataFromApi[4][3].speed}</td>
          </tr>
          <tr>
            <td>Linked List</td>
            <td>Merge Sort</td>
            <td>10 item</td>
            <td>Chưa được sắp xếp</td>
            <td>Sắp xếp mảng bị xáo trộn ngẫu nhiên</td>
            <td>{dataFromApi && dataFromApi[5][3].speed}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default SortTH1WithArray;
