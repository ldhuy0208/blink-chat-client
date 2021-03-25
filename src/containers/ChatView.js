import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Message from "components/Message/Message";
import React from "react";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SendIcon from "@material-ui/icons/Send";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { InfoOutlined, MoreHoriz } from "@material-ui/icons";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },

  sendBar: {
    display: "flex",
    alignItems: "center",
  },

  header: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  },

  actions: {
    display: "flex",
  },
  messages: {
    height: "100%",
    overflow: "auto",
    padding: theme.spacing(2),
  },
}));

function ChatView(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.header}>
        <ListItem disableGutters dense>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.conversation?.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography>{props.conversation?.name}</Typography>}
            secondary="Online"
          />
        </ListItem>
        <div className={classes.actions}>
          <IconButton>
            <InfoOutlined />
          </IconButton>
          <IconButton edge="end">
            <MoreHoriz />
          </IconButton>
        </div>
      </Toolbar>
      <Divider />
      <div className={classes.messages}>
        <Message
          name="Lê Văn Luyện"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat at, hic quidem voluptate earum maxime officiis sequi officia asperiores, eius ducimus qui voluptatem cupiditate accusamus soluta adipisci nisi libero."
          time="10H30 20/11/2021"
        />
        <Message
          self
          name="Lê Văn Luyện"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat at, hic quidem voluptate earum maxime officiis sequi officia asperiores, eius ducimus qui voluptatem cupiditate accusamus soluta adipisci nisi libero."
          time="10H30 20/11/2021"
        />
        <Message
          name="Lê Văn Luyện"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat at, hic quidem voluptate earum maxime officiis sequi officia asperiores, eius ducimus qui voluptatem cupiditate accusamus soluta adipisci nisi libero."
          time="10H30 20/11/2021"
        />
        <Message
          name="Lê Văn Luyện"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat at, hic quidem voluptate earum maxime officiis sequi officia asperiores, eius ducimus qui voluptatem cupiditate accusamus soluta adipisci nisi libero."
          time="10H30"
        />
        <Message
          name="Lê Văn Tập"
          content="Lorem ipsum dolor sit."
          time="10H31"
        />
      </div>
      <Divider />
      <div className={classes.sendBar}>
        <IconButton>
          <SentimentVerySatisfiedIcon />
        </IconButton>
        <TextField
          fullWidth
          placeholder="Message..."
          multiline
          rowsMax={3}
          InputProps={{ disableUnderline: true }}
        />
        <IconButton>
          <AddPhotoAlternateIcon />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    conversation: state.conversation,
  };
};
export default connect(mapStateToProps)(ChatView);