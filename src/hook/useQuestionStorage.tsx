import React from 'react'
const useQuestionStorage = () => {

  const getFilterValues = () => {
    
  }

  const saveLocalStorage = (key =  '', value = '') => {

  }

  const filter = () => {
    // recoges los valores
    const filterValues = getFilterValues();
    // los guardas en localStorage
    saveLocalStorage('filterValues', filterValues);
  }

  return (
    <div>useQuestionStorage</div>
  )
}

export default useQuestionStorage