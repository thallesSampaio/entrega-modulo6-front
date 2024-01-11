import styles from './card.module.css'

export default async function Card() {
  const cards = await fetch('http://localhost:5287/api/Pacote').then(res => res.json());
  console.log(cards)

  return (
    <div className={styles.container}>
        {cards ?.map((card) =>(
            <div key={card.id} className={styles.card}>
                <div className={styles.card_header}>
                <div className={styles.card_body}>
                    <h1>{card.nome}</h1>
                    <h3>{card.duracao}</h3>
                    <h1>{card.preco}</h1>
                </div>
                </div>
            </div>
        ))}
    </div>
  )
}
