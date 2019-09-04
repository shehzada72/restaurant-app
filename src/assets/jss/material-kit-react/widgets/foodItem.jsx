import {red} from "@material-ui/core/colors";

const foodItemStyles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        // transition: theme.transitions.create('transform', {
        //     duration: theme.transitions.duration.shortest,
        // }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    cardContent: {
        padding: '7px'
    },
    card: {
        // height: '312px'
    }
};

export default foodItemStyles;