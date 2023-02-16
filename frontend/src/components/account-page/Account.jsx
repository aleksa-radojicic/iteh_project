import React from 'react';

const Account = ({ user }) => {
    return (
        <div>
            <section class="my-5 py-5">
                <div class="container row mx-auto">
                    <div class="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                        <h3 class="font-weight-bold">Account info</h3>
                        <hr class="mx-auto" />
                        <div class="account-info">
                            <p>ID: <span>{user.id}</span></p>
                            <p>Name: <span>{user.name}</span></p>
                            <p>Email: <span>{user.email}</span></p>


                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <form id="account-form">
                            <h3>Change Password</h3>
                            <hr class="mx-auto" />
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" id="account-password" name="password" placeholder="Password" required />
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" id="account-confirm-password" name="confirmPassword" placeholder="Password" required />
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Change Password" class="btn" id="change-pass-btn" />
                            </div>
                        </form>
                    </div>


                </div>


            </section>




            <section class="orders container">
                <div class="container">
                    <h2 class="font-weight-bold text-center">Your Orders</h2>
                    <hr class="mx-auto" />
                </div>

                <table class="mt-5 pt-5">
                    <tr>
                        <th>Order id</th>
                        <th>Order cost</th>
                        <th>Order date</th>
                        <th>Order details</th>
                    </tr>

                    <tr>
                        <td>
                            <span>{user.orders[0].id} </span>
                        </td>

                        <td>
                            <span>{user.orders[0].cost}</span>
                        </td>

                        <td>
                            <span>order date</span>
                        </td>

                        <td>
                            <form>
                                {/* u value order id */}
                                <input type="hidden" value="a" name="order_id" />
                                <input class="btn order-details-btn" name="order_details_btn"
                                    type="submit" value="details" />
                            </form>
                        </td>
                    </tr>

                </table>



            </section>

        </div>
    );
};


export default Account;