import Movie from "../../components/movie";
import styles from "../../css/home.module.css"
import { API_URL } from "../constants";

export const metadata = {
    title: 'Home',
}

async function getMovies(){
    //await new Promise((resolve) => setTimeout(resolve, 1000)); //로딩 확인용 테스트
    const response = await fetch(API_URL);
    const json = await response.json();
    return json
}

export default async function HomePage(){
    const movies = await getMovies();
    return <div className={styles.container}>
        {movies.map((movie)=>(
            <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
        ))}
    </div>
}