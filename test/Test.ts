import assert from "assert";
import { 
  TestHelpers,
  Trading_AdminChanged
} from "generated";
const { MockDb, Trading } = TestHelpers;

describe("Trading contract AdminChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Trading contract AdminChanged event
  const event = Trading.AdminChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Trading_AdminChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Trading.AdminChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualTradingAdminChanged = mockDbUpdated.entities.Trading_AdminChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedTradingAdminChanged: Trading_AdminChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualTradingAdminChanged, expectedTradingAdminChanged, "Actual TradingAdminChanged should be the same as the expectedTradingAdminChanged");
  });
});
