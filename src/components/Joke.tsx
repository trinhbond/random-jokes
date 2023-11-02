import { Jokes } from "../types";

function Joke(joke: Jokes) {
  return (
    <div className="joke">
      <div>
        {setup} <p>{punchline}</p>
      </div>
    </div>
  );
}

export default Joke;
