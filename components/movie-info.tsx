import { API_URL } from "../app/(home)/page";
import styles from "../css/movie-info.module.css";

export async function getMovieInfo(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);
    //await new Promise((resolve) => setTimeout(resolve, 5000)); //로딩 확인용 테스트
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} : {id:string}) {
    const movie = await getMovieInfo(id);
    return <div className={styles.container}>
        <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>* {movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
        </div>
    </div>
}