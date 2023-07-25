import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { config } from "../../config";
// import solIcon from "../assets/SOLIcon.png";
      <Grid container justifyContent="center" spacing={3} marginTop={4}>
        <Grid item>
          <a href="https://twitter.com/orange_farmer" target="__blank">
            <img src={twIcon} alt="" width={44} height={44} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/orangefarmer" target="__blank">
            <img src={tgIcon} alt="" width={46} height={46} />
          </a>
        </Grid>
      </Grid>
      <center>
      <Typography variant="h8" marginTop={4}>
        <br/>
        COPYRIGHT © 2024 Orange Farmer
      </Typography>
      </center>
    </div>
  );
}
