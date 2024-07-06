import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import TextField from '@mui/material/TextField';


const handleDelete = (id) => {
    axios.post('http://localhost:2003/memory/delete-memory', {id: id} ,{withCredentials: true}).then(response => {
      window.location.reload();
    });
};


export default function MemoryCard(props) {
    const [isEditing, setIsEditing] = React.useState(props.isEditing);
    const [button, setButton] = React.useState({text: 'Edit'});
    const [content, setContent] = React.useState({
        title: null,
        description: null
    });

    const handleChange = (event, parent) => {
        if (parent === 'title') {
            setContent({
                title: event.target.value
            });
        } else if (parent === 'description') {
            setContent({
                description: event.target.value
            });
        }

        if(content.title === null) {
            setContent({title: props.title});
        } else if (content.description === null) {
            setContent({description: props.description});
        }
    }
    
    const handleEdit = (event) => {
        if (!isEditing){
            setIsEditing(true);
            setButton({text: 'Done'});
        }
        else {
            if (content.title === null && content.description === null);
            else {
                axios.post('http://localhost:2003/memory/update-memory', {
                    _id: props._id,
                    title: content.title,
                    description: content.description
                }, 
                {
                    withCredentials: true
                })
                window.location.reload();
            }
            setIsEditing(false);
            setButton({text: 'Edit'});
        }
        
    }
    
    const description = (isEditing, description, title) => {
        console.log(isEditing);
        if (!isEditing) {
            return(
                <>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: 'white'
                    }}
                    align='justify'
                >
                    {description}
                </Typography>
                </>
            )
        } else {
            return(
                <>
                <TextField
                    id="outlined-static"
                    label="Title"
                    defaultValue={title}
                    onChange={(event) => {handleChange(event, 'title');}}
                    sx={{
                        mb: 1,
                        width: '100%'
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Decription"
                    multiline
                    rows={9}
                    defaultValue={description}
                    onChange={(event) => {handleChange(event, 'description');}}
                    sx={{
                        mb: 1,
                        width: '100%'
                    }}
                />
                </>
            )
        }
    }

    return (
        <Card
        sx={{ 
            height: '100%', 
            display: 'flex',
            flexDirection: 'column' 
        }}
        >
            <CardMedia
            component="div"
            sx={{
                pt: '56.25%',
            }}
            image={props.memory_image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                {description(isEditing, props.description, props.title)}
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small" onClick={() => handleEdit()}>{button.text}</Button>
                <Button size="small" onClick={() => handleDelete(props._id)}>Delete</Button>
            </CardActions>
        </Card>
    );
}