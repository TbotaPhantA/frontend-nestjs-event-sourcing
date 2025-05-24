export const mapEventNameToTitle = ({
  eventName,
}: {
  eventName: string;
}): string => {
  if (eventName === "InventoryWasAdjusted") {
    return "Проведена инвентаризация";
  } else if (eventName === "ItemsWereShipped") {
    return "Товары были отгружены";
  } else if (eventName === "ItemsWereReceived") {
    return "Товары были разгружены";
  }
  return "Что,";
};
