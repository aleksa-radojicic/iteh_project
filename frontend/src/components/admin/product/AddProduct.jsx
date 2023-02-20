import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
const AddProduct = () => {
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
        // console.log(e);
    };
    const submitProduct = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', picture.image.name);
        formData.append('image2', picture2.image2.name);
        formData.append('image3', picture3.image3.name);
        formData.append('image4', picture4.image4.name);
        formData.append('product_category_id', parseInt(productInput.product_category_id));
        formData.append('name', productInput.name);
        formData.append('description', productInput.description);
        formData.append('price', productInput.price);


        axios.post(`/api/admin/products`, formData).then(res => {
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
            }
            else {
                let error_messages = res.data.errors;
                
                if (error_messages) {
                    console.log(error_messages);
      
                    const errors_to_display = Object.values(error_messages).join("\n");
          
                    swal(errors_to_display, "", "error");
                }
                
                console.log(res);
            }
        });

    };


    useEffect(() => {
        let isMounted = true;

        axios.get(`/api/product_categories`).then(res => {
            console.log(res.data);
            // if (isMounted) {
            if (res != null) {
                setCategorylist(res.data.product_categories);
            }
            // }
        });

        return () => {
            isMounted = false;
        };


    }, []);

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Add Product
                        <Link to="/admin/view-product" className="btn btn-primary btn-sm float-end">View Product</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitProduct} encType="multipart/form-data">

                        {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Category</button>
                            </li> */}
                        {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">SEO Tags</button>
                            </li> */}
                        {/* <li className="nav-item" role="presentation">
                                <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">Other Details</button>
                            </li> */}
                        {/* </ul> */}
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="homeP" role="tabpanel" aria-labelledby="home-tab">

                                <div className="form-group mb-3 col-md-2">
                                    <label>Select Category</label>
                                    <select name="product_category_id" onChange={handleInput} value={productInput.product_category_id} className="form-control">
                                        {/* <option>Select Category</option> */}
                                        {
                                            categorylist.map((item) => {
                                                return (
                                                    <option defaultValue={1} value={item.id} key={item.id}>{item.name + item.id} </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="form-group mb-3 col-md-2">
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <textarea name="description" onChange={handleInput} value={productInput.description} className="form-control"></textarea>
                                </div>
                                <div className="row">

                                    <div className="col-md-8 form-group mb-3">
                                        <label>Price</label>
                                        <input type="text" name="price" onChange={handleInput} value={productInput.price} className="form-control" required />
                                    </div>


                                    <div className="col-md-6 form-group mb-3">
                                        <label>Image </label>
                                        <input type="file" name="image" onChange={handleImage} className="form-control" required/>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label>Image 2</label>
                                        <input type="file" name="image2" onChange={handleImage2} className="form-control" required/>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label>Image 3</label>
                                        <input type="file" name="image3" onChange={handleImage3} className="form-control" required/>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <label>Image 4</label>
                                        <input type="file" name="image4" onChange={handleImage4} className="form-control" required/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 mt-2">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;