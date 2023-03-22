import { createContext, useState } from "react";

export const DataContext = createContext(null);





const DataProvider = (props) => {
	const [studentsForTest, setStudentsForTest] = useState([])
	const [studentsForInterview, setStudentsForInterview] = useState([])
	const [studentsPlaced, setStudentsPlaced] = useState([])

	const [openFormErrorSnackbar, setOpenFormErrorSnackbar] = useState(false);
	const [openFormSucessSnackbar, setOpenFormSucessSnackbar] = useState(false);

	const [openDeleteSucessSnakebar, setOpenDeleteSucessSnakebar] = useState(false);


	return (
		<DataContext.Provider value={{
			studentsForTest, setStudentsForTest,
			studentsForInterview, setStudentsForInterview,
			studentsPlaced, setStudentsPlaced,

			openFormErrorSnackbar, setOpenFormErrorSnackbar,
			openFormSucessSnackbar, setOpenFormSucessSnackbar,

			openDeleteSucessSnakebar, setOpenDeleteSucessSnakebar


		}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider;