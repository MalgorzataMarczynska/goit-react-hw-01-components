import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends, children }) => {
  return <ul className={css.friendlist}>{children}</ul>;
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
