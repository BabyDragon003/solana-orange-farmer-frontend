import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import { showToast } from "../../contracts/utils";
const CardWrapper = styled(Card)({
  background: "transparent",
  border: "1px solid #555",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 10,
  fontWeight: 300,
  padding: "10px 12px",
  borderRadius: 0,
  border: "1px solid #555",
  background: "white",
  width: "100%",
  outline: "none",
  color: theme.palette.primary.main,
}));

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;
  const copyToClipBoard = () => {
    if (!address) return;
    navigator.clipboard.writeText(link)
    showToast("Referral Link copied to Clipboard", 2000);
    console.log("copied");
  }
  return (
    <CardWrapper>

      <CardContent className="fact">
        <Typography gutterBottom sx={{ color: "black" }} variant="h5" textAlign="center">
          Referral Link
        </Typography>
        <Input value={address ? link : ""} readOnly/>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={copyToClipBoard}
          className="custom-button"
          marginTop={2}
          style={{ marginTop: "5px" }}
        >
          COPY TO CLIPBOARD
        </Button>
      </CardContent>
      <Typography sx={{ color: "black" }}
        textAlign="center"
        variant="body2"
        paddingX={3}
        paddingY={2}
      >
        Earn 12% of the SOL used to compound from anyone who uses your
        referral link
      </Typography>
    </CardWrapper>
  );
}
