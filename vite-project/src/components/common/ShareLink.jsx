import kakaoIcon from "./images/kakao.svg";
import facebookIcon from "./images/facebook.svg";
import linkcopyIcon from "./images/linkcopy.svg";

import "./shareLink.css";

function ShareLink({ currentFolder }) {
  const userId = 1;
  console.log(currentFolder);
  const currentURL = `http://localhost3000/shared?user=${userId}&folder=${currentFolder}`;

  const clipboard = () => {
    const result = navigator.clipboard.writeText(currentURL);
    alert("클립보드에 링크가 복사되었어요.");
    return result;
  };

  return (
    <ul className="share-list">
      <li className="share-list-item" onClick={clipboard}>
        <img src={kakaoIcon} alt="카카오톡 링크 이미지" />
        <p>카카오톡</p>
      </li>
      <li className="share-list-item" onClick={clipboard}>
        <img src={facebookIcon} alt="카카오톡 링크 이미지" />
        <p>페이스북</p>
      </li>
      <li className="share-list-item" onClick={clipboard}>
        <img src={linkcopyIcon} alt="카카오톡 링크 이미지" />
        <p>링크복사</p>
      </li>
    </ul>
  );
}

export default ShareLink;
