import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../style/product-details.css';
export default function ProductDetail(){
    const url='https://dummyjson.com/products/';
    const {id}=useParams();
    const [product,setProduct]=useState();
    const [relatedProducts,setRelatedProducts]=useState([]);
    useEffect(()=>{
       const FetchSingleProduct=async()=>{
        try{
            const response=await fetch(`${url}${id}`);
            if(!response.ok) throw new Error('Failed to load product');
            const single_product_data=await response.json();
            setProduct(single_product_data);
        }catch(error){
            console.log(error);
        }
        
       }
       FetchSingleProduct();

       const FetchRelatedProducts=async()=>{
        try{
            const Relatedresponse=await fetch(`${url}`);
            if(!Relatedresponse.ok) throw new Error('Failed to load related products');
            const related_products_data=await Relatedresponse.json();
            setRelatedProducts(related_products_data);
        }catch(error){
            console.log(error);
        }
        
       }
       FetchRelatedProducts();
    },[])
   
    return (
        <>
        {product?(
           
        <div className="container my-5">
        <div className="row">
            <div className="col-md-5">
                <div className="main-img">
                    <img className="img-fluid" src={product.thumbnail} alt="ProductS"/>
                    {product.images.length>0 && (
                       
                    <div className="row my-3 previews">
                    {product.images.map((index) => (
                       
                        <div className="col-md-3">
                            <img className="w-100" src={index} alt="Sale" />
                        </div>
                    ))}
               
                    </div>)}
                </div>
            </div>
            <div className="col-md-7">
                <div className="main-description px-2">
                    <div className="category text-bold">
                        Category: {product.category}
                    </div>
                    <div className="product-title text-bold my-3">
                        {product.title}
                    </div>


                    <div className="price-area my-4">
                        <p className="old-price mb-1"><del>${((product.price) / (1 - (product.discountPercentage / 100))).toFixed(2)}</del> <span className="old-price-discount text-danger">({product.discountPercentage}% off)</span></p>
                        <p className="new-price text-bold mb-1">${product.price}</p>
                        <p className="text-secondary mb-1">(Additional tax may apply on checkout)</p>

                    </div>


                    <div className="buttons d-flex my-5">
                        <div className="block">
                            <a href="#" className="shadow btn custom-btn ">Wishlist</a>
                        </div>
                        <div className="block">
                            <button className="shadow btn custom-btn">Add to cart</button>
                        </div>

                        <div className="block quantity">
                            <input type="number" className="form-control" id="cart_quantity" value="1" min="0" max="5" placeholder="Enter email" name="cart_quantity"/>
                        </div>
                    </div>




                </div>

                <div className="product-details my-4">
                    <p className="details-title text-color mb-1">Product Details</p>
                    <p className="description">{product.description}</p>
                    {(product.dimensions.width || product.dimensions.height || product.dimensions.depth) && (
    <ul>
        {product.dimensions.width && (
            <li>Width: {product.dimensions.width}</li>
        )}
        {product.dimensions.height && (
            <li>Height: {product.dimensions.height}</li> 
        )}
        {product.dimensions.depth && (
            <li>Depth: {product.dimensions.depth}</li>
        )}
    </ul>
)}

                </div>
              

                
             
            </div>
        </div>
       </div>) : (
                <p>Loading...</p>
            )}



    {/* <div className="container similar-products my-4">
        <hr/>
        <p className="display-5">Similar Products</p>

        <div className="row">
            <div className="col-md-3">
                <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/gsKdPcIyeGg" alt="Preview"/>
                    <p className="title">Lovely black dress</p>
                    <p className="price">$100</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/sg_gRhbYXhc" alt="Preview"/>
                    <p className="title">Lovely Dress with patterns</p>
                    <p className="price">$85</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/gJZQcirK8aw" alt="Preview"/>
                    <p className="title">Lovely fashion dress</p>
                    <p className="price">$200</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="similar-product">
                    <img className="w-100" src="https://source.unsplash.com/qbB_Z2pXLEU" alt="Preview"/>
                    <p className="title">Lovely red dress</p>
                    <p className="price">$120</p>
                </div>
            </div>
        </div>
    </div> */}


        </>
    )
}