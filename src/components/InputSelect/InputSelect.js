import React from 'react';
import './InputSelect.css';

class InputSelect extends React.Component {
  state = {
    options: [],
    selectedOption: []
  }

  

  componentDidMount() {
    this.setState({options: this.props.options})
  };

  async onChangeOption(e) {
    await this.setState({selectedOption: e.target.value});
    await this.props.updateSelection(this.state.selectedOption);
  }

  render() {
    return (
      <div>
        <select onChange={this.onChangeOption.bind(this)}>
          <option value="">Please select an option</option>
          {this.state.options.map(option => (
            option.type === "model" ?
            <option 
              value={option.id} 
              key={option.id}>{option.name}</option>
            : null
          ))}
        </select>
      </div>
    )
  }
}

export default InputSelect;