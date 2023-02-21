import axios from 'axios';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import swal from 'sweetalert';


const AllProducts = ({ addProductId }) => {
    const navigate = useNavigate();
    const [deleted, setDeleted] = useState(false);

    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);



    useEffect(() => {

        let isMounted = true;
        document.title = "View Product";

        axios.get(`/api/admin/products`).then(res => {
            if (isMounted) {
                if (res != null) {
                    setProduct(res.data.products);
                    setLoading(false);
                }
            }
        });

        if (!$.fn.DataTable.isDataTable("#myTable")) {

            setTimeout(function () {
                $("#table").DataTable({

                    pagingType: "full_numbers",
                    pageLength: 10,
                    processing: true,
                    dom: "Bfrtip",
                    select: {
                        style: "single",
                    },

                    buttons: [

                        {
                            extend: "copy",
                            className: "btn btn-secondary bg-secondary",
                        },
                        {
                            extend: "csv",
                            className: "btn btn-secondary bg-secondary",
                        },
                        {
                            extend: "print",
                            customize: function (win) {
                                $(win.document.body).css("font-size", "10pt");
                                $(win.document.body)
                                    .find("table")
                                    .addClass("compact")
                                    .css("font-size", "inherit");
                            },
                            className: "btn btn-secondary bg-secondary",
                        },
                    ],

                    fnRowCallback: function (
                        nRow,
                        aData,
                        iDisplayIndex,
                        iDisplayIndexFull
                    ) {
                        var index = iDisplayIndexFull + 1;
                        $("td:first", nRow).html(index);
                        return nRow;
                    },

                    lengthMenu: [
                        [10, 20, 30, 50, -1],
                        [10, 20, 30, 50, "All"],
                    ],
                    columnDefs: [
                        {
                            targets: 0,
                            render: function (data, type, row, meta) {
                                return type === "export" ? meta.row + 1 : data;
                            },
                        },
                    ],

                });
            }, 1000);

        }
    }, []);


    function setID(id) {
        addProductId(id);
    }

    function deleteProduct(id) {
        setDeleted(true);
        axios.delete('api/admin/products/' + id).then(res => {
            if (res.data.success === true) {

                setDeleted(true);
                swal('SUCCESSUFUL DELETION', 'success');

                navigate("/admin/dashboard");



            } else {
                console.log("ERROR");
            }
        });
    }



    const showTable = () => {
        try {
            return viewProduct.map((item, index) => {

                return (


                    <tr>

                        <td className="text-xs font-weight-bold">{index + 1}</td>
                        <td className="text-xs font-weight-bold">{item.name}</td>
                        <td className="text-xs font-weight-bold">{item.product_category == null ? "/" : item.product_category.name}</td>
                        <td className="text-xs font-weight-bold">{item.price}</td>
                        <td className="text-xs font-weight-bold"> <Link to={`editProduct/${item.id}`} className="btn btn-success btn-sm" onClick={() => { setID(item.id); }}>EDIT</Link></td>
                        <td className="text-xs font-weight-bold"> <button className="btn btn-danger btn-sm " onClick={() => { deleteProduct(item.id); }}>DELETE</button></td>
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };


    return (

        <div className='allProducts'>
            <div className="container-sm">
                <div className="table-responsive p-0 pb-2">
                    <table id="table" className="table sm align-items-center justify-content-center mb-4">
                        <thead>
                            <tr>

                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Number</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Product Name</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Category</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Price</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">EDIT</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Delete</th>

                            </tr>
                        </thead>

                        <tbody>
                            {showTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

};





export default AllProducts;