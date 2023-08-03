import { createContext, useContext, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { config } from "../config";
import {
  getWalletSolBalance,
  getVaultSolBalance,
  getUserData
} from "../contracts/bean"

export const ContractContext = createContext({
  minersCount: 0,
  beanRewards: 0,
  walletSolBalance: 0,
  contractSolBalance: 0,
  toggleDataUpdate: () => {},
});

export const ContractProvider = ({ children }) => {
  const [minersCount, setMinersCount] = useState(0);
  const [beanRewards, setBeanRewards] = useState(0);
  const [walletSolBalance, setWalletSolBalance] = useState("0");
  const [contractSolBalance, setContractSolBalance] = useState("0");
  const [dataUpdate, setDataUpdate] = useState(false);

  const wallet = useWallet();
  useEffect(() => {
    getWalletSolBalance(wallet).then(bal => {
      console.log("getWalletSolBalance bal=", bal);
      setWalletSolBalance(bal);
    });
    getUserData(wallet).then(data => {
      if (data !== null) {
        console.log('userData =', data);
        setBeanRewards(data.beanRewards);
        setMinersCount(data.miners);
      }
    });
  }, [wallet]);

  useEffect(() => {
    getVaultSolBalance(wallet).then(bal => {
      setContractSolBalance(bal);
    });
  }, [wallet, dataUpdate]);

  return (
    <ContractContext.Provider
      value={{ 
        minersCount,
        beanRewards,
        walletSolBalance,
        contractSolBalance,
        toggleDataUpdate: () => setDataUpdate(!dataUpdate)
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => useContext(ContractContext);

