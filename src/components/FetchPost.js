import { useEffect,useState } from "react";
function FetchPost(){
    const base_url='https://jsonplaceholder.typicode.com/';
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState();

    useEffect(()=>{
            const FetchPosts=async()=>{
                setLoading(true);
                try {
                    const response = await fetch(`${base_url}posts`);
                    if (!response.ok) throw new Error('Failed to fetch posts');
                    
                    const posts = await response.json();
                    setPosts(posts);
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
      <h1>Get Post Data From Api</h1>
      <ul>
        {posts.map((post)=>{
            if(post.id<10){
                return <li key={post.id}>{post.title}</li>
            }
           
        })}
         
      </ul>
      </>
    );

}
export default FetchPost