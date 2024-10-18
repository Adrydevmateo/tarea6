import { PropsWithChildren } from 'react';
import './ExploreContainer.css';

interface ContainerProps extends PropsWithChildren {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, children }) => {
    return (
        <div id="container">
            <strong>{name}</strong>
            <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        </div>
    );
};

export default ExploreContainer;
