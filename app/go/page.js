import styles from "./page.module.css";

export default async function Page() {
  const res = await fetch("https://api.football-data.org/v4/teams/558", {
    method: "GET",
    headers: {
      "X-Auth-Token": process.env.TEST,
    },
  });

  const posts = await res.json();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Celta de Vigo</h1>

      <div>
        <ul className={styles.lista}>
          {posts.squad.map((player) => (
            <li className={styles.elemento} key={player.id}>
              {player.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
