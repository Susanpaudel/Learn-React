import { useEffect,useState } from "react";
function PortfolioProject(){
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState();

    useEffect(()=>{
            const FetchPosts=async()=>{
                setLoading(true);
                try {
                    const response = await fetch("http://127.0.0.1:8000/api/v1/projects/", {
                        method: 'GET', 
                        headers: {
                            'Content-Type': 'application/json', 
                            'api-key': '',
                        },
                    });

                    if (!response.ok) throw new Error('Failed to fetch posts');
                    const posts = await response.json();
                    setPosts(posts.data);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                    setError(error);
                }finally{
                    setLoading(false);
                }
                
            };
            FetchPosts();
        }
        
        ,[]
        
    )
    if(loading){
        return (<div>Loading...</div>);
    }

    if(error){
        return (<div>Something went wrong!!</div>);
    }
    
    return(
      <>
      <h1>Get Portfolio Project Data From Api</h1>
      <div className="row">
       {posts.map((post, index) => {
    return (
    <div className="col-4" key={index}>
        <div  className="card">
            <img src={post.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
            </div>
        </div>
        </div>
    );
})}
         
      </div>
      </>
    );

}
export default PortfolioProject