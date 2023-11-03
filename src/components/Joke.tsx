import { Jokes } from "../types";

function Joke(joke: Jokes) {
  return (
    <div className="joke">
      <div>
        <p className="setup">{joke.setup}</p>
        <p className="punchline">{joke.punchline}</p>
      </div>
    </div>
  );
}

export default Joke;
