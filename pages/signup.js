import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from "react";


import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    flexGrow: 1,
    height: 100,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  function handleChange(e) {
      setAge(e);
  }

  function handleRole(e) {
      setRole(e);
  }

  return (
    <div className="container">
      <Head>
        <title>exe</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <main>
        <h1 className="title">exe</h1>
        <p className="subtitle">for students</p>
        <img src="login.png"></img>
        <div className="form">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Email" />
                <TextField id="standard-basic" label="Password" />
                <TextField id="standard-basic" label="Confirm Password" />
                <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    defaultValue="2000-01-01"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Course</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={(e) => handleChange}
                    >
                    <MenuItem value={10}>Computer Science</MenuItem>
                    <MenuItem value={20}>Maths</MenuItem>
                    <MenuItem value={30}>Ancient History</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={(e) => handleRole}
                    >
                    <MenuItem value={10}>Student</MenuItem>
                    <MenuItem value={20}>Academic</MenuItem>
                    <MenuItem value={30}>Support Worker</MenuItem>
                    </Select>
                </FormControl>
                <Link href="/login">
                <Button variant="outlined" className={classes.button}>
                    Sign Up
                </Button>
                </Link>
            </form>
        </div>
      </main>

      <footer>
         <p>Already have an account? <a href="/login">Log In</a></p>
      </footer>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Quicksand", sans-serif;
            background: linear-gradient(180deg, #61FFC6 -1.47%, rgba(255, 255, 255, 0) 100%), #66FFAC;
          }

          .subtitle {
            margin-top: 0px;
            margin-bottom: 30px;
            font-size: 1.2rem;
          }  

          img {
              width: 10%;
              max-width: 150px;
              padding-top: 3rem;
          }

          .form {
              width: 30%; 
              padding-top: 1rem;
              padding-bottom: 3rem;
              align-items: center;
              text-align: center;
              justify-content: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer a {
            display: inline;
            justify-content: center;
            align-items: center;
          }


          a {
            color: inherit;
          }

          .title {
            margin: 0;
            line-height: 1;
            font-family: Quicksand;
            font-style: normal;
            font-weight: 700;
            font-size: 80px;
            text-align: center;
           
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
