export const customerDetails = {
  firstname: " Paul",
  surname: "Smith",
};

export const accounts = [
  {
    title: "Club Lloyds",
    type: "current",
    accountId: "66-66-66 / 12345678",
    balance: "£520.33",
    overdraft: "£500.00",
    transactions: [
      {
        date: "Thu 28 November",
        description: " UNITED UTILITIES W",
        type: "deb",
        amount: "£32.05",
        balance: "£1,034.32",
        icon: "direct-debit",
      },
      {
        date: "Wed 27 November",
        description: "J Bond",
        type: "cre",
        amount: "£705.00",
        balance: "£1,066.37",
        icon: "transfer",
      },
    ],
  },
  {
    title: "Club Lloyds Monthly Saver",
    type: "savings",
    accountId: "66-66-66 / 12345678",
    balance: "£120.10",
  },
  {
    title: "Club Lloyds Advantage ISA Saver",
    type: "savings",
    accountId: "66-66-66 / 12345678",
    balance: "£7429.10",
  },
];
