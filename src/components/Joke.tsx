import { Jokes } from "../types";

function Joke(joke: Jokes) {
  return (
    <div className="joke">
      <div>
        <span className="setup">{joke.setup}</span>
        <p className="punchline">{joke.punchline}</p>
      </div>
    </div>
  );
}

export default Joke;
