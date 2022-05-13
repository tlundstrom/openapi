import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Responses from "../components/Responses";
import UserInput from "../components/UserInput";

const theme = createTheme();

const Main = (props) => {
	const [responses, setResponses] = useState([]);
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<CssBaseline />
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						minHeight: "100vh",
						overflow: "auto",
						maxWidth: "720px",
					}}
				>
					<Container maxWidth="50%" sx={{ mt: 8, mb: 4 }}>
						<h1>Fun with AI</h1>
						<UserInput responses={responses} setResponses={setResponses} />
						<Responses responses={responses} setResponses={setResponses} />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default Main;
