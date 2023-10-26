import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "rgb(255 252 248)",
  marginBottom: 24,
  border: "1px solid #555",
});

const nutritionFacts = [
    <CardWrapper>
      <CardContent className="fact">
        <Typography variant="h5" sx={{ color: "black" }} >
          Miner Values
        </Typography>
        
        <Box paddingTop={2}>
          {nutritionFacts.map((f) => (
            <Grid container key={f.label} justifyContent="space-between">
              <Typography sx={{ color: "black" }} variant="body1" gutterBottom>
                {f.label}
              </Typography>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: 1}}>
                <div style={{width: "100%", height: "1px", borderTop: "1px dotted black"}}></div>
              </div>
              <Typography sx={{ color: "black" }} gutterBottom>{f.value}%</Typography>
            </Grid>
          ))}
        </Box>
      </CardContent>
    </CardWrapper>
  );
}
