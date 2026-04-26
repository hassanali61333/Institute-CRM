import { useSelector } from "react-redux";
function Postsdetail() {
        const post=useSelector((state)=> state.courses.posts)

    return ( 
        <>
        <div className="posts-div">
            <h1>New Updates</h1>
         <div  className="post-wrap">


            {post.map((posts,index)=>(
         <div className="post-content" key={post.id}>

              <h2 >    {posts.Poststitle}</h2> 
           {/* <img src={posts.Image} /> */}
           <p>Content : {posts.Postdiscription}</p>
           <p>Duration : {posts.Duration}</p>
           <p> Fee :{posts.Fee}</p>
           <p>Location : {posts.Location}</p>
           <p>ContactNumber : {posts.ContactNumber}</p>
           <p>Status: {posts.Status}</p>
           <p>CreatedAt {posts.CreatedAt}</p>

         </div>

            ))

            }
         </div>
        </div>
        </>
    );
}

export default Postsdetail;