import { notFound } from "next/navigation"

export default function NotFound(){

    return (
        <div className="container">
            <h1 className="text-center"> Oups , Nous avons un problème !</h1>
            <p className="text-center">404 | Cette page est introuvable</p>
        </div>
    )
}