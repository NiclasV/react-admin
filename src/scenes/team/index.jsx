import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/testData";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

   const columns = [
      { field: "id", headerName: "ID" },
      {
         field: "name",
         headerName: "Name",
         flex: 1,
         cellClassName: "name-column--cell",
      },
      {
         field: "age",
         headerName: "Age",
         type: "number",
         headerAlign: "left",
         align: "left",
      },
      { field: "phone", headerName: "Phone Number", flex: 1 },
      { field: "email", headerName: "Email", flex: 1 },
      {
         field: "access",
         headerName: "Access Level",
         flex: 1,
         renderCell: ({ row: { access } }) => {
            return (
               <Box
                  width="60%"
                  m="0 auto"
                  p="5px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor={
                     access === "admin"
                        ? colors.greenAccent[800]
                        : colors.tealAccent[800]
                  }
                  borderRadius="5px"
               >
                  {access === "admin" && <AdminPanelSettingsOutlined />}
                  {access === "manager" && <SecurityOutlined />}
                  {access === "user" && <LockOpenOutlined />}

                  <Typography
                     sx={{
                        marginLeft: "5px",
                        textTransform: "uppercase",
                        lineHeight: "1",
                     }}
                  >
                     {" "}
                     {access}
                  </Typography>
               </Box>
            );
         },
      },
   ];

   return (
      <Box p={3}>
         <Header title="Team" subtitle="teamstuff" />
         <Box
            pb={4}
            sx={{
               height: "75vh",
               "& .MuiDataGrid-root": {
                  border: "none",
               },
               "& .MuiDataGrid-cell": {
                  borderBottom: "none",
               },
               "& .name-column--cell": {
                  color: colors.greenAccent[300],
               },
               "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.greenAccent[800],
                  borderBottom: "none	",
               },
               "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.greenAccent[900],
               },
               "& .MuiDataGrid-footerContainer": {
                  borderColor: colors.greenAccent[700],
                  backgroundColor: colors.greenAccent[800],
               },
            }}
         >
            <DataGrid rows={mockDataTeam} columns={columns} />
         </Box>
      </Box>
   );
};

export default Team;
