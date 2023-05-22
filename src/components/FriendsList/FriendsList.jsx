import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import css from './FriendsList.module.css';

export const FriendsList = ({friends}) => {
    return (
      <ul className={css.friendsList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
    )};

    FriendsList.propTypes = {
      friends: PropTypes.arrayOf(
        PropTypes.shape({
          isOnline: PropTypes.bool.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    };
