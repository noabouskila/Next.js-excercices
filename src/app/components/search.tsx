'use client';
import { useState } from "react";
import { Post  , SearchProps } from "../types/posts";
import getPosts from '@/app/posts/page';

export default function search({ updatedArticles , getPosts }: SearchProps ) {


    const [query, setQuery] = useState<string>('');

    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();     
    
        // fetch pour récupérer les articles filtrés en fonction de la requête
        const response  = await fetch(`/posts/api/search?query=${query}`)
        const data = await response.json();
        updatedArticles(data.data); // on met à jour les articles avec les données filtrées

           
    };

    const handleReset = () => {
        getPosts(); // on récupère tous les posts à nouveau 
        setQuery('');
         
    };
  
  
  return (
    <div className="div-container">

        <form onSubmit={handleSubmit} action="">
            <input 
            type="text" 
            placeholder="Rechercher"
            value={query}
            onChange={ (e)=> setQuery(e.target.value) }/>

            <button type="submit">Rechercher</button>
            <button className="reset-button" type="reset" onClick={handleReset}>Réinitialiser</button>
        </form>
    </div>
  )
}
