import { createContext, useState } from "react";

export const DataContext = createContext(null);





const DataProvider = (props) => {

	const [isLogin, setIsLogin] = useState(false);

	const [openSucessSnackbar, setOpenSucessSnackbar,] = useState(false);
	
	const [studentsForTest, setStudentsForTest] = useState([])
	const [studentsForInterview, setStudentsForInterview] = useState([])
	const [studentsPlaced, setStudentsPlaced] = useState([])

	const [openFormErrorSnackbar, setOpenFormErrorSnackbar] = useState(false);
	const [openFormSucessSnackbar, setOpenFormSucessSnackbar] = useState(false);

	const [openDeleteSucessSnakebar, setOpenDeleteSucessSnakebar] = useState(false);
	const [openUpdateSucessSnakebar, setOpenUpdateSucessSnakebar] = useState(false);

	const [openPasswordChangeSucessSnakebar, setOpenPasswordChangeSucessSnakebar] = useState(false);
	const [openLogoutSucessSnakebar, setOpenLogoutSucessSnakebar] = useState(false);



	return (
		<DataContext.Provider value={{
			isLogin, setIsLogin,

			studentsForTest, setStudentsForTest,
			studentsForInterview, setStudentsForInterview,
			studentsPlaced, setStudentsPlaced,

			openSucessSnackbar, setOpenSucessSnackbar,

			openFormErrorSnackbar, setOpenFormErrorSnackbar,
			openFormSucessSnackbar, setOpenFormSucessSnackbar,

			openDeleteSucessSnakebar, setOpenDeleteSucessSnakebar,
			openUpdateSucessSnakebar, setOpenUpdateSucessSnakebar,

			openPasswordChangeSucessSnakebar, setOpenPasswordChangeSucessSnakebar,
			openLogoutSucessSnakebar, setOpenLogoutSucessSnakebar,


		}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider;