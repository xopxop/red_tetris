import * as style from './arena-view-page.component.css';
import Header from './header.component.js';
import Main from './main.component.js';

function ArenaViewPage() {
  return (
    <div className={style["container"]}>
      <Header />
      <Main />
    </div>
  );
}

export default ArenaViewPage;
