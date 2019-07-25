const defaultState = {
  inputValue: '',
  list: []
};

// reducer 不能修改原来的state
export default (state = defaultState, action) => {

  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === 'todo_item_submit') {
    const newState = JSON.parse(JSON.stringify(state)); // 拷贝数组
    const value = action.value ? action.value : 'default value'; // 如果用户提交的是空表单，则替换成默认内容"default value"
    newState['list'] = [value, ...newState.list];  // 将输入框内容添加到列表数组中
    newState.inputValue = ''; // 清空输入框
    return newState;
  }

  return state;
}
