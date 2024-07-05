"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../css/movie.module.css";

interface IMovieProps {
    title:string;
    id:string;
    poster_path:string;
}

export default function Movie({title, id, poster_path} : IMovieProps){
    const router = useRouter();
    const goMoiveDetail = () => {
        router.push(`/movies/${id}`);
    }
    return <div className={styles.movie}>
        <img src={poster_path} alt={title} onClick={goMoiveDetail} />
        <Link href={`/movies/${id}`}>{title}</Link>
    </div>
}