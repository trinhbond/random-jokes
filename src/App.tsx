import { useEffect, useRef, useState } from "react";
import { Jokes } from "./types";
import { Joke, Loading, Button, Footer, Header } from "./components";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);
  const [errors, setErrors] = useState([]);
  const isMounted = useRef(false);

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
      });
  }

  useEffect(() => {
    isMounted.current = true;

    getJokes();

    return () => {
      isMounted.current = false;
    };
  }, [reload]);

  if (errors.length) return <>Something went wrong</>;
  if (loading) return <Loading size="medium" />;

  return (
    <div className="app">
      <Header />
      <div className="jokes">
        {jokes.map((joke: Jokes) => (
          <Joke key={joke.id} {...joke} />
        ))}

        <Button
          type="submit"
          className="button"
          onClick={() => setReload(!reload)}
        >
          More jokes
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
