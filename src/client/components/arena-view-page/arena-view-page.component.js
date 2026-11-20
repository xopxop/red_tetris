import * as style from './arena-view-page.component.css';
import Header from './header.component.js';
import Main from './main.component.js';

function ArenaViewPage({ username, onJoinRoom }) {
  return (
    <div className={style["container"]}>
      <Header username={username}/>
      <Main onJoinRoom={onJoinRoom}/>
    </div>
  );
}

export default ArenaViewPage;
