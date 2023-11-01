import { Jokes } from "../types";

function Joke({ id, punchline, setup, ...props }: Jokes) {
  return (
    <div className={`joke-card ${id}`}>
      {/* <span>Type: {type}</span> */}
      <div>
        {setup} <p>{punchline}</p>
      </div>
    </div>
  );
}

export default Joke;
