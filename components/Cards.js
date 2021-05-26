import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        
        marginTop: '0.8rem'
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://notarius53.ru/static/i/2017/11/2GtgS_l.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Команда: Future
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Команда является резидентом Парка Высоких Технологий и занимается разработкой программного обеспечения для исследования и определения направленности интереса людей в сети.
          </Typography>
          
                    <div class="tags">
                        <ul>
                            <li class="firstTag">Инженеры</li>
                            <li class="secondTag">Приложение</li>
                        </ul>
                    </div>
                    <div class="university">ИЭИС</div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Вступить в команду
        </Button>
                <Button size="small" color="primary">
                    Узнать больше
        </Button>
            </CardActions>
        </Card>
    );
}