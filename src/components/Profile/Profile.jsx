import css from './profile.module.css';

export const Profile = ({username, tag, location, avatar,   stats: { followers, views, likes }}) => {
    return (
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
      width="50px"
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.labelsandquantity}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>1000</span>
    </li>
    <li className={css.labelsandquantity}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>2000</span>
    </li>
    <li className={css.labelsandquantity}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>3000</span>
    </li>
  </ul>
</div>
)};

// Profile.prototype = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string,
//   stats: PropTypes.shape({
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number,
//   }),
// };