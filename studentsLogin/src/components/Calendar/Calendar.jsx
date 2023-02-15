import React, { useState } from "react";

// calendar
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css";

//mui
import MenuBox from '../Constants/UI/menu/MenuBox'
import { CalendarBody, CalendarContainer, CurretPath, LeftBoxDummy, MainConatiner, ModelBody } from './CalendarStyle'
import { Box, Modal, Typography } from "@mui/material";



const locales = {
	'en-US': enUS,
}
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
})


const events = [
	{
		title: "Interview",
		eventOf: 'Google',
		allDay: true,
		start: new Date(2023, 1, 1, 12, 30, 0),
		end: new Date(2023, 1, 1),
	},
	{
		title: "Test",
		eventOf: 'Microsoft',
		start: new Date(2023, 1, 7, 14, 0,),
		end: new Date(2023, 1, 7),
	},
	{
		title: "Conference",
		eventOf: 'Ubar',
		start: new Date(2023, 1, 20, 10, 30),
		end: new Date(2023, 1, 20),
	},
];

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const PlacementCalendar = () => {
	const [isModelOpen, setIsModelOpen] = useState(false);
	const [dataInModdal, setdataInModdal] = useState({})

	function addZero (i) {
		if (i < 10) { i = "0" + i }
		return i;
	}

	const handleOpenModel = (event) => {
		// console.log(event)
		const d = event.start;
		let h = addZero(d.getHours());
		let m = addZero(d.getMinutes());
		let time = h + ':' + m;

		let eventYear = event.start.getFullYear();
		let eventDate = event.start.getDate();
		let eventMonth = month[d.getMonth()];

		let date = eventDate + ' - ' + eventMonth + ' - ' + eventYear

		setdataInModdal({
			companyName: event.eventOf,
			event: event.title,
			date: date,
			time: time,
		});
		setIsModelOpen(true)
	}
	// console.log(dataInModdal)

	return (
		<MainConatiner>
			<CalendarContainer>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<CalendarBody>
					<CurretPath >P.I.C. - CALENDAR</CurretPath>
					<Calendar
						selectable={true}
						localizer={localizer}
						events={events}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 500, margin: "50px",  }}
						onSelectEvent={(event) => handleOpenModel(event)}
					/>
				</CalendarBody>

				<Modal
					open={isModelOpen}
					onClose={() => setIsModelOpen(false)}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<ModelBody>
						<Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center' color='#367D43'>
							<b>{dataInModdal.companyName}</b>
						</Typography>
						<Box padding='10px'>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								<b>Event: </b> {dataInModdal.event}
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								<b>Date: </b> {dataInModdal.date}
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								<b>Time: </b> {dataInModdal.time}
							</Typography>
						</Box>
					</ModelBody>
				</Modal>

			</CalendarContainer>

		</MainConatiner>
	)
}

export default PlacementCalendar