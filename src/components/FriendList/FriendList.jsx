import FriendListItem from "../FriendListItem/FriendListItem";
import s from './FriendList.module.css'

export default function FriendList ({ friends }) {
    return (
      <ul className= {s.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}/>
          </li>
        );
      })}
    </ul>
    )
};
