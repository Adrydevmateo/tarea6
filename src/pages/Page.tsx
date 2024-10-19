import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import Genero from './Genero';
import Inicio from './Inicio';
import Edad from './Edad';

const Page: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer>
                    {name == "Inicio" ? <Inicio /> : null}
                </ExploreContainer>
                <ExploreContainer>
                    {name == "Genero" ? <Genero /> : null}
                </ExploreContainer>
                <ExploreContainer>
                    {name == "Edad" ? <Edad /> : null}
                </ExploreContainer>
            </IonContent>
        </IonPage>
    );
};

export default Page;
