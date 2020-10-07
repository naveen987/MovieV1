import React from 'react'
import { Button, Descriptions, Badge } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

const MovieDetails = () => {
    const history = useHistory()
    const location = useLocation()
    const [movieDetail, setMovieDetails] = React.useState()
    console.log(location, "hit")
    console.log(movieDetail, "state")
    React.useEffect(() => {

        if (location.state.title) {
            FetchMovieDetails(location.state.title);
        }
    }, [])
    async function FetchMovieDetails(title) {
        const responseData = await fetch(`https://www.omdbapi.com?apikey=9b3b1559&t=${title}`);
        const data = await responseData.json();
        setMovieDetails(data)
        console.log(data)
    }
    return (
        <div>
            {movieDetail && (
                <div>
                    <Button
                        type="primary"
                        onClick={() => {
                            history.goBack()
                        }}
                    >Go back</Button>
                    <div>
                    <Descriptions title="Movie Info" bordered>
                    <Descriptions.Item label="Title">{movieDetail.Title}</Descriptions.Item>
                    <Descriptions.Item label="Actors">{movieDetail.Actors}</Descriptions.Item>
                    <Descriptions.Item label="Awards">{movieDetail.Awards}</Descriptions.Item>
                    <Descriptions.Item label="BoxOffice">{movieDetail.BoxOffice}</Descriptions.Item>
                    <Descriptions.Item label="Country" >{movieDetail.Country}</Descriptions.Item>
                    <Descriptions.Item label="DVD" >{movieDetail.DVD}</Descriptions.Item>
                    <Descriptions.Item label="Director">{movieDetail.Director}</Descriptions.Item>
                    <Descriptions.Item label="Genre">{movieDetail.Genre}</Descriptions.Item>
                    <Descriptions.Item label="Language">{movieDetail.Language}</Descriptions.Item>
                    <Descriptions.Item label="Metascore">{movieDetail.Metascore}</Descriptions.Item>
                    <Descriptions.Item label="Plot">{movieDetail.Plot}</Descriptions.Item>
                    <Descriptions.Item label="Poster">{movieDetail.Poster}</Descriptions.Item>  
                    <Descriptions.Item label="Production">{movieDetail.Production}</Descriptions.Item>         
                    <Descriptions.Item label="Rated">{movieDetail.Rated}</Descriptions.Item>  
                    <Descriptions.Item label="Released">{movieDetail.Released}</Descriptions.Item>  
                    <Descriptions.Item label="Runtime">{movieDetail.Runtime}</Descriptions.Item>  
                    </Descriptions>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetails