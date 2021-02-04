import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
        <p className="subtitle">find your group</p>
        <img src="login.png"></img>
        <div className="form__group field">
            <form className={classes.root} noValidate autoComplete="off">
                <input type="input" class="form__field" placeholder="Email" name="name" id='name' required />
                <label for="name" class="form__label">Email</label>
                <TextField id="standard-basic" label="Password" />
            </form>
        </div>
        <Link href="/login">
          <Button variant="outlined" className={classes.button}>
            Log in
          </Button>
        </Link>
        <p className="pwd">Can't remember your password? <a href="/signup">Click here</a></p>
      </main>

      <footer>
         <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </footer>

      <style js>
        {`
        $primary: #11998e;
        $secondary: #38ef7d;
        $white: #fff;
        $gray: #9b9b9b;

        .form__field {
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 2px solid $gray;
            outline: 0;
            font-size: 1.3rem;
            color: $white;
            padding: 7px 0;
            background: transparent;
            transition: border-color 0.2s;
        
            &::placeholder {
            color: transparent;
            }
        
            &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
            }
        }

        .form__group {
            position: relative;
            padding: 15px 0 0;
            margin-top: 10px;
            width: 50%;
          }


        .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $gray;
        }
        
        .form__field:focus {
            ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $primary;
            font-weight:700;    
            }
            padding-bottom: 6px;  
            font-weight: 700;
            border-width: 3px;
            border-image: linear-gradient(to right, $primary,$secondary);
            border-image-slice: 1;
        }
        /* reset input */
        .form__field{
            &:required,&:invalid { box-shadow:none; }
        }




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
              width: 20%;
              padding-top: 3rem;
          }

          .form {
              width: 40%; 
              padding-top: 1rem;
              padding-bottom: 3rem;
              align-items: center;
              text-align: center;
              justify-content: center;
          }

          .pwd {
              padding-top: 1rem;
              font-size: 0.9rem;
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
