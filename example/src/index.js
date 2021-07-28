import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {IntlProvider} from "react-intl";


const messagesInJP = {
	fish:'sanaka',
    Image: 'Gazō',
    'Your Text Go Here': 'Your Text Go Here',
    'Button Label': 'Button Label',
    'Heading': 'Heading'
}

ReactDOM.render(
	<IntlProvider messages={messagesInJP} locale="fr" defaultLocale="en">
		<App />
	</IntlProvider>
	, document.getElementById('root'))
