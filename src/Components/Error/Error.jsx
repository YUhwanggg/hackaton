import React from 'react';
import style from './Error.module.scss'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className={style.error}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to='/'>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </div>
    );
};

export default Error;