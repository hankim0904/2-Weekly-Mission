import { Link } from "react-router-dom";

function Temp() {
  return (
    <>
      <button>
        <Link to="/shared">공유 페이지</Link>
      </button>
      <button>
        <Link to="/folder">폴더 페이지</Link>
      </button>
    </>
  );
}

export default Temp;
