import { API_URL } from "../app/(home)/page";
import styles from "../css/movie-videos.module.css";

async function getMovieVideos(id:string) {
    console.log(`Fetching videos: ${Date.now()}`);
    //await new Promise((resolve) => setTimeout(resolve, 3000)); //로딩 확인용 테스트

    // 에러 확인용 테스트
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('something broke...');

    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id} : {id:string}) {
    const videos = await getMovieVideos(id);
    return <div className={styles.container}>
        {videos.map((video) => (
            <iframe 
                key={video.id} 
                src={`//youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={video.name}
            />
        ))}
    </div>
}