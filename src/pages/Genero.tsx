import { IonButton, IonInput, IonItem } from "@ionic/react";
import { type FormEvent, useState, type SVGProps } from "react";

type Genre = "male" | "female" | undefined

type Response = {
    count: number,
    gender: Genre,
    name: string,
    probability: number
}

export default function Genero() {
    const [genre, setGenre] = useState<Genre>(undefined)

    const fetchGenre = async (name: string) => {
        try {
            const url = `https://api.genderize.io/?name=${name}`
            const res = await fetch(url)
            if (!res.ok) throw new Error(res.statusText)
            const data = await res.json()
            return data
        } catch (error) {
            console.error(error)
        }
    }

    const submit = async (e: FormEvent) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const userGenre = String(formData.get("genre"))

        const res: Response = await fetchGenre(userGenre)
        setGenre(res.gender)
    }

    return (
        <div>
            <IonItem >
                <form onSubmit={submit}>
                    <IonInput name="genre" placeholder="Introduce tu nombre" />
                    <IonButton type="submit">Adivina mi genero</IonButton>
                </form>
                <div style={{ "fontSize": "80px", paddingTop: "20px" }}>
                    {genre == "male" ? <SVGMale /> : null}
                    {genre == "female" ? <SVGFemale /> : null}
                </div>
            </IonItem>
        </div>
    )
}

function SVGMale(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#269" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#FFF" d="M15 30.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5m0-14c-3.032 0-5.5 2.468-5.5 5.5s2.468 5.5 5.5 5.5s5.5-2.468 5.5-5.5s-2.468-5.5-5.5-5.5"></path><path fill="#FFF" d="M28.5 7h-8.969a1.5 1.5 0 1 0 0 3h5.348l-7 6.879L20 19l7-6.879V17.5a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 28.5 7"></path></svg>
    )
}



function SVGFemale(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#EA596E" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></path><path fill="#FFF" d="M18 22.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5m0-14c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5s5.5-2.468 5.5-5.5s-2.467-5.5-5.5-5.5"></path><path fill="#FFF" d="M18 31.5a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 1 1 3 0v9a1.5 1.5 0 0 1-1.5 1.5"></path><path fill="#FFF" d="M22.875 27.5h-9.75a1.5 1.5 0 1 1 0-3h9.75a1.5 1.5 0 1 1 0 3"></path></svg>
    )
}
