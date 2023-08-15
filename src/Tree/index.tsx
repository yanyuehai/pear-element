import React, { FC, useState, useRef, memo } from 'react';
import { TreeProps } from './interface';
import Css from './index.module.less';
import Icon from '../Icon';
const Tree: FC<TreeProps> = memo(({ treeData = [], handleChange, a, left }) => {
  let [keys, setKeys] = useState([]);
  const sonRef = useRef(null);

  const handle = (e, item) => {
    handleChange ? handleChange(item) : null;
    if (!item.children || (e.target.localName !== 'span' && e.target.localName !== 'svg')) {
      return;
    }
    let newKeys = keys;
    let index = newKeys.findIndex((v) => v === item.key);
    let ref = e.target.parentNode.nextSibling;
    if (index >= 0) {
      newKeys.splice(index, 1);
      e.target.parentNode.children[0].style.transform = 'rotate(0deg)';
      if (!a) {
        sonRef.current.style.height = sonRef.current.scrollHeight + 'px';
      }
      ref.style.height = 0 + 'px';
      ref.classList.remove(Css['tree_show']);
    } else {
      newKeys.push(item.key);
      e.target.parentNode.children[0].style.transform = 'rotate(90deg)';
      ref.style.height = ref.scrollHeight + 'px';
      if (a) {
        a.current.style.height = 'auto';
      }
      ref.classList.add(Css['tree_show']);
    }

    setKeys(newKeys);
  };
  return (
    <div className={Css['tree_father']} style={{ marginLeft: left ? 1 * left + 'px' : '0px' }}>
      {treeData.map((item) => {
        return (
          <div key={item.key}>
            <div className={Css['title']} onClick={(e) => handle(e, item)}>
              {item.children ? (
                <Icon name={'arrow-rightjiantou-you2'} className={Css['icon']} size={14} />
              ) : null}
              <span className={Css['title_text']}>{item.title}</span>
            </div>
            {item.children ? (
              <div className={Css['tree_son']} ref={sonRef}>
                <Tree
                  treeData={item.children}
                  left={left ? left : 16}
                  a={sonRef}
                  handleChange={handleChange ? handleChange : null}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
});

export default Tree;
