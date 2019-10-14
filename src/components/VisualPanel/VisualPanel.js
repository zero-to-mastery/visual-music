/************************************************************
    Main component for visualization list

    Props:
    - visualList: Type of array. An array contain all visualization data that need to be displayed
    - onItemClick: Type of function. A callback function.

    Callback:
    - onItemClick: If provided in props. Function take 2 argument and is called 
    when an item is being clicked. 
        1.first argument: index of data in data array which was provided
        2.second argument: data in data array which was provided
 
    Current features:
    - Display visulization list

************************************************************/
import React from 'react';
import VisualItem from '../VisualItem/VisualItem';
import classes from './VisualPanel.module.scss';

//data for testing purpose
const listData = [
    {
        id:1,
        title:'visual1',
        imageSrc:require('./TestImages/ItemImg1.png')
    },
    {
        id:2,
        title:'visual2',
        imageSrc:require('./TestImages/ItemImg2.png')
    },
    {
        id:3,
        title:'visual3',
        imageSrc:require('./TestImages/ItemImg3.png')
    },
    {
        id:4,
        title:'visual4',
        imageSrc:require('./TestImages/ItemImg4.png')
    },
    {
        id:5,
        title:'visual5',
        imageSrc:require('./TestImages/ItemImg1.png')
    },
    {
        id:6,
        title:'visual6',
        imageSrc:require('./TestImages/ItemImg2.png')
    },
    {
        id:7,
        title:'visual7',
        imageSrc:require('./TestImages/ItemImg3.png')
    },
    {
        id:8,
        title:'visual8',
        imageSrc:require('./TestImages/ItemImg4.png')
    },
    {
        id:9,
        title:'visual9',
        imageSrc:require('./TestImages/ItemImg1.png')
    },
];

const VisualPanel = ({visualList, onItemClick})=>{

    //for test only since no data are given at moment
    visualList = visualList?visualList:listData;

    const onVisualItemClick = (index)=>{
        const item = visualList[index];

        if(onItemClick){
            onItemClick(index, item);
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