import { useState } from "react";

function useElementsArray(elementsData, getElementDefault) {
  const elementsInitial = elementsData
    ? elementsData
    : [getElementDefault(), getElementDefault()];
  const [elements, setelements] = useState(elementsInitial);

  function updateElementData(elementProps) {
    const tempElements = [...elements];
    const index = getIndexFromId(tempElements, elementProps.id);
    console.log(index);
    if (tempElements[index] !== elementProps) {
      tempElements[index] = elementProps;
      setelements(tempElements);
    }
  }

  function addElement() {
    setelements([...elements, getElementDefault()]);
  }

  function removElement(id) {
    setelements(elements.filter((element) => element.id !== id));
  }

  return {
    elements,
    updateElementData,
    addElement,
    removElement,
  };
}

export default useElementsArray;

function getIndexFromId(array, id) {
  return array.findIndex((element) => element.id === id);
}
// const createId = (function (initId = 0) {
//    let id = initId;
//    return function () {
//       return id++;
//    };
// })();

// const getPlayerDefault = () => {
//    return { name: "", id: createId() };
// };
