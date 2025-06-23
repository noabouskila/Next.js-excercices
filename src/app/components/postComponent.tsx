'use client';
// ///////////////////////
import Link from 'next/link';
import { usePathname } from 'next/navigation';




export default function PostComponent({title , id , body}: {title: string, id: number, body: string}) {

    // appliquer le rendu conditionnel en fonction de l'endroit ou on est 
    // si on est sur la page du post avec l'id => on affiche le post en entier sans le link
    // sinon on affiche le lien pour aller au post
    const pathname = usePathname();
    const isTrue =   pathname.startsWith(`/posts/${id}`) 

    return (
        <div className='card'>
            <article key={id} className="card-item">
                <h2>{title}</h2>
                <p>Post ID : {id}</p>
                <p>{ isTrue ?  body  : body.substring(0,50)}</p>
            
                {
                    !isTrue &&
                    // si on est sur la page du post  avec l'id on n'affiche pas le lien
                    // sinon on affiche le lien pour aller au post
                    <Link href={`/posts/${id}`} >Lire plus ...</Link>
                }
            </article>
        </div>
    );
}