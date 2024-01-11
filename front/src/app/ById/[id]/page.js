import styles from './card.module.css'


export default async function ById( {params} ) {
    console.log("esse é o id enviado", params.id)
    const card = await fetch(`http://localhost:5287/api/Pacote/${params.id}`).then((res) =>
     res.json(),
     )

    return (
        <div className={styles.container}>
        
            <div key={card.id} className={styles.card}>
                <div className={styles.card_header}>
                <div className={styles.card_body}>
                    <h1>{card.nome}</h1>
                    <h3>{card.duracao}</h3>
                    <h1>{card.preco}</h1>
                </div>
                </div>
            </div>
    </div>
    )
}