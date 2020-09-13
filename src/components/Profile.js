import React from "react";
import Container from "@material-ui/core/Container";
import Person from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Feed from "./Feed";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nickname: "",
      password: "",
      photo: null,
      email: "",
      dialog: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleClose() {
    this.setState({
      dialog: false,
    });
  }

  handleClickOpen() {
    this.setState({
      dialog: true,
    });
  }

  uploadPhoto(event) {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0]),
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    console.log(this.state);
  }

  render() {
    let avatarUser;
    if (!this.state.photo) {
      avatarUser = (
        <Avatar style={{ height: "120px", width: "120px" }}>
          <Person style={{ fontSize: "5em" }} />
        </Avatar>
      );
    } else {
      avatarUser = (
        <Avatar
          style={{ height: "120px", width: "120px" }}
          src={this.state.photo}
        ></Avatar>
      );
    }
    return (
      <Container maxWidth="sm" style={{ padding: "2em 0" }}>
        <Paper style={{ padding: "10px", marginBottom: '2em' }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              {avatarUser}
            </Grid>

            <Grid item xs={9}>
              <Typography variant="h6" gutterBottom>
                {this.state.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {this.state.nickname}
              </Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className=""
                onClick={this.handleClickOpen}
              >
                Editar Perfil
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Dialog
          open={this.state.dialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                {avatarUser}
                <input
                  accept="image/*"
                  className=""
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                  onChange={this.uploadPhoto}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  autoFocus
                  margin="dense"
                  name="name"
                  label="Nome"
                  type="text"
                  fullWidth
                  onChange={this.handleInputChange}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  name="password"
                  label="Senha"
                  type="password"
                  fullWidth
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
        <Feed/>
      </Container>
    );
  }
}

export default Profile;
