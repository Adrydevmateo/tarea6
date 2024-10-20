import { IonItem, IonLabel, IonList } from "@ionic/react";
import IMGProfile from "../assets/profile.jpg"

export default function Acerca() {

    return (
        <IonList>
            <IonItem>
                <IonLabel>
                    <img src={IMGProfile} />
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>Adry Mateo Ramon | AdryDev</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>adrydevmateo@gmail.com</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <a href="https://github.com/Adrydevmateo" target="_blank">GitHub</a>
                </IonLabel>
            </IonItem>
        </IonList>
    )
}
