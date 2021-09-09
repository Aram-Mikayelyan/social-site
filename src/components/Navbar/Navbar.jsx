import React   from 'react';
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem';
import s from './Navbar.module.css';



const Navbar = (props) => {
    return (
        <nav className={s.nav}>
          <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
          <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
          <div className={s.item}><NavLink to='/users' activeClassName={s.active}>Users</NavLink></div>
          <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
          <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
          <div className={`${s.item} ${s.active}`}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
          <div className={`${s.item} ${s.active}`}><NavLink to='/friends' activeClassName={s.active}><span className={s.friends}>Friends</span></NavLink></div>
          <div className={s.friendItem}>
              {
                props.state.friendsData.map(f => <FriendItem name={f.name} id={f.id} key={f.id} imgSrc={f.imgSrc} />)
              }
          </div>
          
        </nav>
    );
}

export default Navbar;