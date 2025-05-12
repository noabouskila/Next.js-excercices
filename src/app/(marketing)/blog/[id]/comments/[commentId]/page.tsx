interface ArticleCommentProps {
    params: { id: string , 
        commentId : string
    };
  }
export default function Comment({params} : ArticleCommentProps){
 
    console.log(params)
    return ( 
        <div className="container">
          <h1>Article : {params.id} </h1> 
          <p>Commentaire : {params.commentId} </p>
        </div>
    )
}