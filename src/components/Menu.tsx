import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, earthOutline, earthSharp, heartOutline, heartSharp, homeOutline, homeSharp, hourglassOutline, hourglassSharp, mailOutline, mailSharp, maleFemaleOutline, maleFemaleSharp, newspaperOutline, newspaperSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, personCircleSharp, rainyOutline, rainySharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Inicio',
        url: '/folder/Inicio',
        iosIcon: homeOutline,
        mdIcon: homeSharp
    },
    {
        title: 'Genero',
        url: '/folder/Genero',
        iosIcon: maleFemaleOutline,
        mdIcon: maleFemaleSharp
    },
    {
        title: 'Edad',
        url: '/folder/Edad',
        iosIcon: hourglassOutline,
        mdIcon: hourglassSharp
    },
    {
        title: 'Pais',
        url: '/folder/Pais',
        iosIcon: earthOutline,
        mdIcon: earthSharp
    },
    {
        title: 'Clima',
        url: '/folder/Clima',
        iosIcon: rainyOutline,
        mdIcon: rainySharp
    },
    {
        title: 'Noticias',
        url: '/folder/Noticias',
        iosIcon: newspaperOutline,
        mdIcon: newspaperSharp
    },
    {
        title: 'Acerca',
        url: '/folder/Acerca',
        iosIcon: personCircleOutline,
        mdIcon: personCircleSharp
    }
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>AdryDev</IonListHeader>
                    <IonNote>adrydevmateo@gmail.com</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
