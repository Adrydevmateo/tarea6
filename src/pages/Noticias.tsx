import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem } from "@ionic/react";
import { useEffect, useState } from "react";

type Noticia = {
    jetpack_featured_media_url: string,
    title: { rendered: string },
    excerpt: { rendered: string }
    link: string
}

export default function Noticias() {
    const logo = "https://www.omgubuntu.co.uk/wp-content/themes/omgubuntu-theme-2024_04_0/images/logo.svg?v=20231008132253"
    const [noticias, setNoticias] = useState<Array<Noticia>>([])

    const url = 'https://www.omgubuntu.co.uk/'; // Cambiar por el sitio web de WordPress

    useEffect(() => {
        fetch(`${url}/wp-json/wp/v2/posts?per_page=3`)
            .then(response => response.json())
            .then(noticias => {
                setNoticias(noticias)
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <div>
                <img src={logo} style={{ maxWidth: "40em" }} />
                <h1>
                    <a href={url} target="_blank" rel="noreferrer" >OMG Ubuntu</a>
                </h1>
            </div>

            <br />
            <br />
            <br />

            <div>
                {noticias.map((m, i) => (
                    <IonCard key={i} style={{ marginTop: "2em" }}>
                        <img alt="Silhouette of mountains" src={m.jetpack_featured_media_url} />
                        <IonCardHeader>
                            <h2 dangerouslySetInnerHTML={{ __html: m.title.rendered }} />
                            <h3 dangerouslySetInnerHTML={{ __html: m.excerpt.rendered }} />
                        </IonCardHeader>


                        <IonButton type="button" fill="clear">
                            <a href={m.link} target="_blank" rel="noreferrer">Visitar</a>
                        </IonButton>
                    </IonCard>
                ))}
            </div>
        </div>

    )
}
