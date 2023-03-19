import { createContext, useState } from "react";

export const DataContext = createContext(null);





const DataProvider = (props) => {
	const [studentsForTest, setStudentsForTest] = useState([])
	const [studentsForInterview, setStudentsForInterview] = useState([])
	const [studentsPlaced, setStudentsPlaced] = useState([])
	const [showApplicantList, setShowApplicantList] = useState(false)
	const [showTestList, setShowTestList] = useState(false)
	const [showInterviewList, setShowInterviewList] = useState(false)
	const [showPlacementList, setShowPlacementList] = useState(false)

	return (
		<DataContext.Provider value={{
			studentsForTest, setStudentsForTest,
			studentsForInterview, setStudentsForInterview,
			showApplicantList, setShowApplicantList,
			showTestList, setShowTestList,
			showInterviewList, setShowInterviewList,
			studentsPlaced, setStudentsPlaced,
			showPlacementList, setShowPlacementList,
		}}>
			{props.children}
		</DataContext.Provider>
	)
}

export default DataProvider;