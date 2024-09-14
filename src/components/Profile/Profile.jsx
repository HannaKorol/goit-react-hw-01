export default function Profile({username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", followers, views, likes}) {
  return (
    <div>
  <div>
    <img
      src= {avatar}
      alt="User avatar"
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
  );
};