const Box = props => {
  //  Write your code here.
  const{className, text}=props;
  
  return {
      <div className={`box ${className}`}>
          <P className="para">{text}</P>
      </div>
  };
};

const element = (
  //  Write your code here.
  <div className="bg-container">
        <h1 className="heading">Boxes</h1>
        <div className="second-container">
               <Box className="yellow" text="Small"/>
               <Box className="blue" text="Medium"/>
               <Box className="pink" text="Large"/>


        </div>
        
  </div> 
);

ReactDOM.render(element, document.getElementById("root"));
