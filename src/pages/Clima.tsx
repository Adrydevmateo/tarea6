import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonItem } from "@ionic/react"
import { FormEvent, useEffect, useState } from "react"

type Weather = {
    id: number,
    main: string,
    description: string,
}

type Response = {
    weather: Array<Weather>
}

export default function Clima() {
    // I know this is wrong cause it's hard coded but I'll pass from the pain of setting up the env var for this
    const [weather, setWeather] = useState<Weather | undefined>(undefined)

    const fetchWeather = async () => {
        const API_KEY = "c18877949412d48e3276fa11015f43db"
        const city = "Santo%20Domingo"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=es`

        try {
            const res = await fetch(url)
            if (!res.ok) throw new Error(res.statusText)
            const data: Response = await res.json()
            return data.weather[0]
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchWeather().then(data => setWeather(data))
    }, [])

    return (
        <div style={{ "fontSize": "80px", paddingTop: "20px" }}>
            {weather ? (
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{weather.description}</IonCardTitle>
                        <IonCardSubtitle>Republica Dominicana</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            ) : null}
        </div>
    )
}
