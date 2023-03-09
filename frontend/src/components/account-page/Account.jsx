import React from 'react';
import { useNavigate } from "react-router-dom";



const Account = ({ logged_user }) => {

    const navigate = useNavigate();
    function handleItem(id) {

        navigate(`/orderItems/${id}`);
        console.log(id);

    }
    function handleBill(id) {
        navigate(`/bill/${id}`);
        console.log(id);
    }




    return (
        <div>

            <section className="orders container">
                <div className="container">
                    <h2 className="font-weight-bold text-center">Your Orders</h2>
                    <hr className="mx-auto" />
                </div>
                <div class="table-responsive-md">
                    <table className="mt-5 pt-5 " >
                        <tbody>
                            <tr>
                                <th>Order id</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Cena</th>
                                <th>User address</th>
                                <th>Materijal</th>
                                <th>Kreiraj racun</th>
                            </tr>
                            {logged_user.orders.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.surname}</td>
                                        <td>${item.cost}</td>

                                        <td>{item.user_address}</td>
                                        <td>
                                            <form>

                                                <button className="btn order-details-btn" type="button" onClick={() => handleItem(item.id)}>
                                                    Details
                                                </button>
                                            </form >
                                        </td >
                                        <td>
                                            <form>

                                                <button className="btn order-details-btn" type="button" onClick={() => handleBill(item.id)}>
                                                    Racun
                                                </button>
                                            </form >
                                        </td >
                                    </tr >
                                );
                            })}
                        </tbody >


                    </table >

                </div>

            </section >

        </div >
    );
};


export default Account;