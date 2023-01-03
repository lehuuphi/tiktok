import React from 'react';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('warpper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tiktok-obj/1610321846996993~c5_300x300.webp?x-expires=1672887600&x-signature=efBpJeOU1aiDOfQGrRnIZbfSlH4%3D"
                alt=""
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>phuonglytran </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}> Phương Ly Trần </span>
            </div>
        </div>
    );
}
export default AccountItem;
