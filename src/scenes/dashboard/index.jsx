import { Typography, Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Dashboard = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   return (
      <Box p={3}>
         <Header title="dashboard" subtitle="Just some admin stuff" />
      </Box>
   );
};

export default Dashboard;
