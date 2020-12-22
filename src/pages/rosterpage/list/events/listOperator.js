import { dataSource } from '../../constant/domeData';

//列表表体删除
export function listBodyDelete(props, data, index) {
  let newData = new Array();
  data.forEach(function(element) {
    if (element.key != index) newData.push(element);
  });
  debugger;
  props.setState({
    data: newData,
  });
}
export function reFresh(props) {
  props.setState({
    data: dataSource,
  });
}

export function addItem(history) {

}
