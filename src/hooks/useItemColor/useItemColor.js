import {useState} from 'react'

const useItemColor = () => {

    const listColors = [
        {
            label: 'White',
            image: '/iphone-12-white-select-2020.png',
            color: '#eeeeee'
        },
        {
            label: 'Black',
            image: '/iphone-12-black-select-2020.png',
            color: '#263238'
        },
        {
            label: 'Blue',
            image: '/iphone-12-blue-select-2020.png',
            color: '#3f51b5'
        },
        {
            label: 'Green',
            image: '/iphone-12-green-select-2020.png',
            color: '#80cbc4'
        },
        {
            label: 'Purple',
            image: '/iphone-12-purple-select-2021.png',
            color: '#ce93d8'
        }
    ];

    const defaultColor = listColors[0].label;
    const [selectedColor, setselectedColor] = useState(defaultColor);
    
    const selectNewColor = (color) => {
        
        console.log(`New selected color: ${color}`);
        setselectedColor(color);
    }

    return {
        selectedColor,
        listColors,
        selectNewColor
    }
}

export default useItemColor
