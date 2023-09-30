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
        contractSolBalance,
        toggleDataUpdate: () => setDataUpdate(!dataUpdate)
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => useContext(ContractContext);

