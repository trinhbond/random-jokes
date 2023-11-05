import { IJoke } from "./types";
import { Joke, Loading, Button, Footer, Header } from "./components";
import { useQuery } from "@tanstack/react-query";
import { fetchJokes } from "./utils";

function App() {
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["jokes"],
    queryFn: fetchJokes,
  });

  if (error) return <div className="error">{error.message}</div>;
  if (isFetching || isLoading) return <Loading size="medium" />;

  const jokesList = data.map((joke: IJoke) => <Joke key={joke.id} {...joke} />);

  return (
    <div className="app">
      <Header />
      <div className="jokes">{jokesList}</div>
      <Button
        type="submit"
        className="button"
        title="More jokes"
        onClick={() => refetch()}
      >
        More jokes
      </Button>
      <Footer />
    </div>
  );
}

export default App;
