import React from "react";
import './SortingVisualizer.css';
import { render } from "@testing-library/react";
import { getMergeSortAnimations , getBubbleSortAnimations , getQuickSortAnimations , getHeapSortAnimations , getInsertionSortAnimations , getSelectionSortAnimations} from "../sortingAlgorithms/sortingAlgorithms";

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          array: [],
          animationSpeed: 10,
          numberOfBars: 50,
          isSorting: false,
        };
    };

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        if (this.state.isSorting) return;
        
        const array = [];
        for(let i=0; i<this.state.numberOfBars ; i++)
        {
            array.push(randomIntFromInterval(5,510));
        }
        this.setState({array});
    }

    handleSpeedChange = (event) => {
        if (!this.state.isSorting) {
            this.setState({animationSpeed: parseInt(event.target.value)});
        }
    }

    handleBarsChange = (event) => {
        if (!this.state.isSorting) {
            this.setState({numberOfBars: parseInt(event.target.value)}, () => {
                this.resetArray();
            });
        }
    }

    mergeSort(){
        if (this.state.isSorting) return;
        this.setState({isSorting: true});
        
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++)
        {
            const isColorChange = i%3 !==2;
            if(isColorChange)
            {
                const [barOneIdx,barTwoIdx] = animations[i];
                const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(()=>{
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                        arrayBars[barOneIdx].style.backgroundColor = color;
                        arrayBars[barTwoIdx].style.backgroundColor = color;
                    }
                },i*this.state.animationSpeed);
            }
            else{
                const [barOneIdx,newHeight] = animations[i];
                setTimeout(()=>{
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx]) {
                        arrayBars[barOneIdx].style.height = `${newHeight}px`;
                    }
                    
                    if (i === animations.length - 1) {
                        setTimeout(() => {
                            this.setState({isSorting: false});
                        }, 100);
                    }
                },i*this.state.animationSpeed);
            }
        }
    }

    quickSort(){
        if (this.state.isSorting) return;
        this.setState({isSorting: true});
        
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            if (i % 4 === 0 || i % 4 === 1) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                        arrayBars[barOneIdx].style.backgroundColor = color;
                        arrayBars[barTwoIdx].style.backgroundColor = color;
                    }
                }, i * this.state.animationSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barIdx]) {
                        arrayBars[barIdx].style.height = `${newHeight}px`;
                    }
                    
                    if (i === animations.length - 1) {
                        setTimeout(() => {
                            this.setState({isSorting: false});
                        }, 100);
                    }
                }, i * this.state.animationSpeed);
            }
        }
    }

    heapSort(){
        if (this.state.isSorting) return;
        this.setState({isSorting: true});
        
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            if (i % 4 === 0 || i % 4 === 1) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                        arrayBars[barOneIdx].style.backgroundColor = color;
                        arrayBars[barTwoIdx].style.backgroundColor = color;
                    }
                }, i * this.state.animationSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barIdx]) {
                        arrayBars[barIdx].style.height = `${newHeight}px`;
                    }
                    
                    if (i === animations.length - 1) {
                        setTimeout(() => {
                            this.setState({isSorting: false});
                        }, 100);
                    }
                }, i * this.state.animationSpeed);
            }
        }
    }

    bubbleSort(){
        if (this.state.isSorting) return;
        this.setState({isSorting: true});
        
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            if (i % 4 === 0 || i % 4 === 1) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                        arrayBars[barOneIdx].style.backgroundColor = color;
                        arrayBars[barTwoIdx].style.backgroundColor = color;
                    }
                }, i * this.state.animationSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barIdx]) {
                        arrayBars[barIdx].style.height = `${newHeight}px`;
                    }
                    
                    if (i === animations.length - 1) {
                        setTimeout(() => {
                            this.setState({isSorting: false});
                        }, 100);
                    }
                }, i * this.state.animationSpeed);
            }
        }
    }

    insertionSort(){
        if (this.state.isSorting) return;
        this.setState({isSorting: true});
        
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            if (i % 4 === 0 || i % 4 === 1) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                        arrayBars[barOneIdx].style.backgroundColor = color;
                        arrayBars[barTwoIdx].style.backgroundColor = color;
                    }
                }, i * this.state.animationSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barIdx]) {
                        arrayBars[barIdx].style.height = `${newHeight}px`;
                    }
                    
                    if (i === animations.length - 1) {
                        setTimeout(() => {
                            this.setState({isSorting: false});
                        }, 100);
                    }
                }, i * this.state.animationSpeed);
            }
        }
    }

    selectionSort(){
        if (this.state.isSorting) return;
        this.setState({isSorting: true});
        
        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            if (i % 4 === 0 || i % 4 === 1) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barOneIdx] && arrayBars[barTwoIdx]) {
                        arrayBars[barOneIdx].style.backgroundColor = color;
                        arrayBars[barTwoIdx].style.backgroundColor = color;
                    }
                }, i * this.state.animationSpeed);
            } else {
                const [barIdx, newHeight] = animations[i];
                setTimeout(() => {
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if (arrayBars[barIdx]) {
                        arrayBars[barIdx].style.height = `${newHeight}px`;
                    }
                    
                    if (i === animations.length - 1) {
                        setTimeout(() => {
                            this.setState({isSorting: false});
                        }, 100);
                    }
                }, i * this.state.animationSpeed);
            }
        }
    }

    render() {
        const {array, animationSpeed, numberOfBars, isSorting} = this.state;
        return(
            <div className="array-container">
                <div className="controls-panel">
                    <div className="control-group">
                        <label htmlFor="speed-slider">
                            Animation Speed: {animationSpeed}ms
                        </label>
                        <input
                            id="speed-slider"
                            type="range"
                            min="1"
                            max="100"
                            value={animationSpeed}
                            onChange={this.handleSpeedChange}
                            disabled={isSorting}
                        />
                        <span className="speed-labels">
                            <span>Fast</span>
                            <span>Slow</span>
                        </span>
                    </div>

                    <div className="control-group">
                        <label htmlFor="bars-slider">
                            Number of Bars: {numberOfBars}
                        </label>
                        <input
                            id="bars-slider"
                            type="range"
                            min="10"
                            max="115"
                            value={numberOfBars}
                            onChange={this.handleBarsChange}
                            disabled={isSorting}
                        />
                        <span className="bars-labels">
                            <span>10</span>
                            <span>115</span>
                        </span>
                    </div>
                </div>

                <div className="array-display">
                    {array.map((value,idx)=>(
                        <div className="array-bar" 
                        key={idx} 
                        style={{ 
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                    ))}
                </div>

                <div className="sorting-buttons">
                    <button 
                        onClick={()=>this.resetArray()} 
                        disabled={isSorting}
                        className="reset-btn"
                    >
                        Generate New Array
                    </button>
                    <button 
                        onClick={()=>this.mergeSort()} 
                        disabled={isSorting}
                        className="sort-btn"
                    >
                        Merge Sort
                    </button>
                    <button 
                        onClick={()=>this.quickSort()} 
                        disabled={isSorting}
                        className="sort-btn"
                    >
                        Quick Sort
                    </button>
                    <button 
                        onClick={()=>this.heapSort()} 
                        disabled={isSorting}
                        className="sort-btn"
                    >
                        Heap Sort
                    </button>
                    <button 
                        onClick={()=>this.bubbleSort()} 
                        disabled={isSorting}
                        className="sort-btn"
                    >
                        Bubble Sort
                    </button>
                    <button 
                        onClick={()=>this.insertionSort()} 
                        disabled={isSorting}
                        className="sort-btn"
                    >
                        Insertion Sort
                    </button>
                    <button 
                        onClick={()=>this.selectionSort()} 
                        disabled={isSorting}
                        className="sort-btn"
                    >
                        Selection Sort
                    </button>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}