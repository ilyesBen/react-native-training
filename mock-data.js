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
];

const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
