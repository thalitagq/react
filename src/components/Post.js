import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Person from '@material-ui/icons/Person'
import Avatar from "@material-ui/core/Avatar";


const contents = [
  {
    user: { name: "John Doe", avatar: "avatar.png" },
    msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum lacus ut ante dignissim consequat vel ac dolor. Mauris vulputate ante et velit rhoncus, nec faucibus arcu posuere",
    photo: "astronaut.jpeg",
  },
  {
    user: { name: "Jane Doe", avatar: "" },
    msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum lacus ut ante dignissim consequat vel ac dolor. Mauris vulputate ante et velit rhoncus, nec faucibus arcu posuere",
    photo: "image2.jpg",
  },

  {
  user: { name: "Walter", avatar: "" },
    msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum lacus ut ante dignissim consequat vel ac dolor. Mauris vulputate ante et velit rhoncus, nec faucibus arcu posuere",
    photo: "",
  },
];

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "", avatar: "" },
      msg: "",
      photo: "",
    };
  }

  populatePost(content) {
    this.setState({

    })
  }

  render() {

    return contents.map((item, i) => {
      let avatarUser;
      if (!item.user.avatar) {
        avatarUser = (
          <Avatar className="">
            <Person />
          </Avatar>
        );
      } else {
        avatarUser = (
          <Avatar className="" src={item.user.avatar}>
            <Person />
          </Avatar>
        );
      }

      let cardMedia;
      if (!item.photo) {
        cardMedia = '';
      } else {
        cardMedia = (
          <CardMedia
            component="img"
            alt=""
            height="300"
            image={item.photo}
            title=""
          />
        );
      }
      return (
        <Card style={{ marginBottom: "2em" }} key={i}>
          <CardHeader
            avatar={avatarUser}
            title={item.user.name}
            // subheader="September 14, 2016"
          />
          {cardMedia}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.msg}
            </Typography>
          </CardContent>
        </Card>
      );
    });
     
  }
}

export default Post;
