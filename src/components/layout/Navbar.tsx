import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        height: 60,
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
      }}
    >
      {/* 🔥 NAVBAR */}
            <AppBar
              position="static"
              elevation={0}
              sx={{
                background: (theme) => theme.palette.background.paper,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontWeight="bold">Learning Hub</Typography>
      
                <Button variant="outlined" onClick={toggleTheme}>
                  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </Button>
      
                {user ? (
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="body2">👋 {user.name}</Typography>
                    <Button variant="outlined" onClick={logout}>
                      Logout
                    </Button>
                  </Box>
                ) : (
                  <Button variant="contained" onClick={login}>
                    Login   
                    shared by <strong>John Doe</strong>
                    
                  </Button>
                )}
              </Toolbar>
            </AppBar>
    </Box>
  );
};

export default Navbar;