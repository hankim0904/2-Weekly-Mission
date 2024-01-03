import { useState, useEffect } from "react";

import useAsync from "../hooks/useAsync";
import { endpoints, errorMessages, getApiInfo } from "../api/api";

import FolderHeader from "../components/FolderHeader";
import FolderMain from "../components/FolderMain";

function FolderPage() {
  const [folderList, setFolderList] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({
    id: "",
    name: "전체",
  });
  const [isfolderListLoading, folderListError, getFolderListAsync] =
    useAsync(getApiInfo);

  const loadFolderList = async () => {
    const result = await getFolderListAsync(
      endpoints.userFolders,
      errorMessages.userFolders
    );
    if (!result) return;

    const { data } = result;

    setFolderList(data);
  };

  useEffect(() => {
    loadFolderList();
  }, [currentFolder]);

  return (
    <>
      <FolderHeader folderList={folderList} />
      <FolderMain
        folderList={folderList}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
      />
    </>
  );
}

export default FolderPage;
