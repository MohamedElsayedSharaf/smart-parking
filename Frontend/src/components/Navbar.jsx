import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { toggleMode } from "../state";
import {
  ArrowDropDownOutlined,
  NotificationAddOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import profileImage from "../assets/profile.jpg";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchor, setAnchor] = useState(null);
  const isOpen = Boolean(anchor);
  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <div>
      <AppBar
        sx={{ position: "static", background: "none", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div className="flex items-center justify-between">
            <IconButton
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
            >
              <MenuIcon />
            </IconButton>
            <div
              className="flex items-center justify-between rounded-lg py-0.5 px-5"
              style={{ backgroundColor: theme.palette.background.alt }}
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <IconButton>
              <NotificationAddOutlined
                sx={{ fontSize: "27px" }}
                color="error"
              />
            </IconButton>
            <IconButton onClick={() => dispatch(toggleMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon sx={{ fontSize: "27px" }} />
              ) : (
                <LightModeIcon sx={{ fontSize: "27px" }} />
              )}
            </IconButton>
            <IconButton>
              <SettingsIcon sx={{ fontSize: "27px" }} />
            </IconButton>
            <div className="flex items-center justify-between">
              <Button
                onClick={handleClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textTransform: "none",
                  gap: "1rem",
                }}
              >
                <Box
                  component="img"
                  alt="profile"
                  src={profileImage}
                  height="32px"
                  width="32px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.85rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.75rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <ArrowDropDownOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                />
              </Button>
              <Menu
                anchorEl={anchor}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                sx={{}}
                >
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
