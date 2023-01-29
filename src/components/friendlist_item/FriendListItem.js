import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          {friend.isOnline ? (
            <span className={css.online}>{friend.isOnline}</span>
          ) : (
            <span className={css.status}>{friend.isOnline}</span>
          )}
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
