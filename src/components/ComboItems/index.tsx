import AdditionMenu from './additionMenu';
import TransportItems from './transportItems';
type Props = {
   
};

export const ComboItems = (props: Props) => {
    return (    
        <div>
          <AdditionMenu/>
          <TransportItems/>
        </div>
    );
};