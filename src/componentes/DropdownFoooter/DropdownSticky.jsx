
import DropdownFooter from "./DropdownFooter";
import styles from "./DropdownFooter.module.scss";

export default function DropdownSticky() {
  return (
    <div className={styles.dropdownCont}>
      <DropdownFooter title="Trade" itemsKey="trade" imageSrc="/assets/trade.png"  />
      <DropdownFooter title="Earn" itemsKey="earn" imageSrc="/assets/earn.png" />
      <DropdownFooter title="Game" itemsKey="game" imageSrc="/assets/game.png" />
      <DropdownFooter title="NFT" itemsKey="nft" imageSrc="/assets/nft.png" />
      <DropdownFooter title=". . ." itemsKey="more" />
    </div>

  )
  }