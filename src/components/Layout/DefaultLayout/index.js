import classNames from 'classnames/bind';
import Header from './Header';
import Sidebar from './Sidebar';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);
function Defaultlauout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default Defaultlauout;
