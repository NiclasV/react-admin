import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { color } from "@mui/system";

const Item = ({ title, to, icon, selected, setSelected }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const { collapsed } = useProSidebar();

   return (
      <MenuItem
         active={selected === title}
         style={{
            color: colors.gray[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "auto",
            paddingLeft: collapsed ? "22px" : "5px ",
         }}
         component={<Link to={to} />}
         onClick={() => setSelected(title)}
         icon={icon}
      >
         {!collapsed ? <Typography fontSize="16px">{title}</Typography> : ""}
      </MenuItem>
   );
};

const ProSidebar = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const { collapseSidebar, collapsed } = useProSidebar();
   const [selected, setSelected] = useState("Dashboard");

   var sidebarStyle = {
      border: "none",
      [`.ps-sidebar-container`]: {
         padding: "20px",
      },
      [`.ps-menu-label.ps-active, .ps-menu-icon.ps-active`]: {
         color: colors.primary[500],
      },
      [`.ps-menuitem-root:hover .ps-menu-icon, .ps-menuitem-root:hover .ps-menu-label`]:
         {
            color: colors.primary[300],
         },
      [`.ps-menuitem-root:hover .ps-menu-icon.ps-active, .ps-menuitem-root:hover .ps-menu-label.ps-active`]:
         {
            color: colors.primary[500],
         },
      [`.ps-menu-icon`]: {
         marginRight: collapsed ? "0px" : "5px ",
      },
      [`.ps-menu-button:hover`]: {
         backgroundColor: colors.gray[800],
      },
   };

   return (
      <Sidebar backgroundColor={colors.gray[900]} rootStyles={sidebarStyle}>
         {/* Toggle */}
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography display="inline-block" fontSize="18px">
               {!collapsed ? "Admin" : ""}
            </Typography>
            <IconButton onClick={() => collapseSidebar()}>
               <MenuOutlinedIcon />
            </IconButton>
         </Box>
         {/* Avtar/name */}
         {!collapsed && (
            <Box mb="20px">
               <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt="20px"
                  mb="10px"
               >
                  <img
                     alt="Profile"
                     width="100px"
                     height="100px"
                     src={`../../assets/profile.png`}
                     style={{
                        borderRadius: "50%",
                        display: "block",
                     }}
                  />
               </Box>
               <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography
                     variant="h2"
                     fontWeight="bold"
                     color={colors.primary[500]}
                  >
                     Niclas V
                  </Typography>
                  <Typography color={colors.greenAccent[400]}>
                     Admin stuff
                  </Typography>
               </Box>
            </Box>
         )}
         {/* MENU */}
         <Menu>
            <Item
               title="Dashboard"
               icon={<HomeOutlinedIcon />}
               to="/"
               selected={selected}
               setSelected={setSelected}
            />
            {!collapsed ? (
               <Typography
                  variant="h3"
                  fontSize="16px"
                  color={colors.greenAccent[400]}
                  sx={{
                     m: "15px 5px 5px 5px",
                  }}
               >
                  Data
               </Typography>
            ) : (
               ""
            )}
            <Item
               title="Manage team"
               icon={<PeopleOutlinedIcon />}
               to="/team"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="Contacts information"
               icon={<ContactsOutlinedIcon />}
               to="/contacts"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="Invoices balances"
               icon={<ReceiptOutlinedIcon />}
               to="/invoices"
               selected={selected}
               setSelected={setSelected}
            />
            {!collapsed ? (
               <Typography
                  variant="h3"
                  fontSize="16px"
                  color={colors.greenAccent[400]}
                  sx={{
                     m: "15px 5px 5px 5px",
                  }}
               >
                  Pages
               </Typography>
            ) : (
               ""
            )}
            <Item
               title="Profile form"
               icon={<PersonOutlinedIcon />}
               to="/form"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="Calendar"
               icon={<CalendarTodayOutlinedIcon />}
               to="/calendar"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="FAQ Page"
               icon={<HelpOutlinedIcon />}
               to="/faq"
               selected={selected}
               setSelected={setSelected}
            />
            {!collapsed ? (
               <Typography
                  variant="h3"
                  fontSize="16px"
                  color={colors.greenAccent[400]}
                  sx={{
                     m: "15px 5px 5px 5px",
                  }}
               >
                  Charts
               </Typography>
            ) : (
               ""
            )}
            <Item
               title="Bar chart"
               icon={<BarChartOutlinedIcon />}
               to="/bar"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="Pie chart"
               icon={<PieChartOutlinedIcon />}
               to="/pie"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="Line chart"
               icon={<TimelineOutlinedIcon />}
               to="/line"
               selected={selected}
               setSelected={setSelected}
            />
            <Item
               title="Geography chart"
               icon={<MapOutlinedIcon />}
               to="/geography"
               selected={selected}
               setSelected={setSelected}
            />
         </Menu>
      </Sidebar>
   );
};

export default ProSidebar;
