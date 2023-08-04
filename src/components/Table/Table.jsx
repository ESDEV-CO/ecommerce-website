import React from "react";
import "./Table.css";
import { ImBin2 } from "react-icons/im";

const Table = () => {
  return (
    <table className="table">
      <tbody>
        <tr className="first_row">
          <th></th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Subtotal</th>
          <th></th>
        </tr>
        <tr className="second_row">
          <td className="table_img">
            <img src={require("../../assets/table1.png")} alt="sofa" />
          </td>
          <td className="light_clr">Asgaard sofa</td>
          <td className="light_clr">250,000.00</td>
          <td className="col_btn">
            <h6>1</h6>
          </td>
          <td className="col_total">250,000.00</td>
          <td>
            <button className="col_delete">
              <ImBin2 />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
