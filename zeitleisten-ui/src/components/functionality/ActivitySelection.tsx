import { Switch, FormLabel, FormControl } from '@chakra-ui/react'
import { useEffect } from "react";
import { IActivitySelectionProps } from "../../dtos/ISelectionProps";
import { right } from "@popperjs/core";

const ActivitySelection: React.FC<IActivitySelectionProps> = ({ setShowAcquisitions, setShowSlews, showAcquisitions, showSlews }) => {

    useEffect(() => {
        setShowAcquisitions(true);
        setShowSlews(true);
    }, []);

    return (
        /*
        <Stack direction='row'>
            <FormLabel>Acquisitions: </FormLabel>
            <Switch id='disableAcquisitions' value={'disableAcquisitions'} colorScheme={colours.primary} />
            <FormLabel>Slews: </FormLabel>
            <Switch id="disableSlews" value={'disableSlews'} colorScheme={colours.primary} onChange={handleOptionChange} />
        </Stack>
        */
        <FormControl display='flex' alignItems='right' alignContent={right} justifyContent={"flex-end"} marginRight='10%'>
            <FormLabel size='sm' margin='1%'>Acquisitions: </FormLabel>
            <Switch size='sm' margin='1%' marginTop='1.5%' id='disableAcquisitions' colorScheme="gray" defaultChecked={true} onChange={() => setShowAcquisitions(!showAcquisitions)} />
            <FormLabel size='sm' margin='1%'>Slews: </FormLabel>
            <Switch size='sm' margin='1%' marginTop='1.5%' id="disableSlews" colorScheme='gray' defaultChecked={true} onChange={() => setShowSlews(!showSlews)} />
        </FormControl>
    );
}
export default ActivitySelection;
