import { notFound } from "next/navigation"
import Link from "next/link"

interface ArticleDetailsProps {
    params: { id: string };
  }
  
  export default async function ArticleDetails({ params }: ArticleDetailsProps) {

    console.log(params)

    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await resp.json();

    if(+ params.id> 100){
      notFound();
    }
      // ou  if(parseInt(params.id> 100)) le + ===> parsInt
  
    return (
      <div className="container">
        <div className="card">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <p>recuperation de l'id {data.id}</p>
        </div>
        <Link href="/blog">Tous les articles</Link>
      </div>

    );
  }
  