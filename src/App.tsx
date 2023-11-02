import { useEffect, useRef, useState } from "react";
import { Jokes } from "./types";
import { Joke, Loading } from "./components";

function App() {
  const source = "https://publicapis.dev/";

  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);
  const [errors, setErrors] = useState([]);
  const isMounted = useRef(false);

  // error status 429
  /**
   * {"type":"error","message":"Your ip has exceeded the 100 request limit per 15 minute(s). Try again in in 15 minute(s)."}
   */

  async function getJokes() {
    await fetch(`https://official-joke-api.appspot.com/random_ten`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setJokes(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setErrors(error);
        console.log(error);
      });
  }

  useEffect(() => {
    isMounted.current = true;

    getJokes();

    // console.log({ reload });

    return () => {
      isMounted.current = false;
    };
  }, [reload]);

  if (errors.length) return <>Something went wrong</>;
  if (loading) return <Loading size="medium" />;

  console.log(errors);

  return (
    <div className="app">
      <h1>Random Jokes Generator</h1>

      <div className="jokes">
        {jokes.map((joke: Jokes) => (
          <Joke key={joke.id} {...joke} />
        ))}

        <button
          type="submit"
          className="button"
          onClick={() => setReload(!reload)}
          // onClick={() => setLoading(!loading)}
        >
          More jokes
        </button>
      </div>

      <div className="footer">
        <p className="source">
          Courtesy of{" "}
          <a
            className="App-link"
            href={source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
