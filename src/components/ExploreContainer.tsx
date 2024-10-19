import { PropsWithChildren } from 'react';
import './ExploreContainer.css';

interface ContainerProps extends PropsWithChildren {
}

const ExploreContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div id="container">
            {children}
        </div>
    );
};

export default ExploreContainer;
