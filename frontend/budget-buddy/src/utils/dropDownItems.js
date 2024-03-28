import { childSign, downArrowSign, logOutSign, upArrowSign } from "./icons";
import { chart } from "./icons";

// List of dropdown items and their icons for the navigation of the parent;
export const dropDownItems = [
    {
        id: 1,
        title: 'Income',
        icon: upArrowSign,
        link: 'linkToNextPage'
    },
    {
        id: 2,
        title: 'Expenses',
        icon: downArrowSign,
        link: ''
    },
    {
        id: 3,
        title: 'Graph View',
        icon: chart,
        link: ''
    },
    {
        id: 7,
        title: 'Add Child',
        icon: childSign,
        link: ''
    },
    {
        id: 4,
        title: 'Log Out',
        icon: logOutSign,
        link: ''
    }

]

export const dropDownItemsChild = [
    {
        id: 1,
        title: 'Income',
        icon: upArrowSign,
        link: 'linkToNextPage'
    },
    {
        id: 2,
        title: 'Expenses',
        icon: downArrowSign,
        link: ''
    },
    {
        id: 3,
        title: 'Graph View',
        icon: chart,
        link: ''
    },
    {
        id: 4,
        title: 'Log Out',
        icon: logOutSign,
        link: ''
    }

]