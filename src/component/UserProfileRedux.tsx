import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "src/redux/store.ts";

export function UserProfileRedux() {
    const [userData] = useSelector((state: RootState) => [state.user]);

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Grid container spacing={2}  alignItems="center">
                    <Grid item xs={12} sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Avatar alt={userData.name} src={userData.image} sx={{ width: 56, height: 56 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="div">
                            {userData.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            {userData.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData.address}, {userData.city}, {userData.state}, {userData.zip}, {userData.country}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData.company} - {userData.job}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {userData.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Join Date: {new Date(userData.date).toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
