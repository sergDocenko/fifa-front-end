import { useState } from "react";

function useList(defaultList) {
  const [list, setList] = useState(defaultList ?? []);

  function addItem(item) {
    setList([...list, item]);
  }

  function removeItem(index) {
    setList(list.filter((item, i) => i !== index));
  }

  function updateItem(index, item) {
    const updatedList = [...list];
    updatedList[index] = item;
    setList(updatedList);
  }

  return {
    list,
    updateItem,
    addItem,
    removeItem,
  };
}

export default useList;
