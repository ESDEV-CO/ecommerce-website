import React from "react";
import "./CompareProduct.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const CompareProduct = () => {
  return (
    <div>
      <section className="contact_header">
        <div className="header_bg">
          <img src={require("../../assets/page_bg.png")} alt="page bg" />
        </div>
        <div className="header_info">
          <img src={require("../../assets/logo.png")} alt="logo" />
          <h2>Comparison</h2>
          <span>
            Home <MdOutlineKeyboardArrowRight /> <span>Comparison</span>
          </span>
        </div>
      </section>
      <section className="comparison">
        <div className="comparison_heading">
          <div className="com_heading_child">
            <h3>Go to Product page for more Products</h3>
            <button className="read_more"> View More</button>
          </div>
          <div className="com_heading_child align_top">
            <img src={require("../../assets/compare1.png")} alt="compare1" />
            <h4>Asgaard Sofa</h4>
            <h5>Rs. 250,000.00</h5>
            <div className="user_review">
              <h6 className="rating">4.7</h6>
              <span className="compare_stars  ">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </span>
              <span className="customer_review compare_review">204 Review</span>
            </div>
          </div>
          <div className="com_heading_child align_top">
            <img src={require("../../assets/compare2.png")} alt="compare2" />
            <h4>Outdoor Sofa Set</h4>
            <h5>Rs. 224,000.00</h5>
            <div className="user_review">
              <h6 className="rating">4.2</h6>
              <span className="compare_stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </span>
              <span className="customer_review compare_review">145 Review</span>
            </div>
          </div>
          <div className="com_heading_child3">
            <h4>Add A Product</h4>
            <div className="product_select">
              Choose a product
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className="comparison_table">
          <table className="comp_table">
            <tbody>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  General
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Sales Package</td>
                <td className="table_data">1 sectional sofa</td>
                <td className="table_data">1 Three Seater, 2 Single Seater</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Model Number</td>
                <td className="table_data">TFCBLIGRBL6SRHS</td>
                <td className="table_data">DTUBLIGRBL568</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Secondary Material</td>
                <td className="table_data">Solid Wood</td>
                <td className="table_data">Solid Wood</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Configuration</td>
                <td className="table_data">L-shaped</td>
                <td className="table_data">L-shaped</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Upholstery Material</td>
                <td className="table_data">Fabric + Cotton</td>
                <td className="table_data">Fabric + Cotton</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Upholstery Color</td>
                <td className="table_data">Bright Grey & Lion</td>
                <td className="table_data">Bright Grey & Lion</td>
                <td className="table_data"></td>
              </tr>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  Product
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Filling Material</td>
                <td className="table_data">Foam</td>
                <td className="table_data">Matte</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Finish Type</td>
                <td className="table_data">Bright Grey & Lion</td>
                <td className="table_data">Bright Grey & Lion</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Adjustable Headrest</td>
                <td className="table_data">No</td>
                <td className="table_data">Yes</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Maximum Load Capacity</td>
                <td className="table_data">280 KG</td>
                <td className="table_data">300 KG</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Origin of Manufacture</td>
                <td className="table_data">India</td>
                <td className="table_data">India</td>
                <td className="table_data"></td>
              </tr>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  Dimensions
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Width</td>
                <td className="table_data">265.32 cm</td>
                <td className="table_data">265.32 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Height</td>
                <td className="table_data">76 cm</td>
                <td className="table_data">76 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Depth</td>
                <td className="table_data">167.76 cm</td>
                <td className="table_data">167.76 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Weight</td>
                <td className="table_data">45 KG</td>
                <td className="table_data">65 KG</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Seat Height</td>
                <td className="table_data">41.52 cm</td>
                <td className="table_data">41.52 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Leg Height</td>
                <td className="table_data">5.46 cm</td>
                <td className="table_data">5.46 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  Warranty
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Warranty Summary</td>
                <td className="table_data">1 Year Manufacturing Warranty</td>
                <td className="table_data">1.2 Year Manufacturing Warranty</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Warranty Service Type </td>
                <td className="table_data">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at operations@trevifurniture.com
                </td>
                <td className="table_data">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at support@xyz.com
                </td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Covered in Warranty</td>
                <td className="table_data">
                  Warranty Against Manufacturing Defect
                </td>
                <td className="table_data">
                  Warranty of the product is limited to manufacturing defects
                  only.
                </td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Not Covered in Warranty</td>
                <td className="table_data">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
                <td className="table_data">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Domestic Warranty</td>
                <td className="table_data">1 Year</td>
                <td className="table_data">3 Year</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data"></td>
                <td className="table_data">
                  <button className="filled_btn">Add to Cart</button>
                </td>
                <td className="table_data">
                  <button className="filled_btn">Add to Cart</button>
                </td>
                <td className="table_data"></td>
              </tr>
            </tbody>
          </table>
          {/* <table className="comp_table">
            <tbody>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  Product
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Filling Material</td>
                <td className="table_data">Foam</td>
                <td className="table_data">Matte</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Finish Type</td>
                <td className="table_data">Bright Grey & Lion</td>
                <td className="table_data">Bright Grey & Lion</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Adjustable Headrest</td>
                <td className="table_data">No</td>
                <td className="table_data">Yes</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Maximum Load Capacity</td>
                <td className="table_data">280 KG</td>
                <td className="table_data">300 KG</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Origin of Manufacture</td>
                <td className="table_data">India</td>
                <td className="table_data">India</td>
                <td className="table_data"></td>
              </tr>
            </tbody>
          </table> */}
          {/* <table className="comp_table">
            <tbody>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  Dimensions
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Width</td>
                <td className="table_data">265.32 cm</td>
                <td className="table_data">265.32 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Height</td>
                <td className="table_data">76 cm</td>
                <td className="table_data">76 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Depth</td>
                <td className="table_data">167.76 cm</td>
                <td className="table_data">167.76 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Weight</td>
                <td className="table_data">45 KG</td>
                <td className="table_data">65 KG</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Seat Height</td>
                <td className="table_data">41.52 cm</td>
                <td className="table_data">41.52 cm</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Leg Height</td>
                <td className="table_data">5.46 cm</td>
                <td className="table_data">5.46 cm</td>
                <td className="table_data"></td>
              </tr>
            </tbody>
          </table> */}
          {/* <table className="comp_table">
            <tbody>
              <tr className="comp_first_row">
                <th className="table_heading" scope="col">
                  Warranty
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td className="table_data">Warranty Summary</td>
                <td className="table_data">1 Year Manufacturing Warranty</td>
                <td className="table_data">1.2 Year Manufacturing Warranty</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Warranty Service Type </td>
                <td className="table_data">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at operations@trevifurniture.com
                </td>
                <td className="table_data">
                  For Warranty Claims or Any Product Related Issues Please Email
                  at support@xyz.com
                </td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Covered in Warranty</td>
                <td className="table_data">
                  Warranty Against Manufacturing Defect
                </td>
                <td className="table_data">
                  Warranty of the product is limited to manufacturing defects
                  only.
                </td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Not Covered in Warranty</td>
                <td className="table_data">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
                <td className="table_data">
                  The Warranty Does Not Cover Damages Due To Usage Of The
                  Product Beyond Its Intended Use And Wear & Tear In The Natural
                  Course Of Product Usage.
                </td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data">Domestic Warranty</td>
                <td className="table_data">1 Year</td>
                <td className="table_data">3 Year</td>
                <td className="table_data"></td>
              </tr>
              <tr>
                <td className="table_data"></td>
                <td className="table_data">
                  <button className="filled_btn">Add to Cart</button>
                </td>
                <td className="table_data">
                  <button className="filled_btn">Add to Cart</button>
                </td>
                <td className="table_data"></td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </section>
    </div>
  );
};

export default CompareProduct;
