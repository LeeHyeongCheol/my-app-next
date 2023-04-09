
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "Home";
  } else if (router.pathname === "/About") {
    activeItem = "About";
  } else if (router.pathname === "/ContachUs") {
    activeItem = "ContachUs";
  } else if (router.pathname === "/Admin") {
    activeItem = "Admin";
  } else if (router.pathname === "/Login") {
    activeItem = "Login";
  }

  function goLink(e, data) {
    if (data.name === "Home") {
      router.push("/");
    } else if (data.name === "About") {
      router.push("/About");
    } else if (data.name === "Admin") {
      router.push("/Admin");
    } else if (data.name === "Login") {
      router.push("/Login");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="Home" active={activeItem === "Home"} onClick={goLink} />
      <Menu.Item  name="About" active={activeItem === "About"} onClick={goLink}/>
      <Menu.Item  name="ContachUs" active={activeItem === "ContachUs"} onClick={()=>{
        router.push("/ContachUs")
      }}/>
      <Menu.Item  name="Admin" active={activeItem === "Admin"} onClick={goLink}/>
      <Menu.Item  name="Login" active={activeItem === "Login"} onClick={goLink}/>
    </Menu>
  );
}