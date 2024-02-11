import './App.css'
import { Box, Container, Grid, Typography } from "@mui/material";
import { UserProfileRedux } from "src/component/UserProfileRedux.tsx";
import { useDispatch } from "react-redux";
import { UserProfileZustand } from "src/component/UserProfileZustand.tsx";
import { useUserStore } from "src/zustand/userStore.ts";
import { useEffect } from "react";
import { generateData } from "src/utils/dataGenerator.ts";
import { setUser as setUserRedux } from "src/redux/userSlice.ts"

function App() {
    const dispatch = useDispatch();
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        const userData = generateData();
        dispatch(setUserRedux(userData));
        setUser(userData);
    }, []);

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Box>
                        <Typography variant="h1">redux toolkit</Typography>
                        <UserProfileRedux />
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography variant="h1">zustand</Typography>
                        <UserProfileZustand />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App
