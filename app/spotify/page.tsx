import React from 'react'
import styles from './page.module.css'
import LeftSideBar from '../../components/leftSideBar'

const page = () => {
  return (
    <div className={styles.wrapper}>
        <LeftSideBar />
        <div className={styles.mainContent}>
            main content
        </div>
        <div className={styles.rightSidebar}>
            right side bar
        </div>
    </div>
  )
}

export default page