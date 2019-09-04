import { container } from "./../../../material-kit-react.jsx";

import image from "./../../../../images/sign.jpg";

const loginStyle = {
    root: {
        flexGrow: 1,
        height: 250,
        minWidth: 290,
    },
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
    },

    section: {
        // minHeight: "110vh",
        maxHeight: "1600px",
        overflow: "hidden",
        padding: "40px 0",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url(" + image + ")"
    },
    container,
    formControl: {
        margin: "0",
        minWidth: '100%'
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px",
        cursor: 'pointer'
    },
    socialIcons: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important"
    },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0"
    },
    inputIconsColor: {
        color: "#495057"
    },
    card: {
        maxWidth: 345,
    },
    modalBody: {
        background: 'transparent'
    }
};

export default loginStyle;
