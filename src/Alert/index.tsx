import React, { FC, useState, useMemo, useRef } from 'react';

import { AlertProps } from './interface';
import Css from './index.module.less';
import Icon from '../Icon';
const Alert: FC<AlertProps> = ({ type, title, closable, center, closeText, LimeGreen, CoolGray, Goldenrod, Coral }) => {

  const [falg, setFlag] = useState(false);

  const backgroundColor = {
    LimeGreen: '#5dd105',
    CoolGray: '#f3dd15',
    Goldenrod: '#fa6060',
    Coral: '#86e0fb',
  };
  const typeRef = useRef();
  const handler = () => {
    setFlag(true);
  };

  const AlertStyle = useMemo(() => {
    if (!type && type !== 'Success' && type !== 'Info' && type !== 'error') {
      return 'Success';
    }
    return type as any;
  }, [type]);

  return (
    <>
      {falg ? null : (
        <div
          className={Css[AlertStyle]}
          style={{
            margin: '20px 0',
            backgroundColor: LimeGreen
              ? backgroundColor.LimeGreen
              : '' || CoolGray
              ? backgroundColor.CoolGray
              : '' || Goldenrod
              ? backgroundColor.Goldenrod
              : '' || Coral
              ? backgroundColor.Goldenrod
              : '',
            color: LimeGreen || CoolGray || Goldenrod || Coral ? 'white' : 'gray',
          }}
        >
          <p className={Css['title']} style={{ margin: center ? '0 auto' : '' }}>
            {title ? title : '这是一个提示文案'}{' '}
          </p>
          {closable ? null : (
            <div className={Css['logo']} onClick={handler}>
              {' '}
              {closeText ? closeText : <Icon name='closeguanbi' size={12} />}{' '}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
