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
    const [picture, setPicture] = useState([

    ]);
    const [picture2, setPicture2] = useState([]);
    const [picture3, setPicture3] = useState([]);
    const [picture4, setPicture4] = useState([]);

    const [loading, setLoading] = useState(true);



    const handleImage = (e) => {
        const a = e.target.files[0];
        setPicture(a.name);
        // console.log(pict)

    };
    const handleImage2 = (e) => {
        const b = e.target.files[0];
        setPicture2(b.name);
        // console.log(picture2)
    };
    const handleImage3 = (e) => {

        const c = e.target.files[0];
        setPicture3(c.name);

    };
    const handleImage4 = (e) => {

        const d = e.target.files[0];
        setPicture4(d.name);

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
                setPicture(res.data.product.image);

                setPicture2(res.data.product.image2);
                setPicture3(res.data.product.image3);
                setPicture4(res.data.product.image4);
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

            'image': picture,
            'image2': picture2,
            'image3': picture3,
            'image4': picture4,
            'product_category_id': productInput.product_category_id,
            'name': productInput.name,
            'description': productInput.description,
            'price': productInput.price
        };

        const options = {
            method: 'PUT',
            data: obj,
            url: 'api/admin/products/' + id,
        };
        axios(options).then(res => {

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

            }

            else {
                let error_messages = res.data.errors;

                if (error_messages) {
                    console.log(error_messages);

                    const errors_to_display = Object.values(error_messages).join("\n");

                    swal(errors_to_display, "", "error");
                }

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
                        <Link to="/admin/allProducts" className="btn btn-primary btn-sm float-end">View Product</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={updateProduct} encType="multipart/form-data">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="homeP" role="tabpanel" aria-labelledby="home-tab">

                                <div className="form-group mb-3">
                                    <label>Select Category</label>
                                    <select required='required' name="product_category_id" onChange={handleInput} value={productInput.product_category_id} className="form-control">
                                        <option value="">--Select Category--</option>
                                        {
                                            categorylist.map((item) => {
                                                return (
                                                    <option defaultValue={1} value={item.id} key={item.id}>{item.name} </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input required type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
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

                                </div>
                                <div className="col-md-8 form-group mb-3">
                                    <label>Image</label>
                                    <input required type="file" name="image" onChange={handleImage} className="form-control" />
                                    <img src={require(`../../../../src/images/${picture}`)} height="70%" width="60px" alt={productInput.name} />

                                </div>

                                <div className="col-md-6 form-group mb-3">
                                    <label>Image 2</label>
                                    <input required type="file" name="image2" onChange={handleImage2} className="form-control" />
                                    <img src={require(`../../../../src/images/${picture2}`)} height="80%" width="60px" alt={productInput.name} />
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Image 3</label>
                                    <input required type="file" name="image3" onChange={handleImage3} className="form-control" />
                                    <img src={require(`../../../../src/images/${picture3}`)} height="80%" width="60px" alt={productInput.name} />
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Image 4</label>
                                    <input required type="file" name="image4" onChange={handleImage4} className="form-control" />
                                    <img src={require(`../../../../src/images/${picture4}`)} height="80%" width="60px" alt={productInput.name} />
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