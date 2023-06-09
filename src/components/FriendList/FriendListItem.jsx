import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<li className={s.item}>
        <span className={isOnline ? s.online : s.offline}></span>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
    </li>)
};

FriendListItem.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}