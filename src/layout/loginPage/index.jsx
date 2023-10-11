import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import LoginForm from "components/LoginForm";

const LoginPage = () => {
  const theme = useTheme();
  const notMobileScreen = useMediaQuery("(min-width: 1007px)");

  return (
    <Box
      minHeight="100vh"
      minWidth="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {notMobileScreen ? (
        <>
          <Box
            minHeight="100vh"
            flex="0 0 60%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Typography fontWeight="bold" fontSize="7rem" color="primary">
              Interak
            </Typography>
          </Box>
          <Box
            minHeight="100vh"
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            backgroundColor={theme.palette.background.alt}
          >
            <Box width="400px">
              <Typography fontSize="3rem" color="primary">
                Welcome!
              </Typography>
              <Box padding="2rem 0">
                <LoginForm />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          minHeight="400px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          margin="0.2rem 2rem"
          borderRadius="0.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Box>
            <Typography fontWeight="bold" fontSize="2.25rem" color="primary">
              Interak
            </Typography>
            <Box>
              <LoginForm />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;
