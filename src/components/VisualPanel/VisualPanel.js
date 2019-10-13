/************************************************************
    Main component for visualization list

    Props:
    - visualList: Type of array. An array contain all visualization data that need to be displayed
    - onItemClick: Type of function. A callback function, 
    which take 1 argument when an item is being clicked. Argument which mapped to specific
    data in visual data array that was provided.

 
    Current features:
    - Display visulization list

************************************************************/
import React from 'react';
import VisualItem from './VisualItem/VisualItem';
import classes from './VisualPanel.module.scss';

//data for testing purpose
const listData = [
    {
        id:1,
        title:'visual1',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:2,
        title:'visual2',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:3,
        title:'visual3',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:4,
        title:'visual4',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:5,
        title:'visual5',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:6,
        title:'visual6',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:7,
        title:'visual7',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:8,
        title:'visual8',
        imageSrc:require('./ItemImg.png')
    },
    {
        id:9,
        title:'visual9',
        imageSrc:require('./ItemImg.png')
    },
];

const VisualPanel = ({visualList, onItemClick})=>{

    visualList = visualList?visualList:listData;

    const onVisualItemClick = (index)=>{
        const item = visualList[index];

        if(onItemClick){
            onItemClick(item);
        }
    }

    return (
        <div className={classes.panelWrapper}>
            <div className={classes.title}>
            Select Visualization
            </div>
            <div className={classes.visualList}>
            {
                visualList? visualList.map((item, index) => {
                    return <VisualItem 
                            key={index} 
                            title={item.title} 
                            imagePath={item.imageSrc} 
                            onClick={()=>onVisualItemClick(index)}
                            />
                })
                :
                null
            }
            </div>
        </div>
    );
}

export default VisualPanel;