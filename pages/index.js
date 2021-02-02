import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
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
        <Link href="/">
          <Button variant="outlined" className={classes.button}>
            Connect
          </Button>
        </Link>
      </main>

      <footer>
        <a
          href="https://www.exeter.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written and developed in Exeter.
        </a>
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

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 6rem;
            font-family: Quicksand;
            font-style: normal;
            font-weight: 700;
            font-size: 144px;
            line-height: 180px;
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
