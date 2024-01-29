import Image from 'next/image';
import styled from 'styled-components';

const ShareList = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  justify-content: center;
`;

const ShareListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ShareIcon = styled.div`
  width: 42px;
  height: 42px;
  background-color: rgba(157, 157, 157, 0.04);
  position: relative;
`;

const ShareText = styled.p`
  font-size: 13px;
  color: var(--gray100);
  margin-top: 10px;
  white-space: nowrap;
`;

function ShareLink() {
  const currentURL = window.location.href;

  const clipboard = () => {
    const result = navigator.clipboard.writeText(currentURL);
    alert('클립보드에 링크가 복사되었어요.');
    return result;
  };

  return (
    <ShareList>
      <ShareListItem>
        <ShareIcon>
          <Image fill src="/images/kakao.svg" alt="카카오톡 링크 이미지" />
        </ShareIcon>
        <ShareText>카카오톡</ShareText>
      </ShareListItem>
      <ShareListItem>
        <ShareIcon>
          <Image fill src="/images/facebook.svg" alt="페이스북 링크 이미지" />
        </ShareIcon>
        <ShareText>페이스북</ShareText>
      </ShareListItem>
      <ShareListItem onClick={clipboard}>
        <ShareIcon>
          <Image fill src="/images/linkcopy.svg" alt="링크복사 링크 이미지" />
        </ShareIcon>
        <ShareText>링크복사</ShareText>
      </ShareListItem>
    </ShareList>
  );
}

export default ShareLink;
