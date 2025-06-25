'use client';

import { useState , useEffect, use, SetStateAction } from "react";
import PostButton from "../components/postButton";
import PostComponent from "../components/postComponent";
import Search from "@/app/components/search";


import { Post } from "../types/posts";





export default function Posts() {

 
    const [posts, setPosts] = useState<Post[]>([]);
    const [token, setToken] = useState<{ name: string; value: string }>({ name: '', value: '' });
   

    // fetch des posts depuis l'API
    const getPosts = async ()=> {
        const res = await fetch("http://localhost:3000/posts/api" , {
            method: "GET",
            headers: {  
                Auth : "DonkeyGeek" // on ajoute un header d'autorisation pour l'API
            }
        })

        const data = await res.json() 

        console.log("data reçue :", data);
        console.log('data.data est ' ,data.data);
        console.log('Is array?', Array.isArray(data.data));

        // on met à jour les posts avec les données récupérées
        setPosts(data.data); 
        // mettre a jour token
        setToken(data.token)
    }

    

    

    useEffect(() => {

        // appel de la fonction pour recuperer les posts
        getPosts()

    }, []);


    // fonction pour mettre à jour les posts en fonction de la recherche
    // cette fonction sera appelée dans le composant Search
    const updatedArticles = (Articles: Post[]) => {

        setPosts(Articles);
    }


   


    return (


        <div className="container mb-7">
            <PostButton />

            < Search  updatedArticles ={updatedArticles} getPosts={getPosts} />

            <h1>Notre Blog </h1>
            <p>{token.name} | {token.value}</p>

            {Array.isArray(posts) ? (

                posts.map((post: Post) => (
                    <PostComponent key={post.id} title={post.title} id={post.id} body={post.body} />
                ))
                ) : (
                <p>Pas de posts à afficher</p>
        
            )}

        </div>
    )
};

