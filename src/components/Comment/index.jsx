import "./style.css"

const Comment = (props) => {

    const {name, email, message, date} = props;
    
    console.log(props);
    
    return (     
    <div className="comment-item">
        <div className="footer">
          <b>{name}</b> 
          <b>{email}</b> 
          <b>{date.toString()}</b> 
        </div>
        <div className="comment"> 
          {message}
        </div>
    </div>  
    );
}

export default Comment;