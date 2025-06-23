import { NextResponse } from "next/server";




export async  function GET(request: Request, { params }: { params: { id: string } }) {

    // recuperation du post 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const articleData = await res.json();

    // reponse optimisée par next.js
    return NextResponse.json( articleData );
   
}