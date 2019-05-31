import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/user';
import UserContainer from './UserContainer';

const Users = ({ getUsers, user: { loading, users } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Fragment>
      <div>Welcome to the users page</div>
      {loading ? (
        <span>Loading users...</span>
      ) : (
        <div className='users-container'>
          {users.map(user => (
            <UserContainer key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
