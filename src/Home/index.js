import { flexbox, styled } from "@mui/system";

import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useWallet } from "@solana/wallet-adapter-react";
import Footer from "./components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import {
  WalletDialogProvider as MaterialUIWalletDialogProvider,
  WalletMultiButton as MaterialUIWalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-material-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../index.css";
import SolanaHeartImg from './assets/solana-heart.svg';
import CrayonHeartImg from './assets/crayon-heart.svg';

const Wrapper = styled("div")(({ theme }) => ({
  position: 'relative',
  maxWidth: 500,
  margin: "0 auto",
  
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const WalletButton = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row-reverse'
}))

export default function Home() {
  //const { address } = useAuthContext();
  const wallet = useWallet();

  return (
    <div>
      <Wrapper>
          <WalletButton>
            <MaterialUIWalletMultiButton variant="text" style={{
              border: "2px solid black",
              fontWeight: 900,
              background: "transparent",
              borderRadius: '10px',
              color: 'black'
            }}/>
          </WalletButton>
          <Header />
          <BakeCard />
          <NutritionFacts />
          <ReferralLink address={wallet.publicKey && wallet.publicKey.toBase58()} />
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </Wrapper>
    </div>
  );
}
