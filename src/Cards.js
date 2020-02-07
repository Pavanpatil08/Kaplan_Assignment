import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          arr:[]
        }
    }
     componentDidMount = () =>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep")
        .then((res) => {
          this.setState({
            arr:res.data.items
          })
        })
        .catch((err) => alert(err))
        // .catch(err=>console.log(err))
    }
    render() {
        console.log(this.state.arr)
        return (
            <React.Fragment>

                 {
                   this.state.arr.map((e) => {
                     console.log(e.volumeInfo.title)
                     return(
                      <Typography xs={6}>
                       <Card style={{marginTop:40,width:550,marginLeft:20}} xs={3} sm={3}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                           {e.volumeInfo.title}
                        </Typography>
                        <Typography  color="textSecondary">
                          Authors:{e.volumeInfo.authors}
                        </Typography>
                        <Typography  color="textSecondary">
                          Publisher: {e.volumeInfo.publisher}
                        </Typography>
                        <Typography  color="textSecondary">
                          Published Date:{e.volumeInfo.publishedDate}
                        </Typography>
                      </CardContent>
                    </Card>
                    </Typography>
                     )
                   })
                 }
            </React.Fragment>
        );
    }
}