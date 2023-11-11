import { useQuery } from "@tanstack/react-query";

import { IJoke } from "../types";
import { fetchJokes } from "../utils";
import Joke from "./Joke";
import Button from "./Button";
import Loading from "./Loading";

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

      <button
        type="submit"
        className="button"
        title="More jokes"
        onClick={() => refetch()}
      >
        More jokes
      </button>
    </>
  );
}

export default Jokes;
