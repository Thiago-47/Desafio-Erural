import './Msg.css'
function Msg(props){

  return (
    <div className="batepapo">
    <span className="name" className="batepapoNome"></span>
    <span className="mensag" className="batepapoMsg">{props.msg}</span>
  </div>
  )

}

export default Msg;