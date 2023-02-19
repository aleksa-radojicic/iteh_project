import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function EditProduct({ id }) {
    let navigate = useNavigate();

    const [categorylist, setCategorylist] = useState([]);
    const [productInput, setProduct] = useState({
        product_category_id: 1,
        name: '',
        description: '',
        price: '',


    });
    const [picture, setPicture] = useState([]);
    const [picture2, setPicture2] = useState([]);
    const [picture3, setPicture3] = useState([]);
    const [picture4, setPicture4] = useState([]);
    const [errorlist, setError] = useState([]);
    const [loading, setLoading] = useState(true);



    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });


    };
    const handleImage2 = (e) => {

        setPicture2({ image2: e.target.files[0] });

    };
    const handleImage3 = (e) => {

        setPicture3({ image3: e.target.files[0] });

    };
    const handleImage4 = (e) => {

        setPicture4({ image4: e.target.files[0] });

    };

    const handleInput = (e) => {
        e.persist();
        setProduct({ ...productInput, [e.target.name]: e.target.value });
    };


    useEffect(() => {

        axios.get(`/api/product_categories`).then(res => {

            if (res != null) {
                setCategorylist(res.data.product_categories);
            }

        });

        const product_id = id;
        axios.get(`api/shop/product/${product_id}`).then(res => {
            if (res != null) {

                setProduct(res.data.product);

            }
            else {

                swal("Error", res.data.message, "error");
                navigate("/admin/allProducts");
            }
            setLoading(false);
        });

    }, [id, navigate]);

    const updateProduct = (e) => {
        e.preventDefault();
        const obj = {

            'image': picture.image,
            'image2': picture2.image2,
            'image3': picture3.image3,
            'image4': picture4.image4,
            'product_category_id': productInput.product_category_id,
            'name': productInput.name,
            'description': productInput.description,
            'price': productInput.price
        };

        const options = {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            data: obj,
            url: 'api/products/' + id,
        };
        axios(options).then(res => {
            console.log("Put zahtev iliti update");
            console.log(res);
            if (res.data.success === true) {
                swal("Success", res.data.message, "success");

                setProduct({
                    ...productInput,

                    name: '',
                    description: '',
                    price: '',
                    image: '',
                    image2: '',
                    image3: '',
                    image4: '',
                    product_category_id: 1,


                });
                navigate("/admin/allProducts");
                setError([]);
            }

            else {
                console.log("error update-u");
                swal("Error", res.data.errors, "error");
                navigate("/admin/allProducts");
            }
        });

    };

    if (loading) {
        return <h4>Edit Product Data Loading...</h4>;
    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Product
                        <Link to="/admin/view-product" className="btn btn-primary btn-sm float-end">View Product</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={updateProduct} encType="multipart/form-data">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="homeP" role="tabpanel" aria-labelledby="home-tab">

                                <div className="form-group mb-3">
                                    <label>Select Category</label>
                                    <select required name="product_category_id" onChange={handleInput} value={productInput.product_category_id} className="form-control">
                                        {/*  <option>Select Category</option> */}
                                        {
                                            categorylist.map((item) => {
                                                return (
                                                    <option defaultValue={1} value={item.id} key={item.id}>{item.name} </option>
                                                );
                                            })
                                        }
                                    </select>
                                    <small className="text-danger">{errorlist.category_id}</small>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input required type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
                                    <small className="text-danger">{errorlist.name}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <textarea required name="description" onChange={handleInput} value={productInput.description} className="form-control"></textarea>
                                </div>

                            </div>



                            <div className="row">

                                <div className="col-md-4 form-group mb-3">
                                    <label>Price</label>
                                    <input required type="text" name="price" onChange={handleInput} value={productInput.price} className="form-control" />
                                    {/* <small className="text-danger">{errorlist.selling_price}</small> */}
                                </div>
                                <div className="col-md-8 form-group mb-3">
                                    <label>Image</label>
                                    <input required type="file" name="image" onChange={handleImage} className="form-control" />
                                    <img src={require(`../../../../src/images/featured1.jpg`)} width="50px" alt={productInput.name} />
                                    <small className="text-danger">{errorlist.image}</small>
                                </div>

                                <div className="col-md-6 form-group mb-3">
                                    <label>Image 2</label>
                                    <input required type="file" name="image2" onChange={handleImage2} className="form-control" />
                                    <small className="text-danger">{errorlist.image2}</small>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Image 3</label>
                                    <input required type="file" name="image3" onChange={handleImage3} className="form-control" />
                                    <small className="text-danger">{errorlist.image3}</small>
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Image 4</label>
                                    <input required type="file" name="image4" onChange={handleImage4} className="form-control" />
                                    <small className="text-danger">{errorlist.image4}</small>
                                </div>

                            </div>


                        </div>
                        <button type="submit" className="btn btn-primary px-4 mt-2">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;