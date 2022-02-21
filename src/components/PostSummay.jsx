import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

export const PostSummary = (props) => {
  return (
    <Card className="mb-5" elevation={0}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="subtitle2" color="text.secondary">
          {new Date(props.createdAt).toLocaleString()}
        </Typography>
        <Typography variant="body2">{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  )
}
