import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getLinkListQueryKey } from '@/api/queryKeys';
import { getLinkListApi } from '@/api/apiCollection';

import SharedMainCard from '@/components/SharedMainCard';
import * as S from '@/styles/Main';

import { Link } from '@/types/SharedType';
import Image from 'next/image';

const MainSearchBox = ({ className }: { className: string }) => (
  <form className={className}>
    <button className="search-img">
      <Image src="/images/search.svg" width={16} height={16} alt="search" />
    </button>
    <input className="search-bar" placeholder="링크를 검색해 보세요." />
  </form>
);

function SharedMain() {
  const router = useRouter();
  const folderId = router.query['folderId'];

  const {
    data: linkData,
    isError: isLinkError,
    isLoading: isLinkLoading,
  } = useQuery({
    queryKey: getLinkListQueryKey(folderId),
    queryFn: () => getLinkListApi(folderId),
    staleTime: 1000 * 60 * 5,
  });

  if (isLinkLoading) {
    return <div>Loading...</div>;
  }

  if (isLinkError) {
    return <div>Error!</div>;
  }

  return (
    <S.SharedMain>
      <MainSearchBox className="search" />
      <ul className="cards">
        {linkData.map((link: Link) => {
          return (
            <SharedMainCard
              key={link.id}
              link={link}
              target="_blank"
              rel="noreferrer"
            />
          );
        })}
      </ul>
    </S.SharedMain>
  );
}

export default SharedMain;
