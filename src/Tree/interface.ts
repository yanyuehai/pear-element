export interface TreeProps {
  /**
   * @description 列表数据
   * @default []
   */
  treeData?: any;
  /**
   * @description 点击触发事件
   */
  handleChange?: Function;
  // /**
  //  * @description 数控组件类型，不同类型不同样式 可选 button text border
  //  * @default text
  //  */
  // type?: string
  left?: any;
}
