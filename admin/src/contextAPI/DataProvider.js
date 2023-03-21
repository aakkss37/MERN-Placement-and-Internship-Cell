import { createContext, useState } from "react";

export const DataContext = createContext(null);





const DataProvider = (props) => {
	const [studentsForTest, setStudentsForTest] = useState([])
	const [studentsForInterview, setStudentsForInterview] = useState([])
	const [studentsPlaced, setStudentsPlaced] = useState([])


	return (
		<DataContext.Provider value={{
			studentsForTest, setStudentsForTest,
			studentsForInterview, setStudentsForInterview,
			studentsPlaced, setStudentsPlaced,
		}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider;