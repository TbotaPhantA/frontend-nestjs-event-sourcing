export const mapEventNameAndAmountToColor = ({
  eventName,
  amount,
}: {
  eventName: string;
  amount: number;
}) => {
  const redBg = "red";
  const greenBg = "green";

  if (eventName === "InventoryWasAdjusted") {
    return amount > 0 ? greenBg : redBg;
  } else if (eventName === "ItemsWereShipped") {
    return redBg;
  } else if (eventName === "ItemsWereReceived") {
    return greenBg;
  }
  return "";
};
