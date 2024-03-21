import { Select } from '@chakra-ui/react'
import getSatelliteData from "../util/Selection";
import { colours } from '../../style/colours';
import { ISelectionProps } from '../../dtos/IProperties';
import { BY_ORDER, BY_SATELLITE } from '../../util/Constants';

const ViewSelection: React.FC<ISelectionProps> = ({ setGroups, setItems, setViewOption, showAcquisitions, showSlews }: ISelectionProps) => {


    const handleOptionChange = async (option: string, showAcquisitions: boolean, showSlews: boolean) => {
        const data = await getSatelliteData(option, showAcquisitions, showSlews);
        setGroups(data.groups);
        setItems(data.items);
        setViewOption(option);
    };
    return (
        <Select
            variant='outline' _hover={{ backgroundColor: colours.primary }}
            borderColor={colours.secondary}
            bgColor={colours.secondary}
            focusBorderColor={colours.seasalt}
            w='15%'
            color={colours.seasalt}
            onChange={(e) => handleOptionChange(e.target.value, showAcquisitions, showSlews)}>
            <option style={{ color: colours.secondary, backgroundColor: colours.seasalt }} value={BY_SATELLITE}>Timeline by Satellite </option>
            <option style={{ color: colours.secondary, backgroundColor: colours.seasalt }} value={BY_ORDER}>Timeline by Order</option>
        </Select>
    );
}


export default ViewSelection;