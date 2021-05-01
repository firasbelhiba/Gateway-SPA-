import React  from 'react'
import { setDisactive,addJob,getJobs } from '../../actions/Job';
import { connect } from 'react-redux';
class InputSkill extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        items: this.props.skills,
        focused: false,
        input: ''
      };
     
      
       
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
      this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }
    componentDidUpdate(){
     
      
      if (this.props.current){
         this.setState({items:[]})
      }
      this.props.setSkills(this.state.items)
      
    }
  
    render() {
      const styles = {
        container: {
          border: '1px solid #ddd',
          padding: '5px',
          borderRadius: '5px',
        },
  
        items: {
          display: 'inline-block',
          padding: '2px',
          border: '1px solid black',
          fontFamily: 'Helvetica, sans-serif',
          borderRadius: '5px',
          marginRight: '5px',
          backgroundColor: 'rgb(211,211,211)',
          cursor: 'pointer'
        },
  
        input: {
          outline: 'none',
          border: 'none',
          fontSize: '14px',
          fontFamily: 'Helvetica, sans-serif',
          marginBottom : 'none'
        }
      };
      
      return (
        <label>
     
          
          <ul style={styles.container}>
            {this.state.items.map((item, i) => 
              <li key={i} style={styles.items} onClick={this.handleRemoveItem(i)}>
                {item}
                
              </li>
            )}
            <input
              style={styles.input}
              value={this.state.input}
              onChange={this.handleInputChange}
              onKeyDown={this.handleInputKeyDown} />
          </ul>
        </label>
      );
    }
  
    handleInputChange(evt) {
      
      this.setState({ input: evt.target.value });
      this.props.setSkills(this.state.items)
    }
  
    handleInputKeyDown(evt) {
      
      if ( evt.keyCode === 13 ) {
        const {value} = evt.target;
        
        this.setState(state => ({
          items: [...state.items, value],
          input: ''
        }));
      }
  
      if ( this.state.items.length && evt.keyCode === 8 && !this.state.input.length ) {
        this.setState(state => ({
          items: state.items.slice(0, state.items.length - 1)
        }));
      }
      this.props.setSkills(this.state.items)
    }
  
    handleRemoveItem(index) {
      return () => {
        this.setState(state => ({
          items: state.items.filter((item, i) => i !== index)
        }));
        this.props.setSkills(this.state.items)
      }
      
    }
  }
  const mapStateToProps = state => ({
    Job: state.Job,
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    { setDisactive , addJob,getJobs }
  )(InputSkill);
 