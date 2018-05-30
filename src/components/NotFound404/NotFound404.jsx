import React from 'react';
import styles from './NotFound404.scss';

const NotFound404 = () => (
 <article className={styles.notfound}>
     <h2>We couldn't find this page...</h2>
     <img src="img/404.jpg" alt="" />
     <p>Try another url or use the search box.</p>
 </article>
);
export default NotFound404;