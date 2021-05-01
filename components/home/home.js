import IllustrationHome from "./illustration/illustration";
import Main from "./main/main";

function Home() {
  return (
    <div className="mg-t-lg">
      <div className="container-md">
        <div className="flex jc">
          <Main />
          <IllustrationHome />
        </div>
      </div>
    </div>
  );
}

export default Home;
