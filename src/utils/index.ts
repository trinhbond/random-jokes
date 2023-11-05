import axios from "axios";

export const capitalize = (word: string) =>
  word[0].toUpperCase() + word.substring(1);

export const fetchJokes = async () => {
  const { data } = await axios.get(
    "https://official-joke-api.appspot.com/random_ten"
  );

  return data;
};
