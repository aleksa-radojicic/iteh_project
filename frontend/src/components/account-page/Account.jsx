import React from 'react';
import { useNavigate } from "react-router-dom";



const Account = ({ logged_user }) => {

    const navigate = useNavigate();
    function handleItem(id) {

        navigate(`/orderItems/${id}`);
        console.log(id);

    }




    return (
        <div>
            <section className="my-5 py-5 ">
                <div className="container row mx-auto">
                    <div className="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                        <h3 className="font-weight-bold">Account info</h3>
                        <hr className="mx-auto" />
                        <div className="account-info align-self-center">
                            <p>ID: <span>{logged_user.id}</span></p>
                            <p>Name: <span>{logged_user.name}</span></p>
                            <p>Email: <span>{logged_user.email}</span></p>


                        </div>
                    </div>


                </div>


            </section>




            <section className="orders container">
                <div className="container">
                    <h2 className="font-weight-bold text-center">Your Orders</h2>
                    <hr className="mx-auto" />
                </div>

                <table className="mt-5 pt-5">
                    <tbody>
                        <tr>
                            <th>Order id</th>
                            <th>Order cost</th>
                            <th>User city</th>
                            <th>User address</th>
                            <th>Order details</th>
                        </tr>
                        {logged_user.orders.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>${item.cost}</td>
                                    <td>{item.user_city}</td>
                                    <td>{item.user_address}</td>
                                    <td>
                                        <form>

                                            <button className="btn order-details-btn" type="button" onClick={() => handleItem(item.id)}>
                                                Details
                                            </button>
                                        </form >
                                    </td >
                                </tr >
                            );
                        })}
                    </tbody >


                </table >



            </section >

        </div >
    );
};


export default Account;