import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../contact-page/Spinner";


const Bill = () => {
    let { id } = useParams();
    var a;
    const [orderItems, setOrderItems] = useState(null);
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [materialPrice, setMaterialPrice] = useState();
    const INITIAL_FORM_STATE = {
        delivery: 0,
        minutes: 0,
    };

    const [form, setForm] = useState(INITIAL_FORM_STATE);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    // spanEl = useRef();
    const [total, setTotal] = useState(0);
    //print pdf


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "order-items",

    });
    useEffect(() => {
        axios
            //.get("api/admin/order/" + id+"/order_items")
            .get("api/order_items/" + id)
            .then((res) => {
                console.log(res);
                setOrderItems(res.data.order_items);
                axios
                    .get("api/order/" + res.data.order_items[0].order_id)
                    .then((resp) => {
                        console.log(resp.data.order.user_address);
                        setName(resp.data.order.name);
                        setSurname(resp.data.order.surname);
                        setAddress(resp.data.order.user_address);
                        setPhone(resp.data.order.user_phone);
                        setMaterialPrice(resp.data.order.cost);
                    })
                    .catch((e) => {
                        console.log(e.response.data);
                    }, []);

            })
            .catch((e) => {
                console.log(e.response.data);
            }, []);



    }, [id]);

    return (
        <>
            <div className="mx-auto container">
                <form id="bill-form" >
                    <div className="form-group">
                        <label>Dostava</label>
                        <input
                            type="number"
                            className="form-control"
                            onInput={handleChange}
                            id="login-email"
                            name="delivery"
                            placeholder="cena dostave"
                            required
                            value={form.delivery}
                        />
                    </div>
                    <div className="form-group">
                        <label>Minuti</label>
                        <input
                            type="number"
                            className="form-control"
                            onInput={handleChange}
                            id="login-password"
                            name="minutes"
                            placeholder="Broj minuta secenja"
                            required
                            value={form.minutes}
                        />
                    </div>

                </form>
            </div>
            <div ref={componentRef}>
                <div className="about-customer">
                    <h1>Vas racun</h1>
                    <h2>Ime : {name}</h2>
                    <h2>Prezime : {surname}</h2>
                    <h2>Adresa : {address}</h2>
                    <h2>Telefon : {phone}</h2>
                    <h2>Cena materijala: {materialPrice} din</h2>
                    <h2>Dostava: {form.delivery} din</h2>
                    <h2>Minuti: {form.minutes * 50} din</h2>
                </div>

                <div className="total">

                    <h1>Ukupno : {parseInt(form.delivery) + parseInt(form.minutes) * 50 + parseInt(materialPrice)}din</h1>
                </div>
            </div><button className="btn-pdf" onClick={handlePrint}>Print order</button>

        </>
    );
};

export default Bill;
