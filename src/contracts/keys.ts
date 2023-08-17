import { PublicKey } from "@solana/web3.js";
import {
  GLOBAL_STATE_SEED,
  VAULT_SEED,
  USER_STATE_SEED,
  PROGRAM_ID,
} from "./constants";

export const getGlobalStateKey = async () => {
  const [globalStateKey] = await asyncGetPda(
    [Buffer.from(GLOBAL_STATE_SEED)],
    PROGRAM_ID
  );
  return globalStateKey;
};

export const getVaultKey = async () => {
  const [vaultKey] = await asyncGetPda(
    [Buffer.from(VAULT_SEED)],
    PROGRAM_ID
  );
  return vaultKey;
};

export const getUserStateKey = async (userKey: PublicKey) => {
  const [userStateKey] = await asyncGetPda(
    [Buffer.from(USER_STATE_SEED), userKey.toBuffer()],
    PROGRAM_ID
  );
  return userStateKey;
};

const asyncGetPda = async (
  seeds: Buffer[],
  programId: PublicKey
): Promise<[PublicKey, number]> => {
  const [pubKey, bump] = await PublicKey.findProgramAddress(seeds, programId);
  return [pubKey, bump];
};
