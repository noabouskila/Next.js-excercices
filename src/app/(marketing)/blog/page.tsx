'use client' ;

import {useState , useEffect} from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Article() {

    // usestate 
    const [posts, setPosts] = useState<Post[]>([]);
    const [start, setStart] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const limit = 3;


    const loadPosts = async () => {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
        const newPosts: Post[] = await res.json();
    
        setPosts((prev) => [...prev, ...newPosts]);
        setStart((prevStart) => prevStart + limit);
        setHasMore(newPosts.length === limit); // s’il en reste
        setLoading(false);
    };
    
    useEffect(() => {
        loadPosts(); // charge les 5 premiers au début
    }, []);




    return (
        <div className="container">
            <h1>Notre Blog</h1>

           <div className="card">
                {posts.map((item) => (
                <article key={item.id} className="card-item">
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <p>Post ID : {item.id}</p>
                </article>
                ))}
            </div>

            {hasMore && (
                <button onClick={loadPosts} disabled={loading} className="btn-load">
                {loading ? 'Chargement...' : 'Charger plus'}
                </button>
            )}

            {!hasMore && <p>🎉 Tous les posts sont chargés.</p>}

        </div>

    )
}