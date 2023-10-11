import {
  Box,
  Select,
  IconButton,
  MenuItem,
  Typography,
  InputBase,
  useTheme,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";
import UserImage from "components/UserImage";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const notMobileScreen = useMediaQuery("(min-width: 1007px)");
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  //   const { picturePath } = useSelector((state) => state.user);

  const fullname = `${user.firstname} ${user.lastname}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="2rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Interak
        </Typography>
        {notMobileScreen && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="8px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* Desktop */}
      {notMobileScreen ? (
        <FlexBetween gap="2rem">
          <IconButton
            onClick={() => dispatch(setMode())}
            sx={{ fontSize: "1.5rem" }}
          >
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "1.5rem" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "1.5rem" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "1.5rem" }} />
          <Notifications sx={{ fontSize: "1.5rem" }} />
          <Help sx={{ fontSize: "1.5rem" }} />
          <FormControl variant="standard" value={fullname}>
            <Select
              value={fullname}
              sx={{
                backgroundColor: neutralLight,
                width: "4rem",
                borderRadius: "0.25rem",
                padding: "0 0.5rem",
                "& .MuiSvgIcon-root": {
                  pr: "0",
                  width: "1.8rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              {/* <MenuItem value={fullname}>
                <UserImage image={picturePath} size={"30px"} />
              </MenuItem> */}
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobile(!isMobile)}>
          <Menu />
        </IconButton>
      )}
      {/* Mobile */}
      {!notMobileScreen && isMobile && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          minWidth="18.75rem"
          maxWidth="31.25rem"
          backgroundColor={background}
        >
          {/* Close Icon */}
          <Box display="flex" justifyContent="flex-end" padding="1rem">
            <IconButton onClick={() => setIsMobile(!isMobile)}>
              <Close />
            </IconButton>
          </Box>
          {/* Menu Items */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "1rem" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "1rem" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "1rem" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "1rem" }} />
            <Notifications sx={{ fontSize: "1rem" }} />
            <Help sx={{ fontSize: "1rem" }} />
            <FormControl variant="standard" value={fullname}>
              <Select
                value={fullname}
                sx={{
                  backgroundColor: neutralLight,
                  width: "9.375rem",
                  borderRadius: "0.25rem",
                  padding: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullname}>
                  <Typography>{fullname}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
