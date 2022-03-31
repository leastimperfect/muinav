import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';

export default function Header() {
	return <Box>
		<AppBar position="relative" elevation={1} sx={{zIndex: 1}}>
			<Toolbar variant="dense">
				<Typography variant="h6" sx={{flexGrow: 1}}>
					cra-template-muinav
				</Typography>

				<Button color="inherit" edge="end" component={RouterLink} to="/sign-in">
					Sign in
				</Button>

			</Toolbar>
		</AppBar>
	</Box>;
}