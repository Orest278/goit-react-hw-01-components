import PropTypes from 'prop-types';
import {FriendListItem} from "./FriendListItem";
import s from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (<ul className={s.friendList}>
        {friends.map(friend => {
             return <FriendListItem key={friend.id} {...friend} />
        }
           )}
</ul>
    )
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};