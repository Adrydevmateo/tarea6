import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { type FormEvent, useState } from "react";

type University = {
    name: string,
    alpha_two_code: string,
    web_pages: Array<string>,
    "state-province": boolean,
    domains: Array<string>,
    country: string
}

type Universities = Array<University>


export default function Pais() {
    const [universities, setUniversities] = useState<Universities>([])

    const submit = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const userName = String(formData.get("name"))

        const res = await fetchUniversities(userName)
        if (!res) return
        setUniversities(res)
    }


    const fetchUniversities = async (name: string) => {
        try {
            const url = `http://universities.hipolabs.com/search?country=${name.replace(" ", "+")}`
            const res = await fetch(url)
            if (!res.ok) throw new Error(res.statusText)
            const data: Universities = await res.json()
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <IonItem >
                <form onSubmit={submit}>
                    <IonInput name="name" placeholder="Introduce el nombre del país en ingles" />
                    <IonButton type="submit">Ver universidades</IonButton>
                </form>
            </IonItem>
            <IonList lines="none">
                <div style={{ "fontSize": "80px", paddingTop: "20px" }}>
                    {universities.map((uni, i) => (
                        <IonItem key={i}>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>{uni.name} | {uni.alpha_two_code}</IonCardTitle>
                                    <IonCardSubtitle>{uni.country}</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    <div>
                                        <h2>Dominios:</h2>
                                        <IonList lines="none">
                                            {uni.domains.map((dom, j) => (
                                                <IonLabel key={j}>
                                                    {dom}
                                                </IonLabel>
                                            ))}
                                        </IonList>
                                    </div>

                                    <div>
                                        <h2>Sites</h2>
                                        <IonList lines="none">
                                            {uni.web_pages.map((web, k) => (
                                                <IonButton key={k} fill="clear">
                                                    <a href={web}>{web}</a>
                                                </IonButton>
                                            ))}
                                        </IonList>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                    ))}
                </div>
            </IonList>
        </div>
    )
}
