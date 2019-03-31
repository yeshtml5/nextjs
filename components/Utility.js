"use strict"

/**
 *  import {randomRange} from "../components/Utility";
 *  randomRange(10,100)  10에서 100 사이의 임의수 가져오기
 */
export const randomRange=(n1, n2)=>Math.floor((Math.random()*(n2-n1+1))+n1)

/**
 *  import Utility, {randomRange} from "../components/Utility";
 *  Utility.someMethod();
 */

class Utility {
  //* 배열이나 문자열 중복제거  [1,3,2,4,3,1,5,6,2,1] =>[1,3,2,4,5,6]  ,  '11411' =>'14'
  static removeOverlap=(data)=>{
    if(typeof data==="object") return [...new Set(data)]
    if(typeof data==="string") return [...new Set(data)].join("")
    return data
  }

  //* 난수로 생성된 배열가져오기
  static getSomeArray=(length=10)=>{
    let _temp=[]
    for(let i=0; i<length; i++) _temp.push(randomRange(1, 10))
    return _temp
  }

  //* 배열섞기
  static suffleArray=(array)=>{
    return array.sort(()=>0.5-Math.random())
  }

  //* 특정배열요소 1개만 지우기
  static removeElementFromArray=(array, element)=>{
    const _index=array.indexOf(element)
    if(_index>=0) array.splice(_index, 1)
    return array
  }

  //* 특정배열요소 모두 지우기
  static removeAllElementFromArray=(array, element)=>{
    return array.filter(ele=>ele!==element)
  }

  //* 배열내에서 동일한값을 체크해서 object로 묶어줌. {3,9,3,9,7} 이면 matchMap에는 {3=2,9=2,7=1}
  static matchMapFromArray=(array=[1, 3, 3, 7, 3, 3, 1])=>{
    let _map={}
    for(let idx in array) {
      const num=array[idx]
      _map[num]=(_map.hasOwnProperty(num)) ? _map[num]+1 : 1
    }
    return _map
  }

  //* TEXT
  static test=()=>{
    alert(randomRange(1, 10))
  }
}

export default Utility
