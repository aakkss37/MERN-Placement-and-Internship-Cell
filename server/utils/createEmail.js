
export const createEmailHTML = (name)=> {
	const emailHTMLbody = `
<html>

<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link
		href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
		rel="stylesheet">
	<style>
		*{
			margin: 0;
			padding: 0;
		}
		body{
			background-color: rgb(204, 216, 204);
			color: rgb(51, 51, 51);
			font-family: 'Ubuntu', sans-serif;
			line-height: 1.7rem;
			font-size: 1.1rem;
		}
		.email_container{
			width: 100%;
		}

		.email_body{
			max-width: 400px;
			margin: auto;
			margin-top: 3rem;
		}
		h2{
			text-align: center;
			color: rgb(51, 51, 51);
			margin-bottom: 1rem;
		}
		b{
			color: green;
		}
		button{
			margin: 2rem;
			margin-left: 35%;
			font-size: 16px;
			padding: 10px 50px;
			background-color: green;
			cursor: pointer;
			border: none;
			outline: none;
			border-radius: 5px;
		}
		a{
			text-decoration: none;
			color: aliceblue;
		}
	</style>
</head>

<body>
	<div class="email_container">

		<div class="email_body">
			<h2>🎉 Congratulations! 🎉</h2>
			<p>Dear Student,</p>
			<p>We would like to inform you that <b>Google</b> been listed in out PIC for the recuruitment process</p>
			<div>
				<h4>Job Details: </h4>
				<p>Job Type: Full-time Job</p>
				<p> Job Role: SDE</p>
				<p>CTC: INR 1600000</p>
				<p>Job Location: Bangalore</p>
			</div>
			<button><a href="http://localhost:3000/placement-drive">Apply</a></button>
		</div>
		
	</div>

</body>

</html>
	`
}