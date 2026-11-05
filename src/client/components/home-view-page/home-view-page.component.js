import * as style from './home-view-page.component.css';
import Header from './components/header.component.js';
import Footer from './components/footer.component.js';
import Main from './components/main.component.js';

function HomeViewPage() {
  return (
    <div className={style["page"]}>
      <div className={`${style["ambient"]} ${style["ambient-one"]}`} />
      <div className={`${style["ambient"]} ${style["ambient-two"]}`} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default HomeViewPage;
