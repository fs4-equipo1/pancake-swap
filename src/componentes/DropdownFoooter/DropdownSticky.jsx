
import DropdownFooter from "./DropdownFooter";
import styles from "./DropdownFooter.module.scss";

export default function DropdownSticky() {
  return (
    <div className={styles.dropdownCont}>
      <DropdownFooter title="Trade" itemsKey="trade" />
      <DropdownFooter title="Earn" itemsKey="earn" />
      <DropdownFooter title="Game" itemsKey="game" />
      <DropdownFooter title="NFT" itemsKey="nft" />
      <DropdownFooter title="..." itemsKey="more" />
    </div>

  )
  }