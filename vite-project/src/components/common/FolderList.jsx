import "./FolderList.css";

const FolderList = ({ folderList }) => {
  return (
    <ul className="add-folder-list">
      {folderList.map((item) => (
        <li key={item.id} className="add-folder-list-item">
          <p>{item.name}</p>
          <span>{item.link.count}개 링크</span>
        </li>
      ))}
    </ul>
  );
};

export default FolderList;
