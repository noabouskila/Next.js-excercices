import { NextResponse } from 'next/server';



async function fetchArticles(){
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const data  = await  response.json()
    return data ;
}


export async function GET(request: Request) {   

    const articles = await fetchArticles()

    // request sert à obtenir les paramètres de la requête
    // const searchParams = new URL(request.url).searchParams;

    // ou on peut utiliser la méthode suivante : data fraiche
    const {searchParams} = new URL(request.url)

    // api/search?query=hello
    // on récupère le paramètre 'query' de l'URL
    const query = searchParams.get('query') || ''; 

    // on filtre les articles en fonction de la requête
    const filteredArticles = articles.filter((article: { title: string; body: string; }) => {
        return (

            // on vérifie si le titre ou le corps de l'article contient la requête
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.body.toLowerCase().includes(query.toLowerCase())
        );
    }); 


    
    // on retourne les articles filtrés
    return NextResponse.json({
        data: filteredArticles,
        message: 'Articles fetched successfully',
    });

        
}