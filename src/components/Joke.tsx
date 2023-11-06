import classNames from "classnames";

import { IJoke } from "../types";
import { capitalize } from "../utils";

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

export default Joke;
