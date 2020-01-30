import React from 'react';

const dataReducer = (state = [], { type , data }) => { 
  switch(type){
      case 'SET':
          state = data;
          break;
      default:
          return state;
  }
  return state;
}
export default dataReducer;