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
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const ProSidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { collapseSidebar, collapsed } = useProSidebar();
	// const [selected, setSelected] = useState("Dashboard");

	var sidebarStyle = {
		border: "none",
		[`.ps-sidebar-container`]: {
			padding: "20px",
		},
		[`.`]: {},
	};

	return (
		<Sidebar backgroundColor={colors.gray[900]} rootStyles={sidebarStyle}>
			{/* Toggle */}
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Typography display='inline-block' fontSize='18px'>
					{!collapsed ? "Admin" : ""}
				</Typography>
				<IconButton onClick={() => collapseSidebar()}>
					<MenuOutlinedIcon />
				</IconButton>
			</Box>

			{/* Avtar/name */}
			{!collapsed && (
				<Box mb='25px'>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						mt='20px'
						mb='10px'
					>
						<img
							alt='Profile'
							width='100px'
							height='100px'
							src={`../../assets/profile.png`}
							style={{
								borderRadius: "50%",
								display: "block",
							}}
						/>
					</Box>
					<Box display='flex' flexDirection='column' alignItems='center'>
						<Typography
							variant='h2'
							fontWeight='bold'
							color={colors.primary[500]}
						>
							Niclas V
						</Typography>
						<Typography>Admin stuff</Typography>
					</Box>
				</Box>
			)}
			{/* MENU */}
			<Menu>
				<MenuItem></MenuItem>
			</Menu>
		</Sidebar>
	);
};

export default ProSidebar;
