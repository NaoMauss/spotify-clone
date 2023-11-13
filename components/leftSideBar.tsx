import React from 'react'
import styles from '../app/spotify/page.module.css'
import { FaMusic } from 'react-icons/fa';
import { AiFillHome, AiFillCompass } from 'react-icons/ai';
import { BiTrendingUp, BiSolidMusic } from 'react-icons/bi';

const leftSideBar = () => {
  return (
    <div className={styles.leftSidebar}>
        <h1><FaMusic className={styles.icons}/>     <span className={styles.titleSecondPart}>Dream</span>Music</h1>
        <div className={styles.spacer}></div>
        <div className={styles.leftSidebarOption}>
            <span className={styles.leftSidebarOptionTitle}>MENU</span>
            <p><AiFillHome className={styles.icons}/> Home</p>
            <p><BiTrendingUp className={styles.icons}/>  Trends</p>
            <p><BiSolidMusic className={styles.icons}/>  Library</p>
            <p><AiFillCompass className={styles.icons}/>  Discover</p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.leftSidebarOption}>
            <span className={styles.leftSidebarOptionTitle}>DISCOVER</span>
            <p>Playlists</p>
            <p>Podcasts</p>
            <p>Daily Mix</p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.leftSidebarOption}>
            <span className={styles.leftSidebarOptionTitle}>YOUR COLLECTION</span>
            <p>Liked Songs</p>
            <p>Favorite Artists</p>
            <p>Local</p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.leftSidebarOption}>
            <span className={styles.leftSidebarOptionTitle}>GENERAL</span>
            <p>Settings</p>
            <p>Log Out</p>
        </div>
    </div>
  )
}

export default leftSideBar