import React, { useState } from "react";
import logo from "../../../images/landing/logo.svg";
import star from "../../../images/folder/star.svg";
import kebab from "../../../images/folder/kebab.svg";
import "./FolderMainCard.css";
import Modal from "./common/Modal";
import FolderList from "./common/FolderList";
import Input from "./common/Input";
import Button from "./common/Button";

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

function FolderMainCard({ item, target, rel, folderList }) {
  const { created_at, url, title, description, image_source } = item;
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    setIsSelectMenuOpen((prev) => !prev);
  };

  const handleSelectClose = () => {
    setIsSelectMenuOpen(false);
  };

  const handleRemoveModal = () => {
    setIsRemoveModalOpen(true);
  };

  const handleAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setIsRemoveModalOpen(false);
  };

  return (
    <li className="card" onClick={() => setIsSelectMenuOpen(false)}>
      <button className="star-button">
        <img src={star} alt="별모양 버튼" />
      </button>

      {image_source ? (
        <a href={url} target={target} rel={rel}>
          <div className="card-img-selected">
            <img src={image_source} alt={title} />
          </div>
        </a>
      ) : (
        <div className="card-img-default">
          <img src={logo} alt="기본 이미지" />
        </div>
      )}
      <div className="container">
        <div className="bundle">
          <span className="card-ago">{countAgo(created_at)}</span>
          <div>
            <button className="kebab-button" onClick={handleToggleMenu}>
              <img src={kebab} alt="케밥 버튼" />
            </button>

            {isSelectMenuOpen && (
              <ul className={`kebab-menu ${isSelectMenuOpen ? "" : "hide"}`}>
                <li>
                  <button onClick={handleRemoveModal}>삭제하기</button>
                </li>
                <li>
                  <button onClick={handleAddModal}>폴더에 추가</button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <p className="card-description">{description}</p>
        <span className="card-date">{formatDate(created_at)}</span>
      </div>

      {isRemoveModalOpen && (
        <Modal modalTitle="링크 삭제" subTitle={url} onClose={handleCloseModal}>
          <div className="modal-content">
            <Button variant="remove" size="lg">
              삭제하기
            </Button>
          </div>
        </Modal>
      )}

      {isAddModalOpen && (
        <Modal
          modalTitle="폴더에 추가"
          subTitle={url}
          onClose={handleCloseModal}
        >
          <div className="modal-content">
            <FolderList folderList={folderList} />
            <Button variant="default" size="lg">
              추가하기
            </Button>
          </div>
        </Modal>
      )}
    </li>
  );
}

export default FolderMainCard;
