import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/data-actions';
import Users from '../components/users';
import Pagination from '../components/pagination';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      usersPerPage: 5,
      randomUser: {
        name: null,
        surname: null,
      },
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      this.setState({ users: nextProps.users });
      console.log(this.state.users);
    }
    setInterval(() => {
      const random = Math.floor(Math.random() * 19);
      this.setState({ randomUser: this.props.users[random] });
    }, 8000);
  }

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  randomUser() {
    const random = Math.floor(Math.random() * 6) + 1;
  }

  render() {
    const users = this.props.users;
    const indexOfLastPost = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.usersPerPage;
    const currentUsers = this.state.users.slice(indexOfFirstPost, indexOfLastPost);
    if (this.state.users === []) return <p>Loading...</p>;
    const rndUsr = this.state.randomUser ? this.state.randomUser : null;
    return (
      <StyledGrid>
        <div>
          <Users users={currentUsers} />
          <Pagination
            paginate={this.paginate}
            totalUsers={users.length}
            usersPerPage={this.state.usersPerPage}
          />
        </div>
        <div>
          <p>Random User:</p>
          {this.state.randomUser.name} {this.state.randomUser.surname}
        </div>
      </StyledGrid>
    );
  }
}

const mapStateToProps = state => ({
  users: state.data.users,
});

export default connect(mapStateToProps, { getUsers })(Home);
