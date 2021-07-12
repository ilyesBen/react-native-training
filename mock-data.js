const mockData = [
  {
    id: 1,
    startDatetime: "2020-04-10T09:00:00+00:00",
    endDatetime: "2020-04-10T18:00:00+00:00",
    leaveType: "annual",
    isApproved: true,
    reason: "A relative is going to live abroad",
  },
  {
    id: 2,
    startDatetime: "2020-02-07T09:00:00+00:00",
    endDatetime: "2020-02-12T18:00:00+00:00",
    leaveType: "maternity",
    isApproved: false,
    reason: "We're having a baby! woohoo",
  },
  {
    id: 3,
    startDatetime: "2020-09-05T09:00:00+00:00",
    endDatetime: "2020-09-07T18:00:00+00:00",
    leaveType: "sickness",
    isApproved: true,
    reason: "I had a stomach bug",
  },
  {
    id: 4,
    startDatetime: "2020-03-01T09:00:00+00:00",
    endDatetime: "2020-03-11T18:00:00+00:00",
    leaveType: "compassionate",
    isApproved: false,
    reason: "Lost my puppy cat",
  },
  {
    id: 5,
    startDatetime: "2020-06-01T09:00:00+00:00",
    endDatetime: "2020-06-11T18:00:00+00:00",
    leaveType: "annual",
    isApproved: false,
    reason: "have some important business",
  },
  {
    id: 6,
    startDatetime: "2020-05-19T09:00:00+00:00",
    endDatetime: "2020-05-24T18:00:00+00:00",
    leaveType: "compassionate",
    isApproved: false,
    reason: "My lovely dog passed away",
  },
  {
    id: 7,
    startDatetime: "2020-10-05T09:00:00+00:00",
    endDatetime: "2020-10-12T18:00:00+00:00",
    leaveType: "maternity",
    isApproved: true,
    reason: "We are having another one!",
  },
  {
    id: 8,
    startDatetime: "2021-10-05T09:00:00+00:00",
    endDatetime: "2021-10-12T18:00:00+00:00",
    leaveType: "maternity",
    isApproved: true,
    reason: "And another one!",
  },
];

const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
