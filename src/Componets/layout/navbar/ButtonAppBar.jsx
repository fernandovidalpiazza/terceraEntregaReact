import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SimpleBadge from "../../common/cartWiget/CartWidget";
import { Link, Outlet } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dkhpws3ib/image/upload/v1686700110/cld-sample-3.jpg"
              alt="logo jugando basket felices"
              style={{ width: "50px", height: "50px" }}
            />
          </Link>

          <p>Importalo</p>

          <IconButton></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Link to = "/" style={{color: "white"}}>
          <Button color="inherit">Ver Todo</Button>
          </Link>

          <Link to = "/category/deportivas" style={{color: "white"}}>
          <Button color="inherit"> Deportivo </Button>
          </Link>

          <Link to = "/category/formal" style={{color: "white"}}>
          <Button color="inherit"> Formal </Button>
          </Link>

          <SimpleBadge />
        </Toolbar>
      </AppBar>

      <Outlet />
    </Box>
  );
}
