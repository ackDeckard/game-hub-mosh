type GamesList = { id: number; name: string };

type FetchGamesResponse = { count: number; results: GamesList[] };

async function getData<T>(url: string, config: RequestInit = {}): Promise<T> {
  return (
    fetch(url, config)
      .then((response) => response.json())
      // and return the result data.
      .then((data) => data as T)
  );
}

const DataFetching = async () => {
  const URL = `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}`;
  const data = await getData<FetchGamesResponse>(URL);

  return (
    <ul>
      {data.results.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataFetching;
