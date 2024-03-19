import { Box, Modal, Typography } from "@mui/material";
import timeBreak from "./reminder"
import React, { useEffect } from "react";

function BreakTimeModal() {
	const [open, setOpen] = React.useState(true);
	const handleClose = () => setOpen(false);

	return (
		<Modal onClose={handleClose} open={open}>
			<Box>
                <Typography>Its time to take a break!</Typography>
                <Typography>Get up for 5 - 10 Mins and walk around</Typography>
                <Typography>You have done great so far!</Typography>
            </Box>
		</Modal>
	);
}

export {BreakTimeModal};
