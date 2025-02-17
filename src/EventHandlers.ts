/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxy_AdminChanged,
  TransparentUpgradeableProxy_AutomationCloseOrderInitiated,
  TransparentUpgradeableProxy_AutomationOpenOrderInitiated,
  TransparentUpgradeableProxy_BeaconUpgraded,
  TransparentUpgradeableProxy_DelegateAdded,
  TransparentUpgradeableProxy_DelegateRemoved,
  TransparentUpgradeableProxy_Done,
  TransparentUpgradeableProxy_Initialized,
  TransparentUpgradeableProxy_MarketCloseFailed,
  TransparentUpgradeableProxy_MarketCloseOrderInitiated,
  TransparentUpgradeableProxy_MarketCloseTimeoutExecuted,
  TransparentUpgradeableProxy_MarketOpenOrderInitiated,
  TransparentUpgradeableProxy_MarketOpenTimeoutExecuted,
  TransparentUpgradeableProxy_MarketOrdersTimeoutUpdated,
  TransparentUpgradeableProxy_MaxAllowedCollateralUpdated,
  TransparentUpgradeableProxy_OpenLimitCanceled,
  TransparentUpgradeableProxy_OpenLimitPlaced,
  TransparentUpgradeableProxy_OpenLimitUpdated,
  TransparentUpgradeableProxy_Paused,
  TransparentUpgradeableProxy_SlUpdated,
  TransparentUpgradeableProxy_TopUpCollateralExecuted,
  TransparentUpgradeableProxy_TpUpdated,
  TransparentUpgradeableProxy_TriggerTimeoutUpdated,
  TransparentUpgradeableProxy_Upgraded,
} from "generated";

TransparentUpgradeableProxy.AdminChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.TransparentUpgradeableProxy_AdminChanged.set(entity);
});

TransparentUpgradeableProxy.AutomationCloseOrderInitiated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AutomationCloseOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    _4: event.params._4,
  };

  context.TransparentUpgradeableProxy_AutomationCloseOrderInitiated.set(entity);
});

TransparentUpgradeableProxy.AutomationOpenOrderInitiated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AutomationOpenOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
  };

  context.TransparentUpgradeableProxy_AutomationOpenOrderInitiated.set(entity);
});

TransparentUpgradeableProxy.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.TransparentUpgradeableProxy_BeaconUpgraded.set(entity);
});

TransparentUpgradeableProxy.DelegateAdded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_DelegateAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    delegate: event.params.delegate,
  };

  context.TransparentUpgradeableProxy_DelegateAdded.set(entity);
});

TransparentUpgradeableProxy.DelegateRemoved.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_DelegateRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    delegator: event.params.delegator,
    delegate: event.params.delegate,
  };

  context.TransparentUpgradeableProxy_DelegateRemoved.set(entity);
});

TransparentUpgradeableProxy.Done.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Done = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    done: event.params.done,
  };

  context.TransparentUpgradeableProxy_Done.set(entity);
});

TransparentUpgradeableProxy.Initialized.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.TransparentUpgradeableProxy_Initialized.set(entity);
});

TransparentUpgradeableProxy.MarketCloseFailed.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MarketCloseFailed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
  };

  context.TransparentUpgradeableProxy_MarketCloseFailed.set(entity);
});

TransparentUpgradeableProxy.MarketCloseOrderInitiated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MarketCloseOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
  };

  context.TransparentUpgradeableProxy_MarketCloseOrderInitiated.set(entity);
});

TransparentUpgradeableProxy.MarketCloseTimeoutExecuted.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MarketCloseTimeoutExecuted = {
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

  context.TransparentUpgradeableProxy_MarketCloseTimeoutExecuted.set(entity);
});

TransparentUpgradeableProxy.MarketOpenOrderInitiated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MarketOpenOrderInitiated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
  };

  context.TransparentUpgradeableProxy_MarketOpenOrderInitiated.set(entity);
});

TransparentUpgradeableProxy.MarketOpenTimeoutExecuted.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MarketOpenTimeoutExecuted = {
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

  context.TransparentUpgradeableProxy_MarketOpenTimeoutExecuted.set(entity);
});

TransparentUpgradeableProxy.MarketOrdersTimeoutUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MarketOrdersTimeoutUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_MarketOrdersTimeoutUpdated.set(entity);
});

TransparentUpgradeableProxy.MaxAllowedCollateralUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MaxAllowedCollateralUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_MaxAllowedCollateralUpdated.set(entity);
});

TransparentUpgradeableProxy.OpenLimitCanceled.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OpenLimitCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
  };

  context.TransparentUpgradeableProxy_OpenLimitCanceled.set(entity);
});

TransparentUpgradeableProxy.OpenLimitPlaced.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OpenLimitPlaced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
  };

  context.TransparentUpgradeableProxy_OpenLimitPlaced.set(entity);
});

TransparentUpgradeableProxy.OpenLimitUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OpenLimitUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
    newPrice: event.params.newPrice,
    newTp: event.params.newTp,
    newSl: event.params.newSl,
  };

  context.TransparentUpgradeableProxy_OpenLimitUpdated.set(entity);
});

TransparentUpgradeableProxy.Paused.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    paused: event.params.paused,
  };

  context.TransparentUpgradeableProxy_Paused.set(entity);
});

TransparentUpgradeableProxy.SlUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_SlUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
    newSl: event.params.newSl,
  };

  context.TransparentUpgradeableProxy_SlUpdated.set(entity);
});

TransparentUpgradeableProxy.TopUpCollateralExecuted.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_TopUpCollateralExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    topUpAmount: event.params.topUpAmount,
    newLeverage: event.params.newLeverage,
  };

  context.TransparentUpgradeableProxy_TopUpCollateralExecuted.set(entity);
});

TransparentUpgradeableProxy.TpUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_TpUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tradeId: event.params.tradeId,
    trader: event.params.trader,
    pairIndex: event.params.pairIndex,
    index: event.params.index,
    newTp: event.params.newTp,
  };

  context.TransparentUpgradeableProxy_TpUpdated.set(entity);
});

TransparentUpgradeableProxy.TriggerTimeoutUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_TriggerTimeoutUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_TriggerTimeoutUpdated.set(entity);
});

TransparentUpgradeableProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.TransparentUpgradeableProxy_Upgraded.set(entity);
});
