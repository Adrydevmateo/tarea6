import { IonButton, IonInput, IonItem } from "@ionic/react";
import { type FormEvent, useState, type SVGProps, ReactNode } from "react";
import { fetchGenre } from "../utils/fetch";
import IMGYoung from "../assets/young.jpg"
import IMGAdultMale from "../assets/adultMale.jpg"
import IMGAdultFemale from "../assets/adultFemale.jpg"
import IMGOlder from "../assets/older.jpg"

type Age = "joven" | "adulto" | "adulta" | "aciano" | "anciana" | undefined

type Response = {
    count: number,
    age: number,
    name: string
}

export default function Edad() {
    const [ageTxt, setAgeTxt] = useState<Age>(undefined)
    const [age, setAge] = useState<number | undefined>(undefined)
    const [img, setImg] = useState("")

    const fetchAge = async (name: string) => {
        try {
            const url = `https://api.agify.io/?name=${name}`
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

        const userName = String(formData.get("name"))

        const userAge = (await fetchAge(userName) as Response).age
        const genre = (await fetchGenre(userName))?.gender

        let curr: Age = "joven"
        setImg(IMGYoung)

        if (userAge >= 20 && userAge < 60) {
            if (genre == "male") {
                curr = "adulto"
                setImg(IMGAdultMale)
            } else {
                curr = "adulta"
                setImg(IMGAdultFemale)
            }
        }

        if (userAge >= 60) {
            curr = (genre == "male" ? "aciano" : "anciana")
            setImg(IMGOlder)
        }

        setAge(userAge)
        setAgeTxt(curr)

    }

    return (
        <div>
            <IonItem>
                <form onSubmit={submit}>
                    <IonInput name="name" placeholder="Introduce tu nombre" />
                    <IonButton type="submit">Adivina mi edad</IonButton>
                </form>
            </IonItem>
            <IonItem>
                <div style={{ "fontSize": "80px", paddingTop: "20px" }}>
                    {ageTxt && age && img ? (
                        <>
                            <h3>Eres {ageTxt} con {age} años.</h3>
                            <img src={img} />
                        </>
                    ) : null}
                </div>
            </IonItem>
        </div>
    )
}
