import logo from "../../../images/landing/logo.svg";
import star from "../../../images/folder/star.svg";
import kebab from "../../../images/folder/kebab.svg";

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

function FolderMainCard({ item, target, rel }) {
  const { created_at, url, title, description, image_source } = item;

  return (
    <li className="card">
      <button className="star-button">
        <img src={star} alt="별모양 버튼" />
      </button>
      <a href={url} target={target} rel={rel}>
        {image_source ? (
          <div className="card-img-selected">
            <img src={image_source} alt={title} />
          </div>
        ) : (
          <div className="card-img-default">
            <img src={logo} alt="기본 이미지" />
          </div>
        )}
        <div className="container">
          <div className="bundle">
            <span className="card-ago">{countAgo(created_at)}</span>
            <button className="kebab-button">
              <img src={kebab} alt="케밥 버튼" />
            </button>
          </div>
          <p className="card-description">{description}</p>
          <span className="card-date">{formatDate(created_at)}</span>
        </div>
      </a>
    </li>
  );
}

export default FolderMainCard;
