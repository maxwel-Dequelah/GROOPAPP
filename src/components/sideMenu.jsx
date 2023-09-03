// import './css/sideMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListAccounts from './Dashbord'
import logo3 from '../media/logo3.png'


function SideMenu(){
    return(
    <div className="">
        <div id="viewport" className="col-sm-3 container" 
            style={{}}>
            {/* <!-- Sidebar --> */}
                <div id="sidebar" style={{}}
                    >
                    <header >
                    <img src={logo3} 
                        alt="" srcset=""  
                        className='vh-25'
                        style={{    
                                    width:'200px'
                                    
                                }}/>
                        
                    </header >
                    <ul className="nav">
                    <li><a href="/dashbord"><i className="zmdi zmdi-view-dashboard"></i> Dashboard</a></li>
                    <li><a href="/dashbord"><i className="zmdi zmdi-link"></i> Shortcuts</a></li>
                    <li><a href="#"><i className="zmdi zmdi-widgets"></i> Overview</a></li>
                    <li><a href="/dashbord#"><i className="zmdi zmdi-calendar"></i> Events</a></li>
                    <li><a href="/dashbord#"><i className="zmdi zmdi-info-outline"></i> About</a></li>
                    <li><a href="/dashbord#"><i className="zmdi zmdi-settings"></i> Services</a></li>
                    <li><a href="/dashbord#"><i className="zmdi zmdi-comment-more"></i> Contact</a></li>
                    </ul>
                </div>

                {/* logo and  */}
                <div className="col-9" style={{
                    width:'100%'
                
                }}>
                <div id="sticky-top" 
                class='d-flex navbar-dark bg-primary sticky-top'
                >
                    <ul  style={{
                        
                        listStyle:'none',
                       display:'inline-flex',
                       
                       justifyContent:'space-between',
                        flexDirection:'row',
                        
                        
                        
                        }}>
                        
                        <li id="loginLogout"
                             style={{alignSelf:'flex-end',
                             
                            }}>
                                <i className='logout bi bi-power'> </i>
                                <a style={{textDecoration:'none',color:'white'}} href='#'>Logout
                            </a>
                        </li>
                            
                        
                    </ul>
                </div>
                
            

                <ListAccounts id="content" 
                className="container"
                style={{width:'100%', 
                marginTop:'5px'}}/>
                

                </div>
            


            


        </div> 

    </div>
    )
}

export default SideMenu;