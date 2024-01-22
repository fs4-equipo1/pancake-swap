import React from "react";
import DropdownFooter from "./DropdownFooter";
import styles from "./DropdownFooter.module.scss";

export default function DropdownSticky() {
  return (
    <div className={styles.dropdownCont}>
      <DropdownFooter title="Earn" itemsKey="earn" />
      <DropdownFooter title="Game" itemsKey="game" />
      <DropdownFooter title="..." itemsKey="more" />
      <DropdownFooter title="NFT" itemsKey="nft" />
    </div>

  )
  };