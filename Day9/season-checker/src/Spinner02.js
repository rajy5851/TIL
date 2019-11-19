import React from 'react';

const Spinner = () => {
    return (
        <div className = "ui active dimmer">
            <div className = "ui big text loader">
                {Props.message}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    message : '사용자 위치 정보를 확인 중입니다...'
}

export default Spinner;