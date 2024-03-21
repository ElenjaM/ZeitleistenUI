import { IconButton, Tooltip } from "@chakra-ui/react";
import SatelliteTimelineIcon from "../../assets/icons/SatelliteTimelineIcon";
import { colours } from "../../style/colours";

function TitlepageBar() {
    return (
        <>
            <Tooltip label='SATLINE Startpage' bgColor={colours.primary}>
                <IconButton
                    aria-label='Satellite Activities Timeline'
                    size={'lg'}
                    variant={'ghost'}
                    colorScheme={colours.seasalt}
                    icon={<SatelliteTimelineIcon style={{ width: '100%', height: '100%' }} />}
                    onClick={() => window.location.reload()}>
                </IconButton>
            </Tooltip>
        </>
    );
}
export default TitlepageBar