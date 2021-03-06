import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.users !== this.props.users) {
      this.setState({ users: nextProps.users });
    }
    setInterval(() => {
      const random = Math.floor(Math.random() * 19);
      this.setState({ randomUser: this.props.users[random] });
    }, 8000);
  }

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { users } = this.props;
    const { currentPage, usersPerPage, randomUser } = this.state;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = this.state.users.slice(indexOfFirstUser, indexOfLastUser);
    if (this.state.users === []) return <p>Loading...</p>;
    return (
      <StyledGrid>
        <div>
          <Users users={currentUsers} />
          <Pagination
            paginate={this.paginate}
            totalUsers={users.length}
            usersPerPage={usersPerPage}
          />
        </div>
        <div>
          <p>Random User:</p>
          <h3>
            {randomUser.name} {randomUser.surname}
          </h3>
        </div>
      </StyledGrid>
    );
  }
}

Home.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.data.users,
});

export default connect(mapStateToProps, { getUsers })(Home);
