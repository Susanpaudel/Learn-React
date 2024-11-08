import Button from './button/Button';
import {useEffect,useState} from 'react';

function BodyContent(){
    const base_url='https://dummyjson.com/';
    const [products,setProducts]=useState([]);
    const [error,setError]=useState();
    useEffect(()=>{
        const FetchProduct= async()=>{
            try{
                const respose=await fetch(`${base_url}products`);
                if(!respose.ok) throw new Error('Failed to fetch Product');
                const fetch_products=await respose.json();
                setProducts(fetch_products.products);
            }catch(error){
               setError(error);
            }
            

        }
        FetchProduct();
       
        

    },[]);
   
    if(error){
        return (<>Something Went Wrong!!</>);
    }

    return(
     <section className="container my-5">
        <div className="row">
            {
                products.map((product,index)=>{
                    return(
                        <div className="col-md-4" key={index}>
                        <div className="card m-2">
                            <img src={product.thumbnail} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <Button product_id={product.id}/>
                            </div>
                            </div>
                        </div>
                   
                    )
                })
            }
            </div>
        
     </section>
);
}
export default BodyContent