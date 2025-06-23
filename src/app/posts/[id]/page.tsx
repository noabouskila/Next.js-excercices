import PostComponent from "@/app/components/postComponent";
import Article from '../../(marketing)/blog/page';


async function getPost(id: string) {


   const res = await fetch(`http://localhost:3000/posts/api/${id}`)
   const ArticleData = await res.json();
    return ArticleData;
}

export default async function PostPage({ params }: { params: { id: string } }) {

    // recuperation du post 
    const post = await getPost(params.id);
    const {id , title , body} = post;


    return (
        <div className="container">
            <h1>detail de l'article {params.id}</h1>
            <PostComponent title={title}  body={body}  id={id}/>
        </div>
    );
}