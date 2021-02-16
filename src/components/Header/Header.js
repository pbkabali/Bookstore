import styles from './Header.module.css';

const {
  header, logo, navLink, bold, avatar,
} = styles;

const Header = () => (
  <div className={header}>
    <h1 className={logo}>Bookstore CMS</h1>
    <p className={[navLink, bold].join(' ')}>BOOKS</p>
    <p className={navLink}>CATEGORIES</p>
    <div className={avatar}>P</div>
  </div>
);

export default Header;
