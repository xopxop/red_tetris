import * as style from './arena-view-page.component.css';
import Header from './header.component.js';
import Main from './main.component.js';

function ArenaViewPage({ username }) {
  console.log(username);
  return (
    <div className={style["container"]}>
      <Header username={username}/>
      <Main />
    </div>
  );
}

export default ArenaViewPage;
