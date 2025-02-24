/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BaseFactory,
  BaseFactory_DestinationVaultRegistered,
  EthFactory,
  EthFactory_DestinationVaultRegistered,
  EthVault,
  EthVault_Transfer,
  EthVault_WithdrawLiquidity,
  EthVault_BaseAssetWithdraw,
  EthVault_UnderlyingWithdraw,
  BaseVault_UnderlyingWithdraw,
  BaseVault_Transfer,
  BaseVault_WithdrawLiquidity,
  BaseVault_BaseAssetWithdraw,
  BaseVault

} from "generated";

BaseFactory.DestinationVaultRegistered.contractRegister(
  async ({ event, context }) => {
    console.log("Vault added", event.params.vaultAddress);  
    context.addBaseVault(event.params.vaultAddress);
  },
  { preRegisterDynamicContracts: true }
);

BaseFactory.DestinationVaultRegistered.handler(async ({ event, context }) => {
  const entity: BaseFactory_DestinationVaultRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vaultAddress: event.params.vaultAddress,
    caller: event.params.caller,
  };

  context.BaseFactory_DestinationVaultRegistered.set(entity);
});


 EthFactory.DestinationVaultRegistered.contractRegister(
   async ({ event, context }) => {
     console.log("Vault added", event.params.vaultAddress);  
      context.addEthVault(event.params.vaultAddress);
    },
   { preRegisterDynamicContracts: true }
 );

EthFactory.DestinationVaultRegistered.handler(async ({ event, context }) => {
  const entity: EthFactory_DestinationVaultRegistered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vaultAddress: event.params.vaultAddress,
    caller: event.params.caller,
  };

  context.EthFactory_DestinationVaultRegistered.set(entity);
});

EthVault.Transfer.handler(async ({ event, context }) => {
  const entity: EthVault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value
  };

  context.EthVault_Transfer.set(entity);
});

EthVault.WithdrawLiquidity.handler(async ({ event, context }) => {
  const entity: EthVault_WithdrawLiquidity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpToken: event.params.lpToken,
    staking: event.params.staking,
    amount: event.params.amount
  };

  context.EthVault_WithdrawLiquidity.set(entity);
});

EthVault.BaseAssetWithdraw.handler(async ({ event, context }) => {
  const entity: EthVault_BaseAssetWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
    owner: event.params.owner,
    to: event.params.to
  };

  context.EthVault_BaseAssetWithdraw.set(entity);
});

EthVault.UnderlyingWithdraw.handler(async ({ event, context }) => {
  const entity: EthVault_UnderlyingWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
    owner: event.params.owner,
    to: event.params.to
  };

  context.EthVault_UnderlyingWithdraw.set(entity);
});


BaseVault.Transfer.handler(async ({ event, context }) => {
  const entity: BaseVault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value
  };

  context.BaseVault_Transfer.set(entity);
});

BaseVault.WithdrawLiquidity.handler(async ({ event, context }) => {
  const entity: BaseVault_WithdrawLiquidity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lpToken: event.params.lpToken,
    staking: event.params.staking,
    amount: event.params.amount
  };

  context.BaseVault_WithdrawLiquidity.set(entity);
});

BaseVault.BaseAssetWithdraw.handler(async ({ event, context }) => {
  const entity: BaseVault_BaseAssetWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
    owner: event.params.owner,
    to: event.params.to
  };

  context.BaseVault_BaseAssetWithdraw.set(entity);
});

BaseVault.UnderlyingWithdraw.handler(async ({ event, context }) => {
  const entity: BaseVault_UnderlyingWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
    owner: event.params.owner,
    to: event.params.to
  };

  context.BaseVault_UnderlyingWithdraw.set(entity);
});

//