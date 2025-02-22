import { Suspense } from "react"
import MovieInfo, { getMovieInfo } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

interface IParams {
    params:{id:string};
}

export async function generateMetadata({params: {id}} : IParams){
    const movie = await getMovieInfo(id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({params: {id}} : IParams){
    return <div>
        <Suspense fallback={<h1>Loading Movie Info...</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Videos Info...</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}