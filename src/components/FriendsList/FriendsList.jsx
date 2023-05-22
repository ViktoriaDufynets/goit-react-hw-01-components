import { FriendListItem } from "./FriendListItem";
import css from './friendsList.module.css';

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