import PostComponent from "../components/postComponent";

type Post = {
    id: number;
    title: string;
    body: string;
};

async function getPosts(){
    const res = await fetch("http://localhost:3000/posts/api")
    const data = await res.json()
    return data.data ;
   
}


export default async function Posts() {


    const posts = await getPosts()
    console.log(posts);



    return (


        <div className="container mb-7">
            <h1>Notre Blog </h1>
            {/* posts */
                posts.map((post: Post) => (
                   <PostComponent key={post.id} title={post.title} id={post.id} body={post.body}  />
                ))
            }
        </div>
    )
};

