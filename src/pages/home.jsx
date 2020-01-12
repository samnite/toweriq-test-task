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
`;

const StyledContainer = styled.div`
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
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.props.users) {
      this.setState({ users: nextProps.users });
    }
  }

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const users = this.props.users;
    const indexOfLastPost = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.usersPerPage;
    const currentUsers = this.state.users.slice(indexOfFirstPost, indexOfLastPost);
    if (this.state.users === []) return <p>Loading...</p>;
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
        <div>blabla</div>
      </StyledGrid>
    );
  }
}

const mapStateToProps = state => ({
  users: state.data.users,
});

export default connect(mapStateToProps, { getUsers })(Home);
