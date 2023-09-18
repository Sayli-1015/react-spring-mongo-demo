import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer>
            <div className={styles.footer}>
                <span className={styles.footerText}>
                    © Copyright 2021 <span className={styles.companyName}> Tata Motors</span>. All rights
                    reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;