import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";


const AllProducts = () => {

    useEffect(() => {
        if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#table").DataTable({
                        // bDestroy: true,
                        pagingType: "full_numbers",
                        pageLength: 20,
                        processing: true,
                        dom: "Bfrtip",
                        select: {
                            style: "single",
                        },

                        buttons: [
                            {
                                extend: "pageLength",
                                className: "btn btn-secondary bg-secondary",
                            },
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
                        // "bDestroy": true
                    });
                }, 1000);
            });
        }
    }, []);


    const showTable = () => {
        try {
            return viewProduct.map((item, index) => {
                return (


                    <tr>
                        <td className="text-xs font-weight-bold">{index + 1}</td>
                        <td className="text-xs font-weight-bold">{item.id}</td>
                        <td className="text-xs font-weight-bold">{item.name}</td>
                        <td className="text-xs font-weight-bold">{item.product_category_id}</td>
                        <td className="text-xs font-weight-bold">{item.price}</td>
                        <td className="text-xs font-weight-bold"> <Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                        <td>Delete</td>
                    </tr>
                );
            });
        } catch (e) {
            alert(e.message);
        }
    };



    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);

    useEffect(() => {

        let isMounted = true;
        document.title = "View Product";

        axios.get(`/api/products`).then(res => {
            if (isMounted) {
                if (res != null) {
                    setProduct(res.data.products);
                    setLoading(false);
                }
            }
        });
        return () => {
            isMounted = false;
        };
    }, []);

    // var display_Productdata = "";
    // if (loading) {
    //     return <h4>View Products Loading...</h4>;
    // }
    // else {
    //     display_Productdata = viewProduct.map((item) => {

    //         return (
    //             <tr key={item.id}>
    //                 <td>{item.id}</td>

    //                 <td>{item.name}</td>
    //                 <td>{item.product_category_id}</td>
    //                 <td>{item.price}</td>

    //                 <td>
    //                     <Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
    //                 </td>
    //                 <td>Delete</td>
    //             </tr>
    //         );
    //     });
    // };

    return (
        <div class="container-fluid py-4">
            <div class="table-responsive p-0 pb-2">
                <table id="table" className="table align-items-center justify-content-center mb-0">
                    <thead>
                        <tr>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">S/N</th>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Product ID</th>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Product Name</th>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Category</th>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Price</th>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">EDIT</th>
                            <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Delete</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {showTable()}
                    </tbody>
                </table>
            </div>
        </div>
    );

};



export default AllProducts;