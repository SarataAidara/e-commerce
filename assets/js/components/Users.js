import React, {Component} from 'react';
import axios from 'axios';
    
class Users extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
       axios.get(`http://localhost:8000/api/users`).then(users => {
           this.setState({ users: users.data, loading: false})
       })
    }
    
    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                       <p>Test</p>
                    </div>
                </section>
            </div>
        )
    }
}
export default Users;