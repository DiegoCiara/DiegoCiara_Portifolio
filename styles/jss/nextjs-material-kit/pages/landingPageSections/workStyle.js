import { title } from "/styles/jss/nextjs-material-kit.js";

const workStyle = {
  section: {
    padding: "70px 0",
    display:"flex", 
    justifyContent:"space-around", 
    alignItems:"center" 
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center",
    // "@media (max-width: 768px)": {
    // }
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },  
  mainRaised: { 
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  textField:{
    width:"100%",
    "@media (max-width: 858px)":{
      width:"80%"
    }
  }
};

export default workStyle;
