import React, { useEffect, useState } from 'react';


import axios from 'axios';

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

const AllOrders = () => {
    const [viewOrders, setOrders] = useState([]);

    useEffect(() => {

        let isMounted = true;
        document.title = "View Product";

        axios.get(`/api/admin/orders`).then(res => {
            if (isMounted) {
                if (res != null) {
                    setOrders(res.data.orders);

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
                                $(win.document.body).css("font-size", "12pt");
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

    const showTable = () => {
        try {
            return viewOrders.map((item, index) => {

                return (

                    <tr>
                        <td className="text-xs font-weight-bold">{item.id}</td>
                        <td className="text-xs font-weight-bold">{item.cost}</td>
                        <td className="text-xs font-weight-bold">{item.user_phone}</td>
                        <td className="text-xs font-weight-bold">{item.user_city}</td>
                        <td className="text-xs font-weight-bold"> {item.user_address}</td>
                        <td className="text-xs font-weight-bold">{item.date} </td>
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

                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Order ID</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Cost</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">User Phone</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">User City</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">User Address</th>
                                <th className="text-uppercase text-secondary text-sm font-weight-bolder opacity-7 ps-2">Date</th>

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

export default AllOrders





