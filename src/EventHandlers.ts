/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BaseVault,
  BaseVault_AdminChanged,
  BaseVault_BeaconUpgraded,
  BaseVault_Upgraded,
  BaseVault_Deposit,
  BaseVault_Transfer,
  BaseVault_FeeReceiverChanged,
  BaseVault_Withdraw,
  ArbitrumVault,
  ArbitrumVault_Deposit,
  ArbitrumVault_Withdraw,
  ArbitrumVault_Transfer,
  ArbitrumVault_FeeReceiverChanged,
} from "generated";

BaseVault.AdminChanged.handler(async ({ event, context }) => {
  const entity: BaseVault_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.BaseVault_AdminChanged.set(entity);
});

BaseVault.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: BaseVault_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.BaseVault_BeaconUpgraded.set(entity);
});

BaseVault.Upgraded.handler(async ({ event, context }) => {
  const entity: BaseVault_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.BaseVault_Upgraded.set(entity);
});

BaseVault.Withdraw.handler(async ({ event, context }) => {
  const entity: BaseVault_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    reciever: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.BaseVault_Withdraw.set(entity);
});

BaseVault.Deposit.handler(async ({ event, context }) => {
  const entity: BaseVault_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.BaseVault_Deposit.set(entity);
});

BaseVault.Transfer.handler(async ({ event, context }) => {
  const entity: BaseVault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.BaseVault_Transfer.set(entity);
});

BaseVault.FeeReceiverChanged.handler(async ({ event, context }) => {
  const entity: BaseVault_FeeReceiverChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeReceiver: event.params.feeReceiver,
  };

  context.BaseVault_FeeReceiverChanged.set(entity);
});


// Arbitrum Event Handlers

ArbitrumVault.Withdraw.handler(async ({ event, context }) => {
  const entity: ArbitrumVault_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    reciever: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.ArbitrumVault_Withdraw.set(entity);
});

ArbitrumVault.Deposit.handler(async ({ event, context }) => {
  const entity: ArbitrumVault_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.ArbitrumVault_Deposit.set(entity);
});

ArbitrumVault.Transfer.handler(async ({ event, context }) => {
  const entity: ArbitrumVault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.ArbitrumVault_Transfer.set(entity);
});

ArbitrumVault.FeeReceiverChanged.handler(async ({ event, context }) => {
  const entity: ArbitrumVault_FeeReceiverChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeReceiver: event.params.feeReceiver,
  };

  context.ArbitrumVault_FeeReceiverChanged.set(entity);
});
