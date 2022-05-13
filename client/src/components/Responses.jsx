import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const Responses = (props) => {
	const { responses } = props;
	return (
		<>
			<h2>Responses</h2>
			{responses.map((response, index) => {
				return (
					<TableContainer
						key={index}
						component={Paper}
						sx={{
							backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
							marginBottom: "20px",
						}}
					>
						<Table>
							<TableBody>
								<TableRow sx={{ verticalAlign: "top", border: "hidden" }}>
									<TableCell>
										<strong>Prompt:</strong>
									</TableCell>
									<TableCell>{response.req}</TableCell>
								</TableRow>
								<TableRow sx={{ verticalAlign: "top", border: "hidden" }}>
									<TableCell>
										<strong>Response:</strong>
									</TableCell>
									<TableCell>{response.res}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				);
			})}
		</>
	);
};

export default Responses;
