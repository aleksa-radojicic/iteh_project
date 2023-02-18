import React from 'react';

const Account = ({ logged_user }) => {

    
    return (
        <div>
            <section className="my-5 py-5">
                <div className="container row mx-auto">
                    <div className="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                        <h3 className="font-weight-bold">Account info</h3>
                        <hr className="mx-auto" />
                        <div className="account-info">
                            <p>ID: <span>{logged_user.id}</span></p>
                            <p>Name: <span>{logged_user.name}</span></p>
                            <p>Email: <span>{logged_user.email}</span></p>


                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <form id="account-form">
                            <h3>Change Password</h3>
                            <hr className="mx-auto" />
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="account-password" name="password" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" id="account-confirm-password" name="confirmPassword" placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Change Password" className="btn" id="change-pass-btn" />
                            </div>
                        </form>
                    </div>


                </div>


            </section>




            <section className="orders container">
                <div className="container">
                    <h2 className="font-weight-bold text-center">Your Orders</h2>
                    <hr className="mx-auto" />
                </div>

                <table className="mt-5 pt-5">
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
                                <td>{item.cost}</td>
                                <td>{item.user_city}</td>
                                <td>{item.user_address}</td>
                                <td>
                                    <form>
                                        {/* ovo mogu da uradim preko komponente ? u value order id */}
                                        <input type="hidden" value="" name="order_id" />
                                        <input className="btn order-details-btn" name="order_details_btn"
                                            type="submit" value="details" />
                                    </form>
                                </td>
                            </tr>
                        );
                    })}
                    {/* <tr>
                        <td>
                            <span>{user.orders[0].id} </span>
                        </td>

                        <td>
                            <span>{user.orders[0].cost}</span>
                        </td>

                        <td>
                            <span></span>
                        </td>

                        <td>
                            <form>
                                {/* u value order id */}
                    {/* <input type="hidden" value="a" name="order_id" />
                    <input className="btn order-details-btn" name="order_details_btn"
                        type="submit" value="details" />
                </form> */}
                    {/* </td>
        </tr> * /} */}

                </table >



            </section >

        </div >
    );
};


export default Account;