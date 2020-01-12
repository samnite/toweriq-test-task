import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/data-actions';

class Home extends React.Component {
  state = {
    users: [],
    currentPage: 1,
    usersPerPage: 5,
  };

  getCurrentUsers = () => {
    const indexOfLastPost = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.usersPerPage;
    const currentUsers = this.props.users.slice(indexOfFirstPost, indexOfLastPost);
  };

  componentDidMount() {
    this.props.getUsers();
    this.setState({ users: this.props.users });
  }

  render() {
    console.log(this.props.users);
    return <div>Home Page</div>;
  }
}

const mapStateToProps = state => ({
  users: state.data.users,
});

export default connect(mapStateToProps, { getUsers })(Home);
