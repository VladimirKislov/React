import React, { useContext } from 'react';
import { userContext } from '../../../context/userContext';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock/UserBlock';

export function SearchBlock() {
  const { iconImg, name } = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
