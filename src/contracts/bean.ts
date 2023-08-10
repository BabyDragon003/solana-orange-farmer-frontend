import * as anchor from "@project-serum/anchor";
import {BN} from "@project-serum/anchor";
import {
  PublicKey,
  Keypair,
  Connection,
  Transaction,
  clusterApiUrl,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  TransactionSignature,
  TransactionInstruction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

    connection,
    wallet,
    anchor.Provider.defaultOptions()
  );
  const program = new anchor.Program(IDL, Constants.PROGRAM_ID, provider);
  return program;
};
export const getGlobalStateData = async (wallet: any) => {
  const program = getProgram(wallet);
  const globalStateKey = await keys.getGlobalStateKey();
  console.log("globalStateKey =", globalStateKey.toString());
  const stateData = await program.account.globalState.fetchNullable(
    globalStateKey
  );
  if (stateData === null) return null;
  return stateData;
};

export const getWalletSolBalance = async (wallet: any): Promise<String> => {
  if (wallet.publicKey === null || wallet.publicKey === undefined) return "0";
  let x = await connection.getBalance(wallet.publicKey);
  console.log('getWalletSolBalance x=', x);
  return new BigNumber(await connection.getBalance(wallet.publicKey)).div(
    LAMPORTS_PER_SOL
  ).toString();
};

export const getVaultSolBalance = async (wallet: any): Promise<String> => {
  // if (wallet.publicKey === null || wallet.publicKey === undefined) return "0";
  // const program = getProgram(wallet);
  const vaultKey = await keys.getVaultKey();
  return new BigNumber(await connection.getBalance(vaultKey)).div(
    LAMPORTS_PER_SOL
  ).toString();
};

export const getUserData = async (wallet: any): Promise<any> => {
  if (wallet.publicKey === null || wallet.publicKey === undefined) return null;
  console.log("getUserData");
  const program = getProgram(wallet);
  
  const vaultKey = await keys.getVaultKey();
  const vaultBal = await connection.getBalance(vaultKey);

  let userStateKey = await keys.getUserStateKey(wallet.publicKey);
  
  const stateData = await program.account.userState.fetchNullable(
    userStateKey
  );
  if (stateData === null) return null;

  const globalStateKey = await keys.getGlobalStateKey();
  const globalData = await program.account.globalState.fetchNullable(
    globalStateKey
  );
  if (globalData === null) return null;
  // getOrangesSinceLastHatch
  let secondsPassed = Math.min(globalData.orangesPerMiner.toNumber(), Date.now()/1000 - stateData.lastHatchTime.toNumber());
  console.log('stateData.claimedOranges.toNumber() =', stateData.claimedOranges.toNumber());
  console.log('secondsPassed =', secondsPassed);
  console.log("userStateKey =", userStateKey.toBase58());
  console.log('stateData =', stateData);
  console.log('stateData.user =', stateData.user.toBase58());
  console.log('stateData.miners =', stateData.miners.toNumber());
  let myOranges = stateData.claimedOranges.add(new BN(secondsPassed).mul(stateData.miners));
  console.log('myOranges =', myOranges.toNumber());
  console.log('globalData.marketOranges =', globalData.marketOranges.toNumber());
  console.log('new BN(vaultBal) =', new BN(vaultBal).toNumber());
  let beanRewards = calculateTrade(myOranges, globalData.marketOranges, new BN(vaultBal), globalData.psn, globalData.psnh);

  return {
    miners: stateData.miners.toString(),
    beanRewards: new BigNumber(beanRewards.toString()).div(
      LAMPORTS_PER_SOL
    ).toString()
  }
};
function calculateTrade(rt: BN, rs: BN, bs: BN, PSN: BN, PSNH: BN) {
    if (rt.toNumber() === 0) return new BN(0);
    console.log('calcTrade');
    console.log(rt.toNumber());
    console.log(rs.toNumber());
    console.log(bs.toNumber());
    console.log(PSN.toNumber());
    console.log(PSNH.toNumber());
    let x = PSN.mul(bs);
    let y = PSNH.add(PSN.mul(rs).add(PSNH.mul(rt)).div(rt));
    console.log('calcTrade');
    console.log(x.toNumber());
    console.log(y.toNumber());
    return x.div(y);
}
export const initialize = async (
  wallet: WalletContextState,
): Promise<string | null> => {
  if (wallet.publicKey === null) throw new WalletNotConnectedError();
  
  const program = getProgram(wallet);
  const tx = new Transaction().add(
    await program.methods
        .initialize(wallet.publicKey) // new_authority
        .accounts({
          authority: wallet.publicKey,
          globalState: await keys.getGlobalStateKey(),
          treasury: wallet.publicKey,
          vault: await keys.getVaultKey(),
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY
        })
        .instruction()
  );
  return await send(connection, wallet, tx);
};

export const web3_startMine = async (
  wallet: WalletContextState,
): Promise<string | null> => {
  if (wallet.publicKey === null) throw new WalletNotConnectedError();
  
  const program = getProgram(wallet);
  const tx = new Transaction().add(
    await program.methods
        .startMine() // new_authority
        .accounts({
          authority: wallet.publicKey,
          globalState: await keys.getGlobalStateKey(),
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY
        })
        .instruction()
  );
  return await send(connection, wallet, tx);
};

export const web3_setConfig = async (
  wallet: WalletContextState,
  solAmount: number
): Promise<string | null> => {
  if (wallet.publicKey === null) throw new WalletNotConnectedError();
  
  const program = getProgram(wallet);
  const tx = new Transaction().add(
    await program.methods
        .setConfig(new anchor.BN(solAmount * LAMPORTS_PER_SOL)) // new_authority
        .accounts({
          authority: wallet.publicKey,
          globalState: await keys.getGlobalStateKey(),
          vault: await keys.getVaultKey(),
          systemProgram: SystemProgram.programId,
          rent: SYSVAR_RENT_PUBKEY
        })
        .instruction()
  );
  return await send(connection, wallet, tx);
};


export const buyOranges = async (
  wallet: WalletContextState,
  referralKey: string,
  solAmount: number
): Promise<string | null> => {
  if (wallet.publicKey === null || wallet.publicKey === undefined) throw new WalletNotConnectedError();
  
  const program = getProgram(wallet);
  let globalStateKey = await keys.getGlobalStateKey();
  let globalData = await program.account.globalState.fetch(globalStateKey);
  let vaultKey = await keys.getVaultKey();
  let buyIx = await program.methods
    .buyOranges(new anchor.BN(solAmount * LAMPORTS_PER_SOL))
    .accounts({
      user: wallet.publicKey,
      globalState: globalStateKey,
      treasury: globalData.treasury,
      vault: vaultKey,
      userState: await keys.getUserStateKey(wallet.publicKey),
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY
    })
    .instruction();
  
  let hatchIx = await getHatchIx(program, wallet.publicKey, referralKey);
  let tx = new Transaction();
  tx.add(buyIx);
  tx.add(hatchIx);
  return await send(connection, wallet, tx);
};

export const getHatchIx = async (
  program: any,
  userKey: PublicKey,
  referralKey: string
): Promise<TransactionInstruction> => {
  let r = new PublicKey(referralKey);
  console.log("referralKey =", referralKey);
  console.log("userKey =", userKey.toBase58());
  if (referralKey == userKey.toBase58()) {
    r = Constants.TREASURY;
  }
  let ix = await program.methods
    .hatchOranges()
    .accounts({
      user: userKey,
      globalState: await keys.getGlobalStateKey(),
      vault: await keys.getVaultKey(),
      userState: await keys.getUserStateKey(userKey),
      referral: r,
      referralState: await keys.getUserStateKey(r),
    })
    .instruction()
  return ix;
};

export const hatchOranges = async (
  wallet: WalletContextState,
  referralKey: string
): Promise<string | null> => {
  if (wallet.publicKey === null || wallet.publicKey === undefined) throw new WalletNotConnectedError();
  
  const program = getProgram(wallet);
  const tx = new Transaction().add(
    await getHatchIx(program, wallet.publicKey, referralKey)
  );
  return await send(connection, wallet, tx);
};


export const sellOranges = async (
  wallet: WalletContextState,
): Promise<string | null> => {
  if (wallet.publicKey === null || wallet.publicKey === undefined) throw new WalletNotConnectedError();
  
  const program = getProgram(wallet);
  let globalStateKey = await keys.getGlobalStateKey();
  let globalData = await program.account.globalState.fetch(globalStateKey);
  let vaultKey = await keys.getVaultKey();
  const tx = new Transaction().add(
    await program.methods
      .sellOranges()
      .accounts({
        user: wallet.publicKey,
        globalState: globalStateKey,
        treasury: globalData.treasury,
        vault: vaultKey,
        userState: await keys.getUserStateKey(wallet.publicKey),
        systemProgram: SystemProgram.programId
      })
      .instruction()
  );
  return await send(connection, wallet, tx);
};

async function send(
  connection: Connection,
  wallet: WalletContextState,
  transaction: Transaction
) {
  const txHash = await sendTransaction(connection, wallet, transaction);
  if (txHash != null) {
    let confirming_id = showToast("Confirming Transaction ...", -1, 2);
    let res = await connection.confirmTransaction(txHash);
    console.log(txHash);
    toast.dismiss(confirming_id);
    if (res.value.err) showToast("Transaction Failed", 2000, 1);
    else showToast("Transaction Confirmed", 2000);
  } else {
    showToast("Transaction Failed", 2000, 1);
  }
  return txHash;
}


export async function sendTransaction(
  connection: Connection,
  wallet: WalletContextState,
  transaction: Transaction
) {
  if (wallet.publicKey === null || wallet.signTransaction === undefined)
    return null;
  try {
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.feePayer = wallet.publicKey;
    const signedTransaction = await wallet.signTransaction(transaction);
    const rawTransaction = signedTransaction.serialize();

    showToast("Sending Transaction ...", 500);
    // notify({
    //   message: "Transaction",
    //   description: "Sending Transaction ...",
    //   duration: 0.5,
    // });

    const txid: TransactionSignature = await connection.sendRawTransaction(
      rawTransaction,
      {
        skipPreflight: true,
        preflightCommitment: "processed",
      }
    );
    return txid;
  } catch (e) {
    console.log("tx e = ", e);
    return null;
  }
}

