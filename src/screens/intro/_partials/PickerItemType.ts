import { TextStyle, ViewStyle } from "react-native"
import { DifficultyTypes } from "../../../common/constants/dropdown/dropdownConstants"

export type PickerItem = {
    label: string,
    value: DifficultyTypes,
    enabled: boolean,
    style: ViewStyle | TextStyle
}