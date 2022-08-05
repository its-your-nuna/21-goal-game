const WhatPage = () => {
 
    const [visibility, setVisibility] = useState({});

    const clickShow = () => {
        setVisibility({display: 'flex'});
    };

    const clickHide = () => {
        setVisibility({display: 'none'});
    };

    items = [
      { 
         id:"1",
         label: "В кровати",
         description: "оставайтесь в постели, натяните на себя простыни и одеяла и используйте подушку, чтобы защитить голову и шею. У вас меньше шансов получить травму, если вы останетесь в постели",
         icons: {room}
      },
      { id:"2",
        label:"2",
        description:"2",
        icons:{room}

      }, 
      { id:"3",
        label:"3",
        description:"3",
        icons:{room}

      }, 
      { id:"4",
        label:"4",
        description:"4",
        icons:{room}

      }, 
      { id:"5",
        label:"5",
        description:"5",
        icons:{room}
      }, 
      { id:"6",
        label:"6",
        description:"6",
        icons:{room}
      }
  ];
  return (
    <>

    <div  className="background1">
        <div className="TextMain">
        Что делать во время  землетрясения?
        </div> 
        <div className="backgroup">
        <img className="image" src={person}></img>

<div className="image-group">
        <div  className="mainshow1" onClick={clickShow}></div>
        <div  className="mainshow2" onClick={clickShow}></div>
        <div  className="mainshow3" onClick={clickShow}></div>
        <div  className="mainshow4" onClick={clickShow}></div>
        <div  className="mainshow5" onClick={clickShow}></div>
        <div  className="mainshow6" onClick={clickShow}></div>
</div>
        <div className="wrapper" style={visibility}>
        <div className="content">
        

        {items.map((item) => {
          const{label,description,icons}=item
          return <div>
             <header id="disclaimer">В кровати</header>

          <div className="roomdiv"><img id="room"  src={icons} alt=""/> </div>
            <p id="d2">оставайтесь в постели, натяните на себя простыни и одеяла и используйте подушку, чтобы защитить голову и шею. У вас меньше шансов получить травму, если вы останетесь в постели</p>
          <div>
            <button  className="skr" onClick={clickHide}>скрыть</button>
          </div>
        </div> 
    
          })}
           
            <button  className="skr" onClick={clickHide}>скрыть</button>
          </div>
        </div> 
      </div>
      </div>
    </>
  );
};