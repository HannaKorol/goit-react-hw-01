import FriendListItem from "../FriendListItem/FriendListItem";
import s from './FriendList.module.css'

export default function FriendList ({ friends }) {
    return (
      <ul className= {s.list}>
      {friends.map((f) => {
        return (
          <li key={f.id}>
                <FriendListItem
                    avatar={f.avatar}
                    name={f.name}
                    isOnline={f.isOnline}/>
          </li>
        );
      })}
    </ul>
    )
};
