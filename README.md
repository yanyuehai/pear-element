# 安装
`npm i react-element-pc`

## 使用

## 引入 Element
我们可以按需引入，单独导入某一个组件即可使用。
```js
import React from 'react';
import { Button } from 'react-element-pc';

export default function ButtonDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" >基础按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="info">信息按钮</Button>
    </div>
  );
}
```
完整导入组件列表。
```js
import {
  Avatar,
  Backtop,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  CarouselItem,
  CheckboxAll,
  CheckboxGroup,
  Collapse,
  Divider,
  Icon,
  InfiniteScroll,
  Input,
  InputNumber,
  Col,
  Row,
  Link,
  Loading,
  MessageBox,
  Notification,
  PageHeader,
  Pagination,
  Popover,
  Progress,
  Radio,
  RadioGroupButton,
  Switch,
  Table,
  Tabs,
  TabPane
} from "react-element-pc"
```