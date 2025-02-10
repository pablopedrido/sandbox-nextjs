import styles from "./page.module.css";

export default async function Page() {
  const tickers = "PLTR,TSLA,NKE,PINS,FVRR,PYPL,AAPL";
  const res = await fetch(
    `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/quotes?ticker=${tickers}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.KEY_STOCKS,
      },
    }
  );

  const posts = await res.json();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Stock</h1>

      <div>
        <ul className={styles.lista}>
          {posts.body.map((stock) => (
            <li className={styles.elemento} key={stock.symbol}>
              <p>{stock.displayName}</p>
              <p className={styles.price}>{stock.regularMarketOpen}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
