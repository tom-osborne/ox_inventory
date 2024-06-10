import InventoryGrid from './InventoryGrid';
import { useAppSelector } from '../../store';
import { selectRightInventory } from '../../store/inventory';

const RightInventory: React.FC = () => {
  const rightInventory = useAppSelector(selectRightInventory);
  const isRight = true;

  return <InventoryGrid inventory={rightInventory} isRight={isRight} />;
};

export default RightInventory;
