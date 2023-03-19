import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProvider from './contextAPI/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<DataProvider >
		<App />
	</DataProvider>
);

