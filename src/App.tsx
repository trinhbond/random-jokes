import { useEffect, useState } from "react";
import { Jokes } from "./types";
import { Joke, Loading, Button, Footer, Header } from "./components";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(`https://official-joke-api.appspot.com/random_ten`, {
        signal: controller.signal,
      })
      .then((res) => {
        setJokes(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrors(error);
      });

    // Cancel the previous request when `reload` changes
    return () => controller.abort();
  }, [reload]);

  // TODO: Handle errors
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
