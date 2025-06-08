import { CssBaseline, CssVarsProvider, IconButton, useColorScheme } from "@mui/joy";
import {
  Box,
  Typography,
  Sheet,
  Button,
  Card,
  CardContent,
  Divider,
  Stack
} from "@mui/joy";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

export const MuiJoy = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <MuiJoyContent />
    </CssVarsProvider>
  );
};

export default MuiJoy;

//

export const MuiJoyContent = () => {
    const { mode, setMode } = useColorScheme();

    return (
        <Box sx={{ p: 4 }}>      
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
                <IconButton
                    variant="outlined"
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                {mode === "light" ? <DarkMode /> : <LightMode />}
                </IconButton>
            </Box>

            <Typography level="h1" sx={{ mb: 2 }}>
                🎨 Welcome to Fuuwille MUI Joy Theme
            </Typography>
            <Typography level="body-lg" sx={{ mb: 4, maxWidth: 600 }}>
                Explore the customized Joy UI theme, designed for clarity, consistency, and flexibility across all components. Below are examples showcasing typical usage with the current design tokens.
            </Typography>

            <Stack spacing={3}>
                <Sheet
                    variant="soft"
                    color="primary"
                    sx={{ p: 3, borderRadius: "lg", maxWidth: 600 }}
                >
                    <Typography level="h3">Primary Sheet</Typography>
                    <Typography level="body-sm">
                        This sheet uses the primary color scheme and soft variant.
                    </Typography>
                </Sheet>

                <Card variant="outlined" sx={{ maxWidth: 600 }}>
                    <CardContent>
                        <Typography level="title-lg">Custom Card</Typography>
                        <Typography level="body-sm" sx={{ mt: 1 }}>
                            Cards can be styled using Joy’s variant system. This one uses
                            `outlined` with soft shadow and padding.
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Button variant="solid" color="success">
                            Try It Now
                        </Button>
                    </CardContent>
                </Card>

                <Box>
                    <Typography level="h4" gutterBottom>
                        Interactive Example
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="primary" variant="solid">
                        Primary
                        </Button>
                        <Button color="danger" variant="outlined">
                        Danger
                        </Button>
                        <Button color="neutral" variant="plain">
                        Neutral
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};
