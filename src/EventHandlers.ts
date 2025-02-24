/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Trading,
  Trading_AdminChanged,
  Trading_AutomationCloseOrderInitiated,
  Trading_AutomationOpenOrderInitiated,
  Trading_BeaconUpgraded,
  Trading_DelegateAdded,
  Trading_DelegateRemoved,
  Trading_Done,
  Trading_Initialized,
  Trading_MarketCloseFailed,
  Trading_MarketCloseOrderInitiated,
  Trading_MarketCloseTimeoutExecuted,
  Trading_MarketOpenOrderInitiated,
  Trading_MarketOpenTimeoutExecuted,
  Trading_MarketOrdersTimeoutUpdated,
  Trading_MaxAllowedCollateralUpdated,
  Trading_OpenLimitCanceled,
  Trading_OpenLimitPlaced,
  Trading_OpenLimitUpdated,
  Trading_Paused,
  Trading_SlUpdated,
  Trading_TopUpCollateralExecuted,
  Trading_TpUpdated,
  Trading_TriggerTimeoutUpdated,
  Trading_Upgraded,
  Vault,
  Vault_AssetsSent,
  Vault_Transfer,
  Vault_ShareToAssetsPriceUpdated,
  Vault_RewardDistributed
} from "generated";

Trading.AdminChanged.handler(async ({ event, context }) => {
  const entity: Trading_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.Trading_AdminChanged.set(entity);
});

Trading.AutomationCloseOrderInitiated.handler(async ({ event, context }) => {
  const entity: Trading_AutomationCloseOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    _4: event.params._4,
  };

  context.Trading_AutomationCloseOrderInitiated.set(entity);
});

Trading.AutomationOpenOrderInitiated.handler(async ({ event, context }) => {
  const entity: Trading_AutomationOpenOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
  };

  context.Trading_AutomationOpenOrderInitiated.set(entity);
});

Trading.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: Trading_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.Trading_BeaconUpgraded.set(entity);
});

Trading.DelegateAdded.handler(async ({ event, context }) => {
  const entity: Trading_DelegateAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    delegate: event.params.delegate,
  };

  context.Trading_DelegateAdded.set(entity);
});

Trading.DelegateRemoved.handler(async ({ event, context }) => {
  const entity: Trading_DelegateRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    delegate: event.params.delegate,
  };

  context.Trading_DelegateRemoved.set(entity);
});

Trading.Done.handler(async ({ event, context }) => {
  const entity: Trading_Done = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    done: event.params.done,
  };

  context.Trading_Done.set(entity);
});

Trading.Initialized.handler(async ({ event, context }) => {
  const entity: Trading_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Trading_Initialized.set(entity);
});

Trading.MarketCloseFailed.handler(async ({ event, context }) => {
  const entity: Trading_MarketCloseFailed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
  };

  context.Trading_MarketCloseFailed.set(entity);
});

Trading.MarketCloseOrderInitiated.handler(async ({ event, context }) => {
  const entity: Trading_MarketCloseOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
  };

  context.Trading_MarketCloseOrderInitiated.set(entity);
});

Trading.MarketCloseTimeoutExecuted.handler(async ({ event, context }) => {
  const entity: Trading_MarketCloseTimeoutExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    tradeId: event.params.tradeId,
    order_0: event.params.order
        [0]
    ,
    order_1: event.params.order
        [1]
    ,
    order_2: event.params.order
        [2]
    ,
    order_3_0: event.params.order
        [3]
        [0]
    ,
    order_3_1: event.params.order
        [3]
        [1]
    ,
    order_3_2: event.params.order
        [3]
        [2]
    ,
    order_3_3: event.params.order
        [3]
        [3]
    ,
    order_3_4: event.params.order
        [3]
        [4]
    ,
    order_3_5: event.params.order
        [3]
        [5]
    ,
    order_3_6: event.params.order
        [3]
        [6]
    ,
    order_3_7: event.params.order
        [3]
        [7]
    ,
    order_3_8: event.params.order
        [3]
        [8]
    ,
  };

  context.Trading_MarketCloseTimeoutExecuted.set(entity);
});

Trading.MarketOpenOrderInitiated.handler(async ({ event, context }) => {
  const entity: Trading_MarketOpenOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
  };

  context.Trading_MarketOpenOrderInitiated.set(entity);
});

Trading.MarketOpenTimeoutExecuted.handler(async ({ event, context }) => {
  const entity: Trading_MarketOpenTimeoutExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    order_0: event.params.order
        [0]
    ,
    order_1: event.params.order
        [1]
    ,
    order_2: event.params.order
        [2]
    ,
    order_3_0: event.params.order
        [3]
        [0]
    ,
    order_3_1: event.params.order
        [3]
        [1]
    ,
    order_3_2: event.params.order
        [3]
        [2]
    ,
    order_3_3: event.params.order
        [3]
        [3]
    ,
    order_3_4: event.params.order
        [3]
        [4]
    ,
    order_3_5: event.params.order
        [3]
        [5]
    ,
    order_3_6: event.params.order
        [3]
        [6]
    ,
    order_3_7: event.params.order
        [3]
        [7]
    ,
    order_3_8: event.params.order
        [3]
        [8]
    ,
  };

  context.Trading_MarketOpenTimeoutExecuted.set(entity);
});

Trading.MarketOrdersTimeoutUpdated.handler(async ({ event, context }) => {
  const entity: Trading_MarketOrdersTimeoutUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
  };

  context.Trading_MarketOrdersTimeoutUpdated.set(entity);
});

Trading.MaxAllowedCollateralUpdated.handler(async ({ event, context }) => {
  const entity: Trading_MaxAllowedCollateralUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
  };

  context.Trading_MaxAllowedCollateralUpdated.set(entity);
});

Trading.OpenLimitCanceled.handler(async ({ event, context }) => {
  const entity: Trading_OpenLimitCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
  };

  context.Trading_OpenLimitCanceled.set(entity);
});

Trading.OpenLimitPlaced.handler(async ({ event, context }) => {
  const entity: Trading_OpenLimitPlaced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
  };

  context.Trading_OpenLimitPlaced.set(entity);
});

Trading.OpenLimitUpdated.handler(async ({ event, context }) => {
  const entity: Trading_OpenLimitUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
    newPrice: event.params.newPrice,
    newTp: event.params.newTp,
    newSl: event.params.newSl,
  };

  context.Trading_OpenLimitUpdated.set(entity);
});

Trading.Paused.handler(async ({ event, context }) => {
  const entity: Trading_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    paused: event.params.paused,
  };

  context.Trading_Paused.set(entity);
});

Trading.SlUpdated.handler(async ({ event, context }) => {
  const entity: Trading_SlUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
    newSl: event.params.newSl,
  };

  context.Trading_SlUpdated.set(entity);
});

Trading.TopUpCollateralExecuted.handler(async ({ event, context }) => {
  const entity: Trading_TopUpCollateralExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    topUpAmount: event.params.topUpAmount,
    newLeverage: event.params.newLeverage,
  };

  context.Trading_TopUpCollateralExecuted.set(entity);
});

Trading.TpUpdated.handler(async ({ event, context }) => {
  const entity: Trading_TpUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
    newTp: event.params.newTp,
  };

  context.Trading_TpUpdated.set(entity);
});

Trading.TriggerTimeoutUpdated.handler(async ({ event, context }) => {
  const entity: Trading_TriggerTimeoutUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
  };

  context.Trading_TriggerTimeoutUpdated.set(entity);
});

Trading.Upgraded.handler(async ({ event, context }) => {
  const entity: Trading_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Trading_Upgraded.set(entity);
});
// Vault Contract

Vault.Transfer.handler(async ({ event, context }) => {
  const entity: Vault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value:event.params.value,

  };

  context.Vault_Transfer.set(entity);
});

Vault.AssetsSent.handler(async ({ event, context }) => {
  const entity: Vault_AssetsSent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    assets: event.params.assets,

  };

  context.Vault_AssetsSent.set(entity);
});

Vault.RewardDistributed.handler(async ({ event, context }) => {
  const entity: Vault_RewardDistributed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    assets: event.params.assets,
    accRewardsPerToken: event.params.accRewardsPerToken,

  };

  context.Vault_RewardDistributed.set(entity);
});