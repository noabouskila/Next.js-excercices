
'use client';
export default function PostButton() {


    const handleClick = () => {
        fetch(`http://localhost:3000/posts/api/` , {method: 'POST'})
        .then(response => response.json())
        .then(data => {         
            console.log("Article posté avec succès:", data);
            // Vous pouvez ajouter une redirection ou une notification ici
        })
           
    }
    
    
    return (
        <button onClick={handleClick}>
            Poster un Article
        </button>
    );
}