import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import SectionForm from './SectionForm/SectionForm';
import edit from './edit'


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [], // All sections
			heading: '', // Main Heading
			writting: false,
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1>{this.state.heading}</h1>
					<div>
						{this.state.sections.map(item => {
							return(
								<div key={this.state.sections.indexOf(item)}>
									<p className={item.headingChosen}>{item.heading}</p>
									<p className="edit-icon">
										{item.paragraph}
										<FontAwesomeIcon icon={faEdit} />
									</p>
									
								</div>
							)
						})}
					</div>
					{this.state.heading !== '' 
						?
						// wantText tells the form if we want the main heading or a section
						<SectionForm  dataToApp={this.dataSectionForm} wantText={true} formFor='creating'/>
						:
						<SectionForm dataToApp={this.dataSectionForm} wantText={false} formFor='creating'/>
					}
				</div>
			</div>
		);
	}

	// Event listener for editting
	edit = e => edit(e, this)

	// Manages data that came from Section Form
	dataSectionForm = data => {
		// If currently editing
		if (data.writting) {
			this.setState({
				writting: true,
			})
		}
		// Let's see if it's only heading or if it's a section
		else if (data.paragraph === '') {
			this.setState({
				heading: data.heading,
				writting: false, // Not necessay, but just in case
			})
		} else {
			let sections = this.state.sections
			sections.push(data);

			this.setState({
				sections: sections,
				writting: false,
			})
		}
	}
}

export default App;

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
 