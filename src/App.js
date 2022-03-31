import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import {useState} from "react";
import {Stack} from "@mui/material";

export default function App() {
	const
		[drawerOpen, drawerToggle] = useState( false );
	const
		drawerWidthEx    = 200,
		drawerWidthCmp   = 56,
		drawerWidth      = drawerOpen ? drawerWidthEx : drawerWidthCmp,
		drawerTransition = {transitionDuration: '.3s', transitionTimingFunction: '', transitionProperty: 'margin'},
		drawerProps      = {
			drawerOpen, drawerToggle, drawerWidthEx, drawerWidth, drawerWidthCmp, drawerTransition
		};
	return (
		<Stack sx={{height: '100vh'}}>
			<Header {...drawerProps} />
			<Sidebar {...drawerProps} />
			<Box sx={{overflow: 'auto',flexGrow: 1, ml: drawerWidth + 'px', ...drawerTransition, p: 3}}>
					<Outlet/>
			</Box>
			<Footer sx={{ml: drawerWidth + 'px', ...drawerTransition, py: 1, px: 3}}/>
		</Stack>
	)
};
