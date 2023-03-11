import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box p={3}>
			<Typography variant='h1' color={colors.primary[500]}>
				Dashboard
			</Typography>
		</Box>
	);
};

export default Dashboard;
