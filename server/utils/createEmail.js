
export const createEmailHTML = (companyName, jobType, jobRole, CTC, jobLocation) => {
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
					color: white;
				}
				.joblocation{
					margin-bottom: 1rem;
				}
			</style>
		</head>

		<body>
			
			<div class="email_container">

				<div class="email_body">
					<h2>🎉 Congratulations! 🎉</h2>
					<p>Dear Student,</p>
					<p>We would like to inform you that <b>${companyName}</b> been listed in out PIC for the recuruitment process.</p>
					<p>We are happy to to inform you that you are eligible for this application.</p>
					<div class="job_detail">
						<h4>Job Details: </h4>
						<p>Job Type: ${jobType}</p>
						<p> Job Role: ${jobRole}</p>
						<p>CTC: INR ${CTC}</p>
						<p class="joblocation">Job Location: ${jobLocation}</p>
						<p>Do not miss the opportunity, click the apply button bellow 👇🏾
						<a href="http://localhost:3000/placement-drive"><button>Apply</button></a>
					</div>
				</div>
				
			</div>

		</body>

		

		</html>
	`
	return emailHTMLbody;
}