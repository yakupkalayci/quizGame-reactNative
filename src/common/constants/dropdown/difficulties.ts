import { DROPDOWN_DIFFICULY_VALUES } from "./dropdownConstants"

import styles from '../../../assets/styles/DifficultyItem.style';

export const difficultyItems = [
    {
      label: "Easy",
      value: DROPDOWN_DIFFICULY_VALUES.EASY,
      enabled: true,
      style: styles.item
    },
    {
      label: "Medium",
      value: DROPDOWN_DIFFICULY_VALUES.MEDIUM,
      enabled: true,
      style: styles.item
    },
    {
      label: "Hard",
      value: DROPDOWN_DIFFICULY_VALUES.HARD,
      enabled: true,
      style: styles.item
    },
  ]