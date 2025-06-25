import { NextRequest } from 'next/server';
// import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET( request : NextRequest) { 

    // requestHeader permet de récupérer les headers de la requête
    const requestHeaders = new Headers(request.headers); 
    console.log( "mon auth" , requestHeaders.get("Auth")); // on peut vérifier si le header est bien ajouté


    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    // recuperer cookie
    // const userToken = request.cookies.get("userToken")
    // ou:
    const userToken = (await cookies()).get("userToken")
    console.log( userToken)

    // on peut inserer un cookies soit dans le header : SetCookies soit comme ceci 
    const theme = (await cookies()).set("theme" , "dark")
    console.log(theme)


    console.log((await cookies()).getAll())


    // reponse optimisée par next.js
    return NextResponse.json({
        data : data ,
        token : userToken

    },{
        headers : {
            // inserer cookie
            "Set-cookie" : 'userToken=12345'
        }
    })

    

}

// POST pour ajouter un post
export async function POST(request: NextRequest) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",     
        body: JSON.stringify({
            title: "Nouvel artile via methode POST",
            body: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            userId: 1
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json();  
   
    // reponse optimisée par next.js
    return NextResponse.json({ data });
    


}