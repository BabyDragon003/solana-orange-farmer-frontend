import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import logo from "../../assets/FullLogo.png";
import "../../index.css";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <img src={logo}  className="logo" alt="" style={{ marginTop: "-20px"}}/>
      <hr />
      <Typography variant="h6" marginTop={1} style={{color: "black"}}>
        <b>Start mining today and reap the benefits of our SOL reward pool. Earn income of up
          to 8% daily and a referral bonus of up to 12%.</b>
       <strong>(<a href="https://banana-miner-organization.gitbook.io/" target="_blank" style={{ color: "black" }}>Documentation</a>)</strong>
      </Typography>

      <Typography variant="h7" marginTop={2} textAlign={'left'} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <br/>
          <span style={{ display: 'block', paddingLeft: "10px", paddingRight: "10px" }}><b>#1 - BUY ORANGES:</b> Start by using your SOL to purchase oranges.</span>
          <span style={{ display: 'block', paddingLeft: "10px", paddingRight: "10px" }}><b>#2 - COMPOUND:</b> To maximize your earnings, click on the <b>"COMPOUND"</b> button <br/>
            This action will automatically reinvest your rewards back into Oranges</span>
            <span style={{ display: 'block', paddingLeft: "10px", paddingRight: "10px" }}><b>#3 - CLAIM REWARDS:</b> This will transfer your accumulated SOL rewards directly into your wallet.</span>
      </Typography>

      <Typography variant="h7" marginTop={2}>
      <br/>
      <i>The key to maximizing your rewards lies in the quantity of oranges you hold and how frequently you compound them. The more oranges you accumulate and the more often you reinvest your rewards, the greater the potential for earning more rewards</i>

      </Typography>
    </Wrapper>
  );
}
