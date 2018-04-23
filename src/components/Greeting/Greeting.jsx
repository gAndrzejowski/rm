import React from 'react';
import styles from './Greeting.scss'

export default function Greeting(props) {
    return <p className={styles.message}>Welcome {props.name || 'stranger'}</p>
}