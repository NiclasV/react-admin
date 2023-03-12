import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   return (
      <Box mb="30px">
         <Typography
            variant="h1"
            color={colors.primary[500]}
            textTransform="uppercase"
         >
            {title}
         </Typography>
         <Typography fontSize="18px" color={colors.greenAccent[400]}>
            {subtitle}
         </Typography>
      </Box>
   );
};

export default Header;
