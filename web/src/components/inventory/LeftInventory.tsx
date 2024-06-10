import InventoryGrid from './InventoryGrid';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';

const LeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  const isRight = false;

  return <InventoryGrid inventory={leftInventory} isRight={isRight} />;
};

export default LeftInventory;
