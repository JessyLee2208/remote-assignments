

class Header extends React.Component {


    state = {
      open: false,
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

              <img src= './img/ic_menu.png' className="menu_open" alt='Logo' onClick={this.handleButtonClick}>

              </img>

            <Menu 
                className ="main-nav"
            />
          </div>
          {this.state.open && (
            <div className="dropdown">
              <ul>
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


// const Header = (prop) => {
//   return (
//     <header className="main-header clearfix">
//       <h1 className="name"><a href="#">Jessy Lee</a></h1>
//       <img src= './img/ic_menu.png' className="menu_open" alt='Logo'></img>
//       <Menu 
//           className ="main-nav"
//       />

//     </header>
    
//   );
// }





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

// const MobileMenu = () => {
//     return (
//       <div className="mobile-menu">
//         <img src="./img/ic_close.png" className="menu_close"></img> 
//         <Menu 
//             className =''
//         />
//       </div>
//     );
// }

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

