import { IJoke } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchJokes } from "../utils";
import { Joke, Loading, Button } from "./index";

function Jokes() {
  const { data, status, error, isFetching, refetch } = useQuery({
    queryKey: ["jokes"],
    queryFn: fetchJokes,
  });

  if (isFetching || status === "pending") return <Loading size="large" />;

  if (status === "error") return <div className="error">{error.message}</div>;

  return (
    <>
      <div className="jokes">
        {data.map((joke: IJoke) => (
          <Joke key={joke.id} {...joke} />
        ))}
      </div>

      <Button
        type="submit"
        className="button"
        title="More jokes"
        onClick={() => refetch()}
      >
        More jokes
      </Button>
    </>
  );
}

export default Jokes;
