import { Stack, IconButton, Box, Tooltip, Input } from "@chakra-ui/react";
import SatelliteTimelineIcon from "../../assets/icons/SatelliteTimelineIcon";
import FilterElement from "./Filter/FilterElement";

function TitlepageBar() {
    return (
    <Box bgColor={'secondary'} p='1%' w='100%' h='45%' color={'seasalt'} >
       <Stack spacing='2%' direction='row' align='center' marginLeft='2.5%' w='100%' h='100%'>
            <Tooltip label='Satline Startpage' bgColor='primary'>
                <IconButton 
                    aria-label='Satellite Activities Timeline' 
                    size={'lg'}
                    variant={'ghost'}
                    colorScheme='seasalt'
                    icon={<SatelliteTimelineIcon style={{ width: '100%', height: '100%' }} />} 
                    onClick={() => { console.log('Icon clicked!'); }}>
                </IconButton>
            </Tooltip>    
            <FilterElement />      
        </Stack>  
    </Box>
    );
}
export default TitlepageBar