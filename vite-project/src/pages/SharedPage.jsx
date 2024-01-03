import { useEffect, useState } from "react";
import { endpoints, errorMessages, getApiInfo } from "../api/api";
import SharedHeader from "../components/SharedHeader";
import SharedMain from "../components/SharedMain";
import useAsync from "../hooks/useAsync";

function SharedPage() {
  const [folder, setFolder] = useState({});
  const [links, setLinks] = useState([]);
  const [isFolderLoading, folderError, getFolderAsync] = useAsync(getApiInfo);

  const loadFolder = async () => {
    const result = await getFolderAsync(endpoints.folder, errorMessages.folder);
    if (!result) return;

    const { folder } = result;
    setFolder(folder);
    setLinks(folder.links);
  };

  useEffect(() => {
    loadFolder();
  }, []);
  console.log(isFolderLoading);

  return (
    <>
      {!isFolderLoading && <SharedHeader folder={folder} />}
      <SharedMain links={links} />
    </>
  );
}

export default SharedPage;
