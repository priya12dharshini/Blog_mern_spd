import "./sidebar.css"

export default function Sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            src="https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
                necessitatibus nostrum illum reprehenderit, libero eligendi expedita
                quis laudantium quia saepe natus fuga repudiandae quod incidunt
                quaerat magni hic mollitia!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                 <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                 <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                 <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                 <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
