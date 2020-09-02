import React from 'react';
import Table from './components/Table/Table';
import './App.css';
import './fonts.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: [],
            idChecked: JSON.parse(localStorage.getItem('idChecked')) === null ? true : JSON.parse(localStorage.getItem('idChecked')),
            nameChecked: JSON.parse(localStorage.getItem('nameChecked')) === null ? true : JSON.parse(localStorage.getItem('nameChecked')),
            yearChecked: JSON.parse(localStorage.getItem('yearChecked')) === null ? true : JSON.parse(localStorage.getItem('yearChecked')),
            colorChecked: JSON.parse(localStorage.getItem('colorChecked')) === null ? true : JSON.parse(localStorage.getItem('colorChecked')),
            valueChecked: JSON.parse(localStorage.getItem('valueChecked')) === null ? true : JSON.parse(localStorage.getItem('valueChecked')),
        }
        this.toggleCheckBox = this.toggleCheckBox.bind(this);
        this.resetCheckboxes = this.resetCheckboxes.bind(this);
    }
    
    
   async componentDidMount() {
    const response = await fetch(`https://reqres.in/api/unknown?per_page=12`);
    const colors = await response.json();
    this.setState({
        colors: colors.data
    });
   } 

   toggleCheckBox(type) {
    switch(type) {
        case 1: {
            localStorage.setItem('idChecked', !this.state.idChecked);
            this.setState({
                idChecked: !this.state.idChecked
            });
            
            break;
        }
        case 2: {
            localStorage.setItem('nameChecked', !this.state.nameChecked);
            this.setState({
                nameChecked: !this.state.nameChecked
            });
            break;
        }
        case 3: {
            localStorage.setItem('yearChecked', !this.state.yearChecked);
            this.setState({
                yearChecked: !this.state.yearChecked
            });
            break;
        }
        case 4: {
            localStorage.setItem('colorChecked', !this.state.colorChecked);
            this.setState({
                colorChecked: !this.state.colorChecked
            });
            break;
        }
        case 5: {
            localStorage.setItem('valueChecked', !this.state.valueChecked);
            this.setState({
                valueChecked: !this.state.valueChecked
            });
            break;
        }
        default: {
            break;
        }
    }
   }

   resetCheckboxes() {
    localStorage.setItem('idChecked', true);
    localStorage.setItem('nameChecked', true);
    localStorage.setItem('yearChecked', true);
    localStorage.setItem('colorChecked', true);
    localStorage.setItem('valueChecked', true);
    this.setState({
        idChecked: true,
        nameChecked: true,
        yearChecked: true,
        colorChecked: true,
        valueChecked: true
    });
   }
   
   render() {
        return (
            <div className="App">
                <Table colors={this.state.colors}
                    idChecked={this.state.idChecked}
                    nameChecked={this.state.nameChecked}
                    yearChecked={this.state.yearChecked}
                    colorChecked={this.state.colorChecked}
                    valueChecked={this.state.valueChecked}
                    toggleCheckBox={this.toggleCheckBox}
                    resetCheckboxes={this.resetCheckboxes}
                />
            </div>
        );
   }
  
}

export default App;
