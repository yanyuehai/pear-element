function importAllIcons() {
  const icons: any = {};
  const requireIcon = require.context(
    '../assets/icons', // 图标文件所在的路径（相对于当前文件）
    true, // 是否遍历子目录
    /\.(svg|png|jpe?g)$/, // 文件类型匹配规则
  );

  let arr:any = []
  requireIcon.keys().forEach((filename: any) => {
    const iconName: any = filename.replace(/^\.\//, '').replace(/\.(svg|png|jpe?g)$/, '');
    icons[iconName] = requireIcon(filename);
    arr.push(iconName)
  });
  return arr;
}

const icons = importAllIcons();

export default icons;
