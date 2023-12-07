import logo from "../../../images/landing/logo.svg";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function countAgo(value) {
  const date = new Date(value);
  const today = new Date();

  const timeDiff = today.getTime() - date.getTime();

  const minute = timeDiff / 1000 / 60;
  const hour = timeDiff / 1000 / 60 / 60;
  const day = timeDiff / 1000 / 60 / 60 / 24;
  const month = timeDiff / 1000 / 60 / 60 / 24 / 30;
  const year = timeDiff / 1000 / 60 / 60 / 24 / 30 / 12;

  if (year >= 1) {
    return year < 2 ? "1 year ago" : `${Math.floor(year)} years ago`;
  } else if (month >= 1) {
    return month < 2 ? "1 month ago" : `${Math.floor(month)} months ago`;
  } else if (day >= 1) {
    return day < 2 ? "1 day ago" : `${Math.floor(day)} days ago`;
  } else if (hour >= 1) {
    return hour < 2 ? "1 hour ago" : `${Math.floor(hour)} hours ago`;
  } else {
    return minute < 2 ? "1 minute ago" : `${Math.floor(minute)} minutes ago`;
  }
}

function SharedMainCard({ item, target, rel }) {
  const { createdAt, url, title, description, imageSource } = item;

  return (
    <li className="card">
      <a href={url} target={target} rel={rel}>
        {imageSource ? (
          <div className="card-img-selected">
            <img src={imageSource} alt={title} />
          </div>
        ) : (
          <div className="card-img-default">
            <img src={logo} alt="기본 이미지" />
          </div>
        )}
        <div className="container">
          <span className="card-ago">{countAgo(createdAt)}</span>
          <p className="card-description">{description}</p>
          <span className="card-date">{formatDate(createdAt)}</span>
        </div>
      </a>
    </li>
  );
}

export default SharedMainCard;
