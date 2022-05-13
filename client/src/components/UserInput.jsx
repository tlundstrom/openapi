import { Box, Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const UserInput = (props) => {
	const { responses, setResponses } = props;
	const [prompt, setPrompt] = useState("");
	const data = {
		prompt: prompt,
		temperature: 0.5,
		max_tokens: 128,
		top_p: 1.0,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
	};

	const handleSubmit = async (e) => {
		let newResponses = [];
		e.preventDefault();
		axios
			.post("https://api.openai.com/v1/engines/text-curie-001/completions", data, {
				headers: {
					Authorization: `Bearer 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`,
				},
			})
			.then((res) => {
				//console.log(res.data.choices);
				newResponses = [{ req: prompt, res: res.data.choices[0].text }, ...responses];
				setResponses(newResponses);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Box my={4} onSubmit={handleSubmit} component="form" noValidate autoComplete="off">
			<TextField
				sx={{ width: "100%", minHeight: "48px" }}
				id="outlined-multiline-static"
				label="Enter prompt"
				multiline
				rows={6}
				defaultValue="Default Value"
				onChange={(e) => {
					setPrompt(e.target.value);
				}}
			/>
			<Grid mt={1} container justifyContent="flex-end">
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</Grid>
		</Box>
	);
};

export default UserInput;
