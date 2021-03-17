class Header extends React.Component {
    state = {
      open: false,
      ImgUrl: './img/ic_menu.png',
    };


    handleButtonClick = () => {
      console.log('ccc')
      this.setState(state => {
        return {
          open: !state.open,
          
        };
      });
    };

  render(){
    return (

        <header>
          <div className="main-header clearfix">
            <h1 className="name"><a href="#">Jessy Lee</a></h1>
              <img src= {this.state.ImgUrl} className="menu_open" alt='Logo' onClick={this.handleButtonClick}>
              </img>

            <Menu 
                className ="main-nav"
            />
          </div>
          {this.state.open && (
            
            <div className="dropdown">
              <img src="./img/ic_close.png" className="menu_close" onClick={this.handleButtonClick}></img> 
              <ul className="dropdown ul">
                <li><a href="#">list1</a></li>
                <li><a href="#">list2</a></li>
                <li><a href="#">list3</a></li>
                <li><a href="#">list4</a></li>
                <li><a href="#">list5</a></li>
              </ul>
            </div>
          )}
        </header>
      
    );
  }
}


class ContentBox extends React.Component {

  state = {
    open: false,
    ButtonWording: 'More',
  };


  handleButtonClick = () => {
    console.log('AAA')
    this.setState(state => {
      return {
        open: !state.open,
        
      };
    });
  };

  render(){
    return (
      <div className="container">
        <h2 id="myHeading">Assignment List</h2>
        <div className="content_box">
          <ul className="box-ul">
            <li>
              <p className='codepentitle show' >Assignment 1: Callback Function</p>
              <img src="./img/Assignment1.png"></img>
              <a href="https://codepen.io/jessylee2208/pen/rNWbjdE" >點我去codePen</a>
            </li>
            <li>
              <p className='codepentitle show'>Assignment 2: Callback Function and Advanced HTML DOM</p>
              <img src="./img/Assignment2.png"></img>
              <a href="https://codepen.io/jessylee2208/pen/rNWbjdE" >點我去codePen</a>
            </li>
          </ul>
        </div>
        <input type="button" value="call to action" onClick={this.handleButtonClick}></input>
        {this.state.open && (
          <div className="container">
            <h3>教學影片作業</h3>
            <div className="content_box">
              <ul className="box-ul">
                <li>
                  <p className='hidenText'>Callback Functions in JavaScript</p>
                  <img src="./img/CallbackFunctionsinJavaScript.png"></img>
                </li>
                <li>
                  <p className='hidenText'>JavaScript Array Iteration Methods</p>
                  <img src="./img/JavaScriptArrayIterationMethods.png"></img>
                </li>
              </ul>
            </div>
            <div className="content_box">
              <ul className="box-ul">
                <li>
                  <p className='hidenText'>Practice Classes in JavaScript</p>
                  <img src="./img/PracticeClassesinJavaScript.png"></img>
                </li>
                <li>
                  <p className='hidenText' >React Basics</p>
                  <img src="./img/React Basics.png"></img>
                </li>

              </ul>
            </div>
            
          </div>
        )}
      </div>
    );
  }

}




const Menu = (prop) => {
  return (
    <ul className={prop.className}>
      <li><a href="#">list1</a></li>
      <li><a href="#">list2</a></li>
      <li><a href="#">list3</a></li>
      <li><a href="#">list4</a></li>
      <li><a href="#">list5</a></li>
    </ul>
  );
}


const MainHeader =() =>{
    return(
      <div>
        <Header />
        
  
      </div>
    )
  }
  
ReactDOM.render(
    <MainHeader/>,


    document.getElementById('root')
  );

  ReactDOM.render(

    <ContentBox/>,

    document.getElementById('box')
  );