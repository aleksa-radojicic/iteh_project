import React, { useState, useEffect } from 'react';

import Chart from "react-apexcharts";
import axios from 'axios';

const Dashboard = () => {




    const [pie, setPie] = useState({
        options: {
            colors: ["#E91E63", "#FF9800", "#fdd995", "#bd7c45", "#873e23"],
            chart: {
                id: "pie",
            },
            labels: ['LEPENKA ', 'KLIRIT 2mm', 'KLIRIT 3mm', 'LESONIT ', 'OSTALO '],

        },
        series: [

        ],
    });
    const [state, setState] = useState({
        options: {
            colors: ["#E91E63", "#FF9800", "#FFFF", "#FF9802", "#EEEE"],
            chart: {
                id: "basic-bar",
            },
            xaxis: {

                categories: [1, 2, 3, 4, 5],
            },
        },
        series: [
            {
                name: "LEPENKA",

                data: [],
            },
            {
                name: "KLIRIT 2mm",
                data: [],
            },
            {
                name: "KLIRIT 3mm",
                data: [],
            },
            {
                name: "LESONIT",
                data: [],
            },
            {
                name: "OSTALO",
                data: [],
            },
        ],
    });

    useEffect(() => {


        axios.get(`/api/admin/products`).then(res => {
            console.log(res.data);

            if (res != null) {

                const result1 = res.data.products.filter(p => p.product_category.id === 1);

                const result2 = res.data.products.filter(p => p.product_category.id === 2);

                const result3 = res.data.products.filter(p => p.product_category.id === 3);

                const result4 = res.data.products.filter(p => p.product_category.id === 4);

                const result5 = res.data.products.filter(p => p.product_category.id === 5);

                setState({
                    options: {
                        colors: ["#E91E63", "#FF9800", "#fdd995", "#bd7c45", "#873e23"],
                        chart: {
                            id: "basic-bar",
                        },


                        plotOptions: {
                            bar: {
                                borderRadius: 8,
                                horizontal: false,
                            }
                        },
                        xaxis: {

                            categories: [1, 2, 3, 4, 5],
                        },
                    },
                    series: [
                        {
                            name: "AQUARIUMS",

                            data: [result1.length,],
                        },
                        {
                            name: "FOOD",
                            data: [result2.length,],
                        },
                        {
                            name: "TECHNICAL PRODUCTS",
                            data: [result3.length,],
                        },
                        {
                            name: "PLANTS",
                            data: [result4.length,],
                        },
                        {
                            name: "ANIMALS",
                            data: [result5.length,],
                        },
                    ],
                },
                );


                setPie({
                    options: {
                        colors: ["#E91E63", "#FF9800", "#fdd995", "#bd7c45", "#873e23"],
                        chart: {
                            id: "pie",
                        },
                        labels: ['AQUARIUMS ', 'FOOD', 'TECHNICAL PRODUCTS ', 'PLANTS ', 'ANIMALS '],

                    },
                    series: [
                        result1.length, result2.length, result3.length, result4.length, result5.length
                    ],
                },
                );
            }



        });


    }, []);

    return (



        <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Orders table</li>
            </ol>

            <div class="row">
                <div class="col-xl-12">
                    <div class="col card mb-4">
                        <div class="card-header">
                            <i class="fas fa-chart-bar me-1"></i>
                            Number of products in category
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="bar"
                                    width="650"
                                />
                            </div>

                            <div className="col-4">
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="heatmap"
                                    width="450"
                                />
                            </div>

                            <div className="col-6">
                                <Chart
                                    options={pie.options}
                                    series={pie.series}
                                    width='480'
                                    type='pie'
                                />
                            </div>

                        </div>
                        <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;;