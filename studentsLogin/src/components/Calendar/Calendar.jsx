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
import { CalendarBody, CalendarContainer, LeftBoxDummy, MainConatiner, modalStyle } from './CalendarStyle'
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
		title: "Text",
		eventOf: 'Microsoft',
		start: new Date(2023, 1, 7),
		end: new Date(2023, 1, 7),
	},
	{
		title: "Conference",
		eventOf: 'Ubar',
		start: new Date(2023, 1, 20),
		end: new Date(2023, 1, 20),
	},
];

const PlacementCalendar = () => {
	
	return (
		<MainConatiner>
			<CalendarContainer>

				<MenuBox style={{ boxShadow: '1px 1px 5px 4px rgb(0 0 0 / 30 %)' }} />

				<LeftBoxDummy /> {/* having no content inside it.. just Helping mainBox not to occupy whole area and overlap the Menu */}

				<CalendarBody>
					<Calendar
						selectable={true}
						localizer={localizer}
						events={events}
						startAccessor="start"
						endAccessor="end"
						style={{ height: 500, margin: "50px" }}
					/>
				</CalendarBody>

				

			</CalendarContainer>

		</MainConatiner>
	)
}

export default PlacementCalendar