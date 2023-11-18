import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";

import { IJoke } from "../types";
import { fetchJokes, capitalize } from "../utils";
import Loading from "./Loading";

function Joke(joke: IJoke) {
  const jokeType = capitalize(joke.type);

  return (
    <div className="joke">
      <div>
        <p className="setup">{joke.setup}</p>
        <p className="punchline">{joke.punchline}</p>
        <span
          title={`${jokeType} joke`}
          className={classNames("type", joke.type)}
        >
          {jokeType}
        </span>
      </div>
    </div>
  );
}

function Jokes() {
  const { data, status, error, isFetching, refetch } = useQuery({
    queryKey: ["jokes"],
    queryFn: fetchJokes,
    refetchOnWindowFocus: false,
  });

  if (isFetching || status === "pending") return <Loading size="small" />;

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
