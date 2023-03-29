// React Native
import { ViewStyle } from 'react-native';

// ReactNative Picker
import { Picker } from '@react-native-picker/picker';

// Item Type
import { PickerItem } from './PickerItemType';

interface DifficultyPickerProps {
    state: string;
    onChange: (string) => void;
    items: PickerItem[];
    mode: 'dialog' | 'dropdown';
    enabled: boolean;
    style?: ViewStyle;
}

function DifficultyPicker(props: DifficultyPickerProps) {
    // Destruct Props
    const { state, onChange, items, mode, enabled, style } = props;

    return (
        <Picker
            selectedValue={state}
            onValueChange={(value) => {
                onChange(value);
            }}
            enabled={enabled}
            mode={mode}
            style={style}
        >
        {
            items.map(item => (
                <Picker.Item key={item.value} label={item.label} value={item.value} enabled={item.enabled} style={item.style} />                
            ))
        }
        </Picker>
    )
}

export default DifficultyPicker;