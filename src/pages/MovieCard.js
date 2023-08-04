import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MovieCard({ movieData }) {
    const { title, poster_path, overview } = movieData
    return (
        <Card sx={{ maxWidth: 300, height: 500 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300px"
                    image={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard