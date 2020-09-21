import React,{Component} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from  '@material-ui/core/InputLabel';


const customStyles={
    content:{
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform:'translate(-50% , -50%)'
}
}
const tabContainer=function(props)
{    
    
    return(
         <Typography component='div' style={{padding:0,textAlign:'center'}}>
        {props.children};
        </Typography>
)
}
class Header extends Component{
    constructor()
    {
        super();
        this.state={
            modalIsOpen:false,
             value:0

        };
    }


openModalHandler=()=>
{
this.setState({modalIsOpen:true})
    }

    closeModalHandler=()=>
    {
        this.setState(
            {
                modalIsOpen:false
            });
    }
    tabChangeHandler=(event,value)=>
    {
          this.setState({value});
    }

    
    
    render()
    {
        return(
                 <div>
            <header className="app-header">
            <img src={logo}  className='app-logo'alt='logo'/>
            <div className="login-btn">
             <Button variant="contained" color="default"  onClick={this.openModalHandler}> Login</Button>       
            </div>
            </header>
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} 
            contentLabel="Login" 
            onRequestClose={this.closeModalHandler}
            style={customStyles}>
               <Tabs value={this.state.value} className="tabs" onChange={this.tabChangeHandler}>
                   <Tab label='Login'/>
                   <Tab label="Register"/>
               </Tabs>
                  <tabContainer>
                   <FormControl required>
                       <InputLabel htmlFor="username">Username</InputLabel>
                       <Input id="userName" type="text"/>
                   </FormControl><br/> <br/>

                   <FormControl required>
                       <InputLabel htmlFor="password">password</InputLabel>
                       <Input id="password" type="password"/>
                   </FormControl><br/> <br/>

                   <Button color='primary' variant="contained"> LOGIN </Button>
                  </tabContainer>
            </Modal>
            </div>
        )
    }
}
export default Header;