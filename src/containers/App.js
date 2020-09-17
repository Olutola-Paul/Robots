import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Search from '../components/Search';
import Scroll from '../components/Scroll';



class App extends Component{
    constructor(){
        super() 
        this.state ={
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    render() {
        const {robots, searchField} = this.state;
        const  filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1 className='tc'>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className='f1'>Robot Friends</h1>
                    <Search searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots = {filterRobots}/>
                    </Scroll>
                </div>
            );
    }
}

export default App;