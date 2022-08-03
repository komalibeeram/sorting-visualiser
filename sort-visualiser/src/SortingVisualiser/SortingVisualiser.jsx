import React from "react";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSortAlgorithm";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSortAlgorithm";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSortAlgorithm";
import { getInsertionSortAnimations } from "../sortingAlgorithms/insertionSortAlgorithm";
import { getHeapSortAnimations } from "../sortingAlgorithms/heapSortAlgorithm";
import { getSelectionSortAnimations } from "../sortingAlgorithms/selectionSortAlgorithm";
import './SortingVisualiser.css';

// animation speed
const ANIMATION_SPEED_MS = 1;

// number of bars in array
const NUMBER_OF_ARRAY_BARS = 100;

// main color of bars
const PRIMARY_COLOR = '#00B8A9';

// compare color of bars
const SECONDARY_COLOR = '#F6416C';

export default class SortingVisualiser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    quickSort(){
        console.log("eneterd in jsx");
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "cmp1" || animations[i][0] === "cmp2";
            if(isColorChange){
                const [,barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === "cmp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [,barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    insertionSort(){
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "cmp1" || animations[i][0] === "cmp2";
            if(isColorChange){
                const [,barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === "cmp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [,barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "cmp1" || animations[i][0] === "cmp2";
            if(isColorChange){
                const [,barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === "cmp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [,barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort(){
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "cmp1" || animations[i][0] === "cmp2";
            if(isColorChange){
                const [,barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === "cmp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [,barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    selectionSort(){
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "cmp1" || animations[i][0] === "cmp2";
            if(isColorChange){
                const [,barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (animations[i][0] === "cmp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [,barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = getMergeSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render(){
        const {array} = this.state;

        return (
            <div className="array-container">
                <div class="navbar">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="alg-button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="alg-button" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className="alg-button" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button className="alg-button" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="alg-button" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="alg-button" onClick={() => this.selectionSort()}>Selection Sort</button>
                </div>
                <div className="bar-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            title={value}
                            style={{backgroundColor: PRIMARY_COLOR, height: `${value}px`}}
                        >
                        </div>

                    ))}
                </div>
                
            </div>
        );
    }
}

function randomIntFromInterval(min, max){
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
}